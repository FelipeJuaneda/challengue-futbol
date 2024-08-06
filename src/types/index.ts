export interface Player {
  player_key: string;
  player_id: string;
  player_image: string;
  player_name: string;
  player_type: string;
  player_number: string;
}

export interface Team {
  id: string;
  team_key: string;
  team_name: string;
  team_badge: string;
  players: Player[];
}
