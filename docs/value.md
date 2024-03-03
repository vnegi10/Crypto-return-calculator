---
theme: dashboard
toc: false
---

# Portfolio total value

```js
import {plot_value} from "./components/plots.js";
```

```js
const breakdown = FileAttachment("./data/value.json").json();
```

<!--- Re-render whenever the container resizes --->
<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plot_value(breakdown, {width}))} </div>
</div>

# Portfolio breakdown

```js
// Perform stacking to get a new column with currency name
const stackArray = [];

for (const obj of breakdown) {
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
}
```