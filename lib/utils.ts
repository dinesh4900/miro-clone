import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const COLORS = [
  '#FF5733',
  '#EEC512',
  '#E7EE12',
  '#A4EE07',
  '#16F682',
  '#06CFB3',
  '#14BBE7',
  '#104FEB',
  '#940BCE',
  '#EA0AA8',
  '#EA0A19',
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function connectionIdToColor(connectionId: number) {
  return COLORS[connectionId % COLORS.length];
}
