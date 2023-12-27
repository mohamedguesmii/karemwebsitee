import React from "react";

function TextBanner() {
  return (
    <div className="w-[400px] h-[100px] mt-[-150px] ">
        <div className="w-11 h-1 rounded bg-purple-950 mt-[60px]" />
      <h1 className="text-6xl font-bold">
        نعرض عليك <br />
        أفضل <span className="text-purple-950">الوجهات</span>
      </h1>
    </div>
  );
}

export default TextBanner;
