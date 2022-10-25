// File Name: index.js Student Name: Daniil Velyki Student ID: 301183618 Date: October 25, 2022 

import { Router } from 'express';

let router = Router();

import {DisplayHomePage} from '../controllers/index.js';

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

export default router;