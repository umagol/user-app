export const successResponse = function (res: any, msg: any) {
	var data = {
		status: 1,
		message: msg
	};
	return res.status(200).json(data);
};

export const successResponseWithData = function (res: any, msg: any, data: any) {
	var resData = {
		status: 1,
		message: msg,
		data: data
	};
	return res.status(200).json(resData);
};

export const ErrorResponse = function (res: any, msg: any) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(500).json(data);
};

export const notFoundResponse = function (res: any, msg: any) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(404).json(data);
};

export const validationErrorWithData = function (res: any, msg: any, data: any) {
	var resData = {
		status: 0,
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};

export const unauthorizedResponse = function (res: any, msg: any) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(401).json(data);
};