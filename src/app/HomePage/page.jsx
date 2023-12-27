import React from "react";
import Image from "next/image";
import NavBar from "../NavBar/page";
import Mecca from "../../../public/images/imagebg.jpg";
import BannerElement from "@/components/BannerElement";
import { AiOutlineSearch } from "react-icons/ai";
import IconComponent from "@/components/IconComponent";
import IkamaImg from "../../../public/images/ikama.png";
import PlaneImg from "../../../public/images/avion.png";
import BayanatImg from "../../../public/images/bayanat.png";
import ImageBanner from "@/components/ImageBanner";
import TextBanner from "@/components/TextBanner";
import Image1Banner from "@/components/Image1Banner";
import Image2Banner from "@/components/Image2Banner";



const HomePage = () => {
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-[60%]  ">
        <Image
          className="z-[-10]"
          src={Mecca}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full   flex absolute top-[50px] z-[-10] justify-center">
        <div className="w-full h-[500px] flex flex-col justify-center items-center">
          <h3 className="text-yellow-600 text-[2rem] font-bold font-avenir">
            كارم السياحية
          </h3>
          <h2 className=" m-5 font-bold text-white text-[1rem] font-avenir ">
            بوابتك إلى تجربة مميزة في البقاع المقدسة
          </h2>

          <div className=" w-[1000px] p-2 bg-white rounded-3xl flex flex-row justify-around items-center">
            <BannerElement
              option={
                <select>
                  <option value="egypt">مصر </option>
                  <option value="saudi_arabia">
                    المملكة العربية السعودية{" "}
                  </option>
                  <option value="iraq">العراق</option>
                  <option value="morocco">المغرب </option>
                  <option value="uae">الإمارات العربية المتحدة</option>
                  <option value="jordan">الأردن</option>
                  <option value="algeria">الجزائر</option>
                  <option value="tunisia">تونس </option>
                  <option value="lebanon">لبنان </option>
                  <option value="qatar">قطر</option>
                </select>
              }
              title={"الوجهة"}
            />
            <BannerElement
              option={
                <select>
                  <option value="" disabled>
                    تاريخ الوصول
                  </option>

                  <option value="2023-12-02">2023-12-02</option>
                  <option value="2023-12-03">2023-12-03</option>
                  <option value="2023-12-04">2023-12-04</option>
                  <option value="2023-12-05">2023-12-05</option>
                  <option value="2023-12-06">2023-12-06</option>
                  <option value="2023-12-07">2023-12-07</option>
                  <option value="2023-12-08">2023-12-08</option>
                  <option value="2023-12-09">2023-12-09</option>
                  <option value="2023-12-10">2023-12-10</option>
                  <option value="2023-12-11">2023-12-11</option>
                </select>
              }
              title={"تاريخ الوصول"}
            />
            <BannerElement
              option={
                <select>
                  <option value="" disabled>
                    تاريخ المغادرة
                  </option>

                  <option value="2023-12-02">2023-12-02</option>
                  <option value="2023-12-03">2023-12-03</option>
                  <option value="2023-12-04">2023-12-04</option>
                  <option value="2023-12-05">2023-12-05</option>
                  <option value="2023-12-06">2023-12-06</option>
                  <option value="2023-12-07">2023-12-07</option>
                  <option value="2023-12-08">2023-12-08</option>
                  <option value="2023-12-09">2023-12-09</option>
                  <option value="2023-12-10">2023-12-10</option>
                  <option value="2023-12-11">2023-12-11</option>
                </select>
              }
              title={"تاريخ المغادرة"}
            />
            <BannerElement
              option={<input className="border-2 w-[90px]" type="text" />}
              title={"البروموكود"}
            />

            <div className="w-11 h-11 bg-purple-950 rounded-lg flex justify-center items-center cursor-pointer">
              <AiOutlineSearch size={24} color="white" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[50%] bg-white flex flex-col items-center ">
        <h3 className="text-black m-5 text-[2rem] font-bold">
          حجزكم <span className="text-purple-800">سهل و سريع</span>
        </h3>
        <div className="w-full flex flex-row justify-evenly m-10">
          <IconComponent
            img={BayanatImg}
            title={"أدخل بياناتك"}
            description={"إملأ التفاصيل لإتمام الاجراءت"}
          />
          <IconComponent
            img={IkamaImg}
            title={"إختر إقامتك"}
            description={"إختر فندقك لإقامة  مثالية"}
          />
          <IconComponent
            img={PlaneImg}
            title={"إختر الوجهة"}
            description={"إستكشف خياراتك للسفر"}
          />
        </div>

        <div className="flex flex-row  items-center ">
        <TextBanner />
      <ImageBanner title='مكة المكرمة' description="إكتشف أفضل العروض"/>

      </div>

      <div className="flex flex-row  items-center ">
       
      <Image1Banner title=' المدينة المنورة' description="إكتشف أفضل العروض"/>

      </div>

      <div className="flex flex-row  items-center ">
       
      <Image2Banner title=' جدة ' description="إكتشف أفضل العروض"/>

      </div>


      </div>
  
      
    </div>
    
  );
};

export default HomePage;
