import { cva } from 'cva';

// https://hypercolor.dev/
export const gradient = cva('', {
  variants: {
    theme: {
      hyper: 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500',
      oceanic: 'bg-gradient-to-br from-green-300 via-blue-500 to-purple-600',
      'cotten-candy':
        'bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400',
      gotham: 'bg-gradient-to-br from-gray-700 via-gray-900 to-black',
      flamingo: 'bg-gradient-to-br from-pink-400 to-pink-600',
      lavender: 'bg-gradient-to-br from-indigo-300 to-purple-400',
      blue: 'bg-gradient-to-br from-sky-400 to-blue-500',
      oahu: 'bg-gradient-to-t from-orange-400 to-sky-400',
      wintergreen: 'bg-gradient-to-br from-green-200 to-green-500',
    },
  },
  defaultVariants: {
    theme: 'hyper',
  },
});
