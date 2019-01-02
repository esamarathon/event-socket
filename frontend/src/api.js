import settings from './settings';

export function apiGet(url, options) {
  return fetch(`${settings.api.baseurl}${url}`, options).then(response => response.json());
}

export function getMessageTypes() {
  return apiGet('/messagetypes');
}
