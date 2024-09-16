import { v4 as uuidv4 } from 'uuid';

export class Icon {
    readonly uuid: string;
    name: string;
    iconPackUuid: string;
    file: string;
    tags: string[];

    constructor(name: string, file: string, tags: string[], uuid?: string) {
        this.name = name;
        this.file = file;
        this.tags = tags;
        this.uuid = uuid || uuidv4();
        this.iconPackUuid = ''; // Inicializado como cadena vacía, se puede actualizar más tarde si es necesario
    }

    toJSON(): Record<string, any> {
        return {
            uuid: this.uuid,
            name: this.name,
            file: this.file,
            tags: this.tags
        };
    }

    static fromJSON(data: Record<string, any>): Icon {
        return new Icon(
            data.name,
            data.file,
            data.tags,
            data.uuid
        );
    }
}