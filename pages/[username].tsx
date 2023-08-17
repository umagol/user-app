
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
import '@/styles/globals.css'
// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UserDetailsPage: React.FC = () =>
{
  const router = useRouter();
  const { username } = router.query; // Access the dynamic parameter
  useEffect( () =>
  {
    // Make a request to fetch data here
  }, [ username ] );

  return (
    <>
      <Header page="logout"/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-center">
          <div className="relative mx-auto mb-4 h-20 w-20">
            <Image
              src="/images/profile.jpeg"
              alt="Profile Picture"
              className="rounded-full object-cover"
              layout="fill"
            />
          </div>
          <h1 className="text-2xl font-semibold">John Doe</h1>
          <p className="text-gray-600 mb-4">@johndoe</p>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nulla vitae velit
            tincidunt fringilla a a purus. Vivamus id massa aliquet, tempus justo nec, dictum mauris.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default UserDetailsPage;