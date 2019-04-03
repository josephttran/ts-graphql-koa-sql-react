import jwt, {} from 'jsonwebtoken';
import 'dotenv/config';

export async function createToken(payload: { id: string, email: string }): Promise<string> {
  const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });

  return token;
}
