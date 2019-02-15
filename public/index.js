
/* eslint-disable */
var requirejs = requirejs // Porque requirejs no esta definida
/* eslint-enable */

requirejs(['bower_components/d3/d3.min.js', 'ant/Ant.js'], (d3, Ant) => {
  console.log(Ant)

  let colonia = Array.from(new Array(45)).map((x, i) => new Ant(50 + i * 10, 50, 'blue', 10))
  let ant = new Ant(100, 100, 'blue', 10)
  let root = d3.select('#root')

  root.append('rect')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', 'pink')

  let antDraw = root.append('circle')
    .attr('cx', ant._x)
    .attr('cy', ant._y)
    .attr('r', 5)
    .attr('fill', ant._color)

  let antsDraw = root.append('g').data(colonia).enter().append('circle')
    .attr('cx', ant._x)
    .attr('cy', ant._y)
    .attr('r', 5)
    .attr('fill', ant._color)

  setInterval(() => {
    console.log(ant)
    ant.to(Math.floor(Math.random() * 8))
    antDraw
      .attr('cx', ant._x)
      .attr('cy', ant._y)
  }, 1000)
})
