import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Edit3 } from 'lucide-react';
import Link from 'next/link';
import Remove from './Remove';
import { Skeleton } from '@/components/ui/skeleton';

export default function UserTable({ data, fetchData, loading }) {

    const tableHeader = [
        "Name",
        "Email ID",
        "Password",
        "Actions"
    ];

    return (
        <>
            <Table className="h-full">
                <TableHeader>
                    <TableRow>
                        {tableHeader.map((title, index) => (
                            <TableCell key={index} className="text-base font-semibold">
                                {title}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {!loading ? (
                        <>
                            {data.map((user, index) => (
                                <TableRow key={index}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.password}</TableCell>
                                    <TableCell className="flex gap-5">
                                        <Remove id={user.id} fetchData={fetchData} />
                                        <Link href={`Users/${user.id}`}><Edit3 size={18} /></Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </>
                    ) : (
                        <>
                            <TableRow>
                                <TableCell><Skeleton className="w-full py-6 bg-neutral-200" /></TableCell>
                                <TableCell><Skeleton className="w-full py-6 bg-neutral-200" /></TableCell>
                                <TableCell><Skeleton className="w-full py-6 bg-neutral-200" /></TableCell>
                                <TableCell><Skeleton className="w-full py-6 bg-neutral-200" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Skeleton className="w-full py-6 bg-neutral-200" /></TableCell>
                                <TableCell><Skeleton className="w-full py-6 bg-neutral-200" /></TableCell>
                                <TableCell><Skeleton className="w-full py-6 bg-neutral-200" /></TableCell>
                                <TableCell><Skeleton className="w-full py-6 bg-neutral-200" /></TableCell>
                            </TableRow>
                        </>
                    )}
                </TableBody>
            </Table >
        </>
    )
}