class Base extends Error {
  constructor(msg) {
    super(msg)
  }

  static vueError(err, vm, info) {
    console.error(err);
    console.error('报错组件名称', vm.$options.name);
    console.error('报错位置', info);
  }

  static promiseError(event) {
    console.log('event', event);
    console.warn(`${event.reason}`);
  }
}

export default Base
