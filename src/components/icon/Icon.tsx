export type IconProps = {
  name: string;
};

export const Icon = ({ name }: IconProps): JSX.Element => {
  const className = `fas fa-${name.toLowerCase()}`;
  return (
    <span className="icon">
      <i className={className}></i>
    </span>
  );
};
