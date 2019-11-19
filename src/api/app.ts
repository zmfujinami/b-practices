class UrlObject {

  private urls: string[] = []

  constructor(urls: string[]) {
    this.urls = urls
  }

  getOnlySsl (): string[] {
    return this.urls.filter((value) => {
      return value.match(/^https/) !== null;
    })
  }
}

const urls: string[] = ['https://www.google.co.jp/', 'http://www.apple.com/', 'https://www.amazon.co.jp/']
const urlObjects: UrlObject = new UrlObject(urls)
const sslUrls: string[] = urlObjects.getOnlySsl()
console.log(sslUrls)