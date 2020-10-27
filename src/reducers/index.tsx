import { ActionProps, StateProps } from "../shared/Interfaces";
import { v4 } from 'uuid';

const INITIAL_STATE = {
    squads: [
        {
            id: v4(),
            name: 'Barcelona',
            description: 'Barcelona Squad',
            website: 'https://barcelona.com.br',
            type: 'real',
            tags: '',
            formation: '2-4-4',
            players: [
                {
                    player: {
                        player_id: 321,
                        player_name: 'Cristiano Ronaldo',
                        age: 32,
                        nacionality: 'Portugal',
                    },
                    row: 1,
                    column: 1
                },
                {
                    player: {
                        player_id: 123,
                        player_name: 'Jose Juarez',
                        age: 27,
                        nacionality: 'Espanha',
                    },
                    row: 2,
                    column: 1
                }
            ]
        },
        {
            id: v4(),
            name: 'Real Madrid',
            description: 'Real Madrid Squad',
            website: 'https://real-madrid.com',
            type: 'real',
            tags: '',
            formation: '2-4-4',
            players: [
                {
                    player: {
                        player_id: 123,
                        player_name: 'Jose Juarez',
                        age: 27,
                        nacionality: 'Espanha',
                    },
                    row: 1,
                    column: 1
                }
            ]
        },
        {
            id: v4(),
            name: 'PSG',
            description: 'bPSG Squad',
            website: 'https://psg.com',
            type: 'real',
            tags: '',
            formation: '2-4-4',
            players: [
                {
                    player: {
                        player_id: 123,
                        player_name: 'Jose Juarez',
                        age: 27,
                        nacionality: 'Espanha',
                    },
                    row: 1,
                    column: 1
                }
            ]
        },
        {
            id: v4(),
            name: 'zPSG',
            description: 'PSG Squad',
            website: 'https://psg.com',
            type: 'real',
            tags: '',
            formation: '2-4-4',
            players: [
                {
                    player: {
                        player_id: 123,
                        player_name: 'Jose Juarez',
                        age: 27,
                        nacionality: 'Espanha',
                    },
                    row: 1,
                    column: 1
                }
            ]
        },
        {
            id: v4(),
            name: 'PSG 2',
            description: 'PSG Squad 2',
            website: 'https://psg.com',
            type: 'real',
            tags: '',
            formation: '2-4-4',
            players: [
                {
                    player: {
                        player_id: 123,
                        player_name: 'Jose Juarez',
                        age: 27,
                        nacionality: 'Espanha',
                    },
                    row: 1,
                    column: 1
                }
            ]
        },
        {
            id: v4(),
            name: 'PSG 3',
            description: 'PSG Squad 3',
            website: 'https://psg.com',
            type: 'real',
            tags: '',
            formation: '2-4-4',
            players: [
                {
                    player: {
                        player_id: 123,
                        player_name: 'Jose Juarez',
                        age: 27,
                        nacionality: 'Espanha',
                    },
                    row: 1,
                    column: 1
                }
            ]
        },
        {
            id: v4(),
            name: 'PSG 4',
            description: 'PSG Squad 4',
            website: 'https://psg.com',
            type: 'real',
            tags: '',
            formation: '2-4-4',
            players: [
                {
                    player: {
                        player_id: 123,
                        player_name: 'Jose Juarez',
                        age: 27,
                        nacionality: 'Espanha',
                    },
                    row: 1,
                    column: 1
                }
            ]
        }
    ]
};

const squads = (state: StateProps = INITIAL_STATE, action: ActionProps) => {
    console.log('CallingReducer', action);
    switch(action.type) {
        case 'ADD_SQUAD':
            return { ...state, squads: [...state.squads, action.squad]};
        case 'UPDATE_SQUAD':
            return { ...state, squads: [...state.squads.filter(squad => squad.id !== action.squad.id), action.squad]};
        case 'DELETE_SQUAD':
            return { ...state, squads: [...state.squads.filter(squad => squad.id !== action.squad.id)]};
        default:
            return state;
    }
}

export default squads;

