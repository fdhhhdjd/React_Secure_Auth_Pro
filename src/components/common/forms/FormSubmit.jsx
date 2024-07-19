const FormSubmit = ({ children, key, id, className, onSubmit }) => {
  return (
    <form key={key} id={id} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default FormSubmit;
