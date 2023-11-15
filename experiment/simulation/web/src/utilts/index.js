
export const generateRandomToken = () => {
    
    const min = 10000;
    const max = 99999;
    const token = Math.floor(Math.random() * (max - min + 1)) + min;
    // setRandomToken(token);
    // setShowTokenDialog(true);
    // setCurrentPage('token');
  };