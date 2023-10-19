export default class BaseEntity {
    exclude: <Entity>(...fields: (keyof Entity)[]) => Entity;
}
