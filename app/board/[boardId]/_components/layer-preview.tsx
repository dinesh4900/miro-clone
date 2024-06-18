'use client';

import { useStorage } from '@/liveblocks.config';
import { LayerTypeEnum } from '@/types/canvas';
import React from 'react';
import { memo } from 'react';
import { Rectangle } from './rectangle';
import { Ellipse } from './ellipse';
import { LayerText } from './text';
import { StickyNote } from './sticky-note';
import { Path } from './path';
import { colorToCss } from '@/lib/utils';

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
      case LayerTypeEnum.Path:
        return (
          <Path
            key={id}
            points={layer.points}
            onPointerDown={(e) => onLayerPointerDown(e, id)}
            x={layer.x}
            y={layer.y}
            fill={layer.fill ? colorToCss(layer.fill) : '#000'}
            stroke={selectionColor}
          />
        );
      case LayerTypeEnum.Reactangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerTypeEnum.Ellipse:
        return (
          <Ellipse
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerTypeEnum.Text:
        return (
          <LayerText
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerTypeEnum.Note:
        return (
          <StickyNote
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
