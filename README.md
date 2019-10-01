# Easy Agile Giphy Search

A Giphy search interface - in a yet-to-be-completed state.

## Getting started

1. Read over the entirety of this README
1. If you have any questions, please don't hesitate to ask me at dave@easyagile.com.
1. Fork this repo into your own personal **private** Bitbucket repo. 
1. Please don't spend all weekend on this task. A rough guide is about six hours of work.
1. This task is for you. Please ensure you complete all of the work by yourself. The code you write is your own and in your own repo. Please ensure it actually is yours. i.e. No copying and pasting from existing projects.

## Submitting your work

When you have finished, please push your commits and add Dave Elkan (dave@easyagile.com) as a read-only collaborator of your repo and let me know via
email that you have finished. 

## Requirements

We want you to create a search interface for Giphy. To do so, you will need to sign up to create a Giphy App and obtain an API key. [You can do so here][1].

Once you have your API Key you are tasked with creating a working search interface to display Giphy search results which you feel is nice to use.

## 3rd party code

Please use any of the npm modules you want use to create this app. In fact, we don't want you to write everything from scratch. That's just silly. Feel free to use a react
 component library like material-ui.
 
There are a few exceptions though:

1. Please don't rely on a single module which magically satisfies all of the requirements above (i.e. some kind of Giphy search component).
1. Please use the [fetch][3] module do make the API requests and parse the results yourself. i.e. Please don't use the
 [giphy][2] npm module, however if you find a rad npm module to lay the images out, then please go for it!
 
## Your code

The project in this repo sets up a basic development environment with React and multiple CSS options. Please choose one of them or add your own if you're more
familiar with it. i.e. `styled-components` and remove the rest so there's no confusion.

You must use React. Typescript is not a requirement, but if you want, please don't let us stop you.
 
## What we're looking for

(in no particular order)

1. It is intuitive to use
1. It loads quickly
1. It feels quick to use
1. It handles errors nicely
1. You don't reinvent the wheel

## Do what you think 'feels good'

We're interested in learning what you think makes an app feel good to use. Please spend some time thinking about positive user experiences you've had online and try to bring a bit of that into your work.

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

## Running

Open the file `dist/index.html` in your browser

## Credits

Made with [createapp.dev](https://createapp.dev/)

[1]: https://developers.giphy.com/dashboard/?create=true
[2]: https://www.npmjs.com/package/giphy
[3]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
