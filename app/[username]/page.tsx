'use client'
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import '@/styles/globals.css'
import { MakeGetRequest } from '@/app/services/API';
import Error from 'next/error'

const UserDetailsPage: React.FC = () =>
{
  const [userDetails, setUserDetails]: any = useState( {} );
  const router = useRouter();
  let username  = usePathname(); // Access the dynamic parameter
  
  useEffect( () =>{
    getUserDetails();
  }, [ username ] );

  const getUserDetails = async() => {
    if(username){
      username = username.replace("/","");
      const response: any = await MakeGetRequest('/user'+"?username="+username);
      if(response.status = 0){
        throw response.message;
      }
      setUserDetails(response.data);
    }
  }
  return userDetails ? (
    <>
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
          <h1 className="text-2xl font-semibold">{userDetails?.fullName}</h1>
          <p className="text-gray-600 mb-4">@{userDetails?.username}</p>
          <p className="text-gray-800">
          {userDetails?.about}
          </p>
        </div>
      </div>
    </>
  ):(
    <Error statusCode={404} />
  );
};
export default UserDetailsPage;