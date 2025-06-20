import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.OVERTIME_SORT_KEY
 */
export declare enum OVERTIME_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: OVERTIME_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    OVERTIME_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: OVERTIME_SORT_KEY_CREATED_AT = 1;
     */
    OVERTIME_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: OVERTIME_SORT_KEY_MODIFIED_AT = 2;
     */
    OVERTIME_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: OVERTIME_SORT_KEY_APPROVED_ON = 3;
     */
    OVERTIME_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: OVERTIME_SORT_KEY_APPROVED_BY = 4;
     */
    OVERTIME_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: OVERTIME_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    OVERTIME_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: OVERTIME_SORT_KEY_COMPLETED_ON = 6;
     */
    OVERTIME_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: OVERTIME_SORT_KEY_REFERENCE_ID = 10;
     */
    OVERTIME_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: OVERTIME_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    OVERTIME_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the user ID
     *
     * @generated from enum value: OVERTIME_SORT_KEY_USER_ID = 12;
     */
    OVERTIME_SORT_KEY_USER_ID = 12,
    /**
     * Fetch ordered results by the "from timestamp"
     *
     * @generated from enum value: OVERTIME_SORT_KEY_FROM_TIMESTAMP = 13;
     */
    OVERTIME_SORT_KEY_FROM_TIMESTAMP = 13,
    /**
     * Fetch ordered results by the "to timestamp"
     *
     * @generated from enum value: OVERTIME_SORT_KEY_TO_TIMESTAMP = 14;
     */
    OVERTIME_SORT_KEY_TO_TIMESTAMP = 14
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.OvertimesServiceCreateRequest
 */
