import { createSlice } from '@reduxjs/toolkit'
import { Layout } from '../../domain/Layout'
import { MainState } from '../../stores/main_store'
import LayoutFactory from '../../factory/LayoutFactory'


export interface LayoutListSliceState {
  layouts: Layout[]
  filteredLayouts: Layout[]
}




const initialState: LayoutListSliceState = {
  layouts: [],
  filteredLayouts: [],
}

export const createNewLayout = () => {
  return LayoutFactory.createLayout('New layout', 2, 2, [])
}



export const layoutListSlice = createSlice({
  name: 'layoutList',

  initialState,
  reducers: {
    filterLayouts: (state, action) => {
      state.filteredLayouts = state.layouts.filter(layout => layout.name.toLowerCase().includes(action.payload.toLowerCase()))
    },
    setLayouts: (state, action) => {
      state.layouts = action.payload
    },

  },

})

export const { filterLayouts, setLayouts } = layoutListSlice.actions

export const selectFilteredLayouts = (state: MainState) => state.layoutList.filteredLayouts



export default layoutListSlice.reducer

