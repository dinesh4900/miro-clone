import { api } from "@/convex/_generated/api"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"
import {toast} from 'sonner'


interface NewBoardButtonProps {
  orgId: string
  disabled?: boolean
}

export const NewBoardButton = ({orgId, disabled}: NewBoardButtonProps) => {
  const {mutate, pending} = useApiMutation(api.board.create)

  const handleCreateBoard = () => {
    mutate({orgId, title: 'Hello 2'})
    .then((id)=>{
      toast.success('Board created')
      // TODO Redirect
    })
    .catch(()=> toast.error('Failed to create board'))
  }
  return (
    <button 
      disabled={pending || disabled}
      onClick={handleCreateBoard}
      className={cn(
        'col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center',
        (pending || disabled) && 'opacity-75 hover:bg-blue-600'
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1"/>
      <p className="text-sm text-white font-light">New board</p>

    </button>
  )
}