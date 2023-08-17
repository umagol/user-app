import React from "react";
import Link from "next/link";
import '@/styles/globals.css'
import Image from "next/image";
import { faUser, faBriefcase, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header ( props: any ): any
{
      console.log( props )
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
                                          <FontAwesomeIcon icon={ faUser } className="text-gray-400 mr-2  hover:text-cyan-600" />
                                          What We Do ?</a>
                                    </Link>
                                    <Link href="/about" legacyBehavior>
                                          <a className="text-black hover:text-cyan-600">
                                          <FontAwesomeIcon icon={ faBriefcase } className="text-gray-400 mr-2  hover:text-cyan-600" />                                    
                                                Who we Are ?</a>
                                    </Link>
                                    <Link href="/contact" legacyBehavior>
                                          <a className="text-black hover:text-cyan-600">
                                          <FontAwesomeIcon icon={ faAddressBook } className="text-gray-400 mr-2  hover:text-cyan-600" />
                                                Contact</a>
                                    </Link>
                              </nav>
                              { props.page == "login" ? null : (
                                    <Link href="/login" legacyBehavior>
                                          <button className="bg-cyan-500 text-black-500 px-4 py-2 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring focus:ring-cyan-600">
                                                Login
                                          </button>
                                    </Link>
                              ) }
                        </div>
                  </header>
            </>
      );
}
