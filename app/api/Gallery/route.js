import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    try {
        const { imageUrl, imagePublicId } = await req.json();
        await prisma.gallery.create({
            data: {
                imageUrl,
                imagePublicId
            },
        });
        return NextResponse.json({ message: "Gallery Image Created!" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Gallery Image Creation Error?", error }, { status: 500 });
    }
};

export const GET = async (req, res) => {
    try {
        const galleryImages = await prisma.gallery.findMany();
        return NextResponse.json({ galleryImages });
    } catch (error) {
        return NextResponse.json({ message: "Gallery Image Fetching Data Error?", error }, { status: 500 });
    }
}