import React from 'react';

import { useDispatch } from 'react-redux';

import Button from '@/components/common/buttons/Button';
import FormSubmit from '@/components/common/forms/FormSubmit';
import OTPInput from '@/components/common/inputs/OTPInput';
import ConditionalLink from '@/components/common/links/ConditionalLink';
import LoadingSpinner from '@/components/common/loadings/LoadingSpinner';
import Paragraph from '@/components/common/paragraph/Paragraph';
import { senOTPGeneral } from '@/features/auth/authThunk';
import useAppSelector from '@/hooks/useAppSelector';

import { RoutePaths } from '@/configs';
import { TIME_CONSTANTS, typeLogin } from '@/constants';
import { cn } from '@/helpers';
import { formatTime, showToastSuccess } from '@/utils';

const AuthOTPForm = () => {
  const { isLoading } = useAppSelector(state => state.auth);

  const [code, setCode] = React.useState();
  const [reset, setReset] = React.useState(false);
  const [countdown, setCountdown] = React.useState(
    TIME_CONSTANTS._15_MINUTES / 1000
  );
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    setCountdown(TIME_CONSTANTS._15_MINUTES / 1000);
  };

  const handleRedirect = (rs, type) => {
    const towFactor = type === typeLogin.LOGIN && rs.payload.status === 200;
    if (towFactor) {
      showToastSuccess('Sign in successfully');
      return (window.location.href = '/');
    }

    setReset(false);

    return null;
  };

  const resendCode = () => {
    setReset(true);
  };

  React.useEffect(() => {
    const handleSendOTP = async () => {
      if (code) {
        console.info(code, 'OK');
        const resultRedux = await dispatch(
          senOTPGeneral({
            otp: code
          })
        );
        handleRedirect(resultRedux, typeLogin.LOGIN);
      }
    };
    handleSendOTP();
    return () => setCode();
  }, [code]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(currentTime => {
        if (currentTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return currentTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <React.Fragment>
      <FormSubmit className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
        <Paragraph className='text-gray-600 text-center mb-4'>
          Code sent to: <b className='text-orange-400'>+8479880541</b>
        </Paragraph>
        <OTPInput
          length={6}
          onComplete={otp => setCode(otp)}
          resetFlag={reset}
        />
        {isLoading && <LoadingSpinner />}

        <div className='flex items-center justify-between'>
          <Button
            className='px-3 py-2 text-sm font-medium text-center rounded text-gray-600 hover:text-orange-500'
            onClick={resendCode}
          >
            Resend Code
          </Button>
          <Button className='px-3 py-2 text-sm font-medium text-center rounded text-gray-600 hover:text-orange-500'>
            Request Again:&nbsp;
            <b
              className={cn(
                countdown <= TIME_CONSTANTS._1_MINUTES / 1000
                  ? 'text-red-400'
                  : 'text-green-400'
              )}
            >
              {formatTime(countdown)}
            </b>
          </Button>
        </div>

        <Paragraph className='text-sm font-light text-gray-500'>
          Do you already have an account ? &nbsp;
          <ConditionalLink
            className='font-medium text-orange-500 hover:underline'
            to={RoutePaths.AUTH.SIGN_IN}
          >
            Sign In
          </ConditionalLink>
        </Paragraph>
      </FormSubmit>
    </React.Fragment>
  );
};

export default AuthOTPForm;
