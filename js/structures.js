const size = 25;

// TILEMAP CLASS

class TileMap {
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
    this.order = calculateOrderUpdate(this.order);
    return this.order;
  }

  draw(s) {
    let tilesColors = getColors(this.order.colors, this);

    this.order.widthWithSfrido = this.order.width * (1 + this.order.sfrido / 100);
    this.order.heightWithSfrido = this.order.height * (1 + this.order.sfrido / 100);

    this.sizeX = this.order.widthWithSfrido / 2.5;
    this.sizeY = this.order.heightWithSfrido / 2.5;

    let drawLayout;
    if (this.order.scheme === "spiral") {
      drawLayout = drawSpiralLayout;
    } else if (this.order.scheme === "knit") {
      drawLayout = drawKnitLayout;
    } else if (this.order.scheme === "plaid") {
      drawLayout = drawPlaidLayout;
    } else if (this.order.scheme === "offset") {
      drawLayout = drawOffsetLayout;
    } else if (this.order.scheme === "subway") {
      drawLayout = drawSubwayLayout;
    } else if (this.order.scheme === "old") {
      drawLayout = drawOldLayout;
    } else if (this.order.scheme === "basket") {
      drawLayout = drawBasketLayout;
    } else if (this.order.scheme === "oddfellow") {
      drawLayout = drawOddfellowLayout;
    } else if (this.order.scheme === "rough") {
      drawLayout = drawRoughLayout;
    }

    for (let i = 0; i < this.sizeY; i++) {
      for (let j = 0; j < this.sizeX; j++) {
        let canDrawTiles = true;
        let x = j * size + (j * this.order.fuga) / 4 + this.order.fuga / 2 + this.x;
        let y = i * size + (i * this.order.fuga) / 4 + this.order.fuga / 2 + this.y;

        if (x - this.x > this.order.width * 10 || x - this.x > 2000) {
          canDrawTiles = false;
        }
        if (y - this.y > this.order.height * 10 || y - this.y > 1000) {
          canDrawTiles = false;
        }

        drawLayout(this, tilesColors, i, j, s, x, y, canDrawTiles);
      }
    }
  }
}

// DRAW SCHEMES FUNCTIONS
const drawSpiralLayout = (tileMap, tilesColors, i, j, s, x, y, canDrawTiles) => {
  let req = j * 2 + i;

  if (tileMap.order.schemeType === "SPIRAL") {
    if (j % 2 != 0) {
      return;
    }

    if (req % 10 === 0) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["color1"], "color1", 6));
      }

      tileMap.order.amountTilesRectangular++;
    } else if (req % 10 === 2) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Square(s, x, y, tilesColors["color2"], "color2"));
      }

      tileMap.order.amountTilesSquare++;
    } else if (req % 10 === 6) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["color1"], "color1", 2));
      }

      tileMap.order.amountTilesRectangular++;
    } else if (req % 10 === 8) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv1"], "colorInv1", 8));
      }

      if (i == 0) {
        tileMap.order.amountTilesRectangular++;
      }
    } else if (req % 10 === 4) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv1"], "colorInv1", 4));
      }

      if (j == 0) {
        tileMap.order.amountTilesRectangular++;
      }
    }
  } else if (tileMap.order.schemeType === "SPIRAL_X4") {
    if (j % 4 != 0) {
      return;
    }

    if (req % 20 === 0) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["color1"], "color1", 6));
      }

      tileMap.order.amountTilesRectangular4++;
    } else if (req % 20 === 4) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Squarex4(s, x, y, tilesColors["color2"], "color2"));
      }

      tileMap.order.amountTilesSquare4++;
    } else if (req % 20 === 12) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["color1"], "color1", 2));
      }

      tileMap.order.amountTilesRectangular4++;
    } else if (req % 20 === 16) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv1"], "colorInv1", 8));
      }

      if (i == 0) {
        tileMap.order.amountTilesRectangular4++;
      }
    } else if (req % 20 === 8) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv1"], "colorInv1", 4));
      }

      if (j == 0) {
        tileMap.order.amountTilesRectangular4++;
      }
    }
  }
};

