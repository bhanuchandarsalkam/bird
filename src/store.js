import {createStore} from "redux";
import Birdreducer from "./reducer/birdreducer.js";
const Store=createStore(Birdreducer);
export default Store;