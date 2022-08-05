function setValue(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    return false;
  }
}

function getValue(key, defaultValue = '') {
  try {
    const value = localStorage.getItem(key);
    return value;
  } catch (e) {
    return defaultValue;
  }
}

function removeKey(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
}

const StorageService = {
  setValue,
  getValue,
  removeKey,
};

export default StorageService;
