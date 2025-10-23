import { Macro } from "../domain/Macro";
import MacroRepositoryInterface from "./MacroRepositoryInterface";


export default class EelMacroRepository implements MacroRepositoryInterface {
    // @ts-expect-error eel is not defined
    _eel = eel

    async getAllMacros(): Promise<Macro[]> {
        return await this._eel.get_all_macros()();
    }
    async addMacro(macro: Macro): Promise<void> {
        return await this._eel.add_macro(macro)();
    }
    async removeMacro(uuid: string): Promise<void> {
        throw new Error("Method not implemented." + uuid);
    }
    async updateMacro(macro: Macro): Promise<void> {
        throw new Error("Method not implemented." + macro.name);
    }
    async executeMacro(macro: Macro, delay: number=0): Promise<void> {
        return await this._eel.execute_macro(macro, delay)();
    }
}