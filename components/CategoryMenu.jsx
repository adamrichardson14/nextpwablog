import Link from 'next/link';
import { motion } from 'framer-motion';
const CategoryMenu = (props) => (
  <div className='w-11/12 mx-auto lg:max-w-7xl'>
    <hr className='my-4 border-gray-50' />
    <nav className='flex justify-center text-black space-x-2'>
      {props.tags.map((category) => {
        return (
          <Link
            key={category.slug}
            href={{
              pathname: '/blog/category/[slug]/[page]',
              query: {
                slug: category.slug,
                page: 1,
              },
            }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='uppercase font-semibold text-md   py-1 px-2 rounded-lg border border-gray-200'>
              {category.name}
            </motion.button>
          </Link>
        );
      })}
    </nav>
    <hr className='my-4 border-gray-50' />
  </div>
);

export default CategoryMenu;
