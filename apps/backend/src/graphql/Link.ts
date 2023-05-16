import { objectType } from "nexus";

export const Link = objectType({
  name: "Link",
  definition(t) {
      t.nonNull.int("id"); // 3
      t.nonNull.string("description"); // 4
      t.nonNull.string("url"); // 5
  },
});
