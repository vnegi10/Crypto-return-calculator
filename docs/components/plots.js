import * as Plot from "npm:@observablehq/plot";
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export function plot_value(breakdown, {width} = {}) {

    return Plot.plot({
      width,
      title: "Total portfolio value",
      x: {type: "utc", ticks: "week", label: "Time [days]"},
      y: {grid: true, inset: 10, label: "Value [euros]", domain: [0, 20000]},
      marks: [
        Plot.lineY(breakdown, {
          x: "time",
          y: "value",
          stroke: "green",
          tip: true
          })
        ]
    });
}

export function plot_breakdown(stackArray, {width} = {}) {

    return Plot.plot({
      width,
      title: "Portfolio breakdown",
      x: {label: "Time [days]"},
      y: {grid: true, label: "Value [euros]", domain: [0, 20000]},
      color: {legend: true},
      marks: [
        Plot.rectY(stackArray, {
          x: "time",
          y: "value",
          interval: "day",
          fill: "name",
          tip: true
          })
        ]
    });
}