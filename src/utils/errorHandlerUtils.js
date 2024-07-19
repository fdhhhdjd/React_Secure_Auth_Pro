export const handleError = (error, customMessage = 'An error occurred') => ({
  errorMessage: customMessage,
  originalError: error?.response?.data,
  showError: error?.response?.data?.code === 12008
});
