importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0d4a39edbce23b22dffe.js",
    "revision": "db59746e480c20f4277654cb1124f510"
  },
  {
    "url": "/_nuxt/566d44f13170a81b7fa1.js",
    "revision": "afce9c5988475e6e23a27bceea9d2407"
  },
  {
    "url": "/_nuxt/7884c910a07f61cdc08c.js",
    "revision": "feeba628842016bb56ca28b09f61e5f7"
  },
  {
    "url": "/_nuxt/a674bbb7d388347d6b49.js",
    "revision": "8155998d51e609b036fef012dc78db7a"
  },
  {
    "url": "/_nuxt/beca2fc9538898c0ea9a.js",
    "revision": "9b05a5b430e51dacad93d3fee984f643"
  },
  {
    "url": "/_nuxt/f7b7f84b14fb2be65bb4.js",
    "revision": "97966ecf91fc970600c1a20799a5466a"
  }
], {
  "cacheId": "nuxt-camera",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
