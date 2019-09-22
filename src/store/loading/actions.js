import {LOADING_START, LOADING_FINISHED} from './constants';

export const loadingStart = payload => ({
	type: LOADING_START,
	payload
});

export const loadingFinished = payload => ({
	type: LOADING_FINISHED,
	payload
});

export default {
  loadingStart,
  loadingFinished
};
