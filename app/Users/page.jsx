"use client"
import React, { useEffect, useState } from 'react'
import Creation from './Creation'
import UserTable from './UserTable'
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
            await axios.get("/api/User").then(res => {
                setData(res.data.fetchUser);
                setLoading(false);
            })
        } catch (error) {
            toast({
                variant: "destructive",
                title: "SS SOFTWARE",
                description: "An Error Occurred While Loading User Data?",
            })
        }
    }

    return (
        <>
            <div className="flex flex-col w-full h-full items-center justify-center gap-10 overflow-y-auto">
                <Creation fetchData={fetchData} />
                <UserTable data={data} fetchData={fetchData} loading={loading} />
            </div>
        </>
    )
}