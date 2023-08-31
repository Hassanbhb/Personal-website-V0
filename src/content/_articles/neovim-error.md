---
slug: attempt-to-call-local-autocmd-(a-nil-value)
title: Neovim autocmd Error
description: Neovim attempt to call local autocmd (a nil value)
image: "../../assets/Pyramid.gif"
date: 20/08/2023
tags:
  - Fixes
---

# NvChad - Fix for: attempt to call local autocmd (a nil value) error

Attempting to install & run [NvChad](https://nvchad.com/docs/quickstart/install) You might get this Error when running Neovim:

```
Error detected while processing /home/*********/.config/nvim/init.lua:
E5113: Error while calling lua chunk: /home/*********/.config/nvim/lua/core/init
.lua:6: attempt to call local 'autocmd' (a nil value)
stack traceback:
/home/*********/.config/nvim/lua/core/init.lua:6: in main chunk
[C]: in function 'require'
/home/*********/.config/nvim/init.lua:7: in main chunk
Press ENTER or type command to continue
```

NvChad has Pre-requisites, the one causing this error is:

- Neovim has to be at least on version 0.9.0

check your version with this command:

```
nvim --version
```

it's probably not 0.9.0, so you have to update it, but it won't work if you are using `apt-get`, because it installs an old version.

Instead [download the AppImage](https://github.com/neovim/neovim/wiki/Installing-Neovim#appimage-universal-linux-package)

```
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim.appimage
```

Then make it an executable with this command:

```
chmod u+x nvim.appimage
```

Now you can use neovim

```
./nvim.appimage
```

It is annoying to write the whole "./nvim.appimage" everytime you wan to use it. we will fix that with this command:

```
sudo mv nvim.appimage /usr/bin/nvim
```

Now your Neovim should be on the latest version and the Error won't show when installing NvChad.
