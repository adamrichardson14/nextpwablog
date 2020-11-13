import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import { getData, truncateString } from '../utils/utils';

const Home = ({ posts }) => {
  return (
    <>
      <Header />
      <main className='w-11/12 mx-auto py-2'>
        <div>
          {posts.posts.map((post) => {
            return (
              <>
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
              </>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { API_KEY } = process.env;
  const posts = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/posts/?key=${API_KEY}&fields=title,slug,feature_image,custom_excerpt,published_at`
  );

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
