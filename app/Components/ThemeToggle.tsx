"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import useHasMounted from "@/hooks/useHasMounted"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const hasMounted = useHasMounted()
  return (
    <>
      { hasMounted && theme === "light" ? (
        <Button aria-label="dark mode button" onClick={() => setTheme("dark")} className="flex justify-center items-center">
          <Sun className="h-5 w-5"/>
        </Button>
      ) : (
        <Button aria-label="light mode button" onClick={() => setTheme("light")} className="flex justify-center items-center">
          <Moon className="h-5 w-5"/>
        </Button>
      )}
    </>
  );
}
