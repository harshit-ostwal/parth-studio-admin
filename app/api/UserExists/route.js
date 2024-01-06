import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    try {
        const { email } = await req.json();

        const fetchUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (fetchUser === null) {
            return NextResponse.json({ message: "User Not Found?", fetchUser }, { status: 404 });
        }

        return NextResponse.json({ message: "User Already Exists!", fetchUser }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: "User Fetching Error?", error }, { status: 500 });
    }
};