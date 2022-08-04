import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
  images: [],
  categories: [],
  loading: true,
  page: 1,
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

export const fetchCatsByCategories = createAsyncThunk('cats/fetchCatsByCategories',
async (id) => {
  return await fetch(`https://api.thecatapi.com/v1/images/search?limit=${initialState.limit}&page=${initialState.page}&category_ids=${id}`,{
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "1cf30f52-f7b3-4e95-86f7-f8998c988cc0"
    }
  }).then(res => {
    return res.json()
  });
})

export const catSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    loadeMore: (state) => {
      state.page = state.page + 1
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
    builder.addCase(fetchCatsByCategories.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchCatsByCategories.fulfilled, (state, { payload }) => {
      state.loading = false
      state.images = payload
    })
    builder.addCase(fetchCatsByCategories.rejected, (state) => {
      state.loading = false
    })
  }
})

export const { loadeMore } = catSlice.actions

export default catSlice.reducer