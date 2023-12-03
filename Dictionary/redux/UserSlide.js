import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    profile: {
        username: "",
        password: "",
        english: [],
        vietnamese: [],
        id: ""
    }
}

export const userSlide = createSlice(
    {
        name: 'userSlide',
        initialState,
        reducers: {
            login: (state, action) => {
                state.profile = action.payload;
            },
            newWord: (state, action) => {
                console.log(action.payload)
                state.profile.english.push(action.payload.english);
                state.profile.vietnamese.push(action.payload.vietnamese);
            }
        }
    }
)

export const { login, newWord } = userSlide.actions;

export default userSlide.reducer;