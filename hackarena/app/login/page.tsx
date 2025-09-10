import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Chrome, Apple, Twitter, MessageCircle } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Login form */}
      <div className="flex-1 bg-neutral-900 flex flex-col justify-center px-8 lg:px-16">
        <div className="max-w-md mx-auto w-full">
          <div className="flex items-center gap-3 mb-12">
            <Image src="/logo.png" alt="HackX" width={32} height={32} />
            <span className="text-white text-xl font-semibold">HackX</span>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">Welcome!</h1>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Hack X is a place to take part in a hackathon,
                <br />
                create and manage one or to judge one.
                <br />
                Become a part of HackX community
              </p>
            </div>

            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 h-12"
              />

              <div className="grid grid-cols-4 gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700"
                >
                  <Chrome className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700"
                >
                  <Apple className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700"
                >
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-neutral-900 text-neutral-400">
                    OR
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-white h-12"
                >
                  Metamask Wallet
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-white h-12"
                >
                  WalletConnect
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-white h-12"
                >
                  Coinbase Wallet
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-neutral-800 border-neutral-700 hover:bg-neutral-700 text-white h-12"
                >
                  Metamask Wallet
                </Button>
              </div>
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
            src="/placeholder-r15hy.png"
            alt="Developers working"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
