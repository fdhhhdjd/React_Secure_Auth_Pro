import React from 'react';

import AuthFormContainer from '@/components/ui/sectionAuth/AuthFormContainer';
import AuthLoginForm from '@/components/ui/sectionAuth/form/AuthSignInForm';

const SignIn = () => {
  return (
    <React.Fragment>
      <AuthFormContainer title='Sign in to your account'>
        <AuthLoginForm />
      </AuthFormContainer>
    </React.Fragment>
  );
};

export default SignIn;
