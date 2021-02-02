import axios from 'axios'
import { AppId, DevId, CertId, endPoint } from './keys'

export default axios.create({
    baseURL: endPoint,
    headers: {
        'X-EBAY-API-APP-ID': AppId,
        'X-EBAY-API-CALL-NAME': 'FindProducts',
        'X-EBAY-API-VERSION': '1119'
    }
})