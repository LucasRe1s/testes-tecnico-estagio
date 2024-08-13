const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teams-controller');
// const usersController = require('../controllers/users');

// const { authenticateToken } = require('../services/authenticate-service');

router.get('/api/teams', teamsController.get);
router.post('/api/teams', teamsController.create);
router.get('/api/teams/:user', teamsController.getByUser);
router.get('/api/teams/id/:id', teamsController.getById);




module.exports = router;