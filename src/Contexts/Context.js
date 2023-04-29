import React, { createContext, useState } from "react";

export const ShareContext = createContext();

const Context = ({ children }) => {
  // for loading spiner
  const [loading, setLoading] = useState(true);

  const shareContext={loading,setLoading}

  return (
    <div>
      <ShareContext.Provider value={shareContext}>{children}</ShareContext.Provider>
    </div>
  );
};

export default Context;
