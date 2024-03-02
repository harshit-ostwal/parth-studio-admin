"use client"
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Edit3, Loader2Icon, UploadCloud } from 'lucide-react'
import axios from 'axios'
import { useToast } from '@/components/ui/use-toast'
import Button from '@/components/Button'

export default function Updation({ id, fetchData, imagePublicId }) {

  const { toast } = useToast();
  const [isloading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
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

    if (image == "") {
      toast({
        variant: "destructive",
        title: "SS SOFTWARE",
        description: "Please Select Gallery Image?",
      });
      setIsLoading(false);
      return;
    }


    if (!checkFileSize()) return;

    try {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', process.env.NEXT_PUBLIC_GALLERY_PRESET_NAME);

      await axios.post(`/api/Gallery/${id}`, {
        imagePublicId
      })

      const res = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, formData);

      await axios.post(`/api/Gallery`, {
        imageUrl: res.data.secure_url,
        imagePublicId: res.data.public_id
      });

      toast({
        variant: "success",
        title: "SS SOFTWARE",
        description: "Gallery Image Updation Successfully",
      });

      setIsLoading(false);
      fetchData();

    } catch (error) {
      toast({
        variant: "destructive",
        title: "SS SOFTWARE",
        description: "Gallery Image Updation Failed?",
      });
      setIsLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger className="px-4 py-3 text-sm rounded-md bg-background text-background-text hover:bg-secondary-text hover:text-background focus:bg-background focus:text-background-text">
        <Edit3 size={18} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-white">Edit profile</DialogTitle>
          <DialogDescription className="text-secondary-text">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-5">
          <label className="flex flex-col items-center justify-center gap-3 p-10 border-2 border-dashed rounded-md cursor-pointer border-neutral-200">
            <UploadCloud size={32} color='blue' />
            <div>
              <h5 className="font-bold text-background-text">Click to upload or drag and drop</h5>
              <p className="text-xs font-semibold text-secondary-text">SVG, PNG, JPG or GIF (max. 1920x1080px)</p>
              <input type="file" className="sr-only" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
            </div>
          </label>
          <Button className="w-40 h-14" variant={"secondary"} onClick={handleImage}>
            {
              isloading ?
                <>
                  <Loader2Icon size={24} className="animate-spin" />
                </> : <>
                  Update Image
                </>
            }
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}