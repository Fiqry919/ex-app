"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = require("./interfaces/Route");
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
function Router(op) {
    const router = (0, Route_1.RouterOptions)();
    if ('method' in op) {
        const route = op;
        const path = route.path;
        const identity = `[${route.method.toUpperCase()}]:${path}`;
        if (Route_1.RouteFilter.includes(identity))
            (0, Route_1.RouteDuplicate)(identity);
        Route_1.RouteFilter.push(identity);
        router[route.method](path, route.middleware || [], route.handler);
    }
    else {
        if (!Array.isArray(op.group))
            throw TypeError("Invalid argument of route group");
        if (op.middleware)
            router.use(op.middleware); /** middleware */
        for (let i = 0; i < op.group.length; i++) {
            const route = op.group[i];
            const path = op.prefix ? op.prefix + route.path : route.path;
            const identity = `[${route.method.toUpperCase()}]:${path}`;
            if (Route_1.RouteFilter.includes(identity))
                (0, Route_1.RouteDuplicate)(identity);
            Route_1.RouteFilter.push(identity);
            router[route.method](path, route.middleware || [], route.handler);
        }
    }
    return router;
}
exports.default = Router;
