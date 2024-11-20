/*
    Add here your own custom javascript
*/

// Fix for the RTL language in the demo
document.querySelectorAll('[href="/ar"]').forEach(link => {
    link.setAttribute('target', '_blank')
})

// EcomGraduates - Affiliate tracking code
function addRefParamToUrlsAndSetCookie () {
    const urlParams = new URLSearchParams(window.location.search)
    let refParam = urlParams.get('ref')

    if (!refParam) {
        // Check if the "ref" cookie exists
        const cookies = document.cookie.split(';')
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim()
            if (cookie.startsWith('ref=')) {
                refParam = cookie.substring(4)

                urlParams.set('ref', refParam)
                break
            }
        }
    }

    if (refParam) {
    // Set the "ref" cookie with the "ref" parameter value
        document.cookie = `ref=${refParam}; expires=${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}; path=/`

        // Update the URLs on the page with the "ref" parameter value
        const links = document.getElementsByTagName('a')
        for (let i = 0; i < links.length; i++) {
            const link = links[i]
            const url = new URL(link.href)
            if (url.hostname === 'ecomgraduates.com') {
                if (url.search) {
                    url.search += `&ref=${refParam}`
                } else {
                    url.search = `?ref=${refParam}`
                }
                link.href = url.href
            }
        }
    }
}
// addRefParamToUrlsAndSetCookie()
