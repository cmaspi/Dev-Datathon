export const refreshTokenSetup = (res) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  
  const refreshToken = async () => {
    const newAuthResponse = await res.reloadAuthResponse();
    refreshTiming = (newAuthResponse.expires_in || 3600 - 5 * 60) * 1000;
    localStorage.setItem('tokenid',newAuthResponse.id_token);

    setTimeout(refreshToken, refreshTiming);
  };

  setTimeout(refreshToken, refreshTiming);
};
