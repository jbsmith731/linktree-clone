import { cva } from 'cva';

export const button = cva(
  'inline-flex justify-center items-center rounded-full border-2 font-medium transition-colors duration-200',
  {
    variants: {
      intent: {
        primary:
          'bg-zinc-900 text-white border-zinc-900 hover:bg-transparent hover:text-zinc-900 disabled:bg-zinc-600',
        secondary:
          'border-zinc-900 hover:bg-zinc-900 hover:text-white disabled:border-zinc-600',
        tertiary:
          'border-zinc-300 hover:bg-zinc-900 hover:border-zinc-900 hover:text-white',
        action:
          'bg-white shadow-lg border-white hover:shadow-xl transition-shadow',
      },
      size: {
        small: 'h-8 px-4',
        medium: 'h-11 min-w-[140px] px-6',
        fluid: 'h-11 w-full px-6',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
);

export const textButton = cva(
  'hover:text-blue-700 transition-colors duration-200'
);

export const buttonGroup = cva('grid gap-2 justify-start grid-flow-col-dense');
