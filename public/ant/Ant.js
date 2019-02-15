/* eslint-disable */
var define = define // Porque requirejs no esta definida
/* eslint-enable */

class Ant {
  // posicion inicial de la hormga de la hormiga
  constructor (height, width, color, marcha) {
    this._x = height
    this._y = width
    this._color = color
    this._rotation = 0
    this.marcha = marcha
  }

  to (dir) {
    console.log(this)
    switch (dir) {
      case 0:
        this._x += this.marcha
        break
      case 1:
        this._x += this.marcha
        this._y -= this.marcha
        break
      case 2:
        this._y -= this.marcha
        break
      case 3:
        this._x -= this.marcha
        this._y -= this.marcha
        break
      case 4:
        this._x -= this.marcha
        break
      case 5:
        this._x -= this.marcha
        this._y += this.marcha
        break
      case 6:
        this._y += this.marcha
        break
      case 7:
        this._x += this.marcha
        this._y += this.marcha
        break
    }
  }

  move () {
    this.to(Math.floor(Math.random() * 8))
  }

  get position () {
    return [this._x, this._y]
  }
}

define(function () {
  return Ant
})
