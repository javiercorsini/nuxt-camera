importScripts('/nuxt-camera/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt-camera/_nuxt/566d44f13170a81b7fa1.js",
    "revision": "afce9c5988475e6e23a27bceea9d2407"
  },
  {
    "url": "/nuxt-camera/_nuxt/7884c910a07f61cdc08c.js",
    "revision": "feeba628842016bb56ca28b09f61e5f7"
  },
  {
    "url": "/nuxt-camera/_nuxt/8a2865caab28cd6ebc2b.js",
    "revision": "079ab67f4f915d0ea251d483d02612ff"
  },
  {
    "url": "/nuxt-camera/_nuxt/b34863f7ac79e7032c15.js",
    "revision": "a4b7da767365e526abb4be20f36e863e"
  },
  {
    "url": "/nuxt-camera/_nuxt/beca2fc9538898c0ea9a.js",
    "revision": "9b05a5b430e51dacad93d3fee984f643"
  },
  {
    "url": "/nuxt-camera/_nuxt/f7b7f84b14fb2be65bb4.js",
    "revision": "97966ecf91fc970600c1a20799a5466a"
  }
], {
  "cacheId": "nuxt-camera",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/nuxt-camera/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/nuxt-camera/.*'), workbox.strategies.networkFirst({}), 'GET')
