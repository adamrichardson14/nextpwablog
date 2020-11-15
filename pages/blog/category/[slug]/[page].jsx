import React from 'react';
import { useRouter } from 'next/router';
import { getData } from '../../../../utils/utils';
import CategoryMenu from '../../../../components/CategoryMenu';
import Header from '../../../../components/Header';
import Posts from '../../../../components/Posts';
import Link from 'next/link';
import IntroText from '../../../../components/IntroText';
import BackButton from '../../../../components/BackButton';
import Image from 'next/image';
import FeaturedPost from '../../../../components/FeaturedPost';

const Category = ({
  posts,
  categories,
  currentCategory,
  slug,
  currentPage,
  featuredPost,
  postMeta,
}) => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;

  return (
    <>
      <Header />
      <div className='wrapper max-w-7xl mx-auto'>
        <IntroText
          title={currentCategory.name}
          description={currentCategory.description}
        />

        <CategoryMenu tags={categories.tags} />
        {featuredPost ? <FeaturedPost post={featuredPost} /> : null}

        <Posts posts={posts} />
        <div className='flex justify-center space-x-3 text-gray-500 font-semibold items-center text-md'>
          <span className='text-sm'>Page:</span>
          {Array.from({ length: postMeta.pagination.pages }, (_, index) => {
            return (
              <span>
                <Link
                  href={{
                    pathname: '/blog/category/[slug]/[page]',
                    query: {
                      slug: slug,
                      page: index + 1,
                    },
                  }}>
                  <a
                    className={`${
                      index === currentPage - 1
                        ? 'text-yellow-500'
                        : 'text-gray-500'
                    }`}>
                    {index + 1}
                  </a>
                </Link>
              </span>
            );
          })}
          <BackButton router={router} />
        </div>
      </div>
    </>
  );
};

export default Category;

export const getStaticProps = async ({ params }) => {
  const { API_KEY } = process.env;
  const posts = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/posts/?key=${API_KEY}&filter=tag:${params.slug}&fields=title,slug,feature_image,custom_excerpt,published_at,featured&page=${params.page}&limit=10`
  );
  const postMeta = await posts.meta;

  const categories = await getData(
    `https://ghostcmsnextjs.herokuapp.com/ghost/api/v3/content/tags/?key=${API_KEY}`
  );

  const currentCategory = await categories.tags.find(
    (cat) => cat.slug === params.slug
  );

  const featuredPost = await posts.posts.find((post) => post.featured);

  return {
    revalidate: 60,
    props: {
      posts: featuredPost
        ? posts.posts.filter((post) => post.slug != featuredPost.slug)
        : posts.posts,
      categories,
      currentCategory,
      currentPage: params.page,
      slug: params.slug,
      featuredPost: featuredPost ? featuredPost : null,
      postMeta,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};
