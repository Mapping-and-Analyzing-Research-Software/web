// types.ts

export interface Address {
  id: number;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zip: number;
  notes?: string;
}

export interface Affiliation {
  name: string;
  role: string;
  user_id: number;
  org_id: number;
}

export interface User {
  id: number;
  type: string;
  name: string;
  legal_first_name: string;
  legal_last_name: string;
  location: string;
  bio: string;
  profile_path: string;
  email: string;
  phone: string;
  username: string;
  creation_date: string;
  update_date: string;
  addresses: Address[];
  affiliations: Affiliation[];
  stats?: {};
  achievements?: {};
  // followers?: number;
  // following?: number;
}

export interface Entity {
  id: number;
  entity_type: string;
}

export interface Org {
  url?: string;
  is_activated: boolean;
  email?: string;
  org_type?: string;
  name: string;
  id: number;
  handle: string;
  banner_url?: string;
  entity_type: string;
  bio?: string;
  phone?: string;
  icon_url?: string;
  physical_location?: string;
}
