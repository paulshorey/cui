import { IconArrowBarLeft, IconArrowBarRight } from '@tabler/icons-react';

import styles from './OpenCloseButton.module.css';

interface Props {
  onClick: any;
  side: 'left' | 'right';
}

export const CloseSidebarButton = ({ onClick: toggleOpen, side }: Props) => {
  return (
    <>
      <div onClick={toggleOpen} className={styles.overlay}></div>
      <button
        data-side={side}
        onClick={toggleOpen}
        className={styles.closeButton}
      >
        {side === 'right' ? <IconArrowBarRight /> : <IconArrowBarLeft />}
      </button>
    </>
  );
};

export const OpenSidebarButton = ({ onClick, side }: Props) => {
  return (
    <button
      className={
        `absolute top-2.5 ${
          side === 'right' ? 'right-1' : 'left-3'
        } h-7 w-7 text-white hover:text-gray-400 dark:text-white dark:hover:text-gray-300 sm:top-0.5 sm:${
          side === 'right' ? 'right-2' : 'left-2'
        } sm:h-8 sm:w-8 sm:text-neutral-700` + styles.openButton
      }
      onClick={onClick}
    >
      {side === 'right' ? <IconArrowBarLeft /> : <IconArrowBarRight />}
    </button>
  );
};
