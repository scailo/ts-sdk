import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PAYROLL_PARAM_SORT_KEY
 */
export declare enum PAYROLL_PARAM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PAYROLL_PARAM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PAYROLL_PARAM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PAYROLL_PARAM_SORT_KEY_CREATED_AT = 1;
     */
    PAYROLL_PARAM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PAYROLL_PARAM_SORT_KEY_MODIFIED_AT = 2;
     */
    PAYROLL_PARAM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PAYROLL_PARAM_SORT_KEY_APPROVED_ON = 3;
     */
    PAYROLL_PARAM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PAYROLL_PARAM_SORT_KEY_APPROVED_BY = 4;
     */
    PAYROLL_PARAM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PAYROLL_PARAM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PAYROLL_PARAM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: PAYROLL_PARAM_SORT_KEY_COMPLETED_ON = 6;
     */
    PAYROLL_PARAM_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: PAYROLL_PARAM_SORT_KEY_NAME = 10;
     */
    PAYROLL_PARAM_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: PAYROLL_PARAM_SORT_KEY_CODE = 11;
     */
    PAYROLL_PARAM_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.PayrollParamsServiceCreateRequest
 */
export declare class PayrollParamsServiceCreateRequest extends Message<PayrollParamsServiceCreateRequest> {
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
     * The name of the payroll param
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The payroll param code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the payroll param
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<PayrollParamsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollParamsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollParamsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollParamsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollParamsServiceCreateRequest;
    static equals(a: PayrollParamsServiceCreateRequest | PlainMessage<PayrollParamsServiceCreateRequest> | undefined, b: PayrollParamsServiceCreateRequest | PlainMessage<PayrollParamsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.PayrollParamsServiceUpdateRequest
 */
export declare class PayrollParamsServiceUpdateRequest extends Message<PayrollParamsServiceUpdateRequest> {
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
     * The name of the payroll param
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The payroll param code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the payroll param
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<PayrollParamsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollParamsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollParamsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollParamsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollParamsServiceUpdateRequest;
    static equals(a: PayrollParamsServiceUpdateRequest | PlainMessage<PayrollParamsServiceUpdateRequest> | undefined, b: PayrollParamsServiceUpdateRequest | PlainMessage<PayrollParamsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.PayrollParam
 */
export declare class PayrollParam extends Message<PayrollParam> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this payroll param
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
     * The status of this payroll param
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this payroll param
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this payroll param was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The name of the payroll param
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The payroll param code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the payroll param
     *
     * @generated from field: string description = 12;
     */
    description: string;
    constructor(data?: PartialMessage<PayrollParam>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollParam";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollParam;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollParam;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollParam;
    static equals(a: PayrollParam | PlainMessage<PayrollParam> | undefined, b: PayrollParam | PlainMessage<PayrollParam> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.PayrollParamsList
 */
export declare class PayrollParamsList extends Message<PayrollParamsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.PayrollParam list = 1;
     */
    list: PayrollParam[];
    constructor(data?: PartialMessage<PayrollParamsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollParamsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollParamsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollParamsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollParamsList;
    static equals(a: PayrollParamsList | PlainMessage<PayrollParamsList> | undefined, b: PayrollParamsList | PlainMessage<PayrollParamsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.PayrollParamsServicePaginationReq
 */
export declare class PayrollParamsServicePaginationReq extends Message<PayrollParamsServicePaginationReq> {
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
     * @generated from field: Scailo.PAYROLL_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: PAYROLL_PARAM_SORT_KEY;
    /**
     * The status of this payroll param
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<PayrollParamsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollParamsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollParamsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollParamsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollParamsServicePaginationReq;
    static equals(a: PayrollParamsServicePaginationReq | PlainMessage<PayrollParamsServicePaginationReq> | undefined, b: PayrollParamsServicePaginationReq | PlainMessage<PayrollParamsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.PayrollParamsServicePaginationResponse
 */
export declare class PayrollParamsServicePaginationResponse extends Message<PayrollParamsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.PayrollParam payload = 4;
     */
    payload: PayrollParam[];
    constructor(data?: PartialMessage<PayrollParamsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollParamsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollParamsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollParamsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollParamsServicePaginationResponse;
    static equals(a: PayrollParamsServicePaginationResponse | PlainMessage<PayrollParamsServicePaginationResponse> | undefined, b: PayrollParamsServicePaginationResponse | PlainMessage<PayrollParamsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.PayrollParamsServiceFilterReq
 */
export declare class PayrollParamsServiceFilterReq extends Message<PayrollParamsServiceFilterReq> {
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
     * @generated from field: Scailo.PAYROLL_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: PAYROLL_PARAM_SORT_KEY;
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
     * The status of this payroll param
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
     * The name of the payroll param
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
    constructor(data?: PartialMessage<PayrollParamsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollParamsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollParamsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollParamsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollParamsServiceFilterReq;
    static equals(a: PayrollParamsServiceFilterReq | PlainMessage<PayrollParamsServiceFilterReq> | undefined, b: PayrollParamsServiceFilterReq | PlainMessage<PayrollParamsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.PayrollParamsServiceCountReq
 */
export declare class PayrollParamsServiceCountReq extends Message<PayrollParamsServiceCountReq> {
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
     * The status of this payroll param
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
     * The name of the payroll param
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
    constructor(data?: PartialMessage<PayrollParamsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollParamsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollParamsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollParamsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollParamsServiceCountReq;
    static equals(a: PayrollParamsServiceCountReq | PlainMessage<PayrollParamsServiceCountReq> | undefined, b: PayrollParamsServiceCountReq | PlainMessage<PayrollParamsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.PayrollParamsServiceSearchAllReq
 */
export declare class PayrollParamsServiceSearchAllReq extends Message<PayrollParamsServiceSearchAllReq> {
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
     * @generated from field: Scailo.PAYROLL_PARAM_SORT_KEY sort_key = 5;
     */
    sortKey: PAYROLL_PARAM_SORT_KEY;
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
    constructor(data?: PartialMessage<PayrollParamsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.PayrollParamsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PayrollParamsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PayrollParamsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PayrollParamsServiceSearchAllReq;
    static equals(a: PayrollParamsServiceSearchAllReq | PlainMessage<PayrollParamsServiceSearchAllReq> | undefined, b: PayrollParamsServiceSearchAllReq | PlainMessage<PayrollParamsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=payroll_params.scailo_pb.d.ts.map