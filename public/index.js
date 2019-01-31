const bc = (s) => `bower_components/${s}`

/* eslint-disable */
var requirejs = requirejs // Porque requirejs no esta definida
/* eslint-enable */

requirejs(['d3/d3.min.js'].map(bc), (d3) => {
  console.log(d3)
  let root = d3.select('#root')
  root.append('rect')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', 'pink')
  console.log('ok', root)
})
