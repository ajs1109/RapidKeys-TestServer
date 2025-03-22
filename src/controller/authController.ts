import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import test from "node:test";

export const logincontroller = (req: Request, res: Response) => {
    console.log('into test-login server request', req.headers);
    return res.send(jwt.sign({test: "test"},
    process.env.JWT_SECRET as string, {expiresIn: "10s"}));
} 