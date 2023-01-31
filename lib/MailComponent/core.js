export function appendLink(url) {
    var link = document.createElement('a');
    link.href = url;
    return link;
}
export function handleClick(link) {
    if (link.href) {
        link.click();
    }
    return link;
}
export function afterClick(link) {
    var windowFocus = function () {
        window.removeEventListener('focus', windowFocus, false);
        if (link.parentNode) {
            link.parentNode.removeChild(link);
        }
    };
    window.addEventListener('focus', windowFocus, false);
}
export function bodyAppendLink(link) {
    document.body.appendChild(link);
    return link;
}
export function createMailToUrl(_a) {
    var mailTo = _a.mailTo, subject = _a.subject, body = _a.body, cc = _a.cc, bcc = _a.bcc;
    if (!subject && !body && !cc && !bcc) {
        return "mailto:".concat(mailTo);
    }
    var searchParam = new URLSearchParams();
    if (subject) {
        searchParam.append('subject', subject);
    }
    if (body) {
        searchParam.append('body', body);
    }
    if (cc) {
        if (Array.isArray(cc)) {
            searchParam.append('cc', cc.join(';'));
        }
        else {
            searchParam.append('cc', cc);
        }
    }
    if (bcc) {
        if (Array.isArray(bcc)) {
            searchParam.append('bcc', bcc.join(';'));
        }
        else {
            searchParam.append('bcc', bcc);
        }
    }
    return "mailto:".concat(mailTo, "?").concat(searchParam.toString());
}
