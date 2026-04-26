export type SignupPayload = {
  fullName: string;
  email: string;
  password: string;
};

export type SignupResponse = {
  userId: string;
  isFirstLogin: boolean;
};
