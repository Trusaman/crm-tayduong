import ExpenseTemplateForm from "@/components/ExpenseTemplateForm"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AddExpensePage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Add New Expense Template</h1>
        <Button asChild>
          <Link href="/">Back to List</Link>
        </Button>
      </div>
      <ExpenseTemplateForm />
    </div>
  )
}

