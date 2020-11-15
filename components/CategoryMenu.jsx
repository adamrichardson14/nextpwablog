import Link from 'next/link';
const CategoryMenu = (props) => (
  <div className='w-11/12 mx-auto lg:max-w-7xl'>
    <hr className='my-4 border-gray-50' />
    <nav className='flex justify-center text-yellow-700 space-x-2'>
      {props.tags.map((category) => {
        return (
          <Link
            key={category.slug}
            href={{
              pathname: '/blog/category/[slug]/[page]',
              query: {
                slug: category.slug,
                page: 1,
              },
            }}
          >
            <button className='uppercase font-semibold text-md   py-1 px-2 rounded-lg border border-gray-100'>
              {category.name}
            </button>
          </Link>
        );
      })}
    </nav>
    <hr className='my-4 border-gray-50' />
  </div>
);

export default CategoryMenu;
