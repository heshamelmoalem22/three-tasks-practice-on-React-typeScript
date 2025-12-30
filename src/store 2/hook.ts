import { useDispatch, useSelector, type TypedUseSelectorHook} from "react-redux";
import type { AppDispatch,RootState } from "./store";

type DispatchFunc = () => AppDispatch;
export const useCartDispatch: DispatchFunc = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector
