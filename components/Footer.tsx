import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () =>
{
      return (
            <>
                  <footer className="bg-white-900 text-black py-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        <div className="container mx-auto flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                    <Image src="/images/logo.png" alt="logo" width={ 30 } height={ 30 } />
                                    <div className="ml-3">
                                          <Link href="/login" legacyBehavior>
                                                <h2 className="text-2xl text-black font-bold">User App</h2>
                                          </Link>
                                          <p className="text-sm">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, minima.
                                          </p>
                                    </div>
                              </div>
                              <div className="ml-auto">
                                    <h5 className="text-lg font-semibold mb-4">Links</h5>
                                    <ul className="flex space-x-4">
                                          <li><a href="#" className="text-blue hover:text-blue-600">Home</a></li>
                                          <li><a href="#" className="text-blue hover:text-blue-600">About Us</a></li>
                                          <li><a href="#" className="text-blue hover:text-blue-600">Services</a></li>
                                          <li><a href="#" className="text-blue hover:text-blue-600">Contact</a></li>
                                    </ul>
                                    <ul className="flex space-x-4">
                                          <li><a href="#" className="text-blue hover:text-blue-600">Privacy Policy</a></li>
                                          <li><a href="#" className="text-blue hover:text-blue-600">Cookies Settings</a></li>
                                    </ul>
                              </div>
                        </div>
                  </footer>
            </>

      );
};

export default Footer;