const PAGE_URL = process.env.NODE_ENV ==='production'
? 'placecholder'
: 'http://localhost:3000'

module.exports = { PAGE_URL };