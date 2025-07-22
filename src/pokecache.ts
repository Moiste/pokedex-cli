export type CacheEntry<T> = {
  createdAt: number;
  val: T;
}

export class Cache {
  readonly #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  add<T>(key: string, val: T) {
    const entry: CacheEntry<T> = {
      createdAt: Date.now(),
      val
    };
    this.#cache.set(key, entry);
  }

  get<T>(key: string) : T | undefined {
    return this.#cache.get(key)?.val
  }

  #reap() {
    
  }
}