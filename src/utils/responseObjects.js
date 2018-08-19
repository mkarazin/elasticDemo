/**
 * Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot"
 * @param res Express response object
 */
const ImATeaPot = (res) => {
  res.status(418).json(
    {
      errors: {
        status: 418,
        title: 'IM_A_TEAPOT',
        detail: 'Body is short and stout',
      },
    },
  );
};

/**
 * Generic 200 Success response from API
 * @param res Express response object
 * @param data Data object to include
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

/**
 * Generic 401 invalid parameters error to return from the API
 * @param res Express response object
 * @param detailedMessage A string message to include in response
 */
const InvalidParameters = (res, detailedMessage) => {
  res.status(401).json(
    {
      errors: {
        status: 401,
        title: 'INVALID_PARAMETER',
        detail: detailedMessage,
      },
    },
  );
};

export {
  Success,
  InvalidParameters,
};
