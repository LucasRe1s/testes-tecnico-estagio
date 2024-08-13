const teamsService = require('../services/teams-service');


const get = async (req, res) => {
    const teams = await teamsService.getAllTeams();
    res.status(200).json(teams);
}

const create = async (req, res) => {
    const { user, team } = req.body;
    try {
        const teamCreated = await teamsService.createTeam({ user, team });
        console.log(teamCreated)
        res.status(201).json(teamCreated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getByUser = async (req, res) => {
    const user = req.params.user;
    try {
        const team = await teamsService.getTeamByUser({user});
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
       
        const team = await teamsService.getTeamById({ id });

        if (team === null) {
            return res.status(404).json({ error: 'Time não encontrado.' });
          }
        res.status(200).json(team)
    } catch (error) {
        res.status(500).json({ error: 'Erro interno no servidor.' });
    }
}

module.exports = {
    create, get, getByUser, getById
}