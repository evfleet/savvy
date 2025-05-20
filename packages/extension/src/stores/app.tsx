export interface AppState {
  onboarded: boolean;
}

interface OnboardedAction {
  type: "ONBOARDED";
}

export type AppAction = OnboardedAction;

export const initialState: AppState = {
  onboarded: true,
};

export function reducer(state: AppState, action: AppAction) {
  switch (action.type) {
    default:
      return state;
  }
}
