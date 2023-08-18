import React from 'react'
import Link from 'next/link';

const ErrorPage = ( ) =>
{
      return (
            <>
                  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  bg-cover bg-center bg-gradient-to-b"
                        style={ { backgroundImage: `url('images/error.jpg')` } }>
                        <div className=" p-8 rounded-md shadow-md text-center">
                              <h1 className="text-4xl font-semibold mb-4">Oops, something went wrong!</h1>
                              <p className="text-xl mb-6">Error 404</p>
                              <Link href="/" legacyBehavior>
                                    <button className="bg-cyan-500 text-black-500 px-4 py-2 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring focus:ring-cyan-600">
                                          Back to Home
                                    </button>
                              </Link>
                        </div>
                  </div>
            </>

      );
};

ErrorPage.getInitialProps = ( { res, err }: any ) =>
{
      const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
      return { statusCode };
};

export default ErrorPage;