import express from 'express';
import authRoutes from '../../entities/auth/auth.routes.js';
import userRoutes from '../../entities/user/user.routes.js';
import vendorRoutes from '../../entities/vendor/vendor.routes.js';
import produceRoutes from '../../entities/produce/produce.routes.js';
import rentalRoutes from '../../entities/rental/rental.routes.js';
import orderRoutes from '../../entities/order/order.routes.js';
import communityRoutes from '../../entities/community/community.routes.js';
import plantRoutes from '../../entities/plant/plant.routes.js';
import certificationRoutes from '../../entities/certification/certification.routes.js';
import adminRoutes from '../../entities/admin/admin.routes.js';

const router = express.Router();

router.use('/v1/auth', authRoutes);
router.use('/v1/users', userRoutes);
router.use('/v1/vendors', vendorRoutes);
router.use('/v1/produce', produceRoutes);
router.use('/v1/rentals', rentalRoutes);
router.use('/v1/orders', orderRoutes);
router.use('/v1/community', communityRoutes);
router.use('/v1/plants', plantRoutes);
router.use('/v1/certifications', certificationRoutes);
router.use('/v1/admin', adminRoutes);

export default router;
