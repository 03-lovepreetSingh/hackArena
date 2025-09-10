"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "Jack Dorcey",
    githubLink: "https://github.com/jackjackbits/bitchat/tree/main?tab=",
    twitterLink: "https://x.com/0xlungu",
    telegramHandle: "",
    wechatHandle: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log("Registration submitted:", formData)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-md">
        <DialogHeader className="border-b border-blue-500 pb-4 mb-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="h-4 w-4" />
              <span className="sr-only">Quit registration</span>
            </Button>

            <div className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Athena X" width={24} height={24} />
              <DialogTitle className="text-lg font-semibold">Athena X</DialogTitle>
            </div>

            <div></div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Register to hackathon!</h2>
            <p className="text-gray-400 text-sm">
              We need some of your info to join the hackathon.
              <br />
              We'll save it and add it automatically next time
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-gray-300">
                Full Name
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="bg-gray-800 border-gray-600 text-white mt-1"
              />
            </div>

            <div>
              <Label htmlFor="githubLink" className="text-gray-300">
                Github Link
              </Label>
              <Input
                id="githubLink"
                value={formData.githubLink}
                onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                className="bg-gray-800 border-gray-600 text-white mt-1"
              />
            </div>

            <div>
              <Label htmlFor="twitterLink" className="text-gray-300">
                Twitter Link <span className="text-gray-500">(Optional)</span>
              </Label>
              <Input
                id="twitterLink"
                value={formData.twitterLink}
                onChange={(e) => setFormData({ ...formData, twitterLink: e.target.value })}
                className="bg-gray-800 border-gray-600 text-white mt-1"
              />
            </div>

            <div>
              <Label htmlFor="telegramHandle" className="text-gray-300">
                Telegram Handle
              </Label>
              <Input
                id="telegramHandle"
                placeholder="Your Telegram Handle"
                value={formData.telegramHandle}
                onChange={(e) => setFormData({ ...formData, telegramHandle: e.target.value })}
                className="bg-gray-800 border-gray-600 text-white mt-1 border-blue-500"
              />
            </div>

            <div>
              <Label htmlFor="wechatHandle" className="text-gray-300">
                WeChat Handle
              </Label>
              <Input
                id="wechatHandle"
                placeholder="Your WeChat Handle"
                value={formData.wechatHandle}
                onChange={(e) => setFormData({ ...formData, wechatHandle: e.target.value })}
                className="bg-gray-800 border-gray-600 text-white mt-1"
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 mt-6">
              Finish Registration
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
