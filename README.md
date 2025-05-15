# Domain Info & WHOIS Lookup Tool

A simple web tool to fetch WHOIS, DNS, and SSL certificate information for any domain.

---

## Features

- Input a domain name and retrieve:
  - WHOIS info (registrar, creation & expiration dates)
  - DNS records (A, MX, CNAME, TXT)
  - SSL certificate status (validity and expiry)
- Clean, easy-to-read frontend display
- Export results as JSON file

---

## Tech Stack

- **Backend:** Node.js with Express
- **Frontend:** HTML, CSS, Vanilla JS
- Uses npm packages: `whois-json`, `ssl-checker`

---

## Setup & Usage

1. Clone or download this repository.
2. Make sure you have [Node.js](https://nodejs.org/) installed.
3. Install dependencies:

   ```bash
   npm install express whois-json ssl-checker
