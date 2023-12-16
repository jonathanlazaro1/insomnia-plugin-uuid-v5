const { v5: uuidv5, validate: uuidValidate } = require("uuid");

module.exports.templateTags = [
  {
    name: "uuidv5",
    displayName: "UUID v5 generator",
    description: "A plugin to generate UUID v5 strings.",
    args: [
      {
        displayName: "Namespace",
        type: "enum",
        defaultValue: "NameSpace_OID",
        options: [
          {
            displayName: "NameSpace_OID",
            value: "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
            description: "Name string is an ISO OID",
          },
          {
            displayName: "NameSpace_URL",
            value: "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
            description: "Name string is a URL",
          },
          {
            displayName: "NameSpace_DNS",
            value: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
            description: "Name string is a fully-qualified domain name",
          },
          {
            displayName: "NameSpace_X500",
            value: "6ba7b814-9dad-11d1-80b4-00c04fd430c8",
            description:
              "Name string is an X.500 DN (in DER or a text output format)",
          },
          {
            displayName: "Custom",
            value: "",
            description: "A custom namespace (must be a valid UUID)",
          },
        ],
      },
      {
        displayName: "Custom namespace",
        type: "string",
        hide: (args) => args[0].value != "",
        defaultValue: "",
        validate: (v) => (uuidValidate(v) ? "" : "Invalid UUID"),
      },
      {
        displayName: "Value",
        type: "string",
        defaultValue: "",
      },
    ],
    async run(context, predefined_ns, ns, value) {
      if (predefined_ns) {
        ns = predefined_ns;
      }

      return uuidv5(value, ns);
    },
  },
];
