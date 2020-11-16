import { motion } from 'framer-motion';
const BackButton = ({ router }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className='bg-black px-2 py-1 rounded-lg shadow m-2 text-gray-200 hover:bg-gray-900 focus:outline-none text-sm'
    onClick={() => router.back()}>
    Go Back
  </motion.button>
);

export default BackButton;
