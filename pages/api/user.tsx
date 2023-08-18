import { connectToDatabase } from '@/api/utils/dbConnect';
import UserModel from '@/api/models/User';
import bcrypt from "bcrypt";
import { ErrorResponse, successResponseWithData, notFoundResponse } from "@/api/utils/apiResponse";
export default async function handler ( req: any, res: any )
{
      const db = await connectToDatabase(); // connect DB
      if ( req.method === 'POST' ) {
            try {
                  const { fullName, username, password, about } = req.body;
                  const user: any = await UserModel.findOne( { username: username } );
                  console.log(user)
                  if(!user){
                        const hashPassword = await bcrypt.hash(password,10);
                        var newUser = new UserModel({
                              fullName: fullName,
                              username: username,
                              password: hashPassword,
                              about: about,
                        });
                        await newUser.save();
                        return successResponseWithData(res,"Registration Success.", newUser); 
                  }
                  return ErrorResponse(res,"User already exist.");
            } catch ( error ) {
                  console.log( error )
                  res.status( 500 ).json( { error: 'Internal Server Error' } );
            }
      }else if ( req.method === 'GET' ) {
            try {
                  const { username } = req.query;
                  const user: any = await UserModel.findOne( { username: username } );
                  if(user){
                        return successResponseWithData(res,"Fetched User.", user);                   
                  }else{
                        return notFoundResponse(res,"User not found.");
                  }
            } catch ( error ) {
                  console.log( error )
                  res.status( 500 ).json( { error: 'Internal Server Error' } );
            }     
      }
}
