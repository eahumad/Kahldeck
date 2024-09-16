import { v4 as uuidv4 } from 'uuid';
import { Button } from './Button';

export class Layout {
    readonly uuid: string;
    name: string;
    rows: number;
    columns: number;
    buttons: Button[];

    constructor(name: string, rows: number, columns: number, buttons: Button[], uuid?: string) {
        this.name = name;
        this.rows = rows;
        this.columns = columns;
        this.buttons = buttons;
        this.uuid = uuid || uuidv4();
    }

    toJSON(): Record<string, any> {
        return {
            uuid: this.uuid,
            name: this.name,
            rows: this.rows,
            columns: this.columns,
            buttons: this.buttons.map(button => {
                return button
            }
            )
        };
    }

    static fromJSON(data: Record<string, any>): Layout {
        return new Layout(
            data.name,
            data.rows,
            data.columns,
            data.buttons.map((buttonData: any) => Button.fromJSON(buttonData)),
            data.uuid
        );
    }

    public toString = (): string => {
        return `Layout(name=${this.name}, rows=${this.rows}, columns=${this.columns}, buttons=${this.buttons})`;
    }
}