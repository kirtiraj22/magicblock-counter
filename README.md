# Solana Ephemeral Rollups Counter Program

This is a minimal counter program built on **Solana** using **Anchor** and **MagicBlock's Ephemeral Rollups (ER)** runtime.  
It demonstrates how to delegate program control to ER, perform high-frequency updates off-chain, and commit or undelegate the state back to Solana's L1.

---
![Screenshot 2025-06-04 114501](https://github.com/user-attachments/assets/b5dcc69d-5503-4a37-8187-79e161f70737)

## Features

- Anchor-based Solana smart contract
- Counter logic using a deterministic PDA
- Delegation to MagicBlock's ER
- Commit & undelegate support
- ER macros like `#[ephemeral]`, `#[delegate]`, `#[commit]` in action

---

**Read the full walkthrough here**:  
[Build the Fastest Counter Program on Solana Using MagicBlock](https://medium.com/@kirtiraj22/build-the-fastest-counter-program-on-solana-using-magicblock-8c7f93c2595b)

It covers:

- Anchor + ER concepts
- PDA design and patterns
- Delegate/commit/undelegate flow
- How to extend this logic in your own ER-based apps

---

## Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/kirtiraj22/magicblock-counter
cd magicblock-counter
```

### 2. Install dependencies
```bash
npm install
```

### 3. Build the program
```bash
anchor build
```

### 4. Deploy to localnet
```bash
anchor deploy
```

### 5. Run tests (skipping redeploy, rebuild, and validator spin-up)
```bash
anchor test --skip-deploy --skip-build --skip-local-validator
```
