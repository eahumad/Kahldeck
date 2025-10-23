import { Key } from "../domain/Key";

export default class KeyFactory {
    static createKey(key: string, name: string, width: number=1): Key {
        return new Key(key, name, width);
    }

    static createKeys(keys: string[]): Key[] {
        return keys.map(key => KeyFactory.createKey(key, key));
    }

    static createAllKeys(): Key[] {
        return [
            ...KeyFactory.createLetterKeys(),
            ...KeyFactory.createNumpadKeys(),
            ...KeyFactory.createSpecialKeys(),
        ];
    }

    static createLetterKeys(): Key[] {
        return [
            KeyFactory.createKey("a", "A"),
            KeyFactory.createKey("b", "B"),
            KeyFactory.createKey("c", "C"),
            KeyFactory.createKey("d", "D"),
            KeyFactory.createKey("e", "E"),
            KeyFactory.createKey("f", "F"),
            KeyFactory.createKey("g", "G"),
            KeyFactory.createKey("h", "H"),
            KeyFactory.createKey("i", "I"),
            KeyFactory.createKey("j", "J"),
            KeyFactory.createKey("k", "K"),
            KeyFactory.createKey("l", "L"),
            KeyFactory.createKey("m", "M"),
            KeyFactory.createKey("n", "N"),
            KeyFactory.createKey("o", "O"),
            KeyFactory.createKey("p", "P"),
            KeyFactory.createKey("q", "Q"),
            KeyFactory.createKey("r", "R"),
            KeyFactory.createKey("s", "S"),
            KeyFactory.createKey("t", "T"),
            KeyFactory.createKey("u", "U"),
            KeyFactory.createKey("v", "V"),
            KeyFactory.createKey("w", "W"),
            KeyFactory.createKey("x", "X"),
            KeyFactory.createKey("y", "Y"),
            KeyFactory.createKey("z", "Z"),
        ]
    }

    static createNumpadKeys(): Key[] {
        return [
            KeyFactory.createKey("1", "NumPad 1"),
            KeyFactory.createKey("2", "NumPad 2"),
            KeyFactory.createKey("3", "NumPad 3"),
            KeyFactory.createKey("4", "NumPad 4"),
            KeyFactory.createKey("5", "NumPad 5"),
            KeyFactory.createKey("6", "NumPad 6"),
            KeyFactory.createKey("7", "NumPad 7"),
            KeyFactory.createKey("8", "NumPad 8"),
            KeyFactory.createKey("9", "NumPad 9"),
            KeyFactory.createKey("0", "NumPad 0"),
        ]
    }

    static createSpecialKeys(): Key[] {
        return [
            KeyFactory.createKey("backspace", "Backspace", 2),
            KeyFactory.createKey("tab", "Tab"),
            KeyFactory.createKey("enter", "Enter"),
            KeyFactory.createKey("shift", "Shift"),
            KeyFactory.createKey("ctrl", "Ctrl"),
            KeyFactory.createKey("alt", "Alt"),
            KeyFactory.createKey("space", "Space"),
            KeyFactory.createKey("delete", "Delete"),
            KeyFactory.createKey("escape", "Escape"),
            KeyFactory.createKey("command", "Command"),
            KeyFactory.createKey("up", "Up"),
            KeyFactory.createKey("down", "Down"),
            KeyFactory.createKey("left", "Left"),
            KeyFactory.createKey("right", "Right"),
        ]
    }
}