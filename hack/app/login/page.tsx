'use client';

import React from 'react'
import { HackXLogo } from './HackXLogo'
import { SocialLoginButton } from './SocialLoginButton'
import { WalletLoginButton } from './WalletLoginButton'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useAccount } from 'wagmi';
export default function LoginScreen() {
  const { data: session, status } = useSession();
  const { address, isConnected } = useAccount();

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f1011] text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome back!</h1>
          <p className="text-[#949fa8] mb-4">Signed in as: {session.address}</p>
          <button
            onClick={() => signOut()}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-[#0f1011]">
      {/* Left Column - Login Form */}
      <div className="w-full md:w-2/5 flex flex-col items-center justify-between p-8 md:p-12">
        <div className="w-full max-w-md flex flex-col items-center">
          {/* Logo */}
          <header className="mb-8">
            <HackXLogo />
          </header>
          {/* Welcome Text */}
          <h1 className="text-2xl font-bold text-white mb-4">Welcome!</h1>
          {/* Description */}
          <p className="text-[#949fa8] text-center mb-8 text-sm">
            Hack X is a place to take part in a hackathon, create and manage one
            or to judge one. Become a part of HackX community
          </p>
          {/* Login Form */}
          <form className="w-full">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#0f1011] border border-[#1b1b1e] rounded-md p-4 mb-4 text-white focus:outline-none focus:border-[#0092ff]"
            />
            {/* Social Login Buttons */}
            <div className="grid grid-cols-4 gap-2 mb-6">
              <SocialLoginButton provider="google" />
              <SocialLoginButton provider="apple" />
              <SocialLoginButton provider="x" />
              <SocialLoginButton provider="discord" />
            </div>
            {/* Divider */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex-grow h-px bg-[#1b1b1e]"></div>
              <span className="px-4 text-xs text-[#949fa8]">OR</span>
              <div className="flex-grow h-px bg-[#1b1b1e]"></div>
            </div>
            {/* Wallet Login Buttons */}
            <div className="flex flex-col gap-3 mb-8">
                <ConnectButton />
                {isConnected && (
                  <button
                    onClick={() => signIn('credentials')}
                    className="w-full bg-[#0092ff] hover:bg-[#0080e6] text-white py-3 px-4 rounded-md transition-colors font-medium"
                  >
                    Sign In with Ethereum
                  </button>
                )}
                <WalletLoginButton provider="metamask" />
                <WalletLoginButton provider="walletconnect" />
                <WalletLoginButton provider="coinbase" />
            </div>
          </form>
        </div>
        {/* Footer Links */}
        <footer className="w-full flex justify-between text-xs text-[#949fa8] mt-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of use
          </a>
          <a href="#" className="hover:underline">
            x.com
          </a>
        </footer>
      </div>
      {/* Right Column - Image */}
      <div
        className="w-full md:w-3/5 bg-cover bg-center min-h-[300px] md:min-h-screen"
        style={{
          backgroundImage: `url(/login_page.png)`,
        }}
      ></div>
    </div>
  )
}
