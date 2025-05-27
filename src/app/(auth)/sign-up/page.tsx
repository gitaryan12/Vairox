import { Icons, SignUpForm } from "@/components";
import Image from "next/image";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-start max-w-sm mx-auto h-dvh overflow-hidden pt-4 md:pt-20">
      <div className="flex items-center w-full py-8 border-b border-border/80">
        <Link href="/#home" className="flex items-center gap-x-2">
          <Image
            src={"/icons/logo.png"}
            alt={"Logo"}
            height={35}
            width={35}
            className="rounded-xl"
          />
          <h1 className="text-xl font-semibold tracking-tight">Vairox</h1>
        </Link>
      </div>

      <SignUpForm />

      <div className="flex flex-col items-start w-full">
        <p className="text-sm text-muted-foreground">
          By signing in, you agree to our{" "}
          <Link href="/terms" className="text-primary">
            Terms of Service{" "}
          </Link>
          and{" "}
          <Link href="/privacy" className="text-primary">
            Privacy Policy
          </Link>
        </p>
      </div>
      <div className="flex items-start mt-auto border-t border-border/80 py-6 w-full">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-primary">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
