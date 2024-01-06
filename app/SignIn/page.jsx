import SignIn from '@/components/SignIn'
import { redirect } from 'next/navigation'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function page() {

    //Getting The SignIn Session
    const session = await getServerSession(authOptions);

    //Checking SignIn Or Not
    if (session) {
        redirect("/");
    }

    return (
        <>
            <SignIn />
        </>
    )
}
