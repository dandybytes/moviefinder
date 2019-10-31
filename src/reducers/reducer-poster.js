export const poster = (
    state = {
        posterOptions: [],
        currentPosterIndex: null
    },
    action
) => {
    switch (action.type) {
        case "set_poster_options":
            const {posterOptions} = action;
            return {
                ...state,
                posterOptions,
                currentPosterIndex: posterOptions.length > 0 ? 0 : null
            };
        case "set_current_poster":
            const {currentPosterIndex} = action;
            return {...state, currentPosterIndex};
        default:
            return state;
    }
};
