import jwt from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';

const login = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        const decoded  = jwt.verify(token || 'n/a', process.env.JWT_TOKEN || 'DarthVader');
        
        //Inserindo dados do usuario na requisição
        req.currentUser = decoded;
        
        next();
    } catch (err) {
        return res.status(401).json({ err })
    }
}

export default login