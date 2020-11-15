import React from 'react';
import Header from '../../../components/Header';
import { getData } from '../../../utils/utils';
import { useRouter } from 'next/router';
import BackButton from '../../../components/BackButton';
import Head from 'next/head';
import Image from 'next/image';

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  const singlePost = post.posts[0];
  return (
    <>
      <Head>
        <meta property='og:title' content={post.title} />
        <meta property='og:description' content={post.custom_excerpt} />
        <meta property='og:image' content={post.feature_image} />
      </Head>
      <Header />
      <div>
        <div className='md:flex md:flex-row-reverse'>
          <header className='md:w-1/2'>
            <Image
              className='w-full h-56 object-cover md:h-120 sm:h-96 xl:h-140'
              src={singlePost.feature_image}
              alt={singlePost.title}
              width={1200}
              height={800}
              quality={60}
            />
          </header>
          <div className='w-11/12 mx-auto my-2 md:my-0 sm:flex sm:flex-row sm:justify-between sm:items-center md:w-1/2 md:flex-col md:justify-center space-y-5 md:bg-gray-50'>
            <div>
              <h1 className='font-bold text-xl xl:text-3xl md:text-2xl'>
                {singlePost.title}
              </h1>
              <div className='space-x-3'>
                <span className='md:text-gray-700 text-xs lg:text-sm uppercase font-semibold md:text-xs'>
                  {new Date(singlePost.published_at).toDateString()}
                </span>
                <span className='text-xs uppercase lg:text-sm font-semibold text-yellow-500 md:text-xs'>{`${singlePost.reading_time} minute read`}</span>
              </div>
              <hr className='my-1 border-gray-100 sm:hidden' />
            </div>

            <div className='flex flex-row pt-2'>
              <img
                src={singlePost.primary_author.profile_image}
                alt={post.title}
                className='w-14 md:h-20 md:w-20 lg:w-28 lg:h-28 h-14 rounded-full border-gray-100'
              />
              <div className='flex flex-grow flex-col ml-4 justify-center'>
                <span className='font-semibold md: text-base lg:text-xl md:text-gray-700'>
                  {singlePost.primary_author.name}
                </span>
                <span className='font-semibold uppercase text-xs text-yellow-500'>
                  {singlePost.primary_author.twitter}
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className='my-3 border-gray-100 w-11/12 mx-auto md:hidden' />
        <main className='mt-3 w-11/12 mx-auto md:w-9/12 md:mt-5'>
          <div dangerouslySetInnerHTML={{ __html: singlePost.html }}></div>
          <BackButton router={router} />
        </main>
      </div>
    </>
  );
};

export default Post;

export const getStaticProps = async ({ params }) => {
  const { API_KEY } = process.env;
  const post = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/posts/slug/${params.slug}?key=${API_KEY}&include=authors`
  );
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
