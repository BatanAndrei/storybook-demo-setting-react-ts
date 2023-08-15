import * as React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';

    import { Input } from "./input";
    
    export default {
       title: 'Example/Input',
       component: Input,
       argTypes: {
            placeholder: {
                control: {type: 'text'}
            }
       },
    } as ComponentMeta<typeof Input>; // настройки которые определяют как будет выглядеть блок с параметрами компоненты
    
    // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
    const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />; // Шаблон подключенного компонента
    
    export const Basic = Template.bind({}); // инициализация компонента
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    Basic.args = {
        placeholder: 'Hello!!!'
       
    }; // настройки компоненты по умолчанию
    