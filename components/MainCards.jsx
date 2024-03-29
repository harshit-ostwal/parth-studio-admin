"use client"
import axios from 'axios';
import { ChevronsDown, ChevronsUp } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { CardsData } from './Data/Cards';

export default function MainCards() {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState("false");

    useEffect(() => {
        try {
            function userCount() {
                CardsData.map(async (data) => {
                    const res = await axios.get(`/api/${data.endPoint}`);
                    setCount(res.data.userCount);
                })
            }
            userCount();
        } catch (error) {

        }
    }, []);

    if (count != 0) {
        if (count % 2 == 0) {
            setStatus(true);
        }
    }

    return (
        <>
            {
                CardsData.map((data, index) => (
                    <div key={index} className="w-full max-w-sm p-5 space-y-2 bg-gray-100 rounded-lg">
                        <h1 className="font-GilroySemibold text-primary-text">{data.title}</h1>
                        {!status ?
                            <>
                                <p className="flex items-center gap-2 text-red-600 font-GilroyMedium"><ChevronsDown />-{count / count * 100}%</p>
                            </> : <>
                                <p className="flex items-center gap-2 text-green-600 font-GilroyMedium"><ChevronsUp />+{count / count * 100}%</p>
                            </>}
                        <p className="text-4xl font-GilroyBold text-secondary">{count}</p>
                    </div>
                ))
            }
        </>
    )
}