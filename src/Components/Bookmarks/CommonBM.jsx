import React from "react";
const CommonBM = ({BM}) => {
 
  return (
    <>
      <div className="">
        <div className="bg-gray-800 py-3 rounded-full my-1 h-[45px] w-[45px] flex justify-center items-center mx-auto">
          <a href={BM.url} className=" " target="_blank">
            <img
              className="h-8 w-8 text-center"
              src={
                "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" +
                BM.url +
                ""
              }
              alt=""
            />
          </a>
        </div>

        <p className="text-center mb-4 text-white text-sm">{BM.text}</p>
      </div>
    </>
  );
};

export default CommonBM;
