import { v4 as uuidv4 } from 'uuid';
import { Icon } from './Icon';
import { Macro } from './Macro';

export class Button {
    readonly uuid: string;
    name: string;
    icon: Icon;
    macro: Macro;

    constructor(name: string, icon: Icon, macro: Macro, uuid?: string) {
        this.name = name;
        this.icon = icon;
        this.macro = macro;
        this.uuid = uuid || uuidv4();
    }

    toJSON(): Record<string, unknown> {
        return {
            uuid: this.uuid,
            name: this.name,
            icon: this.icon.toJSON(),
            macro: this.macro.toJSON()
        };
    }

    static fromJSON(data: Record<string, never>): Button {
        return new Button(
            data.name,
            Icon.fromJSON(data.icon),
            Macro.fromJSON(data.macro),
            data.uuid
        );
    }
}