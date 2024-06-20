/**
 * Replaces placeholders in a template string with values from a data object.
 *
 * @param {string} template - The template string containing placeholders.
 * @param {Object} data - An object containing the data to replace the placeholders.
 * @returns {string} The template string with placeholders replaced by data values.
 */
export const replaceTemplateStrings = (template, data) =>
  template.replace('/${(w+)}/g', (_, key) => String(data[key]));
