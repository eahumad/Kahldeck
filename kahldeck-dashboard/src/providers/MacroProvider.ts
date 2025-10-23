import { Macro } from "../domain/Macro";
import EelMacroRepository from "../repositories/EelMacroRepository";
import MacroRepositoryInterface from "../repositories/MacroRepositoryInterface";

class MacroProvider {
    private static instance: MacroProvider;
    private macroRepository: MacroRepositoryInterface;

    public constructor() {
        // if( import.meta.env.PROD ) {
        //     this.macroRepository = new EelMacroRepository();
        // } else {
        //     this.macroRepository = new DummyMacroRepository();
        // }
        this.macroRepository = new EelMacroRepository();
    }

    static getInstance(): MacroProvider {

        if (!MacroProvider.instance) {
            MacroProvider.instance = new MacroProvider();
        }

        return MacroProvider.instance;
    }

    async getAllMacros(): Promise<Macro[]> {
        return this.macroRepository.getAllMacros();
    }

    async addMacro(macro: Macro): Promise<Macro> {
        await this.macroRepository.addMacro(macro);
        return macro;
    }

    async removeMacro(uuid: string): Promise<void> {
        await this.macroRepository.removeMacro(uuid);
    }

    async updateMacro(macro: Macro): Promise<Macro> {
        console.log('call updateMacro on provider');
        await this.macroRepository.updateMacro(macro);
        return macro;
    }

    async executeMacro(macro: Macro, delay: number=0): Promise<void> {
        await this.macroRepository.executeMacro(macro, delay);
    }
}

export default MacroProvider;