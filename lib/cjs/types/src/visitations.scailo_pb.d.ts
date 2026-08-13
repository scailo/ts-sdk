import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.VISITATION_SORT_KEY
 */
export declare enum VISITATION_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: VISITATION_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    VISITATION_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: VISITATION_SORT_KEY_CREATED_AT = 1;
     */
    VISITATION_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: VISITATION_SORT_KEY_MODIFIED_AT = 2;
     */
    VISITATION_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: VISITATION_SORT_KEY_APPROVED_ON = 3;
     */
    VISITATION_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: VISITATION_SORT_KEY_APPROVED_BY = 4;
     */
    VISITATION_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: VISITATION_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    VISITATION_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: VISITATION_SORT_KEY_COMPLETED_ON = 6;
     */
    VISITATION_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: VISITATION_SORT_KEY_REFERENCE_ID = 10;
     */
    VISITATION_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: VISITATION_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    VISITATION_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the user ID
     *
     * @generated from enum value: VISITATION_SORT_KEY_USER_ID = 12;
     */
    VISITATION_SORT_KEY_USER_ID = 12,
    /**
     * Fetch ordered results by the associate ID
     *
     * @generated from enum value: VISITATION_SORT_KEY_ASSOCIATE_ID = 13;
     */
    VISITATION_SORT_KEY_ASSOCIATE_ID = 13,
    /**
     * Fetch ordered results by the "from timestamp"
     *
     * @generated from enum value: VISITATION_SORT_KEY_ENTRY_TIMESTAMP = 14;
     */
    VISITATION_SORT_KEY_ENTRY_TIMESTAMP = 14,
    /**
     * Fetch ordered results by the "to timestamp"
     *
     * @generated from enum value: VISITATION_SORT_KEY_EXIT_TIMESTAMP = 15;
     */
    VISITATION_SORT_KEY_EXIT_TIMESTAMP = 15
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.VisitationsServiceCreateRequest
 */
