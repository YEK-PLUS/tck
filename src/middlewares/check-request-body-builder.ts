const CheckRequestBodyBuilder: (props: {
  tckn: number
  ad: string
  soyad: string
  dogumYili: number
}) => string = ({ tckn, ad, soyad, dogumYili }) =>
  `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><TCKimlikNoDogrula xmlns="http://tckimlik.nvi.gov.tr/WS"><TCKimlikNo>${tckn}</TCKimlikNo><Ad>${ad}</Ad><Soyad>${soyad}</Soyad><DogumYili>${dogumYili}</DogumYili></TCKimlikNoDogrula></soap:Body></soap:Envelope>`
// <?xml version="1.0" encoding="utf-8"?>
//   <soap:Envelope
//     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
//     xmlns:xsd="http://www.w3.org/2001/XMLSchema"
//     xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
//     <soap:Body>
//       <TCKimlikNoDogrula xmlns="http://tckimlik.nvi.gov.tr/WS">
//         <TCKimlikNo>${tckn}</TCKimlikNo>
//         <Ad>${ad}</Ad>
//         <Soyad>${soyad}</Soyad>
//         <DogumYili>${dogumYili}</DogumYili>
//       </TCKimlikNoDogrula>
//     </soap:Body>
//   </soap:Envelope>`;
export default CheckRequestBodyBuilder
