import { NextResponse } from "next/server";

// Mock data for demonstration
const mockCustomers = [
    {
        id: 1,
        ma_khach_hang: "KH001",
        ten_khach_hang: "ABC Company",
        dia_chi: "123 Main St",
        nhom_kh_ncc: "Corporate",
        ma_so_thue: "0123456789",
        dien_thoai: "0901234567",
        ngung_theo_doi: false,
        nguoi_phu_trach: "John Doe",
    },
    // Add more mock data as needed
];

export async function GET() {
    try {
        // Simulate a delay to mimic database operation
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json(mockCustomers);
    } catch (error) {
        console.error("Error fetching customers:", error);
        return NextResponse.json(
            { error: "Failed to fetch customers" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const customer = await request.json();

        // Here you would typically save the data to your database
        console.log("Received customer:", customer);

        // Simulate a delay to mimic database operation
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: "Customer created successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating customer:", error);
        return NextResponse.json(
            { error: "Failed to create customer" },
            { status: 500 }
        );
    }
}
