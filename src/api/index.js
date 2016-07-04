import _data from 'mock.json'
const TIMEOUT = 1000

export const loadData = (callback, timeout) => {
	setTimeout(callback(_data), timeout || TIMEOUT)
}