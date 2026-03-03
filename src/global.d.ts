// TypeScript type augmentation for next-intl (use-intl v4+).
//
// Augmenting AppConfig.Messages with the shape of en.json gives full
// type-safety for every useTranslations() and getTranslations() call:
// - namespace keys are checked (e.g. 'article_caliza', 'article_hdo', ...)
// - message keys within each namespace are autocompleted and validated
//
// Any new namespace added to en.json is automatically picked up here —
// no manual changes are needed in this file.

import messages from '../messages/en.json'

declare module 'use-intl' {
  interface AppConfig {
    Messages: typeof messages
  }
}
