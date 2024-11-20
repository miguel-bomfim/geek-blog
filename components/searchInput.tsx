"use client";

import { useState, useRef, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Custom hook to detect clicks outside of a component
function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

type SearchInput = {
  className: string;
};

export default function Component({ className }: SearchInput) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  useClickOutside(formRef, () => {
    if (isExpanded && !inputValue) {
      setIsExpanded(false);
    }
  });

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission here
    console.log("Search query:", inputRef.current?.value);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`${className} w-full relative flex items-center justify-end`}
    >
      <Input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
        className={`
            absolute bg-white text-black right-0 transition-all duration-300 ease-in-out
            ${isExpanded || inputValue ? "w-64 opacity-100" : "w-10 opacity-0"}
            rounded-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50
          `}
        style={{
          paddingLeft: "0.75rem",
          paddingRight: "2.5rem",
        }}
      />
      <Button
        type={isExpanded ? "submit" : "button"}
        onClick={handleToggle}
        className="absolute right-0 z-10 bg-transparent hover:bg-transparent text-gray-700"
      >
        <LuSearch color={isExpanded ? "black" : "white"} className="h-5 w-5" />
        <span className="sr-only">
          {isExpanded ? "Submit search" : "Expand search"}
        </span>
      </Button>
    </form>
  );
}
