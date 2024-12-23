import { IComponent } from '../IComponent';

interface HeaderProps extends IComponent {
  text: string;
  type?: 'title-1' | 'title-2' | 'title-3';
}

export const Header = ({
  text,
  type = 'title-1',
  className = '',
}: HeaderProps) => {
  if (type == 'title-1') {
    return <h1 className={`${type} ${className}`.trimEnd()}>{text}</h1>;
  } else if (type == 'title-2') {
    return <h2 className={`${type} ${className}`.trimEnd()}>{text}</h2>;
  } else {
    return <h3 className={`${type} ${className}`.trimEnd()}>{text}</h3>;
  }
};
