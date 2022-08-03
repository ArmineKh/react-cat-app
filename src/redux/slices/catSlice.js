import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
  images: [],
  categories: [],
  loading: true,
  page: 0,
  limit: 10
}

export const fetchCats = createAsyncThunk('cats/fetchCats',

async () => {
  return await fetch(`https://api.thecatapi.com/v1/images/search?limit=${initialState.limit}&page=${initialState.page}`,{
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "1cf30f52-f7b3-4e95-86f7-f8998c988cc0"
    }
  }).then(res => res.json());
  
})

export const fetchCatsCategories = createAsyncThunk('cats/fetchCatsCategories',
async () => {
  return await fetch(`https://api.thecatapi.com/v1/categories`,{
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "1cf30f52-f7b3-4e95-86f7-f8998c988cc0"
    }
  }).then(res => res.json());
})

export const catSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    loadeMore: (state) => {
      state.page = state.page + 1
    },
    getCatsByCategories:  (state, {payload}) => {
      state.images = state.images.filter(item => item.categories.some(i => i.id === payload))
    },
  },
  extraReducers: builder => {
    
    builder.addCase(fetchCats.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchCats.fulfilled, (state, { payload }) => {
      state.loading = false
      state.images = [...state.images, ...payload]
    })
    builder.addCase(fetchCats.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(fetchCatsCategories.fulfilled, (state, { payload }) => {
      state.categories = payload
    })
    
  }
})

export const {  loadeMore, getCatsByCategories } = catSlice.actions

export default catSlice.reducer