---
theme: dashboard
toc: false
---

# Total value

```js
import {plot_value, plot_breakdown_bar} from "./components/plots.js";
```

```js
const breakdown = FileAttachment("./data/value.json").json();
```

<!--- Re-render whenever the container resizes --->
<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plot_value(breakdown, {width}))} </div>
</div>

# Breakdown

```js
// Convert x-axis to Date object so that we make a bar plot later
var breakdown_dates
breakdown_dates = breakdown.map(({time, ...rest}) => {
  return {
    time: new Date(time),
    ...rest
  };
})
```

```js
// Perform stacking to get a new column with currency name
const stackArray = [];

for (const obj of breakdown_dates) {
  const newObj1 = {
    name: "BTC",
    value: obj.bitcoin,
    time: obj.time
  };
  stackArray.push(newObj1);

  const newObj2 = {
    name: "ETH",
    value: obj.ethereum,
    time: obj.time
  };
  stackArray.push(newObj2);

  const newObj3 = {
    name: "LINK",
    value: obj.chainlink,
    time: obj.time
  };
  stackArray.push(newObj3);
}
```

<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plot_breakdown_bar(stackArray, {width}))} </div>
</div>