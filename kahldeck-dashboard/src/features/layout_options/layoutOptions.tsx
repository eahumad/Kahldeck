import { t  } from "i18next"
import { Breadcrumb, Button as AButton, Form, Input, InputNumber } from 'antd';
import { Layout } from "../../domain/Layout";
import "./layoutOptions.css"
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { updateLayout, viewThisLayout } from "../../stores/layout_slice";
import { useEffect } from "react";




const LayoutOptions = () => {
  const dispatch = useAppDispatch()
  const [form] = Form.useForm()

  const selectedLayout: Layout = useAppSelector(state => state.layoutReduce.selectedLayout)

  const onSubmit = (values: Layout) => {
    console.log('onSubmit', values);
    const newLayout = new Layout(
      values.name,
      values.rows,
      values.columns,
      selectedLayout.buttons,
      selectedLayout.uuid
    )
    dispatch(updateLayout(newLayout))
    dispatch(viewThisLayout(newLayout))
  }

  useEffect(() => {
    form.setFieldsValue(selectedLayout)
  }, [selectedLayout])


  return (
    <>
      <h1>
        <Breadcrumb>
          <Breadcrumb.Item>
            Options {selectedLayout?.name}
          </Breadcrumb.Item>
        </Breadcrumb>
      </h1>
      <Form
        form={form}
        layout="vertical"
        initialValues={selectedLayout}
        onFinish={onSubmit}
      >
        <Form.Item<Layout>
          label={t("layout_view.name")}
          name="name"
          rules={[{ required: true, message: t("layout_options.error_name") }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<Layout>
          label={t("layout_view.options.matrix.cols")}
          name="columns"
          rules={[{ required: true, message: t("layout_options.error_cols") }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item<Layout>
          label={t("layout_view.options.matrix.rows")}
          name="rows"
          rules={[{ required: true, message: t("layout_options.error_rows") }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <AButton type="primary" htmlType="submit">
            {t("save")}
          </AButton>
        </Form.Item>
      </Form>

    </>
  )
}

export default LayoutOptions