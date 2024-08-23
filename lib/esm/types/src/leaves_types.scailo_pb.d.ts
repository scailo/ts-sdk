import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.LEAVE_TYPE_SORT_KEY
 */
export declare enum LEAVE_TYPE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: LEAVE_TYPE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    LEAVE_TYPE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: LEAVE_TYPE_SORT_KEY_CREATED_AT = 1;
     */
    LEAVE_TYPE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: LEAVE_TYPE_SORT_KEY_MODIFIED_AT = 2;
     */
    LEAVE_TYPE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: LEAVE_TYPE_SORT_KEY_APPROVED_ON = 3;
     */
    LEAVE_TYPE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: LEAVE_TYPE_SORT_KEY_APPROVED_BY = 4;
     */
    LEAVE_TYPE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: LEAVE_TYPE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    LEAVE_TYPE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: LEAVE_TYPE_SORT_KEY_COMPLETED_ON = 6;
     */
    LEAVE_TYPE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: LEAVE_TYPE_SORT_KEY_NAME = 10;
     */
    LEAVE_TYPE_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: LEAVE_TYPE_SORT_KEY_CODE = 11;
     */
    LEAVE_TYPE_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.LeavesTypesServiceCreateRequest
 */
export declare class LeavesTypesServiceCreateRequest extends Message<LeavesTypesServiceCreateRequest> {
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
     * The name of the leave type
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The leave type code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the leave type
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The percentage of the applicable payroll on use of this leave type (in cents)
     *
     * @generated from field: uint64 payroll_percentage = 13;
     */
    payrollPercentage: bigint;
    constructor(data?: PartialMessage<LeavesTypesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesTypesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServiceCreateRequest;
    static equals(a: LeavesTypesServiceCreateRequest | PlainMessage<LeavesTypesServiceCreateRequest> | undefined, b: LeavesTypesServiceCreateRequest | PlainMessage<LeavesTypesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.LeavesTypesServiceUpdateRequest
 */
export declare class LeavesTypesServiceUpdateRequest extends Message<LeavesTypesServiceUpdateRequest> {
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
     * The name of the leave type
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The leave type code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the leave type
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The percentage of the applicable payroll on use of this leave type (in cents)
     *
     * @generated from field: uint64 payroll_percentage = 13;
     */
    payrollPercentage: bigint;
    constructor(data?: PartialMessage<LeavesTypesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesTypesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServiceUpdateRequest;
    static equals(a: LeavesTypesServiceUpdateRequest | PlainMessage<LeavesTypesServiceUpdateRequest> | undefined, b: LeavesTypesServiceUpdateRequest | PlainMessage<LeavesTypesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.LeaveType
 */
export declare class LeaveType extends Message<LeaveType> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this leave type
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
     * The status of this leave type
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this leave type
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this leave type was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The name of the leave type
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The leave type code
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The description of the leave type
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     * The percentage of the applicable payroll on use of this leave type (in cents)
     *
     * @generated from field: uint64 payroll_percentage = 13;
     */
    payrollPercentage: bigint;
    constructor(data?: PartialMessage<LeaveType>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeaveType";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeaveType;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeaveType;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeaveType;
    static equals(a: LeaveType | PlainMessage<LeaveType> | undefined, b: LeaveType | PlainMessage<LeaveType> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.LeavesTypesList
 */
export declare class LeavesTypesList extends Message<LeavesTypesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.LeaveType list = 1;
     */
    list: LeaveType[];
    constructor(data?: PartialMessage<LeavesTypesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesTypesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesList;
    static equals(a: LeavesTypesList | PlainMessage<LeavesTypesList> | undefined, b: LeavesTypesList | PlainMessage<LeavesTypesList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.LeavesTypesServicePaginationReq
 */
export declare class LeavesTypesServicePaginationReq extends Message<LeavesTypesServicePaginationReq> {
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
     * @generated from field: Scailo.LEAVE_TYPE_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_TYPE_SORT_KEY;
    /**
     * The status of this leave type
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<LeavesTypesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesTypesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServicePaginationReq;
    static equals(a: LeavesTypesServicePaginationReq | PlainMessage<LeavesTypesServicePaginationReq> | undefined, b: LeavesTypesServicePaginationReq | PlainMessage<LeavesTypesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.LeavesTypesServicePaginationResponse
 */
export declare class LeavesTypesServicePaginationResponse extends Message<LeavesTypesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.LeaveType payload = 4;
     */
    payload: LeaveType[];
    constructor(data?: PartialMessage<LeavesTypesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesTypesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServicePaginationResponse;
    static equals(a: LeavesTypesServicePaginationResponse | PlainMessage<LeavesTypesServicePaginationResponse> | undefined, b: LeavesTypesServicePaginationResponse | PlainMessage<LeavesTypesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.LeavesTypesServiceFilterReq
 */
export declare class LeavesTypesServiceFilterReq extends Message<LeavesTypesServiceFilterReq> {
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
     * @generated from field: Scailo.LEAVE_TYPE_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_TYPE_SORT_KEY;
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
     * The status of this leave type
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
     * The name of the leave type
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The leave type code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<LeavesTypesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesTypesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServiceFilterReq;
    static equals(a: LeavesTypesServiceFilterReq | PlainMessage<LeavesTypesServiceFilterReq> | undefined, b: LeavesTypesServiceFilterReq | PlainMessage<LeavesTypesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.LeavesTypesServiceCountReq
 */
export declare class LeavesTypesServiceCountReq extends Message<LeavesTypesServiceCountReq> {
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
     * The status of this leave type
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
     * The name of the leave type
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The leave type code
     *
     * @generated from field: string code = 21;
     */
    code: string;
    constructor(data?: PartialMessage<LeavesTypesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesTypesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServiceCountReq;
    static equals(a: LeavesTypesServiceCountReq | PlainMessage<LeavesTypesServiceCountReq> | undefined, b: LeavesTypesServiceCountReq | PlainMessage<LeavesTypesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.LeavesTypesServiceSearchAllReq
 */
export declare class LeavesTypesServiceSearchAllReq extends Message<LeavesTypesServiceSearchAllReq> {
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
     * @generated from field: Scailo.LEAVE_TYPE_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_TYPE_SORT_KEY;
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
    constructor(data?: PartialMessage<LeavesTypesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesTypesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesTypesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesTypesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesTypesServiceSearchAllReq;
    static equals(a: LeavesTypesServiceSearchAllReq | PlainMessage<LeavesTypesServiceSearchAllReq> | undefined, b: LeavesTypesServiceSearchAllReq | PlainMessage<LeavesTypesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=leaves_types.scailo_pb.d.ts.map