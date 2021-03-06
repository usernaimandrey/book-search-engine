import {
    createSlice,
    createEntityAdapter,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import request from '../components/request';
import sortOptions from '../selectOptions/sortingOptions.js';
import categoryOptions from '../selectOptions/categoryOptions.js';

export const getFetchData = createAsyncThunk(
    'books/getFetchData',
    async ({ text, categories, orderBy, startIndex }) => {
        const data = await request(text, categories, orderBy, startIndex);
        return data;
    }
);

export const loadBooks = createAsyncThunk(
    'books/loadBooks',
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
        lng: 'en',
        categoryOptions,
        sortOptions,
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
        setLng: (state, { payload }) => {
            const { value } = payload;
            state.lng = value;
        }
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
                    toast.warning('???? ???????????? ?????????????? ???????????? ???? ????????????????!');
                    state.loading = 'success';
                    state.totalItems = 0;
                    return;
                }
                state.loading = 'success';
                state.totalItems = totalItems;
                booksAdapter.addMany(state, items);
                toast.success('?????? ?????????? ????????????????????!');
            })
            .addCase(getFetchData.rejected, (state, actions) => {
                state.loading = 'failed';
                state.err = actions.error;
                toast.error('?????????????????? ????????????????????');
            });
        builder
            .addCase(loadBooks.fulfilled, (state, { payload }) => {
                const { items } = payload;
                if (!items) {
                    toast.warning('?? ?????????????? ?????? ????????!');
                    state.loading = 'success';
                    return;
                }
                state.loading = 'success';
                booksAdapter.addMany(state, items);
                toast.success('?????????? ????????????????????');
            })
            .addCase(loadBooks.rejected, (state, actions) => {
                state.loading = 'failed';
                state.err = actions.error;
                toast.error('?????????????????? ????????????????????');
            });
    },
});

export const { setParamsReq, setIndex, removeAll, setCoordinates, setLng } =
    booksSlices.actions;

export const selectorsBooks = booksAdapter.getSelectors((state) => state.books);

export default booksSlices.reducer;
