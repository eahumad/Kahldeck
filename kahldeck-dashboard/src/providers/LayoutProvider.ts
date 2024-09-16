import LayoutRepositoryInterface from '../repositories/LayoutRepositoryInterface';
import { Layout } from '../domain/Layout';
import EelLayoutRepository from '../repositories/EelLayoutRepository';
import DummyLayoutRepository from '../repositories/dummies/DummyLayoutRepository';


export default class LayoutProvider {
    private static instance: LayoutProvider;
    private layoutRepository: LayoutRepositoryInterface;


    public constructor() {
        if( import.meta.env.PROD ) {
            this.layoutRepository = new EelLayoutRepository();
        } else {
            this.layoutRepository = new DummyLayoutRepository();
        }
        this.layoutRepository = new EelLayoutRepository();
    }

    static getInstance(): LayoutProvider {

        if (!LayoutProvider.instance) {
            LayoutProvider.instance = new LayoutProvider();
        }
        
        return LayoutProvider.instance;
    }

    async getLayouts(): Promise<Layout[]> {
        return this.layoutRepository.getLayouts();
    }

    async addLayout(layout: Layout): Promise<Layout> {
        await this.layoutRepository.addLayout(layout);
        return layout;
    }

    async removeLayout(uuid: string): Promise<void> {
        await this.layoutRepository.removeLayout(uuid);
    }
    
    async updateLayout(layout: Layout): Promise<Layout> {
        console.log('call updateLayout on provider');
        await this.layoutRepository.updateLayout(layout);
        return layout;
    }

    async dummy(text: string): Promise<string> {
        return this.layoutRepository.dummy(text);
    }

}