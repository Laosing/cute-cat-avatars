# cute cats
---------------
An illustrated cat collection for cat lovers

## What is this?
Cute cats are colorful cats illustrated by [Drew Rattana](http://andrewrattana.com) that can be used as profile picture placeholders for live websites or design mock ups.

## How to use
You can easily use this in img tags or json requests, the response will be a cat in svg format.
```html
<img src="/api/v1/:seed" alt="cute cat">
```

## Get a cat
There are multiple ways you can query for a cute cat.
The same seed always return the same cat, where seed can be `0-13`:
```
api/v1/:seed
```
You can query a specific cat or a random cat.
```
/api/v1/announcer
```
```
/api/v1/random
```
## Here try them all!
* announcer
* support
* idea
* bug
* award
* news
* tv
* comics
* books
* art
* gaming
* general
* groups
* cat

## Built With
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Node.js](https://nodejs.org/en/) - JavaScript on the Server

## License
MIT
