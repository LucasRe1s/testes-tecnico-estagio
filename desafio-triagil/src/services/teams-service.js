const axios = require('axios');
const models = require('../infrastructures/database');
const _validateUsers = require('../services/validation-service');


async function createTeam({ user, team }) {
    const userValid = _validateUsers.validateUsers(user)
    const teamValid = _validateUsers.isValidStringArray(team)

    if (!teamValid || team.length === 0) {
        throw new Error('O array de Pokémon não pode estar vazio');
    }
    if (typeof teamValid === 'number') throw new Error('somente letras');

    const detailsPokemon = await Promise.all(
        team.map(async (pokemon) => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

                return {
                    id: response.data.id,
                    name: response.data.name,
                    height: response.data.height,
                    weight: response.data.weight,
                };
            } catch (erro) {
                throw new Error(`Erro ao obter detalhes do Pokémon ${pokemon}: ${erro.message}`);
            }
        })
    );

    const newTeam = { user: userValid, team: detailsPokemon };
    const createdTeam = await models.Teams.create(newTeam);
    const teamId = createdTeam.id;
    return { message: 'time registrado com sucesso!', teamId }
}

async function getAllTeams() {
    const teams = await models.Teams.findAll({ raw: true });

    const formattedTeams = teams.map(team => {
        return {
            [team.id]: {

                owner: team.user,
                pokemons: team.team
            }
        };
    });

    return formattedTeams;
}

async function getTeamByUser({ user }) {
    const team = await models.Teams.findOne({ where: { user: user }, raw: true });

    team.owner = team.user;
    delete team.user;

    const formattedTeam = {
        owner: team.owner,
        pokemons: team.team,
    };

    return formattedTeam;
}

async function getTeamById({ id }) {
    const team = await models.Teams.findByPk(id, {
        raw: true,
    });

    if (!team) return null;

    team.owner = team.user;
    delete team.user;

    const formattedTeam = {
        owner: team.owner,
        pokemons: team.team,
    };

    return formattedTeam;
}

module.exports = {
    createTeam, getAllTeams, getTeamByUser, getTeamById
}