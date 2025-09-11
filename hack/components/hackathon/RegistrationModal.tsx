import React, { useState } from 'react';
import { X } from 'lucide-react';
interface RegistrationModalProps {
  onClose: () => void;
}
export const RegistrationModal = ({
  onClose
}: RegistrationModalProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    githubLink: '',
    twitterLink: '',
    telegramHandle: '',
    wechatHandle: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    onClose();
  };
  return <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-[#16161b] w-full max-w-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-8">
          <button onClick={onClose} className="text-[#949fa8] hover:text-white">
            <div className="flex items-center">
              <X className="h-4 w-4 mr-2" />
              Quit registration
            </div>
          </button>
          <div className="flex items-center">
            <div className="text-[#0092ff] text-xl font-bold">Athena X</div>
          </div>
        </div>
        <div className="border-t border-[#2a2a2e] pt-8">
          <h2 className="text-2xl font-bold text-center mb-2">
            Register to hackathon!
          </h2>
          <p className="text-center text-[#949fa8] mb-8">
            We need some of your info to join the hackathon.
            <br />
            We'll save it and add it automatically next time
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm mb-2">Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-[#1b1b1e] border border-[#2a2a2e] rounded-md p-3 text-white focus:outline-none focus:border-[#0092ff]" placeholder="Jack Dorcey" />
            </div>
            <div className="mb-6">
              <label className="block text-sm mb-2">Github Link</label>
              <input type="text" name="githubLink" value={formData.githubLink} onChange={handleChange} className="w-full bg-[#1b1b1e] border border-[#2a2a2e] rounded-md p-3 text-white focus:outline-none focus:border-[#0092ff]" placeholder="https://github.com/jackjackbits/bitchat/tree/main?tab=" />
            </div>
            <div className="mb-6">
              <label className="block text-sm mb-2">
                Twitter Link <span className="text-[#949fa8]">(Optional)</span>
              </label>
              <input type="text" name="twitterLink" value={formData.twitterLink} onChange={handleChange} className="w-full bg-[#1b1b1e] border border-[#2a2a2e] rounded-md p-3 text-white focus:outline-none focus:border-[#0092ff]" placeholder="https://x.com/0xlungu" />
            </div>
            <div className="mb-6">
              <label className="block text-sm mb-2">Telegram Handle</label>
              <input type="text" name="telegramHandle" value={formData.telegramHandle} onChange={handleChange} className="w-full bg-[#1b1b1e] border border-[#2a2a2e] rounded-md p-3 text-white focus:outline-none focus:border-[#0092ff]" placeholder="Your Telegram Handle" />
            </div>
            <div className="mb-8">
              <label className="block text-sm mb-2">WeChat Handle</label>
              <input type="text" name="wechatHandle" value={formData.wechatHandle} onChange={handleChange} className="w-full bg-[#1b1b1e] border border-[#2a2a2e] rounded-md p-3 text-white focus:outline-none focus:border-[#0092ff]" placeholder="Your WeChat Handle" />
            </div>
            <button type="submit" className="w-full bg-[#0092ff] hover:bg-[#0084e5] text-white rounded-md py-3 font-medium">
              Finish Registration
            </button>
          </form>
        </div>
      </div>
    </div>;
};
