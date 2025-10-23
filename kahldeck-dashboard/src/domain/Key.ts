export class Key {
    key: string;
    name: string;
    width: number;

    constructor(key: string, name: string, width: number=1) {
        this.key = key;
        this.name = name;
        this.width = width;
    }
}