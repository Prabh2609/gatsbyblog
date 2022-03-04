const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'mxb0g13x',
  dataset: 'production',
  apiVersion: '2022-03-04', // use current UTC date - see "specifying API version"!
  token: 'skE3f51PxHMmI1f82Z90jAsiRkptuXzeEChCbWANbvdH26cSjpA2j403xA69RJq4azFZTQ0DWWW8UZPftpBUIvxiff9DLGik9OfZPmZ8Zi6fyhip9rcNxjsEwXxCEVecpzLetvR1ARKpoKcNXTwlrflnyGzhowd9nTu725KEHCDzg7Ytt2XT', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})

export default client