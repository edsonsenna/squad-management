export interface Squad {
  name: String;
  description: String;
  website: String;
  type: String;
}

export interface ActionProps {
    type: String,
    squad: Squad
};

export interface StateProps {
  squads: Squad[];
};

export interface PlayerProps {
  player_id: Number;
  player_name: String;
  firstname?: String;
  lastname?: String;
  number?: String;
  position?: String;
  age: Number;
  birth_date?: String;
  birth_place?: String;
  birth_country?: String;
  nationality?: String;
  height?: String;
  weight?: String;
}