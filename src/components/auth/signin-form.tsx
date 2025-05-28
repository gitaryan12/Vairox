"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Label } from "../ui/label";
import { EnCryptInput } from "@/utils/functions/customFunction";

interface SignInForm {
  email: string;
  password: string;
}

const SignInForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<signInform>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    // if (!isLoaded) return;

    if (!formData?.email || !formData?.password) {
      setIsLoading(false);
      toast.error("Email and password are required!");
      return;
    }

    setIsLoading(true);

    try {
      const signInAttempt = await signIn.create({
        identifier: formData?.email,
        password: EnCryptInput(formData?.password),
        redirectUrl: "/auth-callback",
      });

      if (signInAttempt.status === "complete") {
        await setActive({
          session: signInAttempt.createdSessionId,
        });
        router.push("/auth-callback");
      } else {
        console.log(JSON.stringify(signInAttempt, null, 2));
        toast.error("Invalid email or password");
        setIsLoading(false);
      }
    } catch (error: any) {
      switch (error.errors[0]?.code) {
        case "form_identifier_not_found":
          toast.error("This email is not registered. Please sign up first.");
          break;
        case "form_password_incorrect":
          toast.error("Incorrect password. Please try again.");
          break;
        case "too_many_attempts":
          toast.error("Too many attempts. Please try again later.");
          break;
        default:
          toast.error("An error occurred. Please try again");
          break;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-y-6 py-8 w-full px-0.5">
      <h2 className="text-2xl font-semibold">Sign in to Vairox</h2>

      <form onSubmit={handleSignIn} className="w-full">
        <div className="space-y-2 w-full">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData?.email}
            disabled={false}
            onChange={(e) => {
              setFormData((prevData: any) => {
                return {
                  ...prevData,
                  email: e.target.value,
                };
              });
            }}
            placeholder="Enter your email"
            className="w-full focus-visible:border-foreground"
          />
        </div>
        <div className="mt-4 space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative w-full">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              disabled={ isLoading}
              onChange={(e) => {
                setFormData((prevData: any) => {
                  return {
                    ...prevData,
                    password: e.target.value,
                  };
                });
              }}
              placeholder="Enter your password"
              className="w-full focus-visible:border-foreground"
            />
            <Button
              type="button"
              size="icon"
              variant="ghost"
              disabled={ isLoading}
              className="absolute top-1 right-1"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
        <div className="mt-4 w-full">
          <Button
            type="submit"
            disabled={ isLoading}
            className="w-full"
          >
            {isLoading ? (
              <LoaderIcon className="w-5 h-5 animate-spin" />
            ) : (
              "Sign in with email"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
