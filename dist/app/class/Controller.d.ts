import { CustomMessage, ValidationSchema } from "privy-validator/dist/interfaces/validator";
export default abstract class Controller {
    /**
     * Instance validator
     */
    validate: <T = any>(data: any, schema: ValidationSchema<T>, message?: CustomMessage<T>) => Promise<void>;
}
