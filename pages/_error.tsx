import Link from 'next/link';
import * as React from 'react'
import '@/styles/globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CustomErrorPage = ( { statusCode }: any ) =>
{
      return (
            <>
                  <Header />
                  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  bg-cover bg-center bg-gradient-to-b"
                        style={ { backgroundImage: `url('images/error.jpg')` } }>
                        <div className=" p-8 rounded-md shadow-md text-center">
                              <h1 className="text-4xl font-semibold mb-4">Oops, something went wrong!</h1>
                              <p className="text-xl mb-6">Error { statusCode }</p>
                              <Link href="/" legacyBehavior>
                                    <button className="bg-cyan-500 text-black-500 px-4 py-2 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring focus:ring-cyan-600">
                                          Back to Home
                                    </button>
                              </Link>
                        </div>
                  </div>
                  <Footer />
            </>

      );
};

CustomErrorPage.getInitialProps = ( { res, err }: any ) =>
{
      const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
      return { statusCode };
};

export default CustomErrorPage;