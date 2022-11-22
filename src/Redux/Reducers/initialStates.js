const SessionReducer = {
  token: null,
  userData: null,
};

const GeneralReducer = {
  loading: false,
  softLoading: false,
  mySubscription: [],
  services: [],
};

const initialStates = {
  SessionReducer: SessionReducer,
  GeneralReducer: GeneralReducer,
};
export default initialStates;
