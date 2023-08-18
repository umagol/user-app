import * as React from 'react'

function Home ()
{
      return (
            <>
                  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br bg-cover bg-center bg-gradient-to-b from-blue-600 to-purple-600"
                        style={ { backgroundImage: `url('images/bg1.jpg')` } }>
                        <div className="p-8 text-white">
                              <h1 className="text-3xl font-semibold mb-2">Welcome to Our Beautiful Website</h1>
                              <p className="text-gray-300 text-lg">Discover amazing content and connect with others.</p>
                        </div>
                  </div>
            </>
      )
}
Home.pageTitle = 'My App | Home';
export default Home;