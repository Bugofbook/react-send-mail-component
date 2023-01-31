var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { MailComponent } from '../MailComponent/index';
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
};
// } as ComponentMeta<typeof Test>
var RenderItem = function (_a) {
    var _b = _a.onClick, onClick = _b === void 0 ? function () { return; } : _b;
    return (_jsx("button", __assign({ onClick: onClick }, { children: "click Me" })));
};
var RenderItem2 = function (_a) {
    var _b = _a.onClick, onClick = _b === void 0 ? function () { return; } : _b, _c = _a.mailTo, mailTo = _c === void 0 ? "" : _c;
    return (_jsx("button", __assign({ onClick: onClick }, { children: "click Me,mailTo:".concat(mailTo) })));
};
var Template = function (args) { return _jsx(MailComponent, __assign({}, args)); };
// const Template: ComponentStory<typeof Test> = (args) => <Test {...args} />
export var Simple = Template.bind({});
Simple.args = {
    renderItem: RenderItem,
    mailTo: 'gary.lin@alzk.com.tw',
    subject: 'subject',
    body: 'body',
    cc: 'gary.lin+1@alzk.com.tw',
    bcc: 'gary.lin+2@alzk.com.tw',
};
export var WithMailToText = Template.bind({});
WithMailToText.args = {
    renderItem: RenderItem2,
    mailTo: 'gary.lin@alzk.com.tw',
};
