"use client";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Login({
  heading = "Login",
  subheading = "Welcome back",

  logo = {
    url: "/",
    src: "/logo.png",
    alt: "AdoptNest Logo",
  },

  loginText = "Log in",
  googleText = "Log in with Google",
  signupText = "Don't have an account?",
  signupUrl = "/auth/signup",
}) {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const BASE_URL = "https://adoptnest-server.onrender.com/api";
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.message || "Login failed");
        return;
      }

      toast.success("Logged in successfully");
      router.push("/"); // or wherever you want to redirect
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-8 font-karla">
      <div className="container">
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
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="font-karla"
                    required
                  />
                  <div>
                    <Input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="font-karla"
                      required
                    />
                  </div>
                  {/* <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      className="border-muted-foreground"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password
                  </a>
                </div> */}
                  <Button
                    type="submit"
                    className="mt-2 w-full"
                    disabled={loading}>
                    {loading ? "Logging in..." : loginText}{" "}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FcGoogle className="mr-2 size-5" />
                    {googleText}
                  </Button>
                </div>
              </form>
              <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>{signupText}</p>
                <a
                  href={signupUrl}
                  className="font-medium text-primary font-petrona">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
