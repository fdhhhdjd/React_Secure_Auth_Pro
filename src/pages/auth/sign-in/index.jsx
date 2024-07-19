import React from 'react';

import AuthFormContainer from '@/components/ui/sectionAuth/AuthFormContainer';
import AuthSignInForm from '@/components/ui/sectionAuth/form/AuthSignInForm';

const SignIn = () => {
  return (
    <React.Fragment>
      <AuthFormContainer title='Sign in to your account'>
        <AuthSignInForm />
      </AuthFormContainer>
    </React.Fragment>
  );
};

export default SignIn;
