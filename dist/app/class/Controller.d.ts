import { CustomMessage, ValidationSchema } from "privy-validator/dist/interfaces/validator";
export default abstract class Controller {
    /**
     * Instance validator
     */
    validate: (data: any, schema: ValidationSchema, message?: CustomMessage) => Promise<void>;
}
