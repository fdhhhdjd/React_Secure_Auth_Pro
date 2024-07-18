import { Link, NavLink } from 'react-router-dom';

const ConditionalLink = ({
  to,
  className,
  children,
  useNavLink = false,
  style,
  ...props
}) => {
  const linkStyle = ({ isActive }) =>
    isActive ? { ...style, color: 'green' } : style;

  if (useNavLink) {
    return (
      <NavLink to={to} className={className} style={linkStyle} {...props}>
        {children}
      </NavLink>
    );
  }
  return (
    <Link to={to} className={className} style={style} {...props}>
      {children}
    </Link>
  );
};

export default ConditionalLink;
