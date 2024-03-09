---
theme: dashboard
toc: false
---

# Total value

```js
import {plot_value, plot_breakdown_bar, plot_breakdown_area} from "./components/plots.js";
import {createStack} from "./components/helpers.js";
```

```js
const breakdown = FileAttachment("./data/value.json").json();
```

<!--- Re-render whenever the container resizes --->
<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plot_value(breakdown, {width}))} </div>
</div>

# Breakdown

<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plot_breakdown_bar(createStack(breakdown), {width}))} </div>
</div>

<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plot_breakdown_area(createStack(breakdown), {width}))} </div>
</div>