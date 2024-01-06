import Image from 'next/image';
import React from 'react';
import Input from './Input';
import Button from './Button';

export default function SignIn() {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full text-text bg-secondary z-[100] grid lg:grid-cols-2 p-5 lg:p-0">
                <div className="w-full h-full hidden lg:flex">
                    <Image
                        src="/Images/ReachUs.jpg"
                        width={5588}
                        height={3725}
                        loading="lazy"
                        quality={100}
                        alt="Authentication"
                        className="h-full object-cover"
                    />
                </div>
                <div className="flex items-center justify-center w-full h-full">
                    <div className="max-w-md h-[80%] lg:h-[70%] rounded-[20px] bg-white w-full flex flex-col gap-2 items-center justify-center">
                        <Image src={"/Logo/psblack.png"} width={80} quality={100} height={88} alt='Parth Studio' />
                        <h1 className='text-xl sm:text-2xl font-VisbyRoundBold md:text-3xl mb-10 mt-3'>Welcome To Parth Studio</h1>
                        <Input type={"email"} placeholder={"Email"} />
                        <Input type={"password"} placeholder={"Password"} />
                        <Button size="xl" className="w-[80%]" variant={"secondary"}>Submit</Button>
                    </div>
                </div>
            </div>
        </>
    );
}