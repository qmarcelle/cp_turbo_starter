type SpacerProps = {
  size: number;
  axis?: 'vertical' | 'horizontal';
  style?: React.CSSProperties;
};

export const Spacer = ({
  size,
  axis = 'vertical',
  style = {},
}: SpacerProps) => {
  const width = axis === 'vertical' ? 1 : size;
  const height = axis === 'horizontal' ? 1 : size;
  return (
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
    />
  );
};

type SpacerXProps = {
  size: number;
  style?: React.CSSProperties;
};

export const SpacerX = ({ size, style }: SpacerXProps) => {
  return (
    <span
      style={{
        display: 'block',
        width: size,
        minWidth: size,
        height: 1,
        minHeight: 1,
        ...style,
      }}
    />
  );
};
