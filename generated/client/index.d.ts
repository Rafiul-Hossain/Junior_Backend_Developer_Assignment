
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VendorProfile
 * 
 */
export type VendorProfile = $Result.DefaultSelection<Prisma.$VendorProfilePayload>
/**
 * Model Produce
 * 
 */
export type Produce = $Result.DefaultSelection<Prisma.$ProducePayload>
/**
 * Model RentalSpace
 * 
 */
export type RentalSpace = $Result.DefaultSelection<Prisma.$RentalSpacePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model CommunityPost
 * 
 */
export type CommunityPost = $Result.DefaultSelection<Prisma.$CommunityPostPayload>
/**
 * Model SustainabilityCert
 * 
 */
export type SustainabilityCert = $Result.DefaultSelection<Prisma.$SustainabilityCertPayload>
/**
 * Model PlantTracking
 * 
 */
export type PlantTracking = $Result.DefaultSelection<Prisma.$PlantTrackingPayload>
/**
 * Model RentalBooking
 * 
 */
export type RentalBooking = $Result.DefaultSelection<Prisma.$RentalBookingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  VENDOR: 'VENDOR',
  CUSTOMER: 'CUSTOMER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const CertStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type CertStatus = (typeof CertStatus)[keyof typeof CertStatus]


export const OrderStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type CertStatus = $Enums.CertStatus

export const CertStatus: typeof $Enums.CertStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.vendorProfile`: Exposes CRUD operations for the **VendorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VendorProfiles
    * const vendorProfiles = await prisma.vendorProfile.findMany()
    * ```
    */
  get vendorProfile(): Prisma.VendorProfileDelegate<ExtArgs>;

  /**
   * `prisma.produce`: Exposes CRUD operations for the **Produce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produces
    * const produces = await prisma.produce.findMany()
    * ```
    */
  get produce(): Prisma.ProduceDelegate<ExtArgs>;

  /**
   * `prisma.rentalSpace`: Exposes CRUD operations for the **RentalSpace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentalSpaces
    * const rentalSpaces = await prisma.rentalSpace.findMany()
    * ```
    */
  get rentalSpace(): Prisma.RentalSpaceDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.communityPost`: Exposes CRUD operations for the **CommunityPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityPosts
    * const communityPosts = await prisma.communityPost.findMany()
    * ```
    */
  get communityPost(): Prisma.CommunityPostDelegate<ExtArgs>;

  /**
   * `prisma.sustainabilityCert`: Exposes CRUD operations for the **SustainabilityCert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SustainabilityCerts
    * const sustainabilityCerts = await prisma.sustainabilityCert.findMany()
    * ```
    */
  get sustainabilityCert(): Prisma.SustainabilityCertDelegate<ExtArgs>;

  /**
   * `prisma.plantTracking`: Exposes CRUD operations for the **PlantTracking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlantTrackings
    * const plantTrackings = await prisma.plantTracking.findMany()
    * ```
    */
  get plantTracking(): Prisma.PlantTrackingDelegate<ExtArgs>;

  /**
   * `prisma.rentalBooking`: Exposes CRUD operations for the **RentalBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentalBookings
    * const rentalBookings = await prisma.rentalBooking.findMany()
    * ```
    */
  get rentalBooking(): Prisma.RentalBookingDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    VendorProfile: 'VendorProfile',
    Produce: 'Produce',
    RentalSpace: 'RentalSpace',
    Order: 'Order',
    CommunityPost: 'CommunityPost',
    SustainabilityCert: 'SustainabilityCert',
    PlantTracking: 'PlantTracking',
    RentalBooking: 'RentalBooking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "vendorProfile" | "produce" | "rentalSpace" | "order" | "communityPost" | "sustainabilityCert" | "plantTracking" | "rentalBooking"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VendorProfile: {
        payload: Prisma.$VendorProfilePayload<ExtArgs>
        fields: Prisma.VendorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          findFirst: {
            args: Prisma.VendorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          findMany: {
            args: Prisma.VendorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>[]
          }
          create: {
            args: Prisma.VendorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          createMany: {
            args: Prisma.VendorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>[]
          }
          delete: {
            args: Prisma.VendorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          update: {
            args: Prisma.VendorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          deleteMany: {
            args: Prisma.VendorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorProfilePayload>
          }
          aggregate: {
            args: Prisma.VendorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendorProfile>
          }
          groupBy: {
            args: Prisma.VendorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<VendorProfileCountAggregateOutputType> | number
          }
        }
      }
      Produce: {
        payload: Prisma.$ProducePayload<ExtArgs>
        fields: Prisma.ProduceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProduceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProduceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          findFirst: {
            args: Prisma.ProduceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProduceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          findMany: {
            args: Prisma.ProduceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>[]
          }
          create: {
            args: Prisma.ProduceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          createMany: {
            args: Prisma.ProduceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProduceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>[]
          }
          delete: {
            args: Prisma.ProduceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          update: {
            args: Prisma.ProduceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          deleteMany: {
            args: Prisma.ProduceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProduceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProduceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducePayload>
          }
          aggregate: {
            args: Prisma.ProduceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduce>
          }
          groupBy: {
            args: Prisma.ProduceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProduceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProduceCountArgs<ExtArgs>
            result: $Utils.Optional<ProduceCountAggregateOutputType> | number
          }
        }
      }
      RentalSpace: {
        payload: Prisma.$RentalSpacePayload<ExtArgs>
        fields: Prisma.RentalSpaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalSpaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalSpaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          findFirst: {
            args: Prisma.RentalSpaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalSpaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          findMany: {
            args: Prisma.RentalSpaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>[]
          }
          create: {
            args: Prisma.RentalSpaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          createMany: {
            args: Prisma.RentalSpaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalSpaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>[]
          }
          delete: {
            args: Prisma.RentalSpaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          update: {
            args: Prisma.RentalSpaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          deleteMany: {
            args: Prisma.RentalSpaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalSpaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RentalSpaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalSpacePayload>
          }
          aggregate: {
            args: Prisma.RentalSpaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentalSpace>
          }
          groupBy: {
            args: Prisma.RentalSpaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalSpaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalSpaceCountArgs<ExtArgs>
            result: $Utils.Optional<RentalSpaceCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      CommunityPost: {
        payload: Prisma.$CommunityPostPayload<ExtArgs>
        fields: Prisma.CommunityPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          findFirst: {
            args: Prisma.CommunityPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          findMany: {
            args: Prisma.CommunityPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>[]
          }
          create: {
            args: Prisma.CommunityPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          createMany: {
            args: Prisma.CommunityPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>[]
          }
          delete: {
            args: Prisma.CommunityPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          update: {
            args: Prisma.CommunityPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          deleteMany: {
            args: Prisma.CommunityPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommunityPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          aggregate: {
            args: Prisma.CommunityPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityPost>
          }
          groupBy: {
            args: Prisma.CommunityPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityPostCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityPostCountAggregateOutputType> | number
          }
        }
      }
      SustainabilityCert: {
        payload: Prisma.$SustainabilityCertPayload<ExtArgs>
        fields: Prisma.SustainabilityCertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SustainabilityCertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SustainabilityCertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>
          }
          findFirst: {
            args: Prisma.SustainabilityCertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SustainabilityCertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>
          }
          findMany: {
            args: Prisma.SustainabilityCertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>[]
          }
          create: {
            args: Prisma.SustainabilityCertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>
          }
          createMany: {
            args: Prisma.SustainabilityCertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SustainabilityCertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>[]
          }
          delete: {
            args: Prisma.SustainabilityCertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>
          }
          update: {
            args: Prisma.SustainabilityCertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>
          }
          deleteMany: {
            args: Prisma.SustainabilityCertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SustainabilityCertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SustainabilityCertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SustainabilityCertPayload>
          }
          aggregate: {
            args: Prisma.SustainabilityCertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSustainabilityCert>
          }
          groupBy: {
            args: Prisma.SustainabilityCertGroupByArgs<ExtArgs>
            result: $Utils.Optional<SustainabilityCertGroupByOutputType>[]
          }
          count: {
            args: Prisma.SustainabilityCertCountArgs<ExtArgs>
            result: $Utils.Optional<SustainabilityCertCountAggregateOutputType> | number
          }
        }
      }
      PlantTracking: {
        payload: Prisma.$PlantTrackingPayload<ExtArgs>
        fields: Prisma.PlantTrackingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantTrackingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTrackingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantTrackingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTrackingPayload>
          }
          findFirst: {
            args: Prisma.PlantTrackingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTrackingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantTrackingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTrackingPayload>
          }
          findMany: {
            args: Prisma.PlantTrackingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTrackingPayload>[]
          }
          create: {
            args: Prisma.PlantTrackingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTrackingPayload>
          }
          createMany: {
            args: Prisma.PlantTrackingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlantTrackingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTrackingPayload>[]
          }
          delete: {
            args: Prisma.PlantTrackingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTrackingPayload>
          }
          update: {
            args: Prisma.PlantTrackingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTrackingPayload>
          }
          deleteMany: {
            args: Prisma.PlantTrackingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantTrackingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlantTrackingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantTrackingPayload>
          }
          aggregate: {
            args: Prisma.PlantTrackingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlantTracking>
          }
          groupBy: {
            args: Prisma.PlantTrackingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantTrackingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlantTrackingCountArgs<ExtArgs>
            result: $Utils.Optional<PlantTrackingCountAggregateOutputType> | number
          }
        }
      }
      RentalBooking: {
        payload: Prisma.$RentalBookingPayload<ExtArgs>
        fields: Prisma.RentalBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalBookingPayload>
          }
          findFirst: {
            args: Prisma.RentalBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalBookingPayload>
          }
          findMany: {
            args: Prisma.RentalBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalBookingPayload>[]
          }
          create: {
            args: Prisma.RentalBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalBookingPayload>
          }
          createMany: {
            args: Prisma.RentalBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalBookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalBookingPayload>[]
          }
          delete: {
            args: Prisma.RentalBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalBookingPayload>
          }
          update: {
            args: Prisma.RentalBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalBookingPayload>
          }
          deleteMany: {
            args: Prisma.RentalBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RentalBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalBookingPayload>
          }
          aggregate: {
            args: Prisma.RentalBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentalBooking>
          }
          groupBy: {
            args: Prisma.RentalBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalBookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalBookingCountArgs<ExtArgs>
            result: $Utils.Optional<RentalBookingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
    communityPosts: number
    plantTrackings: number
    rentalBookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    communityPosts?: boolean | UserCountOutputTypeCountCommunityPostsArgs
    plantTrackings?: boolean | UserCountOutputTypeCountPlantTrackingsArgs
    rentalBookings?: boolean | UserCountOutputTypeCountRentalBookingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunityPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlantTrackingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantTrackingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentalBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalBookingWhereInput
  }


  /**
   * Count Type VendorProfileCountOutputType
   */

  export type VendorProfileCountOutputType = {
    produces: number
    rentalSpaces: number
    sustainabilityCerts: number
  }

  export type VendorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produces?: boolean | VendorProfileCountOutputTypeCountProducesArgs
    rentalSpaces?: boolean | VendorProfileCountOutputTypeCountRentalSpacesArgs
    sustainabilityCerts?: boolean | VendorProfileCountOutputTypeCountSustainabilityCertsArgs
  }

  // Custom InputTypes
  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfileCountOutputType
     */
    select?: VendorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeCountProducesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduceWhereInput
  }

  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeCountRentalSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalSpaceWhereInput
  }

  /**
   * VendorProfileCountOutputType without action
   */
  export type VendorProfileCountOutputTypeCountSustainabilityCertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SustainabilityCertWhereInput
  }


  /**
   * Count Type ProduceCountOutputType
   */

  export type ProduceCountOutputType = {
    orders: number
  }

  export type ProduceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ProduceCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ProduceCountOutputType without action
   */
  export type ProduceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduceCountOutputType
     */
    select?: ProduceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProduceCountOutputType without action
   */
  export type ProduceCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type RentalSpaceCountOutputType
   */

  export type RentalSpaceCountOutputType = {
    plantTrackings: number
    bookings: number
  }

  export type RentalSpaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plantTrackings?: boolean | RentalSpaceCountOutputTypeCountPlantTrackingsArgs
    bookings?: boolean | RentalSpaceCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * RentalSpaceCountOutputType without action
   */
  export type RentalSpaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpaceCountOutputType
     */
    select?: RentalSpaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RentalSpaceCountOutputType without action
   */
  export type RentalSpaceCountOutputTypeCountPlantTrackingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantTrackingWhereInput
  }

  /**
   * RentalSpaceCountOutputType without action
   */
  export type RentalSpaceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalBookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    otp: string | null
    otpExpires: Date | null
    otpVerified: boolean | null
    resetExpires: Date | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    status: $Enums.UserStatus | null
    otp: string | null
    otpExpires: Date | null
    otpVerified: boolean | null
    resetExpires: Date | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    status: number
    otp: number
    otpExpires: number
    otpVerified: number
    resetExpires: number
    refreshToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    otp?: true
    otpExpires?: true
    otpVerified?: true
    resetExpires?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    otp?: true
    otpExpires?: true
    otpVerified?: true
    resetExpires?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    status?: true
    otp?: true
    otpExpires?: true
    otpVerified?: true
    resetExpires?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    status: $Enums.UserStatus
    otp: string | null
    otpExpires: Date | null
    otpVerified: boolean
    resetExpires: Date | null
    refreshToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    otp?: boolean
    otpExpires?: boolean
    otpVerified?: boolean
    resetExpires?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendorProfile?: boolean | User$vendorProfileArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    communityPosts?: boolean | User$communityPostsArgs<ExtArgs>
    plantTrackings?: boolean | User$plantTrackingsArgs<ExtArgs>
    rentalBookings?: boolean | User$rentalBookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    otp?: boolean
    otpExpires?: boolean
    otpVerified?: boolean
    resetExpires?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    otp?: boolean
    otpExpires?: boolean
    otpVerified?: boolean
    resetExpires?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorProfile?: boolean | User$vendorProfileArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    communityPosts?: boolean | User$communityPostsArgs<ExtArgs>
    plantTrackings?: boolean | User$plantTrackingsArgs<ExtArgs>
    rentalBookings?: boolean | User$rentalBookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vendorProfile: Prisma.$VendorProfilePayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
      communityPosts: Prisma.$CommunityPostPayload<ExtArgs>[]
      plantTrackings: Prisma.$PlantTrackingPayload<ExtArgs>[]
      rentalBookings: Prisma.$RentalBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      status: $Enums.UserStatus
      otp: string | null
      otpExpires: Date | null
      otpVerified: boolean
      resetExpires: Date | null
      refreshToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendorProfile<T extends User$vendorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$vendorProfileArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    communityPosts<T extends User$communityPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$communityPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findMany"> | Null>
    plantTrackings<T extends User$plantTrackingsArgs<ExtArgs> = {}>(args?: Subset<T, User$plantTrackingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantTrackingPayload<ExtArgs>, T, "findMany"> | Null>
    rentalBookings<T extends User$rentalBookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$rentalBookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalBookingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly otp: FieldRef<"User", 'String'>
    readonly otpExpires: FieldRef<"User", 'DateTime'>
    readonly otpVerified: FieldRef<"User", 'Boolean'>
    readonly resetExpires: FieldRef<"User", 'DateTime'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.vendorProfile
   */
  export type User$vendorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    where?: VendorProfileWhereInput
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.communityPosts
   */
  export type User$communityPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    where?: CommunityPostWhereInput
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    cursor?: CommunityPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * User.plantTrackings
   */
  export type User$plantTrackingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTracking
     */
    select?: PlantTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTrackingInclude<ExtArgs> | null
    where?: PlantTrackingWhereInput
    orderBy?: PlantTrackingOrderByWithRelationInput | PlantTrackingOrderByWithRelationInput[]
    cursor?: PlantTrackingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlantTrackingScalarFieldEnum | PlantTrackingScalarFieldEnum[]
  }

  /**
   * User.rentalBookings
   */
  export type User$rentalBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalBooking
     */
    select?: RentalBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalBookingInclude<ExtArgs> | null
    where?: RentalBookingWhereInput
    orderBy?: RentalBookingOrderByWithRelationInput | RentalBookingOrderByWithRelationInput[]
    cursor?: RentalBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalBookingScalarFieldEnum | RentalBookingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VendorProfile
   */

  export type AggregateVendorProfile = {
    _count: VendorProfileCountAggregateOutputType | null
    _min: VendorProfileMinAggregateOutputType | null
    _max: VendorProfileMaxAggregateOutputType | null
  }

  export type VendorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    farmName: string | null
    certificationStatus: $Enums.CertStatus | null
    farmLocation: string | null
    isApproved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    farmName: string | null
    certificationStatus: $Enums.CertStatus | null
    farmLocation: string | null
    isApproved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorProfileCountAggregateOutputType = {
    id: number
    userId: number
    farmName: number
    certificationStatus: number
    farmLocation: number
    isApproved: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VendorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    farmName?: true
    certificationStatus?: true
    farmLocation?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    farmName?: true
    certificationStatus?: true
    farmLocation?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    farmName?: true
    certificationStatus?: true
    farmLocation?: true
    isApproved?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VendorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorProfile to aggregate.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VendorProfiles
    **/
    _count?: true | VendorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorProfileMaxAggregateInputType
  }

  export type GetVendorProfileAggregateType<T extends VendorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateVendorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendorProfile[P]>
      : GetScalarType<T[P], AggregateVendorProfile[P]>
  }




  export type VendorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorProfileWhereInput
    orderBy?: VendorProfileOrderByWithAggregationInput | VendorProfileOrderByWithAggregationInput[]
    by: VendorProfileScalarFieldEnum[] | VendorProfileScalarFieldEnum
    having?: VendorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorProfileCountAggregateInputType | true
    _min?: VendorProfileMinAggregateInputType
    _max?: VendorProfileMaxAggregateInputType
  }

  export type VendorProfileGroupByOutputType = {
    id: string
    userId: string
    farmName: string
    certificationStatus: $Enums.CertStatus
    farmLocation: string
    isApproved: boolean
    createdAt: Date
    updatedAt: Date
    _count: VendorProfileCountAggregateOutputType | null
    _min: VendorProfileMinAggregateOutputType | null
    _max: VendorProfileMaxAggregateOutputType | null
  }

  type GetVendorProfileGroupByPayload<T extends VendorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], VendorProfileGroupByOutputType[P]>
        }
      >
    >


  export type VendorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    farmName?: boolean
    certificationStatus?: boolean
    farmLocation?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    produces?: boolean | VendorProfile$producesArgs<ExtArgs>
    rentalSpaces?: boolean | VendorProfile$rentalSpacesArgs<ExtArgs>
    sustainabilityCerts?: boolean | VendorProfile$sustainabilityCertsArgs<ExtArgs>
    _count?: boolean | VendorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorProfile"]>

  export type VendorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    farmName?: boolean
    certificationStatus?: boolean
    farmLocation?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorProfile"]>

  export type VendorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    farmName?: boolean
    certificationStatus?: boolean
    farmLocation?: boolean
    isApproved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VendorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    produces?: boolean | VendorProfile$producesArgs<ExtArgs>
    rentalSpaces?: boolean | VendorProfile$rentalSpacesArgs<ExtArgs>
    sustainabilityCerts?: boolean | VendorProfile$sustainabilityCertsArgs<ExtArgs>
    _count?: boolean | VendorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VendorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VendorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      produces: Prisma.$ProducePayload<ExtArgs>[]
      rentalSpaces: Prisma.$RentalSpacePayload<ExtArgs>[]
      sustainabilityCerts: Prisma.$SustainabilityCertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      farmName: string
      certificationStatus: $Enums.CertStatus
      farmLocation: string
      isApproved: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vendorProfile"]>
    composites: {}
  }

  type VendorProfileGetPayload<S extends boolean | null | undefined | VendorProfileDefaultArgs> = $Result.GetResult<Prisma.$VendorProfilePayload, S>

  type VendorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VendorProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VendorProfileCountAggregateInputType | true
    }

  export interface VendorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VendorProfile'], meta: { name: 'VendorProfile' } }
    /**
     * Find zero or one VendorProfile that matches the filter.
     * @param {VendorProfileFindUniqueArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorProfileFindUniqueArgs>(args: SelectSubset<T, VendorProfileFindUniqueArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VendorProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VendorProfileFindUniqueOrThrowArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VendorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileFindFirstArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorProfileFindFirstArgs>(args?: SelectSubset<T, VendorProfileFindFirstArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VendorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileFindFirstOrThrowArgs} args - Arguments to find a VendorProfile
     * @example
     * // Get one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VendorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VendorProfiles
     * const vendorProfiles = await prisma.vendorProfile.findMany()
     * 
     * // Get first 10 VendorProfiles
     * const vendorProfiles = await prisma.vendorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorProfileWithIdOnly = await prisma.vendorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorProfileFindManyArgs>(args?: SelectSubset<T, VendorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VendorProfile.
     * @param {VendorProfileCreateArgs} args - Arguments to create a VendorProfile.
     * @example
     * // Create one VendorProfile
     * const VendorProfile = await prisma.vendorProfile.create({
     *   data: {
     *     // ... data to create a VendorProfile
     *   }
     * })
     * 
     */
    create<T extends VendorProfileCreateArgs>(args: SelectSubset<T, VendorProfileCreateArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VendorProfiles.
     * @param {VendorProfileCreateManyArgs} args - Arguments to create many VendorProfiles.
     * @example
     * // Create many VendorProfiles
     * const vendorProfile = await prisma.vendorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorProfileCreateManyArgs>(args?: SelectSubset<T, VendorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VendorProfiles and returns the data saved in the database.
     * @param {VendorProfileCreateManyAndReturnArgs} args - Arguments to create many VendorProfiles.
     * @example
     * // Create many VendorProfiles
     * const vendorProfile = await prisma.vendorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VendorProfiles and only return the `id`
     * const vendorProfileWithIdOnly = await prisma.vendorProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VendorProfile.
     * @param {VendorProfileDeleteArgs} args - Arguments to delete one VendorProfile.
     * @example
     * // Delete one VendorProfile
     * const VendorProfile = await prisma.vendorProfile.delete({
     *   where: {
     *     // ... filter to delete one VendorProfile
     *   }
     * })
     * 
     */
    delete<T extends VendorProfileDeleteArgs>(args: SelectSubset<T, VendorProfileDeleteArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VendorProfile.
     * @param {VendorProfileUpdateArgs} args - Arguments to update one VendorProfile.
     * @example
     * // Update one VendorProfile
     * const vendorProfile = await prisma.vendorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorProfileUpdateArgs>(args: SelectSubset<T, VendorProfileUpdateArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VendorProfiles.
     * @param {VendorProfileDeleteManyArgs} args - Arguments to filter VendorProfiles to delete.
     * @example
     * // Delete a few VendorProfiles
     * const { count } = await prisma.vendorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorProfileDeleteManyArgs>(args?: SelectSubset<T, VendorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VendorProfiles
     * const vendorProfile = await prisma.vendorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorProfileUpdateManyArgs>(args: SelectSubset<T, VendorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VendorProfile.
     * @param {VendorProfileUpsertArgs} args - Arguments to update or create a VendorProfile.
     * @example
     * // Update or create a VendorProfile
     * const vendorProfile = await prisma.vendorProfile.upsert({
     *   create: {
     *     // ... data to create a VendorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VendorProfile we want to update
     *   }
     * })
     */
    upsert<T extends VendorProfileUpsertArgs>(args: SelectSubset<T, VendorProfileUpsertArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VendorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileCountArgs} args - Arguments to filter VendorProfiles to count.
     * @example
     * // Count the number of VendorProfiles
     * const count = await prisma.vendorProfile.count({
     *   where: {
     *     // ... the filter for the VendorProfiles we want to count
     *   }
     * })
    **/
    count<T extends VendorProfileCountArgs>(
      args?: Subset<T, VendorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VendorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorProfileAggregateArgs>(args: Subset<T, VendorProfileAggregateArgs>): Prisma.PrismaPromise<GetVendorProfileAggregateType<T>>

    /**
     * Group by VendorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorProfileGroupByArgs['orderBy'] }
        : { orderBy?: VendorProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VendorProfile model
   */
  readonly fields: VendorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VendorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    produces<T extends VendorProfile$producesArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfile$producesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findMany"> | Null>
    rentalSpaces<T extends VendorProfile$rentalSpacesArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfile$rentalSpacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findMany"> | Null>
    sustainabilityCerts<T extends VendorProfile$sustainabilityCertsArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfile$sustainabilityCertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VendorProfile model
   */ 
  interface VendorProfileFieldRefs {
    readonly id: FieldRef<"VendorProfile", 'String'>
    readonly userId: FieldRef<"VendorProfile", 'String'>
    readonly farmName: FieldRef<"VendorProfile", 'String'>
    readonly certificationStatus: FieldRef<"VendorProfile", 'CertStatus'>
    readonly farmLocation: FieldRef<"VendorProfile", 'String'>
    readonly isApproved: FieldRef<"VendorProfile", 'Boolean'>
    readonly createdAt: FieldRef<"VendorProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"VendorProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VendorProfile findUnique
   */
  export type VendorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile findUniqueOrThrow
   */
  export type VendorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile findFirst
   */
  export type VendorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorProfiles.
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorProfiles.
     */
    distinct?: VendorProfileScalarFieldEnum | VendorProfileScalarFieldEnum[]
  }

  /**
   * VendorProfile findFirstOrThrow
   */
  export type VendorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfile to fetch.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorProfiles.
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorProfiles.
     */
    distinct?: VendorProfileScalarFieldEnum | VendorProfileScalarFieldEnum[]
  }

  /**
   * VendorProfile findMany
   */
  export type VendorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter, which VendorProfiles to fetch.
     */
    where?: VendorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorProfiles to fetch.
     */
    orderBy?: VendorProfileOrderByWithRelationInput | VendorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VendorProfiles.
     */
    cursor?: VendorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorProfiles.
     */
    skip?: number
    distinct?: VendorProfileScalarFieldEnum | VendorProfileScalarFieldEnum[]
  }

  /**
   * VendorProfile create
   */
  export type VendorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a VendorProfile.
     */
    data: XOR<VendorProfileCreateInput, VendorProfileUncheckedCreateInput>
  }

  /**
   * VendorProfile createMany
   */
  export type VendorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VendorProfiles.
     */
    data: VendorProfileCreateManyInput | VendorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VendorProfile createManyAndReturn
   */
  export type VendorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VendorProfiles.
     */
    data: VendorProfileCreateManyInput | VendorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VendorProfile update
   */
  export type VendorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a VendorProfile.
     */
    data: XOR<VendorProfileUpdateInput, VendorProfileUncheckedUpdateInput>
    /**
     * Choose, which VendorProfile to update.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile updateMany
   */
  export type VendorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VendorProfiles.
     */
    data: XOR<VendorProfileUpdateManyMutationInput, VendorProfileUncheckedUpdateManyInput>
    /**
     * Filter which VendorProfiles to update
     */
    where?: VendorProfileWhereInput
  }

  /**
   * VendorProfile upsert
   */
  export type VendorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the VendorProfile to update in case it exists.
     */
    where: VendorProfileWhereUniqueInput
    /**
     * In case the VendorProfile found by the `where` argument doesn't exist, create a new VendorProfile with this data.
     */
    create: XOR<VendorProfileCreateInput, VendorProfileUncheckedCreateInput>
    /**
     * In case the VendorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorProfileUpdateInput, VendorProfileUncheckedUpdateInput>
  }

  /**
   * VendorProfile delete
   */
  export type VendorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
    /**
     * Filter which VendorProfile to delete.
     */
    where: VendorProfileWhereUniqueInput
  }

  /**
   * VendorProfile deleteMany
   */
  export type VendorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorProfiles to delete
     */
    where?: VendorProfileWhereInput
  }

  /**
   * VendorProfile.produces
   */
  export type VendorProfile$producesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    where?: ProduceWhereInput
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    cursor?: ProduceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }

  /**
   * VendorProfile.rentalSpaces
   */
  export type VendorProfile$rentalSpacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    where?: RentalSpaceWhereInput
    orderBy?: RentalSpaceOrderByWithRelationInput | RentalSpaceOrderByWithRelationInput[]
    cursor?: RentalSpaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalSpaceScalarFieldEnum | RentalSpaceScalarFieldEnum[]
  }

  /**
   * VendorProfile.sustainabilityCerts
   */
  export type VendorProfile$sustainabilityCertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    where?: SustainabilityCertWhereInput
    orderBy?: SustainabilityCertOrderByWithRelationInput | SustainabilityCertOrderByWithRelationInput[]
    cursor?: SustainabilityCertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SustainabilityCertScalarFieldEnum | SustainabilityCertScalarFieldEnum[]
  }

  /**
   * VendorProfile without action
   */
  export type VendorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorProfile
     */
    select?: VendorProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorProfileInclude<ExtArgs> | null
  }


  /**
   * Model Produce
   */

  export type AggregateProduce = {
    _count: ProduceCountAggregateOutputType | null
    _avg: ProduceAvgAggregateOutputType | null
    _sum: ProduceSumAggregateOutputType | null
    _min: ProduceMinAggregateOutputType | null
    _max: ProduceMaxAggregateOutputType | null
  }

  export type ProduceAvgAggregateOutputType = {
    price: Decimal | null
    availableQuantity: number | null
  }

  export type ProduceSumAggregateOutputType = {
    price: Decimal | null
    availableQuantity: number | null
  }

  export type ProduceMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    category: string | null
    certificationStatus: $Enums.CertStatus | null
    availableQuantity: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProduceMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    category: string | null
    certificationStatus: $Enums.CertStatus | null
    availableQuantity: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProduceCountAggregateOutputType = {
    id: number
    vendorId: number
    name: number
    description: number
    price: number
    category: number
    certificationStatus: number
    availableQuantity: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProduceAvgAggregateInputType = {
    price?: true
    availableQuantity?: true
  }

  export type ProduceSumAggregateInputType = {
    price?: true
    availableQuantity?: true
  }

  export type ProduceMinAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    description?: true
    price?: true
    category?: true
    certificationStatus?: true
    availableQuantity?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProduceMaxAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    description?: true
    price?: true
    category?: true
    certificationStatus?: true
    availableQuantity?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProduceCountAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    description?: true
    price?: true
    category?: true
    certificationStatus?: true
    availableQuantity?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProduceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produce to aggregate.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produces
    **/
    _count?: true | ProduceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProduceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProduceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduceMaxAggregateInputType
  }

  export type GetProduceAggregateType<T extends ProduceAggregateArgs> = {
        [P in keyof T & keyof AggregateProduce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduce[P]>
      : GetScalarType<T[P], AggregateProduce[P]>
  }




  export type ProduceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduceWhereInput
    orderBy?: ProduceOrderByWithAggregationInput | ProduceOrderByWithAggregationInput[]
    by: ProduceScalarFieldEnum[] | ProduceScalarFieldEnum
    having?: ProduceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduceCountAggregateInputType | true
    _avg?: ProduceAvgAggregateInputType
    _sum?: ProduceSumAggregateInputType
    _min?: ProduceMinAggregateInputType
    _max?: ProduceMaxAggregateInputType
  }

  export type ProduceGroupByOutputType = {
    id: string
    vendorId: string
    name: string
    description: string
    price: Decimal
    category: string
    certificationStatus: $Enums.CertStatus
    availableQuantity: number
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProduceCountAggregateOutputType | null
    _avg: ProduceAvgAggregateOutputType | null
    _sum: ProduceSumAggregateOutputType | null
    _min: ProduceMinAggregateOutputType | null
    _max: ProduceMaxAggregateOutputType | null
  }

  type GetProduceGroupByPayload<T extends ProduceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProduceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduceGroupByOutputType[P]>
            : GetScalarType<T[P], ProduceGroupByOutputType[P]>
        }
      >
    >


  export type ProduceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    certificationStatus?: boolean
    availableQuantity?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
    orders?: boolean | Produce$ordersArgs<ExtArgs>
    _count?: boolean | ProduceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produce"]>

  export type ProduceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    certificationStatus?: boolean
    availableQuantity?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produce"]>

  export type ProduceSelectScalar = {
    id?: boolean
    vendorId?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    certificationStatus?: boolean
    availableQuantity?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProduceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
    orders?: boolean | Produce$ordersArgs<ExtArgs>
    _count?: boolean | ProduceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProduceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }

  export type $ProducePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produce"
    objects: {
      vendor: Prisma.$VendorProfilePayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      name: string
      description: string
      price: Prisma.Decimal
      category: string
      certificationStatus: $Enums.CertStatus
      availableQuantity: number
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["produce"]>
    composites: {}
  }

  type ProduceGetPayload<S extends boolean | null | undefined | ProduceDefaultArgs> = $Result.GetResult<Prisma.$ProducePayload, S>

  type ProduceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProduceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProduceCountAggregateInputType | true
    }

  export interface ProduceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produce'], meta: { name: 'Produce' } }
    /**
     * Find zero or one Produce that matches the filter.
     * @param {ProduceFindUniqueArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProduceFindUniqueArgs>(args: SelectSubset<T, ProduceFindUniqueArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Produce that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProduceFindUniqueOrThrowArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProduceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProduceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Produce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceFindFirstArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProduceFindFirstArgs>(args?: SelectSubset<T, ProduceFindFirstArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Produce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceFindFirstOrThrowArgs} args - Arguments to find a Produce
     * @example
     * // Get one Produce
     * const produce = await prisma.produce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProduceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProduceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Produces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produces
     * const produces = await prisma.produce.findMany()
     * 
     * // Get first 10 Produces
     * const produces = await prisma.produce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produceWithIdOnly = await prisma.produce.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProduceFindManyArgs>(args?: SelectSubset<T, ProduceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Produce.
     * @param {ProduceCreateArgs} args - Arguments to create a Produce.
     * @example
     * // Create one Produce
     * const Produce = await prisma.produce.create({
     *   data: {
     *     // ... data to create a Produce
     *   }
     * })
     * 
     */
    create<T extends ProduceCreateArgs>(args: SelectSubset<T, ProduceCreateArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Produces.
     * @param {ProduceCreateManyArgs} args - Arguments to create many Produces.
     * @example
     * // Create many Produces
     * const produce = await prisma.produce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProduceCreateManyArgs>(args?: SelectSubset<T, ProduceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produces and returns the data saved in the database.
     * @param {ProduceCreateManyAndReturnArgs} args - Arguments to create many Produces.
     * @example
     * // Create many Produces
     * const produce = await prisma.produce.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produces and only return the `id`
     * const produceWithIdOnly = await prisma.produce.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProduceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProduceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Produce.
     * @param {ProduceDeleteArgs} args - Arguments to delete one Produce.
     * @example
     * // Delete one Produce
     * const Produce = await prisma.produce.delete({
     *   where: {
     *     // ... filter to delete one Produce
     *   }
     * })
     * 
     */
    delete<T extends ProduceDeleteArgs>(args: SelectSubset<T, ProduceDeleteArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Produce.
     * @param {ProduceUpdateArgs} args - Arguments to update one Produce.
     * @example
     * // Update one Produce
     * const produce = await prisma.produce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProduceUpdateArgs>(args: SelectSubset<T, ProduceUpdateArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Produces.
     * @param {ProduceDeleteManyArgs} args - Arguments to filter Produces to delete.
     * @example
     * // Delete a few Produces
     * const { count } = await prisma.produce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProduceDeleteManyArgs>(args?: SelectSubset<T, ProduceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produces
     * const produce = await prisma.produce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProduceUpdateManyArgs>(args: SelectSubset<T, ProduceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produce.
     * @param {ProduceUpsertArgs} args - Arguments to update or create a Produce.
     * @example
     * // Update or create a Produce
     * const produce = await prisma.produce.upsert({
     *   create: {
     *     // ... data to create a Produce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produce we want to update
     *   }
     * })
     */
    upsert<T extends ProduceUpsertArgs>(args: SelectSubset<T, ProduceUpsertArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Produces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceCountArgs} args - Arguments to filter Produces to count.
     * @example
     * // Count the number of Produces
     * const count = await prisma.produce.count({
     *   where: {
     *     // ... the filter for the Produces we want to count
     *   }
     * })
    **/
    count<T extends ProduceCountArgs>(
      args?: Subset<T, ProduceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProduceAggregateArgs>(args: Subset<T, ProduceAggregateArgs>): Prisma.PrismaPromise<GetProduceAggregateType<T>>

    /**
     * Group by Produce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProduceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProduceGroupByArgs['orderBy'] }
        : { orderBy?: ProduceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProduceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produce model
   */
  readonly fields: ProduceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProduceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfileDefaultArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    orders<T extends Produce$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Produce$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Produce model
   */ 
  interface ProduceFieldRefs {
    readonly id: FieldRef<"Produce", 'String'>
    readonly vendorId: FieldRef<"Produce", 'String'>
    readonly name: FieldRef<"Produce", 'String'>
    readonly description: FieldRef<"Produce", 'String'>
    readonly price: FieldRef<"Produce", 'Decimal'>
    readonly category: FieldRef<"Produce", 'String'>
    readonly certificationStatus: FieldRef<"Produce", 'CertStatus'>
    readonly availableQuantity: FieldRef<"Produce", 'Int'>
    readonly imageUrl: FieldRef<"Produce", 'String'>
    readonly createdAt: FieldRef<"Produce", 'DateTime'>
    readonly updatedAt: FieldRef<"Produce", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Produce findUnique
   */
  export type ProduceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where: ProduceWhereUniqueInput
  }

  /**
   * Produce findUniqueOrThrow
   */
  export type ProduceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where: ProduceWhereUniqueInput
  }

  /**
   * Produce findFirst
   */
  export type ProduceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produces.
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produces.
     */
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }

  /**
   * Produce findFirstOrThrow
   */
  export type ProduceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produce to fetch.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produces.
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produces.
     */
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }

  /**
   * Produce findMany
   */
  export type ProduceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter, which Produces to fetch.
     */
    where?: ProduceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produces to fetch.
     */
    orderBy?: ProduceOrderByWithRelationInput | ProduceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produces.
     */
    cursor?: ProduceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produces.
     */
    skip?: number
    distinct?: ProduceScalarFieldEnum | ProduceScalarFieldEnum[]
  }

  /**
   * Produce create
   */
  export type ProduceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * The data needed to create a Produce.
     */
    data: XOR<ProduceCreateInput, ProduceUncheckedCreateInput>
  }

  /**
   * Produce createMany
   */
  export type ProduceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produces.
     */
    data: ProduceCreateManyInput | ProduceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produce createManyAndReturn
   */
  export type ProduceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Produces.
     */
    data: ProduceCreateManyInput | ProduceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produce update
   */
  export type ProduceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * The data needed to update a Produce.
     */
    data: XOR<ProduceUpdateInput, ProduceUncheckedUpdateInput>
    /**
     * Choose, which Produce to update.
     */
    where: ProduceWhereUniqueInput
  }

  /**
   * Produce updateMany
   */
  export type ProduceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produces.
     */
    data: XOR<ProduceUpdateManyMutationInput, ProduceUncheckedUpdateManyInput>
    /**
     * Filter which Produces to update
     */
    where?: ProduceWhereInput
  }

  /**
   * Produce upsert
   */
  export type ProduceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * The filter to search for the Produce to update in case it exists.
     */
    where: ProduceWhereUniqueInput
    /**
     * In case the Produce found by the `where` argument doesn't exist, create a new Produce with this data.
     */
    create: XOR<ProduceCreateInput, ProduceUncheckedCreateInput>
    /**
     * In case the Produce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProduceUpdateInput, ProduceUncheckedUpdateInput>
  }

  /**
   * Produce delete
   */
  export type ProduceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
    /**
     * Filter which Produce to delete.
     */
    where: ProduceWhereUniqueInput
  }

  /**
   * Produce deleteMany
   */
  export type ProduceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produces to delete
     */
    where?: ProduceWhereInput
  }

  /**
   * Produce.orders
   */
  export type Produce$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Produce without action
   */
  export type ProduceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produce
     */
    select?: ProduceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduceInclude<ExtArgs> | null
  }


  /**
   * Model RentalSpace
   */

  export type AggregateRentalSpace = {
    _count: RentalSpaceCountAggregateOutputType | null
    _avg: RentalSpaceAvgAggregateOutputType | null
    _sum: RentalSpaceSumAggregateOutputType | null
    _min: RentalSpaceMinAggregateOutputType | null
    _max: RentalSpaceMaxAggregateOutputType | null
  }

  export type RentalSpaceAvgAggregateOutputType = {
    pricePerMonth: Decimal | null
  }

  export type RentalSpaceSumAggregateOutputType = {
    pricePerMonth: Decimal | null
  }

  export type RentalSpaceMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    location: string | null
    size: string | null
    pricePerMonth: Decimal | null
    availability: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalSpaceMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    location: string | null
    size: string | null
    pricePerMonth: Decimal | null
    availability: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalSpaceCountAggregateOutputType = {
    id: number
    vendorId: number
    location: number
    size: number
    pricePerMonth: number
    availability: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RentalSpaceAvgAggregateInputType = {
    pricePerMonth?: true
  }

  export type RentalSpaceSumAggregateInputType = {
    pricePerMonth?: true
  }

  export type RentalSpaceMinAggregateInputType = {
    id?: true
    vendorId?: true
    location?: true
    size?: true
    pricePerMonth?: true
    availability?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalSpaceMaxAggregateInputType = {
    id?: true
    vendorId?: true
    location?: true
    size?: true
    pricePerMonth?: true
    availability?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalSpaceCountAggregateInputType = {
    id?: true
    vendorId?: true
    location?: true
    size?: true
    pricePerMonth?: true
    availability?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RentalSpaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalSpace to aggregate.
     */
    where?: RentalSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSpaces to fetch.
     */
    orderBy?: RentalSpaceOrderByWithRelationInput | RentalSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentalSpaces
    **/
    _count?: true | RentalSpaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalSpaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalSpaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalSpaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalSpaceMaxAggregateInputType
  }

  export type GetRentalSpaceAggregateType<T extends RentalSpaceAggregateArgs> = {
        [P in keyof T & keyof AggregateRentalSpace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentalSpace[P]>
      : GetScalarType<T[P], AggregateRentalSpace[P]>
  }




  export type RentalSpaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalSpaceWhereInput
    orderBy?: RentalSpaceOrderByWithAggregationInput | RentalSpaceOrderByWithAggregationInput[]
    by: RentalSpaceScalarFieldEnum[] | RentalSpaceScalarFieldEnum
    having?: RentalSpaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalSpaceCountAggregateInputType | true
    _avg?: RentalSpaceAvgAggregateInputType
    _sum?: RentalSpaceSumAggregateInputType
    _min?: RentalSpaceMinAggregateInputType
    _max?: RentalSpaceMaxAggregateInputType
  }

  export type RentalSpaceGroupByOutputType = {
    id: string
    vendorId: string
    location: string
    size: string
    pricePerMonth: Decimal
    availability: boolean
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: RentalSpaceCountAggregateOutputType | null
    _avg: RentalSpaceAvgAggregateOutputType | null
    _sum: RentalSpaceSumAggregateOutputType | null
    _min: RentalSpaceMinAggregateOutputType | null
    _max: RentalSpaceMaxAggregateOutputType | null
  }

  type GetRentalSpaceGroupByPayload<T extends RentalSpaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalSpaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalSpaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalSpaceGroupByOutputType[P]>
            : GetScalarType<T[P], RentalSpaceGroupByOutputType[P]>
        }
      >
    >


  export type RentalSpaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    location?: boolean
    size?: boolean
    pricePerMonth?: boolean
    availability?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
    plantTrackings?: boolean | RentalSpace$plantTrackingsArgs<ExtArgs>
    bookings?: boolean | RentalSpace$bookingsArgs<ExtArgs>
    _count?: boolean | RentalSpaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalSpace"]>

  export type RentalSpaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    location?: boolean
    size?: boolean
    pricePerMonth?: boolean
    availability?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalSpace"]>

  export type RentalSpaceSelectScalar = {
    id?: boolean
    vendorId?: boolean
    location?: boolean
    size?: boolean
    pricePerMonth?: boolean
    availability?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RentalSpaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
    plantTrackings?: boolean | RentalSpace$plantTrackingsArgs<ExtArgs>
    bookings?: boolean | RentalSpace$bookingsArgs<ExtArgs>
    _count?: boolean | RentalSpaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RentalSpaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }

  export type $RentalSpacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentalSpace"
    objects: {
      vendor: Prisma.$VendorProfilePayload<ExtArgs>
      plantTrackings: Prisma.$PlantTrackingPayload<ExtArgs>[]
      bookings: Prisma.$RentalBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      location: string
      size: string
      pricePerMonth: Prisma.Decimal
      availability: boolean
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rentalSpace"]>
    composites: {}
  }

  type RentalSpaceGetPayload<S extends boolean | null | undefined | RentalSpaceDefaultArgs> = $Result.GetResult<Prisma.$RentalSpacePayload, S>

  type RentalSpaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RentalSpaceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RentalSpaceCountAggregateInputType | true
    }

  export interface RentalSpaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentalSpace'], meta: { name: 'RentalSpace' } }
    /**
     * Find zero or one RentalSpace that matches the filter.
     * @param {RentalSpaceFindUniqueArgs} args - Arguments to find a RentalSpace
     * @example
     * // Get one RentalSpace
     * const rentalSpace = await prisma.rentalSpace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalSpaceFindUniqueArgs>(args: SelectSubset<T, RentalSpaceFindUniqueArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RentalSpace that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RentalSpaceFindUniqueOrThrowArgs} args - Arguments to find a RentalSpace
     * @example
     * // Get one RentalSpace
     * const rentalSpace = await prisma.rentalSpace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalSpaceFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalSpaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RentalSpace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceFindFirstArgs} args - Arguments to find a RentalSpace
     * @example
     * // Get one RentalSpace
     * const rentalSpace = await prisma.rentalSpace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalSpaceFindFirstArgs>(args?: SelectSubset<T, RentalSpaceFindFirstArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RentalSpace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceFindFirstOrThrowArgs} args - Arguments to find a RentalSpace
     * @example
     * // Get one RentalSpace
     * const rentalSpace = await prisma.rentalSpace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalSpaceFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalSpaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RentalSpaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalSpaces
     * const rentalSpaces = await prisma.rentalSpace.findMany()
     * 
     * // Get first 10 RentalSpaces
     * const rentalSpaces = await prisma.rentalSpace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalSpaceWithIdOnly = await prisma.rentalSpace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalSpaceFindManyArgs>(args?: SelectSubset<T, RentalSpaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RentalSpace.
     * @param {RentalSpaceCreateArgs} args - Arguments to create a RentalSpace.
     * @example
     * // Create one RentalSpace
     * const RentalSpace = await prisma.rentalSpace.create({
     *   data: {
     *     // ... data to create a RentalSpace
     *   }
     * })
     * 
     */
    create<T extends RentalSpaceCreateArgs>(args: SelectSubset<T, RentalSpaceCreateArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RentalSpaces.
     * @param {RentalSpaceCreateManyArgs} args - Arguments to create many RentalSpaces.
     * @example
     * // Create many RentalSpaces
     * const rentalSpace = await prisma.rentalSpace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalSpaceCreateManyArgs>(args?: SelectSubset<T, RentalSpaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RentalSpaces and returns the data saved in the database.
     * @param {RentalSpaceCreateManyAndReturnArgs} args - Arguments to create many RentalSpaces.
     * @example
     * // Create many RentalSpaces
     * const rentalSpace = await prisma.rentalSpace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RentalSpaces and only return the `id`
     * const rentalSpaceWithIdOnly = await prisma.rentalSpace.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalSpaceCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalSpaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RentalSpace.
     * @param {RentalSpaceDeleteArgs} args - Arguments to delete one RentalSpace.
     * @example
     * // Delete one RentalSpace
     * const RentalSpace = await prisma.rentalSpace.delete({
     *   where: {
     *     // ... filter to delete one RentalSpace
     *   }
     * })
     * 
     */
    delete<T extends RentalSpaceDeleteArgs>(args: SelectSubset<T, RentalSpaceDeleteArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RentalSpace.
     * @param {RentalSpaceUpdateArgs} args - Arguments to update one RentalSpace.
     * @example
     * // Update one RentalSpace
     * const rentalSpace = await prisma.rentalSpace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalSpaceUpdateArgs>(args: SelectSubset<T, RentalSpaceUpdateArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RentalSpaces.
     * @param {RentalSpaceDeleteManyArgs} args - Arguments to filter RentalSpaces to delete.
     * @example
     * // Delete a few RentalSpaces
     * const { count } = await prisma.rentalSpace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalSpaceDeleteManyArgs>(args?: SelectSubset<T, RentalSpaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalSpaces
     * const rentalSpace = await prisma.rentalSpace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalSpaceUpdateManyArgs>(args: SelectSubset<T, RentalSpaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RentalSpace.
     * @param {RentalSpaceUpsertArgs} args - Arguments to update or create a RentalSpace.
     * @example
     * // Update or create a RentalSpace
     * const rentalSpace = await prisma.rentalSpace.upsert({
     *   create: {
     *     // ... data to create a RentalSpace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalSpace we want to update
     *   }
     * })
     */
    upsert<T extends RentalSpaceUpsertArgs>(args: SelectSubset<T, RentalSpaceUpsertArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RentalSpaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceCountArgs} args - Arguments to filter RentalSpaces to count.
     * @example
     * // Count the number of RentalSpaces
     * const count = await prisma.rentalSpace.count({
     *   where: {
     *     // ... the filter for the RentalSpaces we want to count
     *   }
     * })
    **/
    count<T extends RentalSpaceCountArgs>(
      args?: Subset<T, RentalSpaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalSpaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentalSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalSpaceAggregateArgs>(args: Subset<T, RentalSpaceAggregateArgs>): Prisma.PrismaPromise<GetRentalSpaceAggregateType<T>>

    /**
     * Group by RentalSpace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalSpaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentalSpaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalSpaceGroupByArgs['orderBy'] }
        : { orderBy?: RentalSpaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentalSpaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalSpaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentalSpace model
   */
  readonly fields: RentalSpaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentalSpace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalSpaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfileDefaultArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    plantTrackings<T extends RentalSpace$plantTrackingsArgs<ExtArgs> = {}>(args?: Subset<T, RentalSpace$plantTrackingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantTrackingPayload<ExtArgs>, T, "findMany"> | Null>
    bookings<T extends RentalSpace$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, RentalSpace$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalBookingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RentalSpace model
   */ 
  interface RentalSpaceFieldRefs {
    readonly id: FieldRef<"RentalSpace", 'String'>
    readonly vendorId: FieldRef<"RentalSpace", 'String'>
    readonly location: FieldRef<"RentalSpace", 'String'>
    readonly size: FieldRef<"RentalSpace", 'String'>
    readonly pricePerMonth: FieldRef<"RentalSpace", 'Decimal'>
    readonly availability: FieldRef<"RentalSpace", 'Boolean'>
    readonly description: FieldRef<"RentalSpace", 'String'>
    readonly createdAt: FieldRef<"RentalSpace", 'DateTime'>
    readonly updatedAt: FieldRef<"RentalSpace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RentalSpace findUnique
   */
  export type RentalSpaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter, which RentalSpace to fetch.
     */
    where: RentalSpaceWhereUniqueInput
  }

  /**
   * RentalSpace findUniqueOrThrow
   */
  export type RentalSpaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter, which RentalSpace to fetch.
     */
    where: RentalSpaceWhereUniqueInput
  }

  /**
   * RentalSpace findFirst
   */
  export type RentalSpaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter, which RentalSpace to fetch.
     */
    where?: RentalSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSpaces to fetch.
     */
    orderBy?: RentalSpaceOrderByWithRelationInput | RentalSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalSpaces.
     */
    cursor?: RentalSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalSpaces.
     */
    distinct?: RentalSpaceScalarFieldEnum | RentalSpaceScalarFieldEnum[]
  }

  /**
   * RentalSpace findFirstOrThrow
   */
  export type RentalSpaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter, which RentalSpace to fetch.
     */
    where?: RentalSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSpaces to fetch.
     */
    orderBy?: RentalSpaceOrderByWithRelationInput | RentalSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalSpaces.
     */
    cursor?: RentalSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSpaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalSpaces.
     */
    distinct?: RentalSpaceScalarFieldEnum | RentalSpaceScalarFieldEnum[]
  }

  /**
   * RentalSpace findMany
   */
  export type RentalSpaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter, which RentalSpaces to fetch.
     */
    where?: RentalSpaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalSpaces to fetch.
     */
    orderBy?: RentalSpaceOrderByWithRelationInput | RentalSpaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentalSpaces.
     */
    cursor?: RentalSpaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalSpaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalSpaces.
     */
    skip?: number
    distinct?: RentalSpaceScalarFieldEnum | RentalSpaceScalarFieldEnum[]
  }

  /**
   * RentalSpace create
   */
  export type RentalSpaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * The data needed to create a RentalSpace.
     */
    data: XOR<RentalSpaceCreateInput, RentalSpaceUncheckedCreateInput>
  }

  /**
   * RentalSpace createMany
   */
  export type RentalSpaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalSpaces.
     */
    data: RentalSpaceCreateManyInput | RentalSpaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentalSpace createManyAndReturn
   */
  export type RentalSpaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RentalSpaces.
     */
    data: RentalSpaceCreateManyInput | RentalSpaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalSpace update
   */
  export type RentalSpaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * The data needed to update a RentalSpace.
     */
    data: XOR<RentalSpaceUpdateInput, RentalSpaceUncheckedUpdateInput>
    /**
     * Choose, which RentalSpace to update.
     */
    where: RentalSpaceWhereUniqueInput
  }

  /**
   * RentalSpace updateMany
   */
  export type RentalSpaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalSpaces.
     */
    data: XOR<RentalSpaceUpdateManyMutationInput, RentalSpaceUncheckedUpdateManyInput>
    /**
     * Filter which RentalSpaces to update
     */
    where?: RentalSpaceWhereInput
  }

  /**
   * RentalSpace upsert
   */
  export type RentalSpaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * The filter to search for the RentalSpace to update in case it exists.
     */
    where: RentalSpaceWhereUniqueInput
    /**
     * In case the RentalSpace found by the `where` argument doesn't exist, create a new RentalSpace with this data.
     */
    create: XOR<RentalSpaceCreateInput, RentalSpaceUncheckedCreateInput>
    /**
     * In case the RentalSpace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalSpaceUpdateInput, RentalSpaceUncheckedUpdateInput>
  }

  /**
   * RentalSpace delete
   */
  export type RentalSpaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
    /**
     * Filter which RentalSpace to delete.
     */
    where: RentalSpaceWhereUniqueInput
  }

  /**
   * RentalSpace deleteMany
   */
  export type RentalSpaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalSpaces to delete
     */
    where?: RentalSpaceWhereInput
  }

  /**
   * RentalSpace.plantTrackings
   */
  export type RentalSpace$plantTrackingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTracking
     */
    select?: PlantTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTrackingInclude<ExtArgs> | null
    where?: PlantTrackingWhereInput
    orderBy?: PlantTrackingOrderByWithRelationInput | PlantTrackingOrderByWithRelationInput[]
    cursor?: PlantTrackingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlantTrackingScalarFieldEnum | PlantTrackingScalarFieldEnum[]
  }

  /**
   * RentalSpace.bookings
   */
  export type RentalSpace$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalBooking
     */
    select?: RentalBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalBookingInclude<ExtArgs> | null
    where?: RentalBookingWhereInput
    orderBy?: RentalBookingOrderByWithRelationInput | RentalBookingOrderByWithRelationInput[]
    cursor?: RentalBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalBookingScalarFieldEnum | RentalBookingScalarFieldEnum[]
  }

  /**
   * RentalSpace without action
   */
  export type RentalSpaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalSpace
     */
    select?: RentalSpaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalSpaceInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    quantity: number | null
    totalPrice: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    quantity: number | null
    totalPrice: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    produceId: string | null
    vendorId: string | null
    quantity: number | null
    totalPrice: Decimal | null
    status: $Enums.OrderStatus | null
    orderDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    produceId: string | null
    vendorId: string | null
    quantity: number | null
    totalPrice: Decimal | null
    status: $Enums.OrderStatus | null
    orderDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    produceId: number
    vendorId: number
    quantity: number
    totalPrice: number
    status: number
    orderDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    quantity?: true
    totalPrice?: true
  }

  export type OrderSumAggregateInputType = {
    quantity?: true
    totalPrice?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    produceId?: true
    vendorId?: true
    quantity?: true
    totalPrice?: true
    status?: true
    orderDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    produceId?: true
    vendorId?: true
    quantity?: true
    totalPrice?: true
    status?: true
    orderDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    produceId?: true
    vendorId?: true
    quantity?: true
    totalPrice?: true
    status?: true
    orderDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string
    produceId: string
    vendorId: string
    quantity: number
    totalPrice: Decimal
    status: $Enums.OrderStatus
    orderDate: Date
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    produceId?: boolean
    vendorId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    status?: boolean
    orderDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    produce?: boolean | ProduceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    produceId?: boolean
    vendorId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    status?: boolean
    orderDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    produce?: boolean | ProduceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    produceId?: boolean
    vendorId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    status?: boolean
    orderDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    produce?: boolean | ProduceDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    produce?: boolean | ProduceDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      produce: Prisma.$ProducePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      produceId: string
      vendorId: string
      quantity: number
      totalPrice: Prisma.Decimal
      status: $Enums.OrderStatus
      orderDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    produce<T extends ProduceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProduceDefaultArgs<ExtArgs>>): Prisma__ProduceClient<$Result.GetResult<Prisma.$ProducePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly produceId: FieldRef<"Order", 'String'>
    readonly vendorId: FieldRef<"Order", 'String'>
    readonly quantity: FieldRef<"Order", 'Int'>
    readonly totalPrice: FieldRef<"Order", 'Decimal'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly orderDate: FieldRef<"Order", 'DateTime'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model CommunityPost
   */

  export type AggregateCommunityPost = {
    _count: CommunityPostCountAggregateOutputType | null
    _min: CommunityPostMinAggregateOutputType | null
    _max: CommunityPostMaxAggregateOutputType | null
  }

  export type CommunityPostMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    postContent: string | null
    postDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityPostMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    postContent: string | null
    postDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityPostCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    postContent: number
    tags: number
    postDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunityPostMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    postContent?: true
    postDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityPostMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    postContent?: true
    postDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityPostCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    postContent?: true
    tags?: true
    postDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunityPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityPost to aggregate.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityPosts
    **/
    _count?: true | CommunityPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityPostMaxAggregateInputType
  }

  export type GetCommunityPostAggregateType<T extends CommunityPostAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityPost[P]>
      : GetScalarType<T[P], AggregateCommunityPost[P]>
  }




  export type CommunityPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityPostWhereInput
    orderBy?: CommunityPostOrderByWithAggregationInput | CommunityPostOrderByWithAggregationInput[]
    by: CommunityPostScalarFieldEnum[] | CommunityPostScalarFieldEnum
    having?: CommunityPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityPostCountAggregateInputType | true
    _min?: CommunityPostMinAggregateInputType
    _max?: CommunityPostMaxAggregateInputType
  }

  export type CommunityPostGroupByOutputType = {
    id: string
    userId: string
    title: string
    postContent: string
    tags: string[]
    postDate: Date
    createdAt: Date
    updatedAt: Date
    _count: CommunityPostCountAggregateOutputType | null
    _min: CommunityPostMinAggregateOutputType | null
    _max: CommunityPostMaxAggregateOutputType | null
  }

  type GetCommunityPostGroupByPayload<T extends CommunityPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityPostGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityPostGroupByOutputType[P]>
        }
      >
    >


  export type CommunityPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    postContent?: boolean
    tags?: boolean
    postDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityPost"]>

  export type CommunityPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    postContent?: boolean
    tags?: boolean
    postDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityPost"]>

  export type CommunityPostSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    postContent?: boolean
    tags?: boolean
    postDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunityPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommunityPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommunityPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      postContent: string
      tags: string[]
      postDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["communityPost"]>
    composites: {}
  }

  type CommunityPostGetPayload<S extends boolean | null | undefined | CommunityPostDefaultArgs> = $Result.GetResult<Prisma.$CommunityPostPayload, S>

  type CommunityPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommunityPostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommunityPostCountAggregateInputType | true
    }

  export interface CommunityPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityPost'], meta: { name: 'CommunityPost' } }
    /**
     * Find zero or one CommunityPost that matches the filter.
     * @param {CommunityPostFindUniqueArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityPostFindUniqueArgs>(args: SelectSubset<T, CommunityPostFindUniqueArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CommunityPost that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CommunityPostFindUniqueOrThrowArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityPostFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CommunityPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostFindFirstArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityPostFindFirstArgs>(args?: SelectSubset<T, CommunityPostFindFirstArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CommunityPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostFindFirstOrThrowArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityPostFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CommunityPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityPosts
     * const communityPosts = await prisma.communityPost.findMany()
     * 
     * // Get first 10 CommunityPosts
     * const communityPosts = await prisma.communityPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityPostWithIdOnly = await prisma.communityPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityPostFindManyArgs>(args?: SelectSubset<T, CommunityPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CommunityPost.
     * @param {CommunityPostCreateArgs} args - Arguments to create a CommunityPost.
     * @example
     * // Create one CommunityPost
     * const CommunityPost = await prisma.communityPost.create({
     *   data: {
     *     // ... data to create a CommunityPost
     *   }
     * })
     * 
     */
    create<T extends CommunityPostCreateArgs>(args: SelectSubset<T, CommunityPostCreateArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CommunityPosts.
     * @param {CommunityPostCreateManyArgs} args - Arguments to create many CommunityPosts.
     * @example
     * // Create many CommunityPosts
     * const communityPost = await prisma.communityPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityPostCreateManyArgs>(args?: SelectSubset<T, CommunityPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityPosts and returns the data saved in the database.
     * @param {CommunityPostCreateManyAndReturnArgs} args - Arguments to create many CommunityPosts.
     * @example
     * // Create many CommunityPosts
     * const communityPost = await prisma.communityPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityPosts and only return the `id`
     * const communityPostWithIdOnly = await prisma.communityPost.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityPostCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CommunityPost.
     * @param {CommunityPostDeleteArgs} args - Arguments to delete one CommunityPost.
     * @example
     * // Delete one CommunityPost
     * const CommunityPost = await prisma.communityPost.delete({
     *   where: {
     *     // ... filter to delete one CommunityPost
     *   }
     * })
     * 
     */
    delete<T extends CommunityPostDeleteArgs>(args: SelectSubset<T, CommunityPostDeleteArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CommunityPost.
     * @param {CommunityPostUpdateArgs} args - Arguments to update one CommunityPost.
     * @example
     * // Update one CommunityPost
     * const communityPost = await prisma.communityPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityPostUpdateArgs>(args: SelectSubset<T, CommunityPostUpdateArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CommunityPosts.
     * @param {CommunityPostDeleteManyArgs} args - Arguments to filter CommunityPosts to delete.
     * @example
     * // Delete a few CommunityPosts
     * const { count } = await prisma.communityPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityPostDeleteManyArgs>(args?: SelectSubset<T, CommunityPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityPosts
     * const communityPost = await prisma.communityPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityPostUpdateManyArgs>(args: SelectSubset<T, CommunityPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CommunityPost.
     * @param {CommunityPostUpsertArgs} args - Arguments to update or create a CommunityPost.
     * @example
     * // Update or create a CommunityPost
     * const communityPost = await prisma.communityPost.upsert({
     *   create: {
     *     // ... data to create a CommunityPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityPost we want to update
     *   }
     * })
     */
    upsert<T extends CommunityPostUpsertArgs>(args: SelectSubset<T, CommunityPostUpsertArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CommunityPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostCountArgs} args - Arguments to filter CommunityPosts to count.
     * @example
     * // Count the number of CommunityPosts
     * const count = await prisma.communityPost.count({
     *   where: {
     *     // ... the filter for the CommunityPosts we want to count
     *   }
     * })
    **/
    count<T extends CommunityPostCountArgs>(
      args?: Subset<T, CommunityPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityPostAggregateArgs>(args: Subset<T, CommunityPostAggregateArgs>): Prisma.PrismaPromise<GetCommunityPostAggregateType<T>>

    /**
     * Group by CommunityPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityPostGroupByArgs['orderBy'] }
        : { orderBy?: CommunityPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityPost model
   */
  readonly fields: CommunityPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommunityPost model
   */ 
  interface CommunityPostFieldRefs {
    readonly id: FieldRef<"CommunityPost", 'String'>
    readonly userId: FieldRef<"CommunityPost", 'String'>
    readonly title: FieldRef<"CommunityPost", 'String'>
    readonly postContent: FieldRef<"CommunityPost", 'String'>
    readonly tags: FieldRef<"CommunityPost", 'String[]'>
    readonly postDate: FieldRef<"CommunityPost", 'DateTime'>
    readonly createdAt: FieldRef<"CommunityPost", 'DateTime'>
    readonly updatedAt: FieldRef<"CommunityPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunityPost findUnique
   */
  export type CommunityPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost findUniqueOrThrow
   */
  export type CommunityPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost findFirst
   */
  export type CommunityPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityPosts.
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityPosts.
     */
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityPost findFirstOrThrow
   */
  export type CommunityPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityPosts.
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityPosts.
     */
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityPost findMany
   */
  export type CommunityPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPosts to fetch.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityPosts.
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityPost create
   */
  export type CommunityPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunityPost.
     */
    data: XOR<CommunityPostCreateInput, CommunityPostUncheckedCreateInput>
  }

  /**
   * CommunityPost createMany
   */
  export type CommunityPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityPosts.
     */
    data: CommunityPostCreateManyInput | CommunityPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityPost createManyAndReturn
   */
  export type CommunityPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CommunityPosts.
     */
    data: CommunityPostCreateManyInput | CommunityPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityPost update
   */
  export type CommunityPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunityPost.
     */
    data: XOR<CommunityPostUpdateInput, CommunityPostUncheckedUpdateInput>
    /**
     * Choose, which CommunityPost to update.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost updateMany
   */
  export type CommunityPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityPosts.
     */
    data: XOR<CommunityPostUpdateManyMutationInput, CommunityPostUncheckedUpdateManyInput>
    /**
     * Filter which CommunityPosts to update
     */
    where?: CommunityPostWhereInput
  }

  /**
   * CommunityPost upsert
   */
  export type CommunityPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunityPost to update in case it exists.
     */
    where: CommunityPostWhereUniqueInput
    /**
     * In case the CommunityPost found by the `where` argument doesn't exist, create a new CommunityPost with this data.
     */
    create: XOR<CommunityPostCreateInput, CommunityPostUncheckedCreateInput>
    /**
     * In case the CommunityPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityPostUpdateInput, CommunityPostUncheckedUpdateInput>
  }

  /**
   * CommunityPost delete
   */
  export type CommunityPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter which CommunityPost to delete.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost deleteMany
   */
  export type CommunityPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityPosts to delete
     */
    where?: CommunityPostWhereInput
  }

  /**
   * CommunityPost without action
   */
  export type CommunityPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
  }


  /**
   * Model SustainabilityCert
   */

  export type AggregateSustainabilityCert = {
    _count: SustainabilityCertCountAggregateOutputType | null
    _min: SustainabilityCertMinAggregateOutputType | null
    _max: SustainabilityCertMaxAggregateOutputType | null
  }

  export type SustainabilityCertMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    certifyingAgency: string | null
    certificationDate: Date | null
    documentUrl: string | null
    status: $Enums.CertStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SustainabilityCertMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    certifyingAgency: string | null
    certificationDate: Date | null
    documentUrl: string | null
    status: $Enums.CertStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SustainabilityCertCountAggregateOutputType = {
    id: number
    vendorId: number
    certifyingAgency: number
    certificationDate: number
    documentUrl: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SustainabilityCertMinAggregateInputType = {
    id?: true
    vendorId?: true
    certifyingAgency?: true
    certificationDate?: true
    documentUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SustainabilityCertMaxAggregateInputType = {
    id?: true
    vendorId?: true
    certifyingAgency?: true
    certificationDate?: true
    documentUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SustainabilityCertCountAggregateInputType = {
    id?: true
    vendorId?: true
    certifyingAgency?: true
    certificationDate?: true
    documentUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SustainabilityCertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SustainabilityCert to aggregate.
     */
    where?: SustainabilityCertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SustainabilityCerts to fetch.
     */
    orderBy?: SustainabilityCertOrderByWithRelationInput | SustainabilityCertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SustainabilityCertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SustainabilityCerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SustainabilityCerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SustainabilityCerts
    **/
    _count?: true | SustainabilityCertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SustainabilityCertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SustainabilityCertMaxAggregateInputType
  }

  export type GetSustainabilityCertAggregateType<T extends SustainabilityCertAggregateArgs> = {
        [P in keyof T & keyof AggregateSustainabilityCert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSustainabilityCert[P]>
      : GetScalarType<T[P], AggregateSustainabilityCert[P]>
  }




  export type SustainabilityCertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SustainabilityCertWhereInput
    orderBy?: SustainabilityCertOrderByWithAggregationInput | SustainabilityCertOrderByWithAggregationInput[]
    by: SustainabilityCertScalarFieldEnum[] | SustainabilityCertScalarFieldEnum
    having?: SustainabilityCertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SustainabilityCertCountAggregateInputType | true
    _min?: SustainabilityCertMinAggregateInputType
    _max?: SustainabilityCertMaxAggregateInputType
  }

  export type SustainabilityCertGroupByOutputType = {
    id: string
    vendorId: string
    certifyingAgency: string
    certificationDate: Date
    documentUrl: string | null
    status: $Enums.CertStatus
    createdAt: Date
    updatedAt: Date
    _count: SustainabilityCertCountAggregateOutputType | null
    _min: SustainabilityCertMinAggregateOutputType | null
    _max: SustainabilityCertMaxAggregateOutputType | null
  }

  type GetSustainabilityCertGroupByPayload<T extends SustainabilityCertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SustainabilityCertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SustainabilityCertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SustainabilityCertGroupByOutputType[P]>
            : GetScalarType<T[P], SustainabilityCertGroupByOutputType[P]>
        }
      >
    >


  export type SustainabilityCertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    certifyingAgency?: boolean
    certificationDate?: boolean
    documentUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sustainabilityCert"]>

  export type SustainabilityCertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    certifyingAgency?: boolean
    certificationDate?: boolean
    documentUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sustainabilityCert"]>

  export type SustainabilityCertSelectScalar = {
    id?: boolean
    vendorId?: boolean
    certifyingAgency?: boolean
    certificationDate?: boolean
    documentUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SustainabilityCertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }
  export type SustainabilityCertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorProfileDefaultArgs<ExtArgs>
  }

  export type $SustainabilityCertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SustainabilityCert"
    objects: {
      vendor: Prisma.$VendorProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      certifyingAgency: string
      certificationDate: Date
      documentUrl: string | null
      status: $Enums.CertStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sustainabilityCert"]>
    composites: {}
  }

  type SustainabilityCertGetPayload<S extends boolean | null | undefined | SustainabilityCertDefaultArgs> = $Result.GetResult<Prisma.$SustainabilityCertPayload, S>

  type SustainabilityCertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SustainabilityCertFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SustainabilityCertCountAggregateInputType | true
    }

  export interface SustainabilityCertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SustainabilityCert'], meta: { name: 'SustainabilityCert' } }
    /**
     * Find zero or one SustainabilityCert that matches the filter.
     * @param {SustainabilityCertFindUniqueArgs} args - Arguments to find a SustainabilityCert
     * @example
     * // Get one SustainabilityCert
     * const sustainabilityCert = await prisma.sustainabilityCert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SustainabilityCertFindUniqueArgs>(args: SelectSubset<T, SustainabilityCertFindUniqueArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SustainabilityCert that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SustainabilityCertFindUniqueOrThrowArgs} args - Arguments to find a SustainabilityCert
     * @example
     * // Get one SustainabilityCert
     * const sustainabilityCert = await prisma.sustainabilityCert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SustainabilityCertFindUniqueOrThrowArgs>(args: SelectSubset<T, SustainabilityCertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SustainabilityCert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityCertFindFirstArgs} args - Arguments to find a SustainabilityCert
     * @example
     * // Get one SustainabilityCert
     * const sustainabilityCert = await prisma.sustainabilityCert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SustainabilityCertFindFirstArgs>(args?: SelectSubset<T, SustainabilityCertFindFirstArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SustainabilityCert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityCertFindFirstOrThrowArgs} args - Arguments to find a SustainabilityCert
     * @example
     * // Get one SustainabilityCert
     * const sustainabilityCert = await prisma.sustainabilityCert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SustainabilityCertFindFirstOrThrowArgs>(args?: SelectSubset<T, SustainabilityCertFindFirstOrThrowArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SustainabilityCerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityCertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SustainabilityCerts
     * const sustainabilityCerts = await prisma.sustainabilityCert.findMany()
     * 
     * // Get first 10 SustainabilityCerts
     * const sustainabilityCerts = await prisma.sustainabilityCert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sustainabilityCertWithIdOnly = await prisma.sustainabilityCert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SustainabilityCertFindManyArgs>(args?: SelectSubset<T, SustainabilityCertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SustainabilityCert.
     * @param {SustainabilityCertCreateArgs} args - Arguments to create a SustainabilityCert.
     * @example
     * // Create one SustainabilityCert
     * const SustainabilityCert = await prisma.sustainabilityCert.create({
     *   data: {
     *     // ... data to create a SustainabilityCert
     *   }
     * })
     * 
     */
    create<T extends SustainabilityCertCreateArgs>(args: SelectSubset<T, SustainabilityCertCreateArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SustainabilityCerts.
     * @param {SustainabilityCertCreateManyArgs} args - Arguments to create many SustainabilityCerts.
     * @example
     * // Create many SustainabilityCerts
     * const sustainabilityCert = await prisma.sustainabilityCert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SustainabilityCertCreateManyArgs>(args?: SelectSubset<T, SustainabilityCertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SustainabilityCerts and returns the data saved in the database.
     * @param {SustainabilityCertCreateManyAndReturnArgs} args - Arguments to create many SustainabilityCerts.
     * @example
     * // Create many SustainabilityCerts
     * const sustainabilityCert = await prisma.sustainabilityCert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SustainabilityCerts and only return the `id`
     * const sustainabilityCertWithIdOnly = await prisma.sustainabilityCert.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SustainabilityCertCreateManyAndReturnArgs>(args?: SelectSubset<T, SustainabilityCertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SustainabilityCert.
     * @param {SustainabilityCertDeleteArgs} args - Arguments to delete one SustainabilityCert.
     * @example
     * // Delete one SustainabilityCert
     * const SustainabilityCert = await prisma.sustainabilityCert.delete({
     *   where: {
     *     // ... filter to delete one SustainabilityCert
     *   }
     * })
     * 
     */
    delete<T extends SustainabilityCertDeleteArgs>(args: SelectSubset<T, SustainabilityCertDeleteArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SustainabilityCert.
     * @param {SustainabilityCertUpdateArgs} args - Arguments to update one SustainabilityCert.
     * @example
     * // Update one SustainabilityCert
     * const sustainabilityCert = await prisma.sustainabilityCert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SustainabilityCertUpdateArgs>(args: SelectSubset<T, SustainabilityCertUpdateArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SustainabilityCerts.
     * @param {SustainabilityCertDeleteManyArgs} args - Arguments to filter SustainabilityCerts to delete.
     * @example
     * // Delete a few SustainabilityCerts
     * const { count } = await prisma.sustainabilityCert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SustainabilityCertDeleteManyArgs>(args?: SelectSubset<T, SustainabilityCertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SustainabilityCerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityCertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SustainabilityCerts
     * const sustainabilityCert = await prisma.sustainabilityCert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SustainabilityCertUpdateManyArgs>(args: SelectSubset<T, SustainabilityCertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SustainabilityCert.
     * @param {SustainabilityCertUpsertArgs} args - Arguments to update or create a SustainabilityCert.
     * @example
     * // Update or create a SustainabilityCert
     * const sustainabilityCert = await prisma.sustainabilityCert.upsert({
     *   create: {
     *     // ... data to create a SustainabilityCert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SustainabilityCert we want to update
     *   }
     * })
     */
    upsert<T extends SustainabilityCertUpsertArgs>(args: SelectSubset<T, SustainabilityCertUpsertArgs<ExtArgs>>): Prisma__SustainabilityCertClient<$Result.GetResult<Prisma.$SustainabilityCertPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SustainabilityCerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityCertCountArgs} args - Arguments to filter SustainabilityCerts to count.
     * @example
     * // Count the number of SustainabilityCerts
     * const count = await prisma.sustainabilityCert.count({
     *   where: {
     *     // ... the filter for the SustainabilityCerts we want to count
     *   }
     * })
    **/
    count<T extends SustainabilityCertCountArgs>(
      args?: Subset<T, SustainabilityCertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SustainabilityCertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SustainabilityCert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityCertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SustainabilityCertAggregateArgs>(args: Subset<T, SustainabilityCertAggregateArgs>): Prisma.PrismaPromise<GetSustainabilityCertAggregateType<T>>

    /**
     * Group by SustainabilityCert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SustainabilityCertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SustainabilityCertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SustainabilityCertGroupByArgs['orderBy'] }
        : { orderBy?: SustainabilityCertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SustainabilityCertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSustainabilityCertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SustainabilityCert model
   */
  readonly fields: SustainabilityCertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SustainabilityCert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SustainabilityCertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorProfileDefaultArgs<ExtArgs>>): Prisma__VendorProfileClient<$Result.GetResult<Prisma.$VendorProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SustainabilityCert model
   */ 
  interface SustainabilityCertFieldRefs {
    readonly id: FieldRef<"SustainabilityCert", 'String'>
    readonly vendorId: FieldRef<"SustainabilityCert", 'String'>
    readonly certifyingAgency: FieldRef<"SustainabilityCert", 'String'>
    readonly certificationDate: FieldRef<"SustainabilityCert", 'DateTime'>
    readonly documentUrl: FieldRef<"SustainabilityCert", 'String'>
    readonly status: FieldRef<"SustainabilityCert", 'CertStatus'>
    readonly createdAt: FieldRef<"SustainabilityCert", 'DateTime'>
    readonly updatedAt: FieldRef<"SustainabilityCert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SustainabilityCert findUnique
   */
  export type SustainabilityCertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * Filter, which SustainabilityCert to fetch.
     */
    where: SustainabilityCertWhereUniqueInput
  }

  /**
   * SustainabilityCert findUniqueOrThrow
   */
  export type SustainabilityCertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * Filter, which SustainabilityCert to fetch.
     */
    where: SustainabilityCertWhereUniqueInput
  }

  /**
   * SustainabilityCert findFirst
   */
  export type SustainabilityCertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * Filter, which SustainabilityCert to fetch.
     */
    where?: SustainabilityCertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SustainabilityCerts to fetch.
     */
    orderBy?: SustainabilityCertOrderByWithRelationInput | SustainabilityCertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SustainabilityCerts.
     */
    cursor?: SustainabilityCertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SustainabilityCerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SustainabilityCerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SustainabilityCerts.
     */
    distinct?: SustainabilityCertScalarFieldEnum | SustainabilityCertScalarFieldEnum[]
  }

  /**
   * SustainabilityCert findFirstOrThrow
   */
  export type SustainabilityCertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * Filter, which SustainabilityCert to fetch.
     */
    where?: SustainabilityCertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SustainabilityCerts to fetch.
     */
    orderBy?: SustainabilityCertOrderByWithRelationInput | SustainabilityCertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SustainabilityCerts.
     */
    cursor?: SustainabilityCertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SustainabilityCerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SustainabilityCerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SustainabilityCerts.
     */
    distinct?: SustainabilityCertScalarFieldEnum | SustainabilityCertScalarFieldEnum[]
  }

  /**
   * SustainabilityCert findMany
   */
  export type SustainabilityCertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * Filter, which SustainabilityCerts to fetch.
     */
    where?: SustainabilityCertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SustainabilityCerts to fetch.
     */
    orderBy?: SustainabilityCertOrderByWithRelationInput | SustainabilityCertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SustainabilityCerts.
     */
    cursor?: SustainabilityCertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SustainabilityCerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SustainabilityCerts.
     */
    skip?: number
    distinct?: SustainabilityCertScalarFieldEnum | SustainabilityCertScalarFieldEnum[]
  }

  /**
   * SustainabilityCert create
   */
  export type SustainabilityCertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * The data needed to create a SustainabilityCert.
     */
    data: XOR<SustainabilityCertCreateInput, SustainabilityCertUncheckedCreateInput>
  }

  /**
   * SustainabilityCert createMany
   */
  export type SustainabilityCertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SustainabilityCerts.
     */
    data: SustainabilityCertCreateManyInput | SustainabilityCertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SustainabilityCert createManyAndReturn
   */
  export type SustainabilityCertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SustainabilityCerts.
     */
    data: SustainabilityCertCreateManyInput | SustainabilityCertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SustainabilityCert update
   */
  export type SustainabilityCertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * The data needed to update a SustainabilityCert.
     */
    data: XOR<SustainabilityCertUpdateInput, SustainabilityCertUncheckedUpdateInput>
    /**
     * Choose, which SustainabilityCert to update.
     */
    where: SustainabilityCertWhereUniqueInput
  }

  /**
   * SustainabilityCert updateMany
   */
  export type SustainabilityCertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SustainabilityCerts.
     */
    data: XOR<SustainabilityCertUpdateManyMutationInput, SustainabilityCertUncheckedUpdateManyInput>
    /**
     * Filter which SustainabilityCerts to update
     */
    where?: SustainabilityCertWhereInput
  }

  /**
   * SustainabilityCert upsert
   */
  export type SustainabilityCertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * The filter to search for the SustainabilityCert to update in case it exists.
     */
    where: SustainabilityCertWhereUniqueInput
    /**
     * In case the SustainabilityCert found by the `where` argument doesn't exist, create a new SustainabilityCert with this data.
     */
    create: XOR<SustainabilityCertCreateInput, SustainabilityCertUncheckedCreateInput>
    /**
     * In case the SustainabilityCert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SustainabilityCertUpdateInput, SustainabilityCertUncheckedUpdateInput>
  }

  /**
   * SustainabilityCert delete
   */
  export type SustainabilityCertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
    /**
     * Filter which SustainabilityCert to delete.
     */
    where: SustainabilityCertWhereUniqueInput
  }

  /**
   * SustainabilityCert deleteMany
   */
  export type SustainabilityCertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SustainabilityCerts to delete
     */
    where?: SustainabilityCertWhereInput
  }

  /**
   * SustainabilityCert without action
   */
  export type SustainabilityCertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SustainabilityCert
     */
    select?: SustainabilityCertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SustainabilityCertInclude<ExtArgs> | null
  }


  /**
   * Model PlantTracking
   */

  export type AggregatePlantTracking = {
    _count: PlantTrackingCountAggregateOutputType | null
    _min: PlantTrackingMinAggregateOutputType | null
    _max: PlantTrackingMaxAggregateOutputType | null
  }

  export type PlantTrackingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    rentalSpaceId: string | null
    plantName: string | null
    growthStage: string | null
    healthStatus: string | null
    harvestDate: Date | null
    notes: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlantTrackingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    rentalSpaceId: string | null
    plantName: string | null
    growthStage: string | null
    healthStatus: string | null
    harvestDate: Date | null
    notes: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlantTrackingCountAggregateOutputType = {
    id: number
    userId: number
    rentalSpaceId: number
    plantName: number
    growthStage: number
    healthStatus: number
    harvestDate: number
    notes: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlantTrackingMinAggregateInputType = {
    id?: true
    userId?: true
    rentalSpaceId?: true
    plantName?: true
    growthStage?: true
    healthStatus?: true
    harvestDate?: true
    notes?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlantTrackingMaxAggregateInputType = {
    id?: true
    userId?: true
    rentalSpaceId?: true
    plantName?: true
    growthStage?: true
    healthStatus?: true
    harvestDate?: true
    notes?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlantTrackingCountAggregateInputType = {
    id?: true
    userId?: true
    rentalSpaceId?: true
    plantName?: true
    growthStage?: true
    healthStatus?: true
    harvestDate?: true
    notes?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlantTrackingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantTracking to aggregate.
     */
    where?: PlantTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantTrackings to fetch.
     */
    orderBy?: PlantTrackingOrderByWithRelationInput | PlantTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlantTrackings
    **/
    _count?: true | PlantTrackingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantTrackingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantTrackingMaxAggregateInputType
  }

  export type GetPlantTrackingAggregateType<T extends PlantTrackingAggregateArgs> = {
        [P in keyof T & keyof AggregatePlantTracking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlantTracking[P]>
      : GetScalarType<T[P], AggregatePlantTracking[P]>
  }




  export type PlantTrackingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantTrackingWhereInput
    orderBy?: PlantTrackingOrderByWithAggregationInput | PlantTrackingOrderByWithAggregationInput[]
    by: PlantTrackingScalarFieldEnum[] | PlantTrackingScalarFieldEnum
    having?: PlantTrackingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantTrackingCountAggregateInputType | true
    _min?: PlantTrackingMinAggregateInputType
    _max?: PlantTrackingMaxAggregateInputType
  }

  export type PlantTrackingGroupByOutputType = {
    id: string
    userId: string
    rentalSpaceId: string
    plantName: string
    growthStage: string
    healthStatus: string
    harvestDate: Date | null
    notes: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: PlantTrackingCountAggregateOutputType | null
    _min: PlantTrackingMinAggregateOutputType | null
    _max: PlantTrackingMaxAggregateOutputType | null
  }

  type GetPlantTrackingGroupByPayload<T extends PlantTrackingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantTrackingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantTrackingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantTrackingGroupByOutputType[P]>
            : GetScalarType<T[P], PlantTrackingGroupByOutputType[P]>
        }
      >
    >


  export type PlantTrackingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rentalSpaceId?: boolean
    plantName?: boolean
    growthStage?: boolean
    healthStatus?: boolean
    harvestDate?: boolean
    notes?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    rentalSpace?: boolean | RentalSpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantTracking"]>

  export type PlantTrackingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rentalSpaceId?: boolean
    plantName?: boolean
    growthStage?: boolean
    healthStatus?: boolean
    harvestDate?: boolean
    notes?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    rentalSpace?: boolean | RentalSpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plantTracking"]>

  export type PlantTrackingSelectScalar = {
    id?: boolean
    userId?: boolean
    rentalSpaceId?: boolean
    plantName?: boolean
    growthStage?: boolean
    healthStatus?: boolean
    harvestDate?: boolean
    notes?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlantTrackingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    rentalSpace?: boolean | RentalSpaceDefaultArgs<ExtArgs>
  }
  export type PlantTrackingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    rentalSpace?: boolean | RentalSpaceDefaultArgs<ExtArgs>
  }

  export type $PlantTrackingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlantTracking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      rentalSpace: Prisma.$RentalSpacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      rentalSpaceId: string
      plantName: string
      growthStage: string
      healthStatus: string
      harvestDate: Date | null
      notes: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plantTracking"]>
    composites: {}
  }

  type PlantTrackingGetPayload<S extends boolean | null | undefined | PlantTrackingDefaultArgs> = $Result.GetResult<Prisma.$PlantTrackingPayload, S>

  type PlantTrackingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlantTrackingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlantTrackingCountAggregateInputType | true
    }

  export interface PlantTrackingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlantTracking'], meta: { name: 'PlantTracking' } }
    /**
     * Find zero or one PlantTracking that matches the filter.
     * @param {PlantTrackingFindUniqueArgs} args - Arguments to find a PlantTracking
     * @example
     * // Get one PlantTracking
     * const plantTracking = await prisma.plantTracking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantTrackingFindUniqueArgs>(args: SelectSubset<T, PlantTrackingFindUniqueArgs<ExtArgs>>): Prisma__PlantTrackingClient<$Result.GetResult<Prisma.$PlantTrackingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PlantTracking that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlantTrackingFindUniqueOrThrowArgs} args - Arguments to find a PlantTracking
     * @example
     * // Get one PlantTracking
     * const plantTracking = await prisma.plantTracking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantTrackingFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantTrackingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantTrackingClient<$Result.GetResult<Prisma.$PlantTrackingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PlantTracking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantTrackingFindFirstArgs} args - Arguments to find a PlantTracking
     * @example
     * // Get one PlantTracking
     * const plantTracking = await prisma.plantTracking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantTrackingFindFirstArgs>(args?: SelectSubset<T, PlantTrackingFindFirstArgs<ExtArgs>>): Prisma__PlantTrackingClient<$Result.GetResult<Prisma.$PlantTrackingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PlantTracking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantTrackingFindFirstOrThrowArgs} args - Arguments to find a PlantTracking
     * @example
     * // Get one PlantTracking
     * const plantTracking = await prisma.plantTracking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantTrackingFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantTrackingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantTrackingClient<$Result.GetResult<Prisma.$PlantTrackingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PlantTrackings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantTrackingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlantTrackings
     * const plantTrackings = await prisma.plantTracking.findMany()
     * 
     * // Get first 10 PlantTrackings
     * const plantTrackings = await prisma.plantTracking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantTrackingWithIdOnly = await prisma.plantTracking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlantTrackingFindManyArgs>(args?: SelectSubset<T, PlantTrackingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantTrackingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PlantTracking.
     * @param {PlantTrackingCreateArgs} args - Arguments to create a PlantTracking.
     * @example
     * // Create one PlantTracking
     * const PlantTracking = await prisma.plantTracking.create({
     *   data: {
     *     // ... data to create a PlantTracking
     *   }
     * })
     * 
     */
    create<T extends PlantTrackingCreateArgs>(args: SelectSubset<T, PlantTrackingCreateArgs<ExtArgs>>): Prisma__PlantTrackingClient<$Result.GetResult<Prisma.$PlantTrackingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PlantTrackings.
     * @param {PlantTrackingCreateManyArgs} args - Arguments to create many PlantTrackings.
     * @example
     * // Create many PlantTrackings
     * const plantTracking = await prisma.plantTracking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantTrackingCreateManyArgs>(args?: SelectSubset<T, PlantTrackingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlantTrackings and returns the data saved in the database.
     * @param {PlantTrackingCreateManyAndReturnArgs} args - Arguments to create many PlantTrackings.
     * @example
     * // Create many PlantTrackings
     * const plantTracking = await prisma.plantTracking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlantTrackings and only return the `id`
     * const plantTrackingWithIdOnly = await prisma.plantTracking.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlantTrackingCreateManyAndReturnArgs>(args?: SelectSubset<T, PlantTrackingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantTrackingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PlantTracking.
     * @param {PlantTrackingDeleteArgs} args - Arguments to delete one PlantTracking.
     * @example
     * // Delete one PlantTracking
     * const PlantTracking = await prisma.plantTracking.delete({
     *   where: {
     *     // ... filter to delete one PlantTracking
     *   }
     * })
     * 
     */
    delete<T extends PlantTrackingDeleteArgs>(args: SelectSubset<T, PlantTrackingDeleteArgs<ExtArgs>>): Prisma__PlantTrackingClient<$Result.GetResult<Prisma.$PlantTrackingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PlantTracking.
     * @param {PlantTrackingUpdateArgs} args - Arguments to update one PlantTracking.
     * @example
     * // Update one PlantTracking
     * const plantTracking = await prisma.plantTracking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantTrackingUpdateArgs>(args: SelectSubset<T, PlantTrackingUpdateArgs<ExtArgs>>): Prisma__PlantTrackingClient<$Result.GetResult<Prisma.$PlantTrackingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PlantTrackings.
     * @param {PlantTrackingDeleteManyArgs} args - Arguments to filter PlantTrackings to delete.
     * @example
     * // Delete a few PlantTrackings
     * const { count } = await prisma.plantTracking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantTrackingDeleteManyArgs>(args?: SelectSubset<T, PlantTrackingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlantTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantTrackingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlantTrackings
     * const plantTracking = await prisma.plantTracking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantTrackingUpdateManyArgs>(args: SelectSubset<T, PlantTrackingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlantTracking.
     * @param {PlantTrackingUpsertArgs} args - Arguments to update or create a PlantTracking.
     * @example
     * // Update or create a PlantTracking
     * const plantTracking = await prisma.plantTracking.upsert({
     *   create: {
     *     // ... data to create a PlantTracking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlantTracking we want to update
     *   }
     * })
     */
    upsert<T extends PlantTrackingUpsertArgs>(args: SelectSubset<T, PlantTrackingUpsertArgs<ExtArgs>>): Prisma__PlantTrackingClient<$Result.GetResult<Prisma.$PlantTrackingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PlantTrackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantTrackingCountArgs} args - Arguments to filter PlantTrackings to count.
     * @example
     * // Count the number of PlantTrackings
     * const count = await prisma.plantTracking.count({
     *   where: {
     *     // ... the filter for the PlantTrackings we want to count
     *   }
     * })
    **/
    count<T extends PlantTrackingCountArgs>(
      args?: Subset<T, PlantTrackingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantTrackingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlantTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantTrackingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlantTrackingAggregateArgs>(args: Subset<T, PlantTrackingAggregateArgs>): Prisma.PrismaPromise<GetPlantTrackingAggregateType<T>>

    /**
     * Group by PlantTracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantTrackingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlantTrackingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantTrackingGroupByArgs['orderBy'] }
        : { orderBy?: PlantTrackingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlantTrackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantTrackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlantTracking model
   */
  readonly fields: PlantTrackingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlantTracking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantTrackingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    rentalSpace<T extends RentalSpaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RentalSpaceDefaultArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlantTracking model
   */ 
  interface PlantTrackingFieldRefs {
    readonly id: FieldRef<"PlantTracking", 'String'>
    readonly userId: FieldRef<"PlantTracking", 'String'>
    readonly rentalSpaceId: FieldRef<"PlantTracking", 'String'>
    readonly plantName: FieldRef<"PlantTracking", 'String'>
    readonly growthStage: FieldRef<"PlantTracking", 'String'>
    readonly healthStatus: FieldRef<"PlantTracking", 'String'>
    readonly harvestDate: FieldRef<"PlantTracking", 'DateTime'>
    readonly notes: FieldRef<"PlantTracking", 'String'>
    readonly imageUrl: FieldRef<"PlantTracking", 'String'>
    readonly createdAt: FieldRef<"PlantTracking", 'DateTime'>
    readonly updatedAt: FieldRef<"PlantTracking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlantTracking findUnique
   */
  export type PlantTrackingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTracking
     */
    select?: PlantTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTrackingInclude<ExtArgs> | null
    /**
     * Filter, which PlantTracking to fetch.
     */
    where: PlantTrackingWhereUniqueInput
  }

  /**
   * PlantTracking findUniqueOrThrow
   */
  export type PlantTrackingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTracking
     */
    select?: PlantTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTrackingInclude<ExtArgs> | null
    /**
     * Filter, which PlantTracking to fetch.
     */
    where: PlantTrackingWhereUniqueInput
  }

  /**
   * PlantTracking findFirst
   */
  export type PlantTrackingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTracking
     */
    select?: PlantTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTrackingInclude<ExtArgs> | null
    /**
     * Filter, which PlantTracking to fetch.
     */
    where?: PlantTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantTrackings to fetch.
     */
    orderBy?: PlantTrackingOrderByWithRelationInput | PlantTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantTrackings.
     */
    cursor?: PlantTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantTrackings.
     */
    distinct?: PlantTrackingScalarFieldEnum | PlantTrackingScalarFieldEnum[]
  }

  /**
   * PlantTracking findFirstOrThrow
   */
  export type PlantTrackingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTracking
     */
    select?: PlantTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTrackingInclude<ExtArgs> | null
    /**
     * Filter, which PlantTracking to fetch.
     */
    where?: PlantTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantTrackings to fetch.
     */
    orderBy?: PlantTrackingOrderByWithRelationInput | PlantTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlantTrackings.
     */
    cursor?: PlantTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantTrackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlantTrackings.
     */
    distinct?: PlantTrackingScalarFieldEnum | PlantTrackingScalarFieldEnum[]
  }

  /**
   * PlantTracking findMany
   */
  export type PlantTrackingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTracking
     */
    select?: PlantTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTrackingInclude<ExtArgs> | null
    /**
     * Filter, which PlantTrackings to fetch.
     */
    where?: PlantTrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlantTrackings to fetch.
     */
    orderBy?: PlantTrackingOrderByWithRelationInput | PlantTrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlantTrackings.
     */
    cursor?: PlantTrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlantTrackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlantTrackings.
     */
    skip?: number
    distinct?: PlantTrackingScalarFieldEnum | PlantTrackingScalarFieldEnum[]
  }

  /**
   * PlantTracking create
   */
  export type PlantTrackingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTracking
     */
    select?: PlantTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTrackingInclude<ExtArgs> | null
    /**
     * The data needed to create a PlantTracking.
     */
    data: XOR<PlantTrackingCreateInput, PlantTrackingUncheckedCreateInput>
  }

  /**
   * PlantTracking createMany
   */
  export type PlantTrackingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlantTrackings.
     */
    data: PlantTrackingCreateManyInput | PlantTrackingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlantTracking createManyAndReturn
   */
  export type PlantTrackingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTracking
     */
    select?: PlantTrackingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PlantTrackings.
     */
    data: PlantTrackingCreateManyInput | PlantTrackingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTrackingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlantTracking update
   */
  export type PlantTrackingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTracking
     */
    select?: PlantTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTrackingInclude<ExtArgs> | null
    /**
     * The data needed to update a PlantTracking.
     */
    data: XOR<PlantTrackingUpdateInput, PlantTrackingUncheckedUpdateInput>
    /**
     * Choose, which PlantTracking to update.
     */
    where: PlantTrackingWhereUniqueInput
  }

  /**
   * PlantTracking updateMany
   */
  export type PlantTrackingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlantTrackings.
     */
    data: XOR<PlantTrackingUpdateManyMutationInput, PlantTrackingUncheckedUpdateManyInput>
    /**
     * Filter which PlantTrackings to update
     */
    where?: PlantTrackingWhereInput
  }

  /**
   * PlantTracking upsert
   */
  export type PlantTrackingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTracking
     */
    select?: PlantTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTrackingInclude<ExtArgs> | null
    /**
     * The filter to search for the PlantTracking to update in case it exists.
     */
    where: PlantTrackingWhereUniqueInput
    /**
     * In case the PlantTracking found by the `where` argument doesn't exist, create a new PlantTracking with this data.
     */
    create: XOR<PlantTrackingCreateInput, PlantTrackingUncheckedCreateInput>
    /**
     * In case the PlantTracking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantTrackingUpdateInput, PlantTrackingUncheckedUpdateInput>
  }

  /**
   * PlantTracking delete
   */
  export type PlantTrackingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTracking
     */
    select?: PlantTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTrackingInclude<ExtArgs> | null
    /**
     * Filter which PlantTracking to delete.
     */
    where: PlantTrackingWhereUniqueInput
  }

  /**
   * PlantTracking deleteMany
   */
  export type PlantTrackingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlantTrackings to delete
     */
    where?: PlantTrackingWhereInput
  }

  /**
   * PlantTracking without action
   */
  export type PlantTrackingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantTracking
     */
    select?: PlantTrackingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantTrackingInclude<ExtArgs> | null
  }


  /**
   * Model RentalBooking
   */

  export type AggregateRentalBooking = {
    _count: RentalBookingCountAggregateOutputType | null
    _avg: RentalBookingAvgAggregateOutputType | null
    _sum: RentalBookingSumAggregateOutputType | null
    _min: RentalBookingMinAggregateOutputType | null
    _max: RentalBookingMaxAggregateOutputType | null
  }

  export type RentalBookingAvgAggregateOutputType = {
    totalPrice: Decimal | null
  }

  export type RentalBookingSumAggregateOutputType = {
    totalPrice: Decimal | null
  }

  export type RentalBookingMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    rentalSpaceId: string | null
    startDate: Date | null
    endDate: Date | null
    totalPrice: Decimal | null
    status: $Enums.BookingStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalBookingMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    rentalSpaceId: string | null
    startDate: Date | null
    endDate: Date | null
    totalPrice: Decimal | null
    status: $Enums.BookingStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalBookingCountAggregateOutputType = {
    id: number
    customerId: number
    rentalSpaceId: number
    startDate: number
    endDate: number
    totalPrice: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RentalBookingAvgAggregateInputType = {
    totalPrice?: true
  }

  export type RentalBookingSumAggregateInputType = {
    totalPrice?: true
  }

  export type RentalBookingMinAggregateInputType = {
    id?: true
    customerId?: true
    rentalSpaceId?: true
    startDate?: true
    endDate?: true
    totalPrice?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalBookingMaxAggregateInputType = {
    id?: true
    customerId?: true
    rentalSpaceId?: true
    startDate?: true
    endDate?: true
    totalPrice?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalBookingCountAggregateInputType = {
    id?: true
    customerId?: true
    rentalSpaceId?: true
    startDate?: true
    endDate?: true
    totalPrice?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RentalBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalBooking to aggregate.
     */
    where?: RentalBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalBookings to fetch.
     */
    orderBy?: RentalBookingOrderByWithRelationInput | RentalBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentalBookings
    **/
    _count?: true | RentalBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalBookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalBookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalBookingMaxAggregateInputType
  }

  export type GetRentalBookingAggregateType<T extends RentalBookingAggregateArgs> = {
        [P in keyof T & keyof AggregateRentalBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentalBooking[P]>
      : GetScalarType<T[P], AggregateRentalBooking[P]>
  }




  export type RentalBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalBookingWhereInput
    orderBy?: RentalBookingOrderByWithAggregationInput | RentalBookingOrderByWithAggregationInput[]
    by: RentalBookingScalarFieldEnum[] | RentalBookingScalarFieldEnum
    having?: RentalBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalBookingCountAggregateInputType | true
    _avg?: RentalBookingAvgAggregateInputType
    _sum?: RentalBookingSumAggregateInputType
    _min?: RentalBookingMinAggregateInputType
    _max?: RentalBookingMaxAggregateInputType
  }

  export type RentalBookingGroupByOutputType = {
    id: string
    customerId: string
    rentalSpaceId: string
    startDate: Date
    endDate: Date
    totalPrice: Decimal
    status: $Enums.BookingStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: RentalBookingCountAggregateOutputType | null
    _avg: RentalBookingAvgAggregateOutputType | null
    _sum: RentalBookingSumAggregateOutputType | null
    _min: RentalBookingMinAggregateOutputType | null
    _max: RentalBookingMaxAggregateOutputType | null
  }

  type GetRentalBookingGroupByPayload<T extends RentalBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalBookingGroupByOutputType[P]>
            : GetScalarType<T[P], RentalBookingGroupByOutputType[P]>
        }
      >
    >


  export type RentalBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    rentalSpaceId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalPrice?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    rentalSpace?: boolean | RentalSpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalBooking"]>

  export type RentalBookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    rentalSpaceId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalPrice?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    rentalSpace?: boolean | RentalSpaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalBooking"]>

  export type RentalBookingSelectScalar = {
    id?: boolean
    customerId?: boolean
    rentalSpaceId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalPrice?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RentalBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    rentalSpace?: boolean | RentalSpaceDefaultArgs<ExtArgs>
  }
  export type RentalBookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    rentalSpace?: boolean | RentalSpaceDefaultArgs<ExtArgs>
  }

  export type $RentalBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentalBooking"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>
      rentalSpace: Prisma.$RentalSpacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      rentalSpaceId: string
      startDate: Date
      endDate: Date
      totalPrice: Prisma.Decimal
      status: $Enums.BookingStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rentalBooking"]>
    composites: {}
  }

  type RentalBookingGetPayload<S extends boolean | null | undefined | RentalBookingDefaultArgs> = $Result.GetResult<Prisma.$RentalBookingPayload, S>

  type RentalBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RentalBookingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RentalBookingCountAggregateInputType | true
    }

  export interface RentalBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentalBooking'], meta: { name: 'RentalBooking' } }
    /**
     * Find zero or one RentalBooking that matches the filter.
     * @param {RentalBookingFindUniqueArgs} args - Arguments to find a RentalBooking
     * @example
     * // Get one RentalBooking
     * const rentalBooking = await prisma.rentalBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalBookingFindUniqueArgs>(args: SelectSubset<T, RentalBookingFindUniqueArgs<ExtArgs>>): Prisma__RentalBookingClient<$Result.GetResult<Prisma.$RentalBookingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RentalBooking that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RentalBookingFindUniqueOrThrowArgs} args - Arguments to find a RentalBooking
     * @example
     * // Get one RentalBooking
     * const rentalBooking = await prisma.rentalBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalBookingClient<$Result.GetResult<Prisma.$RentalBookingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RentalBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalBookingFindFirstArgs} args - Arguments to find a RentalBooking
     * @example
     * // Get one RentalBooking
     * const rentalBooking = await prisma.rentalBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalBookingFindFirstArgs>(args?: SelectSubset<T, RentalBookingFindFirstArgs<ExtArgs>>): Prisma__RentalBookingClient<$Result.GetResult<Prisma.$RentalBookingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RentalBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalBookingFindFirstOrThrowArgs} args - Arguments to find a RentalBooking
     * @example
     * // Get one RentalBooking
     * const rentalBooking = await prisma.rentalBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalBookingClient<$Result.GetResult<Prisma.$RentalBookingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RentalBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalBookings
     * const rentalBookings = await prisma.rentalBooking.findMany()
     * 
     * // Get first 10 RentalBookings
     * const rentalBookings = await prisma.rentalBooking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalBookingWithIdOnly = await prisma.rentalBooking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalBookingFindManyArgs>(args?: SelectSubset<T, RentalBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalBookingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RentalBooking.
     * @param {RentalBookingCreateArgs} args - Arguments to create a RentalBooking.
     * @example
     * // Create one RentalBooking
     * const RentalBooking = await prisma.rentalBooking.create({
     *   data: {
     *     // ... data to create a RentalBooking
     *   }
     * })
     * 
     */
    create<T extends RentalBookingCreateArgs>(args: SelectSubset<T, RentalBookingCreateArgs<ExtArgs>>): Prisma__RentalBookingClient<$Result.GetResult<Prisma.$RentalBookingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RentalBookings.
     * @param {RentalBookingCreateManyArgs} args - Arguments to create many RentalBookings.
     * @example
     * // Create many RentalBookings
     * const rentalBooking = await prisma.rentalBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalBookingCreateManyArgs>(args?: SelectSubset<T, RentalBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RentalBookings and returns the data saved in the database.
     * @param {RentalBookingCreateManyAndReturnArgs} args - Arguments to create many RentalBookings.
     * @example
     * // Create many RentalBookings
     * const rentalBooking = await prisma.rentalBooking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RentalBookings and only return the `id`
     * const rentalBookingWithIdOnly = await prisma.rentalBooking.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalBookingCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalBookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalBookingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RentalBooking.
     * @param {RentalBookingDeleteArgs} args - Arguments to delete one RentalBooking.
     * @example
     * // Delete one RentalBooking
     * const RentalBooking = await prisma.rentalBooking.delete({
     *   where: {
     *     // ... filter to delete one RentalBooking
     *   }
     * })
     * 
     */
    delete<T extends RentalBookingDeleteArgs>(args: SelectSubset<T, RentalBookingDeleteArgs<ExtArgs>>): Prisma__RentalBookingClient<$Result.GetResult<Prisma.$RentalBookingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RentalBooking.
     * @param {RentalBookingUpdateArgs} args - Arguments to update one RentalBooking.
     * @example
     * // Update one RentalBooking
     * const rentalBooking = await prisma.rentalBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalBookingUpdateArgs>(args: SelectSubset<T, RentalBookingUpdateArgs<ExtArgs>>): Prisma__RentalBookingClient<$Result.GetResult<Prisma.$RentalBookingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RentalBookings.
     * @param {RentalBookingDeleteManyArgs} args - Arguments to filter RentalBookings to delete.
     * @example
     * // Delete a few RentalBookings
     * const { count } = await prisma.rentalBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalBookingDeleteManyArgs>(args?: SelectSubset<T, RentalBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalBookings
     * const rentalBooking = await prisma.rentalBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalBookingUpdateManyArgs>(args: SelectSubset<T, RentalBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RentalBooking.
     * @param {RentalBookingUpsertArgs} args - Arguments to update or create a RentalBooking.
     * @example
     * // Update or create a RentalBooking
     * const rentalBooking = await prisma.rentalBooking.upsert({
     *   create: {
     *     // ... data to create a RentalBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalBooking we want to update
     *   }
     * })
     */
    upsert<T extends RentalBookingUpsertArgs>(args: SelectSubset<T, RentalBookingUpsertArgs<ExtArgs>>): Prisma__RentalBookingClient<$Result.GetResult<Prisma.$RentalBookingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RentalBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalBookingCountArgs} args - Arguments to filter RentalBookings to count.
     * @example
     * // Count the number of RentalBookings
     * const count = await prisma.rentalBooking.count({
     *   where: {
     *     // ... the filter for the RentalBookings we want to count
     *   }
     * })
    **/
    count<T extends RentalBookingCountArgs>(
      args?: Subset<T, RentalBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentalBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalBookingAggregateArgs>(args: Subset<T, RentalBookingAggregateArgs>): Prisma.PrismaPromise<GetRentalBookingAggregateType<T>>

    /**
     * Group by RentalBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalBookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentalBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalBookingGroupByArgs['orderBy'] }
        : { orderBy?: RentalBookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentalBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentalBooking model
   */
  readonly fields: RentalBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentalBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    rentalSpace<T extends RentalSpaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RentalSpaceDefaultArgs<ExtArgs>>): Prisma__RentalSpaceClient<$Result.GetResult<Prisma.$RentalSpacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RentalBooking model
   */ 
  interface RentalBookingFieldRefs {
    readonly id: FieldRef<"RentalBooking", 'String'>
    readonly customerId: FieldRef<"RentalBooking", 'String'>
    readonly rentalSpaceId: FieldRef<"RentalBooking", 'String'>
    readonly startDate: FieldRef<"RentalBooking", 'DateTime'>
    readonly endDate: FieldRef<"RentalBooking", 'DateTime'>
    readonly totalPrice: FieldRef<"RentalBooking", 'Decimal'>
    readonly status: FieldRef<"RentalBooking", 'BookingStatus'>
    readonly notes: FieldRef<"RentalBooking", 'String'>
    readonly createdAt: FieldRef<"RentalBooking", 'DateTime'>
    readonly updatedAt: FieldRef<"RentalBooking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RentalBooking findUnique
   */
  export type RentalBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalBooking
     */
    select?: RentalBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalBookingInclude<ExtArgs> | null
    /**
     * Filter, which RentalBooking to fetch.
     */
    where: RentalBookingWhereUniqueInput
  }

  /**
   * RentalBooking findUniqueOrThrow
   */
  export type RentalBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalBooking
     */
    select?: RentalBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalBookingInclude<ExtArgs> | null
    /**
     * Filter, which RentalBooking to fetch.
     */
    where: RentalBookingWhereUniqueInput
  }

  /**
   * RentalBooking findFirst
   */
  export type RentalBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalBooking
     */
    select?: RentalBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalBookingInclude<ExtArgs> | null
    /**
     * Filter, which RentalBooking to fetch.
     */
    where?: RentalBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalBookings to fetch.
     */
    orderBy?: RentalBookingOrderByWithRelationInput | RentalBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalBookings.
     */
    cursor?: RentalBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalBookings.
     */
    distinct?: RentalBookingScalarFieldEnum | RentalBookingScalarFieldEnum[]
  }

  /**
   * RentalBooking findFirstOrThrow
   */
  export type RentalBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalBooking
     */
    select?: RentalBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalBookingInclude<ExtArgs> | null
    /**
     * Filter, which RentalBooking to fetch.
     */
    where?: RentalBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalBookings to fetch.
     */
    orderBy?: RentalBookingOrderByWithRelationInput | RentalBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalBookings.
     */
    cursor?: RentalBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalBookings.
     */
    distinct?: RentalBookingScalarFieldEnum | RentalBookingScalarFieldEnum[]
  }

  /**
   * RentalBooking findMany
   */
  export type RentalBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalBooking
     */
    select?: RentalBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalBookingInclude<ExtArgs> | null
    /**
     * Filter, which RentalBookings to fetch.
     */
    where?: RentalBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalBookings to fetch.
     */
    orderBy?: RentalBookingOrderByWithRelationInput | RentalBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentalBookings.
     */
    cursor?: RentalBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalBookings.
     */
    skip?: number
    distinct?: RentalBookingScalarFieldEnum | RentalBookingScalarFieldEnum[]
  }

  /**
   * RentalBooking create
   */
  export type RentalBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalBooking
     */
    select?: RentalBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalBookingInclude<ExtArgs> | null
    /**
     * The data needed to create a RentalBooking.
     */
    data: XOR<RentalBookingCreateInput, RentalBookingUncheckedCreateInput>
  }

  /**
   * RentalBooking createMany
   */
  export type RentalBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalBookings.
     */
    data: RentalBookingCreateManyInput | RentalBookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentalBooking createManyAndReturn
   */
  export type RentalBookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalBooking
     */
    select?: RentalBookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RentalBookings.
     */
    data: RentalBookingCreateManyInput | RentalBookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalBookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalBooking update
   */
  export type RentalBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalBooking
     */
    select?: RentalBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalBookingInclude<ExtArgs> | null
    /**
     * The data needed to update a RentalBooking.
     */
    data: XOR<RentalBookingUpdateInput, RentalBookingUncheckedUpdateInput>
    /**
     * Choose, which RentalBooking to update.
     */
    where: RentalBookingWhereUniqueInput
  }

  /**
   * RentalBooking updateMany
   */
  export type RentalBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalBookings.
     */
    data: XOR<RentalBookingUpdateManyMutationInput, RentalBookingUncheckedUpdateManyInput>
    /**
     * Filter which RentalBookings to update
     */
    where?: RentalBookingWhereInput
  }

  /**
   * RentalBooking upsert
   */
  export type RentalBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalBooking
     */
    select?: RentalBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalBookingInclude<ExtArgs> | null
    /**
     * The filter to search for the RentalBooking to update in case it exists.
     */
    where: RentalBookingWhereUniqueInput
    /**
     * In case the RentalBooking found by the `where` argument doesn't exist, create a new RentalBooking with this data.
     */
    create: XOR<RentalBookingCreateInput, RentalBookingUncheckedCreateInput>
    /**
     * In case the RentalBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalBookingUpdateInput, RentalBookingUncheckedUpdateInput>
  }

  /**
   * RentalBooking delete
   */
  export type RentalBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalBooking
     */
    select?: RentalBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalBookingInclude<ExtArgs> | null
    /**
     * Filter which RentalBooking to delete.
     */
    where: RentalBookingWhereUniqueInput
  }

  /**
   * RentalBooking deleteMany
   */
  export type RentalBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalBookings to delete
     */
    where?: RentalBookingWhereInput
  }

  /**
   * RentalBooking without action
   */
  export type RentalBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalBooking
     */
    select?: RentalBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalBookingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    otp: 'otp',
    otpExpires: 'otpExpires',
    otpVerified: 'otpVerified',
    resetExpires: 'resetExpires',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VendorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    farmName: 'farmName',
    certificationStatus: 'certificationStatus',
    farmLocation: 'farmLocation',
    isApproved: 'isApproved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VendorProfileScalarFieldEnum = (typeof VendorProfileScalarFieldEnum)[keyof typeof VendorProfileScalarFieldEnum]


  export const ProduceScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    name: 'name',
    description: 'description',
    price: 'price',
    category: 'category',
    certificationStatus: 'certificationStatus',
    availableQuantity: 'availableQuantity',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProduceScalarFieldEnum = (typeof ProduceScalarFieldEnum)[keyof typeof ProduceScalarFieldEnum]


  export const RentalSpaceScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    location: 'location',
    size: 'size',
    pricePerMonth: 'pricePerMonth',
    availability: 'availability',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RentalSpaceScalarFieldEnum = (typeof RentalSpaceScalarFieldEnum)[keyof typeof RentalSpaceScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    produceId: 'produceId',
    vendorId: 'vendorId',
    quantity: 'quantity',
    totalPrice: 'totalPrice',
    status: 'status',
    orderDate: 'orderDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const CommunityPostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    postContent: 'postContent',
    tags: 'tags',
    postDate: 'postDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunityPostScalarFieldEnum = (typeof CommunityPostScalarFieldEnum)[keyof typeof CommunityPostScalarFieldEnum]


  export const SustainabilityCertScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    certifyingAgency: 'certifyingAgency',
    certificationDate: 'certificationDate',
    documentUrl: 'documentUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SustainabilityCertScalarFieldEnum = (typeof SustainabilityCertScalarFieldEnum)[keyof typeof SustainabilityCertScalarFieldEnum]


  export const PlantTrackingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    rentalSpaceId: 'rentalSpaceId',
    plantName: 'plantName',
    growthStage: 'growthStage',
    healthStatus: 'healthStatus',
    harvestDate: 'harvestDate',
    notes: 'notes',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlantTrackingScalarFieldEnum = (typeof PlantTrackingScalarFieldEnum)[keyof typeof PlantTrackingScalarFieldEnum]


  export const RentalBookingScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    rentalSpaceId: 'rentalSpaceId',
    startDate: 'startDate',
    endDate: 'endDate',
    totalPrice: 'totalPrice',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RentalBookingScalarFieldEnum = (typeof RentalBookingScalarFieldEnum)[keyof typeof RentalBookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CertStatus'
   */
  export type EnumCertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CertStatus'>
    


  /**
   * Reference to a field of type 'CertStatus[]'
   */
  export type ListEnumCertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CertStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    otp?: StringNullableFilter<"User"> | string | null
    otpExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    otpVerified?: BoolFilter<"User"> | boolean
    resetExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vendorProfile?: XOR<VendorProfileNullableRelationFilter, VendorProfileWhereInput> | null
    orders?: OrderListRelationFilter
    communityPosts?: CommunityPostListRelationFilter
    plantTrackings?: PlantTrackingListRelationFilter
    rentalBookings?: RentalBookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpires?: SortOrderInput | SortOrder
    otpVerified?: SortOrder
    resetExpires?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendorProfile?: VendorProfileOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    communityPosts?: CommunityPostOrderByRelationAggregateInput
    plantTrackings?: PlantTrackingOrderByRelationAggregateInput
    rentalBookings?: RentalBookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    otp?: StringNullableFilter<"User"> | string | null
    otpExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    otpVerified?: BoolFilter<"User"> | boolean
    resetExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    vendorProfile?: XOR<VendorProfileNullableRelationFilter, VendorProfileWhereInput> | null
    orders?: OrderListRelationFilter
    communityPosts?: CommunityPostListRelationFilter
    plantTrackings?: PlantTrackingListRelationFilter
    rentalBookings?: RentalBookingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpires?: SortOrderInput | SortOrder
    otpVerified?: SortOrder
    resetExpires?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    otpVerified?: BoolWithAggregatesFilter<"User"> | boolean
    resetExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VendorProfileWhereInput = {
    AND?: VendorProfileWhereInput | VendorProfileWhereInput[]
    OR?: VendorProfileWhereInput[]
    NOT?: VendorProfileWhereInput | VendorProfileWhereInput[]
    id?: StringFilter<"VendorProfile"> | string
    userId?: StringFilter<"VendorProfile"> | string
    farmName?: StringFilter<"VendorProfile"> | string
    certificationStatus?: EnumCertStatusFilter<"VendorProfile"> | $Enums.CertStatus
    farmLocation?: StringFilter<"VendorProfile"> | string
    isApproved?: BoolFilter<"VendorProfile"> | boolean
    createdAt?: DateTimeFilter<"VendorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"VendorProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    produces?: ProduceListRelationFilter
    rentalSpaces?: RentalSpaceListRelationFilter
    sustainabilityCerts?: SustainabilityCertListRelationFilter
  }

  export type VendorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    farmName?: SortOrder
    certificationStatus?: SortOrder
    farmLocation?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    produces?: ProduceOrderByRelationAggregateInput
    rentalSpaces?: RentalSpaceOrderByRelationAggregateInput
    sustainabilityCerts?: SustainabilityCertOrderByRelationAggregateInput
  }

  export type VendorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: VendorProfileWhereInput | VendorProfileWhereInput[]
    OR?: VendorProfileWhereInput[]
    NOT?: VendorProfileWhereInput | VendorProfileWhereInput[]
    farmName?: StringFilter<"VendorProfile"> | string
    certificationStatus?: EnumCertStatusFilter<"VendorProfile"> | $Enums.CertStatus
    farmLocation?: StringFilter<"VendorProfile"> | string
    isApproved?: BoolFilter<"VendorProfile"> | boolean
    createdAt?: DateTimeFilter<"VendorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"VendorProfile"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    produces?: ProduceListRelationFilter
    rentalSpaces?: RentalSpaceListRelationFilter
    sustainabilityCerts?: SustainabilityCertListRelationFilter
  }, "id" | "userId">

  export type VendorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    farmName?: SortOrder
    certificationStatus?: SortOrder
    farmLocation?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VendorProfileCountOrderByAggregateInput
    _max?: VendorProfileMaxOrderByAggregateInput
    _min?: VendorProfileMinOrderByAggregateInput
  }

  export type VendorProfileScalarWhereWithAggregatesInput = {
    AND?: VendorProfileScalarWhereWithAggregatesInput | VendorProfileScalarWhereWithAggregatesInput[]
    OR?: VendorProfileScalarWhereWithAggregatesInput[]
    NOT?: VendorProfileScalarWhereWithAggregatesInput | VendorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VendorProfile"> | string
    userId?: StringWithAggregatesFilter<"VendorProfile"> | string
    farmName?: StringWithAggregatesFilter<"VendorProfile"> | string
    certificationStatus?: EnumCertStatusWithAggregatesFilter<"VendorProfile"> | $Enums.CertStatus
    farmLocation?: StringWithAggregatesFilter<"VendorProfile"> | string
    isApproved?: BoolWithAggregatesFilter<"VendorProfile"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"VendorProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VendorProfile"> | Date | string
  }

  export type ProduceWhereInput = {
    AND?: ProduceWhereInput | ProduceWhereInput[]
    OR?: ProduceWhereInput[]
    NOT?: ProduceWhereInput | ProduceWhereInput[]
    id?: StringFilter<"Produce"> | string
    vendorId?: StringFilter<"Produce"> | string
    name?: StringFilter<"Produce"> | string
    description?: StringFilter<"Produce"> | string
    price?: DecimalFilter<"Produce"> | Decimal | DecimalJsLike | number | string
    category?: StringFilter<"Produce"> | string
    certificationStatus?: EnumCertStatusFilter<"Produce"> | $Enums.CertStatus
    availableQuantity?: IntFilter<"Produce"> | number
    imageUrl?: StringNullableFilter<"Produce"> | string | null
    createdAt?: DateTimeFilter<"Produce"> | Date | string
    updatedAt?: DateTimeFilter<"Produce"> | Date | string
    vendor?: XOR<VendorProfileRelationFilter, VendorProfileWhereInput>
    orders?: OrderListRelationFilter
  }

  export type ProduceOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    certificationStatus?: SortOrder
    availableQuantity?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendor?: VendorProfileOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type ProduceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProduceWhereInput | ProduceWhereInput[]
    OR?: ProduceWhereInput[]
    NOT?: ProduceWhereInput | ProduceWhereInput[]
    vendorId?: StringFilter<"Produce"> | string
    name?: StringFilter<"Produce"> | string
    description?: StringFilter<"Produce"> | string
    price?: DecimalFilter<"Produce"> | Decimal | DecimalJsLike | number | string
    category?: StringFilter<"Produce"> | string
    certificationStatus?: EnumCertStatusFilter<"Produce"> | $Enums.CertStatus
    availableQuantity?: IntFilter<"Produce"> | number
    imageUrl?: StringNullableFilter<"Produce"> | string | null
    createdAt?: DateTimeFilter<"Produce"> | Date | string
    updatedAt?: DateTimeFilter<"Produce"> | Date | string
    vendor?: XOR<VendorProfileRelationFilter, VendorProfileWhereInput>
    orders?: OrderListRelationFilter
  }, "id">

  export type ProduceOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    certificationStatus?: SortOrder
    availableQuantity?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProduceCountOrderByAggregateInput
    _avg?: ProduceAvgOrderByAggregateInput
    _max?: ProduceMaxOrderByAggregateInput
    _min?: ProduceMinOrderByAggregateInput
    _sum?: ProduceSumOrderByAggregateInput
  }

  export type ProduceScalarWhereWithAggregatesInput = {
    AND?: ProduceScalarWhereWithAggregatesInput | ProduceScalarWhereWithAggregatesInput[]
    OR?: ProduceScalarWhereWithAggregatesInput[]
    NOT?: ProduceScalarWhereWithAggregatesInput | ProduceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Produce"> | string
    vendorId?: StringWithAggregatesFilter<"Produce"> | string
    name?: StringWithAggregatesFilter<"Produce"> | string
    description?: StringWithAggregatesFilter<"Produce"> | string
    price?: DecimalWithAggregatesFilter<"Produce"> | Decimal | DecimalJsLike | number | string
    category?: StringWithAggregatesFilter<"Produce"> | string
    certificationStatus?: EnumCertStatusWithAggregatesFilter<"Produce"> | $Enums.CertStatus
    availableQuantity?: IntWithAggregatesFilter<"Produce"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Produce"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Produce"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Produce"> | Date | string
  }

  export type RentalSpaceWhereInput = {
    AND?: RentalSpaceWhereInput | RentalSpaceWhereInput[]
    OR?: RentalSpaceWhereInput[]
    NOT?: RentalSpaceWhereInput | RentalSpaceWhereInput[]
    id?: StringFilter<"RentalSpace"> | string
    vendorId?: StringFilter<"RentalSpace"> | string
    location?: StringFilter<"RentalSpace"> | string
    size?: StringFilter<"RentalSpace"> | string
    pricePerMonth?: DecimalFilter<"RentalSpace"> | Decimal | DecimalJsLike | number | string
    availability?: BoolFilter<"RentalSpace"> | boolean
    description?: StringNullableFilter<"RentalSpace"> | string | null
    createdAt?: DateTimeFilter<"RentalSpace"> | Date | string
    updatedAt?: DateTimeFilter<"RentalSpace"> | Date | string
    vendor?: XOR<VendorProfileRelationFilter, VendorProfileWhereInput>
    plantTrackings?: PlantTrackingListRelationFilter
    bookings?: RentalBookingListRelationFilter
  }

  export type RentalSpaceOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    location?: SortOrder
    size?: SortOrder
    pricePerMonth?: SortOrder
    availability?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendor?: VendorProfileOrderByWithRelationInput
    plantTrackings?: PlantTrackingOrderByRelationAggregateInput
    bookings?: RentalBookingOrderByRelationAggregateInput
  }

  export type RentalSpaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RentalSpaceWhereInput | RentalSpaceWhereInput[]
    OR?: RentalSpaceWhereInput[]
    NOT?: RentalSpaceWhereInput | RentalSpaceWhereInput[]
    vendorId?: StringFilter<"RentalSpace"> | string
    location?: StringFilter<"RentalSpace"> | string
    size?: StringFilter<"RentalSpace"> | string
    pricePerMonth?: DecimalFilter<"RentalSpace"> | Decimal | DecimalJsLike | number | string
    availability?: BoolFilter<"RentalSpace"> | boolean
    description?: StringNullableFilter<"RentalSpace"> | string | null
    createdAt?: DateTimeFilter<"RentalSpace"> | Date | string
    updatedAt?: DateTimeFilter<"RentalSpace"> | Date | string
    vendor?: XOR<VendorProfileRelationFilter, VendorProfileWhereInput>
    plantTrackings?: PlantTrackingListRelationFilter
    bookings?: RentalBookingListRelationFilter
  }, "id">

  export type RentalSpaceOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    location?: SortOrder
    size?: SortOrder
    pricePerMonth?: SortOrder
    availability?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RentalSpaceCountOrderByAggregateInput
    _avg?: RentalSpaceAvgOrderByAggregateInput
    _max?: RentalSpaceMaxOrderByAggregateInput
    _min?: RentalSpaceMinOrderByAggregateInput
    _sum?: RentalSpaceSumOrderByAggregateInput
  }

  export type RentalSpaceScalarWhereWithAggregatesInput = {
    AND?: RentalSpaceScalarWhereWithAggregatesInput | RentalSpaceScalarWhereWithAggregatesInput[]
    OR?: RentalSpaceScalarWhereWithAggregatesInput[]
    NOT?: RentalSpaceScalarWhereWithAggregatesInput | RentalSpaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RentalSpace"> | string
    vendorId?: StringWithAggregatesFilter<"RentalSpace"> | string
    location?: StringWithAggregatesFilter<"RentalSpace"> | string
    size?: StringWithAggregatesFilter<"RentalSpace"> | string
    pricePerMonth?: DecimalWithAggregatesFilter<"RentalSpace"> | Decimal | DecimalJsLike | number | string
    availability?: BoolWithAggregatesFilter<"RentalSpace"> | boolean
    description?: StringNullableWithAggregatesFilter<"RentalSpace"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RentalSpace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RentalSpace"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    produceId?: StringFilter<"Order"> | string
    vendorId?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    totalPrice?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeFilter<"Order"> | Date | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    produce?: XOR<ProduceRelationFilter, ProduceWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    produce?: ProduceOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringFilter<"Order"> | string
    produceId?: StringFilter<"Order"> | string
    vendorId?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    totalPrice?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeFilter<"Order"> | Date | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    produce?: XOR<ProduceRelationFilter, ProduceWhereInput>
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringWithAggregatesFilter<"Order"> | string
    produceId?: StringWithAggregatesFilter<"Order"> | string
    vendorId?: StringWithAggregatesFilter<"Order"> | string
    quantity?: IntWithAggregatesFilter<"Order"> | number
    totalPrice?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type CommunityPostWhereInput = {
    AND?: CommunityPostWhereInput | CommunityPostWhereInput[]
    OR?: CommunityPostWhereInput[]
    NOT?: CommunityPostWhereInput | CommunityPostWhereInput[]
    id?: StringFilter<"CommunityPost"> | string
    userId?: StringFilter<"CommunityPost"> | string
    title?: StringFilter<"CommunityPost"> | string
    postContent?: StringFilter<"CommunityPost"> | string
    tags?: StringNullableListFilter<"CommunityPost">
    postDate?: DateTimeFilter<"CommunityPost"> | Date | string
    createdAt?: DateTimeFilter<"CommunityPost"> | Date | string
    updatedAt?: DateTimeFilter<"CommunityPost"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CommunityPostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    postContent?: SortOrder
    tags?: SortOrder
    postDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CommunityPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunityPostWhereInput | CommunityPostWhereInput[]
    OR?: CommunityPostWhereInput[]
    NOT?: CommunityPostWhereInput | CommunityPostWhereInput[]
    userId?: StringFilter<"CommunityPost"> | string
    title?: StringFilter<"CommunityPost"> | string
    postContent?: StringFilter<"CommunityPost"> | string
    tags?: StringNullableListFilter<"CommunityPost">
    postDate?: DateTimeFilter<"CommunityPost"> | Date | string
    createdAt?: DateTimeFilter<"CommunityPost"> | Date | string
    updatedAt?: DateTimeFilter<"CommunityPost"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type CommunityPostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    postContent?: SortOrder
    tags?: SortOrder
    postDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunityPostCountOrderByAggregateInput
    _max?: CommunityPostMaxOrderByAggregateInput
    _min?: CommunityPostMinOrderByAggregateInput
  }

  export type CommunityPostScalarWhereWithAggregatesInput = {
    AND?: CommunityPostScalarWhereWithAggregatesInput | CommunityPostScalarWhereWithAggregatesInput[]
    OR?: CommunityPostScalarWhereWithAggregatesInput[]
    NOT?: CommunityPostScalarWhereWithAggregatesInput | CommunityPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunityPost"> | string
    userId?: StringWithAggregatesFilter<"CommunityPost"> | string
    title?: StringWithAggregatesFilter<"CommunityPost"> | string
    postContent?: StringWithAggregatesFilter<"CommunityPost"> | string
    tags?: StringNullableListFilter<"CommunityPost">
    postDate?: DateTimeWithAggregatesFilter<"CommunityPost"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"CommunityPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommunityPost"> | Date | string
  }

  export type SustainabilityCertWhereInput = {
    AND?: SustainabilityCertWhereInput | SustainabilityCertWhereInput[]
    OR?: SustainabilityCertWhereInput[]
    NOT?: SustainabilityCertWhereInput | SustainabilityCertWhereInput[]
    id?: StringFilter<"SustainabilityCert"> | string
    vendorId?: StringFilter<"SustainabilityCert"> | string
    certifyingAgency?: StringFilter<"SustainabilityCert"> | string
    certificationDate?: DateTimeFilter<"SustainabilityCert"> | Date | string
    documentUrl?: StringNullableFilter<"SustainabilityCert"> | string | null
    status?: EnumCertStatusFilter<"SustainabilityCert"> | $Enums.CertStatus
    createdAt?: DateTimeFilter<"SustainabilityCert"> | Date | string
    updatedAt?: DateTimeFilter<"SustainabilityCert"> | Date | string
    vendor?: XOR<VendorProfileRelationFilter, VendorProfileWhereInput>
  }

  export type SustainabilityCertOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    certifyingAgency?: SortOrder
    certificationDate?: SortOrder
    documentUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendor?: VendorProfileOrderByWithRelationInput
  }

  export type SustainabilityCertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SustainabilityCertWhereInput | SustainabilityCertWhereInput[]
    OR?: SustainabilityCertWhereInput[]
    NOT?: SustainabilityCertWhereInput | SustainabilityCertWhereInput[]
    vendorId?: StringFilter<"SustainabilityCert"> | string
    certifyingAgency?: StringFilter<"SustainabilityCert"> | string
    certificationDate?: DateTimeFilter<"SustainabilityCert"> | Date | string
    documentUrl?: StringNullableFilter<"SustainabilityCert"> | string | null
    status?: EnumCertStatusFilter<"SustainabilityCert"> | $Enums.CertStatus
    createdAt?: DateTimeFilter<"SustainabilityCert"> | Date | string
    updatedAt?: DateTimeFilter<"SustainabilityCert"> | Date | string
    vendor?: XOR<VendorProfileRelationFilter, VendorProfileWhereInput>
  }, "id">

  export type SustainabilityCertOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    certifyingAgency?: SortOrder
    certificationDate?: SortOrder
    documentUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SustainabilityCertCountOrderByAggregateInput
    _max?: SustainabilityCertMaxOrderByAggregateInput
    _min?: SustainabilityCertMinOrderByAggregateInput
  }

  export type SustainabilityCertScalarWhereWithAggregatesInput = {
    AND?: SustainabilityCertScalarWhereWithAggregatesInput | SustainabilityCertScalarWhereWithAggregatesInput[]
    OR?: SustainabilityCertScalarWhereWithAggregatesInput[]
    NOT?: SustainabilityCertScalarWhereWithAggregatesInput | SustainabilityCertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SustainabilityCert"> | string
    vendorId?: StringWithAggregatesFilter<"SustainabilityCert"> | string
    certifyingAgency?: StringWithAggregatesFilter<"SustainabilityCert"> | string
    certificationDate?: DateTimeWithAggregatesFilter<"SustainabilityCert"> | Date | string
    documentUrl?: StringNullableWithAggregatesFilter<"SustainabilityCert"> | string | null
    status?: EnumCertStatusWithAggregatesFilter<"SustainabilityCert"> | $Enums.CertStatus
    createdAt?: DateTimeWithAggregatesFilter<"SustainabilityCert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SustainabilityCert"> | Date | string
  }

  export type PlantTrackingWhereInput = {
    AND?: PlantTrackingWhereInput | PlantTrackingWhereInput[]
    OR?: PlantTrackingWhereInput[]
    NOT?: PlantTrackingWhereInput | PlantTrackingWhereInput[]
    id?: StringFilter<"PlantTracking"> | string
    userId?: StringFilter<"PlantTracking"> | string
    rentalSpaceId?: StringFilter<"PlantTracking"> | string
    plantName?: StringFilter<"PlantTracking"> | string
    growthStage?: StringFilter<"PlantTracking"> | string
    healthStatus?: StringFilter<"PlantTracking"> | string
    harvestDate?: DateTimeNullableFilter<"PlantTracking"> | Date | string | null
    notes?: StringNullableFilter<"PlantTracking"> | string | null
    imageUrl?: StringNullableFilter<"PlantTracking"> | string | null
    createdAt?: DateTimeFilter<"PlantTracking"> | Date | string
    updatedAt?: DateTimeFilter<"PlantTracking"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    rentalSpace?: XOR<RentalSpaceRelationFilter, RentalSpaceWhereInput>
  }

  export type PlantTrackingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    rentalSpaceId?: SortOrder
    plantName?: SortOrder
    growthStage?: SortOrder
    healthStatus?: SortOrder
    harvestDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    rentalSpace?: RentalSpaceOrderByWithRelationInput
  }

  export type PlantTrackingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlantTrackingWhereInput | PlantTrackingWhereInput[]
    OR?: PlantTrackingWhereInput[]
    NOT?: PlantTrackingWhereInput | PlantTrackingWhereInput[]
    userId?: StringFilter<"PlantTracking"> | string
    rentalSpaceId?: StringFilter<"PlantTracking"> | string
    plantName?: StringFilter<"PlantTracking"> | string
    growthStage?: StringFilter<"PlantTracking"> | string
    healthStatus?: StringFilter<"PlantTracking"> | string
    harvestDate?: DateTimeNullableFilter<"PlantTracking"> | Date | string | null
    notes?: StringNullableFilter<"PlantTracking"> | string | null
    imageUrl?: StringNullableFilter<"PlantTracking"> | string | null
    createdAt?: DateTimeFilter<"PlantTracking"> | Date | string
    updatedAt?: DateTimeFilter<"PlantTracking"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    rentalSpace?: XOR<RentalSpaceRelationFilter, RentalSpaceWhereInput>
  }, "id">

  export type PlantTrackingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    rentalSpaceId?: SortOrder
    plantName?: SortOrder
    growthStage?: SortOrder
    healthStatus?: SortOrder
    harvestDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlantTrackingCountOrderByAggregateInput
    _max?: PlantTrackingMaxOrderByAggregateInput
    _min?: PlantTrackingMinOrderByAggregateInput
  }

  export type PlantTrackingScalarWhereWithAggregatesInput = {
    AND?: PlantTrackingScalarWhereWithAggregatesInput | PlantTrackingScalarWhereWithAggregatesInput[]
    OR?: PlantTrackingScalarWhereWithAggregatesInput[]
    NOT?: PlantTrackingScalarWhereWithAggregatesInput | PlantTrackingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlantTracking"> | string
    userId?: StringWithAggregatesFilter<"PlantTracking"> | string
    rentalSpaceId?: StringWithAggregatesFilter<"PlantTracking"> | string
    plantName?: StringWithAggregatesFilter<"PlantTracking"> | string
    growthStage?: StringWithAggregatesFilter<"PlantTracking"> | string
    healthStatus?: StringWithAggregatesFilter<"PlantTracking"> | string
    harvestDate?: DateTimeNullableWithAggregatesFilter<"PlantTracking"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"PlantTracking"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"PlantTracking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PlantTracking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlantTracking"> | Date | string
  }

  export type RentalBookingWhereInput = {
    AND?: RentalBookingWhereInput | RentalBookingWhereInput[]
    OR?: RentalBookingWhereInput[]
    NOT?: RentalBookingWhereInput | RentalBookingWhereInput[]
    id?: StringFilter<"RentalBooking"> | string
    customerId?: StringFilter<"RentalBooking"> | string
    rentalSpaceId?: StringFilter<"RentalBooking"> | string
    startDate?: DateTimeFilter<"RentalBooking"> | Date | string
    endDate?: DateTimeFilter<"RentalBooking"> | Date | string
    totalPrice?: DecimalFilter<"RentalBooking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"RentalBooking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"RentalBooking"> | string | null
    createdAt?: DateTimeFilter<"RentalBooking"> | Date | string
    updatedAt?: DateTimeFilter<"RentalBooking"> | Date | string
    customer?: XOR<UserRelationFilter, UserWhereInput>
    rentalSpace?: XOR<RentalSpaceRelationFilter, RentalSpaceWhereInput>
  }

  export type RentalBookingOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    rentalSpaceId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: UserOrderByWithRelationInput
    rentalSpace?: RentalSpaceOrderByWithRelationInput
  }

  export type RentalBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RentalBookingWhereInput | RentalBookingWhereInput[]
    OR?: RentalBookingWhereInput[]
    NOT?: RentalBookingWhereInput | RentalBookingWhereInput[]
    customerId?: StringFilter<"RentalBooking"> | string
    rentalSpaceId?: StringFilter<"RentalBooking"> | string
    startDate?: DateTimeFilter<"RentalBooking"> | Date | string
    endDate?: DateTimeFilter<"RentalBooking"> | Date | string
    totalPrice?: DecimalFilter<"RentalBooking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"RentalBooking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"RentalBooking"> | string | null
    createdAt?: DateTimeFilter<"RentalBooking"> | Date | string
    updatedAt?: DateTimeFilter<"RentalBooking"> | Date | string
    customer?: XOR<UserRelationFilter, UserWhereInput>
    rentalSpace?: XOR<RentalSpaceRelationFilter, RentalSpaceWhereInput>
  }, "id">

  export type RentalBookingOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    rentalSpaceId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RentalBookingCountOrderByAggregateInput
    _avg?: RentalBookingAvgOrderByAggregateInput
    _max?: RentalBookingMaxOrderByAggregateInput
    _min?: RentalBookingMinOrderByAggregateInput
    _sum?: RentalBookingSumOrderByAggregateInput
  }

  export type RentalBookingScalarWhereWithAggregatesInput = {
    AND?: RentalBookingScalarWhereWithAggregatesInput | RentalBookingScalarWhereWithAggregatesInput[]
    OR?: RentalBookingScalarWhereWithAggregatesInput[]
    NOT?: RentalBookingScalarWhereWithAggregatesInput | RentalBookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RentalBooking"> | string
    customerId?: StringWithAggregatesFilter<"RentalBooking"> | string
    rentalSpaceId?: StringWithAggregatesFilter<"RentalBooking"> | string
    startDate?: DateTimeWithAggregatesFilter<"RentalBooking"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"RentalBooking"> | Date | string
    totalPrice?: DecimalWithAggregatesFilter<"RentalBooking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusWithAggregatesFilter<"RentalBooking"> | $Enums.BookingStatus
    notes?: StringNullableWithAggregatesFilter<"RentalBooking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RentalBooking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RentalBooking"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerified?: boolean
    resetExpires?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    plantTrackings?: PlantTrackingCreateNestedManyWithoutUserInput
    rentalBookings?: RentalBookingCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerified?: boolean
    resetExpires?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    plantTrackings?: PlantTrackingUncheckedCreateNestedManyWithoutUserInput
    rentalBookings?: RentalBookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerified?: BoolFieldUpdateOperationsInput | boolean
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    plantTrackings?: PlantTrackingUpdateManyWithoutUserNestedInput
    rentalBookings?: RentalBookingUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerified?: BoolFieldUpdateOperationsInput | boolean
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    plantTrackings?: PlantTrackingUncheckedUpdateManyWithoutUserNestedInput
    rentalBookings?: RentalBookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerified?: boolean
    resetExpires?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerified?: BoolFieldUpdateOperationsInput | boolean
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerified?: BoolFieldUpdateOperationsInput | boolean
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorProfileCreateInput = {
    id?: string
    farmName: string
    certificationStatus?: $Enums.CertStatus
    farmLocation: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    produces?: ProduceCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceCreateNestedManyWithoutVendorInput
    sustainabilityCerts?: SustainabilityCertCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    farmName: string
    certificationStatus?: $Enums.CertStatus
    farmLocation: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    produces?: ProduceUncheckedCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceUncheckedCreateNestedManyWithoutVendorInput
    sustainabilityCerts?: SustainabilityCertUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    produces?: ProduceUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUpdateManyWithoutVendorNestedInput
    sustainabilityCerts?: SustainabilityCertUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produces?: ProduceUncheckedUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput
    sustainabilityCerts?: SustainabilityCertUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileCreateManyInput = {
    id?: string
    userId: string
    farmName: string
    certificationStatus?: $Enums.CertStatus
    farmLocation: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProduceCreateInput = {
    id?: string
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    category: string
    certificationStatus?: $Enums.CertStatus
    availableQuantity?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorProfileCreateNestedOneWithoutProducesInput
    orders?: OrderCreateNestedManyWithoutProduceInput
  }

  export type ProduceUncheckedCreateInput = {
    id?: string
    vendorId: string
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    category: string
    certificationStatus?: $Enums.CertStatus
    availableQuantity?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProduceInput
  }

  export type ProduceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorProfileUpdateOneRequiredWithoutProducesNestedInput
    orders?: OrderUpdateManyWithoutProduceNestedInput
  }

  export type ProduceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProduceNestedInput
  }

  export type ProduceCreateManyInput = {
    id?: string
    vendorId: string
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    category: string
    certificationStatus?: $Enums.CertStatus
    availableQuantity?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProduceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProduceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalSpaceCreateInput = {
    id?: string
    location: string
    size: string
    pricePerMonth: Decimal | DecimalJsLike | number | string
    availability?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorProfileCreateNestedOneWithoutRentalSpacesInput
    plantTrackings?: PlantTrackingCreateNestedManyWithoutRentalSpaceInput
    bookings?: RentalBookingCreateNestedManyWithoutRentalSpaceInput
  }

  export type RentalSpaceUncheckedCreateInput = {
    id?: string
    vendorId: string
    location: string
    size: string
    pricePerMonth: Decimal | DecimalJsLike | number | string
    availability?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plantTrackings?: PlantTrackingUncheckedCreateNestedManyWithoutRentalSpaceInput
    bookings?: RentalBookingUncheckedCreateNestedManyWithoutRentalSpaceInput
  }

  export type RentalSpaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorProfileUpdateOneRequiredWithoutRentalSpacesNestedInput
    plantTrackings?: PlantTrackingUpdateManyWithoutRentalSpaceNestedInput
    bookings?: RentalBookingUpdateManyWithoutRentalSpaceNestedInput
  }

  export type RentalSpaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plantTrackings?: PlantTrackingUncheckedUpdateManyWithoutRentalSpaceNestedInput
    bookings?: RentalBookingUncheckedUpdateManyWithoutRentalSpaceNestedInput
  }

  export type RentalSpaceCreateManyInput = {
    id?: string
    vendorId: string
    location: string
    size: string
    pricePerMonth: Decimal | DecimalJsLike | number | string
    availability?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalSpaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalSpaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    vendorId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    produce: ProduceCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId: string
    produceId: string
    vendorId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    produce?: ProduceUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    produceId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyInput = {
    id?: string
    userId: string
    produceId: string
    vendorId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    produceId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostCreateInput = {
    id?: string
    title: string
    postContent: string
    tags?: CommunityPostCreatetagsInput | string[]
    postDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommunityPostsInput
  }

  export type CommunityPostUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    postContent: string
    tags?: CommunityPostCreatetagsInput | string[]
    postDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommunityPostsNestedInput
  }

  export type CommunityPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostCreateManyInput = {
    id?: string
    userId: string
    title: string
    postContent: string
    tags?: CommunityPostCreatetagsInput | string[]
    postDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SustainabilityCertCreateInput = {
    id?: string
    certifyingAgency: string
    certificationDate: Date | string
    documentUrl?: string | null
    status?: $Enums.CertStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorProfileCreateNestedOneWithoutSustainabilityCertsInput
  }

  export type SustainabilityCertUncheckedCreateInput = {
    id?: string
    vendorId: string
    certifyingAgency: string
    certificationDate: Date | string
    documentUrl?: string | null
    status?: $Enums.CertStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SustainabilityCertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    certifyingAgency?: StringFieldUpdateOperationsInput | string
    certificationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorProfileUpdateOneRequiredWithoutSustainabilityCertsNestedInput
  }

  export type SustainabilityCertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    certifyingAgency?: StringFieldUpdateOperationsInput | string
    certificationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SustainabilityCertCreateManyInput = {
    id?: string
    vendorId: string
    certifyingAgency: string
    certificationDate: Date | string
    documentUrl?: string | null
    status?: $Enums.CertStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SustainabilityCertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    certifyingAgency?: StringFieldUpdateOperationsInput | string
    certificationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SustainabilityCertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    certifyingAgency?: StringFieldUpdateOperationsInput | string
    certificationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantTrackingCreateInput = {
    id?: string
    plantName: string
    growthStage: string
    healthStatus: string
    harvestDate?: Date | string | null
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlantTrackingsInput
    rentalSpace: RentalSpaceCreateNestedOneWithoutPlantTrackingsInput
  }

  export type PlantTrackingUncheckedCreateInput = {
    id?: string
    userId: string
    rentalSpaceId: string
    plantName: string
    growthStage: string
    healthStatus: string
    harvestDate?: Date | string | null
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlantTrackingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plantName?: StringFieldUpdateOperationsInput | string
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlantTrackingsNestedInput
    rentalSpace?: RentalSpaceUpdateOneRequiredWithoutPlantTrackingsNestedInput
  }

  export type PlantTrackingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rentalSpaceId?: StringFieldUpdateOperationsInput | string
    plantName?: StringFieldUpdateOperationsInput | string
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantTrackingCreateManyInput = {
    id?: string
    userId: string
    rentalSpaceId: string
    plantName: string
    growthStage: string
    healthStatus: string
    harvestDate?: Date | string | null
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlantTrackingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plantName?: StringFieldUpdateOperationsInput | string
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantTrackingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rentalSpaceId?: StringFieldUpdateOperationsInput | string
    plantName?: StringFieldUpdateOperationsInput | string
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalBookingCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutRentalBookingsInput
    rentalSpace: RentalSpaceCreateNestedOneWithoutBookingsInput
  }

  export type RentalBookingUncheckedCreateInput = {
    id?: string
    customerId: string
    rentalSpaceId: string
    startDate: Date | string
    endDate: Date | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalBookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutRentalBookingsNestedInput
    rentalSpace?: RentalSpaceUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type RentalBookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    rentalSpaceId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalBookingCreateManyInput = {
    id?: string
    customerId: string
    rentalSpaceId: string
    startDate: Date | string
    endDate: Date | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalBookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalBookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    rentalSpaceId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VendorProfileNullableRelationFilter = {
    is?: VendorProfileWhereInput | null
    isNot?: VendorProfileWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type CommunityPostListRelationFilter = {
    every?: CommunityPostWhereInput
    some?: CommunityPostWhereInput
    none?: CommunityPostWhereInput
  }

  export type PlantTrackingListRelationFilter = {
    every?: PlantTrackingWhereInput
    some?: PlantTrackingWhereInput
    none?: PlantTrackingWhereInput
  }

  export type RentalBookingListRelationFilter = {
    every?: RentalBookingWhereInput
    some?: RentalBookingWhereInput
    none?: RentalBookingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlantTrackingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalBookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    otp?: SortOrder
    otpExpires?: SortOrder
    otpVerified?: SortOrder
    resetExpires?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    otp?: SortOrder
    otpExpires?: SortOrder
    otpVerified?: SortOrder
    resetExpires?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    otp?: SortOrder
    otpExpires?: SortOrder
    otpVerified?: SortOrder
    resetExpires?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CertStatus | EnumCertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertStatus[] | ListEnumCertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertStatus[] | ListEnumCertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertStatusFilter<$PrismaModel> | $Enums.CertStatus
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProduceListRelationFilter = {
    every?: ProduceWhereInput
    some?: ProduceWhereInput
    none?: ProduceWhereInput
  }

  export type RentalSpaceListRelationFilter = {
    every?: RentalSpaceWhereInput
    some?: RentalSpaceWhereInput
    none?: RentalSpaceWhereInput
  }

  export type SustainabilityCertListRelationFilter = {
    every?: SustainabilityCertWhereInput
    some?: SustainabilityCertWhereInput
    none?: SustainabilityCertWhereInput
  }

  export type ProduceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalSpaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SustainabilityCertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    farmName?: SortOrder
    certificationStatus?: SortOrder
    farmLocation?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    farmName?: SortOrder
    certificationStatus?: SortOrder
    farmLocation?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    farmName?: SortOrder
    certificationStatus?: SortOrder
    farmLocation?: SortOrder
    isApproved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CertStatus | EnumCertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertStatus[] | ListEnumCertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertStatus[] | ListEnumCertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertStatusWithAggregatesFilter<$PrismaModel> | $Enums.CertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCertStatusFilter<$PrismaModel>
    _max?: NestedEnumCertStatusFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type VendorProfileRelationFilter = {
    is?: VendorProfileWhereInput
    isNot?: VendorProfileWhereInput
  }

  export type ProduceCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    certificationStatus?: SortOrder
    availableQuantity?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProduceAvgOrderByAggregateInput = {
    price?: SortOrder
    availableQuantity?: SortOrder
  }

  export type ProduceMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    certificationStatus?: SortOrder
    availableQuantity?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProduceMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    certificationStatus?: SortOrder
    availableQuantity?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProduceSumOrderByAggregateInput = {
    price?: SortOrder
    availableQuantity?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type RentalSpaceCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    location?: SortOrder
    size?: SortOrder
    pricePerMonth?: SortOrder
    availability?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalSpaceAvgOrderByAggregateInput = {
    pricePerMonth?: SortOrder
  }

  export type RentalSpaceMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    location?: SortOrder
    size?: SortOrder
    pricePerMonth?: SortOrder
    availability?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalSpaceMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    location?: SortOrder
    size?: SortOrder
    pricePerMonth?: SortOrder
    availability?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalSpaceSumOrderByAggregateInput = {
    pricePerMonth?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type ProduceRelationFilter = {
    is?: ProduceWhereInput
    isNot?: ProduceWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    produceId?: SortOrder
    vendorId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    orderDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CommunityPostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    postContent?: SortOrder
    tags?: SortOrder
    postDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityPostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    postContent?: SortOrder
    postDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityPostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    postContent?: SortOrder
    postDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SustainabilityCertCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    certifyingAgency?: SortOrder
    certificationDate?: SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SustainabilityCertMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    certifyingAgency?: SortOrder
    certificationDate?: SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SustainabilityCertMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    certifyingAgency?: SortOrder
    certificationDate?: SortOrder
    documentUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalSpaceRelationFilter = {
    is?: RentalSpaceWhereInput
    isNot?: RentalSpaceWhereInput
  }

  export type PlantTrackingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rentalSpaceId?: SortOrder
    plantName?: SortOrder
    growthStage?: SortOrder
    healthStatus?: SortOrder
    harvestDate?: SortOrder
    notes?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlantTrackingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rentalSpaceId?: SortOrder
    plantName?: SortOrder
    growthStage?: SortOrder
    healthStatus?: SortOrder
    harvestDate?: SortOrder
    notes?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlantTrackingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rentalSpaceId?: SortOrder
    plantName?: SortOrder
    growthStage?: SortOrder
    healthStatus?: SortOrder
    harvestDate?: SortOrder
    notes?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type RentalBookingCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    rentalSpaceId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalBookingAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
  }

  export type RentalBookingMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    rentalSpaceId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalBookingMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    rentalSpaceId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalBookingSumOrderByAggregateInput = {
    totalPrice?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type VendorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CommunityPostCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
  }

  export type PlantTrackingCreateNestedManyWithoutUserInput = {
    create?: XOR<PlantTrackingCreateWithoutUserInput, PlantTrackingUncheckedCreateWithoutUserInput> | PlantTrackingCreateWithoutUserInput[] | PlantTrackingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlantTrackingCreateOrConnectWithoutUserInput | PlantTrackingCreateOrConnectWithoutUserInput[]
    createMany?: PlantTrackingCreateManyUserInputEnvelope
    connect?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
  }

  export type RentalBookingCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RentalBookingCreateWithoutCustomerInput, RentalBookingUncheckedCreateWithoutCustomerInput> | RentalBookingCreateWithoutCustomerInput[] | RentalBookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RentalBookingCreateOrConnectWithoutCustomerInput | RentalBookingCreateOrConnectWithoutCustomerInput[]
    createMany?: RentalBookingCreateManyCustomerInputEnvelope
    connect?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
  }

  export type VendorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CommunityPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
  }

  export type PlantTrackingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlantTrackingCreateWithoutUserInput, PlantTrackingUncheckedCreateWithoutUserInput> | PlantTrackingCreateWithoutUserInput[] | PlantTrackingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlantTrackingCreateOrConnectWithoutUserInput | PlantTrackingCreateOrConnectWithoutUserInput[]
    createMany?: PlantTrackingCreateManyUserInputEnvelope
    connect?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
  }

  export type RentalBookingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RentalBookingCreateWithoutCustomerInput, RentalBookingUncheckedCreateWithoutCustomerInput> | RentalBookingCreateWithoutCustomerInput[] | RentalBookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RentalBookingCreateOrConnectWithoutCustomerInput | RentalBookingCreateOrConnectWithoutCustomerInput[]
    createMany?: RentalBookingCreateManyCustomerInputEnvelope
    connect?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VendorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    upsert?: VendorProfileUpsertWithoutUserInput
    disconnect?: VendorProfileWhereInput | boolean
    delete?: VendorProfileWhereInput | boolean
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutUserInput, VendorProfileUpdateWithoutUserInput>, VendorProfileUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CommunityPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    upsert?: CommunityPostUpsertWithWhereUniqueWithoutUserInput | CommunityPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    set?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    disconnect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    delete?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    update?: CommunityPostUpdateWithWhereUniqueWithoutUserInput | CommunityPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityPostUpdateManyWithWhereWithoutUserInput | CommunityPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
  }

  export type PlantTrackingUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlantTrackingCreateWithoutUserInput, PlantTrackingUncheckedCreateWithoutUserInput> | PlantTrackingCreateWithoutUserInput[] | PlantTrackingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlantTrackingCreateOrConnectWithoutUserInput | PlantTrackingCreateOrConnectWithoutUserInput[]
    upsert?: PlantTrackingUpsertWithWhereUniqueWithoutUserInput | PlantTrackingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlantTrackingCreateManyUserInputEnvelope
    set?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    disconnect?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    delete?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    connect?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    update?: PlantTrackingUpdateWithWhereUniqueWithoutUserInput | PlantTrackingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlantTrackingUpdateManyWithWhereWithoutUserInput | PlantTrackingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlantTrackingScalarWhereInput | PlantTrackingScalarWhereInput[]
  }

  export type RentalBookingUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RentalBookingCreateWithoutCustomerInput, RentalBookingUncheckedCreateWithoutCustomerInput> | RentalBookingCreateWithoutCustomerInput[] | RentalBookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RentalBookingCreateOrConnectWithoutCustomerInput | RentalBookingCreateOrConnectWithoutCustomerInput[]
    upsert?: RentalBookingUpsertWithWhereUniqueWithoutCustomerInput | RentalBookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RentalBookingCreateManyCustomerInputEnvelope
    set?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    disconnect?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    delete?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    connect?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    update?: RentalBookingUpdateWithWhereUniqueWithoutCustomerInput | RentalBookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RentalBookingUpdateManyWithWhereWithoutCustomerInput | RentalBookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RentalBookingScalarWhereInput | RentalBookingScalarWhereInput[]
  }

  export type VendorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutUserInput
    upsert?: VendorProfileUpsertWithoutUserInput
    disconnect?: VendorProfileWhereInput | boolean
    delete?: VendorProfileWhereInput | boolean
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutUserInput, VendorProfileUpdateWithoutUserInput>, VendorProfileUncheckedUpdateWithoutUserInput>
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CommunityPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput> | CommunityPostCreateWithoutUserInput[] | CommunityPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutUserInput | CommunityPostCreateOrConnectWithoutUserInput[]
    upsert?: CommunityPostUpsertWithWhereUniqueWithoutUserInput | CommunityPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunityPostCreateManyUserInputEnvelope
    set?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    disconnect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    delete?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    update?: CommunityPostUpdateWithWhereUniqueWithoutUserInput | CommunityPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunityPostUpdateManyWithWhereWithoutUserInput | CommunityPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
  }

  export type PlantTrackingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlantTrackingCreateWithoutUserInput, PlantTrackingUncheckedCreateWithoutUserInput> | PlantTrackingCreateWithoutUserInput[] | PlantTrackingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlantTrackingCreateOrConnectWithoutUserInput | PlantTrackingCreateOrConnectWithoutUserInput[]
    upsert?: PlantTrackingUpsertWithWhereUniqueWithoutUserInput | PlantTrackingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlantTrackingCreateManyUserInputEnvelope
    set?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    disconnect?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    delete?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    connect?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    update?: PlantTrackingUpdateWithWhereUniqueWithoutUserInput | PlantTrackingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlantTrackingUpdateManyWithWhereWithoutUserInput | PlantTrackingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlantTrackingScalarWhereInput | PlantTrackingScalarWhereInput[]
  }

  export type RentalBookingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RentalBookingCreateWithoutCustomerInput, RentalBookingUncheckedCreateWithoutCustomerInput> | RentalBookingCreateWithoutCustomerInput[] | RentalBookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RentalBookingCreateOrConnectWithoutCustomerInput | RentalBookingCreateOrConnectWithoutCustomerInput[]
    upsert?: RentalBookingUpsertWithWhereUniqueWithoutCustomerInput | RentalBookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RentalBookingCreateManyCustomerInputEnvelope
    set?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    disconnect?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    delete?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    connect?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    update?: RentalBookingUpdateWithWhereUniqueWithoutCustomerInput | RentalBookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RentalBookingUpdateManyWithWhereWithoutCustomerInput | RentalBookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RentalBookingScalarWhereInput | RentalBookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVendorProfileInput = {
    create?: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type ProduceCreateNestedManyWithoutVendorInput = {
    create?: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput> | ProduceCreateWithoutVendorInput[] | ProduceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutVendorInput | ProduceCreateOrConnectWithoutVendorInput[]
    createMany?: ProduceCreateManyVendorInputEnvelope
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
  }

  export type RentalSpaceCreateNestedManyWithoutVendorInput = {
    create?: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput> | RentalSpaceCreateWithoutVendorInput[] | RentalSpaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutVendorInput | RentalSpaceCreateOrConnectWithoutVendorInput[]
    createMany?: RentalSpaceCreateManyVendorInputEnvelope
    connect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
  }

  export type SustainabilityCertCreateNestedManyWithoutVendorInput = {
    create?: XOR<SustainabilityCertCreateWithoutVendorInput, SustainabilityCertUncheckedCreateWithoutVendorInput> | SustainabilityCertCreateWithoutVendorInput[] | SustainabilityCertUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SustainabilityCertCreateOrConnectWithoutVendorInput | SustainabilityCertCreateOrConnectWithoutVendorInput[]
    createMany?: SustainabilityCertCreateManyVendorInputEnvelope
    connect?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
  }

  export type ProduceUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput> | ProduceCreateWithoutVendorInput[] | ProduceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutVendorInput | ProduceCreateOrConnectWithoutVendorInput[]
    createMany?: ProduceCreateManyVendorInputEnvelope
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
  }

  export type RentalSpaceUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput> | RentalSpaceCreateWithoutVendorInput[] | RentalSpaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutVendorInput | RentalSpaceCreateOrConnectWithoutVendorInput[]
    createMany?: RentalSpaceCreateManyVendorInputEnvelope
    connect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
  }

  export type SustainabilityCertUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<SustainabilityCertCreateWithoutVendorInput, SustainabilityCertUncheckedCreateWithoutVendorInput> | SustainabilityCertCreateWithoutVendorInput[] | SustainabilityCertUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SustainabilityCertCreateOrConnectWithoutVendorInput | SustainabilityCertCreateOrConnectWithoutVendorInput[]
    createMany?: SustainabilityCertCreateManyVendorInputEnvelope
    connect?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
  }

  export type EnumCertStatusFieldUpdateOperationsInput = {
    set?: $Enums.CertStatus
  }

  export type UserUpdateOneRequiredWithoutVendorProfileNestedInput = {
    create?: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutVendorProfileInput
    upsert?: UserUpsertWithoutVendorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVendorProfileInput, UserUpdateWithoutVendorProfileInput>, UserUncheckedUpdateWithoutVendorProfileInput>
  }

  export type ProduceUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput> | ProduceCreateWithoutVendorInput[] | ProduceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutVendorInput | ProduceCreateOrConnectWithoutVendorInput[]
    upsert?: ProduceUpsertWithWhereUniqueWithoutVendorInput | ProduceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ProduceCreateManyVendorInputEnvelope
    set?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    disconnect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    delete?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    update?: ProduceUpdateWithWhereUniqueWithoutVendorInput | ProduceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ProduceUpdateManyWithWhereWithoutVendorInput | ProduceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
  }

  export type RentalSpaceUpdateManyWithoutVendorNestedInput = {
    create?: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput> | RentalSpaceCreateWithoutVendorInput[] | RentalSpaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutVendorInput | RentalSpaceCreateOrConnectWithoutVendorInput[]
    upsert?: RentalSpaceUpsertWithWhereUniqueWithoutVendorInput | RentalSpaceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: RentalSpaceCreateManyVendorInputEnvelope
    set?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    disconnect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    delete?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    connect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    update?: RentalSpaceUpdateWithWhereUniqueWithoutVendorInput | RentalSpaceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: RentalSpaceUpdateManyWithWhereWithoutVendorInput | RentalSpaceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: RentalSpaceScalarWhereInput | RentalSpaceScalarWhereInput[]
  }

  export type SustainabilityCertUpdateManyWithoutVendorNestedInput = {
    create?: XOR<SustainabilityCertCreateWithoutVendorInput, SustainabilityCertUncheckedCreateWithoutVendorInput> | SustainabilityCertCreateWithoutVendorInput[] | SustainabilityCertUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SustainabilityCertCreateOrConnectWithoutVendorInput | SustainabilityCertCreateOrConnectWithoutVendorInput[]
    upsert?: SustainabilityCertUpsertWithWhereUniqueWithoutVendorInput | SustainabilityCertUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: SustainabilityCertCreateManyVendorInputEnvelope
    set?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    disconnect?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    delete?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    connect?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    update?: SustainabilityCertUpdateWithWhereUniqueWithoutVendorInput | SustainabilityCertUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: SustainabilityCertUpdateManyWithWhereWithoutVendorInput | SustainabilityCertUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: SustainabilityCertScalarWhereInput | SustainabilityCertScalarWhereInput[]
  }

  export type ProduceUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput> | ProduceCreateWithoutVendorInput[] | ProduceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ProduceCreateOrConnectWithoutVendorInput | ProduceCreateOrConnectWithoutVendorInput[]
    upsert?: ProduceUpsertWithWhereUniqueWithoutVendorInput | ProduceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ProduceCreateManyVendorInputEnvelope
    set?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    disconnect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    delete?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    connect?: ProduceWhereUniqueInput | ProduceWhereUniqueInput[]
    update?: ProduceUpdateWithWhereUniqueWithoutVendorInput | ProduceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ProduceUpdateManyWithWhereWithoutVendorInput | ProduceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
  }

  export type RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput> | RentalSpaceCreateWithoutVendorInput[] | RentalSpaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutVendorInput | RentalSpaceCreateOrConnectWithoutVendorInput[]
    upsert?: RentalSpaceUpsertWithWhereUniqueWithoutVendorInput | RentalSpaceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: RentalSpaceCreateManyVendorInputEnvelope
    set?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    disconnect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    delete?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    connect?: RentalSpaceWhereUniqueInput | RentalSpaceWhereUniqueInput[]
    update?: RentalSpaceUpdateWithWhereUniqueWithoutVendorInput | RentalSpaceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: RentalSpaceUpdateManyWithWhereWithoutVendorInput | RentalSpaceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: RentalSpaceScalarWhereInput | RentalSpaceScalarWhereInput[]
  }

  export type SustainabilityCertUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<SustainabilityCertCreateWithoutVendorInput, SustainabilityCertUncheckedCreateWithoutVendorInput> | SustainabilityCertCreateWithoutVendorInput[] | SustainabilityCertUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SustainabilityCertCreateOrConnectWithoutVendorInput | SustainabilityCertCreateOrConnectWithoutVendorInput[]
    upsert?: SustainabilityCertUpsertWithWhereUniqueWithoutVendorInput | SustainabilityCertUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: SustainabilityCertCreateManyVendorInputEnvelope
    set?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    disconnect?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    delete?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    connect?: SustainabilityCertWhereUniqueInput | SustainabilityCertWhereUniqueInput[]
    update?: SustainabilityCertUpdateWithWhereUniqueWithoutVendorInput | SustainabilityCertUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: SustainabilityCertUpdateManyWithWhereWithoutVendorInput | SustainabilityCertUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: SustainabilityCertScalarWhereInput | SustainabilityCertScalarWhereInput[]
  }

  export type VendorProfileCreateNestedOneWithoutProducesInput = {
    create?: XOR<VendorProfileCreateWithoutProducesInput, VendorProfileUncheckedCreateWithoutProducesInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutProducesInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutProduceInput = {
    create?: XOR<OrderCreateWithoutProduceInput, OrderUncheckedCreateWithoutProduceInput> | OrderCreateWithoutProduceInput[] | OrderUncheckedCreateWithoutProduceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProduceInput | OrderCreateOrConnectWithoutProduceInput[]
    createMany?: OrderCreateManyProduceInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutProduceInput = {
    create?: XOR<OrderCreateWithoutProduceInput, OrderUncheckedCreateWithoutProduceInput> | OrderCreateWithoutProduceInput[] | OrderUncheckedCreateWithoutProduceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProduceInput | OrderCreateOrConnectWithoutProduceInput[]
    createMany?: OrderCreateManyProduceInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VendorProfileUpdateOneRequiredWithoutProducesNestedInput = {
    create?: XOR<VendorProfileCreateWithoutProducesInput, VendorProfileUncheckedCreateWithoutProducesInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutProducesInput
    upsert?: VendorProfileUpsertWithoutProducesInput
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutProducesInput, VendorProfileUpdateWithoutProducesInput>, VendorProfileUncheckedUpdateWithoutProducesInput>
  }

  export type OrderUpdateManyWithoutProduceNestedInput = {
    create?: XOR<OrderCreateWithoutProduceInput, OrderUncheckedCreateWithoutProduceInput> | OrderCreateWithoutProduceInput[] | OrderUncheckedCreateWithoutProduceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProduceInput | OrderCreateOrConnectWithoutProduceInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProduceInput | OrderUpsertWithWhereUniqueWithoutProduceInput[]
    createMany?: OrderCreateManyProduceInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProduceInput | OrderUpdateWithWhereUniqueWithoutProduceInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProduceInput | OrderUpdateManyWithWhereWithoutProduceInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutProduceNestedInput = {
    create?: XOR<OrderCreateWithoutProduceInput, OrderUncheckedCreateWithoutProduceInput> | OrderCreateWithoutProduceInput[] | OrderUncheckedCreateWithoutProduceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProduceInput | OrderCreateOrConnectWithoutProduceInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProduceInput | OrderUpsertWithWhereUniqueWithoutProduceInput[]
    createMany?: OrderCreateManyProduceInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProduceInput | OrderUpdateWithWhereUniqueWithoutProduceInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProduceInput | OrderUpdateManyWithWhereWithoutProduceInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type VendorProfileCreateNestedOneWithoutRentalSpacesInput = {
    create?: XOR<VendorProfileCreateWithoutRentalSpacesInput, VendorProfileUncheckedCreateWithoutRentalSpacesInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutRentalSpacesInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type PlantTrackingCreateNestedManyWithoutRentalSpaceInput = {
    create?: XOR<PlantTrackingCreateWithoutRentalSpaceInput, PlantTrackingUncheckedCreateWithoutRentalSpaceInput> | PlantTrackingCreateWithoutRentalSpaceInput[] | PlantTrackingUncheckedCreateWithoutRentalSpaceInput[]
    connectOrCreate?: PlantTrackingCreateOrConnectWithoutRentalSpaceInput | PlantTrackingCreateOrConnectWithoutRentalSpaceInput[]
    createMany?: PlantTrackingCreateManyRentalSpaceInputEnvelope
    connect?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
  }

  export type RentalBookingCreateNestedManyWithoutRentalSpaceInput = {
    create?: XOR<RentalBookingCreateWithoutRentalSpaceInput, RentalBookingUncheckedCreateWithoutRentalSpaceInput> | RentalBookingCreateWithoutRentalSpaceInput[] | RentalBookingUncheckedCreateWithoutRentalSpaceInput[]
    connectOrCreate?: RentalBookingCreateOrConnectWithoutRentalSpaceInput | RentalBookingCreateOrConnectWithoutRentalSpaceInput[]
    createMany?: RentalBookingCreateManyRentalSpaceInputEnvelope
    connect?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
  }

  export type PlantTrackingUncheckedCreateNestedManyWithoutRentalSpaceInput = {
    create?: XOR<PlantTrackingCreateWithoutRentalSpaceInput, PlantTrackingUncheckedCreateWithoutRentalSpaceInput> | PlantTrackingCreateWithoutRentalSpaceInput[] | PlantTrackingUncheckedCreateWithoutRentalSpaceInput[]
    connectOrCreate?: PlantTrackingCreateOrConnectWithoutRentalSpaceInput | PlantTrackingCreateOrConnectWithoutRentalSpaceInput[]
    createMany?: PlantTrackingCreateManyRentalSpaceInputEnvelope
    connect?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
  }

  export type RentalBookingUncheckedCreateNestedManyWithoutRentalSpaceInput = {
    create?: XOR<RentalBookingCreateWithoutRentalSpaceInput, RentalBookingUncheckedCreateWithoutRentalSpaceInput> | RentalBookingCreateWithoutRentalSpaceInput[] | RentalBookingUncheckedCreateWithoutRentalSpaceInput[]
    connectOrCreate?: RentalBookingCreateOrConnectWithoutRentalSpaceInput | RentalBookingCreateOrConnectWithoutRentalSpaceInput[]
    createMany?: RentalBookingCreateManyRentalSpaceInputEnvelope
    connect?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
  }

  export type VendorProfileUpdateOneRequiredWithoutRentalSpacesNestedInput = {
    create?: XOR<VendorProfileCreateWithoutRentalSpacesInput, VendorProfileUncheckedCreateWithoutRentalSpacesInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutRentalSpacesInput
    upsert?: VendorProfileUpsertWithoutRentalSpacesInput
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutRentalSpacesInput, VendorProfileUpdateWithoutRentalSpacesInput>, VendorProfileUncheckedUpdateWithoutRentalSpacesInput>
  }

  export type PlantTrackingUpdateManyWithoutRentalSpaceNestedInput = {
    create?: XOR<PlantTrackingCreateWithoutRentalSpaceInput, PlantTrackingUncheckedCreateWithoutRentalSpaceInput> | PlantTrackingCreateWithoutRentalSpaceInput[] | PlantTrackingUncheckedCreateWithoutRentalSpaceInput[]
    connectOrCreate?: PlantTrackingCreateOrConnectWithoutRentalSpaceInput | PlantTrackingCreateOrConnectWithoutRentalSpaceInput[]
    upsert?: PlantTrackingUpsertWithWhereUniqueWithoutRentalSpaceInput | PlantTrackingUpsertWithWhereUniqueWithoutRentalSpaceInput[]
    createMany?: PlantTrackingCreateManyRentalSpaceInputEnvelope
    set?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    disconnect?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    delete?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    connect?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    update?: PlantTrackingUpdateWithWhereUniqueWithoutRentalSpaceInput | PlantTrackingUpdateWithWhereUniqueWithoutRentalSpaceInput[]
    updateMany?: PlantTrackingUpdateManyWithWhereWithoutRentalSpaceInput | PlantTrackingUpdateManyWithWhereWithoutRentalSpaceInput[]
    deleteMany?: PlantTrackingScalarWhereInput | PlantTrackingScalarWhereInput[]
  }

  export type RentalBookingUpdateManyWithoutRentalSpaceNestedInput = {
    create?: XOR<RentalBookingCreateWithoutRentalSpaceInput, RentalBookingUncheckedCreateWithoutRentalSpaceInput> | RentalBookingCreateWithoutRentalSpaceInput[] | RentalBookingUncheckedCreateWithoutRentalSpaceInput[]
    connectOrCreate?: RentalBookingCreateOrConnectWithoutRentalSpaceInput | RentalBookingCreateOrConnectWithoutRentalSpaceInput[]
    upsert?: RentalBookingUpsertWithWhereUniqueWithoutRentalSpaceInput | RentalBookingUpsertWithWhereUniqueWithoutRentalSpaceInput[]
    createMany?: RentalBookingCreateManyRentalSpaceInputEnvelope
    set?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    disconnect?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    delete?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    connect?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    update?: RentalBookingUpdateWithWhereUniqueWithoutRentalSpaceInput | RentalBookingUpdateWithWhereUniqueWithoutRentalSpaceInput[]
    updateMany?: RentalBookingUpdateManyWithWhereWithoutRentalSpaceInput | RentalBookingUpdateManyWithWhereWithoutRentalSpaceInput[]
    deleteMany?: RentalBookingScalarWhereInput | RentalBookingScalarWhereInput[]
  }

  export type PlantTrackingUncheckedUpdateManyWithoutRentalSpaceNestedInput = {
    create?: XOR<PlantTrackingCreateWithoutRentalSpaceInput, PlantTrackingUncheckedCreateWithoutRentalSpaceInput> | PlantTrackingCreateWithoutRentalSpaceInput[] | PlantTrackingUncheckedCreateWithoutRentalSpaceInput[]
    connectOrCreate?: PlantTrackingCreateOrConnectWithoutRentalSpaceInput | PlantTrackingCreateOrConnectWithoutRentalSpaceInput[]
    upsert?: PlantTrackingUpsertWithWhereUniqueWithoutRentalSpaceInput | PlantTrackingUpsertWithWhereUniqueWithoutRentalSpaceInput[]
    createMany?: PlantTrackingCreateManyRentalSpaceInputEnvelope
    set?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    disconnect?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    delete?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    connect?: PlantTrackingWhereUniqueInput | PlantTrackingWhereUniqueInput[]
    update?: PlantTrackingUpdateWithWhereUniqueWithoutRentalSpaceInput | PlantTrackingUpdateWithWhereUniqueWithoutRentalSpaceInput[]
    updateMany?: PlantTrackingUpdateManyWithWhereWithoutRentalSpaceInput | PlantTrackingUpdateManyWithWhereWithoutRentalSpaceInput[]
    deleteMany?: PlantTrackingScalarWhereInput | PlantTrackingScalarWhereInput[]
  }

  export type RentalBookingUncheckedUpdateManyWithoutRentalSpaceNestedInput = {
    create?: XOR<RentalBookingCreateWithoutRentalSpaceInput, RentalBookingUncheckedCreateWithoutRentalSpaceInput> | RentalBookingCreateWithoutRentalSpaceInput[] | RentalBookingUncheckedCreateWithoutRentalSpaceInput[]
    connectOrCreate?: RentalBookingCreateOrConnectWithoutRentalSpaceInput | RentalBookingCreateOrConnectWithoutRentalSpaceInput[]
    upsert?: RentalBookingUpsertWithWhereUniqueWithoutRentalSpaceInput | RentalBookingUpsertWithWhereUniqueWithoutRentalSpaceInput[]
    createMany?: RentalBookingCreateManyRentalSpaceInputEnvelope
    set?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    disconnect?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    delete?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    connect?: RentalBookingWhereUniqueInput | RentalBookingWhereUniqueInput[]
    update?: RentalBookingUpdateWithWhereUniqueWithoutRentalSpaceInput | RentalBookingUpdateWithWhereUniqueWithoutRentalSpaceInput[]
    updateMany?: RentalBookingUpdateManyWithWhereWithoutRentalSpaceInput | RentalBookingUpdateManyWithWhereWithoutRentalSpaceInput[]
    deleteMany?: RentalBookingScalarWhereInput | RentalBookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type ProduceCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProduceCreateWithoutOrdersInput, ProduceUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProduceCreateOrConnectWithoutOrdersInput
    connect?: ProduceWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type ProduceUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ProduceCreateWithoutOrdersInput, ProduceUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProduceCreateOrConnectWithoutOrdersInput
    upsert?: ProduceUpsertWithoutOrdersInput
    connect?: ProduceWhereUniqueInput
    update?: XOR<XOR<ProduceUpdateToOneWithWhereWithoutOrdersInput, ProduceUpdateWithoutOrdersInput>, ProduceUncheckedUpdateWithoutOrdersInput>
  }

  export type CommunityPostCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCommunityPostsInput = {
    create?: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityPostUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutCommunityPostsNestedInput = {
    create?: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityPostsInput
    upsert?: UserUpsertWithoutCommunityPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunityPostsInput, UserUpdateWithoutCommunityPostsInput>, UserUncheckedUpdateWithoutCommunityPostsInput>
  }

  export type VendorProfileCreateNestedOneWithoutSustainabilityCertsInput = {
    create?: XOR<VendorProfileCreateWithoutSustainabilityCertsInput, VendorProfileUncheckedCreateWithoutSustainabilityCertsInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutSustainabilityCertsInput
    connect?: VendorProfileWhereUniqueInput
  }

  export type VendorProfileUpdateOneRequiredWithoutSustainabilityCertsNestedInput = {
    create?: XOR<VendorProfileCreateWithoutSustainabilityCertsInput, VendorProfileUncheckedCreateWithoutSustainabilityCertsInput>
    connectOrCreate?: VendorProfileCreateOrConnectWithoutSustainabilityCertsInput
    upsert?: VendorProfileUpsertWithoutSustainabilityCertsInput
    connect?: VendorProfileWhereUniqueInput
    update?: XOR<XOR<VendorProfileUpdateToOneWithWhereWithoutSustainabilityCertsInput, VendorProfileUpdateWithoutSustainabilityCertsInput>, VendorProfileUncheckedUpdateWithoutSustainabilityCertsInput>
  }

  export type UserCreateNestedOneWithoutPlantTrackingsInput = {
    create?: XOR<UserCreateWithoutPlantTrackingsInput, UserUncheckedCreateWithoutPlantTrackingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlantTrackingsInput
    connect?: UserWhereUniqueInput
  }

  export type RentalSpaceCreateNestedOneWithoutPlantTrackingsInput = {
    create?: XOR<RentalSpaceCreateWithoutPlantTrackingsInput, RentalSpaceUncheckedCreateWithoutPlantTrackingsInput>
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutPlantTrackingsInput
    connect?: RentalSpaceWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPlantTrackingsNestedInput = {
    create?: XOR<UserCreateWithoutPlantTrackingsInput, UserUncheckedCreateWithoutPlantTrackingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlantTrackingsInput
    upsert?: UserUpsertWithoutPlantTrackingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlantTrackingsInput, UserUpdateWithoutPlantTrackingsInput>, UserUncheckedUpdateWithoutPlantTrackingsInput>
  }

  export type RentalSpaceUpdateOneRequiredWithoutPlantTrackingsNestedInput = {
    create?: XOR<RentalSpaceCreateWithoutPlantTrackingsInput, RentalSpaceUncheckedCreateWithoutPlantTrackingsInput>
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutPlantTrackingsInput
    upsert?: RentalSpaceUpsertWithoutPlantTrackingsInput
    connect?: RentalSpaceWhereUniqueInput
    update?: XOR<XOR<RentalSpaceUpdateToOneWithWhereWithoutPlantTrackingsInput, RentalSpaceUpdateWithoutPlantTrackingsInput>, RentalSpaceUncheckedUpdateWithoutPlantTrackingsInput>
  }

  export type UserCreateNestedOneWithoutRentalBookingsInput = {
    create?: XOR<UserCreateWithoutRentalBookingsInput, UserUncheckedCreateWithoutRentalBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type RentalSpaceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<RentalSpaceCreateWithoutBookingsInput, RentalSpaceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutBookingsInput
    connect?: RentalSpaceWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type UserUpdateOneRequiredWithoutRentalBookingsNestedInput = {
    create?: XOR<UserCreateWithoutRentalBookingsInput, UserUncheckedCreateWithoutRentalBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalBookingsInput
    upsert?: UserUpsertWithoutRentalBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRentalBookingsInput, UserUpdateWithoutRentalBookingsInput>, UserUncheckedUpdateWithoutRentalBookingsInput>
  }

  export type RentalSpaceUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<RentalSpaceCreateWithoutBookingsInput, RentalSpaceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RentalSpaceCreateOrConnectWithoutBookingsInput
    upsert?: RentalSpaceUpsertWithoutBookingsInput
    connect?: RentalSpaceWhereUniqueInput
    update?: XOR<XOR<RentalSpaceUpdateToOneWithWhereWithoutBookingsInput, RentalSpaceUpdateWithoutBookingsInput>, RentalSpaceUncheckedUpdateWithoutBookingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CertStatus | EnumCertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertStatus[] | ListEnumCertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertStatus[] | ListEnumCertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertStatusFilter<$PrismaModel> | $Enums.CertStatus
  }

  export type NestedEnumCertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CertStatus | EnumCertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertStatus[] | ListEnumCertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertStatus[] | ListEnumCertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertStatusWithAggregatesFilter<$PrismaModel> | $Enums.CertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCertStatusFilter<$PrismaModel>
    _max?: NestedEnumCertStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type VendorProfileCreateWithoutUserInput = {
    id?: string
    farmName: string
    certificationStatus?: $Enums.CertStatus
    farmLocation: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    produces?: ProduceCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceCreateNestedManyWithoutVendorInput
    sustainabilityCerts?: SustainabilityCertCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    farmName: string
    certificationStatus?: $Enums.CertStatus
    farmLocation: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    produces?: ProduceUncheckedCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceUncheckedCreateNestedManyWithoutVendorInput
    sustainabilityCerts?: SustainabilityCertUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutUserInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    vendorId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    produce: ProduceCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    produceId: string
    vendorId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommunityPostCreateWithoutUserInput = {
    id?: string
    title: string
    postContent: string
    tags?: CommunityPostCreatetagsInput | string[]
    postDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityPostUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    postContent: string
    tags?: CommunityPostCreatetagsInput | string[]
    postDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityPostCreateOrConnectWithoutUserInput = {
    where: CommunityPostWhereUniqueInput
    create: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput>
  }

  export type CommunityPostCreateManyUserInputEnvelope = {
    data: CommunityPostCreateManyUserInput | CommunityPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlantTrackingCreateWithoutUserInput = {
    id?: string
    plantName: string
    growthStage: string
    healthStatus: string
    harvestDate?: Date | string | null
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rentalSpace: RentalSpaceCreateNestedOneWithoutPlantTrackingsInput
  }

  export type PlantTrackingUncheckedCreateWithoutUserInput = {
    id?: string
    rentalSpaceId: string
    plantName: string
    growthStage: string
    healthStatus: string
    harvestDate?: Date | string | null
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlantTrackingCreateOrConnectWithoutUserInput = {
    where: PlantTrackingWhereUniqueInput
    create: XOR<PlantTrackingCreateWithoutUserInput, PlantTrackingUncheckedCreateWithoutUserInput>
  }

  export type PlantTrackingCreateManyUserInputEnvelope = {
    data: PlantTrackingCreateManyUserInput | PlantTrackingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RentalBookingCreateWithoutCustomerInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rentalSpace: RentalSpaceCreateNestedOneWithoutBookingsInput
  }

  export type RentalBookingUncheckedCreateWithoutCustomerInput = {
    id?: string
    rentalSpaceId: string
    startDate: Date | string
    endDate: Date | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalBookingCreateOrConnectWithoutCustomerInput = {
    where: RentalBookingWhereUniqueInput
    create: XOR<RentalBookingCreateWithoutCustomerInput, RentalBookingUncheckedCreateWithoutCustomerInput>
  }

  export type RentalBookingCreateManyCustomerInputEnvelope = {
    data: RentalBookingCreateManyCustomerInput | RentalBookingCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type VendorProfileUpsertWithoutUserInput = {
    update: XOR<VendorProfileUpdateWithoutUserInput, VendorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<VendorProfileCreateWithoutUserInput, VendorProfileUncheckedCreateWithoutUserInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutUserInput, VendorProfileUncheckedUpdateWithoutUserInput>
  }

  export type VendorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produces?: ProduceUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUpdateManyWithoutVendorNestedInput
    sustainabilityCerts?: SustainabilityCertUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produces?: ProduceUncheckedUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput
    sustainabilityCerts?: SustainabilityCertUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringFilter<"Order"> | string
    produceId?: StringFilter<"Order"> | string
    vendorId?: StringFilter<"Order"> | string
    quantity?: IntFilter<"Order"> | number
    totalPrice?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    orderDate?: DateTimeFilter<"Order"> | Date | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type CommunityPostUpsertWithWhereUniqueWithoutUserInput = {
    where: CommunityPostWhereUniqueInput
    update: XOR<CommunityPostUpdateWithoutUserInput, CommunityPostUncheckedUpdateWithoutUserInput>
    create: XOR<CommunityPostCreateWithoutUserInput, CommunityPostUncheckedCreateWithoutUserInput>
  }

  export type CommunityPostUpdateWithWhereUniqueWithoutUserInput = {
    where: CommunityPostWhereUniqueInput
    data: XOR<CommunityPostUpdateWithoutUserInput, CommunityPostUncheckedUpdateWithoutUserInput>
  }

  export type CommunityPostUpdateManyWithWhereWithoutUserInput = {
    where: CommunityPostScalarWhereInput
    data: XOR<CommunityPostUpdateManyMutationInput, CommunityPostUncheckedUpdateManyWithoutUserInput>
  }

  export type CommunityPostScalarWhereInput = {
    AND?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
    OR?: CommunityPostScalarWhereInput[]
    NOT?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
    id?: StringFilter<"CommunityPost"> | string
    userId?: StringFilter<"CommunityPost"> | string
    title?: StringFilter<"CommunityPost"> | string
    postContent?: StringFilter<"CommunityPost"> | string
    tags?: StringNullableListFilter<"CommunityPost">
    postDate?: DateTimeFilter<"CommunityPost"> | Date | string
    createdAt?: DateTimeFilter<"CommunityPost"> | Date | string
    updatedAt?: DateTimeFilter<"CommunityPost"> | Date | string
  }

  export type PlantTrackingUpsertWithWhereUniqueWithoutUserInput = {
    where: PlantTrackingWhereUniqueInput
    update: XOR<PlantTrackingUpdateWithoutUserInput, PlantTrackingUncheckedUpdateWithoutUserInput>
    create: XOR<PlantTrackingCreateWithoutUserInput, PlantTrackingUncheckedCreateWithoutUserInput>
  }

  export type PlantTrackingUpdateWithWhereUniqueWithoutUserInput = {
    where: PlantTrackingWhereUniqueInput
    data: XOR<PlantTrackingUpdateWithoutUserInput, PlantTrackingUncheckedUpdateWithoutUserInput>
  }

  export type PlantTrackingUpdateManyWithWhereWithoutUserInput = {
    where: PlantTrackingScalarWhereInput
    data: XOR<PlantTrackingUpdateManyMutationInput, PlantTrackingUncheckedUpdateManyWithoutUserInput>
  }

  export type PlantTrackingScalarWhereInput = {
    AND?: PlantTrackingScalarWhereInput | PlantTrackingScalarWhereInput[]
    OR?: PlantTrackingScalarWhereInput[]
    NOT?: PlantTrackingScalarWhereInput | PlantTrackingScalarWhereInput[]
    id?: StringFilter<"PlantTracking"> | string
    userId?: StringFilter<"PlantTracking"> | string
    rentalSpaceId?: StringFilter<"PlantTracking"> | string
    plantName?: StringFilter<"PlantTracking"> | string
    growthStage?: StringFilter<"PlantTracking"> | string
    healthStatus?: StringFilter<"PlantTracking"> | string
    harvestDate?: DateTimeNullableFilter<"PlantTracking"> | Date | string | null
    notes?: StringNullableFilter<"PlantTracking"> | string | null
    imageUrl?: StringNullableFilter<"PlantTracking"> | string | null
    createdAt?: DateTimeFilter<"PlantTracking"> | Date | string
    updatedAt?: DateTimeFilter<"PlantTracking"> | Date | string
  }

  export type RentalBookingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: RentalBookingWhereUniqueInput
    update: XOR<RentalBookingUpdateWithoutCustomerInput, RentalBookingUncheckedUpdateWithoutCustomerInput>
    create: XOR<RentalBookingCreateWithoutCustomerInput, RentalBookingUncheckedCreateWithoutCustomerInput>
  }

  export type RentalBookingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: RentalBookingWhereUniqueInput
    data: XOR<RentalBookingUpdateWithoutCustomerInput, RentalBookingUncheckedUpdateWithoutCustomerInput>
  }

  export type RentalBookingUpdateManyWithWhereWithoutCustomerInput = {
    where: RentalBookingScalarWhereInput
    data: XOR<RentalBookingUpdateManyMutationInput, RentalBookingUncheckedUpdateManyWithoutCustomerInput>
  }

  export type RentalBookingScalarWhereInput = {
    AND?: RentalBookingScalarWhereInput | RentalBookingScalarWhereInput[]
    OR?: RentalBookingScalarWhereInput[]
    NOT?: RentalBookingScalarWhereInput | RentalBookingScalarWhereInput[]
    id?: StringFilter<"RentalBooking"> | string
    customerId?: StringFilter<"RentalBooking"> | string
    rentalSpaceId?: StringFilter<"RentalBooking"> | string
    startDate?: DateTimeFilter<"RentalBooking"> | Date | string
    endDate?: DateTimeFilter<"RentalBooking"> | Date | string
    totalPrice?: DecimalFilter<"RentalBooking"> | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFilter<"RentalBooking"> | $Enums.BookingStatus
    notes?: StringNullableFilter<"RentalBooking"> | string | null
    createdAt?: DateTimeFilter<"RentalBooking"> | Date | string
    updatedAt?: DateTimeFilter<"RentalBooking"> | Date | string
  }

  export type UserCreateWithoutVendorProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerified?: boolean
    resetExpires?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    plantTrackings?: PlantTrackingCreateNestedManyWithoutUserInput
    rentalBookings?: RentalBookingCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutVendorProfileInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerified?: boolean
    resetExpires?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    plantTrackings?: PlantTrackingUncheckedCreateNestedManyWithoutUserInput
    rentalBookings?: RentalBookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutVendorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
  }

  export type ProduceCreateWithoutVendorInput = {
    id?: string
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    category: string
    certificationStatus?: $Enums.CertStatus
    availableQuantity?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutProduceInput
  }

  export type ProduceUncheckedCreateWithoutVendorInput = {
    id?: string
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    category: string
    certificationStatus?: $Enums.CertStatus
    availableQuantity?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutProduceInput
  }

  export type ProduceCreateOrConnectWithoutVendorInput = {
    where: ProduceWhereUniqueInput
    create: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput>
  }

  export type ProduceCreateManyVendorInputEnvelope = {
    data: ProduceCreateManyVendorInput | ProduceCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type RentalSpaceCreateWithoutVendorInput = {
    id?: string
    location: string
    size: string
    pricePerMonth: Decimal | DecimalJsLike | number | string
    availability?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plantTrackings?: PlantTrackingCreateNestedManyWithoutRentalSpaceInput
    bookings?: RentalBookingCreateNestedManyWithoutRentalSpaceInput
  }

  export type RentalSpaceUncheckedCreateWithoutVendorInput = {
    id?: string
    location: string
    size: string
    pricePerMonth: Decimal | DecimalJsLike | number | string
    availability?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plantTrackings?: PlantTrackingUncheckedCreateNestedManyWithoutRentalSpaceInput
    bookings?: RentalBookingUncheckedCreateNestedManyWithoutRentalSpaceInput
  }

  export type RentalSpaceCreateOrConnectWithoutVendorInput = {
    where: RentalSpaceWhereUniqueInput
    create: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput>
  }

  export type RentalSpaceCreateManyVendorInputEnvelope = {
    data: RentalSpaceCreateManyVendorInput | RentalSpaceCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type SustainabilityCertCreateWithoutVendorInput = {
    id?: string
    certifyingAgency: string
    certificationDate: Date | string
    documentUrl?: string | null
    status?: $Enums.CertStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SustainabilityCertUncheckedCreateWithoutVendorInput = {
    id?: string
    certifyingAgency: string
    certificationDate: Date | string
    documentUrl?: string | null
    status?: $Enums.CertStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SustainabilityCertCreateOrConnectWithoutVendorInput = {
    where: SustainabilityCertWhereUniqueInput
    create: XOR<SustainabilityCertCreateWithoutVendorInput, SustainabilityCertUncheckedCreateWithoutVendorInput>
  }

  export type SustainabilityCertCreateManyVendorInputEnvelope = {
    data: SustainabilityCertCreateManyVendorInput | SustainabilityCertCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVendorProfileInput = {
    update: XOR<UserUpdateWithoutVendorProfileInput, UserUncheckedUpdateWithoutVendorProfileInput>
    create: XOR<UserCreateWithoutVendorProfileInput, UserUncheckedCreateWithoutVendorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVendorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVendorProfileInput, UserUncheckedUpdateWithoutVendorProfileInput>
  }

  export type UserUpdateWithoutVendorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerified?: BoolFieldUpdateOperationsInput | boolean
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    plantTrackings?: PlantTrackingUpdateManyWithoutUserNestedInput
    rentalBookings?: RentalBookingUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutVendorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerified?: BoolFieldUpdateOperationsInput | boolean
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    plantTrackings?: PlantTrackingUncheckedUpdateManyWithoutUserNestedInput
    rentalBookings?: RentalBookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ProduceUpsertWithWhereUniqueWithoutVendorInput = {
    where: ProduceWhereUniqueInput
    update: XOR<ProduceUpdateWithoutVendorInput, ProduceUncheckedUpdateWithoutVendorInput>
    create: XOR<ProduceCreateWithoutVendorInput, ProduceUncheckedCreateWithoutVendorInput>
  }

  export type ProduceUpdateWithWhereUniqueWithoutVendorInput = {
    where: ProduceWhereUniqueInput
    data: XOR<ProduceUpdateWithoutVendorInput, ProduceUncheckedUpdateWithoutVendorInput>
  }

  export type ProduceUpdateManyWithWhereWithoutVendorInput = {
    where: ProduceScalarWhereInput
    data: XOR<ProduceUpdateManyMutationInput, ProduceUncheckedUpdateManyWithoutVendorInput>
  }

  export type ProduceScalarWhereInput = {
    AND?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
    OR?: ProduceScalarWhereInput[]
    NOT?: ProduceScalarWhereInput | ProduceScalarWhereInput[]
    id?: StringFilter<"Produce"> | string
    vendorId?: StringFilter<"Produce"> | string
    name?: StringFilter<"Produce"> | string
    description?: StringFilter<"Produce"> | string
    price?: DecimalFilter<"Produce"> | Decimal | DecimalJsLike | number | string
    category?: StringFilter<"Produce"> | string
    certificationStatus?: EnumCertStatusFilter<"Produce"> | $Enums.CertStatus
    availableQuantity?: IntFilter<"Produce"> | number
    imageUrl?: StringNullableFilter<"Produce"> | string | null
    createdAt?: DateTimeFilter<"Produce"> | Date | string
    updatedAt?: DateTimeFilter<"Produce"> | Date | string
  }

  export type RentalSpaceUpsertWithWhereUniqueWithoutVendorInput = {
    where: RentalSpaceWhereUniqueInput
    update: XOR<RentalSpaceUpdateWithoutVendorInput, RentalSpaceUncheckedUpdateWithoutVendorInput>
    create: XOR<RentalSpaceCreateWithoutVendorInput, RentalSpaceUncheckedCreateWithoutVendorInput>
  }

  export type RentalSpaceUpdateWithWhereUniqueWithoutVendorInput = {
    where: RentalSpaceWhereUniqueInput
    data: XOR<RentalSpaceUpdateWithoutVendorInput, RentalSpaceUncheckedUpdateWithoutVendorInput>
  }

  export type RentalSpaceUpdateManyWithWhereWithoutVendorInput = {
    where: RentalSpaceScalarWhereInput
    data: XOR<RentalSpaceUpdateManyMutationInput, RentalSpaceUncheckedUpdateManyWithoutVendorInput>
  }

  export type RentalSpaceScalarWhereInput = {
    AND?: RentalSpaceScalarWhereInput | RentalSpaceScalarWhereInput[]
    OR?: RentalSpaceScalarWhereInput[]
    NOT?: RentalSpaceScalarWhereInput | RentalSpaceScalarWhereInput[]
    id?: StringFilter<"RentalSpace"> | string
    vendorId?: StringFilter<"RentalSpace"> | string
    location?: StringFilter<"RentalSpace"> | string
    size?: StringFilter<"RentalSpace"> | string
    pricePerMonth?: DecimalFilter<"RentalSpace"> | Decimal | DecimalJsLike | number | string
    availability?: BoolFilter<"RentalSpace"> | boolean
    description?: StringNullableFilter<"RentalSpace"> | string | null
    createdAt?: DateTimeFilter<"RentalSpace"> | Date | string
    updatedAt?: DateTimeFilter<"RentalSpace"> | Date | string
  }

  export type SustainabilityCertUpsertWithWhereUniqueWithoutVendorInput = {
    where: SustainabilityCertWhereUniqueInput
    update: XOR<SustainabilityCertUpdateWithoutVendorInput, SustainabilityCertUncheckedUpdateWithoutVendorInput>
    create: XOR<SustainabilityCertCreateWithoutVendorInput, SustainabilityCertUncheckedCreateWithoutVendorInput>
  }

  export type SustainabilityCertUpdateWithWhereUniqueWithoutVendorInput = {
    where: SustainabilityCertWhereUniqueInput
    data: XOR<SustainabilityCertUpdateWithoutVendorInput, SustainabilityCertUncheckedUpdateWithoutVendorInput>
  }

  export type SustainabilityCertUpdateManyWithWhereWithoutVendorInput = {
    where: SustainabilityCertScalarWhereInput
    data: XOR<SustainabilityCertUpdateManyMutationInput, SustainabilityCertUncheckedUpdateManyWithoutVendorInput>
  }

  export type SustainabilityCertScalarWhereInput = {
    AND?: SustainabilityCertScalarWhereInput | SustainabilityCertScalarWhereInput[]
    OR?: SustainabilityCertScalarWhereInput[]
    NOT?: SustainabilityCertScalarWhereInput | SustainabilityCertScalarWhereInput[]
    id?: StringFilter<"SustainabilityCert"> | string
    vendorId?: StringFilter<"SustainabilityCert"> | string
    certifyingAgency?: StringFilter<"SustainabilityCert"> | string
    certificationDate?: DateTimeFilter<"SustainabilityCert"> | Date | string
    documentUrl?: StringNullableFilter<"SustainabilityCert"> | string | null
    status?: EnumCertStatusFilter<"SustainabilityCert"> | $Enums.CertStatus
    createdAt?: DateTimeFilter<"SustainabilityCert"> | Date | string
    updatedAt?: DateTimeFilter<"SustainabilityCert"> | Date | string
  }

  export type VendorProfileCreateWithoutProducesInput = {
    id?: string
    farmName: string
    certificationStatus?: $Enums.CertStatus
    farmLocation: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    rentalSpaces?: RentalSpaceCreateNestedManyWithoutVendorInput
    sustainabilityCerts?: SustainabilityCertCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutProducesInput = {
    id?: string
    userId: string
    farmName: string
    certificationStatus?: $Enums.CertStatus
    farmLocation: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rentalSpaces?: RentalSpaceUncheckedCreateNestedManyWithoutVendorInput
    sustainabilityCerts?: SustainabilityCertUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutProducesInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutProducesInput, VendorProfileUncheckedCreateWithoutProducesInput>
  }

  export type OrderCreateWithoutProduceInput = {
    id?: string
    vendorId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutProduceInput = {
    id?: string
    userId: string
    vendorId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutProduceInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProduceInput, OrderUncheckedCreateWithoutProduceInput>
  }

  export type OrderCreateManyProduceInputEnvelope = {
    data: OrderCreateManyProduceInput | OrderCreateManyProduceInput[]
    skipDuplicates?: boolean
  }

  export type VendorProfileUpsertWithoutProducesInput = {
    update: XOR<VendorProfileUpdateWithoutProducesInput, VendorProfileUncheckedUpdateWithoutProducesInput>
    create: XOR<VendorProfileCreateWithoutProducesInput, VendorProfileUncheckedCreateWithoutProducesInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutProducesInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutProducesInput, VendorProfileUncheckedUpdateWithoutProducesInput>
  }

  export type VendorProfileUpdateWithoutProducesInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    rentalSpaces?: RentalSpaceUpdateManyWithoutVendorNestedInput
    sustainabilityCerts?: SustainabilityCertUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutProducesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalSpaces?: RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput
    sustainabilityCerts?: SustainabilityCertUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutProduceInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutProduceInput, OrderUncheckedUpdateWithoutProduceInput>
    create: XOR<OrderCreateWithoutProduceInput, OrderUncheckedCreateWithoutProduceInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutProduceInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutProduceInput, OrderUncheckedUpdateWithoutProduceInput>
  }

  export type OrderUpdateManyWithWhereWithoutProduceInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutProduceInput>
  }

  export type VendorProfileCreateWithoutRentalSpacesInput = {
    id?: string
    farmName: string
    certificationStatus?: $Enums.CertStatus
    farmLocation: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    produces?: ProduceCreateNestedManyWithoutVendorInput
    sustainabilityCerts?: SustainabilityCertCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutRentalSpacesInput = {
    id?: string
    userId: string
    farmName: string
    certificationStatus?: $Enums.CertStatus
    farmLocation: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    produces?: ProduceUncheckedCreateNestedManyWithoutVendorInput
    sustainabilityCerts?: SustainabilityCertUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutRentalSpacesInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutRentalSpacesInput, VendorProfileUncheckedCreateWithoutRentalSpacesInput>
  }

  export type PlantTrackingCreateWithoutRentalSpaceInput = {
    id?: string
    plantName: string
    growthStage: string
    healthStatus: string
    harvestDate?: Date | string | null
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlantTrackingsInput
  }

  export type PlantTrackingUncheckedCreateWithoutRentalSpaceInput = {
    id?: string
    userId: string
    plantName: string
    growthStage: string
    healthStatus: string
    harvestDate?: Date | string | null
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlantTrackingCreateOrConnectWithoutRentalSpaceInput = {
    where: PlantTrackingWhereUniqueInput
    create: XOR<PlantTrackingCreateWithoutRentalSpaceInput, PlantTrackingUncheckedCreateWithoutRentalSpaceInput>
  }

  export type PlantTrackingCreateManyRentalSpaceInputEnvelope = {
    data: PlantTrackingCreateManyRentalSpaceInput | PlantTrackingCreateManyRentalSpaceInput[]
    skipDuplicates?: boolean
  }

  export type RentalBookingCreateWithoutRentalSpaceInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutRentalBookingsInput
  }

  export type RentalBookingUncheckedCreateWithoutRentalSpaceInput = {
    id?: string
    customerId: string
    startDate: Date | string
    endDate: Date | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalBookingCreateOrConnectWithoutRentalSpaceInput = {
    where: RentalBookingWhereUniqueInput
    create: XOR<RentalBookingCreateWithoutRentalSpaceInput, RentalBookingUncheckedCreateWithoutRentalSpaceInput>
  }

  export type RentalBookingCreateManyRentalSpaceInputEnvelope = {
    data: RentalBookingCreateManyRentalSpaceInput | RentalBookingCreateManyRentalSpaceInput[]
    skipDuplicates?: boolean
  }

  export type VendorProfileUpsertWithoutRentalSpacesInput = {
    update: XOR<VendorProfileUpdateWithoutRentalSpacesInput, VendorProfileUncheckedUpdateWithoutRentalSpacesInput>
    create: XOR<VendorProfileCreateWithoutRentalSpacesInput, VendorProfileUncheckedCreateWithoutRentalSpacesInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutRentalSpacesInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutRentalSpacesInput, VendorProfileUncheckedUpdateWithoutRentalSpacesInput>
  }

  export type VendorProfileUpdateWithoutRentalSpacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    produces?: ProduceUpdateManyWithoutVendorNestedInput
    sustainabilityCerts?: SustainabilityCertUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutRentalSpacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produces?: ProduceUncheckedUpdateManyWithoutVendorNestedInput
    sustainabilityCerts?: SustainabilityCertUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type PlantTrackingUpsertWithWhereUniqueWithoutRentalSpaceInput = {
    where: PlantTrackingWhereUniqueInput
    update: XOR<PlantTrackingUpdateWithoutRentalSpaceInput, PlantTrackingUncheckedUpdateWithoutRentalSpaceInput>
    create: XOR<PlantTrackingCreateWithoutRentalSpaceInput, PlantTrackingUncheckedCreateWithoutRentalSpaceInput>
  }

  export type PlantTrackingUpdateWithWhereUniqueWithoutRentalSpaceInput = {
    where: PlantTrackingWhereUniqueInput
    data: XOR<PlantTrackingUpdateWithoutRentalSpaceInput, PlantTrackingUncheckedUpdateWithoutRentalSpaceInput>
  }

  export type PlantTrackingUpdateManyWithWhereWithoutRentalSpaceInput = {
    where: PlantTrackingScalarWhereInput
    data: XOR<PlantTrackingUpdateManyMutationInput, PlantTrackingUncheckedUpdateManyWithoutRentalSpaceInput>
  }

  export type RentalBookingUpsertWithWhereUniqueWithoutRentalSpaceInput = {
    where: RentalBookingWhereUniqueInput
    update: XOR<RentalBookingUpdateWithoutRentalSpaceInput, RentalBookingUncheckedUpdateWithoutRentalSpaceInput>
    create: XOR<RentalBookingCreateWithoutRentalSpaceInput, RentalBookingUncheckedCreateWithoutRentalSpaceInput>
  }

  export type RentalBookingUpdateWithWhereUniqueWithoutRentalSpaceInput = {
    where: RentalBookingWhereUniqueInput
    data: XOR<RentalBookingUpdateWithoutRentalSpaceInput, RentalBookingUncheckedUpdateWithoutRentalSpaceInput>
  }

  export type RentalBookingUpdateManyWithWhereWithoutRentalSpaceInput = {
    where: RentalBookingScalarWhereInput
    data: XOR<RentalBookingUpdateManyMutationInput, RentalBookingUncheckedUpdateManyWithoutRentalSpaceInput>
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerified?: boolean
    resetExpires?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    plantTrackings?: PlantTrackingCreateNestedManyWithoutUserInput
    rentalBookings?: RentalBookingCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerified?: boolean
    resetExpires?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    plantTrackings?: PlantTrackingUncheckedCreateNestedManyWithoutUserInput
    rentalBookings?: RentalBookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type ProduceCreateWithoutOrdersInput = {
    id?: string
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    category: string
    certificationStatus?: $Enums.CertStatus
    availableQuantity?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorProfileCreateNestedOneWithoutProducesInput
  }

  export type ProduceUncheckedCreateWithoutOrdersInput = {
    id?: string
    vendorId: string
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    category: string
    certificationStatus?: $Enums.CertStatus
    availableQuantity?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProduceCreateOrConnectWithoutOrdersInput = {
    where: ProduceWhereUniqueInput
    create: XOR<ProduceCreateWithoutOrdersInput, ProduceUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerified?: BoolFieldUpdateOperationsInput | boolean
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    plantTrackings?: PlantTrackingUpdateManyWithoutUserNestedInput
    rentalBookings?: RentalBookingUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerified?: BoolFieldUpdateOperationsInput | boolean
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    plantTrackings?: PlantTrackingUncheckedUpdateManyWithoutUserNestedInput
    rentalBookings?: RentalBookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ProduceUpsertWithoutOrdersInput = {
    update: XOR<ProduceUpdateWithoutOrdersInput, ProduceUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProduceCreateWithoutOrdersInput, ProduceUncheckedCreateWithoutOrdersInput>
    where?: ProduceWhereInput
  }

  export type ProduceUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ProduceWhereInput
    data: XOR<ProduceUpdateWithoutOrdersInput, ProduceUncheckedUpdateWithoutOrdersInput>
  }

  export type ProduceUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorProfileUpdateOneRequiredWithoutProducesNestedInput
  }

  export type ProduceUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutCommunityPostsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerified?: boolean
    resetExpires?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    plantTrackings?: PlantTrackingCreateNestedManyWithoutUserInput
    rentalBookings?: RentalBookingCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutCommunityPostsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerified?: boolean
    resetExpires?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    plantTrackings?: PlantTrackingUncheckedCreateNestedManyWithoutUserInput
    rentalBookings?: RentalBookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutCommunityPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
  }

  export type UserUpsertWithoutCommunityPostsInput = {
    update: XOR<UserUpdateWithoutCommunityPostsInput, UserUncheckedUpdateWithoutCommunityPostsInput>
    create: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunityPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunityPostsInput, UserUncheckedUpdateWithoutCommunityPostsInput>
  }

  export type UserUpdateWithoutCommunityPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerified?: BoolFieldUpdateOperationsInput | boolean
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    plantTrackings?: PlantTrackingUpdateManyWithoutUserNestedInput
    rentalBookings?: RentalBookingUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunityPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerified?: BoolFieldUpdateOperationsInput | boolean
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    plantTrackings?: PlantTrackingUncheckedUpdateManyWithoutUserNestedInput
    rentalBookings?: RentalBookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type VendorProfileCreateWithoutSustainabilityCertsInput = {
    id?: string
    farmName: string
    certificationStatus?: $Enums.CertStatus
    farmLocation: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVendorProfileInput
    produces?: ProduceCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileUncheckedCreateWithoutSustainabilityCertsInput = {
    id?: string
    userId: string
    farmName: string
    certificationStatus?: $Enums.CertStatus
    farmLocation: string
    isApproved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    produces?: ProduceUncheckedCreateNestedManyWithoutVendorInput
    rentalSpaces?: RentalSpaceUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorProfileCreateOrConnectWithoutSustainabilityCertsInput = {
    where: VendorProfileWhereUniqueInput
    create: XOR<VendorProfileCreateWithoutSustainabilityCertsInput, VendorProfileUncheckedCreateWithoutSustainabilityCertsInput>
  }

  export type VendorProfileUpsertWithoutSustainabilityCertsInput = {
    update: XOR<VendorProfileUpdateWithoutSustainabilityCertsInput, VendorProfileUncheckedUpdateWithoutSustainabilityCertsInput>
    create: XOR<VendorProfileCreateWithoutSustainabilityCertsInput, VendorProfileUncheckedCreateWithoutSustainabilityCertsInput>
    where?: VendorProfileWhereInput
  }

  export type VendorProfileUpdateToOneWithWhereWithoutSustainabilityCertsInput = {
    where?: VendorProfileWhereInput
    data: XOR<VendorProfileUpdateWithoutSustainabilityCertsInput, VendorProfileUncheckedUpdateWithoutSustainabilityCertsInput>
  }

  export type VendorProfileUpdateWithoutSustainabilityCertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVendorProfileNestedInput
    produces?: ProduceUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUpdateManyWithoutVendorNestedInput
  }

  export type VendorProfileUncheckedUpdateWithoutSustainabilityCertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    farmName?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    farmLocation?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produces?: ProduceUncheckedUpdateManyWithoutVendorNestedInput
    rentalSpaces?: RentalSpaceUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type UserCreateWithoutPlantTrackingsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerified?: boolean
    resetExpires?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    rentalBookings?: RentalBookingCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutPlantTrackingsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerified?: boolean
    resetExpires?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    rentalBookings?: RentalBookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutPlantTrackingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlantTrackingsInput, UserUncheckedCreateWithoutPlantTrackingsInput>
  }

  export type RentalSpaceCreateWithoutPlantTrackingsInput = {
    id?: string
    location: string
    size: string
    pricePerMonth: Decimal | DecimalJsLike | number | string
    availability?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorProfileCreateNestedOneWithoutRentalSpacesInput
    bookings?: RentalBookingCreateNestedManyWithoutRentalSpaceInput
  }

  export type RentalSpaceUncheckedCreateWithoutPlantTrackingsInput = {
    id?: string
    vendorId: string
    location: string
    size: string
    pricePerMonth: Decimal | DecimalJsLike | number | string
    availability?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: RentalBookingUncheckedCreateNestedManyWithoutRentalSpaceInput
  }

  export type RentalSpaceCreateOrConnectWithoutPlantTrackingsInput = {
    where: RentalSpaceWhereUniqueInput
    create: XOR<RentalSpaceCreateWithoutPlantTrackingsInput, RentalSpaceUncheckedCreateWithoutPlantTrackingsInput>
  }

  export type UserUpsertWithoutPlantTrackingsInput = {
    update: XOR<UserUpdateWithoutPlantTrackingsInput, UserUncheckedUpdateWithoutPlantTrackingsInput>
    create: XOR<UserCreateWithoutPlantTrackingsInput, UserUncheckedCreateWithoutPlantTrackingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlantTrackingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlantTrackingsInput, UserUncheckedUpdateWithoutPlantTrackingsInput>
  }

  export type UserUpdateWithoutPlantTrackingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerified?: BoolFieldUpdateOperationsInput | boolean
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    rentalBookings?: RentalBookingUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutPlantTrackingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerified?: BoolFieldUpdateOperationsInput | boolean
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    rentalBookings?: RentalBookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type RentalSpaceUpsertWithoutPlantTrackingsInput = {
    update: XOR<RentalSpaceUpdateWithoutPlantTrackingsInput, RentalSpaceUncheckedUpdateWithoutPlantTrackingsInput>
    create: XOR<RentalSpaceCreateWithoutPlantTrackingsInput, RentalSpaceUncheckedCreateWithoutPlantTrackingsInput>
    where?: RentalSpaceWhereInput
  }

  export type RentalSpaceUpdateToOneWithWhereWithoutPlantTrackingsInput = {
    where?: RentalSpaceWhereInput
    data: XOR<RentalSpaceUpdateWithoutPlantTrackingsInput, RentalSpaceUncheckedUpdateWithoutPlantTrackingsInput>
  }

  export type RentalSpaceUpdateWithoutPlantTrackingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorProfileUpdateOneRequiredWithoutRentalSpacesNestedInput
    bookings?: RentalBookingUpdateManyWithoutRentalSpaceNestedInput
  }

  export type RentalSpaceUncheckedUpdateWithoutPlantTrackingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: RentalBookingUncheckedUpdateManyWithoutRentalSpaceNestedInput
  }

  export type UserCreateWithoutRentalBookingsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerified?: boolean
    resetExpires?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutUserInput
    plantTrackings?: PlantTrackingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRentalBookingsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    status?: $Enums.UserStatus
    otp?: string | null
    otpExpires?: Date | string | null
    otpVerified?: boolean
    resetExpires?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendorProfile?: VendorProfileUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutUserInput
    plantTrackings?: PlantTrackingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRentalBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRentalBookingsInput, UserUncheckedCreateWithoutRentalBookingsInput>
  }

  export type RentalSpaceCreateWithoutBookingsInput = {
    id?: string
    location: string
    size: string
    pricePerMonth: Decimal | DecimalJsLike | number | string
    availability?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorProfileCreateNestedOneWithoutRentalSpacesInput
    plantTrackings?: PlantTrackingCreateNestedManyWithoutRentalSpaceInput
  }

  export type RentalSpaceUncheckedCreateWithoutBookingsInput = {
    id?: string
    vendorId: string
    location: string
    size: string
    pricePerMonth: Decimal | DecimalJsLike | number | string
    availability?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plantTrackings?: PlantTrackingUncheckedCreateNestedManyWithoutRentalSpaceInput
  }

  export type RentalSpaceCreateOrConnectWithoutBookingsInput = {
    where: RentalSpaceWhereUniqueInput
    create: XOR<RentalSpaceCreateWithoutBookingsInput, RentalSpaceUncheckedCreateWithoutBookingsInput>
  }

  export type UserUpsertWithoutRentalBookingsInput = {
    update: XOR<UserUpdateWithoutRentalBookingsInput, UserUncheckedUpdateWithoutRentalBookingsInput>
    create: XOR<UserCreateWithoutRentalBookingsInput, UserUncheckedCreateWithoutRentalBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRentalBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRentalBookingsInput, UserUncheckedUpdateWithoutRentalBookingsInput>
  }

  export type UserUpdateWithoutRentalBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerified?: BoolFieldUpdateOperationsInput | boolean
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutUserNestedInput
    plantTrackings?: PlantTrackingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRentalBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    otpVerified?: BoolFieldUpdateOperationsInput | boolean
    resetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorProfile?: VendorProfileUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutUserNestedInput
    plantTrackings?: PlantTrackingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RentalSpaceUpsertWithoutBookingsInput = {
    update: XOR<RentalSpaceUpdateWithoutBookingsInput, RentalSpaceUncheckedUpdateWithoutBookingsInput>
    create: XOR<RentalSpaceCreateWithoutBookingsInput, RentalSpaceUncheckedCreateWithoutBookingsInput>
    where?: RentalSpaceWhereInput
  }

  export type RentalSpaceUpdateToOneWithWhereWithoutBookingsInput = {
    where?: RentalSpaceWhereInput
    data: XOR<RentalSpaceUpdateWithoutBookingsInput, RentalSpaceUncheckedUpdateWithoutBookingsInput>
  }

  export type RentalSpaceUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorProfileUpdateOneRequiredWithoutRentalSpacesNestedInput
    plantTrackings?: PlantTrackingUpdateManyWithoutRentalSpaceNestedInput
  }

  export type RentalSpaceUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plantTrackings?: PlantTrackingUncheckedUpdateManyWithoutRentalSpaceNestedInput
  }

  export type OrderCreateManyUserInput = {
    id?: string
    produceId: string
    vendorId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityPostCreateManyUserInput = {
    id?: string
    title: string
    postContent: string
    tags?: CommunityPostCreatetagsInput | string[]
    postDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlantTrackingCreateManyUserInput = {
    id?: string
    rentalSpaceId: string
    plantName: string
    growthStage: string
    healthStatus: string
    harvestDate?: Date | string | null
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalBookingCreateManyCustomerInput = {
    id?: string
    rentalSpaceId: string
    startDate: Date | string
    endDate: Date | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produce?: ProduceUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    produceId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    produceId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    postContent?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    postDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantTrackingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plantName?: StringFieldUpdateOperationsInput | string
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalSpace?: RentalSpaceUpdateOneRequiredWithoutPlantTrackingsNestedInput
  }

  export type PlantTrackingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalSpaceId?: StringFieldUpdateOperationsInput | string
    plantName?: StringFieldUpdateOperationsInput | string
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantTrackingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalSpaceId?: StringFieldUpdateOperationsInput | string
    plantName?: StringFieldUpdateOperationsInput | string
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalBookingUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalSpace?: RentalSpaceUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type RentalBookingUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalSpaceId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalBookingUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalSpaceId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProduceCreateManyVendorInput = {
    id?: string
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    category: string
    certificationStatus?: $Enums.CertStatus
    availableQuantity?: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalSpaceCreateManyVendorInput = {
    id?: string
    location: string
    size: string
    pricePerMonth: Decimal | DecimalJsLike | number | string
    availability?: boolean
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SustainabilityCertCreateManyVendorInput = {
    id?: string
    certifyingAgency: string
    certificationDate: Date | string
    documentUrl?: string | null
    status?: $Enums.CertStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProduceUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutProduceNestedInput
  }

  export type ProduceUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutProduceNestedInput
  }

  export type ProduceUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    category?: StringFieldUpdateOperationsInput | string
    certificationStatus?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    availableQuantity?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalSpaceUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plantTrackings?: PlantTrackingUpdateManyWithoutRentalSpaceNestedInput
    bookings?: RentalBookingUpdateManyWithoutRentalSpaceNestedInput
  }

  export type RentalSpaceUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plantTrackings?: PlantTrackingUncheckedUpdateManyWithoutRentalSpaceNestedInput
    bookings?: RentalBookingUncheckedUpdateManyWithoutRentalSpaceNestedInput
  }

  export type RentalSpaceUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    pricePerMonth?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SustainabilityCertUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    certifyingAgency?: StringFieldUpdateOperationsInput | string
    certificationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SustainabilityCertUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    certifyingAgency?: StringFieldUpdateOperationsInput | string
    certificationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SustainabilityCertUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    certifyingAgency?: StringFieldUpdateOperationsInput | string
    certificationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCertStatusFieldUpdateOperationsInput | $Enums.CertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyProduceInput = {
    id?: string
    userId: string
    vendorId: string
    quantity?: number
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    orderDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutProduceInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutProduceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyWithoutProduceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantTrackingCreateManyRentalSpaceInput = {
    id?: string
    userId: string
    plantName: string
    growthStage: string
    healthStatus: string
    harvestDate?: Date | string | null
    notes?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalBookingCreateManyRentalSpaceInput = {
    id?: string
    customerId: string
    startDate: Date | string
    endDate: Date | string
    totalPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.BookingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlantTrackingUpdateWithoutRentalSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    plantName?: StringFieldUpdateOperationsInput | string
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlantTrackingsNestedInput
  }

  export type PlantTrackingUncheckedUpdateWithoutRentalSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plantName?: StringFieldUpdateOperationsInput | string
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlantTrackingUncheckedUpdateManyWithoutRentalSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plantName?: StringFieldUpdateOperationsInput | string
    growthStage?: StringFieldUpdateOperationsInput | string
    healthStatus?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalBookingUpdateWithoutRentalSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutRentalBookingsNestedInput
  }

  export type RentalBookingUncheckedUpdateWithoutRentalSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalBookingUncheckedUpdateManyWithoutRentalSpaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VendorProfileCountOutputTypeDefaultArgs instead
     */
    export type VendorProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VendorProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProduceCountOutputTypeDefaultArgs instead
     */
    export type ProduceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProduceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RentalSpaceCountOutputTypeDefaultArgs instead
     */
    export type RentalSpaceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RentalSpaceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VendorProfileDefaultArgs instead
     */
    export type VendorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VendorProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProduceDefaultArgs instead
     */
    export type ProduceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProduceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RentalSpaceDefaultArgs instead
     */
    export type RentalSpaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RentalSpaceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunityPostDefaultArgs instead
     */
    export type CommunityPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunityPostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SustainabilityCertDefaultArgs instead
     */
    export type SustainabilityCertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SustainabilityCertDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlantTrackingDefaultArgs instead
     */
    export type PlantTrackingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlantTrackingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RentalBookingDefaultArgs instead
     */
    export type RentalBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RentalBookingDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}