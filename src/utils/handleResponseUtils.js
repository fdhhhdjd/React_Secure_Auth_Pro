export const handleResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    // Success case
    return {
      success: true,
      message: response?.message,
      status: response?.status,
      reason: response?.reason_status_code,
      metadata: response?.metadata || {},
    };
  }
  // Error case
  return {
    success: false,
    code: response?.code,
    message: response?.message,
    status: response?.status,
    timestamp: response?.now,
  };
};
