const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

const svgWidth = 500, svgHeight = 300, barPadding = 5;
const barWidth = (svgWidth / dataset.length);

const svg = d3.select("svg")
  .attr("height", svgHeight)
  .attr('width', svgWidth);


const barChart = svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append('rect')
  .attr('y', function(d) { return svgHeight - d; })
  .attr('height', function(d) { return d; })
  .attr('width', barWidth - barPadding )
  .attr('class', 'bar')
  .attr('transform', function(d, i) {
    const translate = [ i * barWidth, 0];
    return `translate(${translate})`;
  });

  const text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d){
      return d;
    })
    .attr("y", function(d) {
      return svgHeight - d - 3;
    })
    .attr("x", function(d, i) {
      return barWidth * i;
    })
