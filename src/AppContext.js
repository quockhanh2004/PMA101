import React, {useState, useContext, createContext} from 'react';

export const AppContext = createContext();

export const AppProvider = props => {
  const {children} = props;
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState([])
  const [detailProduct, setDetailProduct] = useState({})

  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
        user,
        setUser,
        detailProduct,
        setDetailProduct
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
