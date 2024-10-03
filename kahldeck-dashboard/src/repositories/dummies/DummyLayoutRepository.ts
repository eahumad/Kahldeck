import LayoutRepositoryInterface from '../LayoutRepositoryInterface';
import { Layout } from '../../domain/Layout';
import { Macro } from '../../domain/Macro';


export default class DummyLayoutRepository implements LayoutRepositoryInterface {
    _layouts: Layout[] = []

    constructor() {
        this._layouts = [
            //LayoutFactory.createLayout('Layout 1', 2, 2, []),
            //LayoutFactory.createLayout('Layout 2', 3, 8, []),
        ]
    }
    searchMacros(text: string): Promise<Macro[]> {
        throw new Error('Method not implemented.');
    }



    async getLayouts(): Promise<Layout[]> {
        return this._layouts
    }

    async addLayout(layout: Layout): Promise<void> {
        this._layouts = [...this._layouts, layout]
    }

    async removeLayout(uuid: string): Promise<unknown> {
        this._layouts = this._layouts.filter(layout => layout.uuid !== uuid)
        return uuid
    }

    async updateLayout(layout: Layout): Promise<void> {
        this._layouts = this._layouts.map(l => l.uuid === layout.uuid ? layout : l)
    }

    async dummy(text: string): Promise<string> {
        return "dummy " + text;
    }
}
