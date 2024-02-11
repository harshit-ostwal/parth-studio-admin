"use client"
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useToast } from './ui/use-toast'
import { signIn } from 'next-auth/react'
import { Loader2Icon } from 'lucide-react'

export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { toast } = useToast()

    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await signIn('credentials', {
                email, password, redirect: false
            })

            if (res.ok) {
                setIsLoading(true);
                toast({
                    variant: "success",
                    title: "SS SOFTWARE",
                    description: "Sign In Successfull!",
                })
                router.replace("/");
            } else {
                const form = e.target;
                form.reset();
                setIsLoading(false);
                toast({
                    variant: "destructive",
                    title: "SS SOFTWARE",
                    description: "Incorrect Email or Password. Please Try Again?",
                })
            }

        } catch (error) {
            const form = e.target;
            form.reset();
            setIsLoading(false);
            toast({
                variant: "destructive",
                title: "SS SOFTWARE",
                description: "Sign In Unsuccessfull?",
            })
        }
    }

    return (
        <>
            <div className="relative">
                <img className="absolute left-10 top-10" src="/Logo/psblack.png" alt="Parth Studio" width={80} />
                <div className="flex w-full h-screen gap-10 p-10 bg-primary text-primary-text">
                    <div className="flex flex-col items-center w-3/4 h-full justify-evenly">
                        <h1 className="text-3xl font-semibold">Hi, Welcome Back To Parth Studio 🎉</h1>
                        <img src="SignIn.png" alt="SignIn" width={720} />
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/5 h-full">
                        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3">
                            <label htmlFor="email">Email</label>
                            <Input placeholder={"Enter Your Email"} updateValue={(e) => setEmail(e.target.value)} type={"email"} req={true}></Input>
                            <label htmlFor="email">Password</label>
                            <Input placeholder={"Enter Your Password"} updateValue={(e) => setPassword(e.target.value)} type={"password"} req={true}></Input>
                            <Link href={""} className="flex justify-end text-blue-500">Forgot Password?</Link>
                            <Button variant={"primary"} className="items-center justify-center py-4 mt-5 text-base">
                                {isLoading ?
                                    <>
                                        <Loader2Icon size={24} className="animate-spin" />
                                    </> : <>
                                        Sign In
                                    </>}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}