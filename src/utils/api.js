/**
 * Submit a transfer request to Google Sheets.
 * @param {Object} data - { phone, amount, currency, country, direction }
 * @returns {Promise<void>}
 */
export async function submitToSheets(data) {
  // TODO: implement Google Sheets integration
  // const url = process.env.REACT_APP_SHEETS_WEBHOOK_URL;
  // await fetch(url, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
}

/**
 * Send a notification to the Telegram bot.
 * @param {Object} data - { phone, amount, currency, country, direction }
 * @returns {Promise<void>}
 */
export async function notifyTelegram(data) {
  // TODO: implement Telegram bot notification
  // const token = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
  // const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;
  // const text = `Новая заявка: ${data.phone} | ${data.amount} ${data.currency} → ${data.country}`;
  // await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ chat_id: chatId, text }),
  // });
}

/**
 * Submit form data to all configured integrations.
 * @param {Object} data - { phone, amount, currency, country, direction }
 * @returns {Promise<void>}
 */
export async function submitForm(data) {
  await Promise.all([
    submitToSheets(data),
    notifyTelegram(data),
  ]);
}
