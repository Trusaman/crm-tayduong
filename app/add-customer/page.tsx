"use client";

import CustomerForm from "@/components/CustomerForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AddCustomerPage() {
    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Add New Customer</h1>
                <Button asChild>
                    <Link href="/customers">Back to List</Link>
                </Button>
            </div>
            <CustomerForm />
        </div>
    );
}
