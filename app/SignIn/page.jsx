import SignIn from '@/components/SignIn'
import { redirect } from 'next/navigation'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export default async function page() {

    const session = await getServerSession(authOptions);
    if (session) {
        redirect("/");
    }

    return (
        <>
            <SignIn />
        </>
    )
}
