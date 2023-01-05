const withCSS = require('@zeit/next-css')
require('dotenv').config()
module.exports =withCSS({ 
    publicRuntimeConfig :{
        APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
        API_DEVELOPMENT:process.env.NEXT_PUBLIC_API,
        PRODUCTION: process.env.NEXT_PUBLIC_PRODUCTION,
        DOMAIN_DEVELOPMENT: process.env.NEXT_PUBLIC_DOMAIN_DEVELOPMENT,
        DISQUS_SHORTNAME: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
        GOOGLE_CLIENT_ID:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        FB_APP_ID: process.env.NEXT_PUBLIC_FB_APP_ID

}
})