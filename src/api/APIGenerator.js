import { handleErrors } from '../common/request-handlers'

/*
 * Wrapper for fetching data.
 * I've used chaining pattern for pretty API calling, also I put logic in this wrapper to extract from array one day.
 *
 * Example:
 * const API = new APIGenerator()
 * API.exchangerates().tables().A().generateAPI().GET()
 */
export default class APIGenerator {
    /*
     * Worth to use in future factory pattern for better readability.
     * Example:
     * new APIFactory.config({ protocol: 'https', format: 'XML' })
     */
    constructor(format = 'json', protocol = 'https') {
        this.baseUrl = `${ protocol }://api.nbp.pl/api/`
        this.format = format
        this.url = ''
    }

    exchangerates() {
        this.url = this.baseUrl + 'exchangerates/'

        return this
    }

    tables() {
        this.url = this.url + 'tables/'

        return this
    }

    A() {
        this.url = this.url + 'A'

        return this
    }

    generateAPI() {
        this.url = `${ this.url }?format=${ this.format }`

        return this
    }

    // optional callback for transform data in different way then default
    get(processCallback) {
        return fetch(this.url)
            .then(handleErrors)
            .then(response => response.json())
            .then(jsonRawData => {
                if (processCallback !== undefined) {
                    return processCallback(jsonRawData)
                }

                const extractFirstElement = (currencies, currency) => currencies = currency.rates

                // API returns always array with one element, also I have to extract rates field but I don't want call it by array index.
                return jsonRawData
                    .reduce(extractFirstElement, [])
            })
            .catch(error => { throw new Error(error) })
    }
}
