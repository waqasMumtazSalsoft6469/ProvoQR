const SessionReducer = {
  token: null,
  userData: null,
};

const GeneralReducer = {
  loading: false,
  softLoading: false,
  mySubscription: [],
  billingDetails: null,
  categories: [],
  notificationCount: null,
  restaurant_id: null,
};

const initialStates = {
  SessionReducer: SessionReducer,
  GeneralReducer: GeneralReducer,
};
export default initialStates;
