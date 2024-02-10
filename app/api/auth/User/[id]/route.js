import bcrypt from "bcryptjs";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
    try {
        const { id } = params;
        const { updatedName: name, updatedEmail: email, updatedPassword: password } = await req.json();
        const hashPass = await bcrypt.hash(password, 10);
        await prisma.user.update({
            where: {
                id: id
            },
            data: {
                name: name,
                email: email,
                password: hashPass,
            },
        });
        return NextResponse.json({ message: "User Updated!" }, { status: 201 });
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
        return NextResponse.json({ fetchUser });
    } catch (error) {
        return NextResponse.json({ message: "User Fetching Error?", error }, { status: 500 });
    }
}

export const DELETE = async (req, { params }) => {
    try {
        const { id } = params;
        await prisma.user.delete({
            where: {
                id: id
            },
        });
        return NextResponse.json({ message: "User Deleted!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "User Fetching Error?", error }, { status: 500 });
    }
}