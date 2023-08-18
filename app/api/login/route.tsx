import { connectToDatabase } from '@/app/utils/dbConnect';
import UserModel from '@/app/models/User';
import bcrypt from "bcrypt";
import { NextResponse } from 'next/server';
export async function POST ( req: Request )
{
      const db = await connectToDatabase(); // connect DB
      const json = await req.json();
      if(!json.username && !json.password){
            return new NextResponse( JSON.stringify( { data: {}, status: 0, message: "required field is missing." } ), {
                  status: 400,
                  headers: { "Content-Type": "application/json" },
            } );
      }
      try {
            const user = await UserModel.findOne( { username: json.username } )
            if ( user ) {
                  //Check account status.
                  if ( user.status ) {

                        //Compare given password with db's hash.
                        const verifyPassword = await bcrypt.compare( json.password, user.password );
                        if ( verifyPassword ) {

                              // Check User's account active or not.
                              let userData = {
                                    _id: user._id,
                                    fullname: user.fullName,
                                    username: user.username,
                              };

                              return new NextResponse( JSON.stringify( { data: userData, status: 1 } ), {
                                    status: 201,
                                    headers: { "Content-Type": "application/json" },
                              } );
                        } else {
                              return new NextResponse( JSON.stringify( { data: {}, status: 0, message: "Username or Password wrong." } ), {
                                    status: 400,
                                    headers: { "Content-Type": "application/json" },
                              } );
                        }
                  } else {
                        return new NextResponse( JSON.stringify( { data: {}, status: 0, message: "Username or Password wrong." } ), {
                              status: 400,
                              headers: { "Content-Type": "application/json" },
                        } );
                  }
            } else {
                  return new NextResponse( JSON.stringify( { data: {}, status: 0, message: "Username or Password wrong." } ), {
                        status: 400,
                        headers: { "Content-Type": "application/json" },
                  } );
            }
      } catch ( error ) {
            return new NextResponse( JSON.stringify( { data: {}, status: 0, message: "Internal Server Error" } ), {
                  status: 500,
                  headers: { "Content-Type": "application/json" },
            } );
      }
}