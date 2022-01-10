import { OnceInit } from "once-init";
import { Ref } from "vue-demi";
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
export declare abstract class RefOnceInit<
  T,
  G = T,
  P extends Array<any> = void[]
> extends OnceInit<Ref<T | void>, G, P> {
  loading: Ref<boolean>;
  protected factory(raw: G, observe: Ref<T | void>): void;
  constructor(defaultValue?: T);
}
