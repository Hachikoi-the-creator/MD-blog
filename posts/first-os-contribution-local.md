---
title: "OpenSource Tutorial (Locally)"
metaTitle: "OpenSource Tutorial"
metaDesc: "How to make your first OpenSource contribution"
socialImage: images/post3-1.png
date: "29-04-2022"
tags:
  - OpenSource
  - Git
  - GitHub
  - Beginners
---

# Your first open source contribution!

### Requieremnts

- Have git installed
- know git basics (add, commit, checkout)
- Github account

1. Find a repo you want to contribute to

some examples to get your feet wet:
   - [My own repo to practice](https://github.com/Hachikoi-the-creator/EasyFirstContribution) I can personally comment your code and help you trough the problems it may surge
   - [EddyHubCommunity repo](https://github.com/EddieHubCommunity/hacktoberfest-practice) Github community to help you in your journey
   - [First Contributions repo](https://github.com/firstcontributions/first-contributions) Slack community to help you in your journey

2. Fork the repo 

*gift me a start while you are at it :D*

This makes a copy of the repo to your Github account, you'll update your changes here, for the ask for it to be added to the main repo

![my img](https://cdn.glitch.global/10425db4-6abf-43d4-9e55-d3f1d76614b7/fork13.png?v=1651263112605)

3. Download the repo

After that is done you need to get a copy of that repo, and for that you need to get a link 
   - First click this button
![click the code button](https://cdn.glitch.global/10425db4-6abf-43d4-9e55-d3f1d76614b7/code1.png?v=1651263015188)

  - Then you click this one to get a copy of the link

![actual button to get the link](https://cdn.glitch.global/10425db4-6abf-43d4-9e55-d3f1d76614b7/code2.png?v=1651263112557)

4. Clone the repo

Now you need to open your git bash where you want to download the repo.
 
   - in your desktop -> right click -> 'Git Bash Here' - for example
   - Copy the link after `git clone your_link`, and press enter

![git clone example](https://cdn.glitch.global/10425db4-6abf-43d4-9e55-d3f1d76614b7/git%20clone%20exam.png?v=1651263878632)

5. Open the repo in VSCode

Just make the changes you want to add, in the case of these practice repos, write your name and social media.

6. Commit your changes

`git add .`

`git commit -m "my_msg"`

7. Create a new branch
You need to create a new git branch whit `git checkout -b my_branch`. *my_branch* can be any name you wan to give it.

![my new branch](https://cdn.glitch.global/10425db4-6abf-43d4-9e55-d3f1d76614b7/git%20chechkout.png?v=1651264263672)

8. Push your changes to your branch

*one tip: do a normal `git push`* git will detect that you are in a different branch from main, and will give you the actually command you need to use

![git push own branch](https://cdn.glitch.global/10425db4-6abf-43d4-9e55-d3f1d76614b7/git%20pupsh%20hack.png?v=1651265039499)

  - now after the real command you should see something like this

![Git push correct branch](https://cdn.glitch.global/10425db4-6abf-43d4-9e55-d3f1d76614b7/git%20push%20branch.png?v=1651265784131)

9. Create a pull request

Now that you pushed your changes to github, you'll automagically be in that branch once you go the forked repo in your Github account, and you should see this button

![pull request btn](https://cdn.glitch.global/10425db4-6abf-43d4-9e55-d3f1d76614b7/pullRequest.png?v=1651276727349)
