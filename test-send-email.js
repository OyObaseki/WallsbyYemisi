fetch('http://localhost:4321/api/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    formType: 'quote',
    name: 'Test',
    email: 'test@example.com'
  })
}).then(res => res.json()).then(console.log).catch(console.error);
