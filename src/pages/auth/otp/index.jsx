import React from 'react';

import AuthFormContainer from '@/components/ui/sectionAuth/AuthFormContainer';
import AuthOTPForm from '@/components/ui/sectionAuth/form/AuthOTPForm';

const OTPCode = () => {
  return (
    <React.Fragment>
      <AuthFormContainer title='Enter OTP'>
        <AuthOTPForm />
      </AuthFormContainer>
    </React.Fragment>
  );
};

export default OTPCode;
