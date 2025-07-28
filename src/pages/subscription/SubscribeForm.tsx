// Import yang dibutuhkan
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

// Definisi Skema
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

interface SubscribeFormProps {
  onClose: () => void;
}

// Function Utama
export function SubscribeForm({ onClose }: SubscribeFormProps) {
  //useState
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [success, setSucces] = useState(false);
  // useForm
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); // Tutup modal setelah 2 detik
      return () => clearTimeout(timer);
    }
  }, [success, onClose]);

  // Submit Handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/movldynw", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (res.ok) {
        // Corrected typo: succes -> success
        setSucces(true);
        form.reset();
      } else {
        alert("Email tidak valid");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div
      className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl relative"
      id="subscribe-form"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>
      {success ? (
        <div className="text-green-600 text-center">
          Thanks bro, lo udah subscribe!
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl className="dark:bg-gray-700 dark:text-white">
                    <Input placeholder="email lo bro..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Loading..." : "Langganan Sekarang"}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}
