"use client"
import { useFormStatus } from "react-dom";

interface FormButtonProps {
  
    text: string;
  }
  
export default function FormButton({ text }: FormButtonProps) {
    
  const { pending } = useFormStatus();
    return (
      <button disabled={pending} className=" flex justify-center items-center h-10
         disabled:bg-neutral-400
          disabled:text-neutral-300 disabled:cursor-not-allowed
           primary-btn">{pending? "로딩중..." : text}</button>
    );
  }