---
title: "How to Add a Post"
description: "A tutorial on adding blog post"
date: "20220521"
---

## 写在前面

`NextPortfolio` 作为一个**以内容为核心**的个人主页，其诞生的主要目的就是帮助大家轻松愉快进行写作，使用户不用在网站的构建上**费心费力**，一切与内容无关的都交给 `NextPortfolio` 来完成，从而使大家能够专注于**内容创作**。

使用 `NextPortfolio` 仅需要您掌握以下3个东西:

- 会使用 `git`，以及一个 `github` 账号
- 会使用 `markdown` 语法
- 会使用 `google` 搜索

下面将逐步讲解如何在 `NextPortfolio` 书写您的第一篇 blog，让我们开始吧 ⚡

## 下载项目

首先需要您将本项目的代码库拉取到本地，并安装相关依赖，具体操作方法详见[如何安装](/blog/02-install)

准备完毕后您将看到以下目录：

```text
NextPortfolio/
    \___blog/           <- 这里存放所有的 blog 文章
    \___components/     <- 前端组件
    \___lib/            <- 常用函数
    \___pages/          <- 子页面
    \___public/         <- 静态资源：图片、图标等
        \___gallery/    <- 作品集图片
        \___images/     <- blog 的插图
    \___styles/         <- 前端样式
```

可以注意到一个叫 `blog` 的文件夹，我们所有的博文都将存放在那里（包括您正在读的这篇），
下面我们将在其中新增一篇文章。

## 新建 Post

首先去到 `blog` 文件夹下，新建一个以 `.md` 结尾的文件，命名格式是 `{序号}-{名字}.md`

```bash
cd blog

ls -l

>>> output:
May 20 21:14 01-first-post.md
May 21 01:03 02-install.md
May 21 11:46 03-md-example.md
May 21 11:48 04-add-post.md

# 按照序号，我们新建:
touch 05-new-post.md
```

需要注意两件事：

- 以序号开头：序号将用于文档的排序，让电脑知道哪一页在前、哪一页在后，序号越大说明文档越新。
- 文件的名字：文件的名字 ***不是*** 文章的名字，而是该文件的路由地址，博文的名字将在后续指定。

我们打开新建的文档，在开头按照如下格式来书写：

```markdown
---
title: 这是大标题
description: 用简短的一句话来概括全文
date: 创作时间
---

## 以下是内容

...
```

现在就可以愉快的书写文章了😝

> Markdown语法简易展示: [Markdown例子](/blog/03-md-example)

## 预览 blog

编写文章时，我们时常想看看文章在实际网站中的效果，此时可以启动 `开发模式` 来在浏览器中预览。

```bash
# 回到项目根目录后
npm run dev
```

然后打开 [http://localhost:3000](http://localhost:3000) 就可以看到网页了

---

好了，现在我们已经学会了如何添加 blog！祝您写作愉快 ✏️

在下一节中，我们将使用 `vercel` 来将我们的主页部署到互联网上，非常容易，而且完全免费，这样大家就可以都看到您的主页了

#### See you next post!
