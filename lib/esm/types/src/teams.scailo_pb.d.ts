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
     * @description The approval state of the record
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
     * @generated from field: Scailo.TEAM_SORT_KEY sort_key = 5;
     */
    sortKey: TEAM_SORT_KEY;
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
     * @generated from field: Scailo.TEAM_SORT_KEY sort_key = 5;
     */
    sortKey: TEAM_SORT_KEY;
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
     * @generated from field: Scailo.TEAM_MEMBER_SORT_KEY sort_key = 5;
     */
    sortKey: TEAM_MEMBER_SORT_KEY;
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