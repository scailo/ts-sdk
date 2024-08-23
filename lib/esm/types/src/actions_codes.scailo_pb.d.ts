import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.ACTION_CODE_SORT_KEY
 */
export declare enum ACTION_CODE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ACTION_CODE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_CREATED_AT = 1;
     */
    ACTION_CODE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_MODIFIED_AT = 2;
     */
    ACTION_CODE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_APPROVED_ON = 3;
     */
    ACTION_CODE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_APPROVED_BY = 4;
     */
    ACTION_CODE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ACTION_CODE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_NAME = 10;
     */
    ACTION_CODE_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: ACTION_CODE_SORT_KEY_CODE = 11;
     */
    ACTION_CODE_SORT_KEY_CODE = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.ActionsCodesServiceCreateRequest
 */
export declare class ActionsCodesServiceCreateRequest extends Message<ActionsCodesServiceCreateRequest> {
    /**
     * ActionsCodes a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * ActionsCodes any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * The name of the action code
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the action code is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The color of the text that is displayed for easy recognition
     *
     * @generated from field: string fg_color = 12;
     */
    fgColor: string;
    /**
     * The background color that is displayed for easy recognition
     *
     * @generated from field: string bg_color = 13;
     */
    bgColor: string;
    /**
     * The ID of the associated non-leaf parent action code (0, if the first action code that is being created is a leaf action code)
     *
     * @generated from field: uint64 parent_action_code_id = 16;
     */
    parentActionCodeId: bigint;
    /**
     * Stores if this is a leaf action code or a non-leaf action code
     *
     * @generated from field: bool is_leaf = 17;
     */
    isLeaf: boolean;
    /**
     * The description of the action code
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
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.ActionsCodesServiceUpdateRequest
 */
export declare class ActionsCodesServiceUpdateRequest extends Message<ActionsCodesServiceUpdateRequest> {
    /**
     * ActionsCodes any comment that the user might add during this operation
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
     * Optional boolean value that actions codes if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
     *
     * @generated from field: bool notify_users = 3;
     */
    notifyUsers: boolean;
    /**
     * The name of the action code
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The color of the text that is displayed for easy recognition
     *
     * @generated from field: string fg_color = 12;
     */
    fgColor: string;
    /**
     * The background color that is displayed for easy recognition
     *
     * @generated from field: string bg_color = 13;
     */
    bgColor: string;
    /**
     * The description of the action code
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
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.ActionCode
 */
export declare class ActionCode extends Message<ActionCode> {
    /**
     * ActionsCodes a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * ActionsCodes the metadata of this action code
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * ActionsCodes the approval metadata
     *
     * @generated from field: Scailo.ApprovalMetadata approval_metadata = 3;
     */
    approvalMetadata?: ApprovalMetadata;
    /**
     * The status of this action code
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * ActionsCodes the logs of every operation performed on this action code
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The name of the action code
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The unique code by which the action code is classified
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The color of the text that is displayed for easy recognition
     *
     * @generated from field: string fg_color = 12;
     */
    fgColor: string;
    /**
     * The background color that is displayed for easy recognition
     *
     * @generated from field: string bg_color = 13;
     */
    bgColor: string;
    /**
     * The ID of the associated non-leaf parent action code (0, if the first action code that is being created is a leaf action code)
     *
     * @generated from field: uint64 parent_action_code_id = 16;
     */
    parentActionCodeId: bigint;
    /**
     * Stores if this is a leaf action code or a non-leaf action code
     *
     * @generated from field: bool is_leaf = 17;
     */
    isLeaf: boolean;
    /**
     * The description of the action code
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
 * Describes the message consisting of the list of records
 *
 * @generated from message Scailo.ActionsCodesList
 */
export declare class ActionsCodesList extends Message<ActionsCodesList> {
    /**
     * List of records
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
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.ActionsCodesServicePaginationReq
 */
export declare class ActionsCodesServicePaginationReq extends Message<ActionsCodesServicePaginationReq> {
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
     * @generated from field: Scailo.ACTION_CODE_SORT_KEY sort_key = 5;
     */
    sortKey: ACTION_CODE_SORT_KEY;
    /**
     * The status of this action code
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
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.ActionsCodesServicePaginationResponse
 */
export declare class ActionsCodesServicePaginationResponse extends Message<ActionsCodesServicePaginationResponse> {
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
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.ActionsCodesServiceFilterReq
 */
export declare class ActionsCodesServiceFilterReq extends Message<ActionsCodesServiceFilterReq> {
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
     * @generated from field: Scailo.ACTION_CODE_SORT_KEY sort_key = 5;
     */
    sortKey: ACTION_CODE_SORT_KEY;
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
     * The status of this action code
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
     * The name of the action code
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the action code is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The color of the text that is displayed for easy recognition
     *
     * @generated from field: string fg_color = 22;
     */
    fgColor: string;
    /**
     * The background color that is displayed for easy recognition
     *
     * @generated from field: string bg_color = 23;
     */
    bgColor: string;
    /**
     * The ID of the associated non-leaf parent action code (0, if the first action code that is being created is a leaf action code)
     *
     * @generated from field: uint64 parent_action_code_id = 26;
     */
    parentActionCodeId: bigint;
    /**
     * Filter with the given leaf property
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
     * The status of this action code
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
     * The name of the action code
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code by which the action code is classified
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The color of the text that is displayed for easy recognition
     *
     * @generated from field: string fg_color = 22;
     */
    fgColor: string;
    /**
     * The background color that is displayed for easy recognition
     *
     * @generated from field: string bg_color = 23;
     */
    bgColor: string;
    /**
     * The ID of the associated non-leaf parent action code (0, if the first action code that is being created is a leaf action code)
     *
     * @generated from field: uint64 parent_action_code_id = 26;
     */
    parentActionCodeId: bigint;
    /**
     * Filter with the given leaf property
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
     * @generated from field: Scailo.ACTION_CODE_SORT_KEY sort_key = 5;
     */
    sortKey: ACTION_CODE_SORT_KEY;
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
     * The ID of the associated non-leaf parent action code (0, if the first action code that is being created is a leaf action code)
     *
     * @generated from field: uint64 parent_action_code_id = 25;
     */
    parentActionCodeId: bigint;
    /**
     * Filter with the given leaf property
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