import { Select, SelectProps } from "../select";
import { Option, SelectOptions } from "../select-options";

type MapStructureToOption<T extends Record<string, unknown>> = (
  structure: T
) => Option;

export type MappedSelectProps<T extends Record<string, unknown>> =
  SelectProps & {
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
export const MappedSelect = <T extends Record<string, unknown>>({
  options,
  mapToOption,
}: MappedSelectProps<T>): JSX.Element => {
  const mappedOptions = options.map((option) => mapToOption(option));
  return (
    <Select>
      <SelectOptions options={mappedOptions} />
    </Select>
  );
};
