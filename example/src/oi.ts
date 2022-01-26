import { InitOnceInit } from "once-init";
import { Ref, ref, version } from "vue";
console.log(version);

export default function oi<T, P extends Array<any>>(
  promise: (...param: P) => Promise<T>
): RefOnceInit<T, P>;
export default function oi<T, P extends Array<any>>(
  promise: (...param: P) => Promise<T>,
  defaultValue: T
): InitRefOnceInit<T, P>;

export default function oi<T, P extends Array<any> = void[]>(
  ...args: any[]
): RefOnceInit<T, P> {
  if (!(args[0] instanceof Function) || args.length > 2 || args.length < 1) {
    throw new Error("Arguments of oi is not supported");
  }
  const promise: (...param: P) => Promise<T> = args[0];
  if (args.length === 1) {
    return new (class extends RefOnceInit<T, P> {
      protected initPromise = promise;
    })();
  } else {
    const defaultValue: T = args[1];
    return new (class extends InitRefOnceInit<T, P> {
      protected initPromise = promise;
    })(defaultValue);
  }
}

export abstract class RefOnceInit<T, P extends Array<any>> extends InitOnceInit<
  Ref<T | undefined>,
  T,
  P
> {
  protected declare observe: Ref<T | undefined>;
  get target(): Ref<T | undefined> {
    return super.target as Ref<T | undefined>;
  }
  loading = ref<boolean>(false);
  protected factory(raw: T, observe: Ref<T | undefined>): void {
    observe.value = raw;
  }
  constructor() {
    super(ref<T>());
    this.onLoading((event) => {
      this.loading.value = event;
    });
  }
}

export abstract class InitRefOnceInit<
  T,
  P extends Array<any>
> extends RefOnceInit<T, P> {
  protected declare observe: Ref<T>;
  get target(): Ref<T> {
    return super.target as Ref<T>;
  }
  constructor(defaultValue: T) {
    super();
    this.observe.value = defaultValue;
  }
}
