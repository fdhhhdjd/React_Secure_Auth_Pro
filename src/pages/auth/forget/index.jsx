import React from 'react';

import AuthForgetForm from '@/components/ui/sectionAuth/AuthForgetForm';
import AuthFormContainer from '@/components/ui/sectionAuth/AuthFormContainer';

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
