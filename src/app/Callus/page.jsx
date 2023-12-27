"use client"
import React from 'react';
import Image from 'next/image';
import MapImage from '../../../public/images/Map.png';
import Inputs from '@/components/Inputs';
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io';

const Callus = () => {
  const SocialIcon = ({ iconName }) => {
    switch (iconName) {
      case 'twitter':
        return <IoLogoTwitter />;
      case 'facebook':
        return <IoLogoFacebook />;
      case 'instagram':
        return <IoLogoInstagram />;
      case 'youtube':
        return <IoLogoYoutube />;
      default:
        return null;
    }
  };

  const MediaIcon = ({ iconName, url }) => {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="w-10 h-10 rounded-full bg-purple-950 flex items-center justify-center">
          <SocialIcon iconName={iconName} />
        </div>
      </a>
    );
  };

  return (
    <div className='h-screen w-full items-center'>
      <div className='flex flex-row'>
        <div className='w-1/2 h-screen'>
          <h3 className='text-right mx-8 mt-4 font-bold text-2xl'>اتصل بنا</h3>
          <div className='m-4'>
            <Inputs label='الاسم الكامل' />
            <Inputs label='البريد الالكتروني' />
            <Inputs label='الموضوع' placeholder='حدد' />
            <div className='my-4'>
              <p>رسالتك</p>
              <textarea className='border-2' rows={4} cols={60} />
            </div>
            <div className='w-20 h-10 text-right cursor-pointer mx-16 bg-purple-950 rounded-3xl flex justify-center items-center'>
              <p className='text-center text-white'>إرسال</p>
            </div>
          </div>
        </div>
        <div className='w-1/2 h-screen'>
          <div className='flex justify-center flex-col items-end m-11 ml-[100px]'>
            <Image src={MapImage} alt='خريطة' />
            <div className='flex flex-row gap-4 justify-end mt-4'>
              <MediaIcon iconName='facebook' url='https://www.facebook.com/' />
              <MediaIcon iconName='instagram' url='https://www.instagram.com/' />
              <MediaIcon iconName='twitter' url='https://x.com/' />
              <MediaIcon iconName='youtube' url='https://www.youtube.com/' />
            
            </div>
            <div className='flex flex-col gap-2 flex-end mt-6 text-gray-600 ' dir='ltr'>
                <p>مكة -حي أرصفة برج يحي الشريف التجاري طابق 5 مكتب 11</p>
                <p>+966 55800518181</p>
                <p>karemtourism@info.com</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callus;
