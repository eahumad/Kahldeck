
import { Layout } from '../domain/Layout';
import LayoutRepositoryInterface from './LayoutRepositoryInterface';

export default class EelLayoutRepository implements LayoutRepositoryInterface {
    // @ts-expect-error eel is not defined
    _eel = eel

    async getLayouts(): Promise<Layout[]> {
        const layouts = await this._eel.get_layouts()();    
        return layouts
    }

    async addLayout(layout: Layout): Promise<void> {
        console.log('se agrega', layout);
        await this._eel.add_layout(layout)();
    }

    async removeLayout(uuid: string): Promise<void> {
        // TODO: implementar
        console.log('Uuid', uuid);
    }

    async updateLayout(layout: Layout): Promise<void> {
        console.log('call updateLayout on EelLayoutRepository');
        const response = await this._eel.update_layout(layout)();
        console.log('response', response);
    }

    async getLayout(uuid: string): Promise<Layout> {
        // TODO: implementar
        console.log('Uuid', uuid);
        throw new Error('Method not implemented.');
    }

    async dummy(text: string): Promise<string> {
        return await this._eel.show_dummy(text)();
    }
}