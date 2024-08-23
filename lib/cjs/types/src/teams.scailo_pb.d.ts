import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.TEAM_SORT_KEY
 */
export declare enum TEAM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: TEAM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    TEAM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: TEAM_SORT_KEY_CREATED_AT = 1;
     */
    TEAM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: TEAM_SORT_KEY_MODIFIED_AT = 2;
     */
    TEAM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: TEAM_SORT_KEY_APPROVED_ON = 3;
     */
    TEAM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: TEAM_SORT_KEY_APPROVED_BY = 4;
     */
    TEAM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: TEAM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    TEAM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: TEAM_SORT_KEY_COMPLETED_ON = 6;
     */
    TEAM_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: TEAM_SORT_KEY_NAME = 10;
     */
    TEAM_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: TEAM_SORT_KEY_CODE = 11;
     */
    TEAM_SORT_KEY_CODE = 11,
    /**
     * Fetch ordered results by the leader ID
     *
     * @generated from enum value: TEAM_SORT_KEY_LEAD_USER_ID = 12;
     */
    TEAM_SORT_KEY_LEAD_USER_ID = 12
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.TEAM_MEMBER_SORT_KEY
 */
export declare enum TEAM_MEMBER_SORT_KEY {
    /**
     * Fetch invoiced results by id
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    TEAM_MEMBER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch invoiced results by the creation timestamp
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_CREATED_AT = 1;
     */
    TEAM_MEMBER_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch invoiced results by the modified timestamp
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_MODIFIED_AT = 2;
     */
    TEAM_MEMBER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch invoiced results by the approved on timestamp
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_APPROVED_ON = 3;
     */
    TEAM_MEMBER_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch invoiced results by the approved by field
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_APPROVED_BY = 4;
     */
    TEAM_MEMBER_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch invoiced results by the approver's role ID
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    TEAM_MEMBER_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch invoiced results by the team ID
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_TEAM_ID = 10;
     */
    TEAM_MEMBER_SORT_KEY_TEAM_ID = 10,
    /**
     * Fetch invoiced results by the member ID
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_MEMBER_ID = 11;
     */
    TEAM_MEMBER_SORT_KEY_MEMBER_ID = 11
}
/**
 *
 * Describes the applicable statuses of team members
 *
 * @generated from enum Scailo.TEAM_MEMBER_STATUS
 */
export declare enum TEAM_MEMBER_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: TEAM_MEMBER_STATUS_ANY_UNSPECIFIED = 0;
     */
    TEAM_MEMBER_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the team members must have been approved
     *
     * @generated from enum value: TEAM_MEMBER_STATUS_APPROVED = 1;
     */
    TEAM_MEMBER_STATUS_APPROVED = 1,
    /**
     * Denotes that the team members must be waiting for approval
     *
     * @generated from enum value: TEAM_MEMBER_STATUS_UNAPPROVED = 2;
     */
    TEAM_MEMBER_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.TeamsServiceCreateRequest
 */
