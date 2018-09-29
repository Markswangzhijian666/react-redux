// const MSG = 'msgArr';
const initialState = [];
let textId = 0;

const reducer = (state  , action) => {
    if(typeof state ==='undefined') state = initialState;
    switch(action.type) {
        case "ADD_MESSAGE" : 
            return [...state,action];//Object.assign({},state,{text:action.text}) Object.assign([], state[MSG], {type:action.type,text:action.text})
        case "TOGGLE_COMPLETED":
             state.map( (item) => {
                if(item.id === action.id){
                    item.completed = !item.completed;
                }
                
            } )
            return [...state]
        default : 
            return state;
    }
}

const addMsg = text => {
    console.log(text);
    return{
        type : "ADD_MESSAGE",
        text,
        id : textId++,
        completed : false
    }
}

const changeCompleted = id =>{
    console.log(id);
    return{
        type : "TOGGLE_COMPLETED",
        id
    }
}

const arr = state =>state.addList;
export {
    reducer as default,
    addMsg,
    arr,
    changeCompleted,
   
}
