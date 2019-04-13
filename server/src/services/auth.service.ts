import jwt, {} from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';

export async function createToken(payload: { id: string, email: string }): Promise<string> {
  const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });

  return token;
}

export async function verifyPassword(password: string, hashpw: string) {
  try {
    return await bcrypt.compare(password, hashpw);
  } catch(err) {
    throw err.message;
  }
}
