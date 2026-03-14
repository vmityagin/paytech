const APPS_SCRIPT_URL = process.env.REACT_APP_APPS_SCRIPT_URL;

/**
 * Read a cookie value by name.
 * @param {string} name
 * @returns {string}
 */
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : '';
}

/**
 * Build a payload object from form data + page context.
 * @param {Object} formData - { type, country, amount, currency, phone, amountRub, commission, total }
 * @returns {Object}
 */
export function buildPayload(formData) {
  const params = new URLSearchParams(window.location.search);
  const utmFields = {};
  for (const [key, value] of params.entries()) {
    utmFields[key] = value;
  }

  return {
    ...formData,
    datetime: new Date().toISOString(),
    url: window.location.href,
    ym_client_id: getCookie('_ym_uid'),
    ...utmFields,
  };
}

/**
 * Submit payload to Google Sheets via Apps Script.
 * @param {Object} payload
 * @returns {Promise<void>}
 */
export async function submitToSheets(payload) {
  await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(payload),
  });
}

/**
 * Send a notification to the Telegram bot.
 * @param {Object} payload
 * @returns {Promise<void>}
 */
export async function notifyTelegram(payload) {
  // TODO: implement Telegram bot notification
  // const token = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
  // const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;
  // const text = `Новая заявка: ${payload.phone} | ${payload.amount} ${payload.currency} → ${payload.country}`;
  // await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ chat_id: chatId, text }),
  // });
}
