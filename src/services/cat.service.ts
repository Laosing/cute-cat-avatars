import cats from "../cats"
import { env } from "cloudflare:workers"

export class CatService {
  private getCatUrl(id: number): string {
    if (id >= cats.length) {
      id = id % cats.length
    }
    if (id >= cats.length) {
      id = id % cats.length
    }
    const catName = cats[id]
    return `/img/api/v1/${catName}.svg`
  }

  public getCatUrlByIndex(index: number): string {
    return this.getCatUrl(index)
  }

  public getCatUrlById(id: string): string | null {
    // Check if id is in cats array (by name)
    const catsArray = cats as readonly string[]
    if (catsArray.includes(id)) {
      const index = catsArray.indexOf(id)
      return this.getCatUrl(index)
    }
    // Check if id is a number
    else if (!isNaN(Number(id))) {
      return this.getCatUrl(Number(id))
    }
    // Use id length
    else {
      return this.getCatUrl(id.length)
    }
  }

  public getRandomCatUrl(): string {
    const randomNum = Math.floor(Math.random() * cats.length)
    return this.getCatUrl(randomNum)
  }

  public getCats(): readonly string[] {
    return cats
  }

  public async fetchAsset(path: string, requestUrl: string): Promise<Response> {
    const url = new URL(path, requestUrl)
    let asset: any

    if ((env as Env)?.ASSETS) {
      asset = await (env as Env).ASSETS.fetch(url)
    } else {
      asset = await fetch(url)
    }

    return asset as Response
  }
}
