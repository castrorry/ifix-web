// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NowRequest, NowResponse } from '@vercel/node';

export default (request: NowRequest, response: NowResponse) => {
  response.statusCode = 200
  response.json({ name: 'Rayan Castro' });
}
