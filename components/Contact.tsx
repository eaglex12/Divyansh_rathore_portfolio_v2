"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify"; // Import the toast function
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

// type SubmitStatus = "success" | "error" | null;

interface FormData extends Record<string, unknown> {
	from_name: string;
	email_id: string;
	message: string;
}

const Contact: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		from_name: "",
		email_id: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	// const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		// setSubmitStatus(null);

		const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
		const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
		const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

		if (!serviceId || !templateId || !userId) {
			// setSubmitStatus("error");
			toast.error("Missing EmailJS configuration!");
			setIsSubmitting(false);
			return;
		}

		try {
			const response = await emailjs.send(
				serviceId,
				templateId,
				formData as Record<string, unknown>,
				userId
			);
			console.log("🚀 ~ handleSubmit ~ response:", response);
			// setSubmitStatus("success");
			setFormData({ from_name: "", email_id: "", message: "" });
			toast.success("Message sent successfully!");
		} catch (error) {
			// setSubmitStatus("error");
			toast.error("Failed to send message. Please try again.");
			console.error("Failed to send message:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="relative">
			<h2 className="text-4xl font-bold mb-6 bg-[#FF90E8] inline-block px-2 transform -rotate-1">
				Contact
			</h2>
			<Card className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow">
				<CardHeader>
					<CardTitle>Get in Touch</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label htmlFor="name" className="block mb-2 font-bold">
								Name
							</label>
							<Input
								type="text"
								id="from_name"
								name="from_name"
								value={formData.from_name}
								onChange={handleChange}
								required
								className="border-2 border-black"
							/>
						</div>
						<div>
							<label htmlFor="email" className="block mb-2 font-bold">
								Email
							</label>
							<Input
								type="email"
								id="email_id"
								name="email_id"
								value={formData.email_id}
								onChange={handleChange}
								required
								className="border-2 border-black"
							/>
						</div>
						<div>
							<label htmlFor="message" className="block mb-2 font-bold">
								Message
							</label>
							<Textarea
								id="message"
								name="message"
								rows={4}
								value={formData.message}
								onChange={handleChange}
								required
								className="border-2 border-black"
							/>
						</div>
						<Button
							type="submit"
							className="bg-[#FFF700] text-black hover:bg-[#FFD700] border-2 border-black"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Sending..." : "Send Message"}
						</Button>
					</form>
				</CardContent>
			</Card>
		</section>
	);
};

export default Contact;
