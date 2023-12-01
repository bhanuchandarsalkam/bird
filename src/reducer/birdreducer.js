import {ADD_BIRD,DELETE_BIRD,LIKE_BIRD} from "../actions/actiontype.js";

const initialstate=[];

const Birdreducer=(state=initialstate,action)=>{
    if(action.type==ADD_BIRD){
        return[...state,action.payload];
    }
    else if(action.type==LIKE_BIRD){
        let newarr=JSON.stringify(state);
        let arr=JSON.parse(newarr);
        arr.forEach(val=>{
            if(val.id==Number(action.payload)){
                val.likes++;
            }
        })
        return arr;
    }
    else if(action.type==DELETE_BIRD){
        return state.filter(val=>Number(action.payload)!=val.id);
    }
    return state;
}
export default Birdreducer;