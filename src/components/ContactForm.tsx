
import React from "react";
import { useContactForm } from "./useContactForm";
import ContactFormFields from "./ContactFormFields";

const ContactForm = () => {
  const {
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
  } = useContactForm();

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-6"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      {/* Netlify needs these hidden inputs */}
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      
      <ContactFormFields
        formData={formData}
        fileSelected={fileSelected}
        fileName={fileName}
        isSubmitting={isSubmitting}
        handleChange={handleChange}
        handleSelectChange={handleSelectChange}
        handleFileChange={handleFileChange}
        setFileSelected={setFileSelected}
        setFileName={setFileName}
      />
    </form>
  );
};

export default ContactForm;
