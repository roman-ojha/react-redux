var initialState=5;

const mulDivNumber=(state=initialState,action)=>{
    switch(action.type){
        case "Division":
            return state/action.payload;
        case "Multiplication": return state*action.payload;
        default:return state;
    }
}
export default mulDivNumber;