import LoginForm from "@/src/auth/loginForm";

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[70vh]  flex-col items-center justify-center px-4 ">
            <div className="border-2 p-4 items-center ">
        <h1 className="mb-8 text-2xl font-bold">ورود به حساب کاربری</h1>
      <LoginForm />
      </div>
    </div>
  );
}