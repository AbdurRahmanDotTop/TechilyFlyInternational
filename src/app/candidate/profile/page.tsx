"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const profileSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  targetTitle: z.string().min(2, "Target title is required"),
  primarySkills: z.string().min(2, "Skills are required"),
  countryOfResidence: z.string().min(2, "Country is required"),
  targetCountry: z.string().min(2, "Target Country is required"),
});

export default function CandidateProfilePage() {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "",
      targetTitle: "",
      primarySkills: "",
      countryOfResidence: "",
      targetCountry: "",
    },
  });

  async function onSubmit(values: z.infer<typeof profileSchema>) {
    console.log(values);
    alert("Profile saved to database (Mock). CVs are skipped per MVP rules.");
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow-sm border">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="targetTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Software Developer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="primarySkills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primary Skills</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. React, Node.js, SQL" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="countryOfResidence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Country</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. India" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="targetCountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Country</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. UAE" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-500 mb-4">
              Note: CV Upload is deferred to use free internal storage solutions (e.g. base64) to strictly avoid paid cloud storage per MVP rules.
            </p>
            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">Save Profile</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
