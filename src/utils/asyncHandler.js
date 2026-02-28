
// this is wrapper functions. Express.js me agar ham async/await use karte ho aur error aata hai, to Express automatically
//  error catch     nahi karta. isliye wrapper function banate he jo error ko next() ya response ke through handle kare.
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
            catch((err) => next(err))
    }
}


// const asyncHandler = (fn) => async (req, res, next) => {
//         try {
//                 await fn(req, res, next)
//             } catch (err) {
//         res.status((err.code || 5000)).json({
//                 success: false,
//                 message: err.message
//             })
//         }
//     }

export { asyncHandler }