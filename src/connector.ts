import Fetch, { Response } from 'node-fetch'
const Action = 'http://tckimlik.nvi.gov.tr/WS/TCKimlikNoDogrula'
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
      body: body,
      method: 'POST',
      redirect: 'follow',
    })
}
export default Connector
