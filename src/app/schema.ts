export interface FullCountry {
  id?: string;
  country?: string;
  state?: string[];
  city?: string[][];
}

export interface Country {
  id?: string;
  country?: string;
}

export interface State {
  id?: string;
  state?: string[][];
}

export interface FilteredState {
  id?: number;
  state?: string;
}

export interface FilteredCity {
  id?: number;
  city?: string;
}

export interface City {
  id?: string;
  city?: string[][][];
}
