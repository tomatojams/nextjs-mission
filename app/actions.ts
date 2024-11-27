"use server";
import { z } from "zod";

// Zod 스키마 정의
const schema = z.object({
  email: z
    .string()
    .email()
    .regex(/@zod\.com$/, {
      message: "Only @zod.com emails are allowed",
    }),
  username: z.string().min(5, {
    message: "Username must be at least 5 characters long",
  }),
  password: z
    .string()
    .min(10, { message: "Password must be at least 10 characters long" })
    .regex(/\d/, { message: "Password must include at least one number" }),
});

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };

  console.log("Received data:", data); // 디버깅용

  try {
    // Zod 스키마로 데이터 검증
    schema.parse(data);

    return {
      success: true,
      errors: {},
      message: "Account created successfully!",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("Zod errors:", error.errors); // 디버깅용
      const fieldErrors: Record<string, string> = {};
      error.errors.forEach((err) => {
        console.log("Error path:", err.path); // 추가 확인
        if (err.path && err.path.length > 0) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      return {
        success: false,
        errors: fieldErrors,
        message: "Validation failed",
      };
    }
    return {
      success: false,
      errors: {},
      message: "An unexpected error occurred.",
    };
  }
}
