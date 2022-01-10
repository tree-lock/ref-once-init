import { OnceInit } from "once-init";
import { Ref, ref } from "vue-demi";

export default function oi<T, P extends Array<any>>(
  promise: (...param: P) => Promise<T>,
  defaultValue?: T
): RefOnceInit<T, T, P>;
export default function oi<T, G = T, P extends Array<any> = void[]>(
  promise: (...param: P) => Promise<G>,
  factory: (raw: G, observe: Ref<T | void>) => void
): RefOnceInit<T, G, P>;
export default function oi<T, G = T, P extends Array<any> = void[]>(
  promise: (...param: P) => Promise<G>,
  factory: (raw: G, observe: Ref<T>) => void,
  defaultValue: T
): RefOnceInit<T, G, P>;

export default function oi<T, G = T, P extends Array<any> = void[]>(
  ...args: any[]
): RefOnceInit<T, G, P> {
  if (!(args[0] instanceof Function) || args.length > 3 || args.length < 1) {
    throw new Error("Arguments of oi is not supported");
  }
  const promise: (...param: P) => Promise<G> = args[0];
  if (args.length === 1) {
    return new (class extends RefOnceInit<T, G, P> {
      protected initPromise = promise;
    })();
  } else if (args.length === 2) {
    if (args[1] instanceof Function) {
      const factory: (raw: G, observe: Ref<T | void>) => void | T = args[1];
      return new (class extends RefOnceInit<T, G, P> {
        protected initPromise = promise;
        protected factory = factory;
      })();
    } else {
      const defaultValue: T = args[1];
      return new (class extends RefOnceInit<T, G, P> {
        protected initPromise = promise;
      })(defaultValue);
    }
  }
  const factory: (raw: G, observe: Ref<T | void>) => void = args[1];
  const defaultValue: T = args[2];
  return new (class extends RefOnceInit<T, G, P> {
    protected initPromise = promise;
    protected factory = factory;
  })(defaultValue);
}

export abstract class RefOnceInit<
  T,
  G = T,
  P extends Array<any> = void[]
> extends OnceInit<Ref<T | void>, G, P> {
  loading = ref<boolean>(false);
  protected factory(raw: G, observe: Ref<T | void>): void {
    observe.value = raw as unknown as T;
  }
  constructor(defaultValue?: T) {
    super(ref<T>());
    (this.observe as Ref<T>).value = defaultValue;
    this.onLoading((event) => {
      this.loading.value = event;
    });
  }
}
