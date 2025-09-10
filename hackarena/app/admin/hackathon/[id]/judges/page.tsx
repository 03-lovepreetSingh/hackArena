"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, Copy } from "lucide-react";
import { useState } from "react";

interface Judge {
  id: string;
  email: string;
  role: string;
  status: "confirmed" | "pending";
}

export default function JudgesPage({ params }: { params: { id: string } }) {
  const [judges, setJudges] = useState<Judge[]>([
    { id: "1", email: "user@example.com", role: "Judge", status: "confirmed" },
    {
      id: "2",
      email: "judgemail@exampl.com",
      role: "Judge",
      status: "confirmed",
    },
    {
      id: "3",
      email: "usernameemail@domain.com",
      role: "Judge",
      status: "pending",
    },
  ]);
  const [inviteEmail, setInviteEmail] = useState("");

  const inviteLink = "https://hackx.com/invite/aoiduh...123fnf";

  const sendInvite = () => {
    if (inviteEmail) {
      const newJudge: Judge = {
        id: Date.now().toString(),
        email: inviteEmail,
        role: "Judge",
        status: "pending",
      };
      setJudges([...judges, newJudge]);
      setInviteEmail("");
    }
  };

  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink);
  };

  return (
    <div className="flex">
      <main className="flex-1 p-6 md:ml-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Judges List */}
            <div className="lg:col-span-2 space-y-6">
              {judges.length === 0 ? (
                <div className="text-center py-12">
                  <Users className="h-16 w-16 mx-auto text-neutral-600 mb-4" />
                  <p className="text-neutral-400 text-lg">
                    No judges invited yet
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {judges.map((judge) => (
                    <div
                      key={judge.id}
                      className="flex items-center justify-between p-4 bg-neutral-800/50 rounded-lg border border-neutral-700"
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar className="bg-blue-600">
                          <AvatarFallback className="bg-blue-600 text-white">
                            {judge.email.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-white">{judge.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Select value={judge.role}>
                          <SelectTrigger className="w-32 bg-neutral-800 border-neutral-700">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-neutral-800 border-neutral-700">
                            <SelectItem value="Judge">Judge</SelectItem>
                            <SelectItem value="Lead Judge">
                              Lead Judge
                            </SelectItem>
                            <SelectItem value="Observer">Observer</SelectItem>
                          </SelectContent>
                        </Select>
                        {judge.status === "pending" && (
                          <span className="text-sm text-yellow-400">
                            Invite pending
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Invite Section */}
            <div className="space-y-6">
              <div className="bg-neutral-800/50 rounded-lg border border-neutral-700 p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Invite to judge hackathon
                </h3>
                <p className="text-neutral-400 text-sm mb-6">
                  Invite judges via invite link or email
                </p>

                {/* Invite Link */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2 p-3 bg-neutral-800 rounded border border-neutral-700">
                    <span className="text-sm text-neutral-400 flex-1 truncate">
                      {inviteLink}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyInviteLink}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Copy className="h-4 w-4 mr-1" />
                      Copy Link
                    </Button>
                  </div>
                </div>

                <div className="text-center text-neutral-400 text-sm mb-4">
                  or
                </div>

                {/* Email Invite */}
                <div className="space-y-4">
                  <div>
                    <Label
                      htmlFor="invite-email"
                      className="text-sm text-neutral-400"
                    >
                      Enter Email
                    </Label>
                    <Input
                      id="invite-email"
                      type="email"
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      className="bg-neutral-800 border-neutral-700 mt-1"
                      onKeyPress={(e) => e.key === "Enter" && sendInvite()}
                    />
                  </div>
                  <Button
                    onClick={sendInvite}
                    disabled={!inviteEmail}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                  >
                    Send Invite
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
