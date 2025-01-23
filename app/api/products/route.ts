import { NextResponse } from "next/server";

// Mock data for demonstration
const mockProducts = [
    {
        id: 1,
        ma_san_pham: "SP001",
        ten_san_pham: "Product A",
        tinh_chat: "Nature A",
        hoat_chat: "Active A",
        don_vi_tinh: "Piece",
        hinh_anh_san_pham: "/images/product-a.jpg",
        ngung_theo_doi: false,
    },
    // Add more mock data as needed
];

export async function GET() {
    try {
        // Simulate a delay to mimic database operation
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json(mockProducts);
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json(
            { error: "Failed to fetch products" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const product = await request.json();

        // Here you would typically save the data to your database
        console.log("Received product:", product);

        // Simulate a delay to mimic database operation
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: "Product created successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating product:", error);
        return NextResponse.json(
            { error: "Failed to create product" },
            { status: 500 }
        );
    }
}
