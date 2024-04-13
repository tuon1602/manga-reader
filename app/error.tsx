"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center gap-5">
      <h2 className="text-primary font-bold text-3xl">Not Found</h2>
      <Image
        src="/assets/images/403.jpg"
        alt="404 not found"
        width={500}
        height={500}
      />
      <Link href="/">
        <Button variant="outline">Về trang chủ</Button>
      </Link>
    </div>
  );
}
