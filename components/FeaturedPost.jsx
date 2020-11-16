import Image from 'next/image';
import { motion } from 'framer-motion';
const FeaturedPost = ({ post }) => {
  return (
    <>
      <div className='w-11/12 mx-auto relative mb-2'>
        <Image
          src={post.feature_image}
          width={800}
          height={450}
          layout='responsive'
          className='object-cover rounded-lg'
        />

        <div className='absolute top-0 w-full h-full text-center bg-yellow-700 rounded-lg flex justify-center items-center bg-opacity-25'>
          <div className='space-y-3'>
            <h2 className='text-white font-bold text-xl lg:text-3xl'>
              {post.title}
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-black bg-opacity-50 hover:bg-opacity-75 rounded-lg text-gray-200 px-2 py-1 lg:text-xl outline-none focus:outline-none'>
              Read full post
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPost;
