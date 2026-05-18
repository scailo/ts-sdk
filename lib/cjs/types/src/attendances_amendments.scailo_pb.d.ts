import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.ATTENDANCE_AMENDMENT_SORT_KEY
 */
export declare enum ATTENDANCE_AMENDMENT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ATTENDANCE_AMENDMENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ATTENDANCE_AMENDMENT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ATTENDANCE_AMENDMENT_SORT_KEY_CREATED_AT = 1;
     */
    ATTENDANCE_AMENDMENT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ATTENDANCE_AMENDMENT_SORT_KEY_MODIFIED_AT = 2;
     */
    ATTENDANCE_AMENDMENT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: ATTENDANCE_AMENDMENT_SORT_KEY_APPROVED_ON = 3;
     */
    ATTENDANCE_AMENDMENT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: ATTENDANCE_AMENDMENT_SORT_KEY_APPROVED_BY = 4;
     */
    ATTENDANCE_AMENDMENT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: ATTENDANCE_AMENDMENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ATTENDANCE_AMENDMENT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: ATTENDANCE_AMENDMENT_SORT_KEY_COMPLETED_ON = 6;
     */
    ATTENDANCE_AMENDMENT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: ATTENDANCE_AMENDMENT_SORT_KEY_REFERENCE_ID = 10;
     */
    ATTENDANCE_AMENDMENT_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: ATTENDANCE_AMENDMENT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    ATTENDANCE_AMENDMENT_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the user ID
     *
     * @generated from enum value: ATTENDANCE_AMENDMENT_SORT_KEY_USER_ID = 12;
     */
    ATTENDANCE_AMENDMENT_SORT_KEY_USER_ID = 12,
    /**
     * Fetch ordered results by the attendance entry timestamp
     *
     * @generated from enum value: ATTENDANCE_AMENDMENT_SORT_KEY_ATTENDANCE_ENTRY_TIMESTAMP = 13;
     */
    ATTENDANCE_AMENDMENT_SORT_KEY_ATTENDANCE_ENTRY_TIMESTAMP = 13,
    /**
     * Fetch ordered results by the attendance exit timestamp
     *
     * @generated from enum value: ATTENDANCE_AMENDMENT_SORT_KEY_ATTENDANCE_EXIT_TIMESTAMP = 14;
     */
    ATTENDANCE_AMENDMENT_SORT_KEY_ATTENDANCE_EXIT_TIMESTAMP = 14,
    /**
     * Fetch ordered results by the amendment entry timestamp
     *
     * @generated from enum value: ATTENDANCE_AMENDMENT_SORT_KEY_AMENDMENT_ENTRY_TIMESTAMP = 15;
     */
    ATTENDANCE_AMENDMENT_SORT_KEY_AMENDMENT_ENTRY_TIMESTAMP = 15,
    /**
     * Fetch ordered results by the amendment exit timestamp
     *
     * @generated from enum value: ATTENDANCE_AMENDMENT_SORT_KEY_AMENDMENT_EXIT_TIMESTAMP = 16;
     */
    ATTENDANCE_AMENDMENT_SORT_KEY_AMENDMENT_EXIT_TIMESTAMP = 16
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.AttendancesAmendmentsServiceCreateRequest
 */
export declare class AttendancesAmendmentsServiceCreateRequest extends Message<AttendancesAmendmentsServiceCreateRequest> {
    /**
     *
     * @optional
     *
     * @description The globally unique identifier for the Organization or Business Entity.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
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
     *
     * @optional
     *
     * @description The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.
     *
     * @example 15234
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     *
     * @mandatory
     *
     * @description A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.
     *
     * @example "ABS-2023-001"
     *
     * @regex "[0-9A-Za-z ]+$"
     *
     * @format Alphanumeric characters and spaces only. No special symbols or punctuation allowed.
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the user who has requested for attendance amendment
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * The ID of the associated attendance that needs to be amended
     *
     * @generated from field: uint64 attendance_id = 12;
     */
    attendanceId: bigint;
    /**
     * The amended entry timestamp
     *
     * @generated from field: uint64 amendment_entry_timestamp = 13;
     */
    amendmentEntryTimestamp: bigint;
    /**
     * The amended exit timestamp
     *
     * @generated from field: uint64 amendment_exit_timestamp = 14;
     */
    amendmentExitTimestamp: bigint;
    /**
     * The description of the attendance amendment
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
    constructor(data?: PartialMessage<AttendancesAmendmentsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AttendancesAmendmentsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AttendancesAmendmentsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AttendancesAmendmentsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AttendancesAmendmentsServiceCreateRequest;
    static equals(a: AttendancesAmendmentsServiceCreateRequest | PlainMessage<AttendancesAmendmentsServiceCreateRequest> | undefined, b: AttendancesAmendmentsServiceCreateRequest | PlainMessage<AttendancesAmendmentsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.AttendancesAmendmentsServiceUpdateRequest
 */
export declare class AttendancesAmendmentsServiceUpdateRequest extends Message<AttendancesAmendmentsServiceUpdateRequest> {
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
     *
     * @optional
     *
     * @description Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.
     *
     * @example true
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
    /**
     *
     * @optional
     *
     * @description Updated vault folder ID for documentation storage.
     *
     * @example 15235
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     *
     * @mandatory
     *
     * @description Updated alphanumeric reference ID. Must contain at least 1 character.
     *
     * @example "ABS-2023-001-REV"
     *
     * @regex "[0-9A-Za-z ]+$"
     *
     * @format Alphanumeric characters and spaces only. No special symbols or punctuation allowed.
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The amended entry timestamp
     *
     * @generated from field: uint64 amendment_entry_timestamp = 12;
     */
    amendmentEntryTimestamp: bigint;
    /**
     * The amended exit timestamp
     *
     * @generated from field: uint64 amendment_exit_timestamp = 13;
     */
    amendmentExitTimestamp: bigint;
    /**
     * The description of the attendance amendment
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
    constructor(data?: PartialMessage<AttendancesAmendmentsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AttendancesAmendmentsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AttendancesAmendmentsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AttendancesAmendmentsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AttendancesAmendmentsServiceUpdateRequest;
    static equals(a: AttendancesAmendmentsServiceUpdateRequest | PlainMessage<AttendancesAmendmentsServiceUpdateRequest> | undefined, b: AttendancesAmendmentsServiceUpdateRequest | PlainMessage<AttendancesAmendmentsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.AttendanceAmendment
 */
export declare class AttendanceAmendment extends Message<AttendanceAmendment> {
    /**
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     *
     * @description Standard employee and record metadata including timestamps.
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     *
     * @description Detailed approval workflow state (Approver ID, Role, and Timestamps).
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     *
     * @description The current lifecycle status (e.g., DRAFT, VERIFIED, STANDING).
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @description Comprehensive audit trail of every operation performed on this record.
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     *
     * @description UNIX timestamp of when the record transitioned to the COMPLETED state.
     *
     * @example 1698400000
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     *
     * @description Link to the document storage folder.
     *
     * @example 15234
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     *
     * @description The user-provided reference ID.
     *
     * @example "ABS-2023-001"
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     *
     * @description The system-generated immutable reference number.
     *
     * @example "ABS-2023-X9Z2"
     *
     * @generated from field: string final_ref_number = 11;
     */
    finalRefNumber: string;
    /**
     * The ID of the user who has requested for attendance amendment
     *
     * @generated from field: uint64 user_id = 12;
     */
    userId: bigint;
    /**
     * The ID of the associated attendance that needs to be amended
     *
     * @generated from field: uint64 attendance_id = 13;
     */
    attendanceId: bigint;
    /**
     * The entry timestamp as recorded in the associated attendance
     *
     * @generated from field: uint64 attendance_entry_timestamp = 14;
     */
    attendanceEntryTimestamp: bigint;
    /**
     * The exit timestamp as recorded in the associated attendance
     *
     * @generated from field: uint64 attendance_exit_timestamp = 15;
     */
    attendanceExitTimestamp: bigint;
    /**
     * The amended entry timestamp
     *
     * @generated from field: uint64 amendment_entry_timestamp = 16;
     */
    amendmentEntryTimestamp: bigint;
    /**
     * The amended exit timestamp
     *
     * @generated from field: uint64 amendment_exit_timestamp = 17;
     */
    amendmentExitTimestamp: bigint;
    /**
     * The description of the attendance amendment
     *
     * @generated from field: string description = 18;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<AttendanceAmendment>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AttendanceAmendment";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AttendanceAmendment;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AttendanceAmendment;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AttendanceAmendment;
    static equals(a: AttendanceAmendment | PlainMessage<AttendanceAmendment> | undefined, b: AttendanceAmendment | PlainMessage<AttendanceAmendment> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.AttendancesAmendmentsList
 */
export declare class AttendancesAmendmentsList extends Message<AttendancesAmendmentsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.AttendanceAmendment list = 1;
     */
    list: AttendanceAmendment[];
    constructor(data?: PartialMessage<AttendancesAmendmentsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AttendancesAmendmentsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AttendancesAmendmentsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AttendancesAmendmentsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AttendancesAmendmentsList;
    static equals(a: AttendancesAmendmentsList | PlainMessage<AttendancesAmendmentsList> | undefined, b: AttendancesAmendmentsList | PlainMessage<AttendancesAmendmentsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.AttendancesAmendmentsServicePaginationReq
 */
export declare class AttendancesAmendmentsServicePaginationReq extends Message<AttendancesAmendmentsServicePaginationReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to return per page.
     *
     * @example 50
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Must be a strictly positive integer (1 or greater).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The specific field key to sort the results by.
     *
     * @generated from field: Scailo.ATTENDANCE_AMENDMENT_SORT_KEY sort_key = 5;
     */
    sortKey: ATTENDANCE_AMENDMENT_SORT_KEY;
    /**
     * The status of this attendance amendment
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<AttendancesAmendmentsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AttendancesAmendmentsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AttendancesAmendmentsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AttendancesAmendmentsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AttendancesAmendmentsServicePaginationReq;
    static equals(a: AttendancesAmendmentsServicePaginationReq | PlainMessage<AttendancesAmendmentsServicePaginationReq> | undefined, b: AttendancesAmendmentsServicePaginationReq | PlainMessage<AttendancesAmendmentsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.AttendancesAmendmentsServicePaginationResponse
 */
export declare class AttendancesAmendmentsServicePaginationResponse extends Message<AttendancesAmendmentsServicePaginationResponse> {
    /**
     *
     * @description Number of records returned in the current response slice.
     *
     * @example 50
     *
     * @generated from field: uint64 count = 1;
     */
    count: bigint;
    /**
     *
     * @description The offset provided in the request.
     *
     * @example 0
     *
     * @generated from field: uint64 offset = 2;
     */
    offset: bigint;
    /**
     *
     * @description The total number of records matching the criteria.
     *
     * @example 1250
     *
     * @generated from field: uint64 total = 3;
     */
    total: bigint;
    /**
     *
     * @description The array of records for the current page.
     *
     * @generated from field: repeated Scailo.AttendanceAmendment payload = 4;
     */
    payload: AttendanceAmendment[];
    constructor(data?: PartialMessage<AttendancesAmendmentsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AttendancesAmendmentsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AttendancesAmendmentsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AttendancesAmendmentsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AttendancesAmendmentsServicePaginationResponse;
    static equals(a: AttendancesAmendmentsServicePaginationResponse | PlainMessage<AttendancesAmendmentsServicePaginationResponse> | undefined, b: AttendancesAmendmentsServicePaginationResponse | PlainMessage<AttendancesAmendmentsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.AttendancesAmendmentsServiceFilterReq
 */
export declare class AttendancesAmendmentsServiceFilterReq extends Message<AttendancesAmendmentsServiceFilterReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.
     *
     * @example 100
     *
     * @regex ^(?:-1|0|[1-9][0-9]*)$
     *
     * @format Must be -1 or any non-negative integer (>= -1).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: Scailo.ATTENDANCE_AMENDMENT_SORT_KEY sort_key = 5;
     */
    sortKey: ATTENDANCE_AMENDMENT_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the specific user ID who approved the records.
     *
     * @example 501
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the role ID of the approver.
     *
     * @example 5
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the user-defined reference ID.
     *
     * @example "ABS-2023-001"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the system-generated ref number.
     *
     * @example "ABS-2023-X9Z2"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The ID of the user who has requested for attendance amendment
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    /**
     * The ID of the associated attendance
     *
     * @generated from field: uint64 attendance_id = 23;
     */
    attendanceId: bigint;
    /**
     * The start range of attendance_entry_timestamp
     *
     * @generated from field: uint64 attendance_entry_timestamp_start = 24;
     */
    attendanceEntryTimestampStart: bigint;
    /**
     * The end range of attendance_entry_timestamp
     *
     * @generated from field: uint64 attendance_entry_timestamp_end = 25;
     */
    attendanceEntryTimestampEnd: bigint;
    /**
     * The start range of attendance_exit_timestamp
     *
     * @generated from field: uint64 attendance_exit_timestamp_start = 26;
     */
    attendanceExitTimestampStart: bigint;
    /**
     * The end range of attendance_exit_timestamp
     *
     * @generated from field: uint64 attendance_exit_timestamp_end = 27;
     */
    attendanceExitTimestampEnd: bigint;
    /**
     * The start range of amendment_entry_timestamp
     *
     * @generated from field: uint64 amendment_entry_timestamp_start = 28;
     */
    amendmentEntryTimestampStart: bigint;
    /**
     * The end range of amendment_entry_timestamp
     *
     * @generated from field: uint64 amendment_entry_timestamp_end = 29;
     */
    amendmentEntryTimestampEnd: bigint;
    /**
     * The start range of amendment_exit_timestamp
     *
     * @generated from field: uint64 amendment_exit_timestamp_start = 30;
     */
    amendmentExitTimestampStart: bigint;
    /**
     * The end range of amendment_exit_timestamp
     *
     * @generated from field: uint64 amendment_exit_timestamp_end = 31;
     */
    amendmentExitTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    /**
     *
     * @optional
     *
     * @description If `true`, the response will include the associated custom form field values for each record.
     * Set to `false` to improve performance when form data is not needed.
     *
     * @example true
     *
     * @generated from field: bool include_form_data = 501;
     */
    includeFormData: boolean;
    constructor(data?: PartialMessage<AttendancesAmendmentsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AttendancesAmendmentsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AttendancesAmendmentsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AttendancesAmendmentsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AttendancesAmendmentsServiceFilterReq;
    static equals(a: AttendancesAmendmentsServiceFilterReq | PlainMessage<AttendancesAmendmentsServiceFilterReq> | undefined, b: AttendancesAmendmentsServiceFilterReq | PlainMessage<AttendancesAmendmentsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.AttendancesAmendmentsServiceCountReq
 */
export declare class AttendancesAmendmentsServiceCountReq extends Message<AttendancesAmendmentsServiceCountReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approved_on_start = 11;
     */
    approvedOnStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records approved ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approved_on_end = 12;
     */
    approvedOnEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the specific user ID who approved the records.
     *
     * @example 501
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approved_by_user_id = 13;
     */
    approvedByUserId: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the role ID of the approver.
     *
     * @example 5
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 approver_role_id = 14;
     */
    approverRoleId: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 completed_on_start = 15;
     */
    completedOnStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records completed ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 completed_on_end = 16;
     */
    completedOnEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the user-defined reference ID.
     *
     * @example "ABS-2023-001"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the system-generated ref number.
     *
     * @example "ABS-2023-X9Z2"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The ID of the user who has requested for attendance amendment
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    /**
     * The ID of the associated attendance
     *
     * @generated from field: uint64 attendance_id = 23;
     */
    attendanceId: bigint;
    /**
     * The start range of attendance_entry_timestamp
     *
     * @generated from field: uint64 attendance_entry_timestamp_start = 24;
     */
    attendanceEntryTimestampStart: bigint;
    /**
     * The end range of attendance_entry_timestamp
     *
     * @generated from field: uint64 attendance_entry_timestamp_end = 25;
     */
    attendanceEntryTimestampEnd: bigint;
    /**
     * The start range of attendance_exit_timestamp
     *
     * @generated from field: uint64 attendance_exit_timestamp_start = 26;
     */
    attendanceExitTimestampStart: bigint;
    /**
     * The end range of attendance_exit_timestamp
     *
     * @generated from field: uint64 attendance_exit_timestamp_end = 27;
     */
    attendanceExitTimestampEnd: bigint;
    /**
     * The start range of amendment_entry_timestamp
     *
     * @generated from field: uint64 amendment_entry_timestamp_start = 28;
     */
    amendmentEntryTimestampStart: bigint;
    /**
     * The end range of amendment_entry_timestamp
     *
     * @generated from field: uint64 amendment_entry_timestamp_end = 29;
     */
    amendmentEntryTimestampEnd: bigint;
    /**
     * The start range of amendment_exit_timestamp
     *
     * @generated from field: uint64 amendment_exit_timestamp_start = 30;
     */
    amendmentExitTimestampStart: bigint;
    /**
     * The end range of amendment_exit_timestamp
     *
     * @generated from field: uint64 amendment_exit_timestamp_end = 31;
     */
    amendmentExitTimestampEnd: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<AttendancesAmendmentsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AttendancesAmendmentsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AttendancesAmendmentsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AttendancesAmendmentsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AttendancesAmendmentsServiceCountReq;
    static equals(a: AttendancesAmendmentsServiceCountReq | PlainMessage<AttendancesAmendmentsServiceCountReq> | undefined, b: AttendancesAmendmentsServiceCountReq | PlainMessage<AttendancesAmendmentsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.AttendancesAmendmentsServiceSearchAllReq
 */
export declare class AttendancesAmendmentsServiceSearchAllReq extends Message<AttendancesAmendmentsServiceSearchAllReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.
     *
     * @example 100
     *
     * @regex ^(?:-1|0|[1-9][0-9]*)$
     *
     * @format Must be -1 or any non-negative integer (>= -1).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: Scailo.ATTENDANCE_AMENDMENT_SORT_KEY sort_key = 5;
     */
    sortKey: ATTENDANCE_AMENDMENT_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @mandatory
     *
     * @description The search string to match against reference IDs.
     *
     * @example "Medical 2023"
     *
     * @regex .*
     *
     * @format: May contain any UTF-8 characters.
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    /**
     * The ID of the user who has requested for attendance amendment
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    constructor(data?: PartialMessage<AttendancesAmendmentsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AttendancesAmendmentsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AttendancesAmendmentsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AttendancesAmendmentsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AttendancesAmendmentsServiceSearchAllReq;
    static equals(a: AttendancesAmendmentsServiceSearchAllReq | PlainMessage<AttendancesAmendmentsServiceSearchAllReq> | undefined, b: AttendancesAmendmentsServiceSearchAllReq | PlainMessage<AttendancesAmendmentsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=attendances_amendments.scailo_pb.d.ts.map