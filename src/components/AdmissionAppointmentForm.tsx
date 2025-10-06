"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { showSuccess } from "@/utils/toast";

const formSchema = z.object({
  studentName: z.string().min(2, { message: "Student name must be at least 2 characters." }),
  studentDob: z.date({ required_error: "Date of birth is required." }),
  gradeApplyingFor: z.string({ required_error: "Please select a grade." }),
  lastGradeGpa: z.string().optional(),
  parentName: z.string().min(2, { message: "Parent's name must be at least 2 characters." }),
  contactNo: z.string().min(10, { message: "Contact number must be at least 10 digits." }),
  parentEmail: z.string().email({ message: "Please enter a valid email address." }),
  appointmentDate: z.date({ required_error: "Preferred appointment date is required." }),
  message: z.string().optional(),
});

const AdmissionAppointmentForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      gradeApplyingFor: "",
      lastGradeGpa: "",
      parentName: "",
      contactNo: "",
      parentEmail: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const schoolEmail = "scholarshome810@gmail.com";
    const subject = encodeURIComponent("Admission Appointment Request");

    const body = `
Student's Name: ${values.studentName}
Student's Date of Birth: ${format(values.studentDob, "PPP")}
Grade Applying For: ${values.gradeApplyingFor}
Scored GPA in Last Grade: ${values.lastGradeGpa || "N/A"}
Parent's Name: ${values.parentName}
Contact Number: ${values.contactNo}
Parent's Email: ${values.parentEmail}
Preferred Appointment Date: ${format(values.appointmentDate, "PPP")}
Additional Message: ${values.message || "N/A"}
    `.trim();

    const mailtoLink = `mailto:${schoolEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");

    showSuccess("Email draft opened! Please send it from your email client.");
    form.reset(); // Reset form fields
  };

  const grades = Array.from({ length: 10 }, (_, i) => `Grade ${i + 1}`);
  grades.unshift("Playgroup", "Nursery", "LKG", "UKG");

  return (
    <div className="p-6 border rounded-lg shadow-sm bg-card">
      <h2 className="text-2xl font-semibold text-center mb-2">Schedule Admission Appointment</h2>
      <p className="text-muted-foreground text-center mb-6">
        Fill out the form below to request an admission appointment. Upon submission, an email draft will open in your default email client. Please send it to complete your request.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
          <FormField
            control={form.control}
            name="studentName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student's Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="studentDob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Student's Date of Birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gradeApplyingFor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Grade Applying For</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a grade" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {grades.map((grade) => (
                      <SelectItem key={grade} value={grade}>
                        {grade}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastGradeGpa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Scored GPA in Last Grade (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 3.5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="parentName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parent's Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Jane Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 9876543210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="parentEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parent's Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="e.g., jane.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="appointmentDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Preferred Appointment Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()} // Disable past dates
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Any specific questions or requests?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Request Appointment
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AdmissionAppointmentForm;