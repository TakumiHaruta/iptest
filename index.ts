import { ipAddress } from '@vercel/edge';
 
export const config = {
  runtime: 'edge',
};
 
export default function (request: Request) {
  const ip = ipAddress(request) || 'unknown';
  return new Response(`<h1>Your IP is ${ip}</h1>`, {
    headers: { 'content-type': 'text/html' },
  });
}
