import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Edit3 } from 'lucide-react'

export default function Updation() {

  return (
    <Dialog>
      <DialogTrigger className="px-4 py-3 text-sm rounded-md bg-background text-background-text hover:bg-secondary-text hover:text-background focus:bg-background focus:text-background-text">
        <Edit3 size={18} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-white">Edit profile</DialogTitle>
          <DialogDescription className="text-secondary-text">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}