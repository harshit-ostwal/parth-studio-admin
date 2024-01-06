import bcrypt from "bcryptjs";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    try {
        const { name, email, password } = await req.json();

        const hashPass = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashPass,
            },
        });

        if (!newUser) {
            return NextResponse.json({ message: "User Not Found?" }, { status: 500 })
        }

        return NextResponse.json({ message: "User Created", newUser }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "User Creation Error?", error }, { status: 500 });
    }
};