import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of fields available for sorting role search results.
 *
 * @generated from enum Scailo.ROLE_SORT_KEY
 */
export declare enum ROLE_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: ROLE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ROLE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: ROLE_SORT_KEY_CREATED_AT = 1;
     */
    ROLE_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: ROLE_SORT_KEY_MODIFIED_AT = 2;
     */
    ROLE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: ROLE_SORT_KEY_APPROVED_ON = 3;
     */
    ROLE_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: ROLE_SORT_KEY_APPROVED_BY = 4;
     */
    ROLE_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: ROLE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    ROLE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the timestamp of record completion.
     *
     * @generated from enum value: ROLE_SORT_KEY_COMPLETED_ON = 6;
     */
    ROLE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * @description Sort alphabetically by the user-provided name.
     *
     * @generated from enum value: ROLE_SORT_KEY_NAME = 10;
     */
    ROLE_SORT_KEY_NAME = 10,
    /**
     * @description Sort alphabetically by the user-provided code.
     *
     * @generated from enum value: ROLE_SORT_KEY_CODE = 11;
     */
    ROLE_SORT_KEY_CODE = 11
}
/**
 *
 * Request message for creating and defining a new security Role.
 * This record maps RBAC structures, descriptive identifiers, specialized system access flags
 * (Vault storage restrictions and network gateway protocols), and granular menu privilege definitions.
 *
 * **Note:** This is the primary entry point for Information Security, HR, and Admins to
 * construct permission tiers, enforce least-privilege principles, and provision access profiles.
 *
 * @generated from message Scailo.RolesServiceCreateRequest
 */
