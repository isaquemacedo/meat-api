"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mpContentType = 'application/merge-patch+json';
exports.mergePatchBodyParser = (req, resp, next) => {
    req.rawBody = req.body;
    if (req.getContentType() === mpContentType && req.method === 'PATCH') {
        try {
            req.body = JSON.parse(req.body);
        }
        catch (error) {
            return next(new Error(`Invalid content: ${error.message}`));
        }
    }
    return next();
};
