"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { toast } from "sonner";
import { BASE_URL } from "@/lib/api";

export default function Signup({
  heading = "Register",
  subheading = "Welcome to AdoptNest",

  logo = {
    url: "/",
    src: "/logo.png",
    alt: "AdoptNest Logo",
  },

  signupText = "Sign up",
  googleText = "Sign up with Google",
  loginText = "Already have an account?",
  loginUrl = "/auth/login",
}) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const errors = data.errors || [data.message || "Registration failed"];
        errors.forEach((err) => toast.error(err));
        return;
      }

      toast.success(
        "Registration successful! You're being redirected to the login page."
      );
      router.push("/auth/login");
    } catch (err) {
      toast.error(err.message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="py-8 font-karla">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div className="mx-auto w-full max-w-sm p-6">
            <div className="mb-6 flex flex-col items-center">
              <a href={logo.url} className="mb-6 flex items-center gap-2">
                <Image src={logo.src} width={80} height={80} alt={logo.alt} />
              </a>
              <h1 className="mb-2 text-3xl md:text-4xl lg:text-5xl font-bold font-petrona">
                {heading}
              </h1>
              <p className="text-muted-foreground text-lg">{subheading}</p>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <Input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                  <div>
                    <Input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="password"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="mt-2 w-full"
                    disabled={loading}>
                    {loading ? "Signing up..." : signupText}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FcGoogle className="mr-2 size-5" />
                    {googleText}
                  </Button>
                </div>
              </form>
              <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>{loginText}</p>
                <a
                  href={loginUrl}
                  className="font-medium text-primary font-petrona">
                  Log In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
