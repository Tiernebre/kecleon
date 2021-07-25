// specific ESLint disable. This hook is built
// to get past this specific check that should be used
// in other React code.
/* eslint-disable react-hooks/exhaustive-deps */

import { EffectCallback, useEffect } from "react";

/**
 * useDidMount hook
 * Calls a function on mount
 *
 * @param {Function} callback Callback function to be called on mount
 */
export const useDidMount = (callback: EffectCallback): void => {
  useEffect(callback, []);
};
