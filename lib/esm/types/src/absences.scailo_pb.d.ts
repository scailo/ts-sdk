import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.ABSENCE_SORT_KEY
 */
export declare enum ABSENCE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ABSENCE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ABSENCE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ABSENCE_SORT_KEY_CREATED_AT = 1;
     */
    ABSENCE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ABSENCE_SORT_KEY_MODIFIED_AT = 2;
     */
    ABSENCE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: ABSENCE_SORT_KEY_APPROVED_ON = 3;
     */
    ABSENCE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: ABSENCE_SORT_KEY_APPROVED_BY = 4;
     */
    ABSENCE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: ABSENCE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ABSENCE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: ABSENCE_SORT_KEY_COMPLETED_ON = 6;
     */
    ABSENCE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: ABSENCE_SORT_KEY_REFERENCE_ID = 10;
     */
    ABSENCE_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: ABSENCE_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    ABSENCE_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the user ID
     *
     * @generated from enum value: ABSENCE_SORT_KEY_USER_ID = 12;
     */
    ABSENCE_SORT_KEY_USER_ID = 12,
    /**
     * Fetch ordered results by the leave request ID
     *
     * @generated from enum value: ABSENCE_SORT_KEY_LEAVE_REQUEST_ID = 13;
     */
    ABSENCE_SORT_KEY_LEAVE_REQUEST_ID = 13,
    /**
     * Fetch ordered results by the "from timestamp"
     *
     * @generated from enum value: ABSENCE_SORT_KEY_FROM_TIMESTAMP = 14;
     */
    ABSENCE_SORT_KEY_FROM_TIMESTAMP = 14,
    /**
     * Fetch ordered results by the "to timestamp"
     *
     * @generated from enum value: ABSENCE_SORT_KEY_TO_TIMESTAMP = 15;
     */
    ABSENCE_SORT_KEY_TO_TIMESTAMP = 15
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.AbsencesServiceCreateRequest
 */
export declare class AbsencesServiceCreateRequest extends Message<AbsencesServiceCreateRequest> {
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
     * The reference ID of the absence
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the user who has been marked as absent
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * The ID of the optional associated leave request
     *
     * @generated from field: uint64 leave_request_id = 12;
     */
    leaveRequestId: bigint;
    /**
     * The UNIX timestamp from when the user is absent
     *
     * @generated from field: uint64 from_timestamp = 13;
     */
    fromTimestamp: bigint;
    /**
     * The UNIX timestamp until when the user is absent
     *
     * @generated from field: uint64 to_timestamp = 14;
     */
    toTimestamp: bigint;
    /**
     * Stores the unit of material ID
     *
     * @generated from field: uint64 uom_id = 15;
     */
    uomId: bigint;
    /**
     * Stores the quantity of absence (in cents)
     *
     * @generated from field: uint64 quantity = 16;
     */
    quantity: bigint;
    /**
     * The description of the absence
     *
     * @generated from field: string description = 17;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<AbsencesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AbsencesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesServiceCreateRequest;
    static equals(a: AbsencesServiceCreateRequest | PlainMessage<AbsencesServiceCreateRequest> | undefined, b: AbsencesServiceCreateRequest | PlainMessage<AbsencesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.AbsencesServiceUpdateRequest
 */
export declare class AbsencesServiceUpdateRequest extends Message<AbsencesServiceUpdateRequest> {
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
     * The reference ID of the absence
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the optional associated leave request
     *
     * @generated from field: uint64 leave_request_id = 12;
     */
    leaveRequestId: bigint;
    /**
     * The UNIX timestamp from when the user is absent
     *
     * @generated from field: uint64 from_timestamp = 13;
     */
    fromTimestamp: bigint;
    /**
     * The UNIX timestamp until when the user is absent
     *
     * @generated from field: uint64 to_timestamp = 14;
     */
    toTimestamp: bigint;
    /**
     * // Stores the unit of material ID
     * uint64 uom_id = 15 [(genesis_validate.rules).uint64.gt = 0];
     * Stores the quantity of absence (in cents)
     *
     * @generated from field: uint64 quantity = 16;
     */
    quantity: bigint;
    /**
     * The description of the absence
     *
     * @generated from field: string description = 17;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<AbsencesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AbsencesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesServiceUpdateRequest;
    static equals(a: AbsencesServiceUpdateRequest | PlainMessage<AbsencesServiceUpdateRequest> | undefined, b: AbsencesServiceUpdateRequest | PlainMessage<AbsencesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Absence
 */
export declare class Absence extends Message<Absence> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this absence
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
     * The status of this absence
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this absence
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this absence was marked as completed
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
     * The reference_id of the absence
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
     * The ID of the user who has been marked as absent
     *
     * @generated from field: uint64 user_id = 12;
     */
    userId: bigint;
    /**
     * The ID of the optional associated leave request
     *
     * @generated from field: uint64 leave_request_id = 13;
     */
    leaveRequestId: bigint;
    /**
     * The UNIX timestamp from when the user is absent
     *
     * @generated from field: uint64 from_timestamp = 14;
     */
    fromTimestamp: bigint;
    /**
     * The UNIX timestamp until when the user is absent
     *
     * @generated from field: uint64 to_timestamp = 15;
     */
    toTimestamp: bigint;
    /**
     * Stores the unit of material ID
     *
     * @generated from field: uint64 uom_id = 16;
     */
    uomId: bigint;
    /**
     * Stores the quantity of absence (in cents)
     *
     * @generated from field: uint64 quantity = 17;
     */
    quantity: bigint;
    /**
     * The description of the absence
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
    constructor(data?: PartialMessage<Absence>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Absence";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Absence;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Absence;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Absence;
    static equals(a: Absence | PlainMessage<Absence> | undefined, b: Absence | PlainMessage<Absence> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.AbsencesList
 */
export declare class AbsencesList extends Message<AbsencesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Absence list = 1;
     */
    list: Absence[];
    constructor(data?: PartialMessage<AbsencesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AbsencesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesList;
    static equals(a: AbsencesList | PlainMessage<AbsencesList> | undefined, b: AbsencesList | PlainMessage<AbsencesList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.AbsencesServicePaginationReq
 */
export declare class AbsencesServicePaginationReq extends Message<AbsencesServicePaginationReq> {
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
     * @generated from field: Scailo.ABSENCE_SORT_KEY sort_key = 5;
     */
    sortKey: ABSENCE_SORT_KEY;
    /**
     * The status of this absence
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<AbsencesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AbsencesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesServicePaginationReq;
    static equals(a: AbsencesServicePaginationReq | PlainMessage<AbsencesServicePaginationReq> | undefined, b: AbsencesServicePaginationReq | PlainMessage<AbsencesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.AbsencesServicePaginationResponse
 */
export declare class AbsencesServicePaginationResponse extends Message<AbsencesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Absence payload = 4;
     */
    payload: Absence[];
    constructor(data?: PartialMessage<AbsencesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AbsencesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesServicePaginationResponse;
    static equals(a: AbsencesServicePaginationResponse | PlainMessage<AbsencesServicePaginationResponse> | undefined, b: AbsencesServicePaginationResponse | PlainMessage<AbsencesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.AbsencesServiceFilterReq
 */
export declare class AbsencesServiceFilterReq extends Message<AbsencesServiceFilterReq> {
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
     * @generated from field: Scailo.ABSENCE_SORT_KEY sort_key = 5;
     */
    sortKey: ABSENCE_SORT_KEY;
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
     * The status of this absence
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
     * The reference_id of the absence
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
     * The ID of the user who has been marked as absent
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    /**
     * The ID of the optionally associated leave request
     *
     * @generated from field: uint64 leave_request_id = 23;
     */
    leaveRequestId: bigint;
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
     * Stores the unit of material ID
     *
     * @generated from field: uint64 uom_id = 28;
     */
    uomId: bigint;
    /**
     * The min quantity of absence (in cents)
     *
     * @generated from field: uint64 quantity_min = 29;
     */
    quantityMin: bigint;
    /**
     * The max quantity of absence (in cents)
     *
     * @generated from field: uint64 quantity_max = 30;
     */
    quantityMax: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<AbsencesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AbsencesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesServiceFilterReq;
    static equals(a: AbsencesServiceFilterReq | PlainMessage<AbsencesServiceFilterReq> | undefined, b: AbsencesServiceFilterReq | PlainMessage<AbsencesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.AbsencesServiceCountReq
 */
export declare class AbsencesServiceCountReq extends Message<AbsencesServiceCountReq> {
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
     * The status of this absence
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
     * The reference_id of the absence
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
     * The ID of the user who has been marked as absent
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    /**
     * The ID of the optionally associated leave request
     *
     * @generated from field: uint64 leave_request_id = 23;
     */
    leaveRequestId: bigint;
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
     * Stores the unit of material ID
     *
     * @generated from field: uint64 uom_id = 28;
     */
    uomId: bigint;
    /**
     * The min quantity of absence (in cents)
     *
     * @generated from field: uint64 quantity_min = 29;
     */
    quantityMin: bigint;
    /**
     * The max quantity of absence (in cents)
     *
     * @generated from field: uint64 quantity_max = 30;
     */
    quantityMax: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<AbsencesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AbsencesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesServiceCountReq;
    static equals(a: AbsencesServiceCountReq | PlainMessage<AbsencesServiceCountReq> | undefined, b: AbsencesServiceCountReq | PlainMessage<AbsencesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.AbsencesServiceSearchAllReq
 */
export declare class AbsencesServiceSearchAllReq extends Message<AbsencesServiceSearchAllReq> {
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
     * @generated from field: Scailo.ABSENCE_SORT_KEY sort_key = 5;
     */
    sortKey: ABSENCE_SORT_KEY;
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
     * The ID of the user who has been marked as absent
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    constructor(data?: PartialMessage<AbsencesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AbsencesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsencesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsencesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsencesServiceSearchAllReq;
    static equals(a: AbsencesServiceSearchAllReq | PlainMessage<AbsencesServiceSearchAllReq> | undefined, b: AbsencesServiceSearchAllReq | PlainMessage<AbsencesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=absences.scailo_pb.d.ts.map