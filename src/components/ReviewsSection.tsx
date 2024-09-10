// import ImageAnimations from "./ReviewsImages";

// const ReviewsSection: React.FC = () => {
//   return (
//     <div className="relative w-full h-auto bg-white lg:w-[1440px] lg:h-[850px]">
//       <div className="absolute w-full lg:w-[898px] h-auto lg:h-[240px] px-4 lg:px-0 left-0 lg:left-[270px] top-0 lg:top-[calc(50%-120px-25px)] text-center lg:text-left text-black text-[24px] lg:text-[40px] font-medium leading-[140%] lg:leading-[120%] mt-10 lg:mt-0">
//         <p className="block">
//           "The NFC-powered app has transformed how I connect with industry
//           professionals in Dubai—
//         </p>
//         <p className="block">
//           effortless contact sharing and a major boost in productivity.
//         </p>
//         <p className="block text-[#0ECC88] mt-4">
//           An essential tool for every real estate professional"!
//         </p>
//       </div>

//       <div className="absolute flex flex-col justify-center items-center w-full lg:w-[251px] h-auto lg:h-[55px] left-0 lg:left-[593px] top-0 lg:top-[556px] gap-[10px] mt-10 lg:mt-0">
//         <div className="w-full lg:w-[220px] text-black text-[18px] lg:text-[20px] font-semibold leading-[125%] flex items-center justify-center lg:justify-start">
//           Abdul Mohammed Bari
//         </div>
//         <div className="w-full lg:w-[220px] text-center lg:text-left text-[14px] lg:text-[16px] text-[#0A1330CC] font-normal leading-[125%] flex items-center justify-center lg:justify-start">
//           Broker at AMS Real Estate
//         </div>
//       </div>

//       {/* Image animations */}
//       <ImageAnimations />
//     </div>
//   );
// };

// export default ReviewsSection;

import ImageAnimations from "./ReviewsImages";

const ReviewsSection: React.FC = () => {
  return (
    <div className="relative w-full h-auto bg-white lg:h-[850px]">
      {/* Review Text Section */}
      <div className="w-full h-auto lg:w-[898px] lg:h-[240px] mx-auto text-center lg:text-left px-4 lg:px-0 text-black text-[20px] lg:text-[40px] font-medium leading-[140%] lg:leading-[120%] mt-10 lg:mt-0">
        <p className="block">
          "The NFC-powered app has transformed how I connect with industry
          professionals in Dubai—
        </p>
        <p className="block">
          effortless contact sharing and a major boost in productivity.
        </p>
        <p className="block text-[#0ECC88] mt-4">
          An essential tool for every real estate professional"!
        </p>
      </div>

      {/* Reviewer Info */}
      <div className="flex flex-col justify-start items-center w-full h-auto lg:w-[251px] lg:h-[55px] mx-auto mt-10 lg:mt-0">
        <div className="w-full lg:w-[220px] text-black text-[18px] lg:text-[20px] font-semibold leading-[125%] text-center lg:text-left">
          Abdul Mohammed Bari
        </div>
        <div className="w-full lg:w-[220px] text-[14px] lg:text-[16px] text-[#0A1330CC] font-normal leading-[125%] text-center lg:text-left">
          Broker at AMS Real Estate
        </div>
      </div>

      {/* Image animations */}
      <ImageAnimations />
    </div>
  );
};

export default ReviewsSection;
