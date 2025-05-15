const whois = require('whois-json');
const dns = require('dns').promises;
const sslChecker = require('ssl-checker');

async function getDomainInfo(domain) {
  const whoisData = await whois(domain);
  const dnsData = {
    A: await tryResolve(() => dns.resolve4(domain)),
    MX: await tryResolve(() => dns.resolveMx(domain)),
    CNAME: await tryResolve(() => dns.resolveCname(domain)),
    TXT: await tryResolve(() => dns.resolveTxt(domain))
  };
  const sslInfo = await sslChecker(domain, { method: "GET", port: 443 });

  return {
    whois: {
      registrar: whoisData.registrar,
      creationDate: whoisData.creationDate,
      expirationDate: whoisData.registrarRegistrationExpirationDate
    },
    dns: dnsData,
    ssl: sslInfo
  };
}

async function tryResolve(fn) {
  try {
    return await fn();
  } catch {
    return [];
  }
}

module.exports = { getDomainInfo };