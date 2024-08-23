import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available value types for a tax param
 *
 * @generated from enum Scailo.TAX_PARAM_VALUE_TYPE
 */
export declare enum TAX_PARAM_VALUE_TYPE {
    /**
     * The default value type, and is useful only for filter and search queries when the value type needs to be disregarded
     *
     * @generated from enum value: TAX_PARAM_VALUE_TYPE_ANY_UNSPECIFIED = 0;
     */
    TAX_PARAM_VALUE_TYPE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the value type is percentage (tax is calculated as a percentage over the base value)
     *
     * @generated from enum value: TAX_PARAM_VALUE_TYPE_PERCENTAGE = 1;
     */
    TAX_PARAM_VALUE_TYPE_PERCENTAGE = 1,
    /**
     * Denotes that the value type is fixed (tax is a fixed value)
     *
     * @generated from enum value: TAX_PARAM_VALUE_TYPE_FIXED = 2;
     */
    TAX_PARAM_VALUE_TYPE_FIXED = 2
}
/**
 *
 * Describes the available categories for a tax param
 *
 * @generated from enum Scailo.TAX_PARAM_CATEGORY
 */
export declare enum TAX_PARAM_CATEGORY {
    /**
     * The default category, and is useful only for filter and search queries when the category needs to be disregarded
     *
     * @generated from enum value: TAX_PARAM_CATEGORY_ANY_UNSPECIFIED = 0;
     */
    TAX_PARAM_CATEGORY_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the tax param belongs to the general category (applicable on purchase and sales)
     *
     * @generated from enum value: TAX_PARAM_CATEGORY_GENERAL = 1;
     */
    TAX_PARAM_CATEGORY_GENERAL = 1,
    /**
     * Denotes that the tax param belongs to the payroll category (applicable when computing payroll)
     *
     * @generated from enum value: TAX_PARAM_CATEGORY_PAYROLL = 2;
     */
    TAX_PARAM_CATEGORY_PAYROLL = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.TAX_PARAM_SORT_KEY
 */
export declare enum TAX_PARAM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: TAX_PARAM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    TAX_PARAM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: TAX_PARAM_SORT_KEY_CREATED_AT = 1;
     */
    TAX_PARAM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: TAX_PARAM_SORT_KEY_MODIFIED_AT = 2;
     */
    TAX_PARAM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: TAX_PARAM_SORT_KEY_APPROVED_ON = 3;
     */
    TAX_PARAM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: TAX_PARAM_SORT_KEY_APPROVED_BY = 4;
     */
    TAX_PARAM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: TAX_PARAM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    TAX_PARAM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: TAX_PARAM_SORT_KEY_NAME = 10;
     */
    TAX_PARAM_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the tax rate percentage
     *
     * @generated from enum value: TAX_PARAM_SORT_KEY_TAX_RATE_PERCENTAGE = 11;
     */
    TAX_PARAM_SORT_KEY_TAX_RATE_PERCENTAGE = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.TaxParamsServiceCreateRequest
 */
export declare class TaxParamsServiceCreateRequest extends Message<TaxParamsServiceCreateRequest> {
    /**
     * TaxParams a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * TaxParams any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The name of the tax param
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The type of the tax param
     *
     * @generated from field: Scailo.TAX_PARAM_VALUE_TYPE value_type = 11;
     */
    valueType: TAX_PARAM_VALUE_TYPE;
    /**
     * The fixed amount of tax (applicable only if value type is fixed)
     *
     * @generated from field: uint64 tax_fixed_amount = 12;
     */
    taxFixedAmount: bigint;
    /**
     * The percentage of tax (applicable only if value type is percentage)
     *
     * @generated from field: uint64 tax_rate_percentage = 13;
     */
    taxRatePercentage: bigint;
    /**
     * The divisor that is defined in order to normalize tax rate percentage
     *
     * @generated from field: uint64 divisor = 14;
     */
    divisor: bigint;
    /**
     * The input credit percentage that is applicable
     *
     * @generated from field: uint64 input_credit_percentage = 15;
     */
    inputCreditPercentage: bigint;
    /**
     * The minimum amount of applicable tax (will be disregarded if value is -100)
     *
     * @generated from field: int64 min_amount = 16;
     */
    minAmount: bigint;
    /**
     * The maximum amount of applicable tax (will be disregarded if value is -100)
     *
     * @generated from field: int64 max_amount = 17;
     */
    maxAmount: bigint;
    /**
     * The category of the tax param
     *
     * @generated from field: Scailo.TAX_PARAM_CATEGORY category = 18;
     */
    category: TAX_PARAM_CATEGORY;
    /**
     * The description of the tax param
     *
     * @generated from field: string description = 20;
     */
    description: string;
    constructor(data?: PartialMessage<TaxParamsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxParamsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxParamsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxParamsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxParamsServiceCreateRequest;
    static equals(a: TaxParamsServiceCreateRequest | PlainMessage<TaxParamsServiceCreateRequest> | undefined, b: TaxParamsServiceCreateRequest | PlainMessage<TaxParamsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.TaxParamsServiceUpdateRequest
 */
export declare class TaxParamsServiceUpdateRequest extends Message<TaxParamsServiceUpdateRequest> {
    /**
     * TaxParams any comment that the user might add during this operation
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
     * The name of the tax param
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The description of the tax param
     *
     * @generated from field: string description = 20;
     */
    description: string;
    constructor(data?: PartialMessage<TaxParamsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxParamsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxParamsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxParamsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxParamsServiceUpdateRequest;
    static equals(a: TaxParamsServiceUpdateRequest | PlainMessage<TaxParamsServiceUpdateRequest> | undefined, b: TaxParamsServiceUpdateRequest | PlainMessage<TaxParamsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.TaxParam
 */
export declare class TaxParam extends Message<TaxParam> {
    /**
     * TaxParams a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * TaxParams the metadata of this tax param
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * TaxParams the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     * The status of this tax param
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * TaxParams the logs of every operation performed on this tax param
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The name of the tax param
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The type of the tax param
     *
     * @generated from field: Scailo.TAX_PARAM_VALUE_TYPE value_type = 11;
     */
    valueType: TAX_PARAM_VALUE_TYPE;
    /**
     * The fixed amount of tax (applicable only if value type is fixed)
     *
     * @generated from field: uint64 tax_fixed_amount = 12;
     */
    taxFixedAmount: bigint;
    /**
     * The percentage of tax (applicable only if value type is percentage)
     *
     * @generated from field: uint64 tax_rate_percentage = 13;
     */
    taxRatePercentage: bigint;
    /**
     * The divisor that is defined in order to normalize tax rate percentage
     *
     * @generated from field: uint64 divisor = 14;
     */
    divisor: bigint;
    /**
     * The input credit percentage that is applicable
     *
     * @generated from field: uint64 input_credit_percentage = 15;
     */
    inputCreditPercentage: bigint;
    /**
     * The minimum amount of applicable tax (will be disregarded if value is -100)
     *
     * @generated from field: int64 min_amount = 16;
     */
    minAmount: bigint;
    /**
     * The maximum amount of applicable tax (will be disregarded if value is -100)
     *
     * @generated from field: int64 max_amount = 17;
     */
    maxAmount: bigint;
    /**
     * The category of the tax param
     *
     * @generated from field: Scailo.TAX_PARAM_CATEGORY category = 18;
     */
    category: TAX_PARAM_CATEGORY;
    /**
     * The description of the tax param
     *
     * @generated from field: string description = 20;
     */
    description: string;
    constructor(data?: PartialMessage<TaxParam>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxParam";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxParam;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxParam;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxParam;
    static equals(a: TaxParam | PlainMessage<TaxParam> | undefined, b: TaxParam | PlainMessage<TaxParam> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.TaxParamsList
 */
export declare class TaxParamsList extends Message<TaxParamsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.TaxParam list = 1;
     */
    list: TaxParam[];
    constructor(data?: PartialMessage<TaxParamsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxParamsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxParamsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxParamsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxParamsList;
    static equals(a: TaxParamsList | PlainMessage<TaxParamsList> | undefined, b: TaxParamsList | PlainMessage<TaxParamsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.TaxParamsServicePaginationReq
 */
export declare class TaxParamsServicePaginationReq extends Message<TaxParamsServicePaginationReq> {
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
     * @generated from field: Scailo.TAX_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: TAX_PARAM_SORT_KEY;
    /**
     * The status of this tax param
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<TaxParamsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxParamsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxParamsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxParamsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxParamsServicePaginationReq;
    static equals(a: TaxParamsServicePaginationReq | PlainMessage<TaxParamsServicePaginationReq> | undefined, b: TaxParamsServicePaginationReq | PlainMessage<TaxParamsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.TaxParamsServicePaginationResponse
 */
export declare class TaxParamsServicePaginationResponse extends Message<TaxParamsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.TaxParam payload = 4;
     */
    payload: TaxParam[];
    constructor(data?: PartialMessage<TaxParamsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxParamsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxParamsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxParamsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxParamsServicePaginationResponse;
    static equals(a: TaxParamsServicePaginationResponse | PlainMessage<TaxParamsServicePaginationResponse> | undefined, b: TaxParamsServicePaginationResponse | PlainMessage<TaxParamsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.TaxParamsServiceFilterReq
 */
export declare class TaxParamsServiceFilterReq extends Message<TaxParamsServiceFilterReq> {
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
     * @generated from field: Scailo.TAX_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: TAX_PARAM_SORT_KEY;
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
     * The status of this tax param
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
     * The name of the tax param
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The type of the tax param
     *
     * @generated from field: Scailo.TAX_PARAM_VALUE_TYPE value_type = 31;
     */
    valueType: TAX_PARAM_VALUE_TYPE;
    /**
     * The category of the tax param
     *
     * @generated from field: Scailo.TAX_PARAM_CATEGORY category = 32;
     */
    category: TAX_PARAM_CATEGORY;
    constructor(data?: PartialMessage<TaxParamsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxParamsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxParamsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxParamsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxParamsServiceFilterReq;
    static equals(a: TaxParamsServiceFilterReq | PlainMessage<TaxParamsServiceFilterReq> | undefined, b: TaxParamsServiceFilterReq | PlainMessage<TaxParamsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.TaxParamsServiceCountReq
 */
export declare class TaxParamsServiceCountReq extends Message<TaxParamsServiceCountReq> {
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
     * The status of this tax param
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
     * The name of the tax param
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The type of the tax param
     *
     * @generated from field: Scailo.TAX_PARAM_VALUE_TYPE value_type = 31;
     */
    valueType: TAX_PARAM_VALUE_TYPE;
    /**
     * The category of the tax param
     *
     * @generated from field: Scailo.TAX_PARAM_CATEGORY category = 32;
     */
    category: TAX_PARAM_CATEGORY;
    constructor(data?: PartialMessage<TaxParamsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxParamsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxParamsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxParamsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxParamsServiceCountReq;
    static equals(a: TaxParamsServiceCountReq | PlainMessage<TaxParamsServiceCountReq> | undefined, b: TaxParamsServiceCountReq | PlainMessage<TaxParamsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.TaxParamsServiceSearchAllReq
 */
export declare class TaxParamsServiceSearchAllReq extends Message<TaxParamsServiceSearchAllReq> {
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
     * @generated from field: Scailo.TAX_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: TAX_PARAM_SORT_KEY;
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
    /**
     * The type of the tax param
     *
     * @generated from field: Scailo.TAX_PARAM_VALUE_TYPE value_type = 31;
     */
    valueType: TAX_PARAM_VALUE_TYPE;
    /**
     * The category of the tax param
     *
     * @generated from field: Scailo.TAX_PARAM_CATEGORY category = 32;
     */
    category: TAX_PARAM_CATEGORY;
    constructor(data?: PartialMessage<TaxParamsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxParamsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxParamsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxParamsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxParamsServiceSearchAllReq;
    static equals(a: TaxParamsServiceSearchAllReq | PlainMessage<TaxParamsServiceSearchAllReq> | undefined, b: TaxParamsServiceSearchAllReq | PlainMessage<TaxParamsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=tax_params.scailo_pb.d.ts.map