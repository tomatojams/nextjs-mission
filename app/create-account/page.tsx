
import FormInput from "@/app/components/from-input";
import FormButton from "@/app/components/form-btn";
import SocialLogin from "../components/social-login";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          required={true}
          errors={[]}></FormInput>

        <FormInput
          name="email"
          type="email"
          placeholder="email"
          required={true}
          errors={[]}></FormInput>
        <FormInput
          name="password"
          type="password"
          placeholder="password"
          required={true}
          errors={[]}></FormInput>
        <FormInput
          name="passwordConfirm"
          type="password"
          placeholder="password confirm"
          required={true}
          errors={[]}></FormInput>
    <FormButton text="Create account"></FormButton>
      </form>
      <SocialLogin
      
      ></SocialLogin>
    </div>
  );
}
