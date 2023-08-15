/**
 * Mimic Sequelize Filter and Include Types
 */

export type TAllowArray<T> = T | T[];

export type TAllowNotOrAndWithImplicitAndArrayRecursive<T> = TAllowArray<
  | T
  | { or: TAllowArray<TAllowNotOrAndWithImplicitAndArrayRecursive<T>> }
  | { and: TAllowArray<TAllowNotOrAndWithImplicitAndArrayRecursive<T>> }
  | { not: TAllowNotOrAndWithImplicitAndArrayRecursive<T> }
>;

export type TWhereOperators = {
  eq: 'eq';
  ne: 'ne';
  is: 'is';
  in: 'in';
  not: 'not';
  or: 'or';
  gt: 'gt';
  gte: 'gte';
  lt: 'lt';
  lte: 'lte';
  between: 'between';
  notBetween: 'notBetween';
};

export type TAllowNotOrAndRecursive<T> =
  | T
  | { or: TAllowArray<TAllowNotOrAndRecursive<T>> }
  | { and: TAllowArray<TAllowNotOrAndRecursive<T>> }
  | { not: TAllowNotOrAndRecursive<T> };

export type TWhereAttributeHashValue<AttributeType> =
  | TAllowNotOrAndRecursive<
      AttributeType extends any[]
        ? TWhereOperators['eq'] | TWhereOperators
        : TWhereOperators['in'] | TWhereOperators['eq'] | TWhereOperators
    >
  | TWhereAttributeHash<any>;

export type TWhereAttributeHash<TAttributes = any> =
  | ({
      [AttributeName in keyof TAttributes as AttributeName extends string
        ? AttributeName | `$${AttributeName}$`
        : never]?: TWhereAttributeHashValue<TAttributes[AttributeName]>;
    } & {
      [AttributeName in keyof TAttributes as AttributeName extends string
        ?
            | `${AttributeName}.${string}`
            | `$${AttributeName}$.${string}`
            | `${
                | AttributeName
                | `$${AttributeName}$`
                | `${AttributeName}.${string}`
                | `$${AttributeName}$.${string}`}::${string}`
        : never]?: TWhereAttributeHashValue<any>;
    } & {
      [
        attribute:
          | `$${string}.${string}$`
          | `$${string}.${string}$::${string}`
          | `$${string}.${string}$.${string}`
          | `$${string}.${string}$.${string}::${string}`
      ]: TWhereAttributeHashValue<any>;
    })
  | {
      [x: string]: any;
    };

export type TWhereOptions<TAttributes = any> =
  TAllowNotOrAndWithImplicitAndArrayRecursive<TWhereAttributeHash<TAttributes>>;

export interface IIncludeOptions<TAttributes = any> {
  model: string;
  attributes?:
    | (string | [string, string])[]
    | {
        exclude: string[];
        include?: (string | [string, string])[];
      }
    | {
        exclude?: string[];
        include: (string | [string, string])[];
      };
  filter?: TWhereOptions<TAttributes>;
  include?: (IIncludeOptions | string)[];
}

export interface IDBOptions<TAttributes = any> {
  attributes?:
    | (string | [string, string])[]
    | {
        exclude: string[];
        include?: (string | [string, string])[];
      }
    | {
        exclude?: string[];
        include: (string | [string, string])[];
      };
  filter?: TWhereOptions<TAttributes>;
  include?: (IIncludeOptions | string)[];
  order?: string[][];
  limit?: number;
  offset?: number;
}

export interface IDBAddInput<T> {
  docsToAdd: T[];
}

export interface IDBGetInput<T> {
  options: IDBOptions<T>;
}

export interface IDBEditInput<T> {
  data: Partial<T>;
  options: IDBOptions;
}

export interface IDBDeleteInput<T> {
  options: IDBOptions<T>;
}

export interface IDBAdd<T> {
  docs: T[];
}

export interface IDBGet<T> {
  docs: T[];
}

export interface IDBColumn {
  column_name: string;
  data_type: string;
}

export interface IDBEdit {
  updatedRecords: number;
}

export interface IDBDelete {
  deletedRecords: number;
}
