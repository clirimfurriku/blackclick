export type ErrCallbackType = (err: { [key: string]: string }) => void;

export type LoginParams = {
  username: string;
  password: string;
};

export type UserDataType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  address?: string;
  phone?: string;
  birth_date?: string;
  gender: "m" | "f";
  date_joined: string;
  groups: number[];
};

export type AuthValuesType = {
  loading: boolean;
  setLoading: (value: boolean) => void;
  logout: () => void;
  isInitialized: boolean;
  user: UserDataType | null;
  setUser: (value: UserDataType | null) => void;
  setIsInitialized: (value: boolean) => void;
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void;
};