export declare class TeamsServiceCreateRequest extends Message<TeamsServiceCreateRequest> {
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
     * The name of the team
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The code of the team
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the user who is the team lead of this team
     *
     * @generated from field: uint64 lead_user_id = 12;
     */
    leadUserId: bigint;
    /**
     * The description of the team
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<TeamsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TeamsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServiceCreateRequest;
    static equals(a: TeamsServiceCreateRequest | PlainMessage<TeamsServiceCreateRequest> | undefined, b: TeamsServiceCreateRequest | PlainMessage<TeamsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.TeamsServiceUpdateRequest
 */
export declare class TeamsServiceUpdateRequest extends Message<TeamsServiceUpdateRequest> {
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
     * The name of the team
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The code of the team
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the user who is the team lead of this team
     *
     * @generated from field: uint64 lead_user_id = 12;
     */
    leadUserId: bigint;
    /**
     * The description of the team
     *
     * @generated from field: string description = 13;
     */
    description: string;
    constructor(data?: PartialMessage<TeamsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TeamsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServiceUpdateRequest;
    static equals(a: TeamsServiceUpdateRequest | PlainMessage<TeamsServiceUpdateRequest> | undefined, b: TeamsServiceUpdateRequest | PlainMessage<TeamsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.Team
 */
export declare class Team extends Message<Team> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this team
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
     * The status of this team
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this team
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this team was marked as completed
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
     * The name of the team
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The code of the team
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     * The ID of the user who is the team lead of this team
     *
     * @generated from field: uint64 lead_user_id = 12;
     */
    leadUserId: bigint;
    /**
     * The description of the team
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     * The list of associated team members
     *
     * @generated from field: repeated Scailo.TeamMember list = 20;
     */
    list: TeamMember[];
    constructor(data?: PartialMessage<Team>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Team";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Team;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Team;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Team;
    static equals(a: Team | PlainMessage<Team> | undefined, b: Team | PlainMessage<Team> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add a member to a team
 *
 * @generated from message Scailo.TeamsServiceMemberCreateRequest
 */
export declare class TeamsServiceMemberCreateRequest extends Message<TeamsServiceMemberCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the ID of the team
     *
     * @generated from field: uint64 team_id = 10;
     */
    teamId: bigint;
    /**
     * The ID of the user that is part of the team
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    constructor(data?: PartialMessage<TeamsServiceMemberCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TeamsServiceMemberCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServiceMemberCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServiceMemberCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServiceMemberCreateRequest;
    static equals(a: TeamsServiceMemberCreateRequest | PlainMessage<TeamsServiceMemberCreateRequest> | undefined, b: TeamsServiceMemberCreateRequest | PlainMessage<TeamsServiceMemberCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update a member in a team
 *
 * @generated from message Scailo.TeamsServiceMemberUpdateRequest
 */
export declare class TeamsServiceMemberUpdateRequest extends Message<TeamsServiceMemberUpdateRequest> {
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
    constructor(data?: PartialMessage<TeamsServiceMemberUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TeamsServiceMemberUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServiceMemberUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServiceMemberUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServiceMemberUpdateRequest;
    static equals(a: TeamsServiceMemberUpdateRequest | PlainMessage<TeamsServiceMemberUpdateRequest> | undefined, b: TeamsServiceMemberUpdateRequest | PlainMessage<TeamsServiceMemberUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a member associated to a team
 *
 * @generated from message Scailo.TeamMember
 */
export declare class TeamMember extends Message<TeamMember> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this team
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
     * Stores the ID of the team
     *
     * @generated from field: uint64 team_id = 10;
     */
    teamId: bigint;
    /**
     * The ID of the user that is part of the team
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    constructor(data?: PartialMessage<TeamMember>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TeamMember";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamMember;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamMember;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamMember;
    static equals(a: TeamMember | PlainMessage<TeamMember> | undefined, b: TeamMember | PlainMessage<TeamMember> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of teams
 *
 * @generated from message Scailo.TeamsList
 */
export declare class TeamsList extends Message<TeamsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.Team list = 1;
     */
    list: Team[];
    constructor(data?: PartialMessage<TeamsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TeamsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsList;
    static equals(a: TeamsList | PlainMessage<TeamsList> | undefined, b: TeamsList | PlainMessage<TeamsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of team members
 *
 * @generated from message Scailo.TeamsMembersList
 */
export declare class TeamsMembersList extends Message<TeamsMembersList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.TeamMember list = 1;
     */
    list: TeamMember[];
    constructor(data?: PartialMessage<TeamsMembersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TeamsMembersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsMembersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsMembersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsMembersList;
    static equals(a: TeamsMembersList | PlainMessage<TeamsMembersList> | undefined, b: TeamsMembersList | PlainMessage<TeamsMembersList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.TeamMemberHistoryRequest
 */
export declare class TeamMemberHistoryRequest extends Message<TeamMemberHistoryRequest> {
    /**
     * Stores the ID of the team
     *
     * @generated from field: uint64 team_id = 10;
     */
    teamId: bigint;
    /**
     * The ID of the user that is part of the team
     *
     * @generated from field: uint64 user_id = 11;
     */
    userId: bigint;
    constructor(data?: PartialMessage<TeamMemberHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TeamMemberHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamMemberHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamMemberHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamMemberHistoryRequest;
    static equals(a: TeamMemberHistoryRequest | PlainMessage<TeamMemberHistoryRequest> | undefined, b: TeamMemberHistoryRequest | PlainMessage<TeamMemberHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.TeamsServicePaginationReq
 */
export declare class TeamsServicePaginationReq extends Message<TeamsServicePaginationReq> {
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
     * @generated from field: Scailo.TEAM_SORT_KEY sort_key = 5;
     */
    sortKey: TEAM_SORT_KEY;
    /**
     * The status of this team
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<TeamsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TeamsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServicePaginationReq;
    static equals(a: TeamsServicePaginationReq | PlainMessage<TeamsServicePaginationReq> | undefined, b: TeamsServicePaginationReq | PlainMessage<TeamsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.TeamsServicePaginationResponse
 */
export declare class TeamsServicePaginationResponse extends Message<TeamsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Team payload = 4;
     */
    payload: Team[];
    constructor(data?: PartialMessage<TeamsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TeamsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServicePaginationResponse;
    static equals(a: TeamsServicePaginationResponse | PlainMessage<TeamsServicePaginationResponse> | undefined, b: TeamsServicePaginationResponse | PlainMessage<TeamsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.TeamsServiceFilterReq
 */
export declare class TeamsServiceFilterReq extends Message<TeamsServiceFilterReq> {
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
     * @generated from field: Scailo.TEAM_SORT_KEY sort_key = 5;
     */
    sortKey: TEAM_SORT_KEY;
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
     * The status of this team
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
     * The name of the team
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The code of the team
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the leader
     *
     * @generated from field: uint64 lead_user_id = 22;
     */
    leadUserId: bigint;
    /**
     * The ID of the member
     *
     * @generated from field: uint64 member_user_id = 23;
     */
    memberUserId: bigint;
    constructor(data?: PartialMessage<TeamsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TeamsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServiceFilterReq;
    static equals(a: TeamsServiceFilterReq | PlainMessage<TeamsServiceFilterReq> | undefined, b: TeamsServiceFilterReq | PlainMessage<TeamsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.TeamsServiceCountReq
 */
export declare class TeamsServiceCountReq extends Message<TeamsServiceCountReq> {
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
     * The status of this team
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
     * The name of the team
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The code of the team
     *
     * @generated from field: string code = 21;
     */
    code: string;
    /**
     * The ID of the leader
     *
     * @generated from field: uint64 lead_user_id = 22;
     */
    leadUserId: bigint;
    /**
     * The ID of the member
     *
     * @generated from field: uint64 member_user_id = 23;
     */
    memberUserId: bigint;
    constructor(data?: PartialMessage<TeamsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TeamsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServiceCountReq;
    static equals(a: TeamsServiceCountReq | PlainMessage<TeamsServiceCountReq> | undefined, b: TeamsServiceCountReq | PlainMessage<TeamsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.TeamsServiceSearchAllReq
 */
export declare class TeamsServiceSearchAllReq extends Message<TeamsServiceSearchAllReq> {
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
     * @generated from field: Scailo.TEAM_SORT_KEY sort_key = 5;
     */
    sortKey: TEAM_SORT_KEY;
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
    constructor(data?: PartialMessage<TeamsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TeamsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServiceSearchAllReq;
    static equals(a: TeamsServiceSearchAllReq | PlainMessage<TeamsServiceSearchAllReq> | undefined, b: TeamsServiceSearchAllReq | PlainMessage<TeamsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved members.
 *
 * @generated from message Scailo.TeamMembersSearchRequest
 */
export declare class TeamMembersSearchRequest extends Message<TeamMembersSearchRequest> {
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
     * @generated from field: Scailo.TEAM_MEMBER_SORT_KEY sort_key = 5;
     */
    sortKey: TEAM_MEMBER_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the members
     *
     * @generated from field: Scailo.TEAM_MEMBER_STATUS status = 7;
     */
    status: TEAM_MEMBER_STATUS;
    /**
     * The start range of approved timestamp
     *
     * @generated from field: uint64 approved_on_start = 10;
     */
    approvedOnStart: bigint;
    /**
     * The end range of approved timestamp
     *
     * @generated from field: uint64 approved_on_end = 11;
     */
    approvedOnEnd: bigint;
    /**
     * The ID of the approver
     *
     * @generated from field: uint64 approved_by_user_id = 12;
     */
    approvedByUserId: bigint;
    /**
     * The role ID of the approver
     *
     * @generated from field: uint64 approver_role_id = 13;
     */
    approverRoleId: bigint;
    /**
     * The ID of the team
     *
     * @generated from field: uint64 team_id = 20;
     */
    teamId: bigint;
    /**
     * The ID of the member
     *
     * @generated from field: uint64 user_id = 21;
     */
    userId: bigint;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<TeamMembersSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TeamMembersSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamMembersSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamMembersSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamMembersSearchRequest;
    static equals(a: TeamMembersSearchRequest | PlainMessage<TeamMembersSearchRequest> | undefined, b: TeamMembersSearchRequest | PlainMessage<TeamMembersSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination members request
 *
 * @generated from message Scailo.TeamsServicePaginatedMembersResponse
 */
export declare class TeamsServicePaginatedMembersResponse extends Message<TeamsServicePaginatedMembersResponse> {
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
     * @generated from field: repeated Scailo.TeamMember payload = 4;
     */
    payload: TeamMember[];
    constructor(data?: PartialMessage<TeamsServicePaginatedMembersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.TeamsServicePaginatedMembersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TeamsServicePaginatedMembersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TeamsServicePaginatedMembersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TeamsServicePaginatedMembersResponse;
    static equals(a: TeamsServicePaginatedMembersResponse | PlainMessage<TeamsServicePaginatedMembersResponse> | undefined, b: TeamsServicePaginatedMembersResponse | PlainMessage<TeamsServicePaginatedMembersResponse> | undefined): boolean;
}
//# sourceMappingURL=teams.scailo_pb.d.ts.map