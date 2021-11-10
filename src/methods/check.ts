import convert from 'xml-js'
import { CheckRequestBodyBuilder } from '../middlewares'
import Methods from '.'
import { Base } from '../config'

const check = async function Check(
  this: Methods,
  props: {
    tckn: number
    ad: string
    soyad: string
    dogumYili: number
  }
) {
  try {
    const response = await this.connector
      .fetch(Base, {
        body: CheckRequestBodyBuilder({
          ad: props.ad,
          soyad: props.soyad,
          tckn: props.tckn,
          dogumYili: props.dogumYili,
        }),
      })
      .then((res) => res.text())
      .then((res) => convert.xml2json(res))
      .then((res) => JSON.parse(res))
      .then(
        (res) => res.elements[0].elements[0].elements[0].elements[0].elements[0]
      )
      .then((res) => res.text)
    return {
      status: true,
      data: {
        isValid: response === 'true',
      },
    }
  } catch (error) {
    return {
      status: false,
      error,
    }
  }
}
export default check
