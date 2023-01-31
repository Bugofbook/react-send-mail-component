import compose from '../utils/compose';
import { appendLink, handleClick, afterClick, bodyAppendLink, createMailToUrl } from './core';
export function MailComponent(_a) {
    var mailTo = _a.mailTo, subject = _a.subject, body = _a.body, cc = _a.cc, bcc = _a.bcc, renderItem = _a.renderItem;
    var handleMailClick = function () {
        var mailToUrl = createMailToUrl({ mailTo: mailTo, subject: subject, body: body, cc: cc, bcc: bcc });
        var mailLink = compose(handleClick, bodyAppendLink, appendLink)(mailToUrl);
        afterClick(mailLink);
    };
    return renderItem({ onClick: handleMailClick, mailTo: mailTo, subject: subject, body: body, cc: cc, bcc: bcc });
}
