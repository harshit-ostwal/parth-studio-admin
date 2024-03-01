"use client"
import React, { useEffect, useState } from 'react'
import Creation from './Creation'
import Images from './Images'
import axios from 'axios';

export default function page() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            await axios.get("/api/Gallery").then(res => {
                setData(res.data.galleryImages);
                setLoading(false);
            })
        } catch (error) {
            toast({
                variant: "destructive",
                title: "SS SOFTWARE",
                description: "An Error Occurred While Loading Gallery Data?",
            })
        }
    }

    return (
        <>
            <div className="w-full h-full py-10 space-y-10 overflow-y-auto md:p-5">
                <Creation fetchData={fetchData} />
                <Images data={data} fetchData={fetchData} loading={loading} />
            </div>
        </>
    )
}