/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-restricted-globals */
import { differenceInSeconds, endOfDay } from 'date-fns';
import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { CACHE_NAMES, MAX_ENTRIES, MESSAGE_TYPES } from './swConfig';
import { createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';

clientsClaim();

const ignored = self.__WB_MANIFEST;

const indexFile = ignored?.find((each) => each.url.includes('index.html'));

precacheAndRoute([indexFile]);

// use index.html for any kind of ui route other than static assets
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(({ request, url }) => {
  // If this isn't a navigation, skip.
  if (request.mode !== 'navigate') {
    return false;
  }

  // If this is a URL that starts with /_, skip.
  if (url.pathname.startsWith('/_')) {
    return false;
  }

  // If this looks like a URL for a resource, because it contains // a file extension, skip.
  if (url.pathname.match(fileExtensionRegexp)) {
    return false;
  }

  // Return true to signal that we want to use the handler.
  return true;
}, createHandlerBoundToURL('/index.html'));

const currentDate = new Date();
const cacheExpirationSec = differenceInSeconds(
  endOfDay(currentDate),
  currentDate,
);

registerRoute(
  /\.(?:png|gif|jpg|svg|json|js|css|woff|mp3)$/,
  new CacheFirst({
    cacheName: CACHE_NAMES.STATIC_FILES,
    plugins: [
      new ExpirationPlugin({
        maxEntries: MAX_ENTRIES,
        maxAgeSeconds: cacheExpirationSec,
      }),
    ],
  }),
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === MESSAGE_TYPES.SKIP_WAITING) {
    self.skipWaiting();
  }
});
