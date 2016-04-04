/**
 * Created by xu on 2016/4/4.
 */
import {
    SET_HEADER_TITLE
} from './mutation-types'
export const setTitle = makeAction(SET_HEADER_TITLE)
function makeAction(type){
    return ({dispatch},...args)=>dispatch(type,...args)
}