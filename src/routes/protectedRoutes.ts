import { Response, Router } from 'express';
import authenticateToken, { AuthRequest } from '../middlewares/authMiddleware';

const router = Router();

router.get('/protected', authenticateToken, (req: AuthRequest, res: Response) => {
    res.status(200).json({
        message: 'You have access to this protected route',
        user: req.user
    });
});

export default router;
