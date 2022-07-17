![](https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/banner.png)

# Cute Cat Avatars [![Build Status](https://travis-ci.org/Laosing/cute-cat-avatars.svg?branch=master)](https://travis-ci.org/Laosing/cute-cat-avatars)

An illustrated cat collection for cat lovers

---

### What is this?

Cute Cat Avatars are colorful cats illustrated by [Drew Rattana](http://andrewrattana.com) that can be used as profile picture placeholders for live websites or design mock ups.

### How to use

You can easily use these cats in img tags or http requests, the response will be a cat in `Content-Type: image/svg+xml`. The url to request is https://cute-cat-avatars.fly.dev/api/v1/:seed for example:

#### HTML

```html
<img
  src="https://cute-cat-avatars.fly.dev/api/v1/announcer"
  alt="Cute announcer cat"
/>
```

#### Javascript

```javascript
fetch("https://cute-cat-avatars.fly.dev/api/v1/cat").then(function (response) {
  document.getElementById("cat").src = response.url
})
```

### Pick your cat

<img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/logo.png" width="100" height="100">

There are multiple ways you can query for a cute cat.
The same seed will always return the same cat:

```
api/v1/:seed
```

```
api/v1/12
```

You can query a specific cat or a string to get a random cat.

```
/api/v1/announcer
```

```
/api/v1/!@#$%
```

### Try them all!

- <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/announcer.png" width="100" height="100"> announcer
- <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/support.png" width="100" height="100"> support
- <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/idea.png" width="100" height="100"> idea
- <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/bug.png" width="100" height="100"> bug
- <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/award.png" width="100" height="100"> award
- <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/news.png" width="100" height="100"> news
- <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/tv.png" width="100" height="100"> tv
- <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/comic.png" width="100" height="100"> comic
- <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/book.png" width="100" height="100"> book
- <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/art.png" width="100" height="100"> art
- <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/gaming.png" width="100" height="100"> gaming
- <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/general.png" width="100" height="100"> general
- <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/groups.png" width="100" height="100"> groups
- <img src="https://raw.githubusercontent.com/Laosing/cute-cat-avatars/master/assets/img/cat.png" width="100" height="100"> cat

### License

MIT
