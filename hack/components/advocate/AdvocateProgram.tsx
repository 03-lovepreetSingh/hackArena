"use client";
import React from "react";
import { Award, Target, Users, Zap, BarChart, Globe } from "lucide-react";
export const AdvocateProgram = () => {
  return (
    <div>
      <div className="rounded-xl overflow-hidden bg-gradient-to-r from-[#0092ff] to-[#472915] text-white mb-10">
        <div className="p-8 relative">
          <div className="mt-8">
            <h1 className="text-4xl font-bold mb-4">Become a HackX Advocate</h1>
            <h2 className="text-2xl font-bold mb-6">
              Represent the future of Web3 innovation
            </h2>
            <p className="max-w-2xl mb-6">
              Join our exclusive community of Web3 advocates and help shape the
              future of blockchain technology. Gain early access to new
              features, exclusive events, and earn rewards for contributing to
              the ecosystem.
            </p>
            <button className="bg-white text-black rounded-md px-4 py-2 hover:bg-white/90 transition-colors flex items-center">
              Apply Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-6">Program Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6 flex flex-col items-center text-center">
          <div className="bg-[#1b1b1e] p-4 rounded-full mb-4 text-[#0092ff]">
            <Award className="h-8 w-8" />
          </div>
          <h3 className="font-bold text-lg mb-2">Exclusive Rewards</h3>
          <p className="text-[#949fa8]">
            Earn tokens, NFTs, and special recognition for your contributions to
            the community
          </p>
        </div>
        <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6 flex flex-col items-center text-center">
          <div className="bg-[#1b1b1e] p-4 rounded-full mb-4 text-[#0092ff]">
            <Target className="h-8 w-8" />
          </div>
          <h3 className="font-bold text-lg mb-2">Early Access</h3>
          <p className="text-[#949fa8]">
            Be the first to try new features and provide feedback that shapes
            our platform
          </p>
        </div>
        <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6 flex flex-col items-center text-center">
          <div className="bg-[#1b1b1e] p-4 rounded-full mb-4 text-[#0092ff]">
            <Users className="h-8 w-8" />
          </div>
          <h3 className="font-bold text-lg mb-2">Network Growth</h3>
          <p className="text-[#949fa8]">
            Connect with industry leaders and build relationships with other
            advocates
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-6">How It Works</h2>
      <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#1b1b1e] w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-[#0092ff] mb-4">
              1
            </div>
            <h3 className="font-bold mb-2">Apply</h3>
            <p className="text-sm text-[#949fa8]">
              Submit your application highlighting your experience and passion
              for Web3
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#1b1b1e] w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-[#0092ff] mb-4">
              2
            </div>
            <h3 className="font-bold mb-2">Contribute</h3>
            <p className="text-sm text-[#949fa8]">
              Participate in community events, create content, and help others
              in the ecosystem
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#1b1b1e] w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-[#0092ff] mb-4">
              3
            </div>
            <h3 className="font-bold mb-2">Earn & Grow</h3>
            <p className="text-sm text-[#949fa8]">
              Receive rewards for your contributions and advance through
              advocate tiers
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-6">Advocate Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6">
          <div className="flex items-start">
            <div className="bg-[#1b1b1e] p-3 rounded-lg text-[#0092ff] mr-4">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Community Support</h3>
              <p className="text-[#949fa8] mb-3">
                Help new users navigate the platform, answer questions, and
                provide guidance in discussion forums
              </p>
              <ul className="list-disc list-inside text-sm text-[#949fa8]">
                <li>Participate in support channels</li>
                <li>Create helpful resources</li>
                <li>Mentor new community members</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6">
          <div className="flex items-start">
            <div className="bg-[#1b1b1e] p-3 rounded-lg text-[#0092ff] mr-4">
              <BarChart className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Content Creation</h3>
              <p className="text-[#949fa8] mb-3">
                Develop high-quality content that educates and inspires the
                community about Web3 technologies
              </p>
              <ul className="list-disc list-inside text-sm text-[#949fa8]">
                <li>Write technical tutorials</li>
                <li>Create video walkthroughs</li>
                <li>Host Twitter Spaces or Discord events</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6">
          <div className="flex items-start">
            <div className="bg-[#1b1b1e] p-3 rounded-lg text-[#0092ff] mr-4">
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Event Representation</h3>
              <p className="text-[#949fa8] mb-3">
                Represent HackX at industry events, hackathons, and conferences
                to expand our community
              </p>
              <ul className="list-disc list-inside text-sm text-[#949fa8]">
                <li>Speak at local meetups</li>
                <li>Host workshops at conferences</li>
                <li>Organize community gatherings</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6">
          <div className="flex items-start">
            <div className="bg-[#1b1b1e] p-3 rounded-lg text-[#0092ff] mr-4">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Product Feedback</h3>
              <p className="text-[#949fa8] mb-3">
                Provide valuable insights and feedback to help improve the
                platform and user experience
              </p>
              <ul className="list-disc list-inside text-sm text-[#949fa8]">
                <li>Test new features</li>
                <li>Participate in focus groups</li>
                <li>Submit detailed feedback reports</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Become an Advocate?
        </h2>
        <p className="text-[#949fa8] max-w-2xl mx-auto mb-6">
          Join our growing community of passionate Web3 enthusiasts and help
          shape the future of blockchain technology. Applications are reviewed
          on a rolling basis.
        </p>
        <button className="bg-[#0092ff] text-white px-6 py-3 rounded-md hover:bg-[#0084e5] transition-colors">
          Apply to the Advocate Program
        </button>
      </div>
    </div>
  );
};
