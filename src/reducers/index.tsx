
const INITIAL_STATE = {
    squads: [
        {
            name: 'Barcelona',
            description: 'Barcelona Squad',
            website: 'https://barcelona.com.br',
            type: 'real'
        }
    ]
};

interface Squad {
    name: String,
    description: String,
    website: String,
    type: String
}

interface ActionProps {
    type: String,
    squad: Squad
};

interface StateProps {
    squads: Squad[]
};

const squads = (state: StateProps = INITIAL_STATE, action: ActionProps) => {
    switch(action.type) {
        case 'ADD_SQUAD':
            return { ...state, squads: [...state.squads, action.squad]};
        default:
            return state;
    }
}

export default squads;

