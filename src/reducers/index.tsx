import { ActionProps, StateProps } from "../shared/Interfaces";

const INITIAL_STATE = {
    squads: [
        {
            name: 'Barcelona',
            description: 'Barcelona Squad',
            website: 'https://barcelona.com.br',
            type: 'real',
            players: [
                {
                    id: '32424dsfsdf',
                    name: 'Cristiano Ronaldo',
                    age: 32,
                    nacionality: 'Portugal',
                    row: 1,
                    column: 1
                }
            ]
        },
        {
            name: 'Real Madrid',
            description: 'Real Madrid Squad',
            website: 'https://real-madrid.com',
            type: 'real'
        },
        {
            name: 'PSG',
            description: 'PSG Squad',
            website: 'https://psg.com',
            type: 'real'
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

