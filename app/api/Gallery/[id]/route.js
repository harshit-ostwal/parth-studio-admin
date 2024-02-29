import bcrypt from "bcryptjs";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
    try {
        const { id } = params;
        const { updatedUrl: imageUrl } = await req.json();
        await prisma.gallery.update({
            where: {
                id: id
            },
            data: {
                imageUrl: imageUrl,
            },
        });
        return NextResponse.json({ message: "Gallery Image Updated!" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Gallery Image Updation Error?", error }, { status: 500 });
    }
}

export const GET = async (req, { params }) => {
    try {
        const { id } = params;
        const galleryImage = await prisma.gallery.findMany({
            where: {
                id: id
            },
        });
        return NextResponse.json({ galleryImage });
    } catch (error) {
        return NextResponse.json({ message: "Gallery Image Fetching Error?", error }, { status: 500 });
    }
}

export const DELETE = async (req, { params }) => {
    try {
        const { id } = params;
        await prisma.gallery.delete({
            where: {
                id: id
            },
        });
        return NextResponse.json({ message: "Gallery Image Deleted!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Gallery Image Fetching Error?", error }, { status: 500 });
    }
}