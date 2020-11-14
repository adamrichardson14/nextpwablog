const BackButton = ({ router }) => (
  <button
    className='bg-yellow-500 px-3 py-1 rounded-lg shadow m-2 text-white hover:bg-yellow-400'
    onClick={() => router.back()}
  >
    Go Back
  </button>
);

export default BackButton;
