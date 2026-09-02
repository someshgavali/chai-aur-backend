const asyncHandler = (requesthandler) => (req, res, next) => {
  Promise.resolve(requesthandler(req, res, next)).catch((error) => next(error));
};
export { asyncHandler };

// Using Try and catch
// const asyncHandler = (fn) => {
//   return async (req, res, next) => {
//     try {
//       await fn(req, res, next);
//     } catch (error) {
//       res.status(error.code || 500).json({
//         sucess: false,
//         message: error.message || "Internal Server Error",
//       });
//       next(error);
//     }
//   };
// };
