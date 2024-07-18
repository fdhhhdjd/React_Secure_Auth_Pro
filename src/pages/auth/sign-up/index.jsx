import React from 'react';

import AuthFormContainer from '@/components/ui/sectionAuth/AuthFormContainer';
import AuthSignUp from '@/components/ui/sectionAuth/form/AuthSigUpForm';

const SignUp = () => {
  return (
    <React.Fragment>
      <AuthFormContainer title='Sign up to your account'>
        <AuthSignUp />
      </AuthFormContainer>
    </React.Fragment>
  );
};

export default SignUp;
