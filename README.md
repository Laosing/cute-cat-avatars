# cute cats
An illustrated cat collection for cat lovers

---

### What is this?
Cute cats are colorful cats illustrated by [Drew Rattana](http://andrewrattana.com) that can be used as profile picture placeholders for live websites or design mock ups.

### How to use
You can easily use these cats in img tags or http requests, the response will be a cat in `Content-Type: image/svg+xml`. The url to request is https://cutecatavatars.herokuapp.com/api/v1/:seed for example:
#### HTML
```html
<img src="https://cutecatavatars.herokuapp.com/api/v1/announcer" alt="Cute announcer cat">
```
#### Javascript
```javascript
fetch('https://cutecatavatars.herokuapp.com/api/v1/random')
    .then(function(response) {
        document.getElementById('cat').src = response.url;
    })
```

### Pick your cat
There are multiple ways you can query for a cute cat.
The same seed will always return the same cat:
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
### Try them all!
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

### Built With
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Node.js](https://nodejs.org/) - JavaScript on the Server
* [Heroku](https://www.heroku.com/) - Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.


### License
MIT
