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

export default function Remove({ id, fetchData }) {

    const { toast } = useToast();

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`/api/User/${id}`);
            if (res) {
                toast({
                    variant: "success",
                    title: "SS SOFTWARE",
                    description: "User Deleted Successfully!",
                });
                fetchData();
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "SS SOFTWARE",
                description: "An Error Occurred While Deleting User?",
            });
        }
    }

    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger>
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