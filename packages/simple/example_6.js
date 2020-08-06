const { EventEmitter } = require('events');
const fetch = require('isomorphic-fetch');

class AsyncEventEmitter extends EventEmitter {
  /**
   *
   * @param {() => Promise<any>} asyncFunc
   * @param  {any[]} args
   */
  execute(asyncFunc, ...args) {
    this.emit('begin');
    console.time('execute');

    this.on('data', data => console.log(`Got data`, data));
    this.on('error', error => console.error(`Throw error`, error));

    asyncFunc(...args)
      .then(data => {
        this.emit('data', data);
      })
      .catch(error => this.emit('error', error))
      .finally(() => {
        console.timeEnd('execute');
        this.emit('end');
      });
  }
}

module.exports = AsyncEventEmitter;

// Example
const asyncEmitter = new AsyncEventEmitter();
asyncEmitter.on('begin', () =>
  console.log('Start executing the async function'),
);
asyncEmitter.on('end', () => console.log('Stop executing the async function'));

const callAPI = url => fetch(url).then(resp => resp.json());

asyncEmitter.execute(callAPI, 'https://jsonplaceholder.typicode.com/posts/10');
