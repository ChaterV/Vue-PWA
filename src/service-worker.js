
workbox.skipWaiting()
workbox.clientsClaim()

workbox.core.setCacheNameDetails({
  prefix: 'vuecli'
})


workbox.routing.registerRoute(
  /\/manifest\.json/,
  workbox.strategies.staleWhileRevalidate()
)


workbox.routing.registerRoute(
  /\/sw-register\.js/,
  workbox.strategies.networkOnly()
)

workbox.precaching.precacheAndRoute(self.__precacheManifest || [])
