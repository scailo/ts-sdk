import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of fields available for sorting team search results.
 *
 * @generated from enum Scailo.TEAM_SORT_KEY
 */
export declare enum TEAM_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: TEAM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    TEAM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: TEAM_SORT_KEY_CREATED_AT = 1;
     */
    TEAM_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: TEAM_SORT_KEY_MODIFIED_AT = 2;
     */
    TEAM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: TEAM_SORT_KEY_APPROVED_ON = 3;
     */
    TEAM_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: TEAM_SORT_KEY_APPROVED_BY = 4;
     */
    TEAM_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: TEAM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    TEAM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the timestamp of record completion.
     *
     * @generated from enum value: TEAM_SORT_KEY_COMPLETED_ON = 6;
     */
    TEAM_SORT_KEY_COMPLETED_ON = 6,
    /**
     * @description Sort alphabetically by the user-provided name.
     *
     * @generated from enum value: TEAM_SORT_KEY_NAME = 10;
     */
    TEAM_SORT_KEY_NAME = 10,
    /**
     * @description Sort alphabetically by the user-provided code.
     *
     * @generated from enum value: TEAM_SORT_KEY_CODE = 11;
     */
    TEAM_SORT_KEY_CODE = 11,
    /**
     * @description Sort alphabetically by the ID of the leader.
     *
     * @generated from enum value: TEAM_SORT_KEY_LEAD_USER_ID = 12;
     */
    TEAM_SORT_KEY_LEAD_USER_ID = 12
}
/**
 *
 * Enumeration of fields available for sorting team member search results.
 *
 * @generated from enum Scailo.TEAM_MEMBER_SORT_KEY
 */
export declare enum TEAM_MEMBER_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    TEAM_MEMBER_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_CREATED_AT = 1;
     */
    TEAM_MEMBER_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_MODIFIED_AT = 2;
     */
    TEAM_MEMBER_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_APPROVED_ON = 3;
     */
    TEAM_MEMBER_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_APPROVED_BY = 4;
     */
    TEAM_MEMBER_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    TEAM_MEMBER_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the system ID of the associated team.
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_TEAM_ID = 10;
     */
    TEAM_MEMBER_SORT_KEY_TEAM_ID = 10,
    /**
     * @description Sort by the system ID of the associated member.
     *
     * @generated from enum value: TEAM_MEMBER_SORT_KEY_MEMBER_ID = 11;
     */
    TEAM_MEMBER_SORT_KEY_MEMBER_ID = 11
}
/**
 *
 * Enum defining the applicable lifecycle and verification statuses for team members.
 *
 * @generated from enum Scailo.TEAM_MEMBER_STATUS
 */
export declare enum TEAM_MEMBER_STATUS {
    /**
     * @description Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.
     *
     * @generated from enum value: TEAM_MEMBER_STATUS_ANY_UNSPECIFIED = 0;
     */
    TEAM_MEMBER_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * @description Denotes that the team member association has passed verification and is actively approved.
     *
     * @generated from enum value: TEAM_MEMBER_STATUS_APPROVED = 1;
     */
    TEAM_MEMBER_STATUS_APPROVED = 1,
    /**
     * @description Denotes that the team member association is pending review and waiting for administrative approval.
     *
     * @generated from enum value: TEAM_MEMBER_STATUS_UNAPPROVED = 2;
     */
    TEAM_MEMBER_STATUS_UNAPPROVED = 2
}
/**
 *
 * Request message for defining and creating a new Team profile within the organizational structure.
 * This record tracks critical group metadata, unique internal alphanumeric identifiers,
 * operational descriptions, and leadership assignments.
 *
 * **Note:** This is the primary entry point for HR or Organization Administrators
 * to register new functional groups, squads, or departments to facilitate access control,
 * task assignment, and workflow routing.
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
     * @description The primary, human-readable name of the team.
     *
     * @example "Core Backend Engineering"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @mandatory
     *
     * @description The unique alphanumeric code used to internally classify and represent the team.
     *
     * @example "ENG-CORE-01"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the user designated as the team lead or manager for this group.
     *
     * @example 402
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 lead_user_id = 12;
     */
    leadUserId: bigint;
    /**
     *
     * @optional
     *
     * @description A detailed text description outlining the purpose, responsibilities, and scope of the team.
     *
     * @example "Responsible for maintaining backend microservices and core API infrastructure."
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string description = 13;
     */
    description?: string;
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
 * Request message for updating an existing Team record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the name, code, lead user id, and description
 * of an established Team.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.TeamsServiceUpdateRequest
 */