export declare class VisitationsServiceCreateRequest extends Message<VisitationsServiceCreateRequest> {
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
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
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
     * The ID of the user who is being visited
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * The ID of the associate who has requested for visitation
     *
     * @generated from field: uint64 associate_id = 12;
     */
    associateId: bigint;
    /**
     * The UNIX timestamp from when the visitation begins
     *
     * @generated from field: uint64 entry_timestamp = 13;
     */
    entryTimestamp: bigint;
    /**
     * The UNIX timestamp from when the visitation ends
     *
     * @generated from field: uint64 exit_timestamp = 14;
     */
    exitTimestamp: bigint;
    /**
     * The description of the visitation
     *
     * @generated from field: string description = 15;
     */
    description: string;
    /**
     *
     * @optional
     *
     * @description A collection of dynamic form fields for organization-specific data.
     *
     * @example []
     *
     * @format An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<VisitationsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VisitationsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VisitationsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VisitationsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VisitationsServiceCreateRequest;
    static equals(a: VisitationsServiceCreateRequest | PlainMessage<VisitationsServiceCreateRequest> | undefined, b: VisitationsServiceCreateRequest | PlainMessage<VisitationsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.VisitationsServiceUpdateRequest
 */
export declare class VisitationsServiceUpdateRequest extends Message<VisitationsServiceUpdateRequest> {
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target record that needs to be updated.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
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
     * The UNIX timestamp from when the visitation begins
     *
     * @generated from field: uint64 entry_timestamp = 12;
     */
    entryTimestamp: bigint;
    /**
     * The UNIX timestamp from when the visitation ends
     *
     * @generated from field: uint64 exit_timestamp = 13;
     */
    exitTimestamp: bigint;
    /**
     * The description of the visitation
     *
     * @generated from field: string description = 14;
     */
    description: string;
    /**
     *
     * @optional
     *
     * @description A collection of dynamic form fields for organization-specific data.
     *
     * @example []
     *
     * @format An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<VisitationsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VisitationsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VisitationsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VisitationsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VisitationsServiceUpdateRequest;
    static equals(a: VisitationsServiceUpdateRequest | PlainMessage<VisitationsServiceUpdateRequest> | undefined, b: VisitationsServiceUpdateRequest | PlainMessage<VisitationsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the message payload that is necessary to create an entry record. This will most likely be called only from mobile devices.
 *
 * @generated from message Scailo.VisitationsServiceImageEntryRequest
 */
export declare class VisitationsServiceImageEntryRequest extends Message<VisitationsServiceImageEntryRequest> {
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
     * // The reference ID of the visitation
     * string reference_id = 10 [(buf.validate.field).string = {
     *     pattern: "[0-9A-Za-z ]+$", // Allow spaces
     * }];
     * The ID of the user who is being visited
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    /**
     * The ID of the associate who has requested for visitation
     *
     * @generated from field: uint64 associate_id = 12;
     */
    associateId: bigint;
    /**
     * The raw image content of the entry image
     *
     * @generated from field: bytes entry_image = 13;
     */
    entryImage: Uint8Array;
    /**
     * The MIME type of the entry image
     *
     * @generated from field: string entry_image_mime_type = 14;
     */
    entryImageMimeType: string;
    /**
     * The description of the visitation
     *
     * @generated from field: string description = 15;
     */
    description: string;
    /**
     * The latitude of where the entry was recorded
     *
     * @generated from field: double entry_latitude = 16;
     */
    entryLatitude: number;
    /**
     * The longiture of where the entry was recorded
     *
     * @generated from field: double entry_longitude = 17;
     */
    entryLongitude: number;
    constructor(data?: PartialMessage<VisitationsServiceImageEntryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VisitationsServiceImageEntryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VisitationsServiceImageEntryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VisitationsServiceImageEntryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VisitationsServiceImageEntryRequest;
    static equals(a: VisitationsServiceImageEntryRequest | PlainMessage<VisitationsServiceImageEntryRequest> | undefined, b: VisitationsServiceImageEntryRequest | PlainMessage<VisitationsServiceImageEntryRequest> | undefined): boolean;
}
/**
 *
 * Describes the message payload that is necessary to create an exit record. This will most likely be called only from mobile devices.
 *
 * @generated from message Scailo.VisitationsServiceImageExitRequest
 */
export declare class VisitationsServiceImageExitRequest extends Message<VisitationsServiceImageExitRequest> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target record that needs to be updated.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 id = 2;
     */
    id: bigint;
    /**
     * The raw image content of the exit image
     *
     * @generated from field: bytes exit_image = 13;
     */
    exitImage: Uint8Array;
    /**
     * The MIME type of the exit image
     *
     * @generated from field: string exit_image_mime_type = 14;
     */
    exitImageMimeType: string;
    /**
     * The latitude of where the exit was recorded
     *
     * @generated from field: double exit_latitude = 15;
     */
    exitLatitude: number;
    /**
     * The longiture of where the exit was recorded
     *
     * @generated from field: double exit_longitude = 16;
     */
    exitLongitude: number;
    constructor(data?: PartialMessage<VisitationsServiceImageExitRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VisitationsServiceImageExitRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VisitationsServiceImageExitRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VisitationsServiceImageExitRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VisitationsServiceImageExitRequest;
    static equals(a: VisitationsServiceImageExitRequest | PlainMessage<VisitationsServiceImageExitRequest> | undefined, b: VisitationsServiceImageExitRequest | PlainMessage<VisitationsServiceImageExitRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Visitation
 */
export declare class Visitation extends Message<Visitation> {
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
     * The ID of the user who is being visited
     *
     * @generated from field: uint64 user_id = 12;
     */
    userId: bigint;
    /**
     * The ID of the associate who has requested for visitation
     *
     * @generated from field: uint64 associate_id = 13;
     */
    associateId: bigint;
    /**
     * The UNIX timestamp from when the visitation begins
     *
     * @generated from field: uint64 entry_timestamp = 14;
     */
    entryTimestamp: bigint;
    /**
     * The UNIX timestamp from when the visitation ends
     *
     * @generated from field: uint64 exit_timestamp = 15;
     */
    exitTimestamp: bigint;
    /**
     * The description of the visitation
     *
     * @generated from field: string description = 16;
     */
    description: string;
    /**
     *
     * @description Collection of organization-specific dynamic data.
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<Visitation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Visitation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Visitation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Visitation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Visitation;
    static equals(a: Visitation | PlainMessage<Visitation> | undefined, b: Visitation | PlainMessage<Visitation> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.VisitationsList
 */
export declare class VisitationsList extends Message<VisitationsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Visitation list = 1;
     */
    list: Visitation[];
    constructor(data?: PartialMessage<VisitationsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VisitationsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VisitationsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VisitationsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VisitationsList;
    static equals(a: VisitationsList | PlainMessage<VisitationsList> | undefined, b: VisitationsList | PlainMessage<VisitationsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.VisitationsServicePaginationReq
 */
export declare class VisitationsServicePaginationReq extends Message<VisitationsServicePaginationReq> {
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
     * @generated from field: Scailo.VISITATION_SORT_KEY sort_key = 5;
     */
    sortKey: VISITATION_SORT_KEY;
    /**
     * The status of this visitation
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<VisitationsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VisitationsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VisitationsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VisitationsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VisitationsServicePaginationReq;
    static equals(a: VisitationsServicePaginationReq | PlainMessage<VisitationsServicePaginationReq> | undefined, b: VisitationsServicePaginationReq | PlainMessage<VisitationsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.VisitationsServicePaginationResponse
 */
export declare class VisitationsServicePaginationResponse extends Message<VisitationsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Visitation payload = 4;
     */
    payload: Visitation[];
    constructor(data?: PartialMessage<VisitationsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VisitationsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VisitationsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VisitationsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VisitationsServicePaginationResponse;
    static equals(a: VisitationsServicePaginationResponse | PlainMessage<VisitationsServicePaginationResponse> | undefined, b: VisitationsServicePaginationResponse | PlainMessage<VisitationsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.VisitationsServiceFilterReq
 */
export declare class VisitationsServiceFilterReq extends Message<VisitationsServiceFilterReq> {
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
     * @generated from field: Scailo.VISITATION_SORT_KEY sort_key = 5;
     */
    sortKey: VISITATION_SORT_KEY;
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
     * The ID of the user who is being visited
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    /**
     * The ID of the associate who has requested for visitation
     *
     * @generated from field: uint64 associate_id = 23;
     */
    associateId: bigint;
    /**
     * The start range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 entry_timestamp_start = 24;
     */
    entryTimestampStart: bigint;
    /**
     * The end range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 entry_timestamp_end = 25;
     */
    entryTimestampEnd: bigint;
    /**
     * The start range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 exit_timestamp_start = 26;
     */
    exitTimestampStart: bigint;
    /**
     * The end range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 exit_timestamp_end = 27;
     */
    exitTimestampEnd: bigint;
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
    constructor(data?: PartialMessage<VisitationsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VisitationsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VisitationsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VisitationsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VisitationsServiceFilterReq;
    static equals(a: VisitationsServiceFilterReq | PlainMessage<VisitationsServiceFilterReq> | undefined, b: VisitationsServiceFilterReq | PlainMessage<VisitationsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.VisitationsServiceCountReq
 */
export declare class VisitationsServiceCountReq extends Message<VisitationsServiceCountReq> {
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
     * The ID of the user who is being visited
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    /**
     * The ID of the associate who has requested for visitation
     *
     * @generated from field: uint64 associate_id = 23;
     */
    associateId: bigint;
    /**
     * The start range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 entry_timestamp_start = 24;
     */
    entryTimestampStart: bigint;
    /**
     * The end range of "from timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 entry_timestamp_end = 25;
     */
    entryTimestampEnd: bigint;
    /**
     * The start range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 exit_timestamp_start = 26;
     */
    exitTimestampStart: bigint;
    /**
     * The end range of "to timestamp". 0 value will be considered. To prevent this from taken into consideration, set it to -1,
     *
     * @generated from field: uint64 exit_timestamp_end = 27;
     */
    exitTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Count based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<VisitationsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VisitationsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VisitationsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VisitationsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VisitationsServiceCountReq;
    static equals(a: VisitationsServiceCountReq | PlainMessage<VisitationsServiceCountReq> | undefined, b: VisitationsServiceCountReq | PlainMessage<VisitationsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.VisitationsServiceSearchAllReq
 */
export declare class VisitationsServiceSearchAllReq extends Message<VisitationsServiceSearchAllReq> {
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
     * @generated from field: Scailo.VISITATION_SORT_KEY sort_key = 5;
     */
    sortKey: VISITATION_SORT_KEY;
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
     * The ID of the user who is being visited
     *
     * @generated from field: uint64 user_id = 22;
     */
    userId: bigint;
    constructor(data?: PartialMessage<VisitationsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VisitationsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VisitationsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VisitationsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VisitationsServiceSearchAllReq;
    static equals(a: VisitationsServiceSearchAllReq | PlainMessage<VisitationsServiceSearchAllReq> | undefined, b: VisitationsServiceSearchAllReq | PlainMessage<VisitationsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=visitations.scailo_pb.d.ts.map