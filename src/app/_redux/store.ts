import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import { authReducer } from '@/features/users/auth/services';
import { userReducer } from '@/features/users/user/services';
import createWebStorage from 'redux-persist/es/storage/createWebStorage';

const isClient = typeof window !== 'undefined';
const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null as string | null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage = isClient ? createWebStorage('local') : createNoopStorage();

const authPersistConfig = {
  key: 'auth',
  storage: isClient ? storage : createNoopStorage(),
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  users: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
