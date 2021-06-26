/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

/**
 * useDidMount hook
 * Calls a function on mount
 *
 * @param {Function} callback Callback function to be called on mount
 */
export const useDidMount = (callback: () => void): void => {
  useEffect(callback, []);
};
