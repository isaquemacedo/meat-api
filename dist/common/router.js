"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Router {
}
exports.Router = Router;
// this.application.get('/info', [(req, resp, next) => {
//     if (req.userAgent() && req.userAgent().includes('MSIE 7.0')) {
//       //resp.status(400)
//       //resp.send({message: 'Please, update your browser'})
//       let error: any = new Error()
//       error.statusCode = 400
//       error.message = 'Please, update your browser'
//       return next(error)
//     }
//     return next()
//   },
//   (req, resp, next) => {
//     // resp.contentType = 'application/json'
//     // resp.setHeader('Content-Type', 'application/json');
//     // resp.status(201)
//     // resp.send({message: 'hello'})
//     resp.json({
//       browser: req.userAgent(),
//       method: req.method,
//       url: req.href(),
//       path: req.path(),
//       query: req.query
//     })
//     return next()
//   }]);
