import * as restify from 'restify'

const mpContentType = 'application/merge-patch+json'

export const mergePatchBodyParser = (req: restify.Request, resp: restify.Response, next) => {
    (<any>req).rawBody = req.body
    if (req.getContentType() === mpContentType && req.method === 'PATCH') {
        try {
            req.body = JSON.parse(req.body);
        } catch (error) {
            return next(new Error(`Invalid content: ${error.message}`))
        }        
    }
    return next()
}