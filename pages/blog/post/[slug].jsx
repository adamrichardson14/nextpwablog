import React from 'react';
import Header from '../../../components/Header';
import { getData } from '../../../utils/utils';
import { useRouter } from 'next/router';
import BackButton from '../../../components/BackButton';

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  const singlePost = post.posts[0];
  return (
    <>
      <Header />
      <div>
        <header>
          <img
            className='w-full h-56 object-cover'
            src={singlePost.feature_image}
            alt={singlePost.title}
          />
        </header>
        <div className='w-11/12 mx-auto my-2'>
          <h1 className='font-bold text-xl'>{singlePost.title}</h1>
          <div className='space-x-3'>
            <span className='text-xs uppercase font-semibold'>
              {new Date(singlePost.published_at).toDateString()}
            </span>
            <span className='text-xs uppercase font-semibold text-yellow-500'>{`${singlePost.reading_time} minute read`}</span>
          </div>
          <hr className='my-1 border-gray-100' />
          <div className='flex flex-row pt-2'>
            <img
              src={singlePost.primary_author.profile_image}
              alt={post.title}
              className='w-16 h-16 rounded-full border-gray-100'
            />
            <div className='flex flex-grow flex-col ml-4 justify-center'>
              <span className='font-semibold'>
                {singlePost.primary_author.name}
              </span>
              <span className='font-semibold uppercase text-xs text-yellow-500'>
                {singlePost.primary_author.twitter}
              </span>
            </div>
          </div>

          <main className='mt-3'>
            <div dangerouslySetInnerHTML={{ __html: singlePost.html }}></div>
            <BackButton router={router} />
          </main>
        </div>
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
