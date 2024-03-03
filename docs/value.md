---
theme: dashboard
toc: false
---

# Total portfolio value

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