import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MdHeaderLink = ({ text, href, router }) => (
  <a
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 ${
      router.pathname === href ? 'bg-gray-700' : 'bg-gray-800'
    }`}
  >
    {text}
  </a>
);

const MobileHeaderLink = ({ text, href, router }) => (
  <a
    href={href}
    className={`block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 ${
      router.pathname === href ? 'bg-gray-900' : 'bg-gray-800'
    }`}
  >
    {text}
  </a>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Next JS Blog</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex-shrink-0'>
                <Link href='/'>
                  <a className='text-gray-200 text-xl font-semibold'>
                    Next JS Website
                  </a>
                </Link>
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <MdHeaderLink text='Blog' href='/blog' router={router} />
                  <MdHeaderLink
                    text='Contact'
                    href='/contact'
                    router={router}
                  />
                  <MdHeaderLink text='About' href='/about' router={router} />
                </div>
              </div>
            </div>

            <div className='-mr-2 flex md:hidden'>
              {/* <!-- Mobile menu button --> */}
              <button
                onClick={() => {
                  setOpen(!open);
                }}
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white'
              >
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className={`${!open ? 'block' : 'hidden'} h-6 w-6`}
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className={`${!open ? 'hidden' : 'block'} h-6 w-6`}
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!--
      Mobile menu, toggle classNamees based on menu state.

      Open: "block", closed: "hidden"
    --> */}
        <div className={`${!open ? 'hidden' : 'block'}`}>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <MobileHeaderLink text='Blog' href='/blog' router={router} />
            <MobileHeaderLink text='Contact' href='/contact' router={router} />
            <MobileHeaderLink text='About' href='/about' router={router} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
