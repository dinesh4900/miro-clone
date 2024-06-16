'use client';

import { useState } from 'react';
import { Info } from './info';
import { Participants } from './participants';
import { Toolbar } from './toolbar';
import { useHistory, useCanRedo, useCanUndo } from '@/liveblocks.config';
import { CanvasModeEnum, CanvasState } from '@/types/canvas';

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasModeEnum.None,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  return (
    <main className='h-full w-full elative bg-neutral-100 touch-none'>
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        undo={history.undo}
        redo={history.redo}
      />
    </main>
  );
};
