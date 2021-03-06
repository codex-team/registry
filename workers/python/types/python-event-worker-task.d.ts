import { EventWorkerTask } from '../../../lib/types/event-worker-task';
import { DecodedEventData } from 'hawk.types';

/**
 * Describe a context passed from Python Catcher
 */
interface PythonEventPayload extends DecodedEventData {}

/**
 * Format of task for Python Event Worker
 */
export interface PythonEventWorkerTask extends EventWorkerTask {
  /**
   * Language-specific payload
   */
  payload: PythonEventPayload;
}
