import 'nprogress/nprogress.css';

import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

let timer: NodeJS.Timeout,
  state: string,
  activeRequests = 0;
const delay = 250;

const load = () => {
  if (state === 'loading') return;

  state = 'loading';

  timer = setTimeout(() => {
    NProgress.start();
  }, delay);
};

const stop = () => {
  if (activeRequests > 0) return;

  state = 'stop';

  clearTimeout(timer);
  NProgress.done();
};

const originalFetch = window.fetch;

export default function () {
  window.fetch = async function (...args) {
    if (activeRequests === 0) load();

    activeRequests++;

    try {
      const response = await originalFetch(...args);
      if (response.ok) return response;

      const data = await response.json();
      throw new Error(data.error?.message ?? response.statusText);
    } catch (error) {
      return Promise.reject(error);
    } finally {
      activeRequests--;
      if (activeRequests == 0) stop();
    }
  };
}
