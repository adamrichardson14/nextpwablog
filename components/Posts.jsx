import React from 'react';
import Link from 'next/link';
import { getData, truncateString } from '../utils/utils';
const Posts = (props) => (
  <main className='w-11/12 mx-auto py-2'>
    <div>
      {props.posts.map((post) => {
        return (
          <React.Fragment key={post.slug}>
            <div className='flex flex-row items-center py-2'>
              <Link
                href={{
                  pathname: '/post/[slug]',
                  query: {
                    slug: post.slug,
                  },
                }}
              >
                <a>
                  <img
                    src={post.feature_image}
                    alt={post.title}
                    className='w-20 h-20 rounded-full shadow-md mr-4'
                  />
                </a>
              </Link>
              <div>
                <Link
                  href={{
                    pathname: '/post/[slug]',
                    query: {
                      slug: post.slug,
                    },
                  }}
                >
                  <a>
                    <h2 className='font-bold'>{post.title}</h2>
                  </a>
                </Link>
                <span className='text-sm text-gray-600'>
                  {new Date(post.published_at).toDateString()}
                </span>
              </div>
            </div>
            <p className='text-gray-700'>
              {truncateString(post.custom_excerpt, 120)}
            </p>
            <Link
              href={{
                pathname: '/post/[slug]',
                query: {
                  slug: post.slug,
                },
              }}
            >
              <button className='text-yellow-500 text-sm hover:text-yellow-600'>
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
