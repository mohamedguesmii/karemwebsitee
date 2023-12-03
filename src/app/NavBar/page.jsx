import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/images/logo.png';
import Link from 'next/link';

 const NavBar = ({color}) => {
  const links = [
    {
      id: 1,
      title: 'الصفحة الرئيسية',
      url: '/HomePage',
    },
    
    {
      id: 2,
      title: 'حجوزاتي',
      url: '/Reservations',
    },

    {
      id: 3,
      title: 'اتصل بنا',
      url: '/Callus',
    },

    {
      id:4,
      title : 'الفنادق',
      url: '/Hotels',
    },

    {
      id:5,
      title: "حولنا",
      url: '/Aroundus',
    },

  ];

  return (
    <div className='w-screen h-full p-10 items-center ' style={{color : color}}>
      <div className='w-full flex flex-row-reverse items-center justify-evenly'>
        <Image src={Logo} className='w-[50px] h-[50px]' />
        <ul>
          <div className='flex gap-[50px] flex-row-reverse text-center'>
            {links.map((link) => (
              <Link key={link.id} href={link.url}>
               {link.title}
              </Link>
            ))}
            <div>
              <Link href="/">عربي</Link>
            </div>
            <Link href="/">

            <div className="flex items-center w-[160px] h-10 text-center rounded-3xl mr-20 bg-yellow-600">
              <p className="mx-auto">تسجيل الدخول</p>
            </div>

           

            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

 export default NavBar

{/*
            <Link className='active:text-yellow-600' href="/">الصفحة الرئيسية</Link>
            <Link className='active:text-yellow-600' href="/">حجوزاتي</Link>
            <Link className='active:text-yellow-600' href="/">اتصل بنا</Link>
            <Link className='active:text-yellow-600' href="/">الفنادق</Link>
            <Link className='active:text-yellow-600' href="/">حولنا</Link>
*/}