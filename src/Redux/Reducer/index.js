import { combineReducers } from "redux";
import { reducerTableData } from "./tableInfoReducer";
import { reducerModal } from "./modalReducer";

const rootReducer = combineReducers({
  reducerTableData,
  reducerModal,
});

export default rootReducer;
