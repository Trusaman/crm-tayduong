"use client";

import ProductForm from "@/components/ProductForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AddProductPage() {
    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Add New Product</h1>
                <Button asChild>
                    <Link href="/products">Back to List</Link>
                </Button>
            </div>
            <ProductForm />
        </div>
    );
}
