import { Dispatch } from "redux";
import * as keys from "./actionTypeKeys";
import {
  getFeedRequestAction,
  getFeedSuccessAction,
  getFeedFailureAction
} from "./action.interface";
import StoreState from "../store/storeState";

function getFeedRequest(): getFeedRequestAction {
  return {
    type: keys.ActionTypeKeys.GET_FEED_REQUEST
  };
}
function getFeedSuccess(feeds: any): getFeedSuccessAction {
  return {
    type: keys.ActionTypeKeys.GET_FEED_SUCCESS,
    payload: feeds
  };
}
function getFeedFailure(error: Error): getFeedFailureAction {
  return {
    type: keys.ActionTypeKeys.GET_FEED_FAILURE,
    payload: {
      error: error
    }
  };
}

export function getFeed(): (dispatch: Dispatch<StoreState>) => Promise<void> {
  return async (dispatch: Dispatch<StoreState>) => {
    dispatch(getFeedRequest());
    try {
      //await call here
      const feeds: any = [{ id: "123213", title: "aalakrs" }];
      dispatch(getFeedSuccess(feeds));
    } catch (e) {
      dispatch(getFeedFailure(e.message));
    }
  };
}