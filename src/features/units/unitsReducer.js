const unitPresets = {
  metric: {
    temperature: "celsius",
    windSpeed: "km/h",
    precipitation: "mm",
  },

  imperial: {
    temperature: "fahrenheit",
    windSpeed: "mph",
    precipitation: "inch",
  },
};

const initialUnits = unitPresets.metric;

function unitsReducer(state, action) {
  switch (action.type) {
    case "unitSystemChanged": {
      return unitPresets[action.payload];
    }

    case "temperatureChanged": {
      return {
        ...state,
        temperature: action.payload,
      };
    }

    case "windSpeedUnitChanged": {
      return {
        ...state,
        windSpeed: action.payload,
      };
    }

    case "precipitationChanged": {
      return {
        ...state,
        precipitation: action.payload,
      };
    }

    default:
      throw Error("Unknown action:" + action.type);
  }
}

export { unitsReducer, initialUnits };
