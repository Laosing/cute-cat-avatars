![](https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/banner.png)

# Cute Cat Avatars
An illustrated cat collection for cat lovers

---

### What is this?
Cute Cat Avatars are colorful cats illustrated by [Drew Rattana](http://andrewrattana.com) that can be used as profile picture placeholders for live websites or design mock ups.

### How to use
You can easily use these cats in img tags or http requests, the response will be a cat in `Content-Type: image/svg+xml`. The url to request is https://cute-cat-avatars.herokuapp.com/api/v1/:seed for example:
#### HTML
```html
<img src="https://cute-cat-avatars.herokuapp.com/api/v1/announcer" alt="Cute announcer cat">
```
#### Javascript
```javascript
fetch('https://cute-cat-avatars.herokuapp.com/api/v1/random')
    .then(function(response) {
        document.getElementById('cat').src = response.url;
    })
```

### Pick your cat

<img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/logo.png" width="100" height="100">

There are multiple ways you can query for a cute cat.
The same seed will always return the same cat:
```
api/v1/:seed
```
```
api/v1/12
```
You can query a specific cat or a random cat.
```
/api/v1/announcer
```
```
/api/v1/random
```
### Try them all!
* <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/announcer.png" width="100" height="100"> announcer
* <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/support.png" width="100" height="100"> support
* <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/idea.png" width="100" height="100"> idea
* <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/bug.png" width="100" height="100"> bug
* <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/award.png" width="100" height="100"> award
* <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/news.png" width="100" height="100"> news
* <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/tv.png" width="100" height="100"> tv
* <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/comic.png" width="100" height="100"> comic
* <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/book.png" width="100" height="100"> book
* <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/art.png" width="100" height="100"> art
* <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/gaming.png" width="100" height="100"> gaming
* <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/general.png" width="100" height="100"> general
* <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/groups.png" width="100" height="100"> groups
* <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/png/cat.png" width="100" height="100"> cat

### Built With
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Node.js](https://nodejs.org/) - JavaScript on the Server
* [Heroku](https://www.heroku.com/) - Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.


### License
MIT
