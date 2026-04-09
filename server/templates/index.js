// Email Templates - Central Export
// Usage: import { welcomeEmailTemplate } from './templates';

export { default as contactEmailTemplate } from './contactEmail.js';
export { default as welcomeEmailTemplate } from './welcomeEmail.js';
export { default as subscriptionEmailTemplate } from './subscriptionEmail.js';
export { default as startProjectEmailTemplate } from './startProjectEmail.js';
export { default as bookingEmailTemplate } from './bookingEmail.js';
export { default as quoteEmailTemplate } from './quoteEmail.js';
export { default as commonEmailTemplate } from './commonEmail.js';

/*
USAGE EXAMPLES:

1. contactEmailTemplate({ name, email, subject, message })
2. welcomeEmailTemplate({ name, loginUrl?, supportEmail? })
3. subscriptionEmailTemplate({ name, plan?, price?, billingCycle?, nextBillingDate?, manageUrl? })
4. startProjectEmailTemplate({ clientName, projectName, startDate, deadline, projectManager, dashboardUrl? })
5. bookingEmailTemplate({ clientName, serviceName, bookingDate, bookingTime, location?, bookingRef, calendarUrl?, cancelUrl? })
6. quoteEmailTemplate({ clientName, quoteRef, quoteDate, validUntil, items[], total, currency?, acceptUrl?, contactEmail? })
   - items: [{ description, qty, unitPrice, total }]
*/
