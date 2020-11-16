// import { motion } from 'framer-motion';
// import Category from '../pages/blog/category/[slug]/[page]';
// import Image from 'next/image';

// const CategoryHeader = ({ category }) => {
//   return (
//     <div className='md:flex md:flex-row-reverse'>
//       <header className='md:w-1/2' layoutId={'postImage'}>
//         <Image
//           className='object-cover'
//           src={category.feature_image}
//           alt={category.name}
//           width={1200}
//           height={800}
//           quality={60}
//           layout='responsive'
//         />
//       </header>
//       <div className='w-11/12 mx-auto my-2 md:my-0 sm:flex sm:flex-row sm:justify-between sm:items-center md:w-1/2 md:flex-col md:justify-center space-y-5 md:bg-gray-50'>
//         <div>
//           <motion.h1
//             animate={{ scale: 1 }}
//             layoutId={'postTitle'}
//             className='font-bold text-xl xl:text-3xl md:text-2xl'>
//             {category.name}
//           </motion.h1>
//           <div className='space-x-3'>
//             <span className='md:text-gray-700 text-xs lg:text-sm uppercase font-semibold md:text-xs'>
//               {category.description}
//             </span>
//           </div>
//           <hr className='my-1 border-gray-100 sm:hidden' />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryHeader;
