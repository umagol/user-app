import { connectToDatabase } from '@/app/utils/dbConnect';
import UserModel from '@/app/models/User';
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from 'next/server';



export async function POST ( req: Request )
{
      try {
            const json = await req.json();
            const { fullName, username, password, about } = json;
            const user: any = await UserModel.findOne( { username: username } );
            if ( !user ) {
                  const hashPassword = await bcrypt.hash( password, 10 );
                  var newUser = new UserModel( {
                        fullName: fullName,
                        username: username,
                        password: hashPassword,
                        about: about,
                  } );
                  await newUser.save();
                  return new NextResponse( JSON.stringify( { data: newUser, status: 1, message: "Registration Success." } ), {
                        status: 200,
                        headers: { "Content-Type": "application/json" },
                  } );
            }
            return new NextResponse( JSON.stringify( { data: {}, status: 0, message: "User already exist." } ), {
                  status: 400,
                  headers: { "Content-Type": "application/json" },
            } );
      } catch ( error ) {
            return new NextResponse( JSON.stringify( { data: {}, status: 1, message: "Internal Server Error" } ), {
                  status: 500,
                  headers: { "Content-Type": "application/json" },
            } );
      }

}

export async function GET ( req: NextRequest )
{
      try {
            const db = await connectToDatabase(); // connect DB
            const username = req.nextUrl.searchParams.get( "username" );;
            const user: any = await UserModel.findOne( { username: username } );
            if ( user ) {
                  return new NextResponse( JSON.stringify( { data: user, status: 1, message: "Fetched User." } ), {
                        status: 200,
                        headers: { "Content-Type": "application/json" },
                  } );
            } else {
                  return new NextResponse( JSON.stringify( { data: null, status: 0, message: "User not Found." } ), {
                        status: 404,
                        headers: { "Content-Type": "application/json" },
                  } );
            }
      } catch ( error ) {
            return new NextResponse( JSON.stringify( { status: 0, message: "Internal server error" } ), {
                  status: 500,
                  headers: { "Content-Type": "application/json" },
            } );
      }
}