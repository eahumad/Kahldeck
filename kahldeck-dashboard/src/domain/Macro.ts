import { v4 as uuidv4 } from 'uuid';

export class Macro {
    readonly uuid: string;
    name: string;
    type: 'single' | 'multi';
    keys: string[];

    constructor(name: string, keys: string[], uuid?: string) {
        this.name = name;
        this.keys = keys;
        this.type = keys.length === 1 ? 'single' : 'multi';
        this.uuid = uuid || uuidv4();
    }

    toJSON(): Record<string, any> {
        return {
            uuid: this.uuid,
            name: this.name,
            type: this.type,
            keys: this.keys
        };
    }

    static fromJSON(data: Record<string, any>): Macro {
        return new Macro(
            data.name,
            data.keys,
            data.uuid
        );
    }
}