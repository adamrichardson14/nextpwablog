import React from 'react';
import Header from '../components/Header';
import { getData } from '../utils/utils';
import Posts from '../components/Posts';
import CategoryMenu from '../components/CategoryMenu';
import IntroText from '../components/IntroText';

const Home = ({ posts, categories }) => {
  return (
    <>
      <Header />

      <IntroText
        title='Welcome to my blog'
        description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut similique
      cupiditate voluptatibus qui explicabo quasi quas, doloremque dolores, ad
      repellendus facere architecto optio vitae illum nihil ipsam, eum libero
      quia? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
      minus ullam nesciunt'
      />
      <CategoryMenu tags={categories.tags} />

      <Posts posts={posts.posts} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { API_KEY } = process.env;
  const posts = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/posts/?key=${API_KEY}&fields=title,slug,feature_image,custom_excerpt,published_at`
  );
  const categories = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/tags/?key=${API_KEY}`
  );

  return {
    props: {
      posts,
      categories,
    },
    revalidate: 60,
  };
};
