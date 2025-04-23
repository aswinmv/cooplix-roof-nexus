
import { useState } from "react";
import { toast } from "sonner";

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  message: string;
}

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [fileSelected, setFileSelected] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileSelected(true);
      setFileName(file.name);
    } else {
      setFileSelected(false);
      setFileName("");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      message: "",
    });
    setFileSelected(false);
    setFileName("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default and show toast locally, allow submit on Netlify prod.
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        toast.success(
          "Your message has been sent successfully! We'll get back to you soon."
        );
        setIsSubmitting(false);
        resetForm();
      }, 1500);
    } else {
      // On production, we still want to show the loading state
      setIsSubmitting(true);
      
      // We don't prevent default here to allow the native form submission to Netlify
      // But we do want to reset the form after submission is complete
      setTimeout(() => {
        setIsSubmitting(false);
        resetForm();
      }, 1500);
    }
  };

  return {
    isSubmitting,
    formData,
    fileSelected,
    fileName,
    handleChange,
    handleSelectChange,
    handleFileChange,
    handleSubmit,
    setFileSelected,
    setFileName,
  };
}
