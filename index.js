// Types of Axis
// d3.axisTop()
// d3.axisRight()
// d3.axisBottom()
// d3.axisLeft()


const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
// const dataset = [1, 2, 3, 4, 5, 7, 8, 10, 20];

const svgWidth = 500;
const svgHeight = 300;
const barPadding = 5;
const barWidth = (svgWidth / dataset.length);

const svg = d3.select("svg")
  .attr('width', svgWidth)
  .attr("height", svgHeight);

// used to return a number based on proportions to best use space

const xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, svgWidth]);


const yScale = d3.scaleLinear() // for height attribute
  .domain([0, d3.max(dataset)])
  .range([svgHeight, 0]);

const x_axis = d3.axisBottom()
  .scale(xScale);

const y_axis = d3.axisLeft()
  .scale(yScale);

svg.append("g")
  .attr("transform", "translate(50, 10)")
  .call(y_axis);

const xAxisTranslate = svgHeight - 20;

svg.append("g")
  .attr("transform", `translate(50, ${xAxisTranslate})`)
  .call(x_axis);


// const barChart = svg.selectAll("rect")
//   .data(dataset)
//   .enter() // grabs all rects - there are none so...
//   .append('rect') // adds a rect for each data point
//   .attr('y', function(d) { return svgHeight - yScale(d); }) // attr's for rects
//   .attr('height', function(d) { return yScale(d); })
//   .attr('width', barWidth - barPadding )
//   .attr('class', 'bar') // for css
//   .attr('transform', function(d, i) {
//     const translate = [ (i * barWidth) + 25, -20];
//     return `translate(${translate})`;
//   });

// const text = svg.selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .text(function(d){
//     return d;
//   })
//   .attr("y", function(d) {
//     return svgHeight - yScale(d) - 3;
//   })
//   .attr("x", function(d, i) {
//     return barWidth * i + barWidth / 2 - 6;
//   });
