// import UrbantapLogo from "@/assets/logo";

// function Navbar() {
//   return (
//     <nav className="w-[1360px] h-[93px] bg-white py-5 pr-5 pl-10 absolute top-[30px] left-[40px] rounded-[80px] flex justify-between items-center gap-[135px]">
//       <UrbantapLogo />
//       <ul className="flex items-center p-0 gap-[40px] h-[20px] w-[746px] text-black">
//         <li className="flex-none order-1 grow-0 text-[16px] font-semibold">About</li>
//         <li className="flex-none order-1 grow-0 text-[16px] font-semibold">Why Urbantap?</li>
//         <li className="flex-none order-1 grow-0 text-[16px] font-semibold">Our Reach</li>
//         <li className="flex-none order-1 grow-0 text-[16px] font-semibold">Trusted by</li>
//         <li className="flex-none order-1 grow-0 text-[16px] font-semibold">Book a demo</li>
//         <li className="flex-none order-1 grow-0 text-[16px] font-semibold">Download app</li>
//       </ul>

//       <button className="text-black font-semibold py-2 px-2 text-[16px] mx-auto w-[164px] h-[53px] bg-gradient-to-b from-[#4DD969] to-[#28CD56] rounded-[30px]">
//         Join the waitlist
//       </button>
//     </nav>
//   );
// }

// export default Navbar;

import UrbantapLogo from "@/assets/logo";

function Navbar() {
  return (
    <nav className="w-full max-w-[1360px] h-auto bg-white py-4 px-5 absolute top-[30px] left-[20px] right-[20px] sm:left-[40px] rounded-[40px] sm:rounded-[80px] flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-[135px]">
      <div className="flex justify-between w-full sm:w-auto">
        <UrbantapLogo />
        <button className="sm:hidden text-black font-semibold py-2 px-4 text-[14px] bg-gradient-to-b from-[#4DD969] to-[#28CD56] rounded-[20px]">
          Join
        </button>
      </div>

      {/* Menu items */}
      <ul className="hidden sm:flex items-center p-0 gap-[20px] sm:gap-[40px] text-black w-full sm:w-auto">
        <li className="text-[14px] sm:text-[16px] font-semibold">About</li>
        <li className="text-[14px] sm:text-[16px] font-semibold">
          Why Urbantap?
        </li>
        <li className="text-[14px] sm:text-[16px] font-semibold">Our Reach</li>
        <li className="text-[14px] sm:text-[16px] font-semibold">Trusted by</li>
        <li className="text-[14px] sm:text-[16px] font-semibold">
          Book a demo
        </li>
        <li className="text-[14px] sm:text-[16px] font-semibold">
          Download app
        </li>
      </ul>

      {/* Button */}
      <button className="hidden sm:block text-black font-semibold py-2 px-4 text-[14px] sm:text-[16px] w-auto h-[48px] sm:h-[53px] bg-gradient-to-b from-[#4DD969] to-[#28CD56] rounded-[30px]">
        Join the waitlist
      </button>
    </nav>
  );
}

export default Navbar;
