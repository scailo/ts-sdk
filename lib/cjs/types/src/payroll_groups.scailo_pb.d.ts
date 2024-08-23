import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available input types for a payroll group item (with possible vbalues being percentage or fixed)
 *
 * @generated from enum Scailo.PAYROLL_GROUP_ITEM_VALUE_TYPE
 */
export declare enum PAYROLL_GROUP_ITEM_VALUE_TYPE {
    /**
     * Acceptable value type is any (usefil only for filters and search)
     *
     * @generated from enum value: PAYROLL_GROUP_ITEM_VALUE_TYPE_ANY_UNSPECIFIED = 0;
     */
    PAYROLL_GROUP_ITEM_VALUE_TYPE_ANY_UNSPECIFIED = 0,
    /**
     * Acceptable value type is a percentage
     *
     * @generated from enum value: PAYROLL_GROUP_ITEM_VALUE_TYPE_PERCENTAGE = 1;
     */
    PAYROLL_GROUP_ITEM_VALUE_TYPE_PERCENTAGE = 1,
    /**
     * Acceptable value type is fixed
     *
     * @generated from enum value: PAYROLL_GROUP_ITEM_VALUE_TYPE_FIXED = 2;
     */
    PAYROLL_GROUP_ITEM_VALUE_TYPE_FIXED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PAYROLL_GROUP_SORT_KEY
 */
export declare enum PAYROLL_GROUP_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PAYROLL_GROUP_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PAYROLL_GROUP_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PAYROLL_GROUP_SORT_KEY_CREATED_AT = 1;
     */
    PAYROLL_GROUP_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PAYROLL_GROUP_SORT_KEY_MODIFIED_AT = 2;
     */
    PAYROLL_GROUP_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PAYROLL_GROUP_SORT_KEY_APPROVED_ON = 3;
     */
    PAYROLL_GROUP_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PAYROLL_GROUP_SORT_KEY_APPROVED_BY = 4;
     */
    PAYROLL_GROUP_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PAYROLL_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PAYROLL_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: PAYROLL_GROUP_SORT_KEY_COMPLETED_ON = 6;
     */
    PAYROLL_GROUP_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: PAYROLL_GROUP_SORT_KEY_NAME = 10;
     */
    PAYROLL_GROUP_SORT_KEY_NAME = 10
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.PayrollGroupsServiceCreateRequest
 */
export declare class PayrollGroupsServiceCreateRequest extends Message<PayrollGroupsServiceCreateRequest> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The name of the payroll group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The payroll group code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the payroll group
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<PayrollGroupsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollGroupsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollGroupsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollGroupsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollGroupsServiceCreateRequest;
    static equals(a: PayrollGroupsServiceCreateRequest | PlainMessage<PayrollGroupsServiceCreateRequest> | undefined, b: PayrollGroupsServiceCreateRequest | PlainMessage<PayrollGroupsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.PayrollGroupsServiceUpdateRequest
 */
export declare class PayrollGroupsServiceUpdateRequest extends Message<PayrollGroupsServiceUpdateRequest> {
    /**
     * Stores any comment that the user might add during this operation
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
     * Optional boolean value that stores if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
    /**
     * The name of the payroll group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The payroll group code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the payroll group
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<PayrollGroupsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollGroupsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollGroupsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollGroupsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollGroupsServiceUpdateRequest;
    static equals(a: PayrollGroupsServiceUpdateRequest | PlainMessage<PayrollGroupsServiceUpdateRequest> | undefined, b: PayrollGroupsServiceUpdateRequest | PlainMessage<PayrollGroupsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.PayrollGroup
 */
export declare class PayrollGroup extends Message<PayrollGroup> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this payroll group
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
     * The status of this payroll group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this payroll group
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this payroll group was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The name of the payroll group
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The payroll group code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the payroll group
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of associated payroll group params
     *
     * @generated from field: repeated Scailo.PayrollGroupItem list = 20;
     */
    list: PayrollGroupItem[];
    constructor(data?: PartialMessage<PayrollGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollGroup;
    static equals(a: PayrollGroup | PlainMessage<PayrollGroup> | undefined, b: PayrollGroup | PlainMessage<PayrollGroup> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add a param to a payroll group
 *
 * @generated from message Scailo.PayrollGroupsServiceItemCreateRequest
 */
export declare class PayrollGroupsServiceItemCreateRequest extends Message<PayrollGroupsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the ID of the payroll group
     *
     * @generated from field: uint64 payroll_group_id = 10;
     */
    payrollGroupId: bigint;
    /**
     * The ID of the payroll param that is a part of the payroll group
     *
     * @generated from field: uint64 payroll_param_id = 11;
     */
    payrollParamId: bigint;
    /**
     * The value type of the item
     *
     * @generated from field: Scailo.PAYROLL_GROUP_ITEM_VALUE_TYPE value_type = 20;
     */
    valueType: PAYROLL_GROUP_ITEM_VALUE_TYPE;
    /**
     * Stores the base pay addition amount in terms of value_type (if value_type is percentage, then base_pay determines the percentage)
     *
     * @generated from field: uint64 base_pay_addition = 21;
     */
    basePayAddition: bigint;
    /**
     * Stores the divisor with which the base_pay_addition needs to be divided by, in order to get the actual base pay value
     *
     * @generated from field: uint64 divisor = 22;
     */
    divisor: bigint;
    /**
     * The minimum amount of applicable tax (will be disregarded if value is -100)
     *
     * @generated from field: int64 min_amount = 23;
     */
    minAmount: bigint;
    /**
     * The maximum amount of applicable tax (will be disregarded if value is -100)
     *
     * @generated from field: int64 max_amount = 24;
     */
    maxAmount: bigint;
    /**
     * Stores the amount (in terms of percentage) on which any associated payroll tax is applicable
     *
     * @generated from field: uint64 amount_percentage_on_which_tax_applicable = 25;
     */
    amountPercentageOnWhichTaxApplicable: bigint;
    /**
     * An optional description
     *
     * @generated from field: string description = 40;
     */
    description: string;
    constructor(data?: PartialMessage<PayrollGroupsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollGroupsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollGroupsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollGroupsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollGroupsServiceItemCreateRequest;
    static equals(a: PayrollGroupsServiceItemCreateRequest | PlainMessage<PayrollGroupsServiceItemCreateRequest> | undefined, b: PayrollGroupsServiceItemCreateRequest | PlainMessage<PayrollGroupsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update a param in a payroll group
 *
 * @generated from message Scailo.PayrollGroupsServiceItemUpdateRequest
 */
export declare class PayrollGroupsServiceItemUpdateRequest extends Message<PayrollGroupsServiceItemUpdateRequest> {
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
     * The value type of the item
     *
     * @generated from field: Scailo.PAYROLL_GROUP_ITEM_VALUE_TYPE value_type = 20;
     */
    valueType: PAYROLL_GROUP_ITEM_VALUE_TYPE;
    /**
     * Stores the base pay addition amount in terms of value_type (if value_type is percentage, then base_pay determines the percentage)
     *
     * @generated from field: uint64 base_pay_addition = 21;
     */
    basePayAddition: bigint;
    /**
     * Stores the divisor with which the base_pay_addition needs to be divided by, in order to get the actual base pay value
     *
     * @generated from field: uint64 divisor = 22;
     */
    divisor: bigint;
    /**
     * The minimum amount of applicable tax (will be disregarded if value is -100)
     *
     * @generated from field: int64 min_amount = 23;
     */
    minAmount: bigint;
    /**
     * The maximum amount of applicable tax (will be disregarded if value is -100)
     *
     * @generated from field: int64 max_amount = 24;
     */
    maxAmount: bigint;
    /**
     * Stores the amount (in terms of percentage) on which any associated payroll tax is applicable
     *
     * @generated from field: uint64 amount_percentage_on_which_tax_applicable = 25;
     */
    amountPercentageOnWhichTaxApplicable: bigint;
    /**
     * An optional description
     *
     * @generated from field: string description = 40;
     */
    description: string;
    constructor(data?: PartialMessage<PayrollGroupsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollGroupsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollGroupsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollGroupsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollGroupsServiceItemUpdateRequest;
    static equals(a: PayrollGroupsServiceItemUpdateRequest | PlainMessage<PayrollGroupsServiceItemUpdateRequest> | undefined, b: PayrollGroupsServiceItemUpdateRequest | PlainMessage<PayrollGroupsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a param associated to a payroll group
 *
 * @generated from message Scailo.PayrollGroupItem
 */
export declare class PayrollGroupItem extends Message<PayrollGroupItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this payroll group
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
     * Stores the ID of the payroll group
     *
     * @generated from field: uint64 payroll_group_id = 10;
     */
    payrollGroupId: bigint;
    /**
     * The ID of the payroll param that is a part of the payroll group
     *
     * @generated from field: uint64 payroll_param_id = 11;
     */
    payrollParamId: bigint;
    /**
     * The value type of the item
     *
     * @generated from field: Scailo.PAYROLL_GROUP_ITEM_VALUE_TYPE value_type = 20;
     */
    valueType: PAYROLL_GROUP_ITEM_VALUE_TYPE;
    /**
     * Stores the base pay addition amount in terms of value_type (if value_type is percentage, then base_pay determines the percentage)
     *
     * @generated from field: uint64 base_pay_addition = 21;
     */
    basePayAddition: bigint;
    /**
     * Stores the divisor with which the base_pay_addition needs to be divided by, in order to get the actual base pay value
     *
     * @generated from field: uint64 divisor = 22;
     */
    divisor: bigint;
    /**
     * The minimum amount of applicable tax (will be disregarded if value is -100)
     *
     * @generated from field: int64 min_amount = 23;
     */
    minAmount: bigint;
    /**
     * The maximum amount of applicable tax (will be disregarded if value is -100)
     *
     * @generated from field: int64 max_amount = 24;
     */
    maxAmount: bigint;
    /**
     * Stores the amount (in terms of percentage) on which any associated payroll tax is applicable
     *
     * @generated from field: uint64 amount_percentage_on_which_tax_applicable = 25;
     */
    amountPercentageOnWhichTaxApplicable: bigint;
    /**
     * An optional description
     *
     * @generated from field: string description = 40;
     */
    description: string;
    constructor(data?: PartialMessage<PayrollGroupItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollGroupItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollGroupItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollGroupItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollGroupItem;
    static equals(a: PayrollGroupItem | PlainMessage<PayrollGroupItem> | undefined, b: PayrollGroupItem | PlainMessage<PayrollGroupItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of payroll groups
 *
 * @generated from message Scailo.PayrollGroupsList
 */
export declare class PayrollGroupsList extends Message<PayrollGroupsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.PayrollGroup list = 1;
     */
    list: PayrollGroup[];
    constructor(data?: PartialMessage<PayrollGroupsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollGroupsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollGroupsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollGroupsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollGroupsList;
    static equals(a: PayrollGroupsList | PlainMessage<PayrollGroupsList> | undefined, b: PayrollGroupsList | PlainMessage<PayrollGroupsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of payroll group params
 *
 * @generated from message Scailo.PayrollGroupsItemsList
 */
export declare class PayrollGroupsItemsList extends Message<PayrollGroupsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.PayrollGroupItem list = 1;
     */
    list: PayrollGroupItem[];
    constructor(data?: PartialMessage<PayrollGroupsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollGroupsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollGroupsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollGroupsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollGroupsItemsList;
    static equals(a: PayrollGroupsItemsList | PlainMessage<PayrollGroupsItemsList> | undefined, b: PayrollGroupsItemsList | PlainMessage<PayrollGroupsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.PayrollGroupItemHistoryRequest
 */
export declare class PayrollGroupItemHistoryRequest extends Message<PayrollGroupItemHistoryRequest> {
    /**
     * Stores the ID of the payroll group
     *
     * @generated from field: uint64 payroll_group_id = 10;
     */
    payrollGroupId: bigint;
    /**
     * The ID of the payroll param that is a part of the payroll group
     *
     * @generated from field: uint64 payroll_param_id = 11;
     */
    payrollParamId: bigint;
    constructor(data?: PartialMessage<PayrollGroupItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollGroupItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollGroupItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollGroupItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollGroupItemHistoryRequest;
    static equals(a: PayrollGroupItemHistoryRequest | PlainMessage<PayrollGroupItemHistoryRequest> | undefined, b: PayrollGroupItemHistoryRequest | PlainMessage<PayrollGroupItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.PayrollGroupsServicePaginationReq
 */
export declare class PayrollGroupsServicePaginationReq extends Message<PayrollGroupsServicePaginationReq> {
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
     * @generated from field: Scailo.PAYROLL_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: PAYROLL_GROUP_SORT_KEY;
    /**
     * The status of this payroll group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<PayrollGroupsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollGroupsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollGroupsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollGroupsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollGroupsServicePaginationReq;
    static equals(a: PayrollGroupsServicePaginationReq | PlainMessage<PayrollGroupsServicePaginationReq> | undefined, b: PayrollGroupsServicePaginationReq | PlainMessage<PayrollGroupsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.PayrollGroupsServicePaginationResponse
 */
export declare class PayrollGroupsServicePaginationResponse extends Message<PayrollGroupsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.PayrollGroup payload = 4;
     */
    payload: PayrollGroup[];
    constructor(data?: PartialMessage<PayrollGroupsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollGroupsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollGroupsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollGroupsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollGroupsServicePaginationResponse;
    static equals(a: PayrollGroupsServicePaginationResponse | PlainMessage<PayrollGroupsServicePaginationResponse> | undefined, b: PayrollGroupsServicePaginationResponse | PlainMessage<PayrollGroupsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.PayrollGroupsServiceFilterReq
 */
export declare class PayrollGroupsServiceFilterReq extends Message<PayrollGroupsServiceFilterReq> {
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
     * @generated from field: Scailo.PAYROLL_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: PAYROLL_GROUP_SORT_KEY;
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
     * The status of this payroll group
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
     * The start range of completed timestamp
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     * The end range of completed timestamp
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     * The name of the payroll group
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The payroll param code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<PayrollGroupsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollGroupsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollGroupsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollGroupsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollGroupsServiceFilterReq;
    static equals(a: PayrollGroupsServiceFilterReq | PlainMessage<PayrollGroupsServiceFilterReq> | undefined, b: PayrollGroupsServiceFilterReq | PlainMessage<PayrollGroupsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.PayrollGroupsServiceCountReq
 */
export declare class PayrollGroupsServiceCountReq extends Message<PayrollGroupsServiceCountReq> {
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
     * The status of this payroll group
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
     * The start range of completed timestamp
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     * The end range of completed timestamp
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     * The name of the payroll group
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The payroll param code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<PayrollGroupsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollGroupsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollGroupsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollGroupsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollGroupsServiceCountReq;
    static equals(a: PayrollGroupsServiceCountReq | PlainMessage<PayrollGroupsServiceCountReq> | undefined, b: PayrollGroupsServiceCountReq | PlainMessage<PayrollGroupsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.PayrollGroupsServiceSearchAllReq
 */
export declare class PayrollGroupsServiceSearchAllReq extends Message<PayrollGroupsServiceSearchAllReq> {
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
     * @generated from field: Scailo.PAYROLL_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey: PAYROLL_GROUP_SORT_KEY;
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
    constructor(data?: PartialMessage<PayrollGroupsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollGroupsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollGroupsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollGroupsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollGroupsServiceSearchAllReq;
    static equals(a: PayrollGroupsServiceSearchAllReq | PlainMessage<PayrollGroupsServiceSearchAllReq> | undefined, b: PayrollGroupsServiceSearchAllReq | PlainMessage<PayrollGroupsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=payroll_groups.scailo_pb.d.ts.map