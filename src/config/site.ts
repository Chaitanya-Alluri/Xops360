/**
 * Single source of truth for contact details and market-specific formatting.
 * Keeping these here means a market change (currency, phone, email) is a
 * one-file edit rather than a hunt through every component.
 */

/** Inbound mail is handled by AxiomIO, the parent company, not the product domain. */
export const CONTACT_EMAIL = 'hello@axiomio.com';

export const SALES_PHONE = {
  /** Human-readable, US formatting. */
  display: '+1 (323) 499-3203',
  /** E.164 for the tel: link. */
  href: 'tel:+13234993203',
  /** Hyphenated E.164 for schema.org ContactPoint. */
  schema: '+1-323-499-3203',
};

/** Average observed cost reduction, used by the ROI calculator and copy. */
export const SAVINGS_RATE = 0.22;

/** US-market number formatting. Pinned to en-US so grouping never varies
 *  with the visitor's browser locale. */
export function formatUSD(n: number) {
  return n.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

/** Builds a mailto: with a pre-filled subject and body. */
export function mailto(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
