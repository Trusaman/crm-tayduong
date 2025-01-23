"use client";

import CustomerTable from "@/components/CustomerTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CustomersPage() {
    return (
        <main className="container mx-auto py-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Customer Management</h1>
                <Button asChild>
                    <Link href="/add-customer">Add New Customer</Link>
                </Button>
            </div>
            <CustomerTable />
        </main>
    );
}
