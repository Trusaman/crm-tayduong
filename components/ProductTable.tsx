"use client";

import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

interface Product {
    id: number;
    ma_san_pham: string;
    ten_san_pham: string;
    tinh_chat: string;
    hoat_chat: string;
    don_vi_tinh: string;
    hinh_anh_san_pham: string;
    ngung_theo_doi: boolean;
}

export default function ProductTable() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/products");
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
                toast({
                    title: "Error",
                    description: "Failed to fetch products. Please try again.",
                    variant: "destructive",
                });
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [toast]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Product Code</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Nature</TableHead>
                    <TableHead>Active Ingredient</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell>{product.ma_san_pham}</TableCell>
                        <TableCell>{product.ten_san_pham}</TableCell>
                        <TableCell>{product.tinh_chat}</TableCell>
                        <TableCell>{product.hoat_chat}</TableCell>
                        <TableCell>{product.don_vi_tinh}</TableCell>
                        <TableCell>
                            {product.ngung_theo_doi ? "Discontinued" : "Active"}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
