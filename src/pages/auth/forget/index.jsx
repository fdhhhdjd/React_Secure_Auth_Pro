import React from 'react';

import AuthFormContainer from '@/components/ui/sectionAuth/AuthFormContainer';
import AuthForgetForm from '@/components/ui/sectionAuth/form/AuthForgetForm';

const Forget = () => {
  return (
    <React.Fragment>
      <AuthFormContainer title='Forget password your account'>
        <AuthForgetForm />
      </AuthFormContainer>
    </React.Fragment>
  );
};

export default Forget;
