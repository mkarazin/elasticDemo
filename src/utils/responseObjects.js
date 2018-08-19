/**
 *  Generic 200 Success response from API
 * @param res
 * @param data
 * @constructor
 */
const Success = (res, data) => {
  res.status(200).json(
    {
      meta: {
        code: 200,
      },
      data,
    },
  );
};


export {
  Success,
};
