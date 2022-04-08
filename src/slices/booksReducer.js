import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
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
        coordinates: {},
        err: null,
    }),

    reducers: {
        setParamsReq: (state, { payload }) => {
            state.paramsReq = payload;
        },
        setIndex: (state, { payload: { step } }) => {
            state.paramsReq.startIndex += step;
        },
        removeAll: booksAdapter.removeAll,
        setCoordinates: (state, { payload }) => {
            state.coordinates = payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getFetchData.pending, (state) => {
                state.loading = 'loading';
                state.err = null;
            })
            .addCase(getFetchData.fulfilled, (state, { payload }) => {
                const { totalItems, items } = payload;
                if (!items && !totalItems) {
                    toast.warning('По вашему запросу ничего не найденно!');
                    state.loading = 'success';
                    return;
                }
                if (!items) {
                    toast.warning('В очереди нет книг!');
                    state.loading = 'success';
                    return;
                }
                state.loading = 'success';
                state.totalItems = totalItems;
                booksAdapter.addMany(state, items);
                toast.success('Все книги загруженны!');
            })
            .addCase(getFetchData.rejected, (state, actions) => {
                state.loading = 'failed';
                state.err = actions.error;
                toast.error('Проверьте соеденение или параметры запроса!');
            });
    },
});

export const { setParamsReq, setIndex, removeAll, setCoordinates } =
    booksSlices.actions;

export const selectorsBooks = booksAdapter.getSelectors((state) => state.books);

export default booksSlices.reducer;
