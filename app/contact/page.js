"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", form);
    //  API or logic here
    toast.success("Message sent successfully! 🎉");

    // Reset form
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-background text-foreground px-4 py-20 lg:px-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-muted-foreground mt-2">
          We’d love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <MapPin className="text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Our Office</h3>
                <p className="text-muted-foreground">
                  123 Developer Lane, Tech City
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Mail className="text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-muted-foreground">support@yourwebsite.com</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Phone className="text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-muted-foreground">+91 12345 67890</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-card p-8 rounded-xl shadow-md"
        >
          <Input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
