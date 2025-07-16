// backend/typeDefs.ts or directly in server.ts
import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";

export const typeDefs = gql(
  readFileSync(path.join(__dirname, "graphql/schema.gql"), "utf-8")
);
