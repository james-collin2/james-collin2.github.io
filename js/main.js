let currentPage = 0;

// Initializing the schemes
const schemes = [
  {
    title: "Spiral",
    handle: "spiral",
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
  1: "#cccccc",
  2: "#dddddd",
  3: "#eeeeee",
  4: "#ffffff"
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
  fugaColor: 4,
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
  order.schemeTitle = schemes[schemeID].title;

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
  order.schemeSizes = scheme.info.sizes;
  order.schemeThickness = scheme.info.thickness;
  order.schemeBoxKg = scheme.info.box.kg;
  order.schemeBoxPcs = scheme.info.box.pcs;
  order.schemeBoxSqm = scheme.info.box.sqm;
  if (order.schemeColorType !== schemeColor.type) {
    if (schemeColor.type === "2_COLOR") {
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
  } else if (color === "color-fuga") {
    order.fugaColor = e.childNodes[1].value;
  }
  render("update");
};

const activeColorModal = function(color) {
  let color1 = document.querySelector(".color1-modal");
  let color2 = document.querySelector(".color2-modal");
  let color3 = document.querySelector(".color3-modal");
  let colorFuga = document.querySelector(".color-fuga-modal");

  color1.classList.remove("visible");
  color2.classList.remove("visible");
  color3.classList.remove("visible");
  colorFuga.classList.remove("visible");

  if (color === "color1") {
    color1.classList.add("visible");
  } else if (color === "color2") {
    color2.classList.add("visible");
  } else if (color === "color3") {
    color3.classList.add("visible");
  } else if (color === "color-fuga") {
    colorFuga.classList.add("visible");
  }
};

const closeModal = color => {
  let color1 = document.querySelector(".color1-modal");
  let color2 = document.querySelector(".color2-modal");
  let color3 = document.querySelector(".color3-modal");
  let colorFuga = document.querySelector(".color-fuga-modal");

  if (color === "color1") {
    color1.classList.remove("visible");
  } else if (color === "color2") {
    color2.classList.remove("visible");
  } else if (color === "color3") {
    color3.classList.remove("visible");
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
    if (colorFugaExample) {
      colorFugaExample.attr({ fill: fugaColors[order.fugaColor] });
    }
  }
};

// @title   Render tiles
// @called  When there's need of a rerender
// @desc    Functionality related to render the tiles

const renderTiles = (s, xi, yi) => {
  if (order.scheme === "spiral") {
    tiles = new Spiral(xi, yi, order);
  } else if (order.scheme === "knit") {
    tiles = new Knit(xi, yi, order);
  } else if (order.scheme === "plaid") {
    tiles = new Plaid(xi, yi, order);
  } else if (order.scheme === "offset") {
    tiles = new Offset(xi, yi, order);
  }

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
  }

  let colorFuga = s.text(1660, 400, "Fuga").attr({
    "font-size": 80
  });
  colorFugaExample = s.circle(1950, 375, 70).attr({
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
  console.log(order);

  order.boxAmounts = Math.ceil(order.sqm / order.schemeBoxSqm);
  order.totalKgs = Math.ceil(order.boxAmounts * order.schemeBoxKg);

  orderHTML = orderHTML.innerHTML.replace(/\$\{(.+?)\}/g, (match, p1) => {
    return order[p1];
  });

  document.querySelector("#order-section").innerHTML = orderHTML;

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
