"use client";

import ProductTable from "@/components/ProductTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <main className="container mx-auto py-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Product Management</h1>
                <Button asChild>
                    <Link href="/add-product">Add New Product</Link>
                </Button>
            </div>
            <ProductTable />
        </main>
    );
}