export declare class OvertimesServiceCreateRequest extends Message<OvertimesServiceCreateRequest> {
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
     * The reference ID of the overtime
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the user who has requested for overtime
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * The UNIX timestamp from when the overtime begins
     *
     * @generated from field: uint64 from_timestamp = 12;
     */
    fromTimestamp: bigint;
    /**
     * The UNIX timestamp from when the overtime ends
     *
     * @generated from field: uint64 to_timestamp = 13;
     */
    toTimestamp: bigint;
    /**
     * The description of the overtime
     *
     * @generated from field: string description = 14;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<OvertimesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OvertimesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OvertimesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OvertimesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OvertimesServiceCreateRequest;
    static equals(a: OvertimesServiceCreateRequest | PlainMessage<OvertimesServiceCreateRequest> | undefined, b: OvertimesServiceCreateRequest | PlainMessage<OvertimesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.OvertimesServiceUpdateRequest
 */
export declare class OvertimesServiceUpdateRequest extends Message<OvertimesServiceUpdateRequest> {
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
     * The reference ID of the overtime
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The UNIX timestamp from when the overtime begins
     *
     * @generated from field: uint64 from_timestamp = 12;
     */
    fromTimestamp: bigint;
    /**
     * The UNIX timestamp from when the overtime ends
     *
     * @generated from field: uint64 to_timestamp = 13;
     */
    toTimestamp: bigint;
    /**
     * The description of the overtime
     *
     * @generated from field: string description = 14;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<OvertimesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OvertimesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OvertimesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OvertimesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OvertimesServiceUpdateRequest;
    static equals(a: OvertimesServiceUpdateRequest | PlainMessage<OvertimesServiceUpdateRequest> | undefined, b: OvertimesServiceUpdateRequest | PlainMessage<OvertimesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Overtime
 */
export declare class Overtime extends Message<Overtime> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this overtime
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
     * The status of this overtime
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this overtime
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this overtime was marked as completed
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
     * The reference_id of the overtime
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
     * The ID of the user who has requested for overtime
     *
     * @generated from field: uint64 user_id = 12;
     */
    userId: bigint;
    /**
     * The UNIX timestamp from when the overtime begins
     *
     * @generated from field: uint64 from_timestamp = 13;
     */
    fromTimestamp: bigint;
    /**
     * The UNIX timestamp from when the overtime ends
     *
     * @generated from field: uint64 to_timestamp = 14;
     */
    toTimestamp: bigint;
    /**
     * The description of the overtime
     *
     * @generated from field: string description = 15;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<Overtime>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Overtime";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Overtime;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Overtime;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Overtime;
    static equals(a: Overtime | PlainMessage<Overtime> | undefined, b: Overtime | PlainMessage<Overtime> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.OvertimesList
 */
export declare class OvertimesList extends Message<OvertimesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Overtime list = 1;
     */
    list: Overtime[];
    constructor(data?: PartialMessage<OvertimesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OvertimesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OvertimesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OvertimesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OvertimesList;
    static equals(a: OvertimesList | PlainMessage<OvertimesList> | undefined, b: OvertimesList | PlainMessage<OvertimesList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.OvertimesServicePaginationReq
 */
export declare class OvertimesServicePaginationReq extends Message<OvertimesServicePaginationReq> {
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
     * @generated from field: Scailo.OVERTIME_SORT_KEY sort_key = 5;
     */
    sortKey: OVERTIME_SORT_KEY;
    /**
     * The status of this overtime
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<OvertimesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OvertimesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OvertimesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OvertimesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OvertimesServicePaginationReq;
    static equals(a: OvertimesServicePaginationReq | PlainMessage<OvertimesServicePaginationReq> | undefined, b: OvertimesServicePaginationReq | PlainMessage<OvertimesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.OvertimesServicePaginationResponse
 */
export declare class OvertimesServicePaginationResponse extends Message<OvertimesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Overtime payload = 4;
     */
    payload: Overtime[];
    constructor(data?: PartialMessage<OvertimesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OvertimesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OvertimesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OvertimesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OvertimesServicePaginationResponse;
    static equals(a: OvertimesServicePaginationResponse | PlainMessage<OvertimesServicePaginationResponse> | undefined, b: OvertimesServicePaginationResponse | PlainMessage<OvertimesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.OvertimesServiceFilterReq
 */
export declare class OvertimesServiceFilterReq extends Message<OvertimesServiceFilterReq> {
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
     * @generated from field: Scailo.OVERTIME_SORT_KEY sort_key = 5;
     */
    sortKey: OVERTIME_SORT_KEY;
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
     * The status of this overtime
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
     * The reference_id of the overtime
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
     * The ID of the user who has requested for overtime
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
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
    constructor(data?: PartialMessage<OvertimesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OvertimesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OvertimesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OvertimesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OvertimesServiceFilterReq;
    static equals(a: OvertimesServiceFilterReq | PlainMessage<OvertimesServiceFilterReq> | undefined, b: OvertimesServiceFilterReq | PlainMessage<OvertimesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.OvertimesServiceCountReq
 */
export declare class OvertimesServiceCountReq extends Message<OvertimesServiceCountReq> {
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
     * The status of this overtime
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
     * The reference_id of the overtime
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
     * The ID of the user who has requested for overtime
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
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
    constructor(data?: PartialMessage<OvertimesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OvertimesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OvertimesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OvertimesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OvertimesServiceCountReq;
    static equals(a: OvertimesServiceCountReq | PlainMessage<OvertimesServiceCountReq> | undefined, b: OvertimesServiceCountReq | PlainMessage<OvertimesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.OvertimesServiceSearchAllReq
 */
export declare class OvertimesServiceSearchAllReq extends Message<OvertimesServiceSearchAllReq> {
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
     * @generated from field: Scailo.OVERTIME_SORT_KEY sort_key = 5;
     */
    sortKey: OVERTIME_SORT_KEY;
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
     * The ID of the user who has requested for overtime
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    constructor(data?: PartialMessage<OvertimesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OvertimesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OvertimesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OvertimesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OvertimesServiceSearchAllReq;
    static equals(a: OvertimesServiceSearchAllReq | PlainMessage<OvertimesServiceSearchAllReq> | undefined, b: OvertimesServiceSearchAllReq | PlainMessage<OvertimesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=overtimes.scailo_pb.d.ts.map