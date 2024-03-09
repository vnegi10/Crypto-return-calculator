---
theme: dashboard
toc: false
---

# Relative performance

```js
import {plotBreakdownChange, plotValueChange} from "./components/plots.js";
import {createClubbedStack, convertDates} from "./components/helpers.js";
import * as Inputs from "npm:@observablehq/inputs";
```

```js
const breakdown = FileAttachment("./data/value.json").json();
```

```js
const clubbedStack = createClubbedStack(breakdown)
```

```js
const date = view(
    Inputs.date({
        label: "Select starting date for comparison",
        min: clubbedStack[0].time,
        max: clubbedStack[clubbedStack.length - 1].time
        }));
```

<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plotValueChange(convertDates(breakdown), date, {width}))} </div>
</div>

<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plotBreakdownChange(clubbedStack, date, {width}))} </div>
</div>