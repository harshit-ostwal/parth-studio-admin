"use client"
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash2 } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';

export default function Remove({ id, fetchData, imagePublicId }) {

  const { toast } = useToast();

  const handleDelete = async (id) => {
    try {
      const res = await axios.post(`/api/Gallery/${id}`, {
        imagePublicId
      });
      if (res) {
        toast({
          variant: "success",
          title: "SS SOFTWARE",
          description: "Gallery Image Deleted Successfully!",
        });
        fetchData();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "SS SOFTWARE",
        description: "An Error Occurred While Deleting Gallery Image?",
      });
    }
  }

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="px-4 py-3 text-sm rounded-md bg-background text-background-text hover:bg-secondary-text hover:text-background focus:bg-background focus:text-background-text">
          <Trash2 size={18} />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleDelete(id)} className="hover:bg-secondary">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </>
  )
}