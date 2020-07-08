interface Base {
  by: string;
  kids: number[];
  id: number;
  time: number;
  type: string;
}

export interface Story extends Base {
  descendants: number;
  score: number;
  title: string;
  url: string;
}

export interface Comment extends Base {
  parent: number;
  text: string;
}
