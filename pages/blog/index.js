import Link from 'next/link';
import React from 'react';
import { getData, truncateString } from '../../utils/utils';
import Posts from '../../components/Posts';
import CategoryMenu from '../../components/CategoryMenu';
import IntroText from '../../components/IntroText';
import Image from 'next/image';
import FeaturedPost from '../../components/FeaturedPost';
import Head from 'next/head';

const Home = ({ posts, categories, featuredPost }) => {
  return (
    <>
      <Head>
        <title>My Awesome Blog</title>
      </Head>
      <div className='wrapper max-w-7xl mx-auto mb-5'>
        <IntroText
          title='Welcome to our Blog'
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit molestias
      itaque ex ea ullam ut fuga voluptas, numquam, mollitia illum impedit! Unde
      dolorem voluptates voluptatibus necessitatibus tenetur voluptas magnam
      voluptatem! luptatibus necessitatibus tenetur voluptas magnam voluptatem!'
        />
        <CategoryMenu tags={categories.tags} />
        {featuredPost ? <FeaturedPost post={featuredPost} /> : null}
        <Posts posts={posts} />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { API_KEY } = process.env;
  const posts = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/posts/?key=${API_KEY}&fields=title,slug,feature_image,custom_excerpt,published_at,featured`
  );
  const categories = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/tags/?key=${API_KEY}`
  );

  const featuredPost = await posts.posts.find((post) => post.featured);

  return {
    revalidate: 60,
    props: {
      posts: featuredPost
        ? posts.posts.filter((post) => post.slug != featuredPost.slug)
        : posts,
      categories,
      featuredPost,
    },
  };
};
