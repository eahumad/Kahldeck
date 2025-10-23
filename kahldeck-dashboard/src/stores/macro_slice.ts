import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Macro } from "../domain/Macro";
import MacroProvider from "../providers/MacroProvider";

const macroProvider = new MacroProvider()

export interface MacroSliceState {
    macros: Macro[]
    loading: boolean,
    error?: string
}

const initialState: MacroSliceState = {
    macros: [],
    loading: false,
    error: undefined
}

export const getAllMacros = createAsyncThunk('layoutList/getAllMacros', async () => {
    const macros = await macroProvider.getAllMacros()
    return macros
})

export const executeMacro = createAsyncThunk('layoutList/executeMacro', async (macro: Macro) => {
    await macroProvider.executeMacro(macro, 5)
})

export const addMacro = createAsyncThunk('layoutList/addMacro', async (macro: Macro) => {
    return await macroProvider.addMacro(macro)
})



export const MacroSlice = createSlice({
    name: 'macro',
    initialState,
    reducers: {
        setMacros: (state, action) => {
            state.macros = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllMacros.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(getAllMacros.fulfilled, (state, action) => {
                state.macros = action.payload
            })
            .addCase(getAllMacros.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || 'Failed to search macros'
            })
            
            .addCase(executeMacro.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(executeMacro.fulfilled, (_state, _action) => {
                
                // nothing to do
            })
            .addCase(executeMacro.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string || 'Failed to execute macro'
            })

            .addCase(addMacro.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(addMacro.fulfilled, (state, action) => {
                state.macros.push(action.payload)
            })
            .addCase(addMacro.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string || 'Failed to add macro'
            })
    }
})

export const { setMacros } = MacroSlice.actions

export const selectMacros = (state: MacroSliceState) => state.macros

export default MacroSlice.reducer