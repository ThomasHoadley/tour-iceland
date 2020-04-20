export default (state, action) => {
    switch (action.type) {
        case 'TOGGLE_MUSIC':
            return {
                ...state,
                musicPlaying: action.payload
            }

            break;
        default:
            break;
    }
}