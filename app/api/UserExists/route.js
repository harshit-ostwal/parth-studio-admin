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
        return NextResponse.json({ fetchUser });
    } catch (error) {
        return NextResponse.json({ message: "User Fetching Error?", error }, { status: 500 });
    }
};