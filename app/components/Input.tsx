import * as RadixLabel from '@radix-ui/react-label';
import { cva } from 'cva';
import * as React from 'react';

const InputRoot = ({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
  return <div {...props}>{children}</div>;
};

const InputLabel = ({ children, ...props }: RadixLabel.LabelProps) => {
  return (
    <RadixLabel.Root {...props} className="inline-block mb-2 font-medium">
      {children}
    </RadixLabel.Root>
  );
};

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'>
>(({ className, ...props }, forwardedRef) => {
  return (
    <input {...props} className={input({ className })} ref={forwardedRef} />
  );
});

Input.displayName = 'Input';

export const input = cva(
  'border-2 border-zinc-300 rounded-lg p-2 bg-transparent filter-none autofill:bg-transparent w-full'
);

const Root = InputRoot;
const Label = InputLabel;

export { Root, Label, Input };
