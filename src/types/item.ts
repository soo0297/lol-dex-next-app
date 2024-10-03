type Image = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type Gold = {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
};

type Stats = {
  FlatMovementSpeedMod: number;
};

type Maps = {
  [key: string]: boolean;
};

type Item = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: Maps;
  stats: Stats;
};

type Data = {
  [key: string]: Item;
};

type ApiResponse = {
  data: Data;
};
