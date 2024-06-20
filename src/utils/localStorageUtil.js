// Set an item
/**
 * Sets an item in the localStorage.
 *
 * @param {string} key - The key for the item.
 * @param {*} value - The value to be stored.
 */
export const setItem = (key, value) => {
  try {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  } catch (error) {
    console.error(`Error saving ${key} to localStorage`, error);
  }
};

// Get an item
/**
 * Retrieves an item from the localStorage based on the provided key.
 * @param {string} key - The key of the item to retrieve.
 * @returns {any} The retrieved item, or null if the item does not exist or an error occurs.
 */
export const getItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error getting ${key} from localStorage`, error);
    return null;
  }
};

// Remove an item
/**
 * Removes an item from the localStorage based on the provided key.
 *
 * @param {string} key - The key of the item to be removed.
 */
export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing ${key} from localStorage`, error);
  }
};

// Clear all items
/**
 * Clears all data stored in the localStorage.
 * @function clear
 * @returns {void}
 */
export const clear = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage', error);
  }
};
