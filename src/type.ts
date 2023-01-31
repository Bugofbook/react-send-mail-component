export type MailProps = {
    mailTo: string;
    subject?: string;
    body?: string;
    cc?: string | Array<String>;
    bcc?: string | Array<String>;
}