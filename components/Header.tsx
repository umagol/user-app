import React from "react";
import Link from "next/link";
import '@/styles/globals.css'
import Image from "next/image";

export default function Header ( props: any ): any
{
      console.log(props)
      return (
            <>
                  <nav className="w-full bg-white-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        <div className="justify-between px-4 lg:max-w-7xl md:items-center md:flex md:px-8">
                              <Link href="/" legacyBehavior>
                              <div className="flex items-center">
                                    <Image src="/images/logo.png" alt="logo" width={ 30 } height={ 30 } />
                                    <div className="mr-3 ml-3 flex grid-cols-1 items-center justify-between py-3 md:py-5 md:block">
                                          <Link href="/login" legacyBehavior>
                                                <h2 className="text-2xl text-black font-bold">User App</h2>
                                          </Link>
                                    </div>
                              </div>
                              </Link>
                              { props.page=="login" ? null : (
                                    <div className="flex items-center space-x-4">
                                          <div className="flex-1">
                                                <Link href="/login" legacyBehavior>
                                                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                                            Login
                                                      </button>
                                                </Link>
                                          </div>
                                    </div>)
                              }
                        </div>
                  </nav>
            </>
      );
}
