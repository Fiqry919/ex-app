import { RouterOptions } from "./interfaces/Route";
/**
 * Compiler express router
 * @example
 * ```js
 * Router({ method: 'get', path: '/foo' handler: Handler.foo, middleware: foo_middleware });
 * ```
 * group
 * ```js
 * Router({
 *   prefix: '/foo', group: [
 *      { method: 'get', path: '/bar' handler: Handler.bar, middleware: bar_middleware }
 *   ], middleware: [ foo_middleware ]
 * })
 * ```
 */
export default function Router(op: RouterOptions): import("express-serve-static-core").Router;
