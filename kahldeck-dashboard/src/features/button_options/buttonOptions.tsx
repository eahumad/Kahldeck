
import { Breadcrumb } from 'antd';
import { Layout } from "../../domain/Layout";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { Button } from '../../domain/Button';
import { unselectButton } from '../../stores/layout_slice';



const ButtonOptions = () => {
    const dispatch = useAppDispatch()

    const selectedLayout: Layout = useAppSelector(state => state.layoutReduce.selectedLayout)
    const selectedButton: Button = useAppSelector(state => state.layoutReduce.selectedButton)

    const onBack = () => {
        dispatch(unselectButton())
    }

    return (
        <>
            <h1>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="#" onClick={onBack}>{selectedLayout?.name}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Options {selectedButton?.name}</Breadcrumb.Item>
                </Breadcrumb>
            </h1>
        </>
    )
}

export default ButtonOptions