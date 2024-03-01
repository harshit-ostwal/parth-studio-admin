import React from 'react'
import Remove from './Remove';
import Updation from './Updation';
import { Skeleton } from '@/components/ui/skeleton';

export default function Images({ data, fetchData, loading }) {

    return (
        <>
            <div className="gap-2 space-y-2 columns-1 md:columns-2 lg:columns-3 xl:columns-4">
                {!loading ?
                    <>{
                        data.map((image, index) => (
                            <div key={index} className="relative flex items-center justify-center p-2 rounded-md group">
                                <img src={image.imageUrl} loading="lazy" onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/No Image.png';
                                    e.target.width = 200;
                                }} alt="Parth Studios" className="object-cover rounded-xl" />
                                <div className="absolute bottom-0 flex gap-2 duration-300 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 left-1/2">
                                    <Remove fetchData={fetchData} id={image.id} imagePublicId={image.imagePublicId} />
                                    <Updation fetchData={fetchData} id={image.id} imagePublicId={image.imagePublicId} />
                                </div>
                            </div>
                        ))
                    }
                    </> : <>
                        <Skeleton className="w-full h-60 bg-neutral-200" />
                        <Skeleton className="w-full h-60 bg-neutral-200" />
                        <Skeleton className="w-full h-60 bg-neutral-200" />
                        <Skeleton className="w-full h-60 bg-neutral-200" />
                        <Skeleton className="w-full h-60 bg-neutral-200" />
                        <Skeleton className="w-full h-60 bg-neutral-200" />
                        <Skeleton className="w-full h-60 bg-neutral-200" />
                        <Skeleton className="w-full h-60 bg-neutral-200" />
                    </>}
            </div >
        </>
    )
}