import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.LEAVE_REQUEST_SORT_KEY
 */
export declare enum LEAVE_REQUEST_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: LEAVE_REQUEST_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    LEAVE_REQUEST_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: LEAVE_REQUEST_SORT_KEY_CREATED_AT = 1;
     */
    LEAVE_REQUEST_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: LEAVE_REQUEST_SORT_KEY_MODIFIED_AT = 2;
     */
    LEAVE_REQUEST_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: LEAVE_REQUEST_SORT_KEY_APPROVED_ON = 3;
     */
    LEAVE_REQUEST_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: LEAVE_REQUEST_SORT_KEY_APPROVED_BY = 4;
     */
    LEAVE_REQUEST_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: LEAVE_REQUEST_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    LEAVE_REQUEST_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: LEAVE_REQUEST_SORT_KEY_COMPLETED_ON = 6;
     */
    LEAVE_REQUEST_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: LEAVE_REQUEST_SORT_KEY_REFERENCE_ID = 10;
     */
    LEAVE_REQUEST_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: LEAVE_REQUEST_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    LEAVE_REQUEST_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the user ID
     *
     * @generated from enum value: LEAVE_REQUEST_SORT_KEY_USER_ID = 12;
     */
    LEAVE_REQUEST_SORT_KEY_USER_ID = 12,
    /**
     * Fetch ordered results by the leave type ID
     *
     * @generated from enum value: LEAVE_REQUEST_SORT_KEY_LEAVE_TYPE_ID = 13;
     */
    LEAVE_REQUEST_SORT_KEY_LEAVE_TYPE_ID = 13,
    /**
     * Fetch ordered results by the "from timestamp"
     *
     * @generated from enum value: LEAVE_REQUEST_SORT_KEY_FROM_TIMESTAMP = 14;
     */
    LEAVE_REQUEST_SORT_KEY_FROM_TIMESTAMP = 14,
    /**
     * Fetch ordered results by the "to timestamp"
     *
     * @generated from enum value: LEAVE_REQUEST_SORT_KEY_TO_TIMESTAMP = 15;
     */
    LEAVE_REQUEST_SORT_KEY_TO_TIMESTAMP = 15
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.LeavesRequestsServiceCreateRequest
 */
export declare class LeavesRequestsServiceCreateRequest extends Message<LeavesRequestsServiceCreateRequest> {
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
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the leave request
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the user who has requested for leave
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * The ID of the corresponding leave type
     *
     * @generated from field: uint64 leave_type_id = 12;
     */
    leaveTypeId: bigint;
    /**
     * The UNIX timestamp from when the leave begins
     *
     * @generated from field: uint64 from_timestamp = 13;
     */
    fromTimestamp: bigint;
    /**
     * The UNIX timestamp from when the leave ends
     *
     * @generated from field: uint64 to_timestamp = 14;
     */
    toTimestamp: bigint;
    /**
     * The description of the leave request
     *
     * @generated from field: string description = 15;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<LeavesRequestsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesRequestsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesRequestsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesRequestsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesRequestsServiceCreateRequest;
    static equals(a: LeavesRequestsServiceCreateRequest | PlainMessage<LeavesRequestsServiceCreateRequest> | undefined, b: LeavesRequestsServiceCreateRequest | PlainMessage<LeavesRequestsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.LeavesRequestsServiceUpdateRequest
 */
export declare class LeavesRequestsServiceUpdateRequest extends Message<LeavesRequestsServiceUpdateRequest> {
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
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the leave request
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the corresponding leave type
     *
     * @generated from field: uint64 leave_type_id = 12;
     */
    leaveTypeId: bigint;
    /**
     * The UNIX timestamp from when the leave begins
     *
     * @generated from field: uint64 from_timestamp = 13;
     */
    fromTimestamp: bigint;
    /**
     * The UNIX timestamp from when the leave ends
     *
     * @generated from field: uint64 to_timestamp = 14;
     */
    toTimestamp: bigint;
    /**
     * The description of the leave request
     *
     * @generated from field: string description = 15;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<LeavesRequestsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesRequestsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesRequestsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesRequestsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesRequestsServiceUpdateRequest;
    static equals(a: LeavesRequestsServiceUpdateRequest | PlainMessage<LeavesRequestsServiceUpdateRequest> | undefined, b: LeavesRequestsServiceUpdateRequest | PlainMessage<LeavesRequestsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.LeaveRequest
 */
export declare class LeaveRequest extends Message<LeaveRequest> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this leave request
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
     * The status of this leave request
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this leave request
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this leave request was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference_id of the leave request
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 11;
     */
    finalRefNumber: string;
    /**
     * The ID of the user who has requested for leave
     *
     * @generated from field: uint64 user_id = 12;
     */
    userId: bigint;
    /**
     * The ID of the corresponding leave type
     *
     * @generated from field: uint64 leave_type_id = 13;
     */
    leaveTypeId: bigint;
    /**
     * The UNIX timestamp from when the leave begins
     *
     * @generated from field: uint64 from_timestamp = 14;
     */
    fromTimestamp: bigint;
    /**
     * The UNIX timestamp from when the leave ends
     *
     * @generated from field: uint64 to_timestamp = 15;
     */
    toTimestamp: bigint;
    /**
     * The description of the leave request
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<LeaveRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeaveRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeaveRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeaveRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeaveRequest;
    static equals(a: LeaveRequest | PlainMessage<LeaveRequest> | undefined, b: LeaveRequest | PlainMessage<LeaveRequest> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.LeavesRequestsList
 */
export declare class LeavesRequestsList extends Message<LeavesRequestsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.LeaveRequest list = 1;
     */
    list: LeaveRequest[];
    constructor(data?: PartialMessage<LeavesRequestsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesRequestsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesRequestsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesRequestsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesRequestsList;
    static equals(a: LeavesRequestsList | PlainMessage<LeavesRequestsList> | undefined, b: LeavesRequestsList | PlainMessage<LeavesRequestsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.LeavesRequestsServicePaginationReq
 */
export declare class LeavesRequestsServicePaginationReq extends Message<LeavesRequestsServicePaginationReq> {
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
     * @generated from field: Scailo.LEAVE_REQUEST_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_REQUEST_SORT_KEY;
    /**
     * The status of this leave request
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<LeavesRequestsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesRequestsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesRequestsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesRequestsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesRequestsServicePaginationReq;
    static equals(a: LeavesRequestsServicePaginationReq | PlainMessage<LeavesRequestsServicePaginationReq> | undefined, b: LeavesRequestsServicePaginationReq | PlainMessage<LeavesRequestsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.LeavesRequestsServicePaginationResponse
 */
export declare class LeavesRequestsServicePaginationResponse extends Message<LeavesRequestsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.LeaveRequest payload = 4;
     */
    payload: LeaveRequest[];
    constructor(data?: PartialMessage<LeavesRequestsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesRequestsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesRequestsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesRequestsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesRequestsServicePaginationResponse;
    static equals(a: LeavesRequestsServicePaginationResponse | PlainMessage<LeavesRequestsServicePaginationResponse> | undefined, b: LeavesRequestsServicePaginationResponse | PlainMessage<LeavesRequestsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.LeavesRequestsServiceFilterReq
 */
export declare class LeavesRequestsServiceFilterReq extends Message<LeavesRequestsServiceFilterReq> {
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
     * @generated from field: Scailo.LEAVE_REQUEST_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_REQUEST_SORT_KEY;
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
     * The status of this leave request
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
     * The reference_id of the leave request
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The ID of the user who has requested for leave
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    /**
     * The ID of the corresponding leave type
     *
     * @generated from field: uint64 leave_type_id = 23;
     */
    leaveTypeId: bigint;
    /**
     * The start range of "from timestamp"
     *
     * @generated from field: uint64 from_timestamp_start = 24;
     */
    fromTimestampStart: bigint;
    /**
     * The end range of "from timestamp"
     *
     * @generated from field: uint64 from_timestamp_end = 25;
     */
    fromTimestampEnd: bigint;
    /**
     * The start range of "to timestamp"
     *
     * @generated from field: uint64 to_timestamp_start = 26;
     */
    toTimestampStart: bigint;
    /**
     * The end range of "to timestamp"
     *
     * @generated from field: uint64 to_timestamp_end = 27;
     */
    toTimestampEnd: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<LeavesRequestsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesRequestsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesRequestsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesRequestsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesRequestsServiceFilterReq;
    static equals(a: LeavesRequestsServiceFilterReq | PlainMessage<LeavesRequestsServiceFilterReq> | undefined, b: LeavesRequestsServiceFilterReq | PlainMessage<LeavesRequestsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.LeavesRequestsServiceCountReq
 */
export declare class LeavesRequestsServiceCountReq extends Message<LeavesRequestsServiceCountReq> {
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
     * The status of this leave request
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
     * The reference_id of the leave request
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The ID of the user who has requested for leave
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    /**
     * The ID of the corresponding leave type
     *
     * @generated from field: uint64 leave_type_id = 23;
     */
    leaveTypeId: bigint;
    /**
     * The start range of "from timestamp"
     *
     * @generated from field: uint64 from_timestamp_start = 24;
     */
    fromTimestampStart: bigint;
    /**
     * The end range of "from timestamp"
     *
     * @generated from field: uint64 from_timestamp_end = 25;
     */
    fromTimestampEnd: bigint;
    /**
     * The start range of "to timestamp"
     *
     * @generated from field: uint64 to_timestamp_start = 26;
     */
    toTimestampStart: bigint;
    /**
     * The end range of "to timestamp"
     *
     * @generated from field: uint64 to_timestamp_end = 27;
     */
    toTimestampEnd: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<LeavesRequestsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesRequestsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesRequestsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesRequestsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesRequestsServiceCountReq;
    static equals(a: LeavesRequestsServiceCountReq | PlainMessage<LeavesRequestsServiceCountReq> | undefined, b: LeavesRequestsServiceCountReq | PlainMessage<LeavesRequestsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.LeavesRequestsServiceSearchAllReq
 */
export declare class LeavesRequestsServiceSearchAllReq extends Message<LeavesRequestsServiceSearchAllReq> {
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
     * @generated from field: Scailo.LEAVE_REQUEST_SORT_KEY sort_key = 5;
     */
    sortKey: LEAVE_REQUEST_SORT_KEY;
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
     * The ID of the user who has requested for leave
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    constructor(data?: PartialMessage<LeavesRequestsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LeavesRequestsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LeavesRequestsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LeavesRequestsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LeavesRequestsServiceSearchAllReq;
    static equals(a: LeavesRequestsServiceSearchAllReq | PlainMessage<LeavesRequestsServiceSearchAllReq> | undefined, b: LeavesRequestsServiceSearchAllReq | PlainMessage<LeavesRequestsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=leaves_requests.scailo_pb.d.ts.map