import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
import { TaxParam } from "./tax_params.scailo_pb.js";
/**
 *
 * Describes the available categories for a tax group
 *
 * @generated from enum Scailo.TAX_GROUP_CATEGORY
 */
export declare enum TAX_GROUP_CATEGORY {
    /**
     * The default category, and is useful only for filter and search queries when the category needs to be disregarded
     *
     * @generated from enum value: TAX_GROUP_CATEGORY_ANY_UNSPECIFIED = 0;
     */
    TAX_GROUP_CATEGORY_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the tax group belongs to the general category (applicable on purchase and sales)
     *
     * @generated from enum value: TAX_GROUP_CATEGORY_GENERAL = 1;
     */
    TAX_GROUP_CATEGORY_GENERAL = 1,
    /**
     * Denotes that the tax group belongs to the payroll category (applicable when computing payroll)
     *
     * @generated from enum value: TAX_GROUP_CATEGORY_PAYROLL = 2;
     */
    TAX_GROUP_CATEGORY_PAYROLL = 2,
    /**
     * Denotes that the tax group belongs to the cumulative excess on goods category (applicable when calculating the excess tax on goods)
     *
     * @generated from enum value: TAX_GROUP_CATEGORY_CUMULATIVE_EXCESS_ON_GOODS = 3;
     */
    TAX_GROUP_CATEGORY_CUMULATIVE_EXCESS_ON_GOODS = 3
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.TAX_GROUP_SORT_KEY
 */
export declare enum TAX_GROUP_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: TAX_GROUP_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    TAX_GROUP_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: TAX_GROUP_SORT_KEY_CREATED_AT = 1;
     */
    TAX_GROUP_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: TAX_GROUP_SORT_KEY_MODIFIED_AT = 2;
     */
    TAX_GROUP_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: TAX_GROUP_SORT_KEY_APPROVED_ON = 3;
     */
    TAX_GROUP_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: TAX_GROUP_SORT_KEY_APPROVED_BY = 4;
     */
    TAX_GROUP_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: TAX_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    TAX_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: TAX_GROUP_SORT_KEY_NAME = 10;
     */
    TAX_GROUP_SORT_KEY_NAME = 10
}
/**
 *
 * Describes the groups necessary to create a record
 *
 * @generated from message Scailo.TaxGroupsServiceCreateRequest
 */
export declare class TaxGroupsServiceCreateRequest extends Message<TaxGroupsServiceCreateRequest> {
    /**
     * TaxGroups a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * TaxGroups any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The name of the tax group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The category of the tax group
     *
     * @generated from field: Scailo.TAX_GROUP_CATEGORY category = 11;
     */
    category: TAX_GROUP_CATEGORY;
    /**
     * The description of the tax group
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<TaxGroupsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxGroupsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxGroupsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxGroupsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxGroupsServiceCreateRequest;
    static equals(a: TaxGroupsServiceCreateRequest | PlainMessage<TaxGroupsServiceCreateRequest> | undefined, b: TaxGroupsServiceCreateRequest | PlainMessage<TaxGroupsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the groups necessary to update a record
 *
 * @generated from message Scailo.TaxGroupsServiceUpdateRequest
 */
export declare class TaxGroupsServiceUpdateRequest extends Message<TaxGroupsServiceUpdateRequest> {
    /**
     * TaxGroups any comment that the user might add during this operation
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
     * The name of the tax group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The description of the tax group
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<TaxGroupsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxGroupsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxGroupsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxGroupsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxGroupsServiceUpdateRequest;
    static equals(a: TaxGroupsServiceUpdateRequest | PlainMessage<TaxGroupsServiceUpdateRequest> | undefined, b: TaxGroupsServiceUpdateRequest | PlainMessage<TaxGroupsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the groups that are part of a standard response
 *
 * @generated from message Scailo.TaxGroup
 */
export declare class TaxGroup extends Message<TaxGroup> {
    /**
     * TaxGroups a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * TaxGroups the metadata of this tax group
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * TaxGroups the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     * The status of this tax group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * TaxGroups the logs of every operation performed on this tax group
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The name of the tax group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The category of the tax group
     *
     * @generated from field: Scailo.TAX_GROUP_CATEGORY category = 11;
     */
    category: TAX_GROUP_CATEGORY;
    /**
     * The description of the tax group
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The list of associated tax group items
     *
     * @generated from field: repeated Scailo.TaxGroupItem list = 30;
     */
    list: TaxGroupItem[];
    /**
     * The list of associated tax parameters
     *
     * @generated from field: repeated Scailo.TaxParam tax_params = 50;
     */
    taxParams: TaxParam[];
    /**
     * The cumulative tax percentage
     *
     * @generated from field: double cumulative_tax_percentage = 60;
     */
    cumulativeTaxPercentage: number;
    constructor(data?: PartialMessage<TaxGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxGroup;
    static equals(a: TaxGroup | PlainMessage<TaxGroup> | undefined, b: TaxGroup | PlainMessage<TaxGroup> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.TaxGroupsList
 */
export declare class TaxGroupsList extends Message<TaxGroupsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.TaxGroup list = 1;
     */
    list: TaxGroup[];
    constructor(data?: PartialMessage<TaxGroupsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxGroupsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxGroupsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxGroupsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxGroupsList;
    static equals(a: TaxGroupsList | PlainMessage<TaxGroupsList> | undefined, b: TaxGroupsList | PlainMessage<TaxGroupsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.TaxGroupsServicePaginationReq
 */
export declare class TaxGroupsServicePaginationReq extends Message<TaxGroupsServicePaginationReq> {
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
     * @generated from field: Scailo.TAX_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: TAX_GROUP_SORT_KEY;
    /**
     * The status of this tax group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<TaxGroupsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxGroupsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxGroupsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxGroupsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxGroupsServicePaginationReq;
    static equals(a: TaxGroupsServicePaginationReq | PlainMessage<TaxGroupsServicePaginationReq> | undefined, b: TaxGroupsServicePaginationReq | PlainMessage<TaxGroupsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.TaxGroupsServicePaginationResponse
 */
export declare class TaxGroupsServicePaginationResponse extends Message<TaxGroupsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.TaxGroup payload = 4;
     */
    payload: TaxGroup[];
    constructor(data?: PartialMessage<TaxGroupsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxGroupsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxGroupsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxGroupsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxGroupsServicePaginationResponse;
    static equals(a: TaxGroupsServicePaginationResponse | PlainMessage<TaxGroupsServicePaginationResponse> | undefined, b: TaxGroupsServicePaginationResponse | PlainMessage<TaxGroupsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.TaxGroupsServiceFilterReq
 */
export declare class TaxGroupsServiceFilterReq extends Message<TaxGroupsServiceFilterReq> {
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
     * @generated from field: Scailo.TAX_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: TAX_GROUP_SORT_KEY;
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
     * The status of this tax group
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
     * The name of the tax group
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The category of the tax group
     *
     * @generated from field: Scailo.TAX_GROUP_CATEGORY category = 32;
     */
    category: TAX_GROUP_CATEGORY;
    constructor(data?: PartialMessage<TaxGroupsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxGroupsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxGroupsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxGroupsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxGroupsServiceFilterReq;
    static equals(a: TaxGroupsServiceFilterReq | PlainMessage<TaxGroupsServiceFilterReq> | undefined, b: TaxGroupsServiceFilterReq | PlainMessage<TaxGroupsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.TaxGroupsServiceCountReq
 */
export declare class TaxGroupsServiceCountReq extends Message<TaxGroupsServiceCountReq> {
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
     * The status of this tax group
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
     * The name of the tax group
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The category of the tax group
     *
     * @generated from field: Scailo.TAX_GROUP_CATEGORY category = 32;
     */
    category: TAX_GROUP_CATEGORY;
    constructor(data?: PartialMessage<TaxGroupsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxGroupsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxGroupsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxGroupsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxGroupsServiceCountReq;
    static equals(a: TaxGroupsServiceCountReq | PlainMessage<TaxGroupsServiceCountReq> | undefined, b: TaxGroupsServiceCountReq | PlainMessage<TaxGroupsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.TaxGroupsServiceSearchAllReq
 */
export declare class TaxGroupsServiceSearchAllReq extends Message<TaxGroupsServiceSearchAllReq> {
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
     * @generated from field: Scailo.TAX_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: TAX_GROUP_SORT_KEY;
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
     * The category of the tax group
     *
     * @generated from field: Scailo.TAX_GROUP_CATEGORY category = 32;
     */
    category: TAX_GROUP_CATEGORY;
    constructor(data?: PartialMessage<TaxGroupsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxGroupsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxGroupsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxGroupsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxGroupsServiceSearchAllReq;
    static equals(a: TaxGroupsServiceSearchAllReq | PlainMessage<TaxGroupsServiceSearchAllReq> | undefined, b: TaxGroupsServiceSearchAllReq | PlainMessage<TaxGroupsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add a param to a tax group
 *
 * @generated from message Scailo.TaxGroupsServiceItemCreateRequest
 */
export declare class TaxGroupsServiceItemCreateRequest extends Message<TaxGroupsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 10;
     */
    taxGroupId: bigint;
    /**
     * The ID of the tax param that is a part of the tax group
     *
     * @generated from field: uint64 tax_param_id = 11;
     */
    taxParamId: bigint;
    /**
     * An optional description
     *
     * @generated from field: string description = 40;
     */
    description: string;
    constructor(data?: PartialMessage<TaxGroupsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxGroupsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxGroupsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxGroupsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxGroupsServiceItemCreateRequest;
    static equals(a: TaxGroupsServiceItemCreateRequest | PlainMessage<TaxGroupsServiceItemCreateRequest> | undefined, b: TaxGroupsServiceItemCreateRequest | PlainMessage<TaxGroupsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update a param in a tax group
 *
 * @generated from message Scailo.TaxGroupsServiceItemUpdateRequest
 */
export declare class TaxGroupsServiceItemUpdateRequest extends Message<TaxGroupsServiceItemUpdateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the record
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     * An optional description
     *
     * @generated from field: string description = 40;
     */
    description: string;
    constructor(data?: PartialMessage<TaxGroupsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxGroupsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxGroupsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxGroupsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxGroupsServiceItemUpdateRequest;
    static equals(a: TaxGroupsServiceItemUpdateRequest | PlainMessage<TaxGroupsServiceItemUpdateRequest> | undefined, b: TaxGroupsServiceItemUpdateRequest | PlainMessage<TaxGroupsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a param associated to a tax group
 *
 * @generated from message Scailo.TaxGroupItem
 */
export declare class TaxGroupItem extends Message<TaxGroupItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this tax group
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     * Denotes if this record requires approval (or has been approved)
     *
     * @generated from field: bool need_approval = 4;
     */
    needApproval: boolean;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 10;
     */
    taxGroupId: bigint;
    /**
     * The ID of the tax param that is a part of the tax group
     *
     * @generated from field: uint64 tax_param_id = 11;
     */
    taxParamId: bigint;
    /**
     * An optional description
     *
     * @generated from field: string description = 40;
     */
    description: string;
    constructor(data?: PartialMessage<TaxGroupItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxGroupItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxGroupItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxGroupItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxGroupItem;
    static equals(a: TaxGroupItem | PlainMessage<TaxGroupItem> | undefined, b: TaxGroupItem | PlainMessage<TaxGroupItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of tax group params
 *
 * @generated from message Scailo.TaxGroupsItemsList
 */
export declare class TaxGroupsItemsList extends Message<TaxGroupsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.TaxGroupItem list = 1;
     */
    list: TaxGroupItem[];
    constructor(data?: PartialMessage<TaxGroupsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxGroupsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxGroupsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxGroupsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxGroupsItemsList;
    static equals(a: TaxGroupsItemsList | PlainMessage<TaxGroupsItemsList> | undefined, b: TaxGroupsItemsList | PlainMessage<TaxGroupsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.TaxGroupItemHistoryRequest
 */
export declare class TaxGroupItemHistoryRequest extends Message<TaxGroupItemHistoryRequest> {
    /**
     * Stores the ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 10;
     */
    taxGroupId: bigint;
    /**
     * The ID of the tax param that is a part of the tax group
     *
     * @generated from field: uint64 tax_param_id = 11;
     */
    taxParamId: bigint;
    constructor(data?: PartialMessage<TaxGroupItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TaxGroupItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TaxGroupItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TaxGroupItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TaxGroupItemHistoryRequest;
    static equals(a: TaxGroupItemHistoryRequest | PlainMessage<TaxGroupItemHistoryRequest> | undefined, b: TaxGroupItemHistoryRequest | PlainMessage<TaxGroupItemHistoryRequest> | undefined): boolean;
}
//# sourceMappingURL=tax_groups.scailo_pb.d.ts.map