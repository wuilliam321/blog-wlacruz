import axios from './axios';

const dummyStorage = {
  setItem(key, value) {
    this._keys[key] = value;
  },
  getItem(key, defaultValue = null) {
    if (!this._keys) this._keys = {};
    if (typeof this._keys[key] === 'undefined') return defaultValue;
    return this._keys[key];
  },
  removeItem(key) {
    delete this._keys[key];
  }
};

export function getStorage() {
  return window.localStorage || window.sessionStorage || dummyStorage;
}

function set(key, value) {
  if (typeof value === 'undefined' || value === null) {
    getStorage().removeItem(key);
  } else {
    getStorage().setItem(key, value);
  }
}

function get(key, defaultValue = null) {
  return getStorage().getItem(key) || defaultValue;
}

export function setToken(token = null) {
  if (!token) {
    delete axios.defaults.headers.common['Authorization'];
  } else {
    axios.defaults.headers.common['Authorization'] = token;
  }

  set('_token', token);
}

export function getToken() {
  return get('_token');
}
