import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    console.log('into requireAuth', req.headers.authorization);
    if (!authHeader) {
        return res.status(403).send({ message: "Header does not exist" });
    }
    const token = authHeader.split(" ")[1];
    console.log('Token from header:', token);
    if(!token) {
        return res.status(403).send({ message: "Token does not exist" });
    }
    try {
        jwt.verify(token, process.env.JWT_SECRET as string, function(error, result){
            console.log(error?.name);
            if(error?.name === 'TokenExpiredError'){
                return res.status(401).send({ message: "Token expired" });
            }
            if(error?.name === 'JsonWebTokenError'){
                return res.status(401).send({ message: "Invalid token" });
            }
            res.locals.payload = result;
            console.log('Decoded:', result);
            return next();
        });
    } catch (error) {
        return res.status(401).send({ message: "Internal Server Error" });
    }
}