import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {MailComponent} from '../MailComponent/index'

export default {
    title: 'Example/Send',
    component: MailComponent,
    // component: Test,
    argTypes: {
        mailTo: {
            type: 'string',
        },
        subject: {
            type: 'string',
        },
        body: {
            type: 'string',
        },
        cc: {
            type: 'string',
        },
        bcc: {
            type: 'string',
        }
    }
} as ComponentMeta<typeof MailComponent>
// } as ComponentMeta<typeof Test>

const RenderItem = ({onCreateMail= () => {return;}}) => {
    return (
        <button onClick={onCreateMail}>
            click Me
        </button>
    )
}

const RenderItem2 = ({onCreateMail= () => {return;}, mailTo=""}) => {
    return (
        <button onClick={onCreateMail}>
            {
                `click Me,mailTo:${mailTo}`
            }
        </button>
    )
}

const Template: ComponentStory<typeof MailComponent> = (args) => <MailComponent {...args} />
// const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />

export const Simple = Template.bind({});
Simple.args = {
    renderItem: RenderItem,
    mailTo: 'gary.lin@alzk.com.tw',
    subject: 'subject',
    body: 'body',
    cc: 'gary.lin+1@alzk.com.tw',
    bcc: 'gary.lin+2@alzk.com.tw',
}
export const WithMailToText = Template.bind({});
WithMailToText.args = {
    renderItem: RenderItem2,
    mailTo: 'gary.lin@alzk.com.tw',
}