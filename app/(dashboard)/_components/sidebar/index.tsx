'use-client'

import React from 'react';
import { NewButton } from './new-button';
import { List } from './list';

export const Sidebar = () => {
  return (
    <div className='fixed z-[1] bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white'>
      <List />
      <NewButton />
    </div>
  );
};
