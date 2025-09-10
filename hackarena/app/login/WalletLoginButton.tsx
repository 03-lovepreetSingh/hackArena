import React from 'react'
type WalletLoginButtonProps = {
  provider: 'metamask' | 'walletconnect' | 'coinbase'
}
export function WalletLoginButton({ provider }: WalletLoginButtonProps) {
  const getIcon = () => {
    switch (provider) {
      case 'metamask':
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0078 1L13.0078 8L14.5078 4L21.0078 1Z"
              fill="#E17726"
            />
            <path d="M2.9922 1L10.9922 8L9.4922 4L2.9922 1Z" fill="#E27625" />
            <path
              d="M18.0078 17L16.0078 21L20.5078 22.5L22.0078 17L18.0078 17Z"
              fill="#E27625"
            />
            <path
              d="M2.0078 17L3.5078 22.5L8.0078 21L6.0078 17L2.0078 17Z"
              fill="#E27625"
            />
            <path
              d="M7.5078 11L6.0078 13L10.5078 13.5L10.0078 8.5L7.5078 11Z"
              fill="#E27625"
            />
            <path
              d="M16.5078 11L14.0078 8.5L13.5078 13.5L18.0078 13L16.5078 11Z"
              fill="#E27625"
            />
            <path
              d="M8.0078 21L10.0078 19.5L8.0078 17.5L8.0078 21Z"
              fill="#E27625"
            />
            <path
              d="M14.0078 19.5L16.0078 21L16.0078 17.5L14.0078 19.5Z"
              fill="#E27625"
            />
          </svg>
        )
      case 'walletconnect':
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.342 9.792c3.136-3.136 8.18-3.136 11.316 0l.35.351a.41.41 0 0 1 0 .582l-1.248 1.247a.214.214 0 0 1-.303 0l-.5-.5c-2.183-2.184-5.72-2.184-7.903 0l-.536.536a.214.214 0 0 1-.303 0l-1.247-1.248a.41.41 0 0 1 0-.582l.374-.386zm13.992 2.677l1.117 1.117a.41.41 0 0 1 0 .582l-5.032 5.033a.41.41 0 0 1-.582 0l-3.57-3.571a.107.107 0 0 0-.152 0l-3.57 3.571a.41.41 0 0 1-.583 0l-5.033-5.033a.41.41 0 0 1 0-.582l1.117-1.117a.41.41 0 0 1 .583 0l3.57 3.571a.107.107 0 0 0 .152 0l3.57-3.571a.41.41 0 0 1 .582 0l3.571 3.571a.107.107 0 0 0 .152 0l3.57-3.571a.41.41 0 0 1 .583 0z"
              fill="#3B99FC"
            />
          </svg>
        )
      case 'coinbase':
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12 21.6C6.696 21.6 2.4 17.304 2.4 12C2.4 6.696 6.696 2.4 12 2.4C17.304 2.4 21.6 6.696 21.6 12C21.6 17.304 17.304 21.6 12 21.6Z"
              fill="#0052FF"
            />
            <path
              d="M15.6 12C15.6 10.008 13.992 8.4 12 8.4C10.008 8.4 8.4 10.008 8.4 12C8.4 13.992 10.008 15.6 12 15.6C13.992 15.6 15.6 13.992 15.6 12Z"
              fill="#0052FF"
            />
          </svg>
        )
      default:
        return null
    }
  }
  const getLabel = () => {
    switch (provider) {
      case 'metamask':
        return 'Metamask Wallet'
      case 'walletconnect':
        return 'WalletConnect'
      case 'coinbase':
        return 'Coinbase Wallet'
      default:
        return ''
    }
  }
  return (
    <button
      type="button"
      className="bg-[#1b1b1e] rounded-md p-4 flex items-center hover:bg-[#2a2a30] transition-colors"
    >
      <span className="mr-3">{getIcon()}</span>
      <span className="text-white">{getLabel()}</span>
    </button>
  )
}
