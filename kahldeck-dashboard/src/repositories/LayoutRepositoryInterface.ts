
import { Layout } from "../domain/Layout";



interface LayoutRepositoryInterface {
    getLayouts(): Promise<Layout[]>;
    getLayout(uuid: string): Promise<Layout>;
    addLayout(layout: Layout): Promise<void>;
    removeLayout(uuid: string): Promise<string>;
    updateLayout(layout: Layout): Promise<void>;
    dummy(text: string): Promise<string>;
}


export default LayoutRepositoryInterface;
