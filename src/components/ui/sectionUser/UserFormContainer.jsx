const UserFormContainer = ({ children, title }) => {
  return (
    <section className='py-4 md:py-8 bg-slate-50'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl text-center font-bold leading-tight tracking-tight text-black md:text-2xl'>
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserFormContainer;
