interface CircleProps {
  color: string;
  radius: number;
  top: number;
  right: number;
  width: number;
  height: number;
}

export const Circle = ({
  color,
  radius,
  top,
  right,
  width,
  height,
}: CircleProps) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: color,
        borderRadius: radius,
        marginTop: top,
        marginRight: right,
      }}
    />
  );
};
