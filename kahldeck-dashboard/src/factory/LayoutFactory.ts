import { Button } from '../domain/Button';
import { Icon } from '../domain/Icon';
import { Layout } from '../domain/Layout';
import { Macro } from '../domain/Macro';
export default class LayoutFactory {
    static createLayout(name: string, rows: number, columns: number, buttons: Button[]): Layout {

        if (rows < 1) {
            throw new Error('Rows must be greater than 0');
        }

        if (columns < 1) {
            throw new Error('Columns must be greater than 0');
        }


        if (buttons.length > rows * columns) {
            throw new Error('Buttons must have less than rows * columns');
        }

        for (let i = buttons.length; i < rows * columns; i++) {

            buttons.push(new Button(
                'Kalh Deck Button ' + i,
                new Icon('name', 'file',[]),
                new Macro('name', ['macro'])
            ));
        }


        return new Layout(name, rows, columns, buttons);
    }
}