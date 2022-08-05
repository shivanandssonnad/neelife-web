import Icons from './icons.svg';

function Icon({ name, color, width = 16, height = 16, ...rest }) {
  return (
    <svg
      preserveAspectRatio="xMidYMin meet"
      className={`icon icon-${name}`}
      fill={color}
      width={width}
      height={height}
      {...rest}>
      <use xlinkHref={`${Icons}#src--assets--icons--${name}`} />
    </svg>
  );
}
export default Icon;
