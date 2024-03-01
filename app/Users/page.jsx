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
            <div className="w-full h-full py-10 overflow-y-auto md:px-5">
                <Creation fetchData={fetchData} />
                <UserTable data={data} fetchData={fetchData} loading={loading} />
            </div>
        </>
    )
}