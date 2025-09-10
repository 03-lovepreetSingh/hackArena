"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Check, X } from "lucide-react";

export default function JudgeRegisterPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordRequirements = [
    { text: "Be at least 8 characters long", met: password.length >= 8 },
    {
      text: "At least one uppercase letter (A-Z)",
      met: /[A-Z]/.test(password),
    },
    {
      text: "At least one special character",
      met: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left side - Registration form */}
      <div className="flex-1 bg-neutral-900 flex flex-col justify-center px-8 lg:px-16">
        <div className="max-w-md mx-auto w-full">
          <div className="flex items-center gap-3 mb-12">
            <Image src="/logo.png" alt="HackX" width={32} height={32} />
            <span className="text-white text-xl font-semibold">HackX</span>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">
                You were invited to judge!
              </h1>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Congrats! ChainSpark Hackathon has invited you to
                <br />
                be a judge on their hackathon. To proceed please
                <br />
                set up your password below
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {password && (
                <div className="space-y-2">
                  {passwordRequirements.map((req, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      {req.met ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <X className="w-4 h-4 text-red-500" />
                      )}
                      <span
                        className={
                          req.met ? "text-green-500" : "text-neutral-400"
                        }
                      >
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-300"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="text-center text-neutral-400 text-sm">
                U&fnaekda88l!0c
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg">
                Register as a Judge →
              </Button>
            </div>
          </div>

          <div className="mt-16 flex gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-neutral-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neutral-400">
              Terms of use
            </a>
            <div className="ml-auto">x.com</div>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block flex-1">
        <div className="h-full bg-gradient-to-br from-orange-400 to-orange-600 relative overflow-hidden">
          <Image
            src="/modern-office-space-with-developers-working.jpg"
            alt="Office space"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
