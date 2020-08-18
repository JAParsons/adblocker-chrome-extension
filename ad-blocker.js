const blacklist = ['*://*.zedo.com/*'];

chrome.webRequest.onBeforeRequest.addListener(
  () => {
    return { cancel: true };
  },
  { urls: blacklist },
  ['blocking']
);
