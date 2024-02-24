"use client"
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Edit3, Loader2Icon } from 'lucide-react'
import Button from '@/components/Button';
import Input from '@/components/Input';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';

export default function Updation({ id, fetchData }) {

    const { toast } = useToast();

    const [isLoading, setIsLoading] = useState(false);
    const [updatedName, setUpdatedName] = useState();
    const [updatedEmail, setUpdatedEmail] = useState();
    const [updatedPassword, setUpdatedPassword] = useState();

    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await axios.put(`/api/User/${id}`, {
                updatedName,
                updatedEmail,
                updatedPassword,
            });
    
            if (res) {
                toast({
                    variant: "success",
                    title: "SS SOFTWARE",
                    description: "User Updation Successful!",
                });
                setIsLoading(false);
                fetchData();
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "SS SOFTWARE",
                description: "An Error Occurred While Updation?",
            });
            const form = e.target;
            form.reset();
            setIsLoading(false);
        }
    };

    useEffect(() => {
        axios.get(`/api/User/${id}`)
            .then(response => {
                const userData = response.data.fetchUser[0];
                setUpdatedName(userData.name);
                setUpdatedEmail(userData.email);
                setUpdatedPassword(userData.password);
            })
    }, [id]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Edit3 size={18} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-white">Edit profile</DialogTitle>
                    <DialogDescription className="text-secondary-text">
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleUpdate}>
                    <div className="grid gap-4 py-5">
                        <div className="grid items-center grid-cols-4 gap-4">
                            <label htmlFor="name" className="text-right">Full Name : </label>
                            <Input id="name" type={"text"} className={"col-span-3 text-background border-0"} req={true} value={updatedName} updateValue={(e) => setUpdatedName(e.target.value)} />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                            <label htmlFor="name" className="text-right">Email ID : </label>
                            <Input id="name" type={"email"} className={"col-span-3 text-background border-0"} req={true} disabled={true} value={updatedEmail} />
                        </div>
                        <div className="grid items-center w-full grid-cols-4 gap-4">
                            <label htmlFor="name" className="text-right">Password : </label>
                            <Input id="name" type={"password"} className={"col-span-3 text-background border-0"} req={true} value={updatedPassword} updateValue={(e) => setUpdatedPassword(e.target.value)} />
                        </div>
                    </div>
                </form>
                <DialogFooter>
                    <Button onClick={handleUpdate} variant={"secondary"} className="items-center justify-center w-40 text-base">
                        {isLoading ?
                            <>
                                <Loader2Icon size={24} className="animate-spin" />
                            </> : <>
                                Update Changes
                            </>}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}