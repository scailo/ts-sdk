import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of fields available for sorting project search results.
 *
 * @generated from enum Scailo.PROJECT_SORT_KEY
 */
export declare enum PROJECT_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: PROJECT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PROJECT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: PROJECT_SORT_KEY_CREATED_AT = 1;
     */
    PROJECT_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: PROJECT_SORT_KEY_MODIFIED_AT = 2;
     */
    PROJECT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: PROJECT_SORT_KEY_APPROVED_ON = 3;
     */
    PROJECT_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: PROJECT_SORT_KEY_APPROVED_BY = 4;
     */
    PROJECT_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: PROJECT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PROJECT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the timestamp of record completion.
     *
     * @generated from enum value: PROJECT_SORT_KEY_COMPLETED_ON = 6;
     */
    PROJECT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * @description Sort alphabetically by the user-provided reference ID.
     *
     * @generated from enum value: PROJECT_SORT_KEY_REFERENCE_ID = 10;
     */
    PROJECT_SORT_KEY_REFERENCE_ID = 10,
    /**
     * @description Sort alphabetically by the system-generated reference number.
     *
     * @generated from enum value: PROJECT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    PROJECT_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Request message for creating a new project record.
 * This message encapsulates all the foundational metadata, client associations,
 * compliance details, and external system cross-references required to initialize a project.
 *
 * **Note:** This serves as the primary entry point for project provisioning, ensuring
 * that required external mapping, auditing comments, and structural configurations are set.
 *
 * @generated from message Scailo.ProjectsServiceCreateRequest
 */