export declare class RolesServiceCreateRequest extends Message<RolesServiceCreateRequest> {
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
     * @mandatory
     *
     * @description The official, displayable name of the security role.
     *
     * @example "Senior Document Auditor"
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
     * @description The unique code or system-level alphanumeric token used to evaluate permissions programmatically within backend middleware.
     *
     * @example "ROLE_SR_DOC_AUDITOR"
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
     * @optional
     *
     * @description Clarifying scope of responsibilities, clearance level, or business context associated with this security profile.
     *
     * @example "Grants full read access to client contracts and verification documents while enforcing strict root storage write blocks."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string description = 12;
     */
    description?: string;
    /**
     *
     * @optional
     *
     * @description Flag determining whether accounts possessing this role are permitted to access the secure Vault file system.
     *
     * @example true
     *
     * @format Boolean value (`true` or `false`). Defaults to false if unassigned.
     *
     * @generated from field: optional bool vault_access = 13;
     */
    vaultAccess?: boolean;
    /**
     *
     * @optional
     *
     * @description Flag determining whether this role is authorized to perform structural operations (such as writes, modifications, or deletions) within the primary root folder of the Vault file system.
     *
     * @example false
     *
     * @format Boolean value (`true` or `false`). Defaults to false if unassigned.
     *
     * @generated from field: optional bool vault_root_folder_interactions = 14;
     */
    vaultRootFolderInteractions?: boolean;
    /**
     *
     * @optional
     *
     * @description Flag determining whether the role can execute incoming operations over unencrypted HTTP endpoints or within a designated local perimeter network.
     *
     * @example false
     *
     * @format Boolean value (`true` or `false`). Defaults to false if unassigned.
     *
     * @generated from field: optional bool http_access = 15;
     */
    httpAccess?: boolean;
    /**
     *
     * @optional
     *
     * @description Flag determining whether the role can execute operations over encrypted HTTPS gateways or through public-facing fully qualified domain names (FQDNs).
     *
     * @example true
     *
     * @format Boolean value (`true` or `false`). Defaults to false if unassigned.
     *
     * @generated from field: optional bool https_access = 16;
     */
    httpsAccess?: boolean;
    /**
     *
     * @optional
     *
     * @description A collection mapping explicit menu, routing, or function view identifiers to the role's structural access tree.
     *
     * @example []
     *
     * @format An array/list of RolesServiceAccessCreateAndUpdateRequest structural entries. Can be empty if no initial menu maps are assigned.
     *
     * @generated from field: repeated Scailo.RolesServiceAccessCreateAndUpdateRequest access_list = 20;
     */
    accessList: RolesServiceAccessCreateAndUpdateRequest[];
    constructor(data?: PartialMessage<RolesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.RolesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceCreateRequest;
    static equals(a: RolesServiceCreateRequest | PlainMessage<RolesServiceCreateRequest> | undefined, b: RolesServiceCreateRequest | PlainMessage<RolesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for updating an existing Role record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the name, code, description, vault access, vault root folder interactions, http access, and https access
 * of an established Role.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.RolesServiceUpdateRequest
 */
export declare class RolesServiceUpdateRequest extends Message<RolesServiceUpdateRequest> {
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
     * @description The official, displayable name of the security role.
     *
     * @example "Senior Document Auditor"
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
     * @description The unique code or system-level alphanumeric token used to evaluate permissions programmatically within backend middleware.
     *
     * @example "ROLE_SR_DOC_AUDITOR"
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
     * @description Clarifying scope of responsibilities, clearance level, or business context associated with this security profile.
     *
     * @example "Grants full read access to client contracts and verification documents while enforcing strict root storage write blocks."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string description = 12;
     */
    description?: string;
    /**
     *
     * @optional
     *
     * @description Flag determining whether accounts possessing this role are permitted to access the secure Vault file system.
     *
     * @example true
     *
     * @format Boolean value (`true` or `false`). Defaults to false if unassigned.
     *
     * @generated from field: optional bool vault_access = 13;
     */
    vaultAccess?: boolean;
    /**
     *
     * @optional
     *
     * @description Flag determining whether this role is authorized to perform structural operations (such as writes, modifications, or deletions) within the primary root folder of the Vault file system.
     *
     * @example false
     *
     * @format Boolean value (`true` or `false`). Defaults to false if unassigned.
     *
     * @generated from field: optional bool vault_root_folder_interactions = 14;
     */
    vaultRootFolderInteractions?: boolean;
    /**
     *
     * @optional
     *
     * @description Flag determining whether the role can execute incoming operations over unencrypted HTTP endpoints or within a designated local perimeter network.
     *
     * @example false
     *
     * @format Boolean value (`true` or `false`). Defaults to false if unassigned.
     *
     * @generated from field: optional bool http_access = 15;
     */
    httpAccess?: boolean;
    /**
     *
     * @optional
     *
     * @description Flag determining whether the role can execute operations over encrypted HTTPS gateways or through public-facing fully qualified domain names (FQDNs).
     *
     * @example true
     *
     * @format Boolean value (`true` or `false`). Defaults to false if unassigned.
     *
     * @generated from field: optional bool https_access = 16;
     */
    httpsAccess?: boolean;
    /**
     *
     * @optional
     *
     * @description A collection mapping explicit menu, routing, or function view identifiers to the role's structural access tree.
     *
     * @example []
     *
     * @format An array/list of RolesServiceAccessCreateAndUpdateRequest structural entries. Can be empty if no initial menu maps are assigned.
     *
     * @generated from field: repeated Scailo.RolesServiceAccessCreateAndUpdateRequest access_list = 20;
     */
    accessList: RolesServiceAccessCreateAndUpdateRequest[];
    constructor(data?: PartialMessage<RolesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.RolesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceUpdateRequest;
    static equals(a: RolesServiceUpdateRequest | PlainMessage<RolesServiceUpdateRequest> | undefined, b: RolesServiceUpdateRequest | PlainMessage<RolesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents a full Role within the system.
 *
 * @generated from message Scailo.Role
 */
export declare class Role extends Message<Role> {
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
     * @description The official, displayable name of the security role.
     *
     * @example "Senior Document Auditor"
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @description The unique code or system-level alphanumeric token used to evaluate permissions programmatically within backend middleware.
     *
     * @example "ROLE_SR_DOC_AUDITOR"
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     *
     * @description Clarifying scope of responsibilities, clearance level, or business context associated with this security profile.
     *
     * @example "Grants full read access to client contracts and verification documents while enforcing strict root storage write blocks."
     *
     * @generated from field: string description = 12;
     */
    description: string;
    /**
     *
     * @description Flag determining whether accounts possessing this role are permitted to access the secure Vault file system.
     *
     * @example true
     *
     * @generated from field: bool vault_access = 13;
     */
    vaultAccess: boolean;
    /**
     *
     * @description Flag determining whether this role is authorized to perform structural operations (such as writes, modifications, or deletions) within the primary root folder of the Vault file system.
     *
     * @example false
     *
     * @generated from field: bool vault_root_folder_interactions = 14;
     */
    vaultRootFolderInteractions: boolean;
    /**
     *
     * @description Flag determining whether the role can execute incoming operations over unencrypted HTTP endpoints or within a designated local perimeter network.
     *
     * @example false
     *
     * @generated from field: bool http_access = 15;
     */
    httpAccess: boolean;
    /**
     *
     * @description Flag determining whether the role can execute operations over encrypted HTTPS gateways or through public-facing fully qualified domain names (FQDNs).
     *
     * @example true
     *
     * @generated from field: bool https_access = 16;
     */
    httpsAccess: boolean;
    /**
     *
     * @description A collection mapping explicit menu, routing, or function view identifiers to the role's structural access tree.
     *
     * @example []
     *
     * @generated from field: repeated Scailo.RoleAccess access_list = 20;
     */
    accessList: RoleAccess[];
    constructor(data?: PartialMessage<Role>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Role";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Role;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Role;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Role;
    static equals(a: Role | PlainMessage<Role> | undefined, b: Role | PlainMessage<Role> | undefined): boolean;
}
/**
 *
 * Input structure used during the creation or modification of individual role access privileges.
 * This maps explicit system modules or UI components directly to a lease-privilege accessibility state.
 *
 * @generated from message Scailo.RolesServiceAccessCreateAndUpdateRequest
 */
export declare class RolesServiceAccessCreateAndUpdateRequest extends Message<RolesServiceAccessCreateAndUpdateRequest> {
    /**
     *
     * @mandatory
     *
     * @description The globally unique alphanumeric identifier or standard internal code assigned to a system menu or routing module.
     *
     * @example "MENU_COMPLIANCE_AUDIT"
     *
     * @regex ^[0-9A-Za-z_-]+$
     *
     * @format Alphanumeric characters, hyphens, and underscores only. Spaces are strictly prohibited.
     *
     * @generated from field: string menu_uid = 11;
     */
    menuUid: string;
    /**
     *
     * @mandatory
     *
     * @description Flag determining whether accounts assigned to the parent role are granted access to interact with this menu module.
     *
     * @example true
     *
     * @format Boolean value (`true` or `false`).
     *
     * @generated from field: bool is_accessible = 12;
     */
    isAccessible: boolean;
    constructor(data?: PartialMessage<RolesServiceAccessCreateAndUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.RolesServiceAccessCreateAndUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceAccessCreateAndUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceAccessCreateAndUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceAccessCreateAndUpdateRequest;
    static equals(a: RolesServiceAccessCreateAndUpdateRequest | PlainMessage<RolesServiceAccessCreateAndUpdateRequest> | undefined, b: RolesServiceAccessCreateAndUpdateRequest | PlainMessage<RolesServiceAccessCreateAndUpdateRequest> | undefined): boolean;
}
/**
 *
 * Explanatory metadata container describing a system access point or application view component.
 * This structure aggregates human-readable attributes to render authorization trees inside administrative dashboards.
 *
 * @generated from message Scailo.RolesServiceAccessDefinition
 */
export declare class RolesServiceAccessDefinition extends Message<RolesServiceAccessDefinition> {
    /**
     *
     * @description The unique system-level alphanumeric token or internal code representing the application component.
     *
     * @example "MENU_FINANCE_LEDGER"
     *
     * @generated from field: string menu_uid = 11;
     */
    menuUid: string;
    /**
     *
     * @description The human-readable or display-friendly name of the module or layout segment as seen on UI components.
     *
     * @example "General Ledger Settings"
     *
     * @generated from field: string menu_name = 12;
     */
    menuName: string;
    /**
     *
     * @description Functional description summarizing the feature set, workflows, and operations tied to this interface component.
     *
     * @example "Provides controls to add, verify, and hierarchy-map internal corporate ledger accounts."
     *
     * @generated from field: string menu_description = 13;
     */
    menuDescription: string;
    constructor(data?: PartialMessage<RolesServiceAccessDefinition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.RolesServiceAccessDefinition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceAccessDefinition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceAccessDefinition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceAccessDefinition;
    static equals(a: RolesServiceAccessDefinition | PlainMessage<RolesServiceAccessDefinition> | undefined, b: RolesServiceAccessDefinition | PlainMessage<RolesServiceAccessDefinition> | undefined): boolean;
}
/**
 *
 * Represents the comprehensive operational state of a single Role Access entry within the platform.
 * This message encapsulates organization tenancy mapping, complete system audit trails, approval state flags,
 * and the specific security permissions associated with a targeted system feature.
 *
 * @generated from message Scailo.RoleAccess
 */
export declare class RoleAccess extends Message<RoleAccess> {
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
     * @description The unique internal sequence identifier of the parent security Role to which this access block is bound.
     *
     * @example 1024
     *
     * @generated from field: uint64 role_id = 10;
     */
    roleId: bigint;
    /**
     *
     * @description The unique alphanumeric identifier or code corresponding to the targeted system menu module.
     *
     * @example "MENU_COMPLIANCE_AUDIT"
     *
     * @generated from field: string menu_uid = 11;
     */
    menuUid: string;
    /**
     *
     * @description Active authorization flag indicating if the related role profile can access this system view.
     *
     * @generated from field: bool is_accessible = 12;
     */
    isAccessible: boolean;
    constructor(data?: PartialMessage<RoleAccess>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.RoleAccess";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoleAccess;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoleAccess;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoleAccess;
    static equals(a: RoleAccess | PlainMessage<RoleAccess> | undefined, b: RoleAccess | PlainMessage<RoleAccess> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Role records.
 *
 * @generated from message Scailo.RolesList
 */
export declare class RolesList extends Message<RolesList> {
    /**
     * @description An array of Role records.
     *
     * @generated from field: repeated Scailo.Role list = 1;
     */
    list: Role[];
    constructor(data?: PartialMessage<RolesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.RolesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesList;
    static equals(a: RolesList | PlainMessage<RolesList> | undefined, b: RolesList | PlainMessage<RolesList> | undefined): boolean;
}
/**
 *
 * Pagination request for retrieving slices of Role records.
 *
 * @generated from message Scailo.RolesServicePaginationReq
 */
export declare class RolesServicePaginationReq extends Message<RolesServicePaginationReq> {
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
     * @generated from field: optional Scailo.ROLE_SORT_KEY sort_key = 5;
     */
    sortKey?: ROLE_SORT_KEY;
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
    constructor(data?: PartialMessage<RolesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.RolesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServicePaginationReq;
    static equals(a: RolesServicePaginationReq | PlainMessage<RolesServicePaginationReq> | undefined, b: RolesServicePaginationReq | PlainMessage<RolesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.RolesServicePaginationResponse
 */
export declare class RolesServicePaginationResponse extends Message<RolesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Role payload = 4;
     */
    payload: Role[];
    constructor(data?: PartialMessage<RolesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.RolesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServicePaginationResponse;
    static equals(a: RolesServicePaginationResponse | PlainMessage<RolesServicePaginationResponse> | undefined, b: RolesServicePaginationResponse | PlainMessage<RolesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Advanced filter request for searching and paginating roles using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.RolesServiceFilterReq
 */
export declare class RolesServiceFilterReq extends Message<RolesServiceFilterReq> {
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
     * @generated from field: optional Scailo.ROLE_SORT_KEY sort_key = 5;
     */
    sortKey?: ROLE_SORT_KEY;
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
     * @description The official, displayable name of the security role.
     *
     * @example "Senior Document Auditor"
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
     * @description The unique code or system-level alphanumeric token used to evaluate permissions programmatically within backend middleware.
     *
     * @example "ROLE_SR_DOC_AUDITOR"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 21;
     */
    code?: string;
    constructor(data?: PartialMessage<RolesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.RolesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceFilterReq;
    static equals(a: RolesServiceFilterReq | PlainMessage<RolesServiceFilterReq> | undefined, b: RolesServiceFilterReq | PlainMessage<RolesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Target filter request for counting role records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.RolesServiceCountReq
 */
export declare class RolesServiceCountReq extends Message<RolesServiceCountReq> {
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
     * @description The official, displayable name of the security role.
     *
     * @example "Senior Document Auditor"
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
     * @description The unique code or system-level alphanumeric token used to evaluate permissions programmatically within backend middleware.
     *
     * @example "ROLE_SR_DOC_AUDITOR"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 21;
     */
    code?: string;
    constructor(data?: PartialMessage<RolesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.RolesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceCountReq;
    static equals(a: RolesServiceCountReq | PlainMessage<RolesServiceCountReq> | undefined, b: RolesServiceCountReq | PlainMessage<RolesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Broad-spectrum search and lookup request for locating and paginating roles via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.RolesServiceSearchAllReq
 */
export declare class RolesServiceSearchAllReq extends Message<RolesServiceSearchAllReq> {
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
     * @generated from field: optional Scailo.ROLE_SORT_KEY sort_key = 5;
     */
    sortKey?: ROLE_SORT_KEY;
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
     * @generated from field: optional string search_key = 11;
     */
    searchKey?: string;
    constructor(data?: PartialMessage<RolesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.RolesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RolesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RolesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RolesServiceSearchAllReq;
    static equals(a: RolesServiceSearchAllReq | PlainMessage<RolesServiceSearchAllReq> | undefined, b: RolesServiceSearchAllReq | PlainMessage<RolesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=roles.scailo_pb.d.ts.map