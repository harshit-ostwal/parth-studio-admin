"use client"
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';
import { Loader2Icon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Creation({ fetchData }) {

    const { toast } = useToast();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const userExists = axios.post("/api/UserExists/", {
                email
            });

            const { fetchUser } = (await userExists).data

            if (fetchUser) {
                setIsLoading(false);
                toast({
                    variant: "destructive",
                    title: "SS SOFTWARE",
                    description: "An User Already Exist?",
                })
                return;
            }

            const res = axios.post("/api/User/", {
                name,
                email,
                password,
            })

            if (res) {
                toast({
                    variant: "success",
                    title: "SS SOFTWARE",
                    description: "User SignUp Successfull!",
                })
                const form = e.target;
                form.reset();
            }
            else {
                toast({
                    variant: "destructive",
                    title: "SS SOFTWARE",
                    description: "An Error Occurred While SignUp?",
                })
                const form = e.target;
                form.reset();
            }
            setIsLoading(false);
        } catch (error) {
            toast({
                variant: "destructive",
                title: "SS SOFTWARE",
                description: "User SignUp Failed?",
            })
            const form = e.target;
            form.reset();
            setIsLoading(false);
        }
        fetchData();
    }

    return (
        <>
            <div className="flex flex-col w-full gap-5">
                <h1 className="text-xl font-bold">User Creation</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full h-full gap-3 xl:flex-row">
                    <Input className={"w-full"} req={true} type={"text"} placeholder={"Enter Your Full Name"} updateValue={(e) => setName(e.target.value)} />
                    <Input className={"w-full"} req={true} type={"email"} placeholder={"Enter Your Email ID"} updateValue={(e) => setEmail(e.target.value)} />
                    <Input className={"w-full"} req={true} type={"password"} placeholder={"Enter Your Password"} updateValue={(e) => setPassword(e.target.value)} />
                    <Button className="items-center justify-center px-20 text-base">
                        {isLoading ?
                            <>
                                <Loader2Icon size={24} className="animate-spin" />
                            </> : <>
                                Create
                            </>}
                    </Button>
                </form>
            </div>
        </>
    )
}