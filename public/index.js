
/* eslint-disable */
var requirejs = requirejs // Porque requirejs no esta definida
/* eslint-enable */

requirejs(['bower_components/d3/d3.min.js', 'ant/Ant.js'], (d3, Ant) => {
  console.log(Ant)

  let colonia = Array
    .from(new Array(45))
    .map((x, i) => new Ant(50, 50, 'blue', 10))

  let ant = new Ant(300, 300, 'blue', 10)
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

  let antsDraw = root.selectAll('circle').data(colonia).enter().append('circle')

  antsDraw
    .attr('cx', (d) => d._x)
    .attr('cy', (d) => d._y)
    .attr('r', 5)
    .attr('fill', 'red')

  console.log(colonia)
  setInterval(() => {
    console.log(ant)
    colonia.map((x) => x.to(Math.floor(Math.random() * 8)))
    antsDraw
      .attr('cx', (d) => d._x)
      .attr('cy', (d) => d._y)
    ant.to(Math.floor(Math.random() * 8))
    antDraw
      .attr('cx', ant._x)
      .attr('cy', ant._y)
  }, 100)
})
