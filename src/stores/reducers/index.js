import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import app from "./app";
import user from "./user";
import encryptor from "./encryptor";
import createCompressor from "redux-persist-transform-compress";

const compressor = createCompressor();
const config = {
  blacklist: ["app", "network", "toast"],
  key: "primary",
  storage,
  transforms: [encryptor, compressor],
};

const reducers = () =>
  persistCombineReducers(config, {
    app,
    user,
  });

export default reducers;
