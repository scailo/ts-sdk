import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of fields available for sorting announcement search results.
 *
 * @generated from enum Scailo.ANNOUNCEMENT_SORT_KEY
 */
export declare enum ANNOUNCEMENT_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ANNOUNCEMENT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_CREATED_AT = 1;
     */
    ANNOUNCEMENT_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_MODIFIED_AT = 2;
     */
    ANNOUNCEMENT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_APPROVED_ON = 3;
     */
    ANNOUNCEMENT_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_APPROVED_BY = 4;
     */
    ANNOUNCEMENT_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ANNOUNCEMENT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the timestamp of record completion.
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_COMPLETED_ON = 6;
     */
    ANNOUNCEMENT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * @description Sort alphabetically by the user-provided title.
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_TITLE = 10;
     */
    ANNOUNCEMENT_SORT_KEY_TITLE = 10,
    /**
     * @description Sort alphabetically by the user-provided description.
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_DESCRIPTION = 11;
     */
    ANNOUNCEMENT_SORT_KEY_DESCRIPTION = 11,
    /**
     * @description Sort chronologically by the announcement's start timestamp.
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_START_ON = 12;
     */
    ANNOUNCEMENT_SORT_KEY_START_ON = 12,
    /**
     * @description Sort chronologically by the announcement's end timestamp.
     *
     * @generated from enum value: ANNOUNCEMENT_SORT_KEY_END_ON = 13;
     */
    ANNOUNCEMENT_SORT_KEY_END_ON = 13
}
/**
 *
 * Request message for broadcasting a new organizational announcement.
 * This record tracks internal communications, system alerts, or company-wide
 * updates distributed to specific target audiences or entities.
 *
 * **Note:** This is the primary entry point for HR, Internal Comms, and Admins
 * to publish time-bound informational updates and compliance notifications.
 *
 * @generated from message Scailo.AnnouncementsServiceCreateRequest
 */
export declare class AnnouncementsServiceCreateRequest extends Message<AnnouncementsServiceCreateRequest> {
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
     * @generated from field: optional string entity_uuid = 1;
     */
    entityUuid?: string;
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
     * @generated from field: optional string user_comment = 2;
     */
    userComment?: string;
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
     * @generated from field: optional uint64 vault_folder_id = 9;
     */
    vaultFolderId?: bigint;
    /**
     *
     * @mandatory
     *
     * @description The headline or title of the announcement. This is the primary text displayed to targeted users.
     *
     * @example "Scheduled System Maintenance - This Weekend"
     *
     * @regex ^[0-9A-Za-z ]+$
     *
     * @format Alphanumeric characters and spaces only. Must not be empty.
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     *
     * @mandatory
     *
     * @description The main body text or details of the announcement, elaborating on the core message.
     *
     * @example "The primary database will be offline for maintenance on Saturday from 2 AM to 4 AM UTC."
     *
     * @regex ^[0-9A-Za-z ]+$
     *
     * @format Alphanumeric characters and spaces only. Must not be empty.
     *
     * @generated from field: string description = 11;
     */
    description: string;
    /**
     *
     * @mandatory
     *
     * @description The effective Unix timestamp (in seconds) indicating when the announcement becomes active and visible.
     *
     * @example 1783382400
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer representing epoch time.
     *
     * @generated from field: uint64 start_on = 12;
     */
    startOn: bigint;
    /**
     *
     * @mandatory
     *
     * @description The expiration Unix timestamp (in seconds) indicating when the announcement should stop being displayed.
     *
     * @example 1783468800
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer representing epoch time. Must be greater than or equal to start_on.
     *
     * @generated from field: uint64 end_on = 13;
     */
    endOn: bigint;
    constructor(data?: PartialMessage<AnnouncementsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServiceCreateRequest;
    static equals(a: AnnouncementsServiceCreateRequest | PlainMessage<AnnouncementsServiceCreateRequest> | undefined, b: AnnouncementsServiceCreateRequest | PlainMessage<AnnouncementsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for updating an existing Announcement record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the title, description, start and end timestamps
 * of an established Announcement.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.AnnouncementsServiceUpdateRequest
 */
export declare class AnnouncementsServiceUpdateRequest extends Message<AnnouncementsServiceUpdateRequest> {
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
     * @generated from field: optional string user_comment = 1;
     */
    userComment?: string;
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
     * @generated from field: optional bool notify_users = 3;
     */
    notifyUsers?: boolean;
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
     * @generated from field: optional uint64 vault_folder_id = 9;
     */
    vaultFolderId?: bigint;
    /**
     *
     * @optional
     *
     * @description The headline or title of the announcement. This is the primary text displayed to targeted users.
     *
     * @example "Scheduled System Maintenance - This Weekend"
     *
     * @regex ^[0-9A-Za-z ]+$
     *
     * @format Alphanumeric characters and spaces only. Must not be empty.
     *
     * @generated from field: optional string title = 10;
     */
    title?: string;
    /**
     *
     * @optional
     *
     * @description The main body text or details of the announcement, elaborating on the core message.
     *
     * @example "The primary database will be offline for maintenance on Saturday from 2 AM to 4 AM UTC."
     *
     * @regex ^[0-9A-Za-z ]+$
     *
     * @format Alphanumeric characters and spaces only. Must not be empty.
     *
     * @generated from field: optional string description = 11;
     */
    description?: string;
    /**
     *
     * @optional
     *
     * @description The effective Unix timestamp (in seconds) indicating when the announcement becomes active and visible.
     *
     * @example 1783382400
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer representing epoch time.
     *
     * @generated from field: optional uint64 start_on = 12;
     */
    startOn?: bigint;
    /**
     *
     * @optional
     *
     * @description The expiration Unix timestamp (in seconds) indicating when the announcement should stop being displayed.
     *
     * @example 1783468800
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative 64-bit integer representing epoch time. Must be greater than or equal to start_on.
     *
     * @generated from field: optional uint64 end_on = 13;
     */
    endOn?: bigint;
    constructor(data?: PartialMessage<AnnouncementsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServiceUpdateRequest;
    static equals(a: AnnouncementsServiceUpdateRequest | PlainMessage<AnnouncementsServiceUpdateRequest> | undefined, b: AnnouncementsServiceUpdateRequest | PlainMessage<AnnouncementsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents a full Announcement within the system.
 *
 * @generated from message Scailo.Announcement
 */
export declare class Announcement extends Message<Announcement> {
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
     * @description The headline or title of the announcement. This is the primary text displayed to targeted users.
     *
     * @example "Scheduled System Maintenance - This Weekend"
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     *
     * @description The main body text or details of the announcement, elaborating on the core message.
     *
     * @example "The primary database will be offline for maintenance on Saturday from 2 AM to 4 AM UTC."
     *
     * @generated from field: string description = 11;
     */
    description: string;
    /**
     *
     * @description The effective Unix timestamp (in seconds) indicating when the announcement becomes active and visible.
     *
     * @example 1783382400
     *
     * @generated from field: uint64 start_on = 12;
     */
    startOn: bigint;
    /**
     *
     * @description The expiration Unix timestamp (in seconds) indicating when the announcement should stop being displayed.
     *
     * @example 1783468800
     *
     * @generated from field: uint64 end_on = 13;
     */
    endOn: bigint;
    constructor(data?: PartialMessage<Announcement>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Announcement";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Announcement;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Announcement;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Announcement;
    static equals(a: Announcement | PlainMessage<Announcement> | undefined, b: Announcement | PlainMessage<Announcement> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Announcement records.
 *
 * @generated from message Scailo.AnnouncementsList
 */
export declare class AnnouncementsList extends Message<AnnouncementsList> {
    /**
     * @description An array of Announcement records.
     *
     * @generated from field: repeated Scailo.Announcement list = 1;
     */
    list: Announcement[];
    constructor(data?: PartialMessage<AnnouncementsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsList;
    static equals(a: AnnouncementsList | PlainMessage<AnnouncementsList> | undefined, b: AnnouncementsList | PlainMessage<AnnouncementsList> | undefined): boolean;
}
/**
 *
 * Pagination request for retrieving slices of announcement records.
 *
 * @generated from message Scailo.AnnouncementsServicePaginationReq
 */
export declare class AnnouncementsServicePaginationReq extends Message<AnnouncementsServicePaginationReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The specific field key to sort the results by.
     *
     * @generated from field: optional Scailo.ANNOUNCEMENT_SORT_KEY sort_key = 5;
     */
    sortKey?: ANNOUNCEMENT_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter results by a specific lifecycle status.
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<AnnouncementsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServicePaginationReq;
    static equals(a: AnnouncementsServicePaginationReq | PlainMessage<AnnouncementsServicePaginationReq> | undefined, b: AnnouncementsServicePaginationReq | PlainMessage<AnnouncementsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.AnnouncementsServicePaginationResponse
 */
export declare class AnnouncementsServicePaginationResponse extends Message<AnnouncementsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Announcement payload = 4;
     */
    payload: Announcement[];
    constructor(data?: PartialMessage<AnnouncementsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServicePaginationResponse;
    static equals(a: AnnouncementsServicePaginationResponse | PlainMessage<AnnouncementsServicePaginationResponse> | undefined, b: AnnouncementsServicePaginationResponse | PlainMessage<AnnouncementsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Advanced filter request for searching and paginating announcements using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.AnnouncementsServiceFilterReq
 */
export declare class AnnouncementsServiceFilterReq extends Message<AnnouncementsServiceFilterReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: optional Scailo.ANNOUNCEMENT_SORT_KEY sort_key = 5;
     */
    sortKey?: ANNOUNCEMENT_SORT_KEY;
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
     * @generated from field: optional uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd?: bigint;
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
     * @generated from field: optional string entity_uuid = 8;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
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
     * @generated from field: optional uint64 approved_on_start = 11;
     */
    approvedOnStart?: bigint;
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
     * @generated from field: optional uint64 approved_on_end = 12;
     */
    approvedOnEnd?: bigint;
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
     * @generated from field: optional uint64 approved_by_user_id = 13;
     */
    approvedByUserId?: bigint;
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
     * @generated from field: optional uint64 approver_role_id = 14;
     */
    approverRoleId?: bigint;
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
     * @generated from field: optional uint64 completed_on_start = 15;
     */
    completedOnStart?: bigint;
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
     * @generated from field: optional uint64 completed_on_end = 16;
     */
    completedOnEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the announcement's title. Typically supports partial matching or substring searches.
     *
     * @example "System Maintenance"
     *
     * @regex ^[0-9A-Za-z ]+$
     *
     * @format Alphanumeric characters and spaces only.
     *
     * @generated from field: optional string title = 20;
     */
    title?: string;
    /**
     *
     * @optional
     *
     * @description Filter by the announcement's main body or description text. Typically supports partial matching or substring searches.
     *
     * @example "database will be offline"
     *
     * @regex ^[0-9A-Za-z ]+$
     *
     * @format Alphanumeric characters and spaces only.
     *
     * @generated from field: optional string description = 21;
     */
    description?: string;
    /**
     *
     * @optional
     *
     * @description Filter records where the announcement's start publication date is ON or AFTER this UNIX timestamp.
     *
     * @example 1783382400
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer representing epoch time.
     *
     * @generated from field: optional uint64 start_on_start = 22;
     */
    startOnStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records where the announcement's start publication date is ON or BEFORE this UNIX timestamp.
     *
     * @example 1783468800
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer representing epoch time.
     *
     * @generated from field: optional uint64 start_on_end = 23;
     */
    startOnEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records where the announcement's expiration date is ON or AFTER this UNIX timestamp.
     *
     * @example 1783468800
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer representing epoch time.
     *
     * @generated from field: optional uint64 end_on_start = 24;
     */
    endOnStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records where the announcement's expiration date is ON or BEFORE this UNIX timestamp.
     *
     * @example 1783555200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer representing epoch time.
     *
     * @generated from field: optional uint64 end_on_end = 25;
     */
    endOnEnd?: bigint;
    constructor(data?: PartialMessage<AnnouncementsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServiceFilterReq;
    static equals(a: AnnouncementsServiceFilterReq | PlainMessage<AnnouncementsServiceFilterReq> | undefined, b: AnnouncementsServiceFilterReq | PlainMessage<AnnouncementsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Target filter request for counting announcement records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.AnnouncementsServiceCountReq
 */
export declare class AnnouncementsServiceCountReq extends Message<AnnouncementsServiceCountReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart?: bigint;
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
     * @generated from field: optional uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd?: bigint;
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
     * @generated from field: optional string entity_uuid = 8;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
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
     * @generated from field: optional uint64 approved_on_start = 11;
     */
    approvedOnStart?: bigint;
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
     * @generated from field: optional uint64 approved_on_end = 12;
     */
    approvedOnEnd?: bigint;
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
     * @generated from field: optional uint64 approved_by_user_id = 13;
     */
    approvedByUserId?: bigint;
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
     * @generated from field: optional uint64 approver_role_id = 14;
     */
    approverRoleId?: bigint;
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
     * @generated from field: optional uint64 completed_on_start = 15;
     */
    completedOnStart?: bigint;
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
     * @generated from field: optional uint64 completed_on_end = 16;
     */
    completedOnEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the announcement's title. Typically supports partial matching or substring searches.
     *
     * @example "System Maintenance"
     *
     * @regex ^[0-9A-Za-z ]+$
     *
     * @format Alphanumeric characters and spaces only.
     *
     * @generated from field: optional string title = 20;
     */
    title?: string;
    /**
     *
     * @optional
     *
     * @description Filter by the announcement's main body or description text. Typically supports partial matching or substring searches.
     *
     * @example "database will be offline"
     *
     * @regex ^[0-9A-Za-z ]+$
     *
     * @format Alphanumeric characters and spaces only.
     *
     * @generated from field: optional string description = 21;
     */
    description?: string;
    /**
     *
     * @optional
     *
     * @description Filter records where the announcement's start publication date is ON or AFTER this UNIX timestamp.
     *
     * @example 1783382400
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer representing epoch time.
     *
     * @generated from field: optional uint64 start_on_start = 22;
     */
    startOnStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records where the announcement's start publication date is ON or BEFORE this UNIX timestamp.
     *
     * @example 1783468800
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer representing epoch time.
     *
     * @generated from field: optional uint64 start_on_end = 23;
     */
    startOnEnd?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records where the announcement's expiration date is ON or AFTER this UNIX timestamp.
     *
     * @example 1783468800
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer representing epoch time.
     *
     * @generated from field: optional uint64 end_on_start = 24;
     */
    endOnStart?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records where the announcement's expiration date is ON or BEFORE this UNIX timestamp.
     *
     * @example 1783555200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer representing epoch time.
     *
     * @generated from field: optional uint64 end_on_end = 25;
     */
    endOnEnd?: bigint;
    constructor(data?: PartialMessage<AnnouncementsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServiceCountReq;
    static equals(a: AnnouncementsServiceCountReq | PlainMessage<AnnouncementsServiceCountReq> | undefined, b: AnnouncementsServiceCountReq | PlainMessage<AnnouncementsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Broad-spectrum search and lookup request for locating and paginating announcements via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.AnnouncementsServiceSearchAllReq
 */
export declare class AnnouncementsServiceSearchAllReq extends Message<AnnouncementsServiceSearchAllReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_active = 1;
     */
    isActive?: BOOL_FILTER;
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
     * @generated from field: optional uint64 offset = 3;
     */
    offset?: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: optional Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder?: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: optional Scailo.ANNOUNCEMENT_SORT_KEY sort_key = 5;
     */
    sortKey?: ANNOUNCEMENT_SORT_KEY;
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
     * @generated from field: optional string entity_uuid = 6;
     */
    entityUuid?: string;
    /**
     *
     * @optional
     *
     * @description Filter by lifecycle status (e.g., DRAFT, STANDING).
     *
     * @example STANDING
     *
     * @generated from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;
     */
    status?: STANDARD_LIFECYCLE_STATUS;
    /**
     *
     * @optional
     *
     * @description The search string to match against reference IDs.
     *
     * @example "Medical 2023"
     *
     * @regex .*
     *
     * @format: May contain any UTF-8 characters.
     *
     * @generated from field: optional string search_key = 11;
     */
    searchKey?: string;
    constructor(data?: PartialMessage<AnnouncementsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AnnouncementsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnouncementsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnouncementsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnouncementsServiceSearchAllReq;
    static equals(a: AnnouncementsServiceSearchAllReq | PlainMessage<AnnouncementsServiceSearchAllReq> | undefined, b: AnnouncementsServiceSearchAllReq | PlainMessage<AnnouncementsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=announcements.scailo_pb.d.ts.map