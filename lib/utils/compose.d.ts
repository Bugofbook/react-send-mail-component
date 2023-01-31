type Func<T extends any[], R> = (...a: T) => R;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for the
 * resulting composite function.
 *
 * @param funcs The functions to compose.
 * @returns A function obtained by composing the argument functions from right
 *   to left. For example, `compose(f, g, h)` is identical to doing
 *   `(...args) => f(g(h(...args)))`.
 */
export default function compose(): <R>(a: R) => R;
export default function compose<F extends Function>(f: F): F;
export default function compose<A, T extends any[], R>(f1: (a: A) => R, f2: Func<T, A>): Func<T, R>;
export default function compose<A, B, T extends any[], R>(f1: (b: B) => R, f2: (a: A) => B, f3: Func<T, A>): Func<T, R>;
export default function compose<A, B, C, T extends any[], R>(f1: (c: C) => R, f2: (b: B) => C, f3: (a: A) => B, f4: Func<T, A>): Func<T, R>;
export default function compose<R>(f1: (a: any) => R, ...funcs: Function[]): (...args: any[]) => R;
export default function compose<R>(...funcs: Function[]): (...args: any[]) => R;
export {};