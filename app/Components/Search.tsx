"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { useRouter } from "next/navigation";


const Search = () => {
  const [keyword, setKeyword] = useState<string>("");
  const router = useRouter()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && keyword.length < 3) {
        toast.warning("Bạn phải nhập số kí tự lớn hơn 3",{
          duration:2000
        })
    }
    else if ( e.key === "Enter" && keyword.length >=3){
        router.push(`/search/${keyword}`)
        setKeyword("")
    }
  };
  return (
    <div>
      <Input
        placeholder="Nhập tên manga"
        className="p-5 focus-visible:ring-0 border-primary"
        value={keyword}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default Search;
