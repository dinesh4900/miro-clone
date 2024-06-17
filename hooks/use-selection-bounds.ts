import { shallow } from '@liveblocks/react';
import { useStorage, useSelf } from '@/liveblocks.config';
import { Layer, XYHM } from '@/types/canvas';

const boundingBox = (layers: Layer[]): any => {
  const first = layers[0];

  if (!first) return null;

  let left = first.x;
  let right = first.x + first.width;
  let top = first.y;
  let bottom = first.y + first.height;

  console.log(layers.length, '## came here');

  for (let i = 0; i < layers.length; i++) {
    const { x, y, width, height } = layers[i];

    if (left > x) {
      left = x;
    }

    if (right < x + width) {
      right = x + width;
    }

    if (top > y) {
      top = y;
    }

    if (bottom < y + height) {
      bottom = y + height;
    }

    return {
      x: left,
      y: top,
      width: right - left,
      height: bottom - top,
    };
  }
};

export const useSelectionBounds = () => {
  const selection = useSelf((me) => me.presence.selection);

  console.log(selection, '## selection');

  return useStorage((root) => {
    const selectedLayers = selection
      .map((layerId) => root.layers.get(layerId)!)
      .filter(Boolean);

    console.log(selectedLayers, '## selection 34');

    const finalResult = boundingBox(selectedLayers);

    console.log(finalResult, '## finalResult');

    return boundingBox(selectedLayers);
  }, shallow);
};
