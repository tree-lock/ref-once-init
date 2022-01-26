import { InitOnceInit } from "once-init";
import { Ref } from "vue-demi";
export default function oi<T, P extends Array<any> = []>(
  promise: (...param: P) => Promise<T>
): RefOnceInit<T, P>;
export default function oi<T, P extends Array<any> = []>(
  promise: (...param: P) => Promise<T>,
  defaultValue: T
): InitRefOnceInit<T, P>;
export declare abstract class RefOnceInit<
  T,
  P extends Array<any> = void[]
> extends InitOnceInit<Ref<T | undefined>, T, P> {
  protected observe: Ref<T | undefined>;
  get target(): Ref<T | undefined>;
  loading: Ref<boolean>;
  protected factory(raw: T, observe: Ref<T | undefined>): void;
  constructor();
}
export declare abstract class InitRefOnceInit<
  T,
  P extends Array<any> = void[]
> extends RefOnceInit<T, P> {
  protected observe: Ref<T>;
  get target(): Ref<T>;
  constructor(defaultValue: T);
}
