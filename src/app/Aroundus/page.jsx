import React from 'react'
import Img from '../../../public/images/karemImg.png'
import Image from 'next/image'
const Aroundus = () => {
  return (
  <div className='h-[70vh] w-full flex flex-col justify-center items-center'>

  <Image
  src={Img}
  />



<div className='mx-[200px] text-xl font-bold text-center'>
  <p className='mt-10'>
      مرحبا بكم في شركة كارم للسياحة في مملكة العربية السعودية . نفخر بتقديم تجربة إقامة فاخرة ومميزة تحت اسمنا الراقي
    اكتشفوا عالماً من ضيافة العربية الأصيلة والتصميم العصري في فنادقنا  الحديثة و المريحة. تتميز غرفنا  بالأناقة
    والتجهيزات الفاخرة التي تضمن لكم إقامة لاتشوبها شائبة. استمتعوا بمجموعة متنوعة من المرافق المتطورة والمطاعم الراقية التي تقدم أشهى الأطباق .
     نحن نهتم بكل التفاصيل لضمان راحتكم ورضاكم التام . استعدوا لتجربة لا تنسى في فنادق كارم السياحية حيث يتحقق الرفاهية والإسترخاء في أجواء فريدة من نوعها
  
    
  </p>
</div>
<div className='w-[80px] h-[40px] text-right cursor-pointer m-20 bg-purple-950 rounded-3xl flex justify-center items-center'>
  <p className='text-center text-white'>اتصل بنا</p>
</div>

  </div>
  
  
  
  
  
  
    )

  
}

export default Aroundus