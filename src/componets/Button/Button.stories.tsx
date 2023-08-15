import * as React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';

    import { Button } from "./index";
    
    export default {
       title: 'Example/Button',
       component: Button,
       argTypes: {
        color: {
            name: 'Button size',
           control: {type: 'radio'}, 
           options: ['red', 'green', 'blue']
       },
           size: {
                name: 'Button size',
               control: {type: 'radio'}, 
               options: ['small', 'normal', 'large']
           },
           disabled: {
               control: 'boolean',
           }
       },
    } as ComponentMeta<typeof Button>; // настройки которые определяют как будет выглядеть блок с параметрами компоненты
    
    // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
    const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />; // Шаблон подключенного компонента
    
    export const Basic = Template.bind({}); // инициализация компонента
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    Basic.args = {
       text: 'Click Me',
       size: 'small',
       disabled: false,
       color: 'red',
       onClick: () => {}
    }; // настройки компоненты по умолчанию
    