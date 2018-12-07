const size = 25;

// ORDER STRUCTURE
const resetOrder = order => {
  order.amountTiles = 0;
  order.amountTilesDot = 0;
  order.amountTilesSquare = 0;
  order.amountTilesRectangular = 0;
  order.amountTilesSquare4 = 0;
  order.amountTilesRectangular4 = 0;
  order.colors = order.colors;

  return order;
};

const getColors = (orderColors, e) => {
  let color1 = colors[orderColors[0]];
  let color2 = colors[orderColors[1]];
  let color3 = colors[orderColors[2]];

  if (!color2) {
    color2 = color1;
  }
  if (!color3) {
    color3 = color1;
  }

  let colorInv1 = color1;
  let colorInv2 = color2;
  let colorInv3 = color3;

  let shadedColor = shadeColor2(color1, 0.5);
  let normalGradient = `l(1,0,0,0)${color1}-${shadedColor}`;
  let inverseGradient = `l(1,0,0,0)${shadedColor}-${color1}`;

  if (e.order.schemeColorType === "GLAZE") {
    color1 = normalGradient;
    color2 = normalGradient;
    color3 = normalGradient;
    colorInv1 = inverseGradient;
    colorInv2 = inverseGradient;
    colorInv3 = inverseGradient;
  } else if (e.order.schemeColorType === "MIX_GLAZE") {
    if (e.order.scheme === "spiral") {
      color2 = normalGradient;
    } else if (e.order.scheme === "knit") {
      color3 = normalGradient;
    } else if (e.order.scheme === "plaid") {
      color2 = normalGradient;
      color3 = normalGradient;
      colorInv2 = inverseGradient;
      colorInv3 = inverseGradient;
    } else if (e.order.scheme === "offset") {
      color3 = normalGradient;
    }
  }

  return { color1, color2, color3, colorInv1, colorInv2, colorInv3 };
};

const calculateOrderUpdate = order => {
  order.sqm = (order.widthWithSfrido * order.heightWithSfrido) / 10000;

  order.amountTiles =
    order.amountTilesDot +
    order.amountTilesSquare +
    order.amountTilesSquare4 +
    order.amountTilesRectangular +
    order.amountTilesRectangular4;

  return order;
};

// SCHEMES CLASSES
class Spiral {
  constructor(x, y, order) {
    this.tiles = [];
    this.x = x;
    this.y = y;

    this.order = resetOrder(order);
  }

  update(order) {
    this.order.colors = order.colors;
    let tilesColors = getColors(this.order.colors, this);

    for (let i = 0; i < this.tiles.length; i++) {
      let key = this.tiles[i].colorType;
      this.tiles[i].fig.attr({ fill: tilesColors[key] });
    }
  }

  updateOrder() {
    this.order = resetOrder(order);
    this.countTiles();
    this.order = calculateOrderUpdate(this.order);
    return this.order;
  }

  draw(s) {
    let tilesColors = getColors(this.order.colors, this);
    let fuga = this.order.fuga;
    this.sizeX = this.order.width / 2.5;
    this.sizeY = this.order.height / 2.5;

    for (let i = 0; i < this.sizeY; i++) {
      for (let j = 0; j < this.sizeX; j++) {
        let req = j * 2 + i;
        let x = j * size + this.x + (fuga * j) / 4 + fuga / 2;
        let y = i * size + this.y + (fuga * i) / 4 + fuga / 2;

        if (x - this.x > this.order.width * 10 || x - this.x > 2000) {
          break;
        }
        if (y - this.y > this.order.height * 10 || y - this.y > 1000) {
          break;
        }

        if (this.order.schemeType === "SPIRAL") {
          if (j % 2 != 0) {
            continue;
          }

          if (req % 10 === 0) {
            this.tiles.push(new Rectangular(s, x, y, tilesColors["color1"], "color1", 6));
          } else if (req % 10 === 2) {
            this.tiles.push(new Square(s, x, y, tilesColors["color2"], "color2"));
          } else if (req % 10 === 6) {
            this.tiles.push(new Rectangular(s, x, y, tilesColors["color1"], "color1", 2));
          } else if (req % 10 === 8) {
            this.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv1"], "colorInv1", 8));
          } else if (req % 10 === 4) {
            this.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv1"], "colorInv1", 4));
          }
        } else if (this.order.schemeType === "SPIRAL_X4") {
          if (j % 4 != 0) {
            continue;
          }

          if (req % 20 === 0) {
            this.tiles.push(new Rectangularx4(s, x, y, tilesColors["color1"], "color1", 6));
          } else if (req % 20 === 4) {
            this.tiles.push(new Squarex4(s, x, y, tilesColors["color2"], "color2"));
          } else if (req % 20 === 12) {
            this.tiles.push(new Rectangularx4(s, x, y, tilesColors["color1"], "color1", 2));
          } else if (req % 20 === 16) {
            this.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv1"], "colorInv1", 8));
          } else if (req % 20 === 8) {
            this.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv1"], "colorInv1", 4));
          }
        }
      }
    }
  }

  countTiles() {
    this.order.widthWithSfrido = this.order.width * (1 + this.order.sfrido / 100);
    this.order.heightWithSfrido = this.order.width * (1 + this.order.sfrido / 100);

    this.sizeX = this.order.widthWithSfrido / 2.5;
    this.sizeY = this.order.heightWithSfrido / 2.5;
    let fuga = this.order.fuga;

    for (let i = 0; i < this.sizeY; i++) {
      for (let j = 0; j < this.sizeX; j++) {
        let req = j * 2 + i;
        let x = j * size + this.x + (fuga * j) / 4 + fuga / 2;
        let y = i * size + this.y + (fuga * i) / 4 + fuga / 2;

        if (this.order.schemeType === "SPIRAL") {
          if (j % 2 != 0) {
            continue;
          }

          if (req % 10 === 0) {
            this.order.amountTilesRectangular++;
          } else if (req % 10 === 2) {
            this.order.amountTilesSquare++;
          } else if (req % 10 === 6) {
            this.order.amountTilesRectangular++;
          } else if (req % 10 === 8) {
            if (i == 0) {
              this.order.amountTilesRectangular++;
            }
          } else if (req % 10 === 4) {
            if (j == 0) {
              this.order.amountTilesRectangular++;
            }
          }
        } else if (this.order.schemeType === "SPIRAL_X4") {
          if (j % 4 != 0) {
            continue;
          }

          if (req % 20 === 0) {
            this.order.amountTilesRectangular4++;
          } else if (req % 20 === 4) {
            this.order.amountTilesSquare4++;
          } else if (req % 20 === 12) {
            this.order.amountTilesRectangular4++;
          } else if (req % 20 === 16) {
            if (i == 0) {
              this.order.amountTilesRectangular4++;
            }
          } else if (req % 20 === 8) {
            if (j == 0) {
              this.order.amountTilesRectangular4++;
            }
          }
        }
      }
    }
  }
}

class Knit {
  constructor(x, y, order) {
    this.tiles = [];
    this.x = x;
    this.y = y;

    this.order = resetOrder(order);
  }

  update(order) {
    this.order.colors = order.colors;
    let tilesColors = getColors(this.order.colors, this);
    for (let i = 0; i < this.tiles.length; i++) {
      let id = this.tiles[i].colorType;
      this.tiles[i].fig.attr({ fill: tilesColors[id] });
    }
  }

  updateOrder() {
    this.order = resetOrder(order);
    this.countTiles();
    this.order = calculateOrderUpdate(this.order);
    return this.order;
  }

  draw(s) {
    let tilesColors = getColors(this.order.colors, this);
    let fuga = this.order.fuga;
    this.sizeX = this.order.width / 2.5;
    this.sizeY = this.order.height / 2.5;

    for (let i = 0; i < this.sizeY; i++) {
      for (let j = 0; j < this.sizeX; j++) {
        let req = j;
        let x = j * size + (j * fuga) / 4 + fuga / 2 + this.x;
        let y = i * size + (i * fuga) / 4 + fuga / 2 + this.y;

        if (x - this.x > this.order.width * 10 || x - this.x > 2000) {
          break;
        }
        if (y - this.y > this.order.height * 10 || y - this.y > 1000) {
          break;
        }

        if (this.order.schemeType === "KNIT") {
          if (j % 2 != 0) {
            continue;
          }

          if (i % 4 === 0) {
            if (req % 6 === 0) {
              this.tiles.push(new Rectangular(s, x, y, tilesColors["color1"], "color1", 6));
            } else if (req % 6 === 2) {
              this.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv1"], "colorInv1", 4));
            } else if (req % 6 === 4) {
              this.tiles.push(new Square(s, x, y, tilesColors["color2"], "color2"));
            }
          } else if (i % 2 == 0) {
            if (req % 6 === 0) {
              this.tiles.push(new Rectangular(s, x, y, tilesColors["color2"], "color2", 6));
            } else if (req % 6 === 2) {
              this.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv2"], "colorInv2", 4));
            } else if (req % 6 === 4) {
              this.tiles.push(new Square(s, x, y, tilesColors["color3"], "color3"));
            }
          }
        } else if (this.order.schemeType === "KNIT_X4") {
          if (j % 4 != 0) {
            continue;
          }

          if (i % 8 === 0) {
            if (req % 12 === 0) {
              this.tiles.push(new Rectangularx4(s, x, y, tilesColors["color1"], "color1", 6));
            } else if (req % 12 === 4) {
              this.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv1"], "colorInv1", 4));
            } else if (req % 12 === 8) {
              this.tiles.push(new Squarex4(s, x, y, tilesColors["color2"], "color2"));
            }
          } else if (i % 4 == 0) {
            if (req % 12 === 0) {
              this.tiles.push(new Rectangularx4(s, x, y, tilesColors["color2"], "color2", 6));
            } else if (req % 12 === 4) {
              this.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv2"], "colorInv2", 4));
            } else if (req % 12 === 8) {
              this.tiles.push(new Squarex4(s, x, y, tilesColors["color3"], "color3"));
            }
          }
        }
      }
    }
  }

  countTiles() {
    this.order.widthWithSfrido = this.order.width * (1 + this.order.sfrido / 100);
    this.order.heightWithSfrido = this.order.width * (1 + this.order.sfrido / 100);

    this.sizeX = this.order.widthWithSfrido / 2.5;
    this.sizeY = this.order.heightWithSfrido / 2.5;
    let fuga = this.order.fuga;

    for (let i = 0; i < this.sizeY; i++) {
      for (let j = 0; j < this.sizeX; j++) {
        let req = j;
        let x = j * size + (j * fuga) / 4 + fuga / 2 + this.x;
        let y = i * size + (i * fuga) / 4 + fuga / 2 + this.y;

        if (this.order.schemeType === "KNIT") {
          if (j % 2 != 0) {
            continue;
          }

          if (i % 4 === 0) {
            if (req % 6 === 0) {
              this.order.amountTilesRectangular++;
            } else if (req % 6 === 4) {
              this.order.amountTilesSquare++;
            }
          } else if (i % 2 == 0) {
            if (req % 6 === 0) {
              this.order.amountTilesRectangular++;
            } else if (req % 6 === 4) {
              this.order.amountTilesSquare++;
            }
          }
        } else if (this.order.schemeType === "KNIT_X4") {
          if (j % 4 != 0) {
            continue;
          }

          if (i % 8 === 0) {
            if (req % 12 === 0) {
              this.order.amountTilesRectangular4++;
            } else if (req % 12 === 8) {
              this.order.amountTilesSquare4++;
            }
          } else if (i % 4 == 0) {
            if (req % 12 === 0) {
              this.order.amountTilesRectangular4++;
            } else if (req % 12 === 8) {
              this.order.amountTilesSquare4++;
            }
          }
        }
      }
    }
  }
}

class Plaid {
  constructor(x, y, order) {
    this.tiles = [];
    this.x = x;
    this.y = y;

    this.order = resetOrder(order);
  }

  update(order) {
    this.order.colors = order.colors;
    let tilesColors = getColors(this.order.colors, this);
    for (let i = 0; i < this.tiles.length; i++) {
      let id = this.tiles[i].colorType;
      this.tiles[i].fig.attr({ fill: tilesColors[id] });
    }
  }

  updateOrder() {
    this.order = resetOrder(order);
    this.countTiles();
    this.order = calculateOrderUpdate(this.order);
    return this.order;
  }

  draw(s) {
    let tilesColors = getColors(this.order.colors, this);
    let fuga = this.order.fuga;
    this.sizeX = this.order.width / 2.5;
    this.sizeY = this.order.height / 2.5;

    for (let i = 0; i < this.sizeY; i++) {
      for (let j = 0; j < this.sizeX; j++) {
        let req = j;
        let x = j * size + (j * fuga) / 4 + fuga / 2 + this.x;
        let y = i * size + (i * fuga) / 4 + fuga / 2 + this.y;

        if (x - this.x > this.order.width * 10 || x - this.x > 2000) {
          break;
        }
        if (y - this.y > this.order.height * 10 || y - this.y > 1000) {
          break;
        }

        if (this.order.schemeType === "PLAID") {
          if (j % 2 != 0) {
            continue;
          }

          if (i % 6 === 0) {
            if (req % 6 === 0) {
              this.tiles.push(new Square(s, x, y, tilesColors["color1"], "color1"));
            } else if (req % 6 === 2) {
              this.tiles.push(new Rectangular(s, x, y, tilesColors["color2"], "color2", 6));
            } else if (req % 6 === 4) {
              this.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv2"], "colorInv2", 4));
            }
          } else if (i % 6 === 2) {
            if (req % 6 === 0) {
              this.tiles.push(new Rectangular(s, x, y, tilesColors["color3"], "color3", 2));
            } else if (req % 6 === 2) {
              this.tiles.push(new Square(s, x, y, tilesColors["color1"], "color1"));
            } else if (req % 6 === 4) {
              this.tiles.push(new Square(s, x, y, tilesColors["color1"], "color1"));
            }
          } else if (i % 6 === 4) {
            if (req % 6 === 0) {
              this.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv3"], "colorInv3", 8));
            } else if (req % 6 === 2) {
              this.tiles.push(new Square(s, x, y, tilesColors["color1"], "color1"));
            } else if (req % 6 === 4) {
              this.tiles.push(new Square(s, x, y, tilesColors["color1"], "color1"));
            }
          }
        } else if (this.order.schemeType === "PLAID_X4") {
          if (j % 4 != 0) {
            continue;
          }

          if (i % 12 === 0) {
            if (req % 12 === 0) {
              this.tiles.push(new Squarex4(s, x, y, tilesColors["color1"], "color1"));
            } else if (req % 12 === 4) {
              this.tiles.push(new Rectangularx4(s, x, y, tilesColors["color2"], "color2", 6));
            } else if (req % 12 === 8) {
              this.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv2"], "colorInv2", 4));
            }
          } else if (i % 12 === 4) {
            if (req % 12 === 0) {
              this.tiles.push(new Rectangularx4(s, x, y, tilesColors["color3"], "color3", 2));
            } else if (req % 12 === 4) {
              this.tiles.push(new Squarex4(s, x, y, tilesColors["color1"], "color1"));
            } else if (req % 12 === 8) {
              this.tiles.push(new Squarex4(s, x, y, tilesColors["color1"], "color1"));
            }
          } else if (i % 12 === 8) {
            if (req % 12 === 0) {
              this.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv3"], "colorInv3", 8));
            } else if (req % 12 === 4) {
              this.tiles.push(new Squarex4(s, x, y, tilesColors["color1"], "color1"));
            } else if (req % 12 === 8) {
              this.tiles.push(new Squarex4(s, x, y, tilesColors["color1"], "color1"));
            }
          }
        }
      }
    }
  }

  countTiles() {
    this.order.widthWithSfrido = this.order.width * (1 + this.order.sfrido / 100);
    this.order.heightWithSfrido = this.order.width * (1 + this.order.sfrido / 100);

    this.sizeX = this.order.widthWithSfrido / 2.5;
    this.sizeY = this.order.heightWithSfrido / 2.5;
    let fuga = this.order.fuga;

    for (let i = 0; i < this.sizeY; i++) {
      for (let j = 0; j < this.sizeX; j++) {
        let req = j;
        let x = j * size + (j * fuga) / 4 + fuga / 2 + this.x;
        let y = i * size + (i * fuga) / 4 + fuga / 2 + this.y;

        if (this.order.schemeType === "PLAID") {
          if (j % 2 != 0) {
            continue;
          }

          if (i % 6 === 0) {
            if (req % 6 === 0) {
              this.order.amountTilesSquare++;
            } else if (req % 6 === 2) {
              this.order.amountTilesRectangular++;
            }
          } else if (i % 6 === 2) {
            if (req % 6 === 0) {
              this.order.amountTilesRectangular++;
            } else if (req % 6 === 2) {
              this.order.amountTilesSquare++;
            } else if (req % 6 === 4) {
              this.order.amountTilesSquare++;
            }
          } else if (i % 6 === 4) {
            if (req % 6 === 2) {
              this.order.amountTilesSquare++;
            } else if (req % 6 === 4) {
              this.order.amountTilesSquare++;
            }
          }
        } else if (this.order.schemeType === "PLAID_X4") {
          if (j % 4 != 0) {
            continue;
          }

          if (i % 12 === 0) {
            if (req % 12 === 0) {
              this.order.amountTilesSquare4++;
            } else if (req % 12 === 4) {
              this.order.amountTilesRectangular4++;
            }
          } else if (i % 12 === 4) {
            if (req % 12 === 0) {
              this.order.amountTilesRectangular4++;
            } else if (req % 12 === 4) {
              this.order.amountTilesSquare4++;
            } else if (req % 12 === 8) {
              this.order.amountTilesSquare4++;
            }
          } else if (i % 12 === 8) {
            if (req % 12 === 4) {
              this.order.amountTilesSquare4++;
            } else if (req % 12 === 8) {
              this.order.amountTilesSquare4++;
            }
          }
        }
      }
    }
  }
}

class Offset {
  constructor(x, y, order) {
    this.tiles = [];
    this.x = x;
    this.y = y;

    this.order = resetOrder(order);
  }

  update(order) {
    this.order.colors = order.colors;
    let tilesColors = getColors(this.order.colors, this);
    for (let i = 0; i < this.tiles.length; i++) {
      let id = this.tiles[i].colorType;
      this.tiles[i].fig.attr({ fill: tilesColors[id] });
    }
  }

  updateOrder() {
    this.order = resetOrder(order);
    this.countTiles();
    this.order = calculateOrderUpdate(this.order);
    return this.order;
  }

  draw(s) {
    let tilesColors = getColors(this.order.colors, this);
    let fuga = this.order.fuga;
    this.sizeX = this.order.width / 2.5;
    this.sizeY = this.order.height / 2.5;

    for (let i = 0; i < this.sizeY; i++) {
      for (let j = 0; j < this.sizeX; j++) {
        let x = j * size + (j * fuga) / 4 + fuga / 2 + this.x;
        let y = i * size + (i * fuga) / 4 + fuga / 2 + this.y;

        if (x - this.x > this.order.width * 10 || x - this.x > 2000) {
          break;
        }
        if (y - this.y > this.order.height * 10 || y - this.y > 1000) {
          break;
        }

        if (this.order.schemeType === "OFFSET") {
          let req = j + Math.floor(i / 2) * 3;

          if (i % 2 === 0) {
            if (req % 7 === 0) {
              this.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv1"], "colorInv1", 2));
            } else if (req % 7 === 2) {
              this.tiles.push(new Dot(s, x, y, tilesColors["color2"], "color2"));
            } else if (req % 7 === 3) {
              this.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv1"], "colorInv1", 8));
            } else if (req % 7 === 5) {
              this.tiles.push(new Square(s, x, y, tilesColors["color1"], "color1"));
            }
          } else {
            if (req % 7 === 2) {
              this.tiles.push(new Dot(s, x, y, tilesColors["color3"], "color3"));
            }
          }
        } else if (this.order.schemeType === "OFFSET_X4") {
          let req = j + Math.floor(i / 4) * 6;

          if (i % 4 === 0) {
            if (req % 14 === 0) {
              this.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv1"], "colorInv1", 2));
            } else if (req % 14 === 4) {
              this.tiles.push(new Square(s, x, y, tilesColors["color2"], "color2"));
            } else if (req % 14 === 6) {
              this.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv1"], "colorInv1", 8));
            } else if (req % 14 === 10) {
              this.tiles.push(new Squarex4(s, x, y, tilesColors["color1"], "color1"));
            }
          } else if (i % 4 === 2) {
            if (req % 14 === 4) {
              this.tiles.push(new Square(s, x, y, tilesColors["color3"], "color3"));
            }
          }
        }
      }
    }
  }

