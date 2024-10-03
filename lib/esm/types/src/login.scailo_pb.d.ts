import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { EmployeeMetadata } from "./base.scailo_pb.js";
/**
 *
 * Describes the data structure for a user to login
 *
 * @generated from message Scailo.UserLoginRequest
 */
export declare class UserLoginRequest extends Message<UserLoginRequest> {
    /**
     * Username of the user
     *
     * @generated from field: string username = 1;
     */
    username: string;
    /**
     * The password of the user
     *
     * @generated from field: string plain_text_password = 12;
     */
    plainTextPassword: string;
    /**
     * The MFA OTP of the user
     *
     * @generated from field: string otp = 13;
     */
    otp: string;
    constructor(data?: PartialMessage<UserLoginRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UserLoginRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserLoginRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserLoginRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserLoginRequest;
    static equals(a: UserLoginRequest | PlainMessage<UserLoginRequest> | undefined, b: UserLoginRequest | PlainMessage<UserLoginRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a user login request
 *
 * @generated from message Scailo.UserLoginResponse
 */
export declare class UserLoginResponse extends Message<UserLoginResponse> {
    /**
     * Username of the user that just logged in
     *
     * @generated from field: string username = 1;
     */
    username: string;
    /**
     * The token that needs to be used as part of every request
     *
     * @generated from field: string auth_token = 2;
     */
    authToken: string;
    /**
     * The unix timestamp after which the auth_token is invalid
     *
     * @generated from field: uint64 expires_at = 3;
     */
    expiresAt: bigint;
    constructor(data?: PartialMessage<UserLoginResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UserLoginResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserLoginResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserLoginResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserLoginResponse;
    static equals(a: UserLoginResponse | PlainMessage<UserLoginResponse> | undefined, b: UserLoginResponse | PlainMessage<UserLoginResponse> | undefined): boolean;
}
/**
 *
 * Describes the data structure required to check if the login is still valid
 *
 * @generated from message Scailo.AuthTokenValidityRequest
 */
export declare class AuthTokenValidityRequest extends Message<AuthTokenValidityRequest> {
    /**
     * The token whose validity needs to be determined
     *
     * @generated from field: string auth_token = 1;
     */
    authToken: string;
    constructor(data?: PartialMessage<AuthTokenValidityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AuthTokenValidityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthTokenValidityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthTokenValidityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthTokenValidityRequest;
    static equals(a: AuthTokenValidityRequest | PlainMessage<AuthTokenValidityRequest> | undefined, b: AuthTokenValidityRequest | PlainMessage<AuthTokenValidityRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure required to logout a user
 *
 * @generated from message Scailo.LogoutRequest
 */
export declare class LogoutRequest extends Message<LogoutRequest> {
    constructor(data?: PartialMessage<LogoutRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LogoutRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogoutRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogoutRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogoutRequest;
    static equals(a: LogoutRequest | PlainMessage<LogoutRequest> | undefined, b: LogoutRequest | PlainMessage<LogoutRequest> | undefined): boolean;
}
/**
 *
 * Describes the response data structure to a logout request
 *
 * @generated from message Scailo.LogoutResponse
 */
export declare class LogoutResponse extends Message<LogoutResponse> {
    constructor(data?: PartialMessage<LogoutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LogoutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogoutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogoutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogoutResponse;
    static equals(a: LogoutResponse | PlainMessage<LogoutResponse> | undefined, b: LogoutResponse | PlainMessage<LogoutResponse> | undefined): boolean;
}
/**
 *
 * Stores the user login history
 *
 * @generated from message Scailo.UserLoginHistory
 */
export declare class UserLoginHistory extends Message<UserLoginHistory> {
    /**
     * Storages a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Storages the metadata of this storage
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The URL scheme
     *
     * @generated from field: string url_scheme = 10;
     */
    urlScheme: string;
    /**
     * The username
     *
     * @generated from field: string username = 11;
     */
    username: string;
    /**
     * The IP address
     *
     * @generated from field: string ip_addr = 12;
     */
    ipAddr: string;
    /**
     * The expiry timestamp
     *
     * @generated from field: uint64 expires_at = 13;
     */
    expiresAt: bigint;
    constructor(data?: PartialMessage<UserLoginHistory>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UserLoginHistory";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserLoginHistory;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserLoginHistory;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserLoginHistory;
    static equals(a: UserLoginHistory | PlainMessage<UserLoginHistory> | undefined, b: UserLoginHistory | PlainMessage<UserLoginHistory> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of user logins
 *
 * @generated from message Scailo.UserLoginHistoryList
 */
export declare class UserLoginHistoryList extends Message<UserLoginHistoryList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.UserLoginHistory list = 1;
     */
    list: UserLoginHistory[];
    constructor(data?: PartialMessage<UserLoginHistoryList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.UserLoginHistoryList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserLoginHistoryList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserLoginHistoryList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserLoginHistoryList;
    static equals(a: UserLoginHistoryList | PlainMessage<UserLoginHistoryList> | undefined, b: UserLoginHistoryList | PlainMessage<UserLoginHistoryList> | undefined): boolean;
}
/**
 *
 * Describes the response to a vendor user login request
 *
 * @generated from message Scailo.VendorUserLoginResponse
 */
export declare class VendorUserLoginResponse extends Message<VendorUserLoginResponse> {
    /**
     * Username of the user that just logged in
     *
     * @generated from field: string username = 1;
     */
    username: string;
    /**
     * The token that needs to be used as part of every request
     *
     * @generated from field: string auth_token = 2;
     */
    authToken: string;
    /**
     * The unix timestamp after which the auth_token is invalid
     *
     * @generated from field: uint64 expires_at = 3;
     */
    expiresAt: bigint;
    /**
     * The ID of the vendor
     *
     * @generated from field: uint64 vendor_id = 10;
     */
    vendorId: bigint;
    /**
     * The UUID of the vendor
     *
     * @generated from field: string vendor_uuid = 11;
     */
    vendorUuid: string;
    constructor(data?: PartialMessage<VendorUserLoginResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VendorUserLoginResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VendorUserLoginResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VendorUserLoginResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VendorUserLoginResponse;
    static equals(a: VendorUserLoginResponse | PlainMessage<VendorUserLoginResponse> | undefined, b: VendorUserLoginResponse | PlainMessage<VendorUserLoginResponse> | undefined): boolean;
}
/**
 *
 * Describes the response to a client user login request
 *
 * @generated from message Scailo.ClientUserLoginResponse
 */
export declare class ClientUserLoginResponse extends Message<ClientUserLoginResponse> {
    /**
     * Username of the user that just logged in
     *
     * @generated from field: string username = 1;
     */
    username: string;
    /**
     * The token that needs to be used as part of every request
     *
     * @generated from field: string auth_token = 2;
     */
    authToken: string;
    /**
     * The unix timestamp after which the auth_token is invalid
     *
     * @generated from field: uint64 expires_at = 3;
     */
    expiresAt: bigint;
    /**
     * The ID of the client
     *
     * @generated from field: uint64 client_id = 10;
     */
    clientId: bigint;
    /**
     * The UUID of the client
     *
     * @generated from field: string client_uuid = 11;
     */
    clientUuid: string;
    constructor(data?: PartialMessage<ClientUserLoginResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ClientUserLoginResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientUserLoginResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientUserLoginResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientUserLoginResponse;
    static equals(a: ClientUserLoginResponse | PlainMessage<ClientUserLoginResponse> | undefined, b: ClientUserLoginResponse | PlainMessage<ClientUserLoginResponse> | undefined): boolean;
}
//# sourceMappingURL=login.scailo_pb.d.ts.map