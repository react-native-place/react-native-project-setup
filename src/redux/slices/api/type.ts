interface LoginApiArgs {
  username: string;
  password: string;
}

interface Endpoints {
  [key: string]: string;
}

export type {LoginApiArgs, Endpoints};
