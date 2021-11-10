import Fetch, { Response } from 'node-fetch'
import { Action } from './config'

class Connector {
  constructor(public fetcher: typeof Fetch = Fetch) {}

  fetch: (url: string, props: { body: string }) => Promise<Response> = (
    url: string,
    { body }
  ) =>
    this.fetcher(url, {
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        SOAPAction: Action,
      },
      body,
      method: 'POST',
      redirect: 'follow',
    })
}
export default Connector
