import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.CURRENCY_SORT_KEY
 */
export declare enum CURRENCY_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: CURRENCY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    CURRENCY_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: CURRENCY_SORT_KEY_CREATED_AT = 1;
     */
    CURRENCY_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: CURRENCY_SORT_KEY_MODIFIED_AT = 2;
     */
    CURRENCY_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: CURRENCY_SORT_KEY_APPROVED_ON = 3;
     */
    CURRENCY_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: CURRENCY_SORT_KEY_APPROVED_BY = 4;
     */
    CURRENCY_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: CURRENCY_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    CURRENCY_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: CURRENCY_SORT_KEY_NAME = 10;
     */
    CURRENCY_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the symbol
     *
     * @generated from enum value: CURRENCY_SORT_KEY_SYMBOL = 11;
     */
    CURRENCY_SORT_KEY_SYMBOL = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.CurrenciesServiceCreateRequest
 */
export declare class CurrenciesServiceCreateRequest extends Message<CurrenciesServiceCreateRequest> {
    /**
     * Currencies a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Currencies any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The name of the currency
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique symbol by which the currency is classified
     *
     * @generated from field: string symbol = 11;
     */
    symbol: string;
    /**
     * The name of the mantissa
     *
     * @generated from field: string mantissa_name = 12;
     */
    mantissaName: string;
    /**
     * The name of the exponent
     *
     * @generated from field: string exponent_name = 13;
     */
    exponentName: string;
    /**
     * The description of the currency
     *
     * @generated from field: string description = 14;
     */
    description: string;
    constructor(data?: PartialMessage<CurrenciesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceCreateRequest;
    static equals(a: CurrenciesServiceCreateRequest | PlainMessage<CurrenciesServiceCreateRequest> | undefined, b: CurrenciesServiceCreateRequest | PlainMessage<CurrenciesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.CurrenciesServiceUpdateRequest
 */
export declare class CurrenciesServiceUpdateRequest extends Message<CurrenciesServiceUpdateRequest> {
    /**
     * Currencies any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the record that needs to be updated
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     * Optional boolean value that denotes if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
    /**
     * The name of the currency
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique symbol by which the currency is classified
     *
     * @generated from field: string symbol = 11;
     */
    symbol: string;
    /**
     * The name of the mantissa
     *
     * @generated from field: string mantissa_name = 12;
     */
    mantissaName: string;
    /**
     * The name of the exponent
     *
     * @generated from field: string exponent_name = 13;
     */
    exponentName: string;
    /**
     * The description of the currency
     *
     * @generated from field: string description = 14;
     */
    description: string;
    constructor(data?: PartialMessage<CurrenciesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceUpdateRequest;
    static equals(a: CurrenciesServiceUpdateRequest | PlainMessage<CurrenciesServiceUpdateRequest> | undefined, b: CurrenciesServiceUpdateRequest | PlainMessage<CurrenciesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Currency
 */
export declare class Currency extends Message<Currency> {
    /**
     * Currencies a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Currencies the metadata of this currency
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Currencies the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     * The status of this currency
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Currencies the logs of every operation performed on this currency
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The name of the currency
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique symbol by which the currency is classified
     *
     * @generated from field: string symbol = 11;
     */
    symbol: string;
    /**
     * The name of the mantissa
     *
     * @generated from field: string mantissa_name = 12;
     */
    mantissaName: string;
    /**
     * The name of the exponent
     *
     * @generated from field: string exponent_name = 13;
     */
    exponentName: string;
    /**
     * The description of the currency
     *
     * @generated from field: string description = 14;
     */
    description: string;
    constructor(data?: PartialMessage<Currency>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Currency";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Currency;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Currency;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Currency;
    static equals(a: Currency | PlainMessage<Currency> | undefined, b: Currency | PlainMessage<Currency> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.CurrenciesList
 */
export declare class CurrenciesList extends Message<CurrenciesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Currency list = 1;
     */
    list: Currency[];
    constructor(data?: PartialMessage<CurrenciesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesList;
    static equals(a: CurrenciesList | PlainMessage<CurrenciesList> | undefined, b: CurrenciesList | PlainMessage<CurrenciesList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.CurrenciesServicePaginationReq
 */
export declare class CurrenciesServicePaginationReq extends Message<CurrenciesServicePaginationReq> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The number of records that need to be sent in the response
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.CURRENCY_SORT_KEY sort_key = 5;
     */
    sortKey: CURRENCY_SORT_KEY;
    /**
     * The status of this currency
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<CurrenciesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServicePaginationReq;
    static equals(a: CurrenciesServicePaginationReq | PlainMessage<CurrenciesServicePaginationReq> | undefined, b: CurrenciesServicePaginationReq | PlainMessage<CurrenciesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.CurrenciesServicePaginationResponse
 */
export declare class CurrenciesServicePaginationResponse extends Message<CurrenciesServicePaginationResponse> {
    /**
     * The number of records in this payload
     *
     * @generated from field: uint64 count = 1;
     */
    count: bigint;
    /**
     * The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request
     *
     * @generated from field: uint64 offset = 2;
     */
    offset: bigint;
    /**
     * The total number of records that are available
     *
     * @generated from field: uint64 total = 3;
     */
    total: bigint;
    /**
     * The list of records
     *
     * @generated from field: repeated Scailo.Currency payload = 4;
     */
    payload: Currency[];
    constructor(data?: PartialMessage<CurrenciesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServicePaginationResponse;
    static equals(a: CurrenciesServicePaginationResponse | PlainMessage<CurrenciesServicePaginationResponse> | undefined, b: CurrenciesServicePaginationResponse | PlainMessage<CurrenciesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.CurrenciesServiceFilterReq
 */
export declare class CurrenciesServiceFilterReq extends Message<CurrenciesServiceFilterReq> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.CURRENCY_SORT_KEY sort_key = 5;
     */
    sortKey: CURRENCY_SORT_KEY;
    /**
     * The minimum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     * The maximum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     * The minimum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     * The maximum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     * The status of this currency
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * The start range of approved timestamp
     *
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
    /**
     * The end range of approved timestamp
     *
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
    /**
     * The ID of the approver
     *
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
    /**
     * The role ID of the approver
     *
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId: bigint;
    /**
     * The name of the currency
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique symbol by which the currency is classified
     *
     * @generated from field: string symbol = 21;
     */
    symbol: string;
    constructor(data?: PartialMessage<CurrenciesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceFilterReq;
    static equals(a: CurrenciesServiceFilterReq | PlainMessage<CurrenciesServiceFilterReq> | undefined, b: CurrenciesServiceFilterReq | PlainMessage<CurrenciesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.CurrenciesServiceCountReq
 */
export declare class CurrenciesServiceCountReq extends Message<CurrenciesServiceCountReq> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The minimum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     * The maximum timestamp that needs to be considered to filter by creation
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     * The minimum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     * The maximum timestamp that needs to be considered to filter by modification
     *
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     * The status of this currency
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * The start range of approved timestamp
     *
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
    /**
     * The end range of approved timestamp
     *
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
    /**
     * The ID of the approver
     *
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
    /**
     * The role ID of the approver
     *
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId: bigint;
    /**
     * The name of the currency
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique symbol by which the currency is classified
     *
     * @generated from field: string symbol = 21;
     */
    symbol: string;
    constructor(data?: PartialMessage<CurrenciesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceCountReq;
    static equals(a: CurrenciesServiceCountReq | PlainMessage<CurrenciesServiceCountReq> | undefined, b: CurrenciesServiceCountReq | PlainMessage<CurrenciesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.CurrenciesServiceSearchAllReq
 */
export declare class CurrenciesServiceSearchAllReq extends Message<CurrenciesServiceSearchAllReq> {
    /**
     * If true, then returns only active records. If false, then returns only inactive records
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     * The number of records that need to be sent in the response. Returns all records if it is set to -1
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     * The number that need to be offset by before fetching the records
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     * The sort order that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     * The sort key that is to be used to fetch the pagination response
     *
     * @generated from field: Scailo.CURRENCY_SORT_KEY sort_key = 5;
     */
    sortKey: CURRENCY_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Limit the search space to the given status
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    constructor(data?: PartialMessage<CurrenciesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.CurrenciesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CurrenciesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CurrenciesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CurrenciesServiceSearchAllReq;
    static equals(a: CurrenciesServiceSearchAllReq | PlainMessage<CurrenciesServiceSearchAllReq> | undefined, b: CurrenciesServiceSearchAllReq | PlainMessage<CurrenciesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=currencies.scailo_pb.d.ts.map