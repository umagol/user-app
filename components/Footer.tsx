import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () =>
{
      return (
            <>  <footer className="bg-white-900 text-black py-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]" >
                  <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="md:col-span-2 lg:col-span-1">
                                          <div className="flex items-center">
                                          <Image src="/images/logo.png" alt="logo" width={ 30 } height={ 30 } />
                                          <div className="mr-3 ml-3 flex grid-cols-1 items-center justify-between py-3 md:py-5 md:block">
                                                <Link href="/login" legacyBehavior>
                                                      <h2 className="text-2xl text-black font-bold">User App</h2>
                                                </Link>
                                          </div>
                                    </div>
                                    <p className="text-sm">
                                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, minima.
                                    </p>
                              </div>
                              <div className="mt-5 mr-auto">
                                    <h5 className="text-lg font-semibold mb-4">Links</h5>
                                    <ul className=" flex space-x-4">
                                          <li><a href="#" className="text-blue">Home</a></li>
                                          <li><a href="#" className="text-blue">About Us</a></li>
                                          <li><a href="#" className="text-blue" >Services</a></li>
                                          <li><a href="#" className="text-blue" >Contact</a></li>
                                    </ul>
                                    <ul className=" flex space-x-4">
                                          <li><a href="#" className="text-blue">Privacy Policy</a></li>
                                          <li><a href="#" className="text-blue">Cookies Settings</a></li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </footer>

            </>

      );
};

export default Footer;

