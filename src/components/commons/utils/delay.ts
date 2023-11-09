export const delay = (promise: Promise<any>, timeout?: number) => {
    if (timeout) {
      const wait = () => new Promise((resolve) => setTimeout(resolve, timeout));
      return Promise.all([promise, wait()]).then(([result]) => result);
    }
    return promise;
  };