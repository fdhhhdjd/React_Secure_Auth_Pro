const Paragraph = ({ children, className = '', style = {}, ...props }) => {
  return (
    <p className={className} style={style} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
