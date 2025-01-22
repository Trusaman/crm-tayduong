import ExpenseTemplateTable from "@/components/ExpenseTemplateTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="container mx-auto py-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Expense Template CRM</h1>
                <Button asChild>
                    <Link href="/add-expense">Add New Expense</Link>
                </Button>
            </div>
            <ExpenseTemplateTable />
        </main>
    );
}
