/**
 * @file Types for process.env
 */

declare namespace NodeJS {
  export interface ProcessEnv {
    /**
     * Database name with events
     */
    EVENTS_DB_NAME: string;

    /**
     * Database name with accounts
     */
    ACCOUNTS_DB_NAME: string;

    /**
     * How long to store events (in days)
     */
    MAX_DAYS_NUMBER: string;
  }
}
