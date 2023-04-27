import { IconArrowBarLeft, IconArrowBarRight } from '@tabler/icons-react';

import styles from './OpenCloseButton.module.css';

interface Props {
  onClick: any;
  side: 'left' | 'right';
}

export const CloseSidebarButton = ({ onClick: toggleOpen, side }: Props) => {
  if (side === 'right') {
    return null;
  }
  return (
    <>
      <button
        className={`fixed top-5 ${
          // @ts-ignore
          side === 'right' ? 'right-[270px]' : 'left-[270px]'
        } z-50 h-7 w-7 hover:text-gray-400 dark:text-white dark:hover:text-gray-300 sm:top-0.5 sm:${
          // @ts-ignore
          side === 'right' ? 'right-[270px]' : 'left-[270px]'
        } sm:h-8 sm:w-8 sm:text-neutral-700`}
        onClick={toggleOpen}
      >
        {
          // @ts-ignore
          side === 'right' ? <IconArrowBarRight /> : <IconArrowBarLeft />
        }
      </button>
      <div
        onClick={toggleOpen}
        className={
          'absolute top-0 left-0 z-20 h-full w-full bg-black opacity-70 sm:hidden' +
          styles.overlay
        }
      ></div>
    </>
  );
};

export const OpenSidebarButton = ({ onClick, side }: Props) => {
  if (side === 'right') {
    return null;
  }
  return (
    <button
      className={`fixed top-2.5 ${
        // @ts-ignore
        side === 'right' ? 'right-2' : 'left-2'
      } z-50 h-7 w-7 text-white hover:text-gray-400 dark:text-white dark:hover:text-gray-300 sm:top-0.5 sm:${
        // @ts-ignore
        side === 'right' ? 'right-2' : 'left-2'
      } sm:h-8 sm:w-8 sm:text-neutral-700`}
      onClick={onClick}
    >
      {
        // @ts-ignore
        side === 'right' ? <IconArrowBarLeft /> : <IconArrowBarRight />
      }
    </button>
  );
};
