const config = {
//   uiColor: "#777777",
  toolbarGroups: [
    {
      name: "basicstyles",
      groups: [
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
    { name: "document", groups: ["mode", "tools"] }
  ],

  removeButtons:
    "About,Save,NewPage,Preview,Print,Templates,PasteFromWord,PasteText,SelectAll,Scayt,ShowBlocks,Language"
};

export default config;
