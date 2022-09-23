export const DBConfig = {
  name: "MyDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "Template Data",

      storeSchema: [
        { data: "data", keypath: "data", options: { unique: false } },
      ],
    },
  ],
};
