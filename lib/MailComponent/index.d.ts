import { ReactElement } from 'react';
import { MailProps } from "../type";
type renderItemProp = Partial<MailProps> & {
    onClick?: () => void;
};
type renderItem = (props: renderItemProp) => ReactElement<Partial<MailProps> & {
    onClick?: () => void;
}>;
type Props = MailProps & MailProps & {
    renderItem: renderItem;
};
export declare function MailComponent({ mailTo, subject, body, cc, bcc, renderItem }: Props): ReactElement<Partial<MailProps> & {
    onClick?: () => void;
}>;
export {};
