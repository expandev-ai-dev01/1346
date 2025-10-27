import { Router } from 'express';
import internalRoutes from '@/routes/v1/internalRoutes';

const router = Router();

router.use('/internal', internalRoutes);

export default router;
