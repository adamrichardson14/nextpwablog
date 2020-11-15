import React from 'react';
import Link from 'next/link';
import { getData, truncateString } from '../utils/utils';
const Posts = (props) => (
  <main className='w-11/12 mx-auto py-2 lg:max-w-7xl'>
    <div className='sm:-mt-4 lg:flex flex-wrap justify-center'>
      {props.posts.map((post) => {
        return (
          <React.Fragment key={post.slug}>
            <div className='flex flex-row items-center sm:shadow-lg sm:rounded-r-lg sm:mt-4 sm:border sm:border-gray-100 lg:flex-col lg:w-5/12 lg:my-1 lg:mx-2 lg:shadow-sm lg:border-none lg:rounded-lg'>
              <Link
                href={{
                  pathname: '/blog/post/[slug]',
                  query: {
                    slug: post.slug,
                  },
                }}
              >
                <a>
                  <img
                    src={post.feature_image}
                    alt={post.title}
                    className='w-20 h-20 rounded-lg  sm:rounded-none shadow-md mr-4 sm:w-52 sm:h-40 object-cover object-center lg:w-full lg:h-60 lg:rounded-t-lg lg:shadow-none'
                  />
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
                    <h2 className='font-bold sm:text-lg md:text-xl lg:text-2xl'>
                      {post.title}
                    </h2>
                  </a>
                </Link>
                <span className='text-sm text-gray-600 lg:text-base'>
                  {new Date(post.published_at).toDateString()}
                </span>
                <p className='text-gray-700 hidden sm:block'>
                  {truncateString(post.custom_excerpt, 120)}
                </p>
                <button className='text-yellow-700 text-base hover:text-yellow-600 hidden sm:block md:text-base lg:text-base py-1'>
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
              <button className='text-yellow-700 text-sm hover:text-yellow-600 sm:hidden'>
                Read full post
              </button>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  </main>
);

export default Posts;
