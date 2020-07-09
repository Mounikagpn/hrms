export const getLocalTime = (value: any): any => {
	var date = new Date(value),
		mnth = ('0' + (date.getMonth() + 1)).slice(-2),
		day = ('0' + date.getDate()).slice(-2);
	return [ day, mnth, date.getFullYear() ].join('-');
};
export const isBlank = (value: any): boolean => {
	return isNil(value) || (isObject(value) && Object.keys(value).length === 0) || value.toString().trim() === '';
};
export const isNil = (value: any): value is null | undefined => {
	return value === null || value === 'null' || value === 'undefined' || typeof value === 'undefined';
};

export const isObject = (value: any): boolean => {
	return value && value.constructor === Object;
};
