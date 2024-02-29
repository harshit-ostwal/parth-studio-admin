"use client"
import Button from '@/components/Button'
import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';
import { Loader2Icon, UploadCloud } from 'lucide-react'
import React, { useState } from 'react'

export default function Creation() {

    const { toast } = useToast();
    const [isloading, setIsLoading] = useState(false);
    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const maxFileSize = 10000;

    const checkFileSize = () => {
        const fileSize = image.size / 1024;
        if (fileSize > maxFileSize) {
            toast({
                variant: "destructive",
                title: "SS SOFTWARE",
                description: "Image must be less than 10 MB.",
            });
            setIsLoading(false);
            return false;
        }
        return true;
    };


    const handleImage = async () => {
        setIsLoading(true);

        if (!checkFileSize()) return;

        try {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', process.env.NEXT_PUBLIC_GALLERY_PRESET_NAME);

            await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, formData).then(
                (res) => {
                    setImageUrl(res.data.secure_url);
                })

            await axios.post(`/api/Gallery`, { imageUrl }).then(() => {
                toast({
                    variant: "success",
                    title: "SS SOFTWARE",
                    description: "Gallery Image Uploaded Successfully",
                });
                setIsLoading(false);
            })
        } catch (error) {
            toast({
                variant: "destructive",
                title: "SS SOFTWARE",
                description: "Uploading Gallery Image Failed?",
            });
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="flex flex-col gap-5">
                <h1 className="text-xl font-bold">Gallery Image Uploading</h1>
                <div className="flex items-center gap-5">
                    <label className="flex flex-col items-center justify-center gap-3 p-10 border-2 border-dashed rounded-md cursor-pointer border-neutral-200">
                        <UploadCloud size={32} color='blue' />
                        <div>
                            <h5 className="font-bold text-zinc-950">Click to upload or drag and drop</h5>
                            <p className="text-xs font-semibold text-zinc-900">SVG, PNG, JPG or GIF (max. 1920x1080px)</p>
                            <input type="file" className="sr-only" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                    </label>
                    <Button className="w-40 h-14" onClick={handleImage}>
                        {
                            isloading ?
                                <>
                                    <Loader2Icon size={24} className="animate-spin" />
                                </> : <>
                                    Upload Image
                                </>
                        }
                    </Button>
                </div>
            </div>
        </>
    )
}