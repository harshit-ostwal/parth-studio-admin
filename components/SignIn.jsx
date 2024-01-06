"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Loader2Icon } from 'lucide-react';

export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await signIn('credentials', {
                email, password, redirect: true,
            })

            if (res.ok) {
                setIsLoading(true);
                router.replace(redirect);
            } else {
                const form = e.target;
                form.reset();
                router.refresh();
                setIsLoading(false);
            }

        } catch (error) {
            const form = e.target;
            form.reset();
            router.refresh();
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full overflow-y-auto text-text bg-secondary z-[100] grid xl:grid-cols-2 p-5 lg:p-0">
                <div className="w-full h-full hidden xl:flex">
                    <Image
                        src={"https://res.cloudinary.com/davazn01h/image/upload/v1700740297/Parth%20Studio/Admin/ReachUs.jpg"}
                        width={5588}
                        height={3725}
                        loading="eager"
                        quality={100}
                        alt="Authentication"
                        className="h-full object-cover"
                    />
                </div>
                <div className="flex items-center justify-center w-full h-full">
                    <form onSubmit={handleSubmit} className="max-w-md h-[90%] landscape:h-full landscape:pb-10 landscape:pt-10 lg:!h-[70%] rounded-[20px] shadow-2xl shadow-zinc-50 bg-white w-full flex flex-col gap-2 items-center justify-center">
                        <Image
                            src={"/Logo/psblack.png"}
                            width={80}
                            quality={100}
                            height={88}
                            alt='Parth Studio'
                            loading='eager'
                        />
                        <h1 className='text-xl sm:text-2xl font-VisbyRoundBold mb-10 mt-3'>Welcome To Parth Studio</h1>
                        <Input value={setEmail} type={"email"} placeholder={"Email"} />
                        <Input value={setPassword} type={"password"} placeholder={"Password"} />
                        <Button size="xl" disabled={isLoading} className="w-[80%] mt-5" variant={"secondary"}>
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
        </>
    );
}