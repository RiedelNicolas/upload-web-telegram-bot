/**
 * Validates whether a given string is a valid URL.
 *
 * @param {string} url - The URL string to validate.
 * @returns {boolean} - Returns `true` if the URL is valid, otherwise `false`.
 *
 * @example
 * isValidLink("https://example.com"); // true
 * isValidLink("invalid-url"); // false
 */
export const isValidLink = (url?: string): boolean => {
    if (!url) return false;
    const urlPattern = /^(https?:\/\/)((?!-)(?!.*--)[a-zA-Z\-0-9]{1,63}(?<!-)\.)+[a-zA-Z]{2,63}(\/[^\s]*)?$/;
    return urlPattern.test(url);
}