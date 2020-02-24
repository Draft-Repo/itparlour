const config = {
  // uiColor: "#777777",
  toolbarGroups: [
    {
      name: "basicstyles",
      groups: [
        "mode",
        "basicstyles",
        "cleanup",
        "colors",
        "list",
        "indent",
        "blocks",
        "align",
        "bidi",
        "paragraph",
        "clipboard",
        "undo",
        "find",
        "selection"
      ]
    },
    "/",
    { name: "insert", groups: ["insert", "links", "forms"] },
    "/",
    { name: "styles", groups: ["styles"] },
    { name: "document", groups: [ "tools"] }
  ],

  removeButtons:
    "About,Save,NewPage,Preview,Print,Templates,PasteFromWord,PasteText,SelectAll,Scayt,ShowBlocks,Language,Anchor"
};

export default config;
