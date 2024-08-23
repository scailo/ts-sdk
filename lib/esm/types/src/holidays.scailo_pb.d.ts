import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.HOLIDAY_SORT_KEY
 */
export declare enum HOLIDAY_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    HOLIDAY_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_CREATED_AT = 1;
     */
    HOLIDAY_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_MODIFIED_AT = 2;
     */
    HOLIDAY_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_APPROVED_ON = 3;
     */
    HOLIDAY_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_APPROVED_BY = 4;
     */
    HOLIDAY_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    HOLIDAY_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_COMPLETED_ON = 6;
     */
    HOLIDAY_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the title
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_TITLE = 10;
     */
    HOLIDAY_SORT_KEY_TITLE = 10,
    /**
     * Fetch ordered results by the description
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_DESCRIPTION = 11;
     */
    HOLIDAY_SORT_KEY_DESCRIPTION = 11,
    /**
     * Fetch ordered results by the start on timestamp
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_START_ON = 12;
     */
    HOLIDAY_SORT_KEY_START_ON = 12,
    /**
     * Fetch ordered results by the end on timestamp
     *
     * @generated from enum value: HOLIDAY_SORT_KEY_END_ON = 13;
     */
    HOLIDAY_SORT_KEY_END_ON = 13
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.HolidaysServiceCreateRequest
 */
export declare class HolidaysServiceCreateRequest extends Message<HolidaysServiceCreateRequest> {
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
     * The title of the holiday
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The description of the holiday
     *
     * @generated from field: string description = 11;
     */
    description: string;
    /**
     * The start timestamp
     *
     * @generated from field: uint64 start_on = 12;
     */
    startOn: bigint;
    /**
     * The end timestamp
     *
     * @generated from field: uint64 end_on = 13;
     */
    endOn: bigint;
    constructor(data?: PartialMessage<HolidaysServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.HolidaysServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HolidaysServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HolidaysServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HolidaysServiceCreateRequest;
    static equals(a: HolidaysServiceCreateRequest | PlainMessage<HolidaysServiceCreateRequest> | undefined, b: HolidaysServiceCreateRequest | PlainMessage<HolidaysServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.HolidaysServiceUpdateRequest
 */
export declare class HolidaysServiceUpdateRequest extends Message<HolidaysServiceUpdateRequest> {
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
     * The title of the holiday
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The description of the holiday
     *
     * @generated from field: string description = 11;
     */
    description: string;
    /**
     * The start timestamp
     *
     * @generated from field: uint64 start_on = 12;
     */
    startOn: bigint;
    /**
     * The end timestamp
     *
     * @generated from field: uint64 end_on = 13;
     */
    endOn: bigint;
    constructor(data?: PartialMessage<HolidaysServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.HolidaysServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HolidaysServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HolidaysServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HolidaysServiceUpdateRequest;
    static equals(a: HolidaysServiceUpdateRequest | PlainMessage<HolidaysServiceUpdateRequest> | undefined, b: HolidaysServiceUpdateRequest | PlainMessage<HolidaysServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Holiday
 */
export declare class Holiday extends Message<Holiday> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this shift group
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
     * The status of this shift group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this shift group
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this shift group was marked as completed
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
     * The title of the holiday
     *
     * @generated from field: string title = 10;
     */
    title: string;
    /**
     * The description of the holiday
     *
     * @generated from field: string description = 11;
     */
    description: string;
    /**
     * The start timestamp
     *
     * @generated from field: uint64 start_on = 12;
     */
    startOn: bigint;
    /**
     * The end timestamp
     *
     * @generated from field: uint64 end_on = 13;
     */
    endOn: bigint;
    /**
     * The list of associated holiday shift groups
     *
     * @generated from field: repeated Scailo.HolidayShiftGroup list = 20;
     */
    list: HolidayShiftGroup[];
    constructor(data?: PartialMessage<Holiday>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Holiday";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Holiday;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Holiday;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Holiday;
    static equals(a: Holiday | PlainMessage<Holiday> | undefined, b: Holiday | PlainMessage<Holiday> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add a shift to a shift group
 *
 * @generated from message Scailo.HolidaysServiceShiftGroupCreateRequest
 */
export declare class HolidaysServiceShiftGroupCreateRequest extends Message<HolidaysServiceShiftGroupCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the holiday ID
     *
     * @generated from field: uint64 holiday_id = 10;
     */
    holidayId: bigint;
    /**
     * Stores the shift group ID
     *
     * @generated from field: uint64 shift_group_id = 11;
     */
    shiftGroupId: bigint;
    constructor(data?: PartialMessage<HolidaysServiceShiftGroupCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.HolidaysServiceShiftGroupCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HolidaysServiceShiftGroupCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HolidaysServiceShiftGroupCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HolidaysServiceShiftGroupCreateRequest;
    static equals(a: HolidaysServiceShiftGroupCreateRequest | PlainMessage<HolidaysServiceShiftGroupCreateRequest> | undefined, b: HolidaysServiceShiftGroupCreateRequest | PlainMessage<HolidaysServiceShiftGroupCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update a shift in a shift group
 *
 * @generated from message Scailo.HolidaysServiceShiftGroupUpdateRequest
 */
export declare class HolidaysServiceShiftGroupUpdateRequest extends Message<HolidaysServiceShiftGroupUpdateRequest> {
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
     * Stores the holiday ID
     *
     * @generated from field: uint64 holiday_id = 10;
     */
    holidayId: bigint;
    /**
     * Stores the shift group ID
     *
     * @generated from field: uint64 shift_group_id = 11;
     */
    shiftGroupId: bigint;
    constructor(data?: PartialMessage<HolidaysServiceShiftGroupUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.HolidaysServiceShiftGroupUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HolidaysServiceShiftGroupUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HolidaysServiceShiftGroupUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HolidaysServiceShiftGroupUpdateRequest;
    static equals(a: HolidaysServiceShiftGroupUpdateRequest | PlainMessage<HolidaysServiceShiftGroupUpdateRequest> | undefined, b: HolidaysServiceShiftGroupUpdateRequest | PlainMessage<HolidaysServiceShiftGroupUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a shift associated to a shift group
 *
 * @generated from message Scailo.HolidayShiftGroup
 */
export declare class HolidayShiftGroup extends Message<HolidayShiftGroup> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this shift group
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
     * Denotes if this record requires approval (or has been approved)
     *
     * @generated from field: bool need_approval = 4;
     */
    needApproval: boolean;
    /**
     * Stores any comment that the user might have added during an operation
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     * Stores the holiday ID
     *
     * @generated from field: uint64 holiday_id = 10;
     */
    holidayId: bigint;
    /**
     * Stores the shift group ID
     *
     * @generated from field: uint64 shift_group_id = 11;
     */
    shiftGroupId: bigint;
    constructor(data?: PartialMessage<HolidayShiftGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.HolidayShiftGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HolidayShiftGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HolidayShiftGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HolidayShiftGroup;
    static equals(a: HolidayShiftGroup | PlainMessage<HolidayShiftGroup> | undefined, b: HolidayShiftGroup | PlainMessage<HolidayShiftGroup> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of shift groups
 *
 * @generated from message Scailo.HolidaysList
 */
export declare class HolidaysList extends Message<HolidaysList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Holiday list = 1;
     */
    list: Holiday[];
    constructor(data?: PartialMessage<HolidaysList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.HolidaysList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HolidaysList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HolidaysList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HolidaysList;
    static equals(a: HolidaysList | PlainMessage<HolidaysList> | undefined, b: HolidaysList | PlainMessage<HolidaysList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of holiday shift groups
 *
 * @generated from message Scailo.HolidaysShiftsGroupsList
 */
export declare class HolidaysShiftsGroupsList extends Message<HolidaysShiftsGroupsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.HolidayShiftGroup list = 1;
     */
    list: HolidayShiftGroup[];
    constructor(data?: PartialMessage<HolidaysShiftsGroupsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.HolidaysShiftsGroupsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HolidaysShiftsGroupsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HolidaysShiftsGroupsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HolidaysShiftsGroupsList;
    static equals(a: HolidaysShiftsGroupsList | PlainMessage<HolidaysShiftsGroupsList> | undefined, b: HolidaysShiftsGroupsList | PlainMessage<HolidaysShiftsGroupsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.HolidaysShiftsGroupsHistoryRequest
 */
export declare class HolidaysShiftsGroupsHistoryRequest extends Message<HolidaysShiftsGroupsHistoryRequest> {
    /**
     * Stores the holiday ID
     *
     * @generated from field: uint64 holiday_id = 10;
     */
    holidayId: bigint;
    /**
     * Stores the shift group ID
     *
     * @generated from field: uint64 shift_group_id = 11;
     */
    shiftGroupId: bigint;
    constructor(data?: PartialMessage<HolidaysShiftsGroupsHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.HolidaysShiftsGroupsHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HolidaysShiftsGroupsHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HolidaysShiftsGroupsHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HolidaysShiftsGroupsHistoryRequest;
    static equals(a: HolidaysShiftsGroupsHistoryRequest | PlainMessage<HolidaysShiftsGroupsHistoryRequest> | undefined, b: HolidaysShiftsGroupsHistoryRequest | PlainMessage<HolidaysShiftsGroupsHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.HolidaysServicePaginationReq
 */
export declare class HolidaysServicePaginationReq extends Message<HolidaysServicePaginationReq> {
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
     * @generated from field: Scailo.HOLIDAY_SORT_KEY sort_key = 5;
     */
    sortKey: HOLIDAY_SORT_KEY;
    /**
     * The status of this shift group
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<HolidaysServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.HolidaysServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HolidaysServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HolidaysServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HolidaysServicePaginationReq;
    static equals(a: HolidaysServicePaginationReq | PlainMessage<HolidaysServicePaginationReq> | undefined, b: HolidaysServicePaginationReq | PlainMessage<HolidaysServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.HolidaysServicePaginationResponse
 */
export declare class HolidaysServicePaginationResponse extends Message<HolidaysServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Holiday payload = 4;
     */
    payload: Holiday[];
    constructor(data?: PartialMessage<HolidaysServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.HolidaysServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HolidaysServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HolidaysServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HolidaysServicePaginationResponse;
    static equals(a: HolidaysServicePaginationResponse | PlainMessage<HolidaysServicePaginationResponse> | undefined, b: HolidaysServicePaginationResponse | PlainMessage<HolidaysServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.HolidaysServiceFilterReq
 */
export declare class HolidaysServiceFilterReq extends Message<HolidaysServiceFilterReq> {
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
     * @generated from field: Scailo.HOLIDAY_SORT_KEY sort_key = 5;
     */
    sortKey: HOLIDAY_SORT_KEY;
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
     * The status of this shift group
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
     * The title of the holiday
     *
     * @generated from field: string title = 20;
     */
    title: string;
    /**
     * The description of the holiday
     *
     * @generated from field: string description = 21;
     */
    description: string;
    /**
     * The start range of start timestamp
     *
     * @generated from field: uint64 start_on_start = 22;
     */
    startOnStart: bigint;
    /**
     * The end range of start timestamp
     *
     * @generated from field: uint64 start_on_end = 23;
     */
    startOnEnd: bigint;
    /**
     * The start range of end timestamp
     *
     * @generated from field: uint64 end_on_start = 24;
     */
    endOnStart: bigint;
    /**
     * The end range of end timestamp
     *
     * @generated from field: uint64 end_on_end = 25;
     */
    endOnEnd: bigint;
    constructor(data?: PartialMessage<HolidaysServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.HolidaysServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HolidaysServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HolidaysServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HolidaysServiceFilterReq;
    static equals(a: HolidaysServiceFilterReq | PlainMessage<HolidaysServiceFilterReq> | undefined, b: HolidaysServiceFilterReq | PlainMessage<HolidaysServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.HolidaysServiceCountReq
 */
export declare class HolidaysServiceCountReq extends Message<HolidaysServiceCountReq> {
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
     * The status of this shift group
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
     * The title of the holiday
     *
     * @generated from field: string title = 20;
     */
    title: string;
    /**
     * The description of the holiday
     *
     * @generated from field: string description = 21;
     */
    description: string;
    /**
     * The start range of start timestamp
     *
     * @generated from field: uint64 start_on_start = 22;
     */
    startOnStart: bigint;
    /**
     * The end range of start timestamp
     *
     * @generated from field: uint64 start_on_end = 23;
     */
    startOnEnd: bigint;
    /**
     * The start range of end timestamp
     *
     * @generated from field: uint64 end_on_start = 24;
     */
    endOnStart: bigint;
    /**
     * The end range of end timestamp
     *
     * @generated from field: uint64 end_on_end = 25;
     */
    endOnEnd: bigint;
    constructor(data?: PartialMessage<HolidaysServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.HolidaysServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HolidaysServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HolidaysServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HolidaysServiceCountReq;
    static equals(a: HolidaysServiceCountReq | PlainMessage<HolidaysServiceCountReq> | undefined, b: HolidaysServiceCountReq | PlainMessage<HolidaysServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.HolidaysServiceSearchAllReq
 */
export declare class HolidaysServiceSearchAllReq extends Message<HolidaysServiceSearchAllReq> {
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
     * @generated from field: Scailo.HOLIDAY_SORT_KEY sort_key = 5;
     */
    sortKey: HOLIDAY_SORT_KEY;
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
    constructor(data?: PartialMessage<HolidaysServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.HolidaysServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HolidaysServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HolidaysServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HolidaysServiceSearchAllReq;
    static equals(a: HolidaysServiceSearchAllReq | PlainMessage<HolidaysServiceSearchAllReq> | undefined, b: HolidaysServiceSearchAllReq | PlainMessage<HolidaysServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload to query if the given timestamp is a holiday for the given shift group ID
 *
 * @generated from message Scailo.HolidaysServiceViewHolidaysOnTimestampRequest
 */
export declare class HolidaysServiceViewHolidaysOnTimestampRequest extends Message<HolidaysServiceViewHolidaysOnTimestampRequest> {
    /**
     * Stores the timestamp
     *
     * @generated from field: uint64 timestamp = 10;
     */
    timestamp: bigint;
    /**
     * Stores the shift group ID
     *
     * @generated from field: uint64 shift_group_id = 11;
     */
    shiftGroupId: bigint;
    constructor(data?: PartialMessage<HolidaysServiceViewHolidaysOnTimestampRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.HolidaysServiceViewHolidaysOnTimestampRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HolidaysServiceViewHolidaysOnTimestampRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HolidaysServiceViewHolidaysOnTimestampRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HolidaysServiceViewHolidaysOnTimestampRequest;
    static equals(a: HolidaysServiceViewHolidaysOnTimestampRequest | PlainMessage<HolidaysServiceViewHolidaysOnTimestampRequest> | undefined, b: HolidaysServiceViewHolidaysOnTimestampRequest | PlainMessage<HolidaysServiceViewHolidaysOnTimestampRequest> | undefined): boolean;
}
//# sourceMappingURL=holidays.scailo_pb.d.ts.map