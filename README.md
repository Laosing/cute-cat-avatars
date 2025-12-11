![Cute Cat Avatars Banner](public/img/banner.png)

# Cute Cat Avatars

An illustrated cat collection for cat lovers.

---

### What is this?

Cute Cat Avatars are colorful cats illustrated by [Drew Rattana](http://andrewrattana.com) that can be used as profile picture placeholders for live websites or design mock ups.

### How to use

You can easily use these cats in `img` tags or HTTP requests. The response will be a cat in `Content-Type: image/svg+xml`.

**Base URL**: `https://cute-cat-avatars.laosing-cors.workers.dev`

#### HTML

```html
<img
  src="https://cute-cat-avatars.laosing-cors.workers.dev/api/v1/announcer"
  alt="Cute announcer cat"
/>
```

#### Javascript

```javascript
fetch("https://cute-cat-avatars.laosing-cors.workers.dev/api/v1/random")
  .then(res => res.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    document.getElementById("cat").src = url;
  });
```

### Pick your cat

<img src="public/img/logo.png" width="100" height="100" alt="Logo">

There are multiple ways you can query for a cute cat.

**1. By specific Name:**
```
/api/v1/announcer
```

**2. By Seed (Index 0-13):**
The same seed will always return the same cat.
```
/api/v1/4
```

**3. By Random String:**
Any string that isn't a direct name match will be deterministically mapped to a cat based on its length.
```
/api/v1/!@#$%
```

**4. Truly Random:**
Returns a random cat every request.
```
/api/v1/random
```

### Collection

- <img src="public/img/api/v1/announcer.svg" width="50" height="50"> **announcer**
- <img src="public/img/api/v1/support.svg" width="50" height="50"> **support**
- <img src="public/img/api/v1/idea.svg" width="50" height="50"> **idea**
- <img src="public/img/api/v1/bug.svg" width="50" height="50"> **bug**
- <img src="public/img/api/v1/award.svg" width="50" height="50"> **award**
- <img src="public/img/api/v1/news.svg" width="50" height="50"> **news**
- <img src="public/img/api/v1/tv.svg" width="50" height="50"> **tv**
- <img src="public/img/api/v1/comic.svg" width="50" height="50"> **comic**
- <img src="public/img/api/v1/book.svg" width="50" height="50"> **book**
- <img src="public/img/api/v1/art.svg" width="50" height="50"> **art**
- <img src="public/img/api/v1/gaming.svg" width="50" height="50"> **gaming**
- <img src="public/img/api/v1/general.svg" width="50" height="50"> **general**
- <img src="public/img/api/v1/groups.svg" width="50" height="50"> **groups**
- <img src="public/img/api/v1/cat.svg" width="50" height="50"> **cat**

---

## Development

This project is built with **Bun**, **ElysiaJS**, and **Cloudflare Workers**.

### Prerequisites

- [Bun](https://bun.sh) (v1.1+)

### Local Development

To run the project locally (using Cloudflare Wrangler environment):

```bash
# Install dependencies
bun install

# Start local server (auto-regenerates cat list)
bun dev
```

Server will start at `http://localhost:8787`.

### Testing

Run unit and integration tests:

```bash
bun test
```

### Deployment

Deploy to Cloudflare Workers:

```bash
bun run deploy
```

## License

MIT
