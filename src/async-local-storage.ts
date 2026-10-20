// Safe stub for AsyncLocalStorage in client/mobile environments
export class AsyncLocalStorage {
  private store: any = null;
  disable(): void {}
  getStore(): any { return this.store; }
  run<T>(store: any, callback: (...args: any[]) => T, ...args: any[]): T {
    this.store = store;
    try {
      return callback(...args);
    } finally {
      this.store = null;
    }
  }
  enterWith(store: any): void {
    this.store = store;
  }
}
