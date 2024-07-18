const FormSubmit = ({ children, id, className, onSubmit }) => {
  return (
    <form id={id} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default FormSubmit;
