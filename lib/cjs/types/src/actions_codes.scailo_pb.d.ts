import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of fields available for sorting action code search results.
 *
 * @generated from enum Scailo.ACTION_CODE_SORT_KEY
 */
export declare enum ACTION_CODE_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ACTION_CODE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_CREATED_AT = 1;
     */
    ACTION_CODE_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_MODIFIED_AT = 2;
     */
    ACTION_CODE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_APPROVED_ON = 3;
     */
    ACTION_CODE_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_APPROVED_BY = 4;
     */
    ACTION_CODE_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ACTION_CODE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort alphabetically by the user-provided display name.
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_NAME = 10;
     */
    ACTION_CODE_SORT_KEY_NAME = 10,
    /**
     * @description Sort alphabetically by the user-provided unique alphanumeric identifier.
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_CODE = 11;
     */
    ACTION_CODE_SORT_KEY_CODE = 11
}
/**
 *
 * Request message for creating a new Action Code.
 * Action Codes are used to classify specific activities, events, or status changes
 * within the system, often organized in a hierarchical (tree) structure.
 *
 * **Note:** This is a configuration-level entity used to define categorization
 * logic for reporting, workflows, and UI visualization.
 *
 * @generated from message Scailo.ActionsCodesServiceCreateRequest
 */
export declare class ActionsCodesServiceCreateRequest extends Message<ActionsCodesServiceCreateRequest> {
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
     * @description Audit log comment or justification for creating this action code. Useful for tracking configuration changes in the system history.
     *
     * @example "Adding new sub-code for regional compliance tracking."
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
     * @mandatory
     *
     * @description The display name of the action code. Must be at least 1 character long.
     *
     * @example "Technical Support"
     *
     * @regex .+
     *
     * @format May contain any UTF-8 characters.
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @mandatory
     *
     * @description The unique alphanumeric identifier used for system classification. This is typically a short string or mnemonic used in logic and filtering.
     *
     * @example "TECH_SUP_01"
     *
     * @regex .+
     *
     * @format May contain any UTF-8 characters.
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     *
     * @optional
     *
     * @description The Hexadecimal foreground (text) color for UI rendering. Used to visually distinguish codes in dashboards or lists.
     *
     * @example "#FFFFFF"
     *
     * @regex "^#[0-9a-fA-F]{6}$"
     *
     * @format Must be a 6-digit hex code starting with #.
     *
     * @generated from field: string fg_color = 12;
     */
    fgColor: string;
    /**
     *
     * @optional
     *
     * @description The Hexadecimal background color for UI rendering. Used to visually distinguish codes in dashboards or lists.
     *
     * @example "#FF5733"
     *
     * @regex "^#[0-9a-fA-F]{6}$"
     *
     * @format Must be a 6-digit hex code starting with #.
     *
     * @generated from field: string bg_color = 13;
     */
    bgColor: string;
    /**
     *
     * @optional
     *
     * @description The ID of the parent category in the action code hierarchy. Set to `0` if this is a top-level (root) action code.
     *
     * @example 105
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 parent_action_code_id = 16;
     */
    parentActionCodeId: bigint;
    /**
     *
     * @mandatory
     *
     * @description Indicates whether this code is a terminal "leaf" node. If `true`, no further sub-codes can be nested under this entry.
     *
     * @example true
     *
     * @generated from field: bool is_leaf = 17;
     */
    isLeaf: boolean;
    /**
     *
     * @optional
     *
     * @description Detailed explanation of what this action code represents and when it should be used.
     *
     * @example "Used for tracking inbound technical support tickets for Tier 1 issues."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: string description = 18;
     */
    description: string;
    constructor(data?: PartialMessage<ActionsCodesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActionsCodesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActionsCodesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActionsCodesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActionsCodesServiceCreateRequest;
    static equals(a: ActionsCodesServiceCreateRequest | PlainMessage<ActionsCodesServiceCreateRequest> | undefined, b: ActionsCodesServiceCreateRequest | PlainMessage<ActionsCodesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for updating an existing Action Code record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the visual properties, naming, and
 * metadata of an established Action Code.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.ActionsCodesServiceUpdateRequest
 */
export declare class ActionsCodesServiceUpdateRequest extends Message<ActionsCodesServiceUpdateRequest> {
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for this specific update. Captured in the version history for administrative tracking.
     *
     * @example "Updating brand colors to match new UI guidelines."
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
     * @description The unique system identifier of the Action Code to be updated. Must be a value greater than `0`.
     *
     * @example 402
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Must be a strictly positive integer (1 or greater).
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
     * @mandatory
     *
     * @description The updated display name of the action code. Must contain at least 1 character.
     *
     * @example "Emergency Maintenance"
     *
     * @regex .+
     *
     * @format May contain any UTF-8 characters.
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @optional
     *
     * @description The updated Hexadecimal foreground (text) color.
     *
     * @example "#000000"
     *
     * @regex "^#[0-9a-fA-F]{6}$"
     *
     * @format Must be a 6-digit hex code starting with #.
     *
     * @generated from field: string fg_color = 12;
     */
    fgColor: string;
    /**
     *
     * @optional
     *
     * @description The updated Hexadecimal background color.
     *
     * @example "#FFFF00"
     *
     * @regex "^#[0-9a-fA-F]{6}$"
     *
     * @format Must be a 6-digit hex code starting with #.
     *
     * @generated from field: string bg_color = 13;
     */
    bgColor: string;
    /**
     *
     * @optional
     *
     * @description An updated detailed description of the action code's purpose.
     *
     * @example "Revised to include high-priority hardware failures."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: string description = 18;
     */
    description: string;
    constructor(data?: PartialMessage<ActionsCodesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActionsCodesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActionsCodesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActionsCodesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActionsCodesServiceUpdateRequest;
    static equals(a: ActionsCodesServiceUpdateRequest | PlainMessage<ActionsCodesServiceUpdateRequest> | undefined, b: ActionsCodesServiceUpdateRequest | PlainMessage<ActionsCodesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents a full Action Code within the system.
 *
 * @generated from message Scailo.ActionCode
 */
export declare class ActionCode extends Message<ActionCode> {
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
     * @description The display name of the action code.
     *
     * @example "Technical Support"
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @description The unique alphanumeric identifier used for system classification. This is typically a short string or mnemonic used in logic and filtering.
     *
     * @example "TECH_SUP_01"
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     *
     * @description The Hexadecimal foreground (text) color for UI rendering. Used to visually distinguish codes in dashboards or lists.
     *
     * @example "#FFFFFF"
     *
     * @generated from field: string fg_color = 12;
     */
    fgColor: string;
    /**
     *
     * @description The Hexadecimal background color for UI rendering. Used to visually distinguish codes in dashboards or lists.
     *
     * @example "#FF5733"
     *
     * @generated from field: string bg_color = 13;
     */
    bgColor: string;
    /**
     *
     * @description The ID of the associated non-leaf parent action code in the action code hierarchy. If `0`, this is a top-level (root) action code.
     *
     * @example 105
     *
     * @generated from field: uint64 parent_action_code_id = 16;
     */
    parentActionCodeId: bigint;
    /**
     *
     * @description Indicates whether this code is a terminal "leaf" node. If `true`, no further sub-codes can be nested under this entry.
     *
     * @example true
     *
     * @generated from field: bool is_leaf = 17;
     */
    isLeaf: boolean;
    /**
     *
     * @description Detailed explanation of what this action code represents and when it should be used.
     *
     * @example "Used for tracking inbound technical support tickets for Tier 1 issues."
     *
     * @generated from field: string description = 18;
     */
    description: string;
    constructor(data?: PartialMessage<ActionCode>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActionCode";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActionCode;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActionCode;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActionCode;
    static equals(a: ActionCode | PlainMessage<ActionCode> | undefined, b: ActionCode | PlainMessage<ActionCode> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Action Code records.
 *
 * @generated from message Scailo.ActionsCodesList
 */
export declare class ActionsCodesList extends Message<ActionsCodesList> {
    /**
     * @description An array of Action Code records.
     *
     * @generated from field: repeated Scailo.ActionCode list = 1;
     */
    list: ActionCode[];
    constructor(data?: PartialMessage<ActionsCodesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActionsCodesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActionsCodesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActionsCodesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActionsCodesList;
    static equals(a: ActionsCodesList | PlainMessage<ActionsCodesList> | undefined, b: ActionsCodesList | PlainMessage<ActionsCodesList> | undefined): boolean;
}
/**
 *
 * Pagination request for retrieving slices of Action Code records.
 *
 * @generated from message Scailo.ActionsCodesServicePaginationReq
 */
export declare class ActionsCodesServicePaginationReq extends Message<ActionsCodesServicePaginationReq> {
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
     * @generated from field: Scailo.ACTION_CODE_SORT_KEY sort_key = 5;
     */
    sortKey: ACTION_CODE_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter results by a specific lifecycle status.
     *
     * @example STANDING
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ActionsCodesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActionsCodesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActionsCodesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActionsCodesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActionsCodesServicePaginationReq;
    static equals(a: ActionsCodesServicePaginationReq | PlainMessage<ActionsCodesServicePaginationReq> | undefined, b: ActionsCodesServicePaginationReq | PlainMessage<ActionsCodesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.ActionsCodesServicePaginationResponse
 */
export declare class ActionsCodesServicePaginationResponse extends Message<ActionsCodesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.ActionCode payload = 4;
     */
    payload: ActionCode[];
    constructor(data?: PartialMessage<ActionsCodesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActionsCodesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActionsCodesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActionsCodesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActionsCodesServicePaginationResponse;
    static equals(a: ActionsCodesServicePaginationResponse | PlainMessage<ActionsCodesServicePaginationResponse> | undefined, b: ActionsCodesServicePaginationResponse | PlainMessage<ActionsCodesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Advanced filter request for searching action codes using multiple logical criteria.
 *
 * @generated from message Scailo.ActionsCodesServiceFilterReq
 */
export declare class ActionsCodesServiceFilterReq extends Message<ActionsCodesServiceFilterReq> {
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
     * @generated from field: Scailo.ACTION_CODE_SORT_KEY sort_key = 5;
     */
    sortKey: ACTION_CODE_SORT_KEY;
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
     * @description Fuzzy match for the display name.
     *
     * @example "Technical Support"
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     *
     * @optional
     *
     * @description Exact match for the unique alphanumeric identifier.
     *
     * @example "TECH_SUP_01"
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     *
     * @optional
     *
     * @description Exact match for the Hexadecimal foreground (text) color.
     *
     * @example "#FFFFFF"
     *
     * @regex "^$|^#[0-9a-fA-F]{6}$"
     *
     * @format May be empty, but if provided, must be a '#' followed by exactly 6 hex characters.
     *
     * @generated from field: string fg_color = 22;
     */
    fgColor: string;
    /**
     *
     * @optional
     *
     * @description Exact match for the Hexadecimal background (text) color.
     *
     * @example "#FF5733"
     *
     * @regex "^$|^#[0-9a-fA-F]{6}$"
     *
     * @format May be empty, but if provided, must be a '#' followed by exactly 6 hex characters.
     *
     * @generated from field: string bg_color = 23;
     */
    bgColor: string;
    /**
     *
     * @optional
     *
     * @description Filter by specific ID of the parent action code. If this is set, then all the action codes that are associated to this parent action code are retrieved.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 parent_action_code_id = 26;
     */
    parentActionCodeId: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the given leaf property (TRUE, FALSE, ANY)
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 27;
     */
    isLeaf: BOOL_FILTER;
    constructor(data?: PartialMessage<ActionsCodesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActionsCodesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActionsCodesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActionsCodesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActionsCodesServiceFilterReq;
    static equals(a: ActionsCodesServiceFilterReq | PlainMessage<ActionsCodesServiceFilterReq> | undefined, b: ActionsCodesServiceFilterReq | PlainMessage<ActionsCodesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.ActionsCodesServiceCountReq
 */
export declare class ActionsCodesServiceCountReq extends Message<ActionsCodesServiceCountReq> {
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
     * @description Fuzzy match for the display name.
     *
     * @example "Technical Support"
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     *
     * @optional
     *
     * @description Exact match for the unique alphanumeric identifier.
     *
     * @example "TECH_SUP_01"
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     *
     * @optional
     *
     * @description Exact match for the Hexadecimal foreground (text) color.
     *
     * @example "#FFFFFF"
     *
     * @regex "^$|^#[0-9a-fA-F]{6}$"
     *
     * @format May be empty, but if provided, must be a '#' followed by exactly 6 hex characters.
     *
     * @generated from field: string fg_color = 22;
     */
    fgColor: string;
    /**
     *
     * @optional
     *
     * @description Exact match for the Hexadecimal background (text) color.
     *
     * @example "#FF5733"
     *
     * @regex "^$|^#[0-9a-fA-F]{6}$"
     *
     * @format May be empty, but if provided, must be a '#' followed by exactly 6 hex characters.
     *
     * @generated from field: string bg_color = 23;
     */
    bgColor: string;
    /**
     *
     * @optional
     *
     * @description Filter by specific ID of the parent action code. If this is set, then all the action codes that are associated to this parent action code are retrieved.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 parent_action_code_id = 26;
     */
    parentActionCodeId: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the given leaf property (TRUE, FALSE, ANY)
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 27;
     */
    isLeaf: BOOL_FILTER;
    constructor(data?: PartialMessage<ActionsCodesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActionsCodesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActionsCodesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActionsCodesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActionsCodesServiceCountReq;
    static equals(a: ActionsCodesServiceCountReq | PlainMessage<ActionsCodesServiceCountReq> | undefined, b: ActionsCodesServiceCountReq | PlainMessage<ActionsCodesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.ActionsCodesServiceSearchAllReq
 */
export declare class ActionsCodesServiceSearchAllReq extends Message<ActionsCodesServiceSearchAllReq> {
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
     * @description Number of records to return per page. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.
     *
     * @example 50
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
     * @description The specific field key to sort the results by.
     *
     * @generated from field: Scailo.ACTION_CODE_SORT_KEY sort_key = 5;
     */
    sortKey: ACTION_CODE_SORT_KEY;
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
     * @description The search string to match against.
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
     *
     * @optional
     *
     * @description Filter by specific ID of the parent action code. If this is set, then all the action codes that are associated to this parent action code are retrieved.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 parent_action_code_id = 25;
     */
    parentActionCodeId: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the given leaf property (TRUE, FALSE, ANY)
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 26;
     */
    isLeaf: BOOL_FILTER;
    constructor(data?: PartialMessage<ActionsCodesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ActionsCodesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActionsCodesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActionsCodesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActionsCodesServiceSearchAllReq;
    static equals(a: ActionsCodesServiceSearchAllReq | PlainMessage<ActionsCodesServiceSearchAllReq> | undefined, b: ActionsCodesServiceSearchAllReq | PlainMessage<ActionsCodesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=actions_codes.scailo_pb.d.ts.map