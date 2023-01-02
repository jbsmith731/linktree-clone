import { cva } from 'cva';

export const headingText = cva('font-semibold', {
  variants: {
    size: {
      0: ['text-base uppercase'],
      1: ['text-lg uppercase'],
      2: ['text-xl'],
      3: ['text-2xl'],
      4: ['text-3xl'],
      5: ['text-4xl'],
      6: ['text-5xl'],
    },
    align: {
      left: 'text-left',
      center: 'text-center',
    },
  },

  defaultVariants: {
    size: 2,
  },
});