export declare class TeamsServiceUpdateRequest extends Message<TeamsServiceUpdateRequest> {
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
     * @description The primary, human-readable name of the team.
     *
     * @example "Core Backend Engineering"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string name = 10;
     */
    name?: string;
    /**
     *
     * @optional
     *
     * @description The unique alphanumeric code used to internally classify and represent the team.
     *
     * @example "ENG-CORE-01"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 11;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the user designated as the team lead or manager for this group.
     *
     * @example 402
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 lead_user_id = 12;
     */
    leadUserId?: bigint;
    /**
     *
     * @optional
     *
     * @description A detailed text description outlining the purpose, responsibilities, and scope of the team.
     *
     * @example "Responsible for maintaining backend microservices and core API infrastructure."
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string description = 13;
     */
    description?: string;
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
 * Represents a full Team within the system.
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
     *
     * @description The primary, human-readable name of the team.
     *
     * @example "Core Backend Engineering"
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @description The unique alphanumeric code used to internally classify and represent the team.
     *
     * @example "ENG-CORE-01"
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     *
     * @description The unique internal identifier of the user designated as the team lead or manager for this group.
     *
     * @example 402
     *
     * @generated from field: uint64 lead_user_id = 12;
     */
    leadUserId: bigint;
    /**
     *
     * @description A detailed text description outlining the purpose, responsibilities, and scope of the team.
     *
     * @example "Responsible for maintaining backend microservices and core API infrastructure."
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     *
     * @description The aggregated list of active member associations mapped to this team.
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
 * Request message for assigning and associating a user to an existing team.
 * This instructs the system to formally bind a personnel record to a functional group,
 * granting them any relevant downstream access or routing capabilities.
 *
 * @generated from message Scailo.TeamsServiceMemberCreateRequest
 */
export declare class TeamsServiceMemberCreateRequest extends Message<TeamsServiceMemberCreateRequest> {
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
     * @description The unique internal identifier of the target team to which the user will be added.
     *
     * @example 105
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 team_id = 10;
     */
    teamId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the user being mapped to the team.
     *
     * @example 420
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
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
 * Request message for updating the metadata of an existing team member association.
 *
 * @generated from message Scailo.TeamsServiceMemberUpdateRequest
 */
export declare class TeamsServiceMemberUpdateRequest extends Message<TeamsServiceMemberUpdateRequest> {
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
 * Represents the finalized association between a user and a team.
 * Encapsulates the core mapping along with standard lifecycle and compliance metadata.
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
     * @description A boolean flag indicating whether this specific record requires further administrative approval.
     *
     * @example false
     *
     * @format Boolean true or false.
     *
     * @generated from field: bool need_approval = 4;
     */
    needApproval: boolean;
    /**
     *
     * @description Audit log comment or justification captured during the last modification or transactional operation.
     *
     * @example "This is a comment for audit purposes."
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     *
     * @description The unique internal identifier of the target team.
     *
     * @example 105
     *
     * @generated from field: uint64 team_id = 10;
     */
    teamId: bigint;
    /**
     *
     * @description The unique internal identifier of the user that is mapped to the team.
     *
     * @example 420
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
 * Container message for a collection of Team records.
 *
 * @generated from message Scailo.TeamsList
 */
export declare class TeamsList extends Message<TeamsList> {
    /**
     * @description An array of Team records.
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
 * Represents a collection payload encapsulating multiple Team Member associations.
 * Used primarily to return the active personnel roster of a specific team.
 *
 * @generated from message Scailo.TeamsMembersList
 */
export declare class TeamsMembersList extends Message<TeamsMembersList> {
    /**
     * @description An array of Team Member records.
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
 * Request payload containing the parameter constraints required to retrieve the historical
 * audit trail and lifecycle changes of a specific team member association.
 *
 * @generated from message Scailo.TeamMemberHistoryRequest
 */
export declare class TeamMemberHistoryRequest extends Message<TeamMemberHistoryRequest> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target team associated with the historical record.
     *
     * @example 105
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 team_id = 10;
     */
    teamId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the user associated with the historical record.
     *
     * @example 420
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
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
 * Pagination request for retrieving slices of Team records.
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
     * @generated from field: optional Scailo.TEAM_SORT_KEY sort_key = 5;
     */
    sortKey?: TEAM_SORT_KEY;
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
 * Response message for paginated queries, including total counts for UI elements.
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
 * Advanced filter request for searching and paginating teams using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
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
     * @generated from field: optional Scailo.TEAM_SORT_KEY sort_key = 5;
     */
    sortKey?: TEAM_SORT_KEY;
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
     * @description The primary, human-readable name of the team.
     *
     * @example "Core Backend Engineering"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string name = 20;
     */
    name?: string;
    /**
     *
     * @optional
     *
     * @description The unique alphanumeric code used to internally classify and represent the team.
     *
     * @example "ENG-CORE-01"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 21;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the user designated as the team lead or manager for this group.
     *
     * @example 402
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 lead_user_id = 22;
     */
    leadUserId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the user designated as the team member that is part of this group.
     *
     * @example 402
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 member_user_id = 23;
     */
    memberUserId?: bigint;
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
 * Target filter request for counting team records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
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
     * @description The primary, human-readable name of the team.
     *
     * @example "Core Backend Engineering"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string name = 20;
     */
    name?: string;
    /**
     *
     * @optional
     *
     * @description The unique alphanumeric code used to internally classify and represent the team.
     *
     * @example "ENG-CORE-01"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 21;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the user designated as the team lead or manager for this group.
     *
     * @example 402
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 lead_user_id = 22;
     */
    leadUserId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the user designated as the team member that is part of this group.
     *
     * @example 402
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 member_user_id = 23;
     */
    memberUserId?: bigint;
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
 * Broad-spectrum search and lookup request for locating and paginating teams via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
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
     * @generated from field: optional Scailo.TEAM_SORT_KEY sort_key = 5;
     */
    sortKey?: TEAM_SORT_KEY;
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
 * Request payload structure used to search and filter Team Member records.
 * Supports pagination controls, tenancy isolation, status grouping, and text-based matching.
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
     * @generated from field: optional Scailo.TEAM_MEMBER_SORT_KEY sort_key = 5;
     */
    sortKey?: TEAM_MEMBER_SORT_KEY;
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
     * @description Filter records by their verification lifecycle state (e.g., Approved, Unapproved). Defaults to unspecified/any.
     *
     * @example TEAM_MEMBER_STATUS_APPROVED
     *
     * @generated from field: optional Scailo.TEAM_MEMBER_STATUS status = 7;
     */
    status?: TEAM_MEMBER_STATUS;
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
     * @generated from field: optional uint64 approved_on_start = 10;
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
     * @generated from field: optional uint64 approved_on_end = 11;
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
     * @generated from field: optional uint64 approved_by_user_id = 12;
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
     * @generated from field: optional uint64 approver_role_id = 13;
     */
    approverRoleId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the target team to which the user will be added.
     *
     * @example 105
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 team_id = 20;
     */
    teamId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the user being mapped to the team.
     *
     * @example 420
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 user_id = 21;
     */
    userId?: bigint;
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
     * @generated from field: optional string search_key = 40;
     */
    searchKey?: string;
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
 * Paginated response packet containing a subset of Team Member records.
 * Includes complete operational state parameters for rendering frontend data grids and tables.
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