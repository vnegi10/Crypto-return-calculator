---
theme: dashboard
toc: false
---

# Percentage change

```js
import {plot_breakdown_change} from "./components/plots.js";
import {createStack} from "./components/helpers.js";
```

```js
const breakdown = FileAttachment("./data/value.json").json();
```

<div class="grid grid-cols-1">
    <div class="card">${resize((width) => plot_breakdown_change(createStack(breakdown), {width}))} </div>
</div>