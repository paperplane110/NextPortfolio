---
title: "When to Use Static Generation v.s. Server-side Rendering"
description: "Give some suggestions for useing static generation"
date: "2020-01-02"
---

# H1

## H2

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

> 我们推荐尽可能的使用 **静态生成** (当不使用外部数据时)，因为页面仅需编译一次，且可以在 CDN 上部署，
> 这样避免了服务端渲染时每次请求就渲染一次，从而大大提高了访问速度。

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation



You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.

This is a piece of code:

```python
import pprint as pp

pp.pprint("Hello World!")
```

And table:

| male | female |
| ---- | ------ |
| 19   | 23     |
