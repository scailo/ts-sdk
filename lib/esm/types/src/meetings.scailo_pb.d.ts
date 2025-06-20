import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { BOOL_FILTER, EmployeeMetadata, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Describes the lifecycle status of each meeting
 *
 * @generated from enum Scailo.MEETING_LIFECYCLE
 */
export declare enum MEETING_LIFECYCLE {
    /**
     * Used only in filters
     *
     * @generated from enum value: MEETING_LIFECYCLE_ANY_UNSPECIFIED = 0;
     */
    MEETING_LIFECYCLE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the meeting is open
     *
     * @generated from enum value: MEETING_LIFECYCLE_OPEN = 1;
     */
    MEETING_LIFECYCLE_OPEN = 1,
    /**
     * Denotes that the meeting has completed
     *
     * @generated from enum value: MEETING_LIFECYCLE_COMPLETED = 2;
     */
    MEETING_LIFECYCLE_COMPLETED = 2,
    /**
     * Denotes that the meeting has been cancelled
     *
     * @generated from enum value: MEETING_LIFECYCLE_CANCELLED = 3;
     */
    MEETING_LIFECYCLE_CANCELLED = 3
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.MEETING_SORT_KEY
 */
export declare enum MEETING_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: MEETING_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    MEETING_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: MEETING_SORT_KEY_CREATED_AT = 1;
     */
    MEETING_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: MEETING_SORT_KEY_MODIFIED_AT = 2;
     */
    MEETING_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: MEETING_SORT_KEY_COMPLETED_ON = 6;
     */
    MEETING_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the title
     *
     * @generated from enum value: MEETING_SORT_KEY_TITLE = 10;
     */
    MEETING_SORT_KEY_TITLE = 10,
    /**
     * Fetch ordered results by the start time
     *
     * @generated from enum value: MEETING_SORT_KEY_STARTS_AT = 11;
     */
    MEETING_SORT_KEY_STARTS_AT = 11,
    /**
     * Fetch ordered results by the end time
     *
     * @generated from enum value: MEETING_SORT_KEY_ENDS_AT = 12;
     */
    MEETING_SORT_KEY_ENDS_AT = 12
}
/**
 *
 * Describes the list of available RSVP choices
 *
 * @generated from enum Scailo.MEETING_RSVP
 */
export declare enum MEETING_RSVP {
    /**
     * Used only in filter requests
     *
     * @generated from enum value: MEETING_RSVP_ANY_UNSPECIFIED = 0;
     */
    MEETING_RSVP_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the user has not responded to the RSVP
     *
     * @generated from enum value: MEETING_RSVP_NONE = 1;
     */
    MEETING_RSVP_NONE = 1,
    /**
     * Denotes that the user has responded with a yes
     *
     * @generated from enum value: MEETING_RSVP_YES = 2;
     */
    MEETING_RSVP_YES = 2,
    /**
     * Denotes that the user has responded with a no
     *
     * @generated from enum value: MEETING_RSVP_NO = 3;
     */
    MEETING_RSVP_NO = 3,
    /**
     * Denotes that the user has responded with a maybe
     *
     * @generated from enum value: MEETING_RSVP_MAYBE = 4;
     */
    MEETING_RSVP_MAYBE = 4
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.MEETING_ACTIONABLE_SORT_KEY
 */
export declare enum MEETING_ACTIONABLE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: MEETING_ACTIONABLE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    MEETING_ACTIONABLE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: MEETING_ACTIONABLE_SORT_KEY_CREATED_AT = 1;
     */
    MEETING_ACTIONABLE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: MEETING_ACTIONABLE_SORT_KEY_MODIFIED_AT = 2;
     */
    MEETING_ACTIONABLE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the title
     *
     * @generated from enum value: MEETING_ACTIONABLE_SORT_KEY_TITLE = 10;
     */
    MEETING_ACTIONABLE_SORT_KEY_TITLE = 10,
    /**
     * Fetch ordered results by the activity tag ID
     *
     * @generated from enum value: MEETING_ACTIONABLE_SORT_KEY_ACTIVITY_TAG_ID = 11;
     */
    MEETING_ACTIONABLE_SORT_KEY_ACTIVITY_TAG_ID = 11
}
/**
 *
 * Describes each parameter that's part of the logbook (does not include historical data of the object) with the operation being a meeting lifecycle status
 *
 * @generated from message Scailo.LogbookLogMeetingLC
 */
export declare class LogbookLogMeetingLC extends Message<LogbookLogMeetingLC> {
    /**
     * ID of the resource
     *
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * Stores if the resource is active
     *
     * @generated from field: bool is_active = 2;
     */
    isActive: boolean;
    /**
     * Stores the timestamp of when this resource was created
     *
     * @generated from field: uint64 timestamp = 3;
     */
    timestamp: bigint;
    /**
     * The UUID of the resource
     *
     * @generated from field: string ref_uuid = 10;
     */
    refUuid: string;
    /**
     * The operation that was performed
     *
     * @generated from field: Scailo.MEETING_LIFECYCLE operation = 11;
     */
    operation: MEETING_LIFECYCLE;
    /**
     * The username of the user who performed this operation
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * The name of the person who made this entry
     *
     * @generated from field: string name = 13;
     */
    name: string;
    /**
     * The ID of the user who made this entry
     *
     * @generated from field: uint64 user_id = 14;
     */
    userId: bigint;
    /**
     * The comment generated by the application
     *
     * @generated from field: string app_comment = 15;
     */
    appComment: string;
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 16;
     */
    userComment: string;
    constructor(data?: PartialMessage<LogbookLogMeetingLC>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.LogbookLogMeetingLC";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LogbookLogMeetingLC;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LogbookLogMeetingLC;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LogbookLogMeetingLC;
    static equals(a: LogbookLogMeetingLC | PlainMessage<LogbookLogMeetingLC> | undefined, b: LogbookLogMeetingLC | PlainMessage<LogbookLogMeetingLC> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.MeetingsServiceCreateRequest
 */
export declare class MeetingsServiceCreateRequest extends Message<MeetingsServiceCreateRequest> {
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
     * @generated from field: uint64 vault_folder_id = 8;
     */
    vaultFolderId: bigint;
    /**
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 9;
     */
    projectId: bigint;
    /**
     * The title of the meeting
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The start UNIX timestamp
     *
     * @generated from field: uint64 starts_at = 11;
     */
    startsAt: bigint;
    /**
     * The end UNIX timestamp
     *
     * @generated from field: uint64 ends_at = 12;
     */
    endsAt: bigint;
    /**
     * The description of the meeting
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<MeetingsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingsServiceCreateRequest;
    static equals(a: MeetingsServiceCreateRequest | PlainMessage<MeetingsServiceCreateRequest> | undefined, b: MeetingsServiceCreateRequest | PlainMessage<MeetingsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.MeetingsServiceUpdateRequest
 */
export declare class MeetingsServiceUpdateRequest extends Message<MeetingsServiceUpdateRequest> {
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
     * @generated from field: uint64 vault_folder_id = 8;
     */
    vaultFolderId: bigint;
    /**
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 9;
     */
    projectId: bigint;
    /**
     * The title of the meeting
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The start UNIX timestamp
     *
     * @generated from field: uint64 starts_at = 11;
     */
    startsAt: bigint;
    /**
     * The end UNIX timestamp
     *
     * @generated from field: uint64 ends_at = 12;
     */
    endsAt: bigint;
    /**
     * The description of the meeting
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<MeetingsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingsServiceUpdateRequest;
    static equals(a: MeetingsServiceUpdateRequest | PlainMessage<MeetingsServiceUpdateRequest> | undefined, b: MeetingsServiceUpdateRequest | PlainMessage<MeetingsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Meeting
 */
export declare class Meeting extends Message<Meeting> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this meeting
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * The status of this meeting
     *
     * @generated from field: Scailo.MEETING_LIFECYCLE status = 4;
     */
    status: MEETING_LIFECYCLE;
    /**
     * Stores the logs of every operation performed on this meeting
     *
     * @generated from field: repeated Scailo.LogbookLogMeetingLC logs = 5;
     */
    logs: LogbookLogMeetingLC[];
    /**
     * The timestamp of when this meeting was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 8;
     */
    vaultFolderId: bigint;
    /**
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 9;
     */
    projectId: bigint;
    /**
     * The title of the meeting
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The start UNIX timestamp
     *
     * @generated from field: uint64 starts_at = 11;
     */
    startsAt: bigint;
    /**
     * The end UNIX timestamp
     *
     * @generated from field: uint64 ends_at = 12;
     */
    endsAt: bigint;
    /**
     * The description of the meeting
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<Meeting>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Meeting";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Meeting;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Meeting;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Meeting;
    static equals(a: Meeting | PlainMessage<Meeting> | undefined, b: Meeting | PlainMessage<Meeting> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.MeetingsList
 */
export declare class MeetingsList extends Message<MeetingsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Meeting list = 1;
     */
    list: Meeting[];
    constructor(data?: PartialMessage<MeetingsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingsList;
    static equals(a: MeetingsList | PlainMessage<MeetingsList> | undefined, b: MeetingsList | PlainMessage<MeetingsList> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.MeetingsServicePaginationReq
 */
export declare class MeetingsServicePaginationReq extends Message<MeetingsServicePaginationReq> {
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
     * @generated from field: Scailo.MEETING_SORT_KEY sort_key = 5;
     */
    sortKey: MEETING_SORT_KEY;
    /**
     * The status of this meeting
     *
     * @generated from field: Scailo.MEETING_LIFECYCLE status = 6;
     */
    status: MEETING_LIFECYCLE;
    constructor(data?: PartialMessage<MeetingsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingsServicePaginationReq;
    static equals(a: MeetingsServicePaginationReq | PlainMessage<MeetingsServicePaginationReq> | undefined, b: MeetingsServicePaginationReq | PlainMessage<MeetingsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.MeetingsServicePaginationResponse
 */
export declare class MeetingsServicePaginationResponse extends Message<MeetingsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Meeting payload = 4;
     */
    payload: Meeting[];
    constructor(data?: PartialMessage<MeetingsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingsServicePaginationResponse;
    static equals(a: MeetingsServicePaginationResponse | PlainMessage<MeetingsServicePaginationResponse> | undefined, b: MeetingsServicePaginationResponse | PlainMessage<MeetingsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.MeetingsServiceFilterReq
 */
export declare class MeetingsServiceFilterReq extends Message<MeetingsServiceFilterReq> {
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
     * @generated from field: Scailo.MEETING_SORT_KEY sort_key = 5;
     */
    sortKey: MEETING_SORT_KEY;
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
     * The status of this meeting
     *
     * @generated from field: Scailo.MEETING_LIFECYCLE status = 10;
     */
    status: MEETING_LIFECYCLE;
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
     * The title of the meeting
     *
     * @generated from field: string title = 20;
     */
    title: string;
    /**
     * The start range of "starts at"
     *
     * @generated from field: uint64 starts_at_start = 24;
     */
    startsAtStart: bigint;
    /**
     * The end range of "starts at"
     *
     * @generated from field: uint64 starts_at_end = 25;
     */
    startsAtEnd: bigint;
    /**
     * The start range of "ends at"
     *
     * @generated from field: uint64 ends_at_start = 26;
     */
    endsAtStart: bigint;
    /**
     * The end range of "ends at"
     *
     * @generated from field: uint64 ends_at_end = 27;
     */
    endsAtEnd: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 28;
     */
    projectId: bigint;
    /**
     * Return all the meetings that the given employee is a part of
     *
     * @generated from field: uint64 employee_id = 40;
     */
    employeeId: bigint;
    /**
     * Return all the meetings that the given associate is a part of
     *
     * @generated from field: uint64 associate_id = 41;
     */
    associateId: bigint;
    /**
     * Return all the meetings that have the following activity tag as part of the actionables
     *
     * @generated from field: uint64 activity_tag_id = 42;
     */
    activityTagId: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<MeetingsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingsServiceFilterReq;
    static equals(a: MeetingsServiceFilterReq | PlainMessage<MeetingsServiceFilterReq> | undefined, b: MeetingsServiceFilterReq | PlainMessage<MeetingsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.MeetingsServiceCountReq
 */
export declare class MeetingsServiceCountReq extends Message<MeetingsServiceCountReq> {
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
     * The status of this meeting
     *
     * @generated from field: Scailo.MEETING_LIFECYCLE status = 10;
     */
    status: MEETING_LIFECYCLE;
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
     * The title of the meeting
     *
     * @generated from field: string title = 20;
     */
    title: string;
    /**
     * The start range of "starts at"
     *
     * @generated from field: uint64 starts_at_start = 24;
     */
    startsAtStart: bigint;
    /**
     * The end range of "starts at"
     *
     * @generated from field: uint64 starts_at_end = 25;
     */
    startsAtEnd: bigint;
    /**
     * The start range of "ends at"
     *
     * @generated from field: uint64 ends_at_start = 26;
     */
    endsAtStart: bigint;
    /**
     * The end range of "ends at"
     *
     * @generated from field: uint64 ends_at_end = 27;
     */
    endsAtEnd: bigint;
    /**
     * The ID of the associated project
     *
     * @generated from field: uint64 project_id = 28;
     */
    projectId: bigint;
    /**
     * Return all the meetings that the given employee is a part of
     *
     * @generated from field: uint64 employee_id = 40;
     */
    employeeId: bigint;
    /**
     * Return all the meetings that the given associate is a part of
     *
     * @generated from field: uint64 associate_id = 41;
     */
    associateId: bigint;
    /**
     * Return all the meetings that have the following activity tag as part of the actionables
     *
     * @generated from field: uint64 activity_tag_id = 42;
     */
    activityTagId: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<MeetingsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingsServiceCountReq;
    static equals(a: MeetingsServiceCountReq | PlainMessage<MeetingsServiceCountReq> | undefined, b: MeetingsServiceCountReq | PlainMessage<MeetingsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.MeetingsServiceSearchAllReq
 */
export declare class MeetingsServiceSearchAllReq extends Message<MeetingsServiceSearchAllReq> {
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
     * @generated from field: Scailo.MEETING_SORT_KEY sort_key = 5;
     */
    sortKey: MEETING_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * Limit the search space to the given status
     *
     * @generated from field: Scailo.MEETING_LIFECYCLE status = 10;
     */
    status: MEETING_LIFECYCLE;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    /**
     * Return all the meetings that the given employee is a part of
     *
     * @generated from field: uint64 employee_id = 40;
     */
    employeeId: bigint;
    /**
     * Return all the meetings that the given associate is a part of
     *
     * @generated from field: uint64 associate_id = 41;
     */
    associateId: bigint;
    /**
     * Return all the meetings that have the following activity tag as part of the actionables
     *
     * @generated from field: uint64 activity_tag_id = 42;
     */
    activityTagId: bigint;
    constructor(data?: PartialMessage<MeetingsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingsServiceSearchAllReq;
    static equals(a: MeetingsServiceSearchAllReq | PlainMessage<MeetingsServiceSearchAllReq> | undefined, b: MeetingsServiceSearchAllReq | PlainMessage<MeetingsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an actionable to a meeting
 *
 * @generated from message Scailo.MeetingsServiceActionableCreateRequest
 */
export declare class MeetingsServiceActionableCreateRequest extends Message<MeetingsServiceActionableCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the meeting ID
     *
     * @generated from field: uint64 meeting_id = 10;
     */
    meetingId: bigint;
    /**
     * The title of the actionable
     *
     * @generated from field: string title = 11;
     */
    title: string;
    /**
     * The content of the actionable
     *
     * @generated from field: string content = 12;
     */
    content: string;
    /**
     * Stores the optional activity tag ID
     *
     * @generated from field: uint64 activity_tag_id = 13;
     */
    activityTagId: bigint;
    constructor(data?: PartialMessage<MeetingsServiceActionableCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingsServiceActionableCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingsServiceActionableCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingsServiceActionableCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingsServiceActionableCreateRequest;
    static equals(a: MeetingsServiceActionableCreateRequest | PlainMessage<MeetingsServiceActionableCreateRequest> | undefined, b: MeetingsServiceActionableCreateRequest | PlainMessage<MeetingsServiceActionableCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an actionable in a meeting
 *
 * @generated from message Scailo.MeetingsServiceActionableUpdateRequest
 */
export declare class MeetingsServiceActionableUpdateRequest extends Message<MeetingsServiceActionableUpdateRequest> {
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
     * The title of the actionable
     *
     * @generated from field: string title = 11;
     */
    title: string;
    /**
     * The content of the actionable
     *
     * @generated from field: string content = 12;
     */
    content: string;
    /**
     * Stores the optional activity tag ID
     *
     * @generated from field: uint64 activity_tag_id = 13;
     */
    activityTagId: bigint;
    constructor(data?: PartialMessage<MeetingsServiceActionableUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingsServiceActionableUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingsServiceActionableUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingsServiceActionableUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingsServiceActionableUpdateRequest;
    static equals(a: MeetingsServiceActionableUpdateRequest | PlainMessage<MeetingsServiceActionableUpdateRequest> | undefined, b: MeetingsServiceActionableUpdateRequest | PlainMessage<MeetingsServiceActionableUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an actionable associated to a meeting
 *
 * @generated from message Scailo.MeetingActionable
 */
export declare class MeetingActionable extends Message<MeetingActionable> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this meeting
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the meeting ID
     *
     * @generated from field: uint64 meeting_id = 10;
     */
    meetingId: bigint;
    /**
     * The title of the actionable
     *
     * @generated from field: string title = 11;
     */
    title: string;
    /**
     * The content of the actionable
     *
     * @generated from field: string content = 12;
     */
    content: string;
    /**
     * Stores the optional activity tag ID
     *
     * @generated from field: uint64 activity_tag_id = 13;
     */
    activityTagId: bigint;
    constructor(data?: PartialMessage<MeetingActionable>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingActionable";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingActionable;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingActionable;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingActionable;
    static equals(a: MeetingActionable | PlainMessage<MeetingActionable> | undefined, b: MeetingActionable | PlainMessage<MeetingActionable> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of meeting actionables
 *
 * @generated from message Scailo.MeetingActionablesList
 */
export declare class MeetingActionablesList extends Message<MeetingActionablesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.MeetingActionable list = 1;
     */
    list: MeetingActionable[];
    constructor(data?: PartialMessage<MeetingActionablesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingActionablesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingActionablesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingActionablesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingActionablesList;
    static equals(a: MeetingActionablesList | PlainMessage<MeetingActionablesList> | undefined, b: MeetingActionablesList | PlainMessage<MeetingActionablesList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.MeetingActionableHistoryRequest
 */
export declare class MeetingActionableHistoryRequest extends Message<MeetingActionableHistoryRequest> {
    /**
     * Stores the meeting ID
     *
     * @generated from field: uint64 meeting_id = 10;
     */
    meetingId: bigint;
    /**
     * The title of the actionable
     *
     * @generated from field: string title = 11;
     */
    title: string;
    constructor(data?: PartialMessage<MeetingActionableHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingActionableHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingActionableHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingActionableHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingActionableHistoryRequest;
    static equals(a: MeetingActionableHistoryRequest | PlainMessage<MeetingActionableHistoryRequest> | undefined, b: MeetingActionableHistoryRequest | PlainMessage<MeetingActionableHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve actionables.
 *
 * @generated from message Scailo.MeetingActionablesSearchRequest
 */
export declare class MeetingActionablesSearchRequest extends Message<MeetingActionablesSearchRequest> {
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
     * @generated from field: Scailo.MEETING_ACTIONABLE_SORT_KEY sort_key = 5;
     */
    sortKey: MEETING_ACTIONABLE_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The ID of the meeting
     *
     * @generated from field: uint64 meeting_id = 20;
     */
    meetingId: bigint;
    /**
     * Stores the optional activity tag ID
     *
     * @generated from field: uint64 activity_tag_id = 23;
     */
    activityTagId: bigint;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<MeetingActionablesSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingActionablesSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingActionablesSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingActionablesSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingActionablesSearchRequest;
    static equals(a: MeetingActionablesSearchRequest | PlainMessage<MeetingActionablesSearchRequest> | undefined, b: MeetingActionablesSearchRequest | PlainMessage<MeetingActionablesSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination actionables request
 *
 * @generated from message Scailo.MeetingsServicePaginatedActionablesResponse
 */
export declare class MeetingsServicePaginatedActionablesResponse extends Message<MeetingsServicePaginatedActionablesResponse> {
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
     * @generated from field: repeated Scailo.MeetingActionable payload = 4;
     */
    payload: MeetingActionable[];
    constructor(data?: PartialMessage<MeetingsServicePaginatedActionablesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingsServicePaginatedActionablesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingsServicePaginatedActionablesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingsServicePaginatedActionablesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingsServicePaginatedActionablesResponse;
    static equals(a: MeetingsServicePaginatedActionablesResponse | PlainMessage<MeetingsServicePaginatedActionablesResponse> | undefined, b: MeetingsServicePaginatedActionablesResponse | PlainMessage<MeetingsServicePaginatedActionablesResponse> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a meeting employee
 *
 * @generated from message Scailo.MeetingsServiceEmployeeCreateRequest
 */
export declare class MeetingsServiceEmployeeCreateRequest extends Message<MeetingsServiceEmployeeCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the meeting ID
     *
     * @generated from field: uint64 meeting_id = 10;
     */
    meetingId: bigint;
    /**
     * Stores the employee ID
     *
     * @generated from field: uint64 employee_id = 11;
     */
    employeeId: bigint;
    /**
     * Stores the person's RSVP
     *
     * @generated from field: Scailo.MEETING_RSVP rsvp = 12;
     */
    rsvp: MEETING_RSVP;
    constructor(data?: PartialMessage<MeetingsServiceEmployeeCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingsServiceEmployeeCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingsServiceEmployeeCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingsServiceEmployeeCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingsServiceEmployeeCreateRequest;
    static equals(a: MeetingsServiceEmployeeCreateRequest | PlainMessage<MeetingsServiceEmployeeCreateRequest> | undefined, b: MeetingsServiceEmployeeCreateRequest | PlainMessage<MeetingsServiceEmployeeCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a meeting employee
 *
 * @generated from message Scailo.MeetingEmployee
 */
export declare class MeetingEmployee extends Message<MeetingEmployee> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this meeting
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the meeting ID
     *
     * @generated from field: uint64 meeting_id = 10;
     */
    meetingId: bigint;
    /**
     * Stores the employee ID
     *
     * @generated from field: uint64 employee_id = 11;
     */
    employeeId: bigint;
    /**
     * Stores the person's RSVP
     *
     * @generated from field: Scailo.MEETING_RSVP rsvp = 12;
     */
    rsvp: MEETING_RSVP;
    constructor(data?: PartialMessage<MeetingEmployee>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingEmployee";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingEmployee;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingEmployee;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingEmployee;
    static equals(a: MeetingEmployee | PlainMessage<MeetingEmployee> | undefined, b: MeetingEmployee | PlainMessage<MeetingEmployee> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of meeting employees
 *
 * @generated from message Scailo.MeetingEmployeesList
 */
export declare class MeetingEmployeesList extends Message<MeetingEmployeesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.MeetingEmployee list = 1;
     */
    list: MeetingEmployee[];
    constructor(data?: PartialMessage<MeetingEmployeesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingEmployeesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingEmployeesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingEmployeesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingEmployeesList;
    static equals(a: MeetingEmployeesList | PlainMessage<MeetingEmployeesList> | undefined, b: MeetingEmployeesList | PlainMessage<MeetingEmployeesList> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a meeting associate
 *
 * @generated from message Scailo.MeetingsServiceAssociateCreateRequest
 */
export declare class MeetingsServiceAssociateCreateRequest extends Message<MeetingsServiceAssociateCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the meeting ID
     *
     * @generated from field: uint64 meeting_id = 10;
     */
    meetingId: bigint;
    /**
     * Stores the associate ID
     *
     * @generated from field: uint64 associate_id = 11;
     */
    associateId: bigint;
    /**
     * Stores the person's RSVP
     *
     * @generated from field: Scailo.MEETING_RSVP rsvp = 12;
     */
    rsvp: MEETING_RSVP;
    constructor(data?: PartialMessage<MeetingsServiceAssociateCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingsServiceAssociateCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingsServiceAssociateCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingsServiceAssociateCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingsServiceAssociateCreateRequest;
    static equals(a: MeetingsServiceAssociateCreateRequest | PlainMessage<MeetingsServiceAssociateCreateRequest> | undefined, b: MeetingsServiceAssociateCreateRequest | PlainMessage<MeetingsServiceAssociateCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a meeting associate
 *
 * @generated from message Scailo.MeetingAssociate
 */
export declare class MeetingAssociate extends Message<MeetingAssociate> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this meeting
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the meeting ID
     *
     * @generated from field: uint64 meeting_id = 10;
     */
    meetingId: bigint;
    /**
     * Stores the associate ID
     *
     * @generated from field: uint64 associate_id = 11;
     */
    associateId: bigint;
    /**
     * Stores the person's RSVP
     *
     * @generated from field: Scailo.MEETING_RSVP rsvp = 12;
     */
    rsvp: MEETING_RSVP;
    constructor(data?: PartialMessage<MeetingAssociate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingAssociate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingAssociate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingAssociate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingAssociate;
    static equals(a: MeetingAssociate | PlainMessage<MeetingAssociate> | undefined, b: MeetingAssociate | PlainMessage<MeetingAssociate> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of meeting associates
 *
 * @generated from message Scailo.MeetingAssociatesList
 */
export declare class MeetingAssociatesList extends Message<MeetingAssociatesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.MeetingAssociate list = 1;
     */
    list: MeetingAssociate[];
    constructor(data?: PartialMessage<MeetingAssociatesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingAssociatesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingAssociatesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingAssociatesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingAssociatesList;
    static equals(a: MeetingAssociatesList | PlainMessage<MeetingAssociatesList> | undefined, b: MeetingAssociatesList | PlainMessage<MeetingAssociatesList> | undefined): boolean;
}
/**
 *
 * Describes the data model to handle importing of employees from the given identifier representing a team or a department
 *
 * @generated from message Scailo.MeetingsServiceImportEmployeesRequest
 */
export declare class MeetingsServiceImportEmployeesRequest extends Message<MeetingsServiceImportEmployeesRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The ID of the meeting
     *
     * @generated from field: uint64 meeting_id = 2;
     */
    meetingId: bigint;
    /**
     * The ID of the team or the department from which employees need to be added to the meeting
     *
     * @generated from field: uint64 resource_id = 3;
     */
    resourceId: bigint;
    /**
     * Stores if the existing employees in the meeting need to be deleted before adding from the source record
     *
     * @generated from field: bool delete_existing = 4;
     */
    deleteExisting: boolean;
    constructor(data?: PartialMessage<MeetingsServiceImportEmployeesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingsServiceImportEmployeesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingsServiceImportEmployeesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingsServiceImportEmployeesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingsServiceImportEmployeesRequest;
    static equals(a: MeetingsServiceImportEmployeesRequest | PlainMessage<MeetingsServiceImportEmployeesRequest> | undefined, b: MeetingsServiceImportEmployeesRequest | PlainMessage<MeetingsServiceImportEmployeesRequest> | undefined): boolean;
}
/**
 *
 * Describes the data model that sets the RSVP of either an associate or an employee
 *
 * @generated from message Scailo.MeetingsServiceSetRSVPRequest
 */
export declare class MeetingsServiceSetRSVPRequest extends Message<MeetingsServiceSetRSVPRequest> {
    /**
     * The comment entered by the user
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The UUID of the resource
     *
     * @generated from field: string uuid = 10;
     */
    uuid: string;
    /**
     * Stores the person's RSVP
     *
     * @generated from field: Scailo.MEETING_RSVP rsvp = 11;
     */
    rsvp: MEETING_RSVP;
    constructor(data?: PartialMessage<MeetingsServiceSetRSVPRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.MeetingsServiceSetRSVPRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeetingsServiceSetRSVPRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeetingsServiceSetRSVPRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeetingsServiceSetRSVPRequest;
    static equals(a: MeetingsServiceSetRSVPRequest | PlainMessage<MeetingsServiceSetRSVPRequest> | undefined, b: MeetingsServiceSetRSVPRequest | PlainMessage<MeetingsServiceSetRSVPRequest> | undefined): boolean;
}
//# sourceMappingURL=meetings.scailo_pb.d.ts.map