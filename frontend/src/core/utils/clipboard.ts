/**
 * @utility copyToClipboard
 * @summary Copies text to clipboard using modern Clipboard API
 * @category core-utility
 * @type utility-function
 *
 * @param {string} text - Text to copy to clipboard
 * @returns {Promise<boolean>} Success status
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const success = document.execCommand('copy');
      textArea.remove();
      return success;
    }
  } catch (error: unknown) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};
