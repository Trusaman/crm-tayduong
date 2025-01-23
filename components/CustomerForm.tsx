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

const customerFormSchema = z.object({
    ma_khach_hang: z.string().min(1, "Customer code is required"),
    ten_khach_hang: z.string().min(1, "Customer name is required"),
    dia_chi: z.string().min(3, "Customer address is required"),
    nhom_kh_ncc: z.string(),
    ma_so_thue: z.string(),
    dien_thoai: z.string(),
    nguoi_phu_trach: z.string().min(1, "Person in charge is required"),
    ngung_theo_doi: z.boolean().default(false),
});

type CustomerFormValues = z.infer<typeof customerFormSchema>;

export default function CustomerForm() {
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm<CustomerFormValues>({
        resolver: zodResolver(customerFormSchema),
        defaultValues: {
            ma_khach_hang: "",
            ten_khach_hang: "",
            dia_chi: "",
            nhom_kh_ncc: "",
            ma_so_thue: "",
            dien_thoai: "",
            nguoi_phu_trach: "",
            ngung_theo_doi: false,
        },
    });

    async function onSubmit(data: CustomerFormValues) {
        try {
            const response = await fetch("/api/customers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to create customer");

            toast({
                title: "Success",
                description: "Customer created successfully",
                variant: "default",
            });
            router.push("/customers");
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
                    name="ma_khach_hang"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Customer Code</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="ten_khach_hang"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Customer Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="dia_chi"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="nhom_kh_ncc"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Customer Group</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="ma_so_thue"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tax Code</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="dien_thoai"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="nguoi_phu_trach"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Person in Charge</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter person in charge"
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
                            <FormLabel>Inactive</FormLabel>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
