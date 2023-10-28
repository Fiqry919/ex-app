import { Options } from "nodemailer/lib/mailer";
import { Callback, ServiceList, Template } from '../interfaces/Mail';
export default class Mail {
    private static readonly from;
    private static readonly transport;
    static send(options: Options, template?: Template): Promise<void>;
    static sendText(options: Options): Promise<void>;
    /**
     * Direct email to SMS
     * @notes only work with united state, canada, or international phone number
     */
    static sendDirect(phone: string, message: string, service?: ServiceList, cb?: Callback): Promise<void>;
}
