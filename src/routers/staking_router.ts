import * as express from 'express';
import * as asyncHandler from 'express-async-handler';

import { StakingHandlers } from '../handlers/staking_handlers';
import { StakingDataService } from '../services/staking_data_service';

export const createStakingRouter = (stakingDataService: StakingDataService): express.Router => {
    const router = express.Router();
    const handlers = new StakingHandlers(stakingDataService);
    router.get('/pools', asyncHandler(handlers.getStakingPoolsAsync.bind(handlers)));
    router.get('/epochs', asyncHandler(handlers.getStakingEpochsAsync.bind(handlers)));
    return router;
};
