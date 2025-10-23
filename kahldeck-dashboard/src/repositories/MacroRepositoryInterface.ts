import { Macro } from "../domain/Macro";

interface MacroRepositoryInterface {
    getAllMacros(): Promise<Macro[]>;
    addMacro(macro: Macro): Promise<void>;
    removeMacro(uuid: string): Promise<void>;
    updateMacro(macro: Macro): Promise<void>;
    executeMacro(macro: Macro, delay: number): Promise<void>;
}

export default MacroRepositoryInterface;