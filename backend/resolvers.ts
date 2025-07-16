import { getCabins } from "./services/cabin";

export const resolvers = {
  Query: {
    hello: () => "Hello from Apollo + Supabase!",
    getAllCabins: async () => {
      return await getCabins();
    },
  },
};
