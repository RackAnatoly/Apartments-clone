export type Location = {
  place_id: string;
  osm_id: string;
  osm_type: string;
  lat: string;
  lon: string;
  boundingbox: string[];
  class: "place" | string;
  type: "city" | "state" | "country" | string;
  display_name: string;
  display_place: string;
  display_address: string;
  address: Address;
};
type Address = {
  name?: string;
  house_number?: string;
  road?: string;
  neighbourhood?: string;
  suburb?: string;
  island?: string;
  city?: string;
  county?: string;
  state?: string;
  state_code?: string;
  postcode?: string;
  country?: string;
  country_code?: string;
};
