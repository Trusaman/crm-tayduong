"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const productFormSchema = z.object({
    ma_san_pham: z.string().min(1, "Product code is required"),
    ten_san_pham: z.string().min(1, "Product name is required"),
    tinh_chat: z.string().min(1, "Nature is required"),
    hoat_chat: z.string().min(1, "Active ingredient is required"),
    don_vi_tinh: z.string().min(1, "Unit is required"),
    hinh_anh_san_pham: z.string().optional(),
    ngung_theo_doi: z.boolean().default(false),
});

type ProductFormValues = z.infer<typeof productFormSchema>;

export default function ProductForm() {
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            ma_san_pham: "",
            ten_san_pham: "",
            tinh_chat: "",
            hoat_chat: "",
            don_vi_tinh: "",
            hinh_anh_san_pham: "",
            ngung_theo_doi: false,
        },
    });

    async function onSubmit(data: ProductFormValues) {
        try {
            const response = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit");
            }

            toast({
                title: "Success",
                description: "Product created successfully",
            });

            router.push("/products");
            router.refresh();
        } catch (error) {
            console.log(error);
            toast({
                title: "Error",
                description:
                    "An error occurred while submitting the form. Please try again.",
                variant: "destructive",
            });
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="ma_san_pham"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Product Code</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter product code"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="ten_san_pham"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Product Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter product name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="tinh_chat"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nature</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter nature" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="hoat_chat"
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

                <FormField
                    control={form.control}
                    name="don_vi_tinh"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Unit</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter unit" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="hinh_anh_san_pham"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Product Image URL</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter image URL"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="ngung_theo_doi"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <FormLabel>Discontinued</FormLabel>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
