import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Remove from './Remove';
import { Skeleton } from '@/components/ui/skeleton';
import Updation from './Updation';

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
                                        <Updation id={user.id} fetchData={fetchData} />
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