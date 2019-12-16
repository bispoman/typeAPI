import * as axios from 'axios';

export function validateReturns(num) {
    if (num != null) {
        var parsedInt = Number(num);
        if (!isNaN(parsedInt)) {
            return true;
        }
    }
    return false;
}

export function getCharacters(num) {

}