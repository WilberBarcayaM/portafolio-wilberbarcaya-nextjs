"use client";

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const ContactForm = () => {
    const [succesForm, setSuccesForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = z.object({
        username: z.string().min(2).max(50),
        email: z.string().email(),
        message: z.string(),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        const response = await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify(values),
        });
        setIsLoading(false);
        if (response.status === 200) {
            setSuccesForm(true);
            form.reset();
            setTimeout(() => setSuccesForm(false), 3000);
        }
    };

    return (
        <Form {...form}>
            {succesForm && (
                <h4 className="text-green-500 font-medium mb-4">Message sent successfully ✌️</h4>
            )}
            {!succesForm && (
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className=" space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Your name"
                                        {...field}
                                        className="dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Your email"
                                        {...field}
                                        className="dark:bg-slate-800"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        placeholder="Write your message"
                                        {...field}
                                        className="dark:bg-slate-800 min-h-36"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 size={16} className="mr-2 animate-spin" /> Sending
                            </>
                        ) : (
                            "Send"
                        )}
                    </Button>
                </form>
            )}
        </Form>
    );
};

export default ContactForm;
