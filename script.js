async function lookupDomain() {
  const domain = document.getElementById('domainInput').value;
  const res = await fetch('/lookup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ domain })
  });
  const data = await res.json();
  document.getElementById('output').textContent = JSON.stringify(data, null, 2);
  window.latestData = data;
}

function downloadJSON() {
  const blob = new Blob([JSON.stringify(window.latestData, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'domain-info.json';
  a.click();
}