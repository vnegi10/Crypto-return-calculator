import * as Plot from "npm:@observablehq/plot";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export function plot_value(value, {width} = {}) {

    return Plot.plot({
      width,
      title: "Total portfolio value",
      x: {type: "utc", ticks: "day", label: "Time [days]"},
      y: {grid: true, inset: 10, label: "Value [euros]"},
      marks: [
        Plot.lineY(value, {
          x: "time",
          y: "value",
          stroke: "green",
          })
        ]
    });
}