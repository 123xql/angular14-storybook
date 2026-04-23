import { FormsModule } from "@angular/forms";
import { FormComponent } from "./form.component";
import { Meta,moduleMetadata,Story } from '@storybook/angular';

export default {
    title: 'EncapsulatedComponent/FormComponent',
    component: FormComponent,
    decorators: [
        moduleMetadata({
            imports: [FormsModule]
        })
    ],
    argTypes:{
        placeholder: {
            control: 'text',
            defaultValue: '请输入姓名',
            description: '必要输入。输入框的占位符，默认为 "请输入姓名"',
        },  
        value: {
            control: 'text',
            defaultValue: '',
            description: '输入框的值，默认为空字符串',
            table: { disable: true }, 
        }, 
            isDisabled: {
            control: 'boolean',
            defaultValue: false,
            description: '可选输入。输入框是否禁用，默认为 false',
        },
        onInputChange: {
            table: { disable: true }, 
        },
        writeValue: {
            table: { disable: true },
        },
        registerOnChange: {
            table: { disable: true }, 
        },
        registerOnTouched: {
            table: { disable: true }, 
        }, 
        ngOnInit:{
            table: { disable: true },
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'FormComponent 是一个自定义的表单组件，提供了输入框和占位符功能。它实现了 ControlValueAccessor 接口，可以与 Angular 的表单控件进行集成。',
            },
            source: {
                code:'<!-- TS 代码展示 FormControl 的创建 \n  name = new FormControl(argTypes.value, Validators.required);\n-->\n<!-- HTML 模板展示 FormComponent -->\n <app-form [formControl]="formControl" [isDisabled]="isDisabled" [placeholder]="placeholder"></app-form>',
                language: 'html',
                type: 'auto',
            }
        },
    },
} as Meta;

const Template: Story<FormComponent> = (args: FormComponent) => ({
    props: args,
    template: `
        <app-form [isDisabled]="isDisabled" [placeholder]="placeholder"></app-form>
    `,
});

export const Default = Template.bind({});
Default.args = {
    placeholder: '请输入姓名',
    isDisabled: false,
};

export const disabled = Template.bind({});
disabled.args = {
    placeholder: '请输入姓名',
    isDisabled: true,
};