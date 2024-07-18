import React from 'react';

import AuthFormContainer from '@/components/ui/sectionAuth/AuthFormContainer';
import AuthResetPassForm from '@/components/ui/sectionAuth/form/AuthResetPassForm';

const ResetPassword = () => {
  return (
    <React.Fragment>
      <AuthFormContainer title='Reset Password your account'>
        <AuthResetPassForm />
      </AuthFormContainer>
    </React.Fragment>
  );
};

export default ResetPassword;
