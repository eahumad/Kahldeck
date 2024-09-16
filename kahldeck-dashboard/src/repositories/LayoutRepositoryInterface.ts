
import { Layout } from "../domain/Layout";


interface LayoutRepositoryInterface {
    getLayouts(): Promise<Layout[]>;
    addLayout(layout: Layout): Promise<void>;
    removeLayout(uuid: string): Promise<void>;
    updateLayout(layout: Layout): Promise<void>;
    dummy(text: string): Promise<string>;
}


export default LayoutRepositoryInterface;
