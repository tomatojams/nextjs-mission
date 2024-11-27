"use client";

import FormButton from "./components/form-btn";
import FormInput from "./components/from-input";
import { createAccount } from "./actions";
import { useActionState } from "react";

export default function Home() {
  const [state, trigger] = useActionState(createAccount, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col items-center justify-center gap-2 *:font-medium">
        <h1 className="text-2xl">⭐ Create Account</h1>
      </div>
      <form action={trigger} className="flex flex-col gap-3">
        <div>
          <FormInput name="email" type="email" placeholder="Email" required={false} errors={[]} />
          {state?.errors?.email && (
            <span className="text-red-500 text-sm">{state.errors.email}</span>
          )}
        </div>
        <div>
          <FormInput
            name="username"
            type="text"
            placeholder="Username"
            required={false}
            errors={[]}
          />
          {state?.errors?.username && (
            <span className="text-red-500 text-sm">{state.errors.username}</span>
          )}
        </div>
        <div>
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            required={false}
            errors={[]}
          />
          {state?.errors?.password && (
            <span className="text-red-500 text-sm">{state.errors.password}</span>
          )}
        </div>
        <div className="relative">
          <FormButton text="Create Account" />
          {state?.success && (
            <div
              className="absolute top-full mt-2 bg-green-500 text-white text-center py-2"
              style={{ width: "100%" }}>
              {state.message}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
