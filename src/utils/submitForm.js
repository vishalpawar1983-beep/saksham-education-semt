import { site } from '../data/site';

// All website forms post here. FormSubmit forwards submissions to site.formEmail
// without needing a backend or API key.
// NOTE: the very first submission triggers a one-time activation email to that
// address — click the link in it once to start receiving submissions.
const ENDPOINT = `https://formsubmit.co/ajax/${site.formEmail}`;

/**
 * Submit a set of fields to the configured email.
 * @param {Object} fields  key/value pairs to email
 * @param {string} subject email subject line
 */
export async function submitForm(fields, subject) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: subject || 'New SEMT Website Enquiry',
      _template: 'table',
      _captcha: 'false',
      ...fields,
    }),
  });

  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.success === 'false') {
    throw new Error(json.message || 'Submission failed. Please try again.');
  }
  return json;
}

/**
 * Convenience: build a submit handler from a <form>'s fields.
 * Reads all named inputs via FormData and posts them.
 */
export function makeFormHandler({ subject, extra = {}, onStatus, onDone }) {
  return async (e) => {
    e.preventDefault();
    const formEl = e.target;
    const fields = Object.fromEntries(new FormData(formEl).entries());
    onStatus?.('sending');
    try {
      await submitForm({ ...fields, ...extra }, subject);
      onStatus?.('success');
      formEl.reset();
      onDone?.();
    } catch (err) {
      onStatus?.('error');
    }
  };
}
