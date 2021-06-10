# Recipes Fiesta  🍲

## Website for fans of food!!

Hi there! 👋  This is the repo for a recipe site. It's built on Gatsby. The data is living in Contentful, a headless CMS, and is pulled at build-time. The site is hosted on Netlify.


### Link [Live View](https://recipes-gatsbyapp.netlify.app/)

## Getting Started

Getting started with this repo is fairly straightforward:

1. Go to Contentful to find all the necessary pieces for your .env file.
2. Create two .env files: `.env.development` and `.env.production`. Stick the _preview_ Contentful token in the `.env.development` file, and stick the normal one in the prod file. You can refer to `.env.sample` to know what you need to find.
3. Run `npm install`.
4. Run `npm start`.

That is it!

## Hosting

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6ab75d8-c5c5-4237-9ae8-c2320b3e7cac/deploy-status)](https://app.netlify.com/sites/recipes-gatsbyapp/deploys)

This site has a continuous deployment set up with Netlify. Any time there is a change to master, Netlify will automatically redeploy the site.
