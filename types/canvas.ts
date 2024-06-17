export type Color = {
  r: number;
  g: number;
  b: number;
};

export type Camera = {
  x: number;
  y: number;
};

export enum LayerTypeEnum {
  Reactangle,
  Ellipse,
  Path,
  Text,
  Note,
}

export type RectangleLayer = {
  type: LayerTypeEnum.Reactangle;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
};

export type EllipseLayer = {
  type: LayerTypeEnum.Ellipse;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
};

export type PathLayer = {
  type: LayerTypeEnum.Path;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  points: number[][];
  value?: string;
};

export type TextLayer = {
  type: LayerTypeEnum.Text;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
};

export type NoteLayer = {
  type: LayerTypeEnum.Note;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
};

export type Point = {
  x: number;
  y: number;
};

export type XYHM = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export enum Side {
  Top = 1,
  Bottom = 2,
  Left = 4,
  Right = 8,
}

export type CanvasState =
  | { mode: CanvasModeEnum.None }
  | {
      mode: CanvasModeEnum.Pressing;
      origin: Point;
    }
  | { mode: CanvasModeEnum.SelectionNet; origin: Point; current?: Point }
  | { mode: CanvasModeEnum.Translating; current?: Point }
  | {
      mode: CanvasModeEnum.Inserting;
      layerType:
        | LayerTypeEnum.Ellipse
        | LayerTypeEnum.Reactangle
        | LayerTypeEnum.Text
        | LayerTypeEnum.Note;
    }
  | { mode: CanvasModeEnum.Resizing; initialBounds: XYHM; corner: Side }
  | { mode: CanvasModeEnum.Pencil };

export enum CanvasModeEnum {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Inserting,
  Resizing,
  Pencil,
}

export type Layer =
  | RectangleLayer
  | TextLayer
  | EllipseLayer
  | PathLayer
  | NoteLayer;
