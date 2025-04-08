import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "../lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("w-full py-8 bg-gray-50", className)}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-8">
          <a
            href="https://linkedin.com/in/felipeborgaco"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 text-blue-500 hover:text-blue-600"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:felipeborgaco@hotmail.com"
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 text-red-500 hover:text-red-600"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/felipebrgs1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-gray-900"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
