// src/hooks/useDebounce.js

import { useState, useEffect } from '@wordpress/element';

/**
 * Custom hook for debouncing a value.
 *
 * @param {any} value - The value to debounce.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {any} - The debounced value after the specified delay.
 */
const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		// Set a timeout to update the debounced value after the delay
		const handler = setTimeout(() => setDebouncedValue(value), delay);

		// Cleanup function to clear the timeout if the effect reruns before the delay completes
		return () => clearTimeout(handler);
	}, [value, delay]); // Re-run effect only if value or delay changes

	return debouncedValue;
};

export default useDebounce;
