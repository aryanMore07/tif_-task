import { InitialState, Actions } from "../interface/reducers";

export function reducerFuction(state: InitialState, action: Actions): InitialState {
    switch (action.type) {
        case "REQUISATION_TITLE_INPUT:":
            return {
                ...state,
                requisitionDetails: state.requisitionDetails.requisitionTitle = action.payload
            }

        default:
            break;
    }
}