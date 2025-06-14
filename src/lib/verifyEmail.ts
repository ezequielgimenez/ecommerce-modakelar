//verifico el email
export async function verifyEmailWithHunter(email) {
  const url = `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${process.env.HUNTER_API_KEY}`;

  const response = await fetch(url);
  const info = await response.json();
  return info;
}
