// Handle HTTP errors since fetch won't.
export const handleErrors = response => {
    if ( !response.ok ) {
        return Promise.reject(response.statusText)
    }

    return response
}