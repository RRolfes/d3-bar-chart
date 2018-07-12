// Types of Axis
d3.axisTop()
d3.axisRight()
d3.axisBottom()
d3.axisLeft()


const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
// const dataset = [1,2,3,4,5,7, 8, 10, 20];


const svgWidth = 500, svgHeight = 300, barPadding = 5;
const barWidth = (svgWidth / dataset.length);

const svg = d3.select("svg")
  .attr("height", svgHeight)
  .attr('width', svgWidth);


// used to return a number based on proportions to best use space

const xScaled = d3.scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, svgWidth]);


const yScaled = d3.scaleLinear()
  .domain([0, d3.max(dataset) +1])
  .range([0, svgHeight]);

const x_axis = d3.axisBottom()
  .scale(xScaled);

const y_axis = d3.axisLeft()
  .scale(yScaled);

svg.append("g")
  .attr("transform", "translate(50, 10)")
  .call(y_axis);



const barChart = svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append('rect')
  .attr('y', function(d) { return svgHeight - yScaled(d); })
  .attr('height', function(d) { return yScaled(d); })
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
    return svgHeight - yScaled(d) - 3;
  })
  .attr("x", function(d, i) {
    return barWidth * i + barWidth / 2 - 6;
  });
