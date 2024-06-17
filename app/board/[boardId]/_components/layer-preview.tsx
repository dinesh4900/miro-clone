'use client';

import { useStorage } from '@/liveblocks.config';
import { LayerTypeEnum } from '@/types/canvas';
import React from 'react';
import { memo } from 'react';
import { Rectangle } from './rectangle';

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

export const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) return null;

    switch (layer.type) {
      case LayerTypeEnum.Reactangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      default:
        console.warn('Unknown layer type');
        return null;
    }
  }
);

LayerPreview.displayName = 'LayerPreview';
