import React from 'react'
import Input from './Input'
import Button from './Button'
import Link from 'next/link'

export default function SignIn() {
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
                        <form className="flex flex-col w-full gap-3">
                            <label htmlFor="email">Email</label>
                            <Input placeholder={"Enter Your Email"} type={"email"} req={true}></Input>
                            <label htmlFor="email">Password</label>
                            <Input placeholder={"Enter Your Password"} type={"password"} req={true}></Input>
                            <Link href={""} className="flex justify-end text-blue-500">Forgot Password?</Link>
                            <Button variant={"primary"} className="items-center justify-center py-4 mt-5 text-base">Sign In</Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}