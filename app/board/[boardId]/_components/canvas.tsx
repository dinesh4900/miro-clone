'use client';

import { Info } from './info';
import { Participants } from './participants';
import { Toolbar } from './toolbar';
import { useSelf } from '@/liveblocks.config';

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  const info = useSelf((me) => me.info);

  console.log(info, '## info');
  return (
    <main className='h-full w-full elative bg-neutral-100 touch-none'>
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
};
