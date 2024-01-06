import bcrypt from "bcryptjs";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
    try {
        const { id } = params;

        const { updatedName: name, updatedEmail: email, updatedPassword: password } = await req.json();

        const hashPass = await bcrypt.hash(password, 10);

        const updateUser = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                name: name,
                email: email,
                password: hashPass,
            },
        });

        if (!updateUser) {
            return NextResponse.json({ message: "User Not Found?" }, { status: 404 })
        }

        return NextResponse.json({ message: "User Updated!", updateUser }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "User Updation Error?", error }, { status: 500 });
    }
}

export const GET = async (req, { params }) => {
    try {
        const { id } = params;

        const fetchUser = await prisma.user.findMany({
            where: {
                id: id
            },
        });

        if (fetchUser.length === 0) {
            return NextResponse.json({ message: "User Not Found?" }, { status: 404 })
        }

        return NextResponse.json({ message: "User Fetched!", fetchUser }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "User Fetching Error?", error }, { status: 500 });
    }
}

export const DELETE = async (req, { params }) => {
    try {
        const { id } = params;

        const deleteUser = await prisma.user.delete({
            where: {
                id: id
            },
        });

        if (!deleteUser) {
            return NextResponse.json({ message: "User Not Found?" }, { status: 404 })
        }

        return NextResponse.json({ message: "User Deleted!", deleteUser }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "User Fetching Error?", error }, { status: 500 });
    }
}