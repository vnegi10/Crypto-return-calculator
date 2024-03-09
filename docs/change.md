---
theme: dashboard
toc: false
---

# Relative performance

```js
import {plot_breakdown_change} from "./components/plots.js";
import {createClubbedStack} from "./components/helpers.js";
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
    <div class="card">${resize((width) => plot_breakdown_change(clubbedStack, date, {width}))} </div>
</div>