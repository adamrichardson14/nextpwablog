import React from 'react';
import Link from 'next/link';
import { getData, truncateString } from '../utils/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';
const Posts = (props) => (
  <main className='w-11/12 mx-auto py-2 lg:max-w-7xl'>
    <div className='sm:-mt-4 lg:flex flex-wrap justify-center'>
      {props.posts.map((post) => {
        return (
          <React.Fragment key={post.slug}>
            <div className='flex flex-row items-center sm:shadow-lg sm:rounded-lg sm:mt-4 lg:flex-col lg:w-5/12 lg:my-1 lg:mx-2 lg:shadow-sm lg:border-none lg:rounded-lg'>
              <Link
                href={{
                  pathname: '/blog/post/[slug]',
                  query: {
                    slug: post.slug,
                  },
                }}
              >
                <a>
                  <div className='w-20 h-20 mr-4 sm:w-40 sm:h-40  lg:hidden'>
                    <Image
                      src={post.feature_image}
                      alt={post.title}
                      className='rounded-full sm:rounded-none sm:rounded-l-lg shadow-md  object-cover object-center  lg:rounded-t-lg lg:shadow-none'
                      width={160}
                      height={160}
                      quality={40}
                      layout='responsive'
                    />
                  </div>
                  <div className='hidden lg:block w-full'>
                    <Image
                      src={post.feature_image}
                      alt={post.title}
                      className='lg:rounded-t-lg object-cover'
                      width={530}
                      height={311}
                      quality={40}
                    />
                  </div>
                </a>
              </Link>
              <div className='w-7/12 lg:w-full lg:p-2'>
                <Link
                  href={{
                    pathname: '/blog/post/[slug]',
                    query: {
                      slug: post.slug,
                    },
                  }}
                >
                  <a>
                    <motion.h2
                      animate={{ scale: 1 }}
                      layoutId={post.slug}
                      className='font-bold sm:text-lg md:text-xl lg:text-2xl'
                    >
                      {post.title}
                    </motion.h2>
                  </a>
                </Link>
                <span className='text-sm text-gray-600 lg:text-base'>
                  {new Date(post.published_at).toDateString()}
                </span>
                <p className='text-gray-700 hidden sm:block'>
                  {truncateString(post.custom_excerpt, 120)}
                </p>
                <button className='text-yellow-700 text-base hover:text-yellow-600 hidden sm:block md:text-base lg:text-base'>
                  Read full post
                </button>
              </div>
            </div>
            <p className='text-gray-700 sm:hidden'>
              {truncateString(post.custom_excerpt, 120)}
            </p>
            <Link
              href={{
                pathname: '/blog/post/[slug]',
                query: {
                  slug: post.slug,
                },
              }}
            >
              <button className='text-yellow-700 text-base hover:text-yellow-600 sm:hidden pb-3'>
                Read full post
              </button>
            </Link>
          </React.Fragment>
        );
      })}

      <hr className='border-gray-100 py-1' />
    </div>
  </main>
);

export default Posts;
