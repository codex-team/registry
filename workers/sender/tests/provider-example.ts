/* eslint-disable */
import NotificationsProvider from '../src/provider';
import { AllNotifications } from '../types/template-variables';

/**
 * Example implementation of abstract provider
 */
export default class ExampleProvider extends NotificationsProvider {
  /**
   * Send method example
   *
   * @param to - endpoint
   * @param variables - template variables
   */
  public async send(to: string, variables: AllNotifications): Promise<void> {
    // console.log(`ExampleProvider: sending to ${to} ... `);
    // console.log('With variables', variables);
  }
}
