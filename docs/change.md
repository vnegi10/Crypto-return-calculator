---
theme: dashboard
toc: false
---

# Relative performance

```js
import {plot_breakdown_change} from "./components/plots.js";
import {createClubbedStack} from "./components/helpers.js";
```

```js
const breakdown = FileAttachment("./data/value.json").json();
```

<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plot_breakdown_change(createClubbedStack(breakdown), {width}))} </div>
</div>