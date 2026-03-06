

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}

const size = new Size(1080, 764);
console.log(size.width);

export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
}

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }
}

ProgramWindow.prototype.resize = function (newSize) {
  console.log("Width", this.size.width);
  console.log("Heigth", this.size.height);
  console.log("New Width", newSize.width);
  console.log("New Height", newSize.height);
  console.log("Screen Width", newSize.width);
  console.log("Screen Height", newSize.height);
  console.log("X", this.position.x);
  console.log("Y", this.position.y);
    let newWidth = newSize.width < 1 ? 1 : newSize.width;
    let newHeight = newSize.height < 1 ? 1 : newSize.height;

    newWidth = (newWidth + this.position.x) > this.screenSize.width ? this.screenSize.width - this.position.x : newWidth;
    newHeight = (newHeight + this.position.y) > this.screenSize.height ? this.screenSize.height -this.position.y : newHeight;

  this.size.width = newWidth;
  this.size.height = newHeight;
}

ProgramWindow.prototype.move = function (position) {
    let newX = position.x < 0 ? 0 : position.x;
    let newY = position.y < 0 ? 0 : position.y;

    newX = (newX + this.size.width) > this.screenSize.width ? this.screenSize.width - this.size.width : newX;
    newY = (newY + this.size.height) > this.screenSize.height ? this.screenSize.height - this.size.height: newY;

  this.position.x = newX;
  this.position.y = newY;
}

export function changeWindow(programWindow) {
    programWindow.size = new Size(400, 300);
    programWindow.position = new Position(100, 150);

    return programWindow;
}