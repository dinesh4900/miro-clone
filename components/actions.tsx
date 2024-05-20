'use client'

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator} from '@/components/ui/dropdown-menu'
import {Link2, Pencil, Trash2} from 'lucide-react'
import {toast} from 'sonner'
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import {ConfirmModal} from './confirm-modal'
import { Button } from "./ui/button";
import { useRenameModal } from "@/store/use-rename-modal";


interface ActionsProps{
  children: React.ReactNode;
  side?: DropdownMenuContentProps['side'];
  sideOffset?: DropdownMenuContentProps['sideOffset']
  title: string;
  id: string
};

export const Actions = ({children, id, title, side, sideOffset}: ActionsProps) => {

  const {onOpen} = useRenameModal()
  const {mutate, pending} = useApiMutation(api.board.remove)


  const handleCopyLink = () => {
    // TODO
    navigator.clipboard.writeText(`${window.location.origin}/board/${id}`)
    .then(()=> toast.success('Link copied'))
    .catch(() => toast.error('Failed to copy link!'))
  }

  const handleDeleteBoard = () => {

    mutate({ id })
    .then(()=>{
      toast.success('Board deleted!')
    })
    .catch(()=> toast.error('Failed to delete a board'))
  }


  return (
    <div className="absolute z-50 top-1 right-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          onClick={(e)=> e.stopPropagation()}
          side={side}
          sideOffset={sideOffset}
          className="w-60"
        >
          <DropdownMenuItem onClick={handleCopyLink}>
            <Link2 className="w-4 h-4 mr-2"/>
            Copy Board link
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onOpen(id, title)}>
            <Pencil className="w-4 h-4 mr-2"/>
            Rename
          </DropdownMenuItem>
          <ConfirmModal
          header="Delete board"
          description="this will delete board"
          disabled={pending}
          onConfirm={handleDeleteBoard}
          >
            {/* TODO */}
          <Button variant='ghost' className="p-3 cursor-pointer text-sm w-full justify-start font-normal">
            <Trash2 className="w-4 h-4 mr-2"/>
            Delete
          </Button>
          </ConfirmModal>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}