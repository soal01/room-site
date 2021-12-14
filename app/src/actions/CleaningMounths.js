import {schema, normalize} from 'normalizr';
import { SET_MOUNTH_LIST } from '../reducers/CleaningMounth';
import { ApiClientService } from '../services/ApiClientService';

const cleaningMounthSchema = new schema.Entity('cleaning_mounth');

function setMounths(data) {
    //console.log(data);
    const {result, entities} = normalize(data, [cleaningMounthSchema]);
    //console.log(result);
    
    return {
        type: SET_MOUNTH_LIST,
        payload: {
            mounthList: result,
            mounths: entities.cleaning_mounth,
        },
    };
}


export function fetchCleaningMounths() {
    return async (dispatch) => {
        const data = await ApiClientService('cleaning_mounths/');
        dispatch(setMounths(data));
    };
}