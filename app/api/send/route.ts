// re_VwPskRvF_QH5dNR4dLjGAdzZ6tWNhExLt

import { Resend } from "resend";
import { Emailtemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const dataForm = await req.json();
        try {
            const data = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: ["barcayamuruchiwilber@gmail.com"],
                subject: "Wilber Barcaya Landing",
                react: Emailtemplate({
                    firstName: dataForm.username,
                    message: dataForm.message,
                    email: dataForm.email,
                }),
                text: "Wilber Barcaya"
            });
            return Response.json(data);
        } catch (error) {
            return Response.json({ error });
        }
    } catch (error) {
        return Response.json({ error });
    }
}
