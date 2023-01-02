import { button, buttonGroup } from '@primitives/button';
import { gradient } from '@primitives/gradient';
import { headingText } from '@primitives/heading-text';

const Style = () => {
  return (
    <main className="max-w-2xl mx-auto grid grid-flow-row gap-3 p-4">
      <p className={headingText({ size: 6 })}>Heading text 6</p>
      <p className={headingText({ size: 5 })}>Heading text 5</p>
      <p className={headingText({ size: 4 })}>Heading text 4</p>
      <p className={headingText({ size: 3 })}>Heading text 3</p>
      <p className={headingText({ size: 2 })}>Heading text 2</p>
      <p className={headingText({ size: 1 })}>Heading text 1</p>
      <p className={headingText({ size: 0 })}>Heading text 0</p>

      <div className={buttonGroup()}>
        <span className={button()}>Button</span>
        <span className={button({ intent: 'secondary' })}>Button</span>
        <span className={button({ intent: 'tertiary' })}>Button</span>
      </div>

      <div className={buttonGroup()}>
        <span className={button({ size: 'small' })}>Button</span>
        <span className={button({ intent: 'secondary', size: 'small' })}>
          Button
        </span>
        <span className={button({ intent: 'tertiary', size: 'small' })}>
          Button
        </span>
      </div>

      <div
        className={gradient({ className: 'p-10 rounded-xl overflow-hidden' })}
      >
        <span className={button({ intent: 'action', size: 'fluid' })}>
          Action Button
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {GRADIENT_COLORS.map((color) => {
          return (
            <div
              key={color}
              className={gradient({ theme: color, className: 'aspect-square' })}
            ></div>
          );
        })}
      </div>
    </main>
  );
};

const GRADIENT_COLORS = [
  'flamingo',
  'hyper',
  'oahu',
  'blue',
  'oceanic',
  'wintergreen',
  'lavender',
  'gotham',
] as const;

export default Style;
