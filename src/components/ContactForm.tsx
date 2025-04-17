
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully! We'll get back to you soon.");
      setIsSubmitting(false);
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
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="ABC Construction"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="projectType">Project Type</Label>
        <Select onValueChange={handleSelectChange} value={formData.projectType}>
          <SelectTrigger id="projectType">
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="residential">Residential</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
            <SelectItem value="industrial">Industrial</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project and requirements..."
          rows={5}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="file">Upload Plans (optional)</Label>
        <div className="flex items-center">
          <label 
            htmlFor="file" 
            className="cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md py-3 px-4 w-full hover:border-cooplix-400 transition-colors"
          >
            <input
              id="file"
              type="file"
              accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png"
              className="sr-only"
              onChange={handleFileChange}
            />
            {!fileSelected ? (
              <div className="flex flex-col items-center">
                <Upload className="w-6 h-6 text-gray-400 mb-2" />
                <span className="text-sm text-gray-500">
                  Click to upload plans or drag and drop
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  PDF, DWG, DXF, JPG up to 10MB
                </span>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-sm text-cooplix-600 mr-2">
                  {fileName}
                </span>
                <Button 
                  type="button" 
                  variant="ghost" 
                  className="text-xs text-gray-500 hover:text-gray-700 p-0"
                  onClick={(e) => {
                    e.preventDefault();
                    setFileSelected(false);
                    setFileName("");
                  }}
                >
                  Change
                </Button>
              </div>
            )}
          </label>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-cooplix-500 hover:bg-cooplix-600 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
