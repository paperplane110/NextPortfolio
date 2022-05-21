---
title: "Markdown Example"
description: "The Stylesheet of Markdown"
date: "2022-05-18"
---

# h1
## h2
### h3
#### h4
##### h5

## Content

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
fugit earum voluptas officia, quasi saepe et commodi, dolores cumque
quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet
repellendus

## Unordered List

- one
- two
- three

## Ordered List

1. one
2. two
3. three
## Quote

> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
> fugit earum voluptas officia, quasi saepe et commodi, dolores cumque
> quam fuga ullam, itaque ea dignissimos asperiores adipisci ad eveniet
> repellendus

## Divider

This is a divider

---
## Link

链接会自动识别是内部还是外部链接，并且自动添加小图标

- 网站内部链接 [Back-to-home](/)
- 网站内部链接 [To-gallery](/gallery)
- 网站外部链接 [Nextjs](https://nextjs.org/)

以上链接对应markdown代码为

```markdown
*注意：内部链接为绝对路由地址，链接 blog 时不包含后缀 '.md'*
- 网站内部链接 [Back-to-home](/)
- 网站内部链接 [To-gallery](/gallery)
- 网站外部链接 [Nextjs](https://nextjs.org/)
```

## Code

`echo Happinese > Life`

## Code block

代码块高亮支持的语言为：`ts`, `tsx`, `js`, `jsx`, `bash`, `markdown`, `java`, `python`, `cpp`, `json`, `scss`

```python
import random
from Spirit import soul
from Material import body

human = soul + body

class Human:
    """A class of human being"""
    def __init__(self, soul, body):
        self.personality = soul.color
        self.looking = body.gene
        self.health = 100

    def eating(self, food):
        self.health += food.value

a = Human(random(soul), random(body))
```

## Image

`![plane{priority}{caption: Create with blender}](/../gallery/plane.jpeg)`

- 地址中的第一个 `/` 是为了说明图片是本地的静态资源。
- 花括号中的 `{priority}` 表示图片较大，需要预先加载
- 花括号中的 `{caption: description}` 的描述将展现在图片下方。

![plane{priority}{caption: The Little Pilot Create with Blender}](/../gallery/plane.jpeg)

## Table(Not support)

由于 `remark-gfm` 是 `cjs` 插件，`Nextjs` 暂不支持 `cjs` 插件

| male | female |
| --- | --- |
| 10 | 10 |