const drawKnitLayout = (tileMap, tilesColors, i, j, s, x, y, canDrawTiles) => {
  let req = j;

  if (tileMap.order.schemeType === "KNIT") {
    if (j % 2 != 0) {
      return;
    }

    if (i % 4 === 0) {
      if (req % 6 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["color1"], "color1", 6));
        }

        tileMap.order.amountTilesRectangular++;
      } else if (req % 6 === 2) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv1"], "colorInv1", 4));
        }
      } else if (req % 6 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Square(s, x, y, tilesColors["color2"], "color2"));
        }

        tileMap.order.amountTilesSquare++;
      }
    } else if (i % 2 == 0) {
      if (req % 6 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["color2"], "color2", 6));
        }

        tileMap.order.amountTilesRectangular++;
      } else if (req % 6 === 2) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv2"], "colorInv2", 4));
        }
      } else if (req % 6 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Square(s, x, y, tilesColors["color3"], "color3"));
        }

        tileMap.order.amountTilesSquare++;
      }
    }
  } else if (tileMap.order.schemeType === "KNIT_X4") {
    if (j % 4 != 0) {
      return;
    }

    if (i % 8 === 0) {
      if (req % 12 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["color1"], "color1", 6));
        }

        tileMap.order.amountTilesRectangular4++;
      } else if (req % 12 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv1"], "colorInv1", 4));
        }
      } else if (req % 12 === 8) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Squarex4(s, x, y, tilesColors["color2"], "color2"));
        }

        tileMap.order.amountTilesSquare4++;
      }
    } else if (i % 4 == 0) {
      if (req % 12 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["color2"], "color2", 6));
        }

        tileMap.order.amountTilesRectangular4++;
      } else if (req % 12 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv2"], "colorInv2", 4));
        }
      } else if (req % 12 === 8) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Squarex4(s, x, y, tilesColors["color3"], "color3"));
        }

        tileMap.order.amountTilesSquare4++;
      }
    }
  }
};

const drawPlaidLayout = (tileMap, tilesColors, i, j, s, x, y, canDrawTiles) => {
  let req = j;

  if (tileMap.order.schemeType === "PLAID") {
    if (j % 2 != 0) {
      return;
    }

    if (i % 6 === 0) {
      if (req % 6 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Square(s, x, y, tilesColors["color1"], "color1"));
        }

        tileMap.order.amountTilesSquare++;
      } else if (req % 6 === 2) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["color2"], "color2", 6));
        }

        tileMap.order.amountTilesRectangular++;
      } else if (req % 6 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv2"], "colorInv2", 4));
        }
      }
    } else if (i % 6 === 2) {
      if (req % 6 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["color3"], "color3", 2));
        }

        tileMap.order.amountTilesRectangular++;
      } else if (req % 6 === 2) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Square(s, x, y, tilesColors["color1"], "color1"));
        }

        tileMap.order.amountTilesSquare++;
      } else if (req % 6 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Square(s, x, y, tilesColors["color1"], "color1"));
        }

        tileMap.order.amountTilesSquare++;
      }
    } else if (i % 6 === 4) {
      if (req % 6 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv3"], "colorInv3", 8));
        }
      } else if (req % 6 === 2) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Square(s, x, y, tilesColors["color1"], "color1"));
        }

        tileMap.order.amountTilesSquare++;
      } else if (req % 6 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Square(s, x, y, tilesColors["color1"], "color1"));
        }

        tileMap.order.amountTilesSquare++;
      }
    }
  } else if (tileMap.order.schemeType === "PLAID_X4") {
    if (j % 4 != 0) {
      return;
    }

    if (i % 12 === 0) {
      if (req % 12 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Squarex4(s, x, y, tilesColors["color1"], "color1"));
        }

        tileMap.order.amountTilesSquare4++;
      } else if (req % 12 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["color2"], "color2", 6));
        }

        tileMap.order.amountTilesRectangular4++;
      } else if (req % 12 === 8) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv2"], "colorInv2", 4));
        }
      }
    } else if (i % 12 === 4) {
      if (req % 12 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["color3"], "color3", 2));
        }

        tileMap.order.amountTilesRectangular4++;
      } else if (req % 12 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Squarex4(s, x, y, tilesColors["color1"], "color1"));
        }

        tileMap.order.amountTilesSquare4++;
      } else if (req % 12 === 8) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Squarex4(s, x, y, tilesColors["color1"], "color1"));
        }

        tileMap.order.amountTilesSquare4++;
      }
    } else if (i % 12 === 8) {
      if (req % 12 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv3"], "colorInv3", 8));
        }
      } else if (req % 12 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Squarex4(s, x, y, tilesColors["color1"], "color1"));
        }

        tileMap.order.amountTilesSquare4++;
      } else if (req % 12 === 8) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Squarex4(s, x, y, tilesColors["color1"], "color1"));
        }

        tileMap.order.amountTilesSquare4++;
      }
    }
  }
};

const drawOffsetLayout = (tileMap, tilesColors, i, j, s, x, y, canDrawTiles) => {
  if (tileMap.order.schemeType === "OFFSET") {
    let req = j + Math.floor(i / 2) * 3;

    if (i % 2 === 0) {
      if (req % 7 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv1"], "colorInv1", 2));
        }

        tileMap.order.amountTilesRectangular++;
      } else if (req % 7 === 2) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Dot(s, x, y, tilesColors["color2"], "color2"));
        }

        tileMap.order.amountTilesDot++;
      } else if (req % 7 === 3) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv1"], "colorInv1", 8));
        }

        tileMap.order.amountTilesRectangular++;
      } else if (req % 7 === 5) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Square(s, x, y, tilesColors["color1"], "color1"));
        }

        tileMap.order.amountTilesSquare++;
      }
    } else {
      if (req % 7 === 2) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Dot(s, x, y, tilesColors["color3"], "color3"));
        }

        tileMap.order.amountTilesDot++;
      }
    }
  } else if (tileMap.order.schemeType === "OFFSET_X4") {
    let req = j + Math.floor(i / 4) * 6;

    if (i % 4 === 0) {
      if (req % 14 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv1"], "colorInv1", 2));
        }

        tileMap.order.amountTilesRectangular4++;
      } else if (req % 14 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Square(s, x, y, tilesColors["color2"], "color2"));
        }

        tileMap.order.amountTilesSquare++;
      } else if (req % 14 === 6) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv1"], "colorInv1", 8));
        }

        tileMap.order.amountTilesRectangular4++;
      } else if (req % 14 === 10) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Squarex4(s, x, y, tilesColors["color1"], "color1"));
        }

        tileMap.order.amountTilesSquare4++;
      }
    } else if (i % 4 === 2) {
      if (req % 14 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Square(s, x, y, tilesColors["color3"], "color3"));
        }

        tileMap.order.amountTilesSquare++;
      }
    }
  }
};

const drawSubwayLayout = (tileMap, tilesColors, i, j, s, x, y, canDrawTiles) => {
  let req = j + 1 * i;

  if (tileMap.order.schemeType === "SUBWAY") {
    if (i % 2 === 1) {
      return;
    }

    if (req % 12 === 0) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["color1"], "color1", 6));
      }

      tileMap.order.amountTilesRectangular++;
    } else if (req % 12 === 4) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["color2"], "color2", 6));
      }

      tileMap.order.amountTilesRectangular++;
    } else if (req % 12 === 8) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["color3"], "color3", 6));
      }

      tileMap.order.amountTilesRectangular++;
    }

    if (j === 0) {
      if (req % 12 === 2) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv1"], "colorInv1", 4));
        }

        tileMap.order.amountTilesRectangular++;
      } else if (req % 12 === 6) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv2"], "colorInv2", 4));
        }

        tileMap.order.amountTilesRectangular++;
      } else if (req % 12 === 10) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv3"], "colorInv3", 4));
        }

        tileMap.order.amountTilesRectangular++;
      }
    }
  }
};

const drawOldLayout = (tileMap, tilesColors, i, j, s, x, y, canDrawTiles) => {
  let req = j + i * 4;

  if (tileMap.order.schemeType === "OLD") {
    if (i === 0) {
      if (req % 9 === 5) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y - size, tilesColors["color1"], "color1"));
        }

        tileMap.order.amountTilesRectangular++;
      }
    }
    if (j === 0) {
      if (req % 9 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(
            new Rectangular(s, x - size, y, tilesColors["colorInv1"], "colorInv1", 4)
          );
        }

        tileMap.order.amountTilesRectangular++;
      }
    }

    if (req % 9 === 0) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Dot(s, x, y, tilesColors["color2"], "color2"));
      }

      tileMap.order.amountTilesDot++;
    } else if (req % 9 === 1) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["color1"], "color1"));
      }

      tileMap.order.amountTilesRectangular++;
    } else if (req % 9 === 3) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv1"], "colorInv1", 4));
      }

      if (j === 0 || j === 1) {
        tileMap.order.amountTilesRectangular++;
      }
    }
  } else if (tileMap.order.schemeType === "OLD_X4") {
    if (i % 2 === 1) {
      return;
    }

    if (i === 0) {
      if (req % 18 === 10) {
        if (canDrawTiles) {
          tileMap.tiles.push(
            new Rectangularx4(s, x, y - size * 2, tilesColors["color1"], "color1")
          );
        }

        tileMap.order.amountTilesRectangular4++;
      }
    }
    if (j === 0) {
      if (req % 18 === 8) {
        if (canDrawTiles) {
          tileMap.tiles.push(
            new Rectangularx4(s, x - size * 2, y, tilesColors["colorInv1"], "colorInv1", 4)
          );
        }

        tileMap.order.amountTilesRectangular4++;
      }
    }

    if (req % 18 === 0) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Square(s, x, y, tilesColors["color2"], "color2"));
      }

      tileMap.order.amountTilesSquare++;
    } else if (req % 18 === 2) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["color1"], "color1"));
      }
      tileMap.order.amountTilesRectangular4++;
    } else if (req % 18 === 6) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv1"], "colorInv1", 4));
      }

      if (j === 0 || j === 2) {
        tileMap.order.amountTilesRectangular4++;
      }
    }
  }
};

const drawBasketLayout = (tileMap, tilesColors, i, j, s, x, y, canDrawTiles) => {
  if (tileMap.order.schemeType === "BASKET") {
    let req = j + 4 * Math.floor(i / 4);

    if (i % 4 === 0) {
      if (req % 8 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(
            new Rectangular(s, x, y, tilesColors["colorSpecial1"], "colorSpecial1", 2)
          );
        }

        tileMap.order.amountTilesRectangular++;
      } else if (req % 8 === 2) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["color2"], "color2", 2));
        }

        tileMap.order.amountTilesRectangular++;
      } else if (req % 8 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["color1"], "color1", 6));
        }

        tileMap.order.amountTilesRectangular++;
      } else if (req % 8 === 6) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv1"], "colorInv1", 4));
        }
      }
    } else if (i % 4 === 2) {
      if (req % 8 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(
            new Rectangular(s, x, y, tilesColors["colorSpecialInv1"], "colorSpecialInv1", 8)
          );
        }
      } else if (req % 8 === 2) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv2"], "colorInv2", 8));
        }
      } else if (req % 8 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(
            new Rectangular(s, x, y, tilesColors["colorSpecial3"], "colorSpecial3", 6)
          );
        }

        tileMap.order.amountTilesRectangular++;
      } else if (req % 8 === 6) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv3"], "colorInv3", 4));
        }
      }
    }
  } else if (tileMap.order.schemeType === "BASKET_X4") {
    let req = j + 8 * Math.floor(i / 8);

    if (i % 8 === 0) {
      if (req % 16 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(
            new Rectangularx4(s, x, y, tilesColors["colorSpecial1"], "colorSpecial1", 2)
          );
        }

        tileMap.order.amountTilesRectangular4++;
      } else if (req % 16 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["color2"], "color2", 2));
        }

        tileMap.order.amountTilesRectangular4++;
      } else if (req % 16 === 8) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["color1"], "color1", 6));
        }

        tileMap.order.amountTilesRectangular4++;
      } else if (req % 16 === 12) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv1"], "colorInv1", 4));
        }
      }
    } else if (i % 8 === 4) {
      if (req % 16 === 0) {
        if (canDrawTiles) {
          tileMap.tiles.push(
            new Rectangularx4(s, x, y, tilesColors["colorSpecialInv1"], "colorSpecialInv1", 8)
          );
        }
      } else if (req % 16 === 4) {
        if (canDrawTiles) {
          tileMap.tiles.push(new Rectangularx4(s, x, y, tilesColors["colorInv2"], "colorInv2", 8));
        }
      } else if (req % 16 === 8) {
        if (canDrawTiles) {
          tileMap.tiles.push(
            new Rectangularx4(s, x, y, tilesColors["colorSpecial3"], "colorSpecial3", 6)
          );
        }

        tileMap.order.amountTilesRectangular4++;
      } else if (req % 16 === 12) {
        if (canDrawTiles) {
          tileMap.tiles.push(
            new Rectangularx4(s, x, y, tilesColors["colorSpecialInv3"], "colorSpecialInv3", 4)
          );
        }
      }
    }
  }
};

const drawOddfellowLayout = (tileMap, tilesColors, i, j, s, x, y, canDrawTiles) => {
  if (tileMap.order.schemeType === "ODDFELLOW") {
    let req = j + 2 * i;

    if (i === 0) {
      if (req % 5 === 2) {
        if (canDrawTiles) {
          if ((j - 1) % 2 === 0) {
            tileMap.tiles.push(new Square(s, x, y - size, tilesColors["color2"], "color2"));
          } else {
            tileMap.tiles.push(new Square(s, x, y - size, tilesColors["color3"], "color3"));
          }
        }

        tileMap.order.amountTilesSquare++;
      }
    }
    if (j === 0 && i !== 0) {
      if (i % 5 === 3) {
        if (canDrawTiles) {
          if ((i - 1) % 2 === 0) {
            tileMap.tiles.push(new Square(s, x, y - size, tilesColors["color2"], "color2"));
          } else {
            tileMap.tiles.push(new Square(s, x, y - size, tilesColors["color3"], "color3"));
          }
        }

        tileMap.order.amountTilesSquare++;
      }
    }

    if (req % 5 === 0) {
      if (canDrawTiles) {
        if ((j + i) % 2 === 0) {
          tileMap.tiles.push(new Square(s, x, y, tilesColors["color2"], "color2"));
        } else {
          tileMap.tiles.push(new Square(s, x, y, tilesColors["color3"], "color3"));
        }
      }

      tileMap.order.amountTilesSquare++;
    } else if (req % 5 === 4) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Dot(s, x, y, tilesColors["color1"], "color1"));
      }

      tileMap.order.amountTilesDot++;
    }
  } else if (tileMap.order.schemeType === "ODDFELLOW_X4") {
    let req = j + 2 * i;

    if (i % 2 !== 0) {
      return;
    }

    if (i === 0) {
      if (req % 10 === 4) {
        if (canDrawTiles) {
          if ((j / 2 - 1) % 2 === 0) {
            tileMap.tiles.push(new Squarex4(s, x, y - size * 2, tilesColors["color2"], "color2"));
          } else {
            tileMap.tiles.push(new Squarex4(s, x, y - size * 2, tilesColors["color3"], "color3"));
          }
        }

        tileMap.order.amountTilesSquare4++;
      }
    }
    if (j === 0 && i !== 0) {
      if (i % 10 === 6) {
        if (canDrawTiles) {
          if ((i / 2 - 1) % 2 === 0) {
            tileMap.tiles.push(new Squarex4(s, x - size * 2, y, tilesColors["color2"], "color2"));
          } else {
            tileMap.tiles.push(new Squarex4(s, x - size * 2, y, tilesColors["color3"], "color3"));
          }
        }

        tileMap.order.amountTilesSquare4++;
      }
    }

    if (req % 10 === 0) {
      if (canDrawTiles) {
        if ((j + i) % 4 === 0) {
          tileMap.tiles.push(new Squarex4(s, x, y, tilesColors["color2"], "color2"));
        } else if ((j + i) % 4 === 2) {
          tileMap.tiles.push(new Squarex4(s, x, y, tilesColors["color3"], "color3"));
        }
      }

      tileMap.order.amountTilesSquare4++;
    } else if (req % 10 === 8) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Square(s, x, y, tilesColors["color1"], "color1"));
      }

      tileMap.order.amountTilesSquare++;
    }
  }
};

const drawRoughLayout = (tileMap, tilesColors, i, j, s, x, y, canDrawTiles) => {
  let req = j;

  if (i % 6 === 0) {
    if ((req + 1) % 4 === 0) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["color1"], "color1"));
      }

      tileMap.order.amountTilesRectangular++;
    } else if ((req + 1) % 4 === 2) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv1"], "colorInv1", 4));
      }

      if (j === 1) {
        tileMap.order.amountTilesRectangular++;
      }
    }
  } else if (i % 6 === 2) {
    if (req % 4 === 0) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["color1"], "color1", 2));
      }

      tileMap.order.amountTilesRectangular++;
    } else if (req % 4 === 2) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["color2"], "color2", 2));
      }

      tileMap.order.amountTilesRectangular++;
    }
  } else if (i % 6 === 4) {
    if (req % 4 === 0) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv1"], "colorInv1", 8));
      }
    } else if (req % 4 === 2) {
      if (canDrawTiles) {
        tileMap.tiles.push(new Rectangular(s, x, y, tilesColors["colorInv2"], "colorInv2", 8));
      }
    }
  }
};

const drawDoubleLayout = (tileMap, tilesColors, i, j, s, x, y, canDrawTiles) => {
  let req = j;

  if (req % 12 === 0) {
    if (canDrawTiles) {
    }
  }
};

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

  let colorSpecial1 = color1;
  let colorSpecial2 = color2;
  let colorSpecial3 = color3;
  let colorSpecialInv1 = color1;
  let colorSpecialInv2 = color2;
  let colorSpecialInv3 = color3;

  let shadedColor = shadeColor2(color1, 0.5);
  let normalGradient = `l(1,0,0,0)${color1}-${shadedColor}`;
  let inverseGradient = `l(1,0,0,0)${shadedColor}-${color1}`;

  if (e.order.schemeColorType === "2_COLOR") {
    if (e.order.scheme === "oddfellow") {
      color3 = color2;
      colorInv3 = color3;
      colorSpecial3 = color3;
      colorSpecialInv3 = color3;
    }
  } else if (e.order.schemeColorType === "GLAZE") {
    color1 = normalGradient;
    color2 = normalGradient;
    color3 = normalGradient;
    colorInv1 = inverseGradient;
    colorInv2 = inverseGradient;
    colorInv3 = inverseGradient;

    colorSpecial1 = normalGradient;
    colorSpecial2 = normalGradient;
    colorSpecial3 = normalGradient;
    colorSpecialInv1 = inverseGradient;
    colorSpecialInv2 = inverseGradient;
    colorSpecialInv3 = inverseGradient;
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
    } else if (e.order.scheme === "subway") {
      color1 = normalGradient;
      color2 = normalGradient;
      color3 = normalGradient;
      colorInv1 = inverseGradient;
      colorInv2 = inverseGradient;
      colorInv3 = inverseGradient;
    } else if (e.order.scheme === "old") {
      color2 = normalGradient;
    } else if (e.order.scheme === "basket") {
      colorSpecial1 = normalGradient;
      colorSpecial3 = normalGradient;

      colorSpecialInv1 = inverseGradient;
      colorSpecialInv3 = inverseGradient;
    } else if (e.order.scheme === "oddfellow") {
      color2 = normalGradient;
    } else if (e.order.scheme === "rough") {
      color2 = normalGradient;
      colorInv2 = inverseGradient;
    }
  }

  return {
    color1,
    color2,
    color3,
    colorInv1,
    colorInv2,
    colorInv3,
    colorSpecial1,
    colorSpecial2,
    colorSpecial3,
    colorSpecialInv1,
    colorSpecialInv2,
    colorSpecialInv3
  };
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
