import { Option } from "../select-options";

type MapStructureToOption<T> = (structure: T) => Option;

export type MappedSelectProps<T> = {
  options: T[];
  mapToOption: MapStructureToOption<T>;
};

/**
 * MappedSelect is a component meant for taking complex data structures and schemas
 * and converting them to an HTML-based Select.
 *
 * This lets you build selects with options that can handle all kinds of dynamic
 * array data.
 */
export const MappedSelect = () => {};
