export interface Squad {
  name: String;
  description: String;
  website: String;
  type: String;
  tags: String;
  formation: String ;
  players: SquadPlayerProps[];
}

export interface ActionProps {
    type: String,
    squad: Squad
};

export interface StateProps {
  squads: Squad[];
};

export interface SquadPlayerProps {
  player: PlayerProps;
  row: Number;
  column: Number;
}

export interface PlayerProps {
  player_id: Number;
  player_name: String;
  firstname?: String | null;
  lastname?: String | null;
  number?: String | null;
  position?: String | null;
  age: Number;
  birth_date?: String | null;
  birth_place?: String | null;
  birth_country?: String | null;
  nationality?: String | null;
  height?: String | null;
  weight?: String | null;
}