export const saveDebugResult = (result) => {
  const timestamp = new Date().toISOString();
  const debugEntry = {
    id: Date.now(), 
    timestamp,
    result,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  };

  const existingHistory = getDebugHistory();
  
  const updatedHistory = [debugEntry, ...existingHistory];
  
  const limitedHistory = updatedHistory.slice(0, 5);
  
  localStorage.setItem('debugHistory', JSON.stringify(limitedHistory));
  return debugEntry;
};

export const getDebugHistory = () => {
  try {
    const history = localStorage.getItem('debugHistory');
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Error reading debug history:', error);
    return [];
  }
};

export const clearDebugHistory = () => {
  localStorage.removeItem('debugHistory');
};
