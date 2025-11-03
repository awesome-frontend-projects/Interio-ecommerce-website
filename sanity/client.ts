
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "2c6z3q7a",
  dataset: "production",
  apiVersion: "v2025-10-30",
  useCdn: false,
});

