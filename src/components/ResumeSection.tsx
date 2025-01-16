import { useState } from "react";
import { FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const ResumeSection = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would implement the email sending logic
    toast({
      title: "Success!",
      description: "Resume has been sent to your email.",
    });
    setOpen(false);
    setEmail("");
  };

  const handleDownload = () => {
    // Direct download link to the resume file
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1Dur1uZRVhfkciVi3SFstGBLsACLvFUAq';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-16 bg-gradient-to-b from-white to-accent dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Resume</h2>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[8.5/11] w-full mb-8">
            <iframe
              src="https://drive.google.com/file/d/1Dur1uZRVhfkciVi3SFstGBLsACLvFUAq/preview"
              className="w-full h-full rounded-lg shadow-lg"
              allow="autoplay"
            ></iframe>
          </div>
          
          <div className="flex justify-center">
            <Button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-[#D3E4FD] hover:bg-[#B3D4FF] text-primary font-medium"
            >
              <FileText size={20} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="dark:bg-gray-800">
          <DialogHeader>
            <DialogTitle className="dark:text-white">Download Resume</DialogTitle>
            <DialogDescription className="dark:text-gray-300">
              Enter your email address to receive the resume
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="dark:bg-gray-700 dark:text-white"
            />
            <Button type="submit" className="w-full bg-[#D3E4FD] hover:bg-[#B3D4FF] text-primary font-medium">
              Send Resume
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ResumeSection;