import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Button } from '../domain/Button'
import { Layout } from '../domain/Layout';
import LayoutProvider from '../providers/LayoutProvider'
import LayoutToSelect from '../enums/LayoutToSelect';

const layoutProvider = new LayoutProvider()

export interface LayoutSliceState {
  layouts: Layout[]
  selectedLayout: Layout
  selectedButton: Button
  loading: boolean
  error?: string
}

const initialState: LayoutSliceState = {
  layouts: [],
  selectedLayout: undefined as unknown as Layout,
  selectedButton: undefined as unknown as Button,
  loading: false,
  error: undefined,
}

export const fetchLayouts = createAsyncThunk('layoutList/fetchLayouts', async () => {
  const layouts = await layoutProvider.getLayouts()
  return layouts
})

export const updateLayout = createAsyncThunk<Layout, Layout, { rejectValue: string }>(
  'layoutList/updateLayout',
  async (updatedLayout: Layout, { rejectWithValue }) => {
    try {
      const result = await layoutProvider.updateLayout(updatedLayout);
      return result;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  }
);

export const addLayout = createAsyncThunk<Layout, Layout, { rejectValue: string }>(
  'layoutList/addLayout',
  async (newLayout: Layout, { rejectWithValue }) => {
    try {
      const result = await layoutProvider.addLayout(newLayout);
      return result;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An unknown error occurred');
    }
  }
);

export const layoutSlice = createSlice({
  name: 'layout',

  initialState,
  reducers: {

    removeLayout: (state, action) => {
      state.layouts = state.layouts.filter(layout => layout.uuid !== action.payload)
    },
    viewThisLayout: (state, action) => {
      state.selectedLayout = action.payload
    },
    selectButton: (state, action) => {
      state.selectedButton = action.payload
    },
    unselectButton: (state) => {
      state.selectedButton = undefined as unknown as Button
    },
    selectLayoutToSelect: (state, action) => {
      if (action.payload === LayoutToSelect.Last) {
        state.selectedLayout = state.layouts[state.layouts.length - 1]
      } else if (action.payload === LayoutToSelect.First) {
        state.selectedLayout = state.layouts[0]
      } else if (action.payload === LayoutToSelect.None) {
        state.selectedLayout = undefined as unknown as Layout
      } else if (action.payload === LayoutToSelect.Keep) {
        // nothing to do
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLayouts.pending, (state) => {
        state.loading = true
        state.error = undefined // Clear error on new request
      })
      .addCase(fetchLayouts.fulfilled, (state, action) => {
        state.layouts = action.payload
      })
      .addCase(fetchLayouts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to load layouts'
      })

      .addCase(updateLayout.pending, (state) => {
        state.loading = true
        state.error = undefined
      })
      .addCase(updateLayout.fulfilled, (state, action) => {
        const updatedLayoutIndex = state.layouts.findIndex(layout => layout.uuid === action.payload.uuid)
        if (updatedLayoutIndex !== -1) {
          state.layouts[updatedLayoutIndex] = action.payload
          if (state.selectedLayout.uuid === action.payload.uuid) {
            state.selectedLayout = action.payload
          }
        }
        state.loading = false
      })
      .addCase(updateLayout.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string || 'Failed to update layout'
      })

      .addCase(addLayout.pending, (state) => {
        state.loading = true
        state.error = undefined
      })
      .addCase(addLayout.fulfilled, (state, action) => {
        state.layouts.push(action.payload)
        state.loading = false
      })
      .addCase(addLayout.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string || 'Failed to add layout'
      })
  },
})


export const { removeLayout, viewThisLayout, selectButton, unselectButton, selectLayoutToSelect } = layoutSlice.actions
export const selectLayouts = (state: LayoutSliceState) => state.layouts
export const selectSelectedLayout = (state: LayoutSliceState) => state.selectedLayout
export const selectSelectedButton = (state: LayoutSliceState) => state.selectedButton

export default layoutSlice.reducer