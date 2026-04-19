export type User = {
  id: string;
  email: string;
  firstName: string;
  createdAt: string;
};

export type RawUser = {
  id?: string;
  _id?: string;
  email: string;
  first_name?: string;
  firstName?: string;
  created_at?: string;
  createdAt?: string;
};
