import { MailProps } from "../type";
export declare function appendLink(url: string): HTMLAnchorElement;
export declare function handleClick(link: HTMLAnchorElement): HTMLAnchorElement;
export declare function afterClick(link: HTMLAnchorElement): void;
export declare function bodyAppendLink(link: HTMLAnchorElement): HTMLAnchorElement;
export declare function createMailToUrl({ mailTo, subject, body, cc, bcc }: MailProps): string;
