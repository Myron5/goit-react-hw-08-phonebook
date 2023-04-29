export interface regLogResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export interface userResponse {
  name: string;
  email: string;
}

export interface loginValue {
  email: string;
  password: string;
}

export interface registerValue {
  name: string;
  email: string;
  password: string;
}
