export const MAX_ENTRIES = 200;

export const CACHE_NAMES = {
  STATIC_FILES: 'static_files',
};

export const MESSAGE_TYPES = {
  SKIP_WAITING: 'SKIP_WAITING',
};

async function clearOldCache() {
  console.log('clearing old cache here...');
  return caches.keys().then(function (keyList) {
    return Promise.all(
      keyList.map((key) => {
        if (Object.values(CACHE_NAMES).includes(key)) {
          return caches.delete(key);
        }
        return null;
      }),
    );
  });
}

const SW_CONFIG = {
  onUpdate: (registration) => {
    // need to check clients.clean
    clearOldCache();
    const sw = registration.waiting;
    if (sw) {
      sw.onstatechange = () => {
        if (sw.state === 'activated') {
          // do not refresh auto. user has to refresh manually...
          window.location.reload();
        }
      };
      sw.postMessage({ type: MESSAGE_TYPES.SKIP_WAITING });
    }
  },
};

export default SW_CONFIG;
