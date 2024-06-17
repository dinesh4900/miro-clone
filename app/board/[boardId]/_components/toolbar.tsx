import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from 'lucide-react';
import { ToolButton } from './tool-button';
import { CanvasModeEnum, CanvasState, LayerTypeEnum } from '@/types/canvas';

interface ToolbarProps {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export const Toolbar = ({
  canRedo,
  canUndo,
  canvasState,
  redo,
  setCanvasState,
  undo,
}: ToolbarProps) => {
  return (
    <div className='absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4'>
      <div className='bg-white rounded-md p-1.5 flex flex-col gap-y-1 items-center shadow-md'>
        <ToolButton
          label='Select'
          icon={MousePointer2}
          clickAction={() => setCanvasState({ mode: CanvasModeEnum.None })}
          isActive={
            canvasState.mode === CanvasModeEnum.None ||
            canvasState.mode === CanvasModeEnum.Translating ||
            canvasState.mode === CanvasModeEnum.SelectionNet ||
            canvasState.mode === CanvasModeEnum.Pressing ||
            canvasState.mode === CanvasModeEnum.Resizing
          }
        />
        <ToolButton
          label='Text'
          icon={Type}
          clickAction={() =>
            setCanvasState({
              mode: CanvasModeEnum.Inserting,
              layerType: LayerTypeEnum.Text,
            })
          }
          isActive={
            canvasState.mode === CanvasModeEnum.Inserting &&
            canvasState.layerType === LayerTypeEnum.Text
          }
        />
        <ToolButton
          label='Sticky note'
          icon={StickyNote}
          clickAction={() =>
            setCanvasState({
              mode: CanvasModeEnum.Inserting,
              layerType: LayerTypeEnum.Note,
            })
          }
          isActive={
            canvasState.mode === CanvasModeEnum.Inserting &&
            canvasState.layerType === LayerTypeEnum.Note
          }
        />
        <ToolButton
          label='Rectange'
          icon={Square}
          clickAction={() =>
            setCanvasState({
              mode: CanvasModeEnum.Inserting,
              layerType: LayerTypeEnum.Reactangle,
            })
          }
          isActive={
            canvasState.mode === CanvasModeEnum.Inserting &&
            canvasState.layerType === LayerTypeEnum.Reactangle
          }
        />
        <ToolButton
          label='Ellipse'
          icon={Circle}
          clickAction={() =>
            setCanvasState({
              mode: CanvasModeEnum.Inserting,
              layerType: LayerTypeEnum.Ellipse,
            })
          }
          isActive={
            canvasState.mode === CanvasModeEnum.Inserting &&
            canvasState.layerType === LayerTypeEnum.Ellipse
          }
        />
        <ToolButton
          label='Pen'
          icon={Pencil}
          clickAction={() =>
            setCanvasState({
              mode: CanvasModeEnum.Pencil,
            })
          }
          isActive={canvasState.mode === CanvasModeEnum.Pencil}
        />
      </div>
      <div className='bg-white rounded-md p-1.5 flex flex-col items-center shadow-md'>
        <ToolButton
          label='Undo'
          icon={Undo2}
          clickAction={undo}
          isDisabled={!canUndo}
        />
        <ToolButton
          label='Redo'
          icon={Redo2}
          clickAction={redo}
          isDisabled={!canRedo}
        />
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className='absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md' />
  );
};
