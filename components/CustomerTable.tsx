import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

interface Customer {
    id: number;
    ma_khach_hang: string;
    ten_khach_hang: string;
    dia_chi: string;
    nhom_kh_ncc: string;
    ma_so_thue: string;
    dien_thoai: string;
    ngung_theo_doi: boolean;
    nguoi_phu_trach: string;
}

export default function CustomerTable() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await fetch("/api/customers");
                const data = await response.json();
                setCustomers(data);
            } catch (error) {
                console.error("Error fetching customers:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCustomers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Customer Code</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Group</TableHead>
                    <TableHead>Tax Code</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Person in Charge</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {customers.map((customer) => (
                    <TableRow key={customer.id}>
                        <TableCell>{customer.ma_khach_hang}</TableCell>
                        <TableCell>{customer.ten_khach_hang}</TableCell>
                        <TableCell>{customer.dia_chi}</TableCell>
                        <TableCell>{customer.nhom_kh_ncc}</TableCell>
                        <TableCell>{customer.ma_so_thue}</TableCell>
                        <TableCell>{customer.dien_thoai}</TableCell>
                        <TableCell>
                            {customer.ngung_theo_doi ? "Inactive" : "Active"}
                        </TableCell>
                        <TableCell>{customer.nguoi_phu_trach}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
