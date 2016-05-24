import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import assign from 'object-assign';
import { Constants } from '../constants/Constants';

let location = null;
let hotspotId = null;
let hotspotList = [];
let sightingsList = [];

const CHANGE_EVENT = 'change';

function setLocation(updatedLocation) {
    location = updatedLocation;
}

function setHotspot(updatedHotspotId) {
    hotspotId = updatedHotspotId;
}

function setHotspotList(updatedHotspotList) {
    hotspotList = updatedHotspotList;
}

function setSightingsList(updatedSightingsList) {
    sightingsList = updatedSightingsList;
}

export const Store = assign({}, EventEmitter.prototype, {
    getLocation() {
        return location;
    },

    getHotspotId() {
        return hotspotId;
    },

    getHotspotList() {
        return hotspotList;
    },

    getSightingsList() {
        return sightingsList;
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
});

AppDispatcher.register(action => {
    switch (action.actionType) {
            case Constants.SET_LOCATION:
                setLocation(action.location);
                Store.emitChange();
                break;

            case Constants.SET_HOTSPOT_ID:
                setHotspot(action.hotspotId);
                Store.emitChange();
                break;

            case Constants.SET_HOTSPOT_LIST:
                setHotspotList(action.hotspotList);
                Store.emitChange();
                break;

            case Constants.SET_SIGHTINGS_LIST:
                setSightingsList(action.sightingsList);
                Store.emitChange();
                break;

            default:
    }
});
