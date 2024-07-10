/**
 * Formats a number as a currency string.
 *
 * @param {number} amount - The amount to be formatted.
 * @param {string} locale - The locale to use for formatting (default is 'en-NG').
 * @param {string} currency - The currency code to use for formatting (default is 'NGN').
 * @returns {string} - The formatted currency string.
 */
function formatCurrency(
  amount: number,
  locale: string = 'en-NG',
  currency: string = 'NGN'
) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

const FormatCurrency = ({ amount }: { amount: number }) => {
  return <p>{formatCurrency(amount, 'en-NG', 'NGN')}</p>;
};

export default FormatCurrency;
