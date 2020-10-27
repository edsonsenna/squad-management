import { ActionProps, StateProps } from "../shared/Interfaces";

const INITIAL_STATE = {
    squads: [
        {
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
                }
            ]
        },
        {
            name: 'Real Madrid',
            description: 'Real Madrid Squad',
            website: 'https://real-madrid.com',
            type: 'real',
            tags: '',
            formation: '2-4-4',
            players: []
        },
        {
            name: 'PSG',
            description: 'PSG Squad',
            website: 'https://psg.com',
            type: 'real',
            tags: '',
            formation: '2-4-4',
            players: []
        }
    ]
};

const squads = (state: StateProps = INITIAL_STATE, action: ActionProps) => {
    console.log('CallingReducer', action);
    switch(action.type) {
        case 'ADD_SQUAD':
            return { ...state, squads: [...state.squads, action.squad]};
        default:
            return state;
    }
}

export default squads;

