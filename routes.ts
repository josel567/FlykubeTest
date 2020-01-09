import { Router } from 'express';

const router: Router = Router();

router.get('/', (request, response) => {
    response.send('Welcome to Flykube test');
});

export default router;