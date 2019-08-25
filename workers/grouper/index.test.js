const { GrouperWorker } = require('./index');
const { ValidationError, DatabaseError } = require('../../lib/worker');
const mongodb = require('mongodb');

const eventContent = {
  // eslint-disable-next-line camelcase
  projectId: '5d206f7f9aaf7c0071d64596',
  catcherType: 'errors/javascript',
  payload: {
    title: 'Hawk client catcher test',
    timestamp: '2019-08-19T19:58:12.579Z',
    backtrace: []
  }
};

describe('GrouperWorker', () => {
  let worker;

  test('should return right worker type', () => {
    expect(GrouperWorker.type).toEqual('grouper');
  });

  test('should start correctly', async () => {
    worker = new GrouperWorker();
    await worker.start();
  });

  test('should handle right messages', async () => {
    await worker.handle(eventContent);
  });

  test('show save event and return id', async () => {
    const result = await worker.saveEvent('5d206f7f9aaf7c0071d64596', {
      catcherType: 'grouper',
      payload: {
        title: 'testing',
        timestamp: new Date()
      }
    });

    const insertedId = mongodb.ObjectID.isValid(result);
    expect(insertedId).toBe(true);
  });

  test('throw error if project id not mongodb id', async () => {
    expect(
      worker.saveEvent('10', {})
    ).rejects.toThrowError();
  });

  test('throw error if event data not mongodb id', async () => {
    expect(
      worker.saveEvent('5d206f7f9aaf7c0071d64596', {})
    ).rejects.toThrowError();
  });

  test('save repetition should return mongodb id', async () => {
    const result = await worker.saveRepetition('5d206f7f9aaf7c0071d64596',{
      catcherType: 'grouper',
      payload: {
        title: 'testing',
        timestamp: new Date()
      },
    });

    const insertedId = mongodb.ObjectID.isValid(result);
    expect(insertedId).toBe(true);
  });

  test('should finish correctly', async () => {
    await worker.finish();
  });
});
