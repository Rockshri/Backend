// const asyncHandler = ()=>{}

//Promise type asyncHandler(Production grade code)

const asyncHandler = (requestHandler) =>{
    return (req, res, next)=>{
         Promise.resolve(requestHandler(req, res, next)).catch((err)=>next(err))
    }
}

export { asyncHandler }

// export { asyncHandler }

// const asyncHandler = ()=>{}
// const asyncHandler = (fn) =>{}

// const asyncHandler = (fn)=> { return async() =>{}}
// const asyncHandler = (fn)=> async()=>{}


//try catch async await types wrapper asyncHandler
// const asyncHandler = (fn)=>async(req, res, next)=>{
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status( error.code || 500 ).json({
//             success: false,
//             message: err.message
//         });
//     }
// }

