'use client';

import { LucideIcon } from 'lucide-react';
import { Hint } from '@/components/hint';
import { Button } from '@/components/ui/button';

interface ToolButtonProps {
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
  isDisabled?: boolean;
  clickAction: () => void;
}

export const ToolButton = function ({
  icon: Icon,
  label,
  isActive,
  isDisabled,
  clickAction,
}: ToolButtonProps) {
  return (
    <Hint label={label} side='right' sideOffset={14}>
      <Button
        disabled={isDisabled}
        onClick={clickAction}
        size='icon'
        variant={isActive ? 'boardActive' : 'board'}
      >
        <Icon />
      </Button>
    </Hint>
  );
};
