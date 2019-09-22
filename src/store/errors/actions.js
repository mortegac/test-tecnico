import { ERRORS_CLEAN, ERRORS_ADD } from './constants';

const errorsClean = payload => ({
	type: ERRORS_CLEAN,
	payload
});
const errorsAdd = payload => ({
	type: ERRORS_ADD,
	payload
});


export {
	errorsClean,
	errorsAdd
};