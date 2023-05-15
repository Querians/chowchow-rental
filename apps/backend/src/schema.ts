// FROM THIS https://www.howtographql.com/typescript-apollo/1-getting-started/

import { makeSchema } from "nexus";
import { join } from "path";

export const schema = makeSchema({
  types: [],
  outputs:{
    schema: join(process.cwd(), "schema.graphql"),
    typegen: join(process.cwd(), "nexus-typegen.ts")
  }
})