
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload } from "lucide-react";

interface ContactFormFieldsProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    projectType: string;
    message: string;
  };
  fileSelected: boolean;
  fileName: string;
  isSubmitting: boolean;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSelectChange: (value: string) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFileSelected: (flag: boolean) => void;
  setFileName: (name: string) => void;
}

export default function ContactFormFields({
  formData,
  fileSelected,
  fileName,
  isSubmitting,
  handleChange,
  handleSelectChange,
  handleFileChange,
  setFileSelected,
  setFileName,
}: ContactFormFieldsProps) {
  return (
    <>
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
            autoComplete="name"
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
            autoComplete="email"
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
            placeholder="8848082647"
            autoComplete="tel"
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
            autoComplete="organization"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="projectType">Project Type</Label>
        <Select
          onValueChange={handleSelectChange}
          value={formData.projectType}
          name="projectType"
        >
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <label
            htmlFor="file"
            className="cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md py-3 px-4 w-full hover:border-cooplix-400 transition-colors"
          >
            <input
              id="file"
              name="file"
              type="file"
              accept=".pdf,.dwg,.dxf,.jpg,.jpeg,.png"
              className="sr-only"
              onChange={handleFileChange}
            />
            {!fileSelected ? (
              <div className="flex flex-col items-center w-full">
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
    </>
  );
}