  countTiles() {
    this.order.widthWithSfrido = this.order.width * (1 + this.order.sfrido / 100);
    this.order.heightWithSfrido = this.order.width * (1 + this.order.sfrido / 100);

    this.sizeX = this.order.widthWithSfrido / 2.5;
    this.sizeY = this.order.heightWithSfrido / 2.5;
    let fuga = this.order.fuga;

    for (let i = 0; i < this.sizeY; i++) {
      for (let j = 0; j < this.sizeX; j++) {
        let x = j * size + (j * fuga) / 4 + fuga / 2 + this.x;
        let y = i * size + (i * fuga) / 4 + fuga / 2 + this.y;

        if (this.order.schemeType === "OFFSET") {
          let req = j + Math.floor(i / 2) * 3;

          if (i % 2 === 0) {
            if (req % 7 === 0) {
              this.order.amountTilesRectangular++;
            } else if (req % 7 === 2) {
              this.order.amountTilesDot++;
            } else if (req % 7 === 3) {
              this.order.amountTilesRectangular++;
            } else if (req % 7 === 5) {
              this.order.amountTilesSquare++;
            }
          } else {
            if (req % 7 === 2) {
              this.order.amountTilesDot++;
            }
          }
        } else if (this.order.schemeType === "OFFSET_X4") {
          let req = j + Math.floor(i / 4) * 6;

          if (i % 4 === 0) {
            if (req % 14 === 0) {
              this.order.amountTilesRectangular4++;
            } else if (req % 14 === 4) {
              this.order.amountTilesSquare++;
            } else if (req % 14 === 6) {
              this.order.amountTilesRectangular4++;
            } else if (req % 14 === 10) {
              this.order.amountTilesSquare4++;
            }
          } else if (i % 4 === 2) {
            if (req % 14 === 4) {
              this.order.amountTilesSquare++;
            }
          }
        }
      }
    }
  }
}

//
//  TILES CLASSES
//

//  Dot
//  2.5cm * 2.5cm
class Dot {
  constructor(s, x, y, color, colorType) {
    this.fig = s.rect(x, y, size, size);
    this.colorType = colorType;

    this.fig.attr({
      fill: color
    });
  }
}

//  Square
//  5cm * 5cm
class Square {
  constructor(s, x, y, color, colorType) {
    this.fig = s.rect(x, y, size * 2, size * 2);
    this.colorType = colorType;

    this.fig.attr({
      fill: color
    });
  }
}

// Rectangular
// 10cm * 5cm
class Rectangular {
  constructor(s, x, y, color, colorType, r, t) {
    this.fig = s.rect(x, y, size * 4, size * 2);
    this.colorType = colorType;

    this.fig.attr({
      fill: color
    });

    if (r || t) {
      transform(r, t, this.fig, size);
    }
  }
}

// Square x4
// 10cm * 10cm
class Squarex4 {
  constructor(s, x, y, color, colorType) {
    this.fig = s.rect(x, y, size * 4, size * 4);
    this.colorType = colorType;

    this.fig.attr({
      fill: color
    });
  }
}

// Rectangular x4
// 20cm * 10cm
class Rectangularx4 {
  constructor(s, x, y, color, colorType, r, t) {
    this.fig = s.rect(x, y, size * 8, size * 4);
    this.colorType = colorType;

    this.fig.attr({
      fill: color
    });

    if (r || t) {
      transform(r, t, this.fig, size * 2);
    }
  }
}

// UTILS FUNCTIONS
function transform(r, t, e, center) {
  let box = e.getBBox();
  let x = (box.x2 + box.x) / 2 - center;
  let y = (box.y2 + box.y) / 2;
  let query = "";

  if (t) {
    if (r == 2) {
      if (t == 2) {
        query += `t0,${box.height / 2}`;
      } else if (t == 8) {
        query += `t0,${-box.height / 2}`;
      } else if (t == 4) {
        query += `t${-box.height / 2},0`;
      }
    }
  }

  if (r) {
    if (r == 2) {
      query += `r90,${x},${y}`;
    } else if (r == 8) {
      query += `r270,${x},${y}`;
    } else if (r == 4) {
      query += `r180,${x},${y}`;
    }
  }

  e.transform(query);
}

function shadeColor2(color, percent) {
  var f = parseInt(color.slice(1), 16),
    t = percent < 0 ? 0 : 255,
    p = percent < 0 ? percent * -1 : percent,
    R = f >> 16,
    G = (f >> 8) & 0x00ff,
    B = f & 0x0000ff;
  return (
    "#" +
    (
      0x1000000 +
      (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)
    )
      .toString(16)
      .slice(1)
  );
}
