export const itemsmodule = (state={datas:[]},action)=>{
    switch(action.type){
        case "datas_request":
            return {loading:true,datas:[]};
        case "datas_success":
            return {loading:false,datas:action.payload};
        case "datas_fail":
            return {loading:false,error:action.payload};
        default:
            return state;
    }
}