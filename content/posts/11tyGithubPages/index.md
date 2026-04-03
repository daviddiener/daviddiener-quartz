---
title: How to Set Up an 11ty Blog on GitHub Pages
date: 2023-03-03
tags:
  - webdev
cover: "cover.png"
---

I recently built this site to share notes from my studies and updates on my gamedev projects. In the past, I leaned towards overkill solutions like WordPress for projects that I would quickly move on from. Eventually, I found Publii, a static site generator I used for quite a while and would still recommend, especially if you aren't particularly tech-savvy.

This time, though, I wanted something more minimal. After the usual "best static site generator reddit" deep dive, the top contenders were Jekyll, Hugo, and 11ty. As a JavaScript fanboy, the choice was pretty obvious: 11ty.

## Getting 11ty Running Locally
[11ty](https://www.11ty.dev/) has great documentation on setting up a project. I decided to base mine on the [official base blog example](https://github.com/11ty/eleventy-base-blog).

After setting up the base project, make sure your `package.json` includes a build script like this:

```json
"scripts": {
  "build": "npx @11ty/eleventy"
}
```

## Deploying to GitHub Pages
Create a `.github/workflows/build.yml` file with the following content:

```
name: Build Eleventy

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup node
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install Dependencies
        run: npm install
      
      - name: Build _site
        run: npm run build

      - name: Deploy
        if: success()
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{secrets.GITHUB_TOKEN}}
          publish_dir: ./_site
          # Optional cname if you want to 
          # use a custom domain with Github Pages
          # cname: <subDomain>.<yourDomain>.com 
```

Create your git repository and push your working project to the master branch - if you use main, you have to edit the build.yml file accordingly. Now Github Actions should automatically execute your .yml file.

If you get an error 403 in the output of the GitHub actions go to Settings &rarr; Actions &rarr; General &rarr; Workflow permissions and make sure that 'Read and write permissions' and 'Allow GitHub Actions to create and approve pull requests' are checked.

Now go to Settings &rarr; Pages and under Build and deployment set the branch to gh-pages. Your page should now live on http(s)://\<username>.github.io/\<repository>. I went a step further and [connected the website to my custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).