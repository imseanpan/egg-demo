import React from 'react';
import { Modal, Button, Form, Input, InputNumber } from 'antd';

const FormItem = Form.Item;

class EditModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

  componentDidMount() {

  }

  // onSave = () => {
  //   console.log(this);
  // }

  render() {

    const { getFieldDecorator } = this.props.form;
    const { onCancel, onSave } = this.props;

    return (
      <Modal
        title={this.props.modalTitle}
        wrapClassName="vertical-center-modal"
        visible={this.props.modalVisible}
        onOk={onSave}
        onCancel={onCancel}
      >
        <Form layout="vertical">
          <FormItem label="姓名">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '人总要有个名字吧~' }],
            })(
              <Input max={20} />
            )}
          </FormItem>
          <FormItem label="年龄">
            {getFieldDecorator('age', { initialValue: 20 })(
              <InputNumber min={18} max={99} />
            )}
          </FormItem>
          <FormItem label="备注">
            {getFieldDecorator('note')(<Input type="textarea" max={100} />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

const EditModalForm = Form.create({
  onFieldsChange(props, changedFields) {
    console.log(changedFields);
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      // rowData: {
      //   ...props,
      //   value: props,
      // },
      id: {
        ...props.id,
        value: props.id,
      },
      name: {
        value: props.name,
      },
      age: {
        ...props.age,
        value: props.age,
      },
      note: {
        ...props.note,
        value: props.note,
      },
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
})(EditModal);

export default EditModalForm;

