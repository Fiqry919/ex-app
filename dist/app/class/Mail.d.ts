import { Options } from "nodemailer/lib/mailer";
import { Callback, ServiceList, Template, SMTPOptions } from '../interfaces/Mail';
export default class Mail {
    private static initialized;
    private static transport;
    private static readonly from;
    static initialize: (options: SMTPOptions) => void;
    static send(options: Options, template?: Template): Promise<void>;
    static sendText(options: Options): Promise<void>;
    /**
     * @deprecated Direct email to SMS (not use now)
     * @notes only work with united state, canada, or international phone number
     */
    static sendDirect(phone: string, message: string, service?: ServiceList, cb?: Callback): Promise<void>;
}
