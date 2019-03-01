const initialState = {
    saveColors : [],
    nextColors: [
        "#" + Math.random().toString(16).slice(2, 8).toUpperCase(),
        "#" + Math.random().toString(16).slice(2, 8).toUpperCase(),
        "#" + Math.random().toString(16).slice(2, 8).toUpperCase(),
        "#" + Math.random().toString(16).slice(2, 8).toUpperCase()
    ]
}

const reducer = (state = initialState, action) => {
    const { type } = action;
    if(type === 'SAVE_COLOR'){
        return {
            saveColors: state.saveColors.concat(state.nextColors[0]),
            nextColors: [
                ...state.nextColors.splice(1), 
                "#" + Math.random().toString(16).slice(2, 8).toUpperCase()
            ]
        }
    } else if (type === 'NEXT_COLOR'){
        return {
            ...state,
            nextColors: [
                ...state.nextColors.splice(1), 
                "#" + Math.random().toString(16).slice(2, 8).toUpperCase()
            ]
        }
    } else{
        return state;
    }
}

export default reducer;