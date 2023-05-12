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
  location: {
    coordinate: {
      latitude: 0,
      longitude: 0,
    },
    address: "",
    city: "",
    country: "",
  },
};

const initialStates = {
  SessionReducer: SessionReducer,
  GeneralReducer: GeneralReducer,
};
export default initialStates;
