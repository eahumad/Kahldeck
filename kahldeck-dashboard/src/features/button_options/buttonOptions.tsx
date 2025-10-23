
import { Breadcrumb, Form, Input, Button as AButton, Flex, Modal, Select, SelectProps } from 'antd';
import { Layout } from "../../domain/Layout";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { Button } from '../../domain/Button';
import { unselectButton, updateButton, updateLayout } from '../../stores/layout_slice';
import { t } from 'i18next';
import { useEffect, useState } from 'react';
import MacroForm from '../macro_form/macroForm';



const ButtonOptions = () => {
    const dispatch = useAppDispatch()
    const macros = useAppSelector(state => state.macroReducer.macros)
    const selectedLayout: Layout = useAppSelector(state => state.layoutReduce.selectedLayout)
    const selectedButton: Button = useAppSelector(state => state.layoutReduce.selectedButton)
    const [form] = Form.useForm()
    const [isModalMacroOpen, setIsModalMacroOpen] = useState(false);
    const newMacroKey = "addNewMacro"

    useEffect(() => {
        // Esto actualiza los valores del formulario cuando selectedButton cambia
        if (selectedButton) {
            form.setFieldsValue(selectedButton);
        }
    }, [selectedButton, form]);

    const onBack = () => {
        form.resetFields()
        dispatch(unselectButton())
    }

    const onSubmit = (values: Button) => {
        const newButton = new Button(
            values.name,
            values.icon,
            values.macro,
            selectedButton.uuid
        )
        dispatch(updateButton(newButton))
        dispatch(updateLayout(selectedLayout))
        onBack()
    }


    const macroOptions: SelectProps['options'] = [
        { value: newMacroKey, label: "Add new macro" },
        ...macros.map(macro => {
            return { value: macro.uuid, label: macro.name }
        })
    ]


    const onMacroSelect = (key: string) => {
        if (key === newMacroKey) {
            console.log('show modal')
            showModalMacro()
        }
    };


    const showModalMacro = () => {
        setIsModalMacroOpen(true);
    };

    const handleOkMacro = () => {
        setIsModalMacroOpen(false);
    };

    const handleCancelMacro = () => {
        setIsModalMacroOpen(false);
    };


    return (
        <>
            <Modal
                title="Macro"
                open={isModalMacroOpen}
                onOk={handleOkMacro}
                onCancel={handleCancelMacro}
                width={830}
                footer={null}
            >
                <MacroForm />
            </Modal>
            <h1>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a href="#" onClick={onBack}>{selectedLayout?.name}</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Options {selectedButton?.name}</Breadcrumb.Item>
                </Breadcrumb>
            </h1>


            <Form
                form={form}
                layout="vertical"
                initialValues={selectedButton}
                onFinish={onSubmit}
            >
                <Form.Item<Button>
                    label={t("button_options.name")}
                    name="name"
                    rules={[{ required: true, message: t("button_options.error_name") }]}
                >
                    <Input />
                </Form.Item>
                {/* <Form.Item<Button>
                    label={t("button_options.icon")}
                    name="icon"
                    rules={[{ required: true, message: t("button_options.error_icon") }]}
                >
                    <Input />
                </Form.Item> */}
                <Form.Item<Button>
                    label={t("button_options.macro")}
                    name="macro"
                    rules={[{ required: true, message: t("button_options.error_macro") }]}
                >
                    <Select
                        showSearch
                        placeholder={t("button_options.macro.placeholder")}
                        optionFilterProp="label"
                        options={macroOptions}
                        //onSearch={(text: string) => setOptions(getMacroPanelValue(text))}
                        onChange={onMacroSelect}
                    />
                </Form.Item>


                <Form.Item>
                    <Flex justify="space-between" align="center">
                        <AButton type="primary" htmlType="submit">
                            {t("save")}
                        </AButton>
                        <AButton onClick={onBack}>
                            {t("back")}
                        </AButton>
                    </Flex>

                </Form.Item>

            </Form>
        </>
    )
}

export default ButtonOptions