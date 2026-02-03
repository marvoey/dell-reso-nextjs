/**
 * Environment Variables Type Definitions
 *
 * This file provides JSDoc type definitions for environment variables
 * to enable IDE autocomplete and validation in JavaScript projects.
 *
 * Usage in your files:
 * /// <reference path="./env.d.js" />
 *
 * Or configure in jsconfig.json (recommended - see below)
 */

/**
 * @typedef {Object} ProcessEnv
 * @property {string} OPTIMIZELY_CMS_URL - The URL to the CMS, without the path
 * @property {string} OPTIMIZELY_GRAPH_SECRET - Optimizely Graph Secret Key
 * @property {string} OPTIMIZELY_GRAPH_APP_KEY - Optimizely Graph App Key
 * @property {string} OPTIMIZELY_GRAPH_SINGLE_KEY - Optimizely Graph Single Key
 * @property {string} OPTIMIZELY_GRAPH_GATEWAY - Optimizely Graph Gateway URL
 * @property {string} OPTIMIZELY_CLIENT_ID - Optimizely API Client ID
 * @property {string} OPTIMIZELY_CLIENT_SECRET - Optimizely API Client Secret
 * @property {string} OPTIMIZELY_DATA_PLATFORM_ENDPOINT - Optimizely Data Platform Endpoint
 * @property {string} OPTIMIZELY_DATA_PLATFORM_PRIVATE_KEY - Optimizely Data Platform Private Key
 * @property {string} CMP_API_BASE_URL - CMP API Base URL
 * @property {string} CMP_OAUTH_CLIENT_ID - CMP OAuth Client ID
 * @property {string} CMP_OAUTH_CLIENT_SECRET - CMP OAuth Client Secret
 * @property {string} CMP_AUTH_SERVER_URL - CMP Auth Server URL
 * @property {string} CMP_PREVIEW_URL - CMP Preview URL
 * @property {string} CMP_CONTENT_TYPES - Comma-separated list of content types
 * @property {string} ADMIN_DASHBOARD_USERNAME - Admin Dashboard Username
 * @property {string} ADMIN_DASHBOARD_PASSWORD - Admin Dashboard Password
 * @property {string} [PREVIEW_DELAY] - Optional preview delay in milliseconds
 * @property {string} OPTIMIZELY_DAM_ENABLED - Whether DAM is enabled (true/false)
 * @property {string} OPTIMIZELY_FORMS_ENABLED - Whether Forms are enabled (true/false)
 * @property {string} EXTERNAL_PREVIEW_ENABLED - Whether external preview is enabled (true/false)
 * @property {string} EXTERNAL_PREVIEW_TOKEN - External preview token
 * @property {string} OPTIMIZELY_DEV_MODE - Development mode flag (true/false)
 * @property {string} [OPTIMIZELY_FX_SDK_KEY] - Optional Feature Experimentation SDK Key
 * @property {string} OPTIMIZELY_WEBEX_API_TOKEN - Web Experimentation API Token
 */

/**
 * @typedef {Object} Process
 * @property {ProcessEnv} env
 */

// Augment the global process object
// This enables autocomplete for process.env in your IDE
if (false) {
  /** @type {Process} */
  global.process;
}
