import { NextResponse } from "next/server";
import type { ExpenseTemplate } from "@/lib/columns";
import { mockData } from "@/lib/mock-data";

export async function GET(request: Request) {
    try {
        // Here you would typically fetch data from your database
        // For this example, we'll use the mock data
        const expenseTemplates: ExpenseTemplate[] = mockData;

        // Simulate a delay to mimic database operation
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json(expenseTemplates);
    } catch (error) {
        console.error("Error fetching expense templates:", error);
        return NextResponse.json(
            { error: "Failed to fetch expense templates" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const expenseTemplate: ExpenseTemplate = await request.json();

        // Here you would typically save the data to your database
        // For this example, we'll just log it and return a success response
        console.log("Received expense template:", expenseTemplate);

        // Simulate a delay to mimic database operation
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // In a real application, you might want to add the new template to your data store
        // mockData.push(expenseTemplate);

        return NextResponse.json(
            { message: "Expense template created successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating expense template:", error);
        return NextResponse.json(
            { error: "Failed to create expense template" },
            { status: 500 }
        );
    }
}
