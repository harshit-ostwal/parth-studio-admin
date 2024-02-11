import bcrypt from "bcryptjs";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    try {
        const { name, email, password } = await req.json();
        const hashPass = await bcrypt.hash(password, 10);
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashPass,
            },
        });
        return NextResponse.json({ message: "User Created!" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "User Creation Error?", error }, { status: 500 });
    }
};

export const GET = async (req, res) => {
    try {
        const fetchUser = await prisma.user.findMany();
        return NextResponse.json({ fetchUser });
    } catch (error) {
        return NextResponse.json({ message: "User Fetching Data Error?", error }, { status: 500 });
    }
}