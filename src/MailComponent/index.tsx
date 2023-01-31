import {ReactElement} from 'react';
import {MailProps} from "../type"
import compose from '../utils/compose';
import {appendLink, handleClick, afterClick, bodyAppendLink, createMailToUrl} from './core';

type renderItemProp= Partial<MailProps> & {
    onCreateMail?: () => void,
}

type renderItem = (props: renderItemProp) => ReactElement< Partial<MailProps> & {
    onCreateMail?: () => void,
}>

type Props = MailProps & MailProps & {
    renderItem: renderItem
}
export function MailComponent({mailTo, subject, body, cc, bcc, renderItem}: Props): ReactElement<Partial<MailProps> & {
    onCreateMail?: () => void,
}> {
    const handleMailClick = () => {
        const mailToUrl = createMailToUrl({mailTo, subject, body, cc, bcc});
        const mailLink = compose(
            handleClick,
            bodyAppendLink,
            appendLink
        )(mailToUrl);
        afterClick(mailLink);
    }
    return renderItem({onCreateMail: handleMailClick, mailTo, subject, body, cc, bcc})
}
