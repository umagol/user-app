import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
function Login (props: any)
{
      const { control, handleSubmit, formState: { errors } }: any = useForm();
      const router = useRouter();
      const onSubmit = ( data: any ) =>
      {
            router.push(`/${data.username}`);
      };
      return (
            <>
                  <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-gradient-to-b from-blue-500 to-blue-800"
                                    style={{ backgroundImage: `url('images/bg.jpg')` }}>
                        <div className="bg-white shadow-lg rounded-lg p-8 w-80">
                              <div className="flex justify-center mb-3">
                                    <Image src="/images/logo.png" alt="logo" width={ 30 } height={ 30 } />
                              </div>
                              <h2 className=" text-center text-2xl font-semibold mb-4">Login</h2>
                              <form onSubmit={ handleSubmit( onSubmit ) }>
                                    <div className="mb-4">
                                          <div className="relative">
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                      <FontAwesomeIcon icon={ faUser } className="text-gray-400" />
                                                </span>
                                                <Controller
                                                      name="username"
                                                      control={ control }
                                                      rules={ {
                                                            required: 'Username is required',
                                                      } }
                                                      render={ ( { field }: any ): any => (
                                                            <input
                                                                  { ...field }
                                                                  type="text"
                                                                  className={ `border ${ errors.username ? 'border-red-500' : 'border-gray-300' } rounded-lg shadow-sm w-full py-2 px-10 focus:outline-none focus:ring-2 focus:ring-blue-400` }
                                                                  placeholder="Username"
                                                            />
                                                      ) }
                                                />
                                          </div>
                                                { errors.username && <p className="text-red-500 text-sm">{ errors.username.message }</p> }
                                    </div>
                                    <div className="mb-4">
                                          <div className="relative">
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                      <FontAwesomeIcon icon={ faLock } className="text-gray-400" />
                                                </span>
                                                <Controller
                                                      name="password"
                                                      control={ control }
                                                      rules={ {
                                                            required: 'Password is required',
                                                            minLength: {
                                                                  value: 8,
                                                                  message: 'Password must be at least 8 characters',
                                                            },
                                                            pattern: {
                                                                  value: /\d/,
                                                                  message: 'Password must contain at least one number',
                                                            },
                                                      } }
                                                      render={ ( { field } ) => (
                                                            <input
                                                                  { ...field }
                                                                  type="password"
                                                                  className={ `border ${ errors.password ? 'border-red-500' : 'border-gray-300' } rounded-lg shadow-sm w-full py-2 px-10 focus:outline-none focus:ring-2 focus:ring-blue-400` }
                                                                  placeholder="Password"
                                                            />
                                                      ) }
                                                />
                                          </div>
                                                { errors.password && <p className="text-red-500 text-sm">{ errors.password.message }</p> }
                                    </div>
                                    <label className="flex items-center mb-4">
                                          <Controller
                                                name="rememberMe"
                                                control={ control }
                                                render={ ( { field } ) => (
                                                      <input
                                                            { ...field }
                                                            type="checkbox"
                                                            className="mr-2"
                                                      />
                                                ) }
                                          />
                                          Remember me
                                    </label>
                                    <button
                                          type="submit"
                                          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                                    >
                                          Sign In
                                    </button>
                                    <div className="text-center mt-4">
                                          <a href="#" className="text-blue-500 hover:underline text-sm">
                                                Forgot Password?
                                          </a>
                                    </div>
                              </form>
                        </div>
                  </div>
            </>
      )
}
Login.pageTitle = "My App | Login";
export default  Login;