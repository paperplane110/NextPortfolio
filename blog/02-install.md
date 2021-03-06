---
title: "How to Set up NextPortfolio"
description: "A tutorial about building your website with Next-Portfolio"
date: "2022-05-16"
---

## Pre-requisite

1. Install node.js with `nvm`.

```shell
# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# verify nvm installation
command -v nvm

# install node, here I'm using node 16
nvm install 16
```

## Clone repository

Use git clone to download the repository

```shell
# go to somewhere convenient
cd mycode

# git clone
git clone https://github.com/paperplane110/NextPortfolio.git
```

## Start the Server

```shell
# Use node 16.*
nvm use 16

# install node_modules
npm install

# start dev
npm run dev
```

Now you can open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
