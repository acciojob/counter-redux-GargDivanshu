import { INCREMENT, DECREASE } from "./actiontypes";

export function incrementAction() {
    return {
      type: INCREMENT,
    };
  }
export function decreaseAction() {
  return{
    type: DECREASE,
  };
}