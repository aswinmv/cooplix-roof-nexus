
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

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
  const [fileObject, setFileObject] = useState<File | null>(null);

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
      setFileObject(file);
    } else {
      setFileSelected(false);
      setFileName("");
      setFileObject(null);
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
    setFileObject(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Upload file if one is selected
      let fileUrl = "";
      if (fileSelected && fileObject) {
        // Generate a unique file path using the original file name and current timestamp
        const filePath = `${Date.now()}-${fileName}`;
        
        // Upload the file to Supabase Storage
        const { data: fileData, error: fileError } = await supabase
          .storage
          .from('contact-files')
          .upload(filePath, fileObject, {
            cacheControl: '3600',
            upsert: false
          });
          
        if (fileError) {
          console.error("File upload error:", fileError);
          toast.error("Failed to upload file. Please try again.");
          setIsSubmitting(false);
          return;
        }
        
        // If file uploaded successfully, get the public URL
        if (fileData) {
          const { data: publicUrlData } = supabase
            .storage
            .from('contact-files')
            .getPublicUrl(fileData.path);
            
          fileUrl = publicUrlData.publicUrl;
        }
      }
      
      // Save contact submission to the database
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          project_type: formData.projectType,
          message: formData.message,
          file_name: fileSelected ? fileName : null,
          file_url: fileUrl || null
        });
        
      if (error) {
        console.error("Submission error:", error);
        toast.error("There was a problem submitting your form. Please try again.");
      } else {
        toast.success("Your message has been sent successfully! We'll get back to you soon.");
        resetForm();
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
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