export declare class ProjectsServiceCreateRequest extends Message<ProjectsServiceCreateRequest> {
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
     *
     * @optional
     *
     * @description The unique identifier of the associated client.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 client_id = 12;
     */
    clientId?: bigint;
    /**
     *
     * @mandatory
     *
     * @description The core detailed description or summary of the project.
     *
     * @example "This is an exploratory project for Customer A."
     *
     * @regex ^[0-9A-Za-z ]+$
     *
     * @format Alphanumeric characters and spaces only. Must not be empty.
     *
     * @generated from field: string description = 13;
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
    constructor(data?: PartialMessage<ProjectsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServiceCreateRequest;
    static equals(a: ProjectsServiceCreateRequest | PlainMessage<ProjectsServiceCreateRequest> | undefined, b: ProjectsServiceCreateRequest | PlainMessage<ProjectsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for updating an existing Project record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the internal reference, client, description
 * of an established Project.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.ProjectsServiceUpdateRequest
 */
export declare class ProjectsServiceUpdateRequest extends Message<ProjectsServiceUpdateRequest> {
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
     * @description Updated alphanumeric reference ID. Must contain at least 1 character.
     *
     * @example "ABS-2023-001-REV"
     *
     * @regex "[0-9A-Za-z ]+$"
     *
     * @format Alphanumeric characters and spaces only. No special symbols or punctuation allowed.
     *
     * @generated from field: optional string reference_id = 10;
     */
    referenceId?: string;
    /**
     *
     * @optional
     *
     * @description The unique identifier of the associated client.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 client_id = 12;
     */
    clientId?: bigint;
    /**
     *
     * @optional
     *
     * @description The core detailed description or summary of the project.
     *
     * @example "This is an exploratory project for Customer A."
     *
     * @regex ^[0-9A-Za-z ]+$
     *
     * @format Alphanumeric characters and spaces only. Must not be empty.
     *
     * @generated from field: optional string description = 13;
     */
    description?: string;
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
    constructor(data?: PartialMessage<ProjectsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServiceUpdateRequest;
    static equals(a: ProjectsServiceUpdateRequest | PlainMessage<ProjectsServiceUpdateRequest> | undefined, b: ProjectsServiceUpdateRequest | PlainMessage<ProjectsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents a full Project within the system.
 *
 * @generated from message Scailo.Project
 */
export declare class Project extends Message<Project> {
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
     *
     * @description The unique identifier of the associated client.
     *
     * @example 455
     *
     * @generated from field: uint64 client_id = 12;
     */
    clientId: bigint;
    /**
     *
     * @description The core detailed description or summary of the project.
     *
     * @example "This is an exploratory project for Customer A."
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     *
     * @description Collection of organization-specific dynamic data.
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<Project>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Project";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Project;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Project;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Project;
    static equals(a: Project | PlainMessage<Project> | undefined, b: Project | PlainMessage<Project> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Project records.
 *
 * @generated from message Scailo.ProjectsList
 */
export declare class ProjectsList extends Message<ProjectsList> {
    /**
     * @description An array of Project records.
     *
     * @generated from field: repeated Scailo.Project list = 1;
     */
    list: Project[];
    constructor(data?: PartialMessage<ProjectsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsList;
    static equals(a: ProjectsList | PlainMessage<ProjectsList> | undefined, b: ProjectsList | PlainMessage<ProjectsList> | undefined): boolean;
}
/**
 *
 * Represents a snapshot of performance and progress metrics for a project.
 * This message aggregates key performance indicators (KPIs) to provide a
 * high-level overview of project health, effort, and completion status.
 *
 * @generated from message Scailo.ProjectStatistics
 */
export declare class ProjectStatistics extends Message<ProjectStatistics> {
    /**
     *
     * @description The total accumulated time spent on the project in seconds.
     *
     * @example 86400
     *
     * @generated from field: uint64 total_duration = 1;
     */
    totalDuration: bigint;
    /**
     *
     * @description The cumulative progress of the project expressed as a percentage. Can have a range between 0 and 10000. A fully completed project would have a value of 10000.
     *
     * @example 10000
     *
     * @generated from field: uint64 total_completion_percentage = 2;
     */
    totalCompletionPercentage: bigint;
    /**
     *
     * @description The total number of points earned or assigned to the project. This is used to track effort or value delivery in agile-style workflows.
     *
     * @example 10000
     *
     * @generated from field: uint64 total_points = 3;
     */
    totalPoints: bigint;
    constructor(data?: PartialMessage<ProjectStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectStatistics;
    static equals(a: ProjectStatistics | PlainMessage<ProjectStatistics> | undefined, b: ProjectStatistics | PlainMessage<ProjectStatistics> | undefined): boolean;
}
/**
 *
 * Pagination request for retrieving slices of Project records.
 *
 * @generated from message Scailo.ProjectsServicePaginationReq
 */
export declare class ProjectsServicePaginationReq extends Message<ProjectsServicePaginationReq> {
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
     * @generated from field: optional Scailo.PROJECT_SORT_KEY sort_key = 5;
     */
    sortKey?: PROJECT_SORT_KEY;
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
    constructor(data?: PartialMessage<ProjectsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServicePaginationReq;
    static equals(a: ProjectsServicePaginationReq | PlainMessage<ProjectsServicePaginationReq> | undefined, b: ProjectsServicePaginationReq | PlainMessage<ProjectsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.ProjectsServicePaginationResponse
 */
export declare class ProjectsServicePaginationResponse extends Message<ProjectsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Project payload = 4;
     */
    payload: Project[];
    constructor(data?: PartialMessage<ProjectsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServicePaginationResponse;
    static equals(a: ProjectsServicePaginationResponse | PlainMessage<ProjectsServicePaginationResponse> | undefined, b: ProjectsServicePaginationResponse | PlainMessage<ProjectsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Advanced filter request for searching and paginating projects using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.ProjectsServiceFilterReq
 */
export declare class ProjectsServiceFilterReq extends Message<ProjectsServiceFilterReq> {
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
     * @generated from field: optional Scailo.PROJECT_SORT_KEY sort_key = 5;
     */
    sortKey?: PROJECT_SORT_KEY;
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
     * @description Fuzzy match for the user-defined reference ID.
     *
     * @example "ABS-2023-001"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: optional string reference_id = 20;
     */
    referenceId?: string;
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
     * @format Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: optional string final_ref_number = 21;
     */
    finalRefNumber?: string;
    /**
     *
     * @optional
     *
     * @description Filter projects assigned to a specific client. Explicitly set to `-1` to bypass this filter and return all client records. `0` acts as a valid, concrete filter ID.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format 64-bit integer that with a minimum value of -1.
     *
     * @generated from field: optional int64 client_id = 22;
     */
    clientId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter projects assigned to a specific sales order. Ignored if set to 0.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 sales_order_id = 40;
     */
    salesOrderId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter projects assigned to a specific purchase order. Ignored if set to 0.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 purchase_order_id = 41;
     */
    purchaseOrderId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter projects assigned to a specific outward job. Ignored if set to 0.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 outward_job_id = 42;
     */
    outwardJobId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter projects assigned to a specific inward job. Ignored if set to 0.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 inward_job_id = 43;
     */
    inwardJobId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter projects assigned to a specific production plan. Ignored if set to 0.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 production_plan_id = 44;
     */
    productionPlanId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter projects assigned to a specific meeting. Ignored if set to 0.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 meeting_id = 45;
     */
    meetingId?: bigint;
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
     * @generated from field: optional bool include_form_data = 501;
     */
    includeFormData?: boolean;
    constructor(data?: PartialMessage<ProjectsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServiceFilterReq;
    static equals(a: ProjectsServiceFilterReq | PlainMessage<ProjectsServiceFilterReq> | undefined, b: ProjectsServiceFilterReq | PlainMessage<ProjectsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Target filter request for counting project records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.ProjectsServiceCountReq
 */
export declare class ProjectsServiceCountReq extends Message<ProjectsServiceCountReq> {
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
     * @description Fuzzy match for the user-defined reference ID.
     *
     * @example "ABS-2023-001"
     *
     * @regex [0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: optional string reference_id = 20;
     */
    referenceId?: string;
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
     * @format Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: optional string final_ref_number = 21;
     */
    finalRefNumber?: string;
    /**
     *
     * @optional
     *
     * @description Filter projects assigned to a specific client. Explicitly set to `-1` to bypass this filter and return all client records. `0` acts as a valid, concrete filter ID.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format 64-bit integer that with a minimum value of -1.
     *
     * @generated from field: optional int64 client_id = 22;
     */
    clientId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter projects assigned to a specific sales order. Ignored if set to 0.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 sales_order_id = 40;
     */
    salesOrderId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter projects assigned to a specific purchase order. Ignored if set to 0.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 purchase_order_id = 41;
     */
    purchaseOrderId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter projects assigned to a specific outward job. Ignored if set to 0.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 outward_job_id = 42;
     */
    outwardJobId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter projects assigned to a specific inward job. Ignored if set to 0.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 inward_job_id = 43;
     */
    inwardJobId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter projects assigned to a specific production plan. Ignored if set to 0.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 production_plan_id = 44;
     */
    productionPlanId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter projects assigned to a specific meeting. Ignored if set to 0.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 meeting_id = 45;
     */
    meetingId?: bigint;
    /**
     *
     * @optional
     *
     * @description Count based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<ProjectsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServiceCountReq;
    static equals(a: ProjectsServiceCountReq | PlainMessage<ProjectsServiceCountReq> | undefined, b: ProjectsServiceCountReq | PlainMessage<ProjectsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Broad-spectrum search and lookup request for locating and paginating projects via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.ProjectsServiceSearchAllReq
 */
export declare class ProjectsServiceSearchAllReq extends Message<ProjectsServiceSearchAllReq> {
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
     * @generated from field: optional Scailo.PROJECT_SORT_KEY sort_key = 5;
     */
    sortKey?: PROJECT_SORT_KEY;
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
     * @format May contain any UTF-8 characters.
     *
     * @generated from field: optional string search_key = 11;
     */
    searchKey?: string;
    /**
     *
     * @optional
     *
     * @description Search projects assigned to a specific client. Explicitly set to `-1` to bypass this filter and return all client records. `0` acts as a valid, concrete filter ID.
     *
     * @example 455
     *
     * @regex ^[0-9]*$
     *
     * @format 64-bit integer that with a minimum value of -1.
     *
     * @generated from field: optional int64 client_id = 21;
     */
    clientId?: bigint;
    constructor(data?: PartialMessage<ProjectsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServiceSearchAllReq;
    static equals(a: ProjectsServiceSearchAllReq | PlainMessage<ProjectsServiceSearchAllReq> | undefined, b: ProjectsServiceSearchAllReq | PlainMessage<ProjectsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Request message for creating a new project contact association.
 * This message encapsulates the necessary identifiers to link an employee to a project,
 * along with compliance details and audit logs required for record initialization.
 *
 * **Note:** This serves as the primary entry point for managing project personnel, ensuring
 * that the relationship between the project and the internal employee is properly audited and validated.
 *
 * @generated from message Scailo.ProjectsServiceContactCreateRequest
 */
export declare class ProjectsServiceContactCreateRequest extends Message<ProjectsServiceContactCreateRequest> {
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
     * @description The unique identifier of the target project to which the contact will be associated.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 project_id = 10;
     */
    projectId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique identifier of the employee being assigned as the project contact.
     *
     * @example 5678
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 employee_id = 11;
     */
    employeeId: bigint;
    constructor(data?: PartialMessage<ProjectsServiceContactCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectsServiceContactCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectsServiceContactCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectsServiceContactCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectsServiceContactCreateRequest;
    static equals(a: ProjectsServiceContactCreateRequest | PlainMessage<ProjectsServiceContactCreateRequest> | undefined, b: ProjectsServiceContactCreateRequest | PlainMessage<ProjectsServiceContactCreateRequest> | undefined): boolean;
}
/**
 *
 * Represents a full Project Contact within the system.
 * This message encapsulates the complete state of a project contact association,
 * including organization tenancy, core entity identifiers, audit trails, and
 * granular approval workflow metadata.
 *
 * @generated from message Scailo.ProjectContact
 */
export declare class ProjectContact extends Message<ProjectContact> {
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
     * @example "Updated contact assignment per Q3 structural reorganization."
     *
     * @generated from field: string user_comment = 5;
     */
    userComment: string;
    /**
     *
     * @description The unique internal identifier of the associated project.
     *
     * @example 1024
     *
     * @generated from field: uint64 project_id = 10;
     */
    projectId: bigint;
    /**
     *
     * @description The unique internal identifier of the associated employee.
     *
     * @example 5678
     *
     * @generated from field: uint64 employee_id = 11;
     */
    employeeId: bigint;
    /**
     *
     * @description The globally unique identifier for the employee, used for external cross-referencing and identity systems.
     *
     * @example "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d"
     *
     * @generated from field: string employee_uuid = 211;
     */
    employeeUuid: string;
    constructor(data?: PartialMessage<ProjectContact>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectContact";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectContact;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectContact;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectContact;
    static equals(a: ProjectContact | PlainMessage<ProjectContact> | undefined, b: ProjectContact | PlainMessage<ProjectContact> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Project Contact records.
 *
 * @generated from message Scailo.ProjectContactsList
 */
export declare class ProjectContactsList extends Message<ProjectContactsList> {
    /**
     * @description An array of Project Contact records.
     *
     * @generated from field: repeated Scailo.ProjectContact list = 1;
     */
    list: ProjectContact[];
    constructor(data?: PartialMessage<ProjectContactsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProjectContactsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectContactsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectContactsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectContactsList;
    static equals(a: ProjectContactsList | PlainMessage<ProjectContactsList> | undefined, b: ProjectContactsList | PlainMessage<ProjectContactsList> | undefined): boolean;
}
//# sourceMappingURL=projects.scailo_pb.d.ts.map