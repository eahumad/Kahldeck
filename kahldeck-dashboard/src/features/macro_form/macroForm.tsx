import { Key } from "../../domain/Key"
import KeyFactory from "../../factory/KeyFactory"
import "./macroForm.css"
import { t } from "i18next"
import { Button, Form, notification } from "antd"
import { useAppDispatch } from "../../stores/hooks"
import { addMacro, executeMacro } from "../../stores/macro_slice"
import { Macro } from "../../domain/Macro"
import Input from "antd/es/input/Input"
import CustomKeysInput from "../../components/customKeysInputProps"

const MacroForm = () => {
    const keys: Key[] = KeyFactory.createAllKeys()
    const [api, contextHolder] = notification.useNotification();
    const dispatch = useAppDispatch()
    interface NotificationProps {
        pauseOnHover: boolean;
        message: string;
        description: string;
        showProgress: boolean;
        duration: number;
    }

    interface FormValues {
        name: string;
        keys: Key[];
    }

    const [form] = Form.useForm<FormValues>();

    const onKeysClick = (key: Key) => {
        const keys = form.getFieldValue('keys') || [];
        form.setFieldsValue({ keys: [...keys, key] });
    }




    async function onTryButtonClick(): Promise<void> {

        form.validateFields().then((values) => {
            const macro = new Macro(
                "try",
                values.keys?.map(key => key.key),
                'try'
            )
            dispatch(executeMacro(macro))
            openNotification({
                message: t("macro_form.notitification.try.message"),
                description: t("macro_form.notitification.try.description"),
                showProgress: true,
                pauseOnHover: false,
                duration: 5
            });
        }).catch((errorInfo) => {
            console.log('Validation failed:', errorInfo);
        });




    }

    function onSaveButtonClick(values: FormValues): void {
        const newMacro = new Macro(
            values.name,
            values.keys.map(key => key.key),
            undefined
        )

        dispatch(addMacro(newMacro))
        openNotification({
            message: t("macro_form.notitification.save.message"),
            description: t("macro_form.notitification.save.description"),
            showProgress: true,
            pauseOnHover: false,
            duration: 5
        });
    }

    function onCancelButtonClick(): void {
        form.resetFields();
    }



    const openNotification = (options: NotificationProps) => {
        api.open({
            message: options.message,
            description: options.description,
            showProgress: options.showProgress,
            pauseOnHover: options.pauseOnHover,
        });
    };


    return (
        <>
            {contextHolder}


            <Form
                form={form}
                id="macro"
                layout="vertical"
                onFinish={onSaveButtonClick}
            >
                <Form.Item<FormValues>
                    label={t("macro_form.labels.name")}
                    name="name"
                    rules={[{ required: true, message: t("macro_form.error_name") }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FormValues>
                    label={t("macro_form.labels.keys")}
                    name="keys"
                    rules={[{ required: true, message: t("macro_form.error_keys") }]}
                >
                    <CustomKeysInput />
                </Form.Item>

                <div id="keys">
                    {keys.map(key => {
                        const classes = key.width === 1 ? "key" : "key width-" + key.width
                        return (
                            <button key={key.key + "-keys"} className={classes} onClick={() => onKeysClick(key)} type="button">
                                <span className="key-name">{key.name}</span>
                            </button>
                        )
                    })}

                </div>

                <div className="macro-buttons">
                    <Button type="primary" htmlType="submit">
                        <span className="macro-button-text">{t("save")}</span>
                    </Button>

                    <Button onClick={onTryButtonClick}>
                        <span className="macro-button-text">{t("macro_form.try")}</span>
                    </Button>

                    <Button onClick={onCancelButtonClick} danger>
                        <span className="macro-button-text">{t("cancel")}</span>
                    </Button>


                </div>
            </Form>
        </>
    )
}

export default MacroForm