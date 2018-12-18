let currentPage = 0;

// Initializing the schemes
const schemes = [
  {
    title: "Spiral",
    handle: "spiral",
    page: 137,
    img: "./assets/img/tiles/spiral/spiral.png",
    schemeList: [
      {
        title: "Spiral",
        type: "SPIRAL",
        img: "./assets/img/tiles/spiral/spiral_scheme.png",
        info: {
          sizes: "5x5 cm / 5x10 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.68,
            kg: 9.2
          },
          pallet: {
            boxes: 40,
            sqm: 27.28,
            kg: 383
          },
          grout: {
            kgsqm: 0.74
          }
        }
      },
      {
        title: "Spiral x4",
        type: "SPIRAL_X4",
        img: "./assets/img/tiles/spiral/spiralx4_scheme.png",
        info: {
          sizes: "10x10 cm / 10x20 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.63,
            kg: 8.5
          },
          pallet: {
            boxes: 40,
            sqm: 25.2,
            kg: 355
          },
          grout: {
            kgsqm: 0.35
          }
        }
      }
    ],
    schemeColorsList: [
      {
        title: "one color",
        type: "1_COLOR",
        img: "./assets/img/tiles/spiral/spiral_1color.png"
      },
      {
        title: "two colors",
        type: "2_COLOR",
        img: "./assets/img/tiles/spiral/spiral_2color.png"
      },
      {
        title: "glaze",
        type: "GLAZE",
        img: "./assets/img/tiles/spiral/spiral_glaze.png"
      },
      {
        title: "mix glaze",
        type: "MIX_GLAZE",
        img: "./assets/img/tiles/spiral/spiral_mix_glaze.png"
      }
    ]
  },
  {
    title: "Knit",
    handle: "knit",
    page: 145,
    img: "./assets/img/tiles/knit/knit.png",
    schemeList: [
      {
        title: "Knit",
        type: "KNIT",
        img: "./assets/img/tiles/knit/knit_scheme.png",
        info: {
          sizes: "5x5 cm / 5x10 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.54,
            kg: 7.3
          },
          pallet: {
            boxes: 60,
            sqm: 32.64,
            kg: 453
          },
          grout: {
            kgsqm: 0.78
          }
        }
      },
      {
        title: "Knit x4",
        type: "KNIT_X4",
        img: "./assets/img/tiles/knit/knitx4_scheme.png",
        info: {
          sizes: "10x10 cm / 10x20 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.73,
            kg: 9.8
          },
          pallet: {
            boxes: 40,
            sqm: 29.0,
            kg: 407
          },
          grout: {
            kgsqm: 0.35
          }
        }
      }
    ],
    schemeColorsList: [
      {
        title: "one color",
        type: "1_COLOR",
        img: "./assets/img/tiles/knit/knit_1color.png"
      },
      {
        title: "three colors",
        type: "3_COLOR",
        img: "./assets/img/tiles/knit/knit_3color.png"
      },
      {
        title: "glaze",
        type: "GLAZE",
        img: "./assets/img/tiles/knit/knit_glaze.png"
      },
      {
        title: "mix glaze",
        type: "MIX_GLAZE",
        img: "./assets/img/tiles/knit/knit_mix_glaze.png"
      }
    ]
  },
  {
    title: "Plaid",
    handle: "plaid",
    page: 153,
    img: "./assets/img/tiles/plaid/plaid.png",
    schemeList: [
      {
        title: "Plaid",
        type: "PLAID",
        img: "./assets/img/tiles/plaid/plaid_scheme.png",
        info: {
          sizes: "5x5 cm / 5x10 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.54,
            kg: 7.3
          },
          pallet: {
            boxes: 60,
            sqm: 32.64,
            kg: 453
          },
          grout: {
            kgsqm: 0.83
          }
        }
      },
      {
        title: "Plaid x4",
        type: "PLAID_X4",
        img: "./assets/img/tiles/plaid/plaidx4_scheme.png",
        info: {
          sizes: "10x10 cm / 10x20 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.544,
            kg: 7.3
          },
          pallet: {
            boxes: 60,
            sqm: 32.64,
            kg: 453
          },
          grout: {
            kgsqm: 0.35
          }
        }
      }
    ],
    schemeColorsList: [
      {
        title: "one color",
        type: "1_COLOR",
        img: "./assets/img/tiles/plaid/plaid_1color.png"
      },
      {
        title: "three colors",
        type: "3_COLOR",
        img: "./assets/img/tiles/plaid/plaid_3color.png"
      },
      {
        title: "glaze",
        type: "GLAZE",
        img: "./assets/img/tiles/plaid/plaid_glaze.png"
      },
      {
        title: "mix glaze",
        type: "MIX_GLAZE",
        img: "./assets/img/tiles/plaid/plaid_mix_glaze.png"
      }
    ]
  },
  {
    title: "Offset",
    handle: "offset",
    page: 161,
    img: "./assets/img/tiles/offset/offset.png",
    schemeList: [
      {
        title: "Offset",
        type: "OFFSET",
        img: "./assets/img/tiles/offset/offset_scheme.png",
        info: {
          sizes: "2.5x2.5 cm / 5x5 cm / 5x10 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.54,
            kg: 7.3
          },
          pallet: {
            boxes: 60,
            sqm: 32.64,
            kg: 453
          },
          grout: {
            kgsqm: 0.83
          }
        }
      },
      {
        title: "Offset x4",
        type: "OFFSET_X4",
        img: "./assets/img/tiles/offset/offsetx4_scheme.png",
        info: {
          sizes: "5x5 cm / 10x10 cm / 10x20 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.42,
            kg: 5.7
          },
          pallet: {
            boxes: 60,
            sqm: 25.2,
            kg: 357
          },
          grout: {
            kgsqm: 0.4
          }
        }
      }
    ],
    schemeColorsList: [
      {
        title: "one color",
        type: "1_COLOR",
        img: "./assets/img/tiles/offset/offset_1color.png"
      },
      {
        title: "three colors",
        type: "3_COLOR",
        img: "./assets/img/tiles/offset/offset_3color.png"
      },
      {
        title: "glaze",
        type: "GLAZE",
        img: "./assets/img/tiles/offset/offset_glaze.png"
      },
      {
        title: "mix glaze",
        type: "MIX_GLAZE",
        img: "./assets/img/tiles/offset/offset_mix_glaze.png"
      }
    ]
  },
  {
    title: "Subway",
    handle: "subway",
    page: 169,
    img: "./assets/img/tiles/subway/subway.png",
    schemeList: [
      {
        title: "Subway",
        type: "SUBWAY",
        img: "./assets/img/tiles/subway/subway_scheme.png",
        info: {
          sizes: "5x10 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.544,
            kg: 7.3
          },
          pallet: {
            boxes: 60,
            sqm: 32.64,
            kg: 453
          },
          grout: {
            kgsqm: 0.65
          }
        }
      },
      {
        title: "Subway",
        type: "SUBWAY_X4",
        custom: true,
        img: "./assets/img/tiles/subway/subwayx4_scheme.png"
      }
    ],
    schemeColorsList: [
      {
        title: "one color",
        type: "1_COLOR",
        img: "./assets/img/tiles/subway/subway_1color.png"
      },
      {
        title: "three colors",
        type: "3_COLOR",
        img: "./assets/img/tiles/subway/subway_3color.png"
      },
      {
        title: "glaze",
        type: "GLAZE",
        img: "./assets/img/tiles/subway/subway_glaze.png"
      },
      {
        title: "mix glaze",
        type: "MIX_GLAZE",
        img: "./assets/img/tiles/subway/subway_mix_glaze.png"
      }
    ]
  },
  {
    title: "Old",
    handle: "old",
    page: 175,
    img: "./assets/img/tiles/old/old.png",
    schemeList: [
      {
        title: "Old",
        type: "OLD",
        img: "./assets/img/tiles/old/old_scheme.png",
        info: {
          sizes: "2.5x2.5 cm / 5x10 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.544,
            kg: 7.3
          },
          pallet: {
            boxes: 40,
            sqm: 21.76,
            kg: 307
          },
          grout: {
            kgsqm: 1.28
          }
        }
      },
      {
        title: "Old x4",
        type: "OLD_X4",
        img: "./assets/img/tiles/old/oldx4_scheme.png",
        info: {
          sizes: "5x5 cm / 10x20cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.408,
            kg: 5.5
          },
          pallet: {
            boxes: 60,
            sqm: 24.48,
            kg: 345
          },
          grout: {
            kgsqm: 0.3
          }
        }
      }
    ],
    schemeColorsList: [
      {
        title: "one color",
        type: "1_COLOR",
        img: "./assets/img/tiles/old/old_1color.png"
      },
      {
        title: "two colors",
        type: "2_COLOR",
        img: "./assets/img/tiles/old/old_2color.png"
      },
      {
        title: "glaze",
        type: "GLAZE",
        img: "./assets/img/tiles/old/old_glaze.png"
      },
      {
        title: "mix glaze",
        type: "MIX_GLAZE",
        img: "./assets/img/tiles/old/old_mix_glaze.png"
      }
    ]
  },
  {
    title: "Basket",
    handle: "basket",
    page: 183,
    img: "./assets/img/tiles/basket/basket.png",
    schemeList: [
      {
        title: "Basket",
        type: "BASKET",
        img: "./assets/img/tiles/basket/basket_scheme.png",
        info: {
          sizes: "5x10 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.97,
            kg: 13
          },
          pallet: {
            boxes: 40,
            sqm: 38.8,
            kg: 535
          },
          grout: {
            kgsqm: 0.65
          }
        }
      },
      {
        title: "Basket x4",
        type: "BASKET_X4",
        img: "./assets/img/tiles/basket/basketx4_scheme.png",
        info: {
          sizes: "10x20cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.97,
            kg: 13
          },
          pallet: {
            boxes: 40,
            sqm: 38.8,
            kg: 535
          },
          grout: {
            kgsqm: 0.35
          }
        }
      }
    ],
    schemeColorsList: [
      {
        title: "one color",
        type: "1_COLOR",
        img: "./assets/img/tiles/basket/basket_1color.png"
      },
      {
        title: "three colors",
        type: "3_COLOR",
        img: "./assets/img/tiles/basket/basket_3color.png"
      },
      {
        title: "glaze",
        type: "GLAZE",
        img: "./assets/img/tiles/basket/basket_glaze.png"
      },
      {
        title: "mix glaze",
        type: "MIX_GLAZE",
        img: "./assets/img/tiles/basket/basket_mix_glaze.png"
      }
    ]
  },
  {
    title: "Oddfellow",
    handle: "oddfellow",
    page: 191,
    img: "./assets/img/tiles/oddfellow/oddfellow.png",
    schemeList: [
      {
        title: "Oddfellow",
        type: "ODDFELLOW",
        img: "./assets/img/tiles/oddfellow/oddfellow_scheme.png",
        info: {
          sizes: "2.5x2.5 cm / 5x5 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.54,
            kg: 7.3
          },
          pallet: {
            boxes: 60,
            sqm: 32.64,
            kg: 453
          },
          grout: {
            kgsqm: 1.4
          }
        }
      },
      {
        title: "Oddfellow x4",
        type: "ODDFELLOW_X4",
        img: "./assets/img/tiles/oddfellow/oddfellowx4_scheme.png",
        info: {
          sizes: "5x5cm / 10x10cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.606,
            kg: 8.2
          },
          pallet: {
            boxes: 40,
            sqm: 24.4,
            kg: 343
          },
          grout: {
            kgsqm: 0.55
          }
        }
      }
    ],
    schemeColorsList: [
      {
        title: "one color",
        type: "1_COLOR",
        img: "./assets/img/tiles/oddfellow/oddfellow_1color.png"
      },
      {
        title: "two colors",
        type: "2_COLOR",
        img: "./assets/img/tiles/oddfellow/oddfellow_2color.png"
      },
      {
        title: "three colors",
        type: "3_COLOR",
        img: "./assets/img/tiles/oddfellow/oddfellow_3color.png"
      },
      {
        title: "glaze",
        type: "GLAZE",
        img: "./assets/img/tiles/oddfellow/oddfellow_glaze.png"
      },
      {
        title: "mix glaze",
        type: "MIX_GLAZE",
        img: "./assets/img/tiles/oddfellow/oddfellow_mix_glaze.png"
      }
    ]
  },
  {
    title: "Rough",
    handle: "rough",
    img: "./assets/img/tiles/rough/rough.png",
    schemeList: [
      {
        title: "Rough",
        type: "ROUGH",
        img: "./assets/img/tiles/rough/rough_scheme.png",
        info: {
          sizes: "5x10 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.544,
            kg: 7.3
          }
        }
      }
    ],
    schemeColorsList: [
      {
        title: "one color",
        type: "1_COLOR",
        img: "./assets/img/tiles/rough/rough_1color.png"
      },
      {
        title: "two colors",
        type: "2_COLOR",
        img: "./assets/img/tiles/rough/rough_2color.png"
      },
      {
        title: "glaze",
        type: "GLAZE",
        img: "./assets/img/tiles/rough/rough_glaze.png"
      },
      {
        title: "mix glaze",
        type: "MIX_GLAZE",
        img: "./assets/img/tiles/rough/rough_mix_glaze.png"
      }
    ]
  },
  {
    title: "Double",
    handle: "double",
    img: "./assets/img/tiles/double/double.png",
    schemeList: [
      {
        title: "Double",
        type: "DOUBLE",
        img: "./assets/img/tiles/double/double_scheme.png",
        info: {
          sizes: "2.5x2.5 cm / 5x5 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.544,
            kg: 7.3
          }
        }
      },
      {
        title: "Double x4",
        type: "DOUBLE_X4",
        img: "./assets/img/tiles/double/doublex4_scheme.png",
        info: {
          sizes: "5x5cm / 10x10cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.528,
            kg: 7.1
          }
        }
      }
    ],
    schemeColorsList: [
      {
        title: "one color",
        type: "1_COLOR",
        img: "./assets/img/tiles/double/double_1color.png"
      },
      {
        title: "three colors",
        type: "3_COLOR",
        img: "./assets/img/tiles/double/double_3color.png"
      },
      {
        title: "glaze",
        type: "GLAZE",
        img: "./assets/img/tiles/double/double_glaze.png"
      },
      {
        title: "mix glaze",
        type: "MIX_GLAZE",
        img: "./assets/img/tiles/double/double_mix_glaze.png"
      }
    ]
  },
  {
    title: "Herringbone",
    handle: "herringbone",
    img: "./assets/img/tiles/herringbone/herringbone.png",
    schemeList: [
      {
        title: "Herringbone",
        type: "HERRINGBONE",
        img: "./assets/img/tiles/herringbone/herringbone_scheme.png",
        info: {
          sizes: "5x10 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.97,
            kg: 13
          }
        }
      }
    ],
    schemeColorsList: [
      {
        title: "one color",
        type: "1_COLOR",
        img: "./assets/img/tiles/herringbone/herringbone_1color.png"
      },
      {
        title: "three colors",
        type: "3_COLOR",
        img: "./assets/img/tiles/herringbone/herringbone_3color.png"
      },
      {
        title: "glaze",
        type: "GLAZE",
        img: "./assets/img/tiles/herringbone/herringbone_glaze.png"
      },
      {
        title: "mix glaze",
        type: "MIX_GLAZE",
        img: "./assets/img/tiles/herringbone/herringbone_mix_glaze.png"
      }
    ]
  },
  {
    title: "Modern",
    handle: "modern",
    img: "./assets/img/tiles/modern/modern.png",
    schemeList: [
      {
        title: "Modern",
        type: "MODERN",
        img: "./assets/img/tiles/modern/modern_scheme.png",
        info: {
          sizes: "5x5 cm / 5x10 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.97,
            kg: 13
          }
        }
      },
      {
        title: "Modern x4",
        type: "MODERN_X4",
        img: "./assets/img/tiles/modern/modernx4_scheme.png",
        info: {
          sizes: "10x10 cm / 10x20 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.97,
            kg: 13
          }
        }
      }
    ],
    schemeColorsList: [
      {
        title: "one color",
        type: "1_COLOR",
        img: "./assets/img/tiles/modern/modern_1color.png"
      },
      {
        title: "three colors",
        type: "3_COLOR",
        img: "./assets/img/tiles/modern/modern_3color.png"
      },
      {
        title: "glaze",
        type: "GLAZE",
        img: "./assets/img/tiles/modern/modern_glaze.png"
      },
      {
        title: "mix glaze",
        type: "MIX_GLAZE",
        img: "./assets/img/tiles/modern/modern_mix_glaze.png"
      }
    ]
  },
  {
    title: "Ancient",
    handle: "ancient",
    img: "./assets/img/tiles/ancient/ancient.png",
    schemeList: [
      {
        title: "Ancient",
        type: "ANCIENT",
        img: "./assets/img/tiles/ancient/ancient_scheme.png",
        info: {
          sizes: "2.5x2.5 cm / 5x10 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.554,
            kg: 7.3
          }
        }
      },
      {
        title: "Ancient x4",
        type: "ANCIENT_X4",
        img: "./assets/img/tiles/ancient/ancientx4_scheme.png",
        info: {
          sizes: "5x5 cm / 10x20 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.544,
            kg: 7.3
          }
        }
      }
    ],
    schemeColorsList: [
      {
        title: "one color",
        type: "1_COLOR",
        img: "./assets/img/tiles/ancient/ancient_1color.png"
      },
      {
        title: "three colors",
        type: "3_COLOR",
        img: "./assets/img/tiles/ancient/ancient_3color.png"
      },
      {
        title: "glaze",
        type: "GLAZE",
        img: "./assets/img/tiles/ancient/ancient_glaze.png"
      },
      {
        title: "mix glaze",
        type: "MIX_GLAZE",
        img: "./assets/img/tiles/ancient/ancient_mix_glaze.png"
      }
    ]
  },
  {
    title: "Grid",
    handle: "grid",
    img: "./assets/img/tiles/grid/grid.png",
    schemeList: [
      {
        title: "Grid",
        type: "GRID",
        img: "./assets/img/tiles/grid/grid_scheme.png",
        info: {
          sizes: "5x10 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.725,
            kg: 9.8
          }
        }
      },
      {
        title: "Grid x4",
        type: "GRID_X4",
        img: "./assets/img/tiles/grid/gridx4_scheme.png",
        info: {
          sizes: "10x20 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.725,
            kg: 9.8
          }
        }
      }
    ],
    schemeColorsList: [
      {
        title: "one color",
        type: "1_COLOR",
        img: "./assets/img/tiles/grid/grid_1color.png"
      },
      {
        title: "four colors",
        type: "4_COLOR",
        img: "./assets/img/tiles/grid/grid_4color.png"
      },
      {
        title: "glaze",
        type: "GLAZE",
        img: "./assets/img/tiles/grid/grid_glaze.png"
      },
      {
        title: "mix glaze",
        type: "MIX_GLAZE",
        img: "./assets/img/tiles/grid/grid_mix_glaze.png"
      }
    ]
  },
  {
    title: "Blends",
    handle: "blends",
    img: "./assets/img/tiles/blends/blends.png",
    schemeList: [
      {
        title: "Blends",
        type: "BLENDS",
        img: "./assets/img/tiles/blends/blends_scheme.png",
        info: {
          sizes: "5x5 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.544,
            kg: 7.3
          }
        }
      },
      {
        title: "Blends x4",
        type: "BLENDS_X4",
        img: "./assets/img/tiles/blends/blendsx4_scheme.png",
        info: {
          sizes: "10x10 cm",
          thickness: "6 mm",
          box: {
            pcs: 6,
            sqm: 0.97,
            kg: 13
          }
        }
      }
    ],
    schemeColorsList: [
      {
        title: "one color",
        type: "1_COLOR",
        img: "./assets/img/tiles/blends/blends_1color.png"
      },
      {
        title: "glaze",
        type: "GLAZE",
        img: "./assets/img/tiles/blends/blends_glaze.png"
      },
      {
        title: "mix glaze",
        type: "MIX_GLAZE",
        img: "./assets/img/tiles/blends/blends_mix_glaze.png"
      }
    ]
  }
];

// Initialazing the colors
const colors = {
  white: "#F2E8D4",
  sand: "#E2D1B8",
  dust: "#CDC6BB",
  azure: "#B6C5C2",
  mou: "#A79683",
  terracotta: "#BE947C",
  cotto: "#B9826F",
  klinker: "#8A574C",
  grey: "#A3968E",
  mud: "#767370",
  graphite: "#5F615B",
  coffe: "#594F46",
  black: "#303031"
};
const fugaColors = {
  "bianco-assoluto": "#FCFCFC",
  "bianco-ghiaccio": "#E0E0DB",
  titanio: "#CCCCC2",
  "grigio-seta": "#C6C6C6",
  silver: "#B2B2B2",
  "grigio-portland": "#9D9D9C",
  antracite: "#575756",
  moka: "#54403D",
  "grigio-fango": "#A69C81",
  tortora: "#9E8775",
  travertino: "#C4BA9E",
  lime: "#F2EDA3",
  "rosso-oriente": "#C7423D"
};

// Initialazing the future order
let order = {
  scheme: null,
  schemeTitle: null,
  schemeImg: null,
  schemeID: null,
  schemeType: null,
  schemeSizes: null,
  schemeThickness: null,
  schemeBoxKg: null,
  schemeBoxPcs: null,
  schemeBoxSqm: null,
  schemeColorTitle: null,
  schemeColorType: null,
  colors: ["white", "white", "white"],
  fugaColor: "bianco-assoluto",
  width: null,
  height: null,
  sfrido: null,
  fuga: 1.6
};

const checkSVG = `<img src="./assets/img/layout/TickGreenSVG.svg" alt="checked">`;

window.onload = () => {
  initSchemeContainer();
  initColorContainer();
};

/*

            SCHEME SELECTION PAGE

*/

// @title   Initialize scheme container
// @called  When the page is first loaded
// @desc    Add a list with all the schemes in the element with id "#scheme-container"

const initSchemeContainer = () => {
  const schemeContainer = document.getElementById("scheme-container");

  for (let i = 0; i < schemes.length; i++) {
    schemeContainer.innerHTML += `<li>
                                    <button onclick="schemeClicked('${i}')">
                                      <img src="${schemes[i].img}">
                                      <h3>${schemes[i].title}</h3>
                                    </button>
                                  </li>`;
  }
};

// @title   Scheme clicked
// @called  When the user click in any scheme in the first page
// @desc    Update the order adding the selected scheme and iterate to the next page

const schemeClicked = schemeID => {
  initLayoutContainer(schemeID);

  order.scheme = schemes[schemeID].handle;
  order.schemeID = schemeID;
  order.schemeNumber = parseInt(schemeID) + 1;
  order.schemeTitle = schemes[schemeID].title;
  order.schemePage = schemes[schemeID].page;

  currentPage++;
  updatePage();
};

/*

            LAYOUT PAGE

*/

// @title   Init Layout Container
// @called  After the user clicked an schema in the first page, through the schemeClicked() function
// @desc    Update the layout to the selected scheme

const initLayoutContainer = schemeID => {
  let schemeList = "";
  for (let i = 0; i < schemes[schemeID].schemeList.length; i++) {
    let scheme = schemes[schemeID].schemeList[i];

    schemeList += ` <label>     
                      <img src="${scheme.img}">
                      <input type="radio" name="scheme-type" class="scheme-type" required/>
                      <div class="check-svg">
                            ${checkSVG}
                      </div>
                    </label>`;
  }

  let schemeColors = "";
  for (let i = 0; i < schemes[schemeID].schemeColorsList.length; i++) {
    let color = schemes[schemeID].schemeColorsList[i];

    schemeColors += ` <label>
                          <img src="${color.img}">
                          ${color.title}
                          <input type="radio" name="scheme-color" class="scheme-color" required/>
                          <div class="check-svg">
                            ${checkSVG}
                          </div>
                      </label>`;
  }

  document.getElementById("layout-title").innerHTML = schemes[schemeID].title;
  document.getElementById("layout-scheme-list").innerHTML = schemeList;
  document.getElementById("layout-scheme-color").innerHTML = schemeColors;
};

// @title   Layout Submit
// @called  After the user submited the order in the layout page
// @desc    Update the order with the respective layout

const layoutSubmit = () => {
  let schemeType = document.querySelectorAll(".scheme-type");
  let schemeColorType = document.querySelectorAll(".scheme-color");

  // Validations

  let valid = false;

  let height = parseInt(document.getElementById("scheme-height").value);
  if (!height && height !== 0) {
    alert("height must be a number");
    return;
  }
  if (height <= 0) {
    alert("height must be greater than 0");
    return;
  }

  let width = parseInt(document.getElementById("scheme-width").value);
  if (!width && width !== 0) {
    alert("width must be a number");
    return;
  }
  if (width < 0) {
    alert("width must be greater than 0");
    return;
  }

  let sfrido = parseInt(document.getElementById("scheme-sfrido").value);
  if (!sfrido && sfrido !== 0) {
    alert("sfrido must be a number");
    return;
  }
  if (sfrido < 0) {
    alert("sfrido must be equal or greater than 0");
    return;
  }

  // Select the scheme type

  valid = false;
  let scheme;

  for (let i = 0; i < schemeType.length; i++) {
    if (schemeType[i].checked) {
      scheme = schemes[order.schemeID].schemeList[i];
      valid = true;
      break;
    }
  }

  if (!valid) {
    return;
  }

  // Select the scheme color

  valid = false;

  for (let i = 0; i < schemeColorType.length; i++) {
    if (schemeColorType[i].checked) {
      schemeColor = schemes[order.schemeID].schemeColorsList[i];
      valid = true;
      break;
    }
  }

  if (!valid) {
    return;
  }

  // Update the order
  order.schemeType = scheme.type;
  order.schemeImg = scheme.img;
  order.custom = scheme.custom ? true : false;
  if (!scheme.custom) {
    order.schemeSizes = scheme.info.sizes;
    order.schemeThickness = scheme.info.thickness;

    order.schemeBoxKg = scheme.info.box.kg;
    order.schemeBoxPcs = scheme.info.box.pcs;
    order.schemeBoxSqm = scheme.info.box.sqm;

    order.schemePalletBoxes = scheme.info.pallet.boxes;
    order.schemePalletSqm = scheme.info.pallet.sqm;
    order.schemePalletKg = scheme.info.pallet.kg;

    order.schemeGroutKgSqm = scheme.info.grout.kgsqm;
  } else {
    order.schemeSizes = "Custom";
    order.schemeThickness = "Custom";

    order.schemeBoxKg = "Custom";
    order.schemeBoxPcs = "Custom";
    order.schemeBoxSqm = "Custom";

    order.schemePalletBoxes = "Custom";
    order.schemePalletSqm = "Custom";
    order.schemePalletKg = "Custom";

    order.schemeGroutKgSqm = "Custom";
  }

  if (order.schemeColorType !== schemeColor.type) {
    if (schemeColor.type === "3_COLOR") {
      order.colors = [order.colors[0], order.colors[1], order.colors[2]];
    } else if (schemeColor.type === "2_COLOR") {
      order.colors = [order.colors[0], order.colors[1]];
    } else if (
      schemeColor.type === "1_COLOR" ||
      schemeColor.type === "GLAZE" ||
      schemeColor.type === "MIX_GLAZE"
    ) {
      order.colors = [order.colors[0]];
    }
  }
  order.schemeColorType = schemeColor.type;
  order.schemeColorTitle = schemeColor.title;
  order.height = height;
  order.width = width;
  order.sfrido = sfrido;

  render("render");
  currentPage++;
  updatePage();
};

/*

            VISUALIZATION PAGE

*/

// @title   Initialize color container
// @called  After the user submited the layout in the second page, through the layoutSubmit() function
// @desc    Display the layout for the color selection

const initColorContainer = () => {
  let tileColors1Selector = "";
  let tileColors2Selector = "";
  let tileColors3Selector = "";
  let tileColors4Selector = "";
  let tileColorsFuga = "";

  for (let color in colors) {
    tileColors1Selector += `<label 
                              class="color-column"
                              onclick="updateColor('color1', this)" 
                            >
                              <input 
                                type="radio"
                                name="color1-selector"
                                class="color1-selector"
                                value="${color}"
                              >
                              <div
                                class="color-fill"
                                style="background: ${colors[color]}">
                              </div>
                            </label>
                          `;

    tileColors2Selector += `<label 
                              class="color-column" 
                              onclick="updateColor('color2', this)" 
                            >
                              <input 
                              type="radio"
                              name="color2-selector"
                              class="color2-selector"
                              value="${color}"
                              >
                              <div
                                class="color-fill"
                                style="background: ${colors[color]}">
                              </div>
                            </label>
                            `;

    tileColors3Selector += `<label 
                            class="color-column" 
                            onclick="updateColor('color3', this)" 
                          >
                            <input 
                            type="radio"
                            name="color3-selector"
                            class="color3-selector"
                            value="${color}"
                            >
                            <div
                              class="color-fill"
                              style="background: ${colors[color]}">
                            </div>
                          </label>
                          `;

    tileColors4Selector += `<label 
                          class="color-column" 
                          onclick="updateColor('color4', this)" 
                        >
                          <input 
                          type="radio"
                          name="color4-selector"
                          class="color4-selector"
                          value="${color}"
                          >
                          <div
                            class="color-fill"
                            style="background: ${colors[color]}">
                          </div>
                        </label>
                        `;
  }

  for (let fugaColor in fugaColors) {
    tileColorsFuga += ` <label 
                          class="color-column" 
                          onclick="updateColor('color-fuga', this)" 
                        >
                          <input 
                          type="radio"
                          name="color-fuga-selector"
                          class="color-fuga-selector"
                          value="${fugaColor}"
                          >
                          <div
                            class="color-fill"
                            style="background: ${fugaColors[fugaColor]}">
                          </div>
                        </label>
                        `;
  }

  // Init the colors selector
  document.querySelector(".color1-section").innerHTML = tileColors1Selector;
  document.querySelector(".color2-section").innerHTML = tileColors2Selector;
  document.querySelector(".color3-section").innerHTML = tileColors3Selector;
  document.querySelector(".color4-section").innerHTML = tileColors4Selector;

  // Init the fuga color slector
  document.querySelector(".color-fuga-section").innerHTML = tileColorsFuga;
};

const updateColor = (color, e) => {
  // Return the colors in the order to initial state
  if (color === "color1") {
    order.colors[0] = e.childNodes[1].value;
  } else if (color === "color2") {
    order.colors[1] = e.childNodes[1].value;
  } else if (color === "color3") {
    order.colors[2] = e.childNodes[1].value;
  } else if (color === "color4") {
    order.colors[3] = e.childNodes[1].value;
  } else if (color === "color-fuga") {
    order.fugaColor = e.childNodes[1].value;
  }
  render("update");
};

const activeColorModal = function(color) {
  let color1 = document.querySelector(".color1-modal");
  let color2 = document.querySelector(".color2-modal");
  let color3 = document.querySelector(".color3-modal");
  let color4 = document.querySelector(".color4-modal");
  let colorFuga = document.querySelector(".color-fuga-modal");

  color1.classList.remove("visible");
  color2.classList.remove("visible");
  color3.classList.remove("visible");
  color4.classList.remove("visible");
  colorFuga.classList.remove("visible");

  if (color === "color1") {
    color1.classList.add("visible");
  } else if (color === "color2") {
    color2.classList.add("visible");
  } else if (color === "color3") {
    color3.classList.add("visible");
  } else if (color === "color4") {
    color4.classList.add("visible");
  } else if (color === "color-fuga") {
    colorFuga.classList.add("visible");
  }
};

const closeModal = color => {
  let color1 = document.querySelector(".color1-modal");
  let color2 = document.querySelector(".color2-modal");
  let color3 = document.querySelector(".color3-modal");
  let color4 = document.querySelector(".color4-modal");
  let colorFuga = document.querySelector(".color-fuga-modal");

  if (color === "color1") {
    color1.classList.remove("visible");
  } else if (color === "color2") {
    color2.classList.remove("visible");
  } else if (color === "color3") {
    color3.classList.remove("visible");
  } else if (color === "color4") {
    color4.classList.remove("visible");
  } else if (color === "color-fuga") {
    colorFuga.classList.remove("visible");
  }
};

// @title   Render
// @called  When there is need to render
// @desc    Manage all the render functionality

let fuga;
let tiles;
let color1Example;
let color2Example;
let color3Example;
let color4Example;
let colorFugaExample;

const render = state => {
  let s = Snap("#tiles");
  s.attr({ viewBox: "0 0 2600 2000" });

  let xi = 210;
  let yi = 700;
  let xCursorPos = order.width > 200 ? 200 : order.width;
  let yCursorPos = order.height > 100 ? 100 : order.height;

  if (state === "render") {
    s.clear();

    fuga = s.rect(xi + 100, yi + 100, xCursorPos * 10, yCursorPos * 10).attr({
      fill: fugaColors[order.fugaColor]
    });

    renderTiles(s, xi + 100, yi + 100);
    renderGrid(s, xi, yi);
  } else if (state === "update") {
    tiles.update(order);
    order = tiles.updateOrder();

    fuga.attr({ fill: fugaColors[order.fugaColor] });
    if (color1Example) {
      color1Example.attr({ fill: colors[order.colors[0]] });
    }
    if (color2Example) {
      color2Example.attr({ fill: colors[order.colors[1]] });
    }
    if (color3Example) {
      color3Example.attr({ fill: colors[order.colors[2]] });
    }
    if (color4Example) {
      color4Example.attr({ fill: colors[order.colors[2]] });
    }
    if (colorFugaExample) {
      colorFugaExample.attr({ fill: fugaColors[order.fugaColor] });
    }
  }
};

// @title   Render tiles
// @called  When there's need of a rerender
// @desc    Functionality related to render the tiles

const renderTiles = (s, xi, yi) => {
  tiles = new TileMap(xi, yi, order);

  tiles.draw(s);
  order = tiles.updateOrder();
};

// @title   Render grid
// @called  When the tiles were rendered, then is time to render the surronded grid
// @desc    Render the grid, axis, etc

const renderGrid = (s, xi, yi) => {
  // Info
  let title = s.text(0, 150, order.schemeTitle).attr({
    "font-size": 140
  });
  let colorTitle = s.text(120, 230, order.schemeColorTitle).attr({
    "font-size": 80
  });

  let color1 = s.text(100, 400, "Color 1").attr({
    "font-size": 80
  });
  color1Example = s.circle(450, 375, 70);
  color1Example.attr({
    "stroke-width": "1",
    fill: colors[order.colors[0]],
    class: "cursor-pointer",
    stroke: "#888",
    strokeWidth: 2
  });
  color1Example.click(() => activeColorModal("color1"));

  if (order.schemeColorType === "2_COLOR") {
    let color2 = s.text(600, 400, "Color 2").attr({
      "font-size": 80
    });
    color2Example = s.circle(950, 375, 70).attr({
      "stroke-width": "1",
      fill: colors[order.colors[1]],
      class: "cursor-pointer",
      stroke: "#888",
      strokeWidth: 2
    });
    color2Example.click(() => activeColorModal("color2"));
  } else if (order.schemeColorType === "3_COLOR") {
    let color2 = s.text(600, 400, "Color 2").attr({
      "font-size": 80
    });
    color2Example = s.circle(950, 375, 70).attr({
      "stroke-width": "1",
      fill: colors[order.colors[1]],
      class: "cursor-pointer",
      stroke: "#888",
      strokeWidth: 2
    });
    color2Example.click(() => activeColorModal("color2"));

    let color3 = s.text(1100, 400, "Color 3").attr({
      "font-size": 80
    });
    color3Example = s.circle(1450, 375, 70).attr({
      "stroke-width": "1",
      fill: colors[order.colors[2]],
      class: "cursor-pointer",
      stroke: "#888",
      strokeWidth: 2
    });

    color3Example.click(() => activeColorModal("color3"));
  } else if (order.schemeColorType === "4_COLOR") {
    let color2 = s.text(600, 400, "Color 2").attr({
      "font-size": 80
    });
    color2Example = s.circle(950, 375, 70).attr({
      "stroke-width": "1",
      fill: colors[order.colors[1]],
      class: "cursor-pointer",
      stroke: "#888",
      strokeWidth: 2
    });
    color2Example.click(() => activeColorModal("color2"));

    let color3 = s.text(1100, 400, "Color 3").attr({
      "font-size": 80
    });
    color3Example = s.circle(1450, 375, 70).attr({
      "stroke-width": "1",
      fill: colors[order.colors[2]],
      class: "cursor-pointer",
      stroke: "#888",
      strokeWidth: 2
    });

    color3Example.click(() => activeColorModal("color3"));

    let color4 = s.text(1560, 400, "Color 4").attr({
      "font-size": 80
    });
    color4Example = s.circle(1950, 375, 70).attr({
      "stroke-width": "1",
      fill: colors[order.colors[3]],
      class: "cursor-pointer",
      stroke: "#888",
      strokeWidth: 2
    });

    color4Example.click(() => activeColorModal("color4"));
  }

  let colorFuga = s.text(1660, 150, "Fuga").attr({
    "font-size": 80
  });
  colorFugaExample = s.circle(1950, 150, 70).attr({
    "stroke-width": "1",
    fill: fugaColors[order.fugaColor],
    class: "cursor-pointer",
    stroke: "#888",
    strokeWidth: 2
  });

  colorFugaExample.click(() => activeColorModal("color-fuga"));

  let dimensionsWidth = s.text(100, 520, `width: ${order.width}cm`).attr({
    "font-size": 50
  });

  let dimensionsHeight = s.text(400, 520, `height: ${order.height}cm`).attr({
    "font-size": 50
  });

  // Axis lines
  let xLine = s.line(xi, yi, xi + 2100, yi).attr({
    stroke: "#888",
    strokeWidth: 2,
    strokeLinecap: "round"
  });

  let yLine = s.line(xi, yi, xi, yi + 1100).attr({
    stroke: "#888",
    strokeWidth: 2,
    strokeLinecap: "round"
  });

  // Area layout lines

  let xCursorPos = order.width > 200 ? 200 : order.width;
  let yCursorPos = order.height > 100 ? 100 : order.height;

  let x1CursorLine = s.line(xi + 100, yi, xi + 100, yi + 1100).attr({
    stroke: "#444",
    strokeWidth: 5,
    strokeLinecap: "round",
    "stroke-dasharray": 20 + " " + 20
  });

  let x2CursorLine = s
    .line(xCursorPos * 10 + xi + 100, yi, xCursorPos * 10 + xi + 100, yi + 1100)
    .attr({
      stroke: "#444",
      strokeWidth: 5,
      strokeLinecap: "round",
      "stroke-dasharray": 20 + " " + 20
    });

  let xCursorPosText = s.text(xCursorPos * 10 + xi + 100, yi - 50, xCursorPos + "cm").attr({
    "font-size": 50
  });
  let xCursor = s.circle(xCursorPos * 10 + xi + 100, yi, 30).attr({
    fill: "#ccc",
    stroke: "#888",
    strokeWidth: 2
  });

  let y1CursorLine = s.line(xi, yi + 100, xi + 2100, yi + 100).attr({
    stroke: "#444",
    strokeWidth: 5,
    strokeLinecap: "round",
    "stroke-dasharray": 20 + " " + 20
  });

  let y2CursorLine = s
    .line(xi, yi + yCursorPos * 10 + 100, xi + 2100, yi + 100 + yCursorPos * 10)
    .attr({
      stroke: "#444",
      strokeWidth: 5,
      strokeLinecap: "round",
      "stroke-dasharray": 20 + " " + 20
    });

  let yCursorPosText = s.text(xi - 200, yi + yCursorPos * 10 + 100, yCursorPos + "cm").attr({
    "font-size": 50
  });
  let yCursor = s.circle(xi, yi + yCursorPos * 10 + 100, 30).attr({
    fill: "#ccc",
    stroke: "#888",
    strokeWidth: 2
  });
};

/*

            ORDER PAGE

*/

// @title   Order submit
// @called  When the order is submited after the visualization
// @desc    Calculate the order

const reviewOrder = () => {
  let orderHTML = document.querySelector("#order-template");

  if (!order.custom) {
    order.boxAmounts = Math.ceil(order.sqm / order.schemeBoxSqm);
    order.totalKgs = Math.ceil(order.boxAmounts * order.schemeBoxKg);
    order.groutTotalKgs = Math.ceil(order.sqm * order.schemeGroutKgSqm);
  } else {
    order.boxAmounts = "Custom";
    order.totalKgs = "Custom";
    order.groutTotalKgs = "Custom";
  }
  orderHTML = orderHTML.innerHTML.replace(/\$\{(.+?)\}/g, (match, p1) => {
    return order[p1];
  });

  document.querySelector("#order-section").innerHTML = orderHTML;

  let rows = {
    header: "",
    dot: "",
    square: "",
    rectangular: "",
    squarex4: "",
    rectangularx4: "",
    total: ""
  };

  // Fill tiles table
  order.colors.map((val, id) => {
    rows.header += `<td>color ${id + 1}: ${val} tiles</td>`;
    rows.dot += `<td>${order.tilesCount.amountTilesDot[id]} tiles</td>`;
    rows.square += `<td>${order.tilesCount.amountTilesSquare[id]} tiles</td>`;
    rows.rectangular += `<td>${order.tilesCount.amountTilesRectangular[id]} tiles</td>`;
    rows.squarex4 += `<td>${order.tilesCount.amountTilesSquarex4[id]} tiles</td>`;
    rows.rectangularx4 += `<td>${order.tilesCount.amountTilesRectangularx4[id]} tiles</td>`;
    rows.total += `<td>${order.tilesCount.amountTotal[id]} tiles</td>`;
  });

  let val = 4;

  rows.header += `<td>total tiles</td>`;
  rows.dot += `<td>${order.tilesCount.amountTilesDot[val]} tiles</td>`;
  rows.square += `<td>${order.tilesCount.amountTilesSquare[val]} tiles</td>`;
  rows.rectangular += `<td>${order.tilesCount.amountTilesRectangular[val]} tiles</td>`;
  rows.squarex4 += `<td>${order.tilesCount.amountTilesSquarex4[val]} tiles</td>`;
  rows.rectangularx4 += `<td>${order.tilesCount.amountTilesRectangularx4[val]} tiles</td>`;
  rows.total += `<td>${order.tilesCount.amountTotal[val]} tiles</td>`;

  document.querySelector("#tiles-header").innerHTML += rows.header;
  document.querySelector("#tiles-amount-dot").innerHTML += rows.dot;
  document.querySelector("#tiles-amount-square").innerHTML += rows.square;
  document.querySelector("#tiles-amount-rectangular").innerHTML += rows.rectangular;
  document.querySelector("#tiles-amount-squarex4").innerHTML += rows.squarex4;
  document.querySelector("#tiles-amount-rectangularx4").innerHTML += rows.rectangularx4;
  document.querySelector("#tiles-amount-total").innerHTML += rows.total;

  currentPage++;
  updatePage();
};

const submitOrder = () => {
  alert("Thank you");
};

/*

            UTILS FUNCTIONS

*/

const previousPage = () => {
  currentPage--;
  updatePage();
};

const updatePage = () => {
  const pages = document.getElementsByClassName("page-section");

  window.scroll(0, 0);
  for (let i = 0; i < pages.length; i++) {
    if (i === currentPage) {
      pages[i].classList.add("visible");
    } else {
      pages[i].classList.remove("visible");
    }
  }
};
