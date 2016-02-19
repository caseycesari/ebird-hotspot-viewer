import AppDispatcher from '../dispatcher/AppDispatcher';
import { Constants } from '../constants/Constants';

export const Actions = {
    setLocation(location) {
        AppDispatcher.dispatch({
            actionType: Constants.SET_LOCATION,
            location,
        });
    },

    setHotspotId(hotspotId) {
        AppDispatcher.dispatch({
            actionType: Constants.SET_HOTSPOT_ID,
            hotspotId,
        });
    },

    setHotspotList(hotspotList) {
        AppDispatcher.dispatch({
            actionType: Constants.SET_HOTSPOT_LIST,
            hotspotList,
        });
    },

    setSightingsList(sightingsList) {
        AppDispatcher.dispatch({
            actionType: Constants.SET_SIGHTINGS_LIST,
            sightingsList,
        });
    },
};
