// API Error Handle

// ApiError ek standard error format provide karta hai jo:
// status code rakhta hai ,, extra errors (validation, etc.) rakhta hai ,, global error handler ke sath perfectly kaam karta hai

class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        // Error kaha se aaya → exact line number

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }