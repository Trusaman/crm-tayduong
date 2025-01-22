"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import type { ExpenseTemplate } from "@/lib/columns";
import { useToast } from "@/hooks/use-toast";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
    customer_code: z.string().min(1, { message: "Customer code is required" }),
    unit_name: z.string().min(1, { message: "Unit name is required" }),
    medicine_name: z.string().min(1, { message: "Medicine name is required" }),
    active_ingredient: z
        .string()
        .min(1, { message: "Active ingredient is required" }),
    unit: z.string().min(1, { message: "Unit is required" }),
    price_including_vat: z
        .number()
        .min(0, { message: "Price must be a positive number" }),
    doctor: z.string().min(1, { message: "Doctor name is required" }),
    doctor_recipient_code: z
        .string()
        .min(1, { message: "Doctor recipient code is required" }),
    doctor_recipient_name: z
        .string()
        .min(1, { message: "Doctor recipient name is required" }),
    pharmacy_department: z
        .string()
        .min(1, { message: "Pharmacy department is required" }),
    pharmacy_recipient_code: z
        .string()
        .min(1, { message: "Pharmacy recipient code is required" }),
    pharmacy_recipient_name: z
        .string()
        .min(1, { message: "Pharmacy recipient name is required" }),
    health_department: z
        .string()
        .min(1, { message: "Health department is required" }),
    health_recipient_code: z
        .string()
        .min(1, { message: "Health recipient code is required" }),
    health_recipient_name: z
        .string()
        .min(1, { message: "Health recipient name is required" }),
    employee_bonus: z
        .number()
        .min(0, { message: "Employee bonus must be a positive number" }),
    employee_bonus_recipient_code: z
        .string()
        .min(1, { message: "Employee bonus recipient code is required" }),
    employee_bonus_recipient_name: z
        .string()
        .min(1, { message: "Employee bonus recipient name is required" }),
    manager_bonus: z
        .number()
        .min(0, { message: "Manager bonus must be a positive number" }),
    manager_bonus_recipient_code: z
        .string()
        .min(1, { message: "Manager bonus recipient code is required" }),
    manager_bonus_recipient_name: z
        .string()
        .min(1, { message: "Manager bonus recipient name is required" }),
    total_promotion: z
        .number()
        .min(0, { message: "Total promotion must be a positive number" }),
    final_price: z
        .number()
        .min(0, { message: "Final price must be a positive number" }),
    confirmation: z.boolean(),
});

export default function ExpenseTemplateForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const form = useForm<ExpenseTemplate>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            customer_code: "",
            unit_name: "",
            medicine_name: "",
            active_ingredient: "",
            unit: "",
            price_including_vat: 0,
            doctor: "",
            doctor_recipient_code: "",
            doctor_recipient_name: "",
            pharmacy_department: "",
            pharmacy_recipient_code: "",
            pharmacy_recipient_name: "",
            health_department: "",
            health_recipient_code: "",
            health_recipient_name: "",
            employee_bonus: 0,
            employee_bonus_recipient_code: "",
            employee_bonus_recipient_name: "",
            manager_bonus: 0,
            manager_bonus_recipient_code: "",
            manager_bonus_recipient_name: "",
            total_promotion: 0,
            final_price: 0,
            confirmation: false,
        },
    });

    async function onSubmit(values: ExpenseTemplate) {
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/expense-templates", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            toast({
                title: "Success",
                description: "Submitted seccessfully!",
            });
            router.push("/");
        } catch (error) {
            console.error("Error submitting form:", error);
            toast({
                title: "Error",
                description:
                    "An error occurred while submitting the form. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 max-w-3xl mx-auto py-10"
            >
                {/* Customer Information */}
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="customer_code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Customer Code</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter customer code"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <FormField
                    control={form.control}
                    name="unit_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Unit Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter unit name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Medicine Information */}
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="medicine_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Medicine Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter medicine name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="active_ingredient"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Active Ingredient</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter active ingredient"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="unit"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Unit</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter unit"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Price Information */}
                <FormField
                    control={form.control}
                    name="price_including_vat"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price (including VAT)</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="Enter price"
                                    {...field}
                                    onChange={(e) =>
                                        field.onChange(
                                            Number.parseFloat(e.target.value)
                                        )
                                    }
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Doctor Information */}
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="doctor"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Doctor</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter doctor name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="doctor_recipient_code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Doctor Recipient Code</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select doctor recipient code" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="DR001">
                                                DR001
                                            </SelectItem>
                                            <SelectItem value="DR002">
                                                DR002
                                            </SelectItem>
                                            <SelectItem value="DR003">
                                                DR003
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="doctor_recipient_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Doctor Recipient Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter doctor recipient name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Pharmacy Information */}
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="pharmacy_department"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Pharmacy Department</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter pharmacy department"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="pharmacy_recipient_code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Pharmacy Recipient Code
                                    </FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select pharmacy recipient code" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="PH001">
                                                PH001
                                            </SelectItem>
                                            <SelectItem value="PH002">
                                                PH002
                                            </SelectItem>
                                            <SelectItem value="PH003">
                                                PH003
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="pharmacy_recipient_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Pharmacy Recipient Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter pharmacy recipient name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Health Department Information */}
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="health_department"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Health Department</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter health department"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="health_recipient_code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Health Recipient Code</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select health recipient code" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="HD001">
                                                HD001
                                            </SelectItem>
                                            <SelectItem value="HD002">
                                                HD002
                                            </SelectItem>
                                            <SelectItem value="HD003">
                                                HD003
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="health_recipient_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Health Recipient Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter health recipient name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Bonus Information */}
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="employee_bonus"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Employee Bonus</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Enter employee bonus"
                                            {...field}
                                            onChange={(e) =>
                                                field.onChange(
                                                    Number.parseFloat(
                                                        e.target.value
                                                    )
                                                )
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="employee_bonus_recipient_code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Employee Bonus Recipient Code
                                    </FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select employee bonus recipient code" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="EB001">
                                                EB001
                                            </SelectItem>
                                            <SelectItem value="EB002">
                                                EB002
                                            </SelectItem>
                                            <SelectItem value="EB003">
                                                EB003
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="employee_bonus_recipient_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Employee Bonus Recipient Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter employee bonus recipient name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Manager Bonus Information */}
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="manager_bonus"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Manager Bonus</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Enter manager bonus"
                                            {...field}
                                            onChange={(e) =>
                                                field.onChange(
                                                    Number.parseFloat(
                                                        e.target.value
                                                    )
                                                )
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="manager_bonus_recipient_code"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Manager Bonus Recipient Code
                                    </FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select manager bonus recipient code" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="MB001">
                                                MB001
                                            </SelectItem>
                                            <SelectItem value="MB002">
                                                MB002
                                            </SelectItem>
                                            <SelectItem value="MB003">
                                                MB003
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-4">
                        <FormField
                            control={form.control}
                            name="manager_bonus_recipient_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Manager Bonus Recipient Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter manager bonus recipient name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/* Total and Final Price */}
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="total_promotion"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Total Promotion</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Enter total promotion"
                                            {...field}
                                            onChange={(e) =>
                                                field.onChange(
                                                    Number.parseFloat(
                                                        e.target.value
                                                    )
                                                )
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="col-span-6">
                        <FormField
                            control={form.control}
                            name="final_price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Final Price</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Enter final price"
                                            {...field}
                                            onChange={(e) =>
                                                field.onChange(
                                                    Number.parseFloat(
                                                        e.target.value
                                                    )
                                                )
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <FormField
                    control={form.control}
                    name="confirmation"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>Confirmation</FormLabel>
                                <FormDescription>
                                    Check this box to confirm the expense
                                    template details.
                                </FormDescription>
                            </div>
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
            </form>
        </Form>
    );
}
