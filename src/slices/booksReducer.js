import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import request from '../components/request';

export const getFetchData = createAsyncThunk(
    'books/getFetchData',
    async ({ text, categories, orderBy, startIndex }) => {
        const data = await request(text, categories, orderBy, startIndex);
        return data;
    }
);

const booksAdapter = createEntityAdapter();

export const booksSlices = createSlice({
    name: 'books',

    initialState: booksAdapter.getInitialState({
        totalItems: 0,
        loading: '',
        paramsReq: {
            text: '',
            categories: '',
            orderBy: '',
            startIndex: 0,
        },
    }),

    reducers: {
        setParamsReq: (state, { payload }) => {
            state.paramsReq = payload;
        },
        setIndex: (state, { payload: { step } }) => {
            state.paramsReq.startIndex += step;
        },
        removeAll: booksAdapter.removeAll,
    },

    extraReducers: (builder) => {
        builder.addCase(getFetchData.fulfilled, (state, { payload }) => {
            const { totalItems, items } = payload;
            if (!items) {
                console.log('По вашему запросу ни чего!!!');
                return;
            }
            state.loading = 'success';
            state.totalItems =
                state.totalItems === 0 ? totalItems : state.totalItems;
            booksAdapter.addMany(state, items);
        });
    },
});

export const { setParamsReq, setIndex, removeAll } = booksSlices.actions;

export const selectorsBooks = booksAdapter.getSelectors((state) => state.books);

export default booksSlices.reducer;
