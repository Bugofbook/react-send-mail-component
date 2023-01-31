import { MailProps } from "../type";
export function appendLink(url: string): HTMLAnchorElement {
    const link = document.createElement('a');
    link.href = url;
    return link;
}
export function handleClick(link: HTMLAnchorElement) {
    if (link.href) {
        link.click();
    }
    return link;
}

export function afterClick(link: HTMLAnchorElement) {
    const windowFocus = () => {
        window.removeEventListener('focus', windowFocus, false);
        if (link.parentNode) {
            link.parentNode.removeChild(link);
        }
    };
    window.addEventListener('focus', windowFocus, false);
}
export function bodyAppendLink(link: HTMLAnchorElement) {
    document.body.appendChild(link);
    return link;
}
export function createMailToUrl({mailTo, subject, body, cc, bcc}: MailProps): string {
    if (!subject && !body && !cc && !bcc) {
        return `mailto:${mailTo}`;
    }
    const searchParam = new URLSearchParams();
    if (subject) {
        searchParam.append('subject', subject);
    }
    if (body) {
        searchParam.append('body', body);
    }
    if (cc) {
        if (Array.isArray(cc)) {
            searchParam.append('cc', cc.join(';'));
        } else {
            searchParam.append('cc', cc);
        }
    }
    if (bcc) {
        if (Array.isArray(bcc)) {
            searchParam.append('bcc', bcc.join(';'));
        } else {
            searchParam.append('bcc', bcc);
        }
    }
    return `mailto:${mailTo}?${searchParam.toString()}`;
}