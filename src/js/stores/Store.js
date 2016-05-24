import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';
import assign from 'object-assign';
import { Constants } from '../constants/Constants';

let _location = null;
let _hotspotId = null;
let _hotspotList = [];
let _sightingsList = [];

const CHANGE_EVENT = 'change';

function setLocation(location) {
    _location = location;
}

function setHotspot(hotspotId) {
    _hotspotId = hotspotId;
}

function setHotspotList(hotspotList) {
    _hotspotList = hotspotList;
}

function setSightingsList(sightingsList) {
    _sightingsList = sightingsList;
}

export const Store = assign({}, EventEmitter.prototype, {
    getLocation() {
        return _location;
    },

    getHotspotId() {
        return _hotspotId;
    },

    getHotspotList() {
        return _hotspotList;
    },

    getSightingsList() {
        return _sightingsList;
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
