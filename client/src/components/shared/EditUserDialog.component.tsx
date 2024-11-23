import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useShallow } from 'zustand/react/shallow'

import { useDialogStore } from '@/store/dialog'
import EditBasicInfoForm from './forms/EditBasicInfoForm.component'

type EditUserDialogProps = {
  type: string
}

export default function EditUserDialog({ type }: EditUserDialogProps) {
  const { isOpen, setOpen } = useDialogStore(
    useShallow(({ isOpen, setOpen }) => ({ isOpen, setOpen })),
  )

  return (
    <Dialog open={isOpen && type === 'Basic Information'} onOpenChange={setOpen}>
      <DialogTrigger className='w-60 rounded-[4px] border border-[#0058a9] py-2 px-3 bg-_blue text-white'>
        Edit
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit {type}</DialogTitle>
          <DialogDescription>press save after you edit</DialogDescription>
        </DialogHeader>

        <EditBasicInfoForm />
      </DialogContent>
    </Dialog>
  )
}
