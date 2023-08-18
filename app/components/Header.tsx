'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { faUser, faBriefcase, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter, usePathname } from 'next/navigation'

export default function Header ( props: any ): any
{  
      const pathname = usePathname();
      const router = useRouter();
      return (
            <>
                  <header className="bg-white-500 py-4">
                        <div className="container mx-auto flex justify-between items-center">
                              <div className="flex items-center space-x-4">
                                          <Image src="/images/logo.png" className="w-8 h-8" alt="logo" width={ 30 } height={ 30 } />
                                          <h1 className="text-black text-lg font-semibold">User App</h1>
                              </div>
                              <nav className="space-x-6">
                                    <Link href="/" legacyBehavior>
                                          <a className="text-black hover:text-cyan-600">
                                          <FontAwesomeIcon icon={ faUser } className="text-gray-400 mr-2  hover:text-cyan-600" width={ 20 } height={ 20 } />
                                          Home</a>
                                    </Link>
                                    <Link href="/about" legacyBehavior>
                                          <a className="text-black hover:text-cyan-600">
                                          <FontAwesomeIcon icon={ faBriefcase } className="text-gray-400 mr-2  hover:text-cyan-600" width={ 20 } height={ 20 } />                                    
                                                Who we Are ?</a>
                                    </Link>
                                    <Link href="/contact" legacyBehavior>
                                          <a className="text-black hover:text-cyan-600">
                                          <FontAwesomeIcon icon={ faAddressBook } className="text-gray-400 mr-2  hover:text-cyan-600" width={ 20 } height={ 20 } />
                                                Contact</a>
                                    </Link>
                              </nav>
                              { pathname == "/" ? (
                                    <button className="bg-cyan-500 text-black-500 px-4 py-2 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring focus:ring-cyan-600" onClick={()=> router.push(`/login`)}>
                                          Login
                                    </button>
                              ): null }

                              {pathname != "/login" && pathname != "/" ? (
                                    <button className="bg-cyan-500 text-black-500 px-4 py-2 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring focus:ring-cyan-600" onClick={()=> router.push(`/`)}>
                                          Logout
                                    </button>
                              ): null}
                        </div>
                  </header>
            </>
      );
}
