# OnlyPass (WIP) 🎟️
OnlyPass: Human-verified ticketing platform leveraging proof of personhood and blockchain-backed tickets.

## Overview
OnlyPass aims to revolutionize event ticketing by building a next-generation ticket selling app. Each ticket is minted as an NFT (non-fungible token), and every buyer is verified as a real human using cutting-edge Worldcoin iris-scanning technology. This approach solves the persistent problems of bots, scalpers, and ticket fraud—ushering in a new era of fair, secure, and transparent ticket sales.

## ❓ Why This Project? The Ticketing Industry’s Biggest Problems

### 1. Bots and Scalpers Dominate Ticket Sales

Bots buy up tickets in seconds, reselling them at inflated prices—sometimes up to 50% higher than face value.

In major events, bots have bought tens of thousands of tickets before real fans can even click “Buy”.

Scalping is so lucrative that bots now generate up to 40% of all ticketing traffic.

### 2. CAPTCHAs Are No Longer Effective

CAPTCHAs, once the main defense, are now easily bypassed by sophisticated bots.

Studies and industry reports confirm that “the possibility to reliably tell a bot from a human through something simple like a CAPTCHA is a thing of the past in an industry like ticketing”.

CAPTCHAs frustrate real users, sometimes even preventing legitimate purchases due to technical glitches or accessibility issues.

### 3. Resale Market Chaos

Lack of control over ticket transfer leads to price gouging, fraud, and a poor fan experience.

Existing anti-scalping laws are poorly enforced, and primary ticket sellers rarely take responsibility for how tickets are distributed.

## 🧰 How it’s made

Our platform combines advanced blockchain and biometric technologies to deliver secure, human-verified NFT ticketing:

- 🧍 **Human Verification**: We use Worldcoin’s Orb device to perform secure iris scans, generating a unique, privacy-preserving digital identity for each user. No biometric data is stored—only a cryptographic proof that ensures each participant is a real, unique person.

- 🎫 **NFT Ticketing**: Tickets are minted as NFTs on the blockchain, guaranteeing authenticity, transparency, and programmable ownership. This enables features like resale restrictions and royalty enforcement.

## Testing the mini-app
Use this QR code to download the app inside the World Mini-App marketplace.

> ⚠️ The mini-app is for verified humans only - please make sure you have finished proof of humanity by visiting and Orb

![Screenshot 2025-06-01 at 02 56 13](https://github.com/user-attachments/assets/2c6681a3-6014-4a11-984e-601c1fc89106)

## 💻 Running Locally
1. Clone this repository:

```bash
  git clone https://github.com/tomasgrusz/onlypass.git
  cd onlypass
```
2. Create an optimized build of the frontend and run a next app:
```bash
  cd frontend
  npm install
  npm run build
  npm start
```
