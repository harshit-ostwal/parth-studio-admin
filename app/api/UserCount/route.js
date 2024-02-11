import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
    try {
        const userCount = await prisma.user.count();
        return NextResponse.json({ userCount });
    } catch (error) {
        return NextResponse.json({ message: "User Fetching Data Error?", error }, { status: 500 });
    }
}