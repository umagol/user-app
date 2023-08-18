import { connectToDatabase } from '@/api/utils/dbConnect';
import UserModel from '@/api/models/User';
import { validate } from '@/api/middleware/validator';
import { body, validationResult, check } from "express-validator";
import bcrypt from "bcrypt";
import { ErrorResponse, successResponseWithData, validationErrorWithData} from "@/api/utils/apiResponse";
export default async function handler ( req: any, res: any )
{
      const db = await connectToDatabase(); // connect DB
      if ( req.method === 'POST' ) {
            const validationRules = [
                  body( "username" ).isLength( { min: 1 } ).trim().withMessage( "UserName must be specified." ),
                  body( "password" ).isLength( { min: 1 } ).trim().withMessage( "Password must be specified." ),
                  check( "username" ).escape(),
                  check( "password" ).escape(),
            ]
            await validate(req, res,);
            try {
                  const user = await UserModel.findOne( { username: req.body.username } )
                  if ( user ) {
                        //Check account status.
                        if ( user.status ) {
                              //Compare given password with db's hash.
                              const verifyPassword = await bcrypt.compare( req.body.password, user.password );
                              if ( verifyPassword ) {
                                    // Check User's account active or not.
                                    let userData = {
                                          _id: user._id,
                                          fullname: user.fullName,
                                          username: user.username,
                                    };
                                    return successResponseWithData( res, "Login Success.", userData );
                              } else {
                                    return validationErrorWithData( res, "Username or Password wrong.",{} );
                              }
                        } else {
                              return validationErrorWithData( res, "Account is not verified. Please verified" ,{});
                        }
                  } else {
                        return validationErrorWithData( res, "Username or Password wrong.",{} );
                  }
            } catch ( error ) {
                  return ErrorResponse( res, "Internal Server Error" );
            }
      } 
}

