# The WHEAT Stack

Welcome to the shortest stack out there. This stack combines Worker functions, Hyperscript,  Eleventy, Alpine.js and Tailwind CSS to make static site authoring easy and minimal!

This stack requires minimal setup and ready to deploy on your favorite edge service or cloud.

There are some other goodies in here, but they change so often that it's probably not worth including here, just check the `package.json` file!

## Getting Started 

Just run the usual commands and peep the `package.json` file to see the available scripts and packages.

For the lazy:

- `npm i` to build that big ol' `node_modules` folder
- `npm run dev` to boot up that dev server and start building
- `npm run build` when you're ready to build a production bundle

**Bonus**
`npm run build && npx serve dist` will boot up a local server of your production site!

## Hyperscript

Hyperscript is a scripting language for doing front end web development. It is designed to make it very easy to respond to events and do simple DOM manipulation in code that is directly embedded on elements on a web page.
Learn more at https://hyperscript.org/

## Getting Started with Worker Functions

Worker functions can be thought of as REST, gRPC, graphql or other remote functions that perform tasks somewhere other than the device running the application. These functions are typically served from the same domain, which reduces cross-site security vulnerabilities, but you can also call remote functions from any domain, and whitelist the domain for access from your application.
The WHEAT stack comes pre-configured for running functions on Cloudflare Pages, but you are free to customize your worker functions as you see fit. 

Read more about cloudflare pages functions at https://developers.cloudflare.com/pages/platform/functions
Use the /functions folder to configure your worker functions.

## Deploying 
