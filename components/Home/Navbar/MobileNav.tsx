// import { NavLinks } from '@/Constant/constant';
// import Link from 'next/link';
// import React from 'react';
// import { X } from 'lucide-react';

// type props ={
//   showNav:boolean;
//   closeNav: ()=> void 
// }

// const MobileNav = ({closeNav,showNav}:props) => {
//   return (
//     <div>
//       {/* Overlay */}
//       <div className="fixed inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen"></div>

//       {/* NavLinks */}
//       <div className="text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-purple-700 space-y-6 z-[1050]">
        
//         {NavLinks.map((link, index) => {
//           return (
//             <Link key={index} href={link.href}>
//               <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
//                 {link.name}
//               </p>
//             </Link>
//           );
//         })}

//         {/* Close Icon */}
//         <X className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6" />
//       </div>
//     </div>
//   );
// };

// export default MobileNav;

import { NavLinks } from '@/Constant/constant';
import Link from 'next/link';
import React from 'react';
import { X } from 'lucide-react';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const sidebarOpenClose = showNav ? "translate-x-0" : "translate-x-[100%]";
  if (!showNav) return null;

  return (
    <div>
      {/* Overlay */}
      <div
        onClick={closeNav}
        className="fixed  ${sidebarOpenClose} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen"
      ></div>

      {/* Mobile Navigation */}
      <div className="text-white ${sidebarOpenClose} fixed  left-0 top-0 justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-purple-700 space-y-6 z-[1050]">

        {NavLinks.map((link, index) => {
          return (
            <Link key={index} href={link.href}>
              <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.name}
              </p>
            </Link>
          );
        })}

        {/* Close Icon */}
        <X
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;