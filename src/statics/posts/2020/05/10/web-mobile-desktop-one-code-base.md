---
title: One Front-End to Rule Them All
description: Quasar Framework
headerImage: space.jpg
headerImageAlt: Photo by Shot by Cerqueira on Unsplash
publishDate: "2020-05-10"
tags: 
  - technology
  - code
---
## Henry or Dagny?

Henry is an aspiring software developer. He has an idea for an app that could be worth big :fa-dollar-sign: :fa-dollar-sign: :fa-dollar-sign: and change the world. The app requires mobile, web and desktop versions. Henry decides to build 4 different front-ends using 3 different languages. Java for desktop and Android, JavaScript for the web and Swift for the iPhone app. 
Four months later and he almost has the iPhone prototype completed.

Dagny is also learning software development and has a similar idea to Henry's. She has recently learned about the Quasar Framework and how you can develop once and build everywhere. Within one month she has a prototype built for web, iPhone, Android, Windows and Mac. Offers for investment are rolling in!

Who would you rather be?

This may be a bit of an exaggeration and there are other all-in-one frameworks but Quasar is the best I have come across. So let's learn more about it.

## What is Quasar?

[Quasar](https://quasar.dev/) helps you quickly build out your app's user interface for web, mobile and desktop. Almost every user interface component (Lists, cards, parallax, etc..) you can think of is built into the framework with a beautiful design.

Their documentation is fantastic! There are multiple examples for each component, which is great for idea generation.

Quasar is built on top of [VueJS](https://vuejs.org/), a wonderful JavaScript framework. If you haven't used Vue before you will learn the basics by playing around with Quasar.

Enough gushing praise already, let's learn how to set up a project!

Note: To make the most of Quasar you should have a fair understanding of HTML, CSS and Javascript.

## Install Quasar

Quasar has 3 different flavors: [UMD/Standalone, Quasar CLI and Vue CLI 3 plugin](https://quasar.dev/start/pick-quasar-flavour).

Since we are building from scratch we will use the recommended [Quasar CLI](https://quasar.dev/start/quasar-cli)

Before we start, here are the apps I use for development:
- Code Editor
  - [VS Code](https://code.visualstudio.com/)
- I use Windows so it helps to have a good console emulator
  - [Cmdr](https://cmder.net/) is the best I have found

#### Steps

##### Install Node 10 or later

- I highly recommend you use a Node Version Manager
  - [Windows NVM](https://github.com/coreybutler/nvm-windows)
  - [Linux & Mac NVM](https://github.com/nvm-sh/nvm)
  - Or install the latest [Node LTS](https://nodejs.org/en/) without a version manager

##### Install Quasar CLI

```command-line 
npm install -g @quasar/cli
```

##### Optional, but Highly Recommended

- [Configure VS Code for Quasar](https://quasar.dev/start/vs-code-configuration)

That's it! You are ready to start building.

## Create a New App

```command-line
quasar create app-name
```




