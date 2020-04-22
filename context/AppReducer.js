export default (state, action) => {
    switch (action.type) {
        case 'TOGGLE_MUSIC':
            return {
                ...state,
                musicPlaying: action.payload
            }

            break;

        case 'TOGGLE_INTRO_COMPETE':
            return {
                ...state,
                introComplete: action.payload
            }

            break;
        default:
            break;
    }
}