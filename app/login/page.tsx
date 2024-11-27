"use client";

import FormButton from "@/app/components/form-btn";
import FormInput from "@/app/components/from-input";
import SocialLogin from "@/app/components/social-login";

import { useActionState } from "react";

import { handleForm } from "./actions";
export default function LogIn() {

  // 서버액션을 클라이언트에서 사용하는 훅
  const [state, action] = useActionState(handleForm,null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      {/* 서버액션 트리거 */}
      <form action={action} className="flex flex-col gap-3">
        <FormInput name="email" type="email" placeholder="Email" required errors={[]} />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          // 서버액션 스테이트
          errors={[state?.errors ?? []]}
        />
        <span>
          <FormButton text="Log in" />
        </span>
      </form>

      <SocialLogin />
    </div>
  );
}
