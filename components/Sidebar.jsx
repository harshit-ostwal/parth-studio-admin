import React from 'react';
import { SideBarData } from './Data/Sidebar';
import LinkButton from './LinkButton';

export default function Sidebar() {
    return (
        <>
            <div className="sticky top-0 left-0 hidden w-full h-screen max-w-xs p-5 space-y-10 overflow-y-auto border-r border-dashed border-secondary-text lg:block bg-primary">
                <img src="/Logo/psblack.png" alt="Parth Studio" width={80} />
                {SideBarData.map((data, index) => (
                    <div key={index} className="flex flex-col w-full gap-2">
                        <h1 className="text-xs font-bold text-gray-400">{data.Title}</h1>
                        {data.Menu.map((item, index) => (
                            <LinkButton href={item.href} key={index}>{item.Icon}{item.Title}</LinkButton>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}