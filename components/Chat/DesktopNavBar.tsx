import { IconPlaylistX, IconPlus, IconSettings } from '@tabler/icons-react';

import { ModelSelect } from '@/components/Chat/ModelSelect';

import styles from './DesktopNavBar.module.css';

export default function DesktopNavBar({
  t,
  selectedConversation,
  handleSettings,
  onClearAll,
  handleNewConversation,
  showSettings,
}: any) {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBar}>
        <span>&nbsp;</span>
        <span>
          {t('Model')}: {selectedConversation?.model.name} | {t('Temp')}:{' '}
          {selectedConversation?.temperature} |
          <button
            className="ml-2 cursor-pointer hover:opacity-50"
            onClick={handleSettings}
          >
            <IconSettings size={18} />
          </button>
          <button
            className="ml-2 cursor-pointer hover:opacity-50"
            onClick={onClearAll}
          >
            <IconPlaylistX size={18} />
          </button>
        </span>
        <span>
          <IconPlus
            className={
              'cursor-pointer hover:text-neutral-400 mr-8 ' + styles.plus
            }
            onClick={handleNewConversation}
          />
        </span>
      </div>
      {showSettings && (
        <div className={styles.settingsPane}>
          <div className="flex flex-col space-y-10 md:mx-auto md:max-w-xl md:gap-6 md:py-3 md:pt-6 lg:max-w-2xl lg:px-0 xl:max-w-3xl">
            <div className="flex h-full flex-col space-y-4 border-b border-neutral-200 p-4 dark:border-neutral-600 md:rounded-lg md:border">
              <ModelSelect />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
