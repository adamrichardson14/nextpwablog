const IntroText = ({ title, description }) => (
  <header className='w-11/12 mx-auto mt-4'>
    <h1 className='text-2xl font-bold'>{title}</h1>
    <p className='text-gray-600'>{description}</p>
  </header>
);

export default IntroText;
