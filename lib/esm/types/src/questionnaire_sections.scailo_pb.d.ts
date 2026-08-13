import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of fields available for sorting questionnaire section search results.
 *
 * @generated from enum Scailo.QUESTIONNAIRE_SECTION_SORT_KEY
 */
export declare enum QUESTIONNAIRE_SECTION_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    QUESTIONNAIRE_SECTION_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_SORT_KEY_CREATED_AT = 1;
     */
    QUESTIONNAIRE_SECTION_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_SORT_KEY_MODIFIED_AT = 2;
     */
    QUESTIONNAIRE_SECTION_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_SORT_KEY_APPROVED_ON = 3;
     */
    QUESTIONNAIRE_SECTION_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_SORT_KEY_APPROVED_BY = 4;
     */
    QUESTIONNAIRE_SECTION_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    QUESTIONNAIRE_SECTION_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the timestamp of record completion.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_SORT_KEY_COMPLETED_ON = 6;
     */
    QUESTIONNAIRE_SECTION_SORT_KEY_COMPLETED_ON = 6,
    /**
     * @description Sort alphabetically by the user-provided reference ID.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_SORT_KEY_REFERENCE_ID = 10;
     */
    QUESTIONNAIRE_SECTION_SORT_KEY_REFERENCE_ID = 10,
    /**
     * @description Sort alphabetically by the system-generated reference number.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    QUESTIONNAIRE_SECTION_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * @description Sort by the user-provided sort order.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_SORT_KEY_SORT_ORDER = 13;
     */
    QUESTIONNAIRE_SECTION_SORT_KEY_SORT_ORDER = 13
}
/**
 *
 * Request message for defining and creating a new Section within a Questionnaire Template.
 * This record acts as a structural container to logically group survey questions,
 * dictating its presentation sequence and linking it directly to a parent template.
 *
 * **Note:** This is typically utilized by Administrators or Form Designers when building
 * complex, multi-part assessments, inspections, or audits that require categorized steps.
 *
 * @generated from message Scailo.QuestionnaireSectionsServiceCreateRequest
 */
export declare class QuestionnaireSectionsServiceCreateRequest extends Message<QuestionnaireSectionsServiceCreateRequest> {
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
     * @mandatory
     *
     * @description The unique internal identifier of the parent questionnaire template to which this section belongs.
     *
     * @example 105
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 questionnaire_template_id = 12;
     */
    questionnaireTemplateId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The numerical sequence determining the display order of this section relative to other sections within the same template.
     *
     * @example 1
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sort_order = 13;
     */
    sortOrder: bigint;
    /**
     *
     * @optional
     *
     * @description A detailed text description outlining the purpose, context, or instructions specific to this section of the questionnaire.
     *
     * @example "Section 1: Facility Safety and Compliance Guidelines"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string description = 20;
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
    constructor(data?: PartialMessage<QuestionnaireSectionsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceCreateRequest;
    static equals(a: QuestionnaireSectionsServiceCreateRequest | PlainMessage<QuestionnaireSectionsServiceCreateRequest> | undefined, b: QuestionnaireSectionsServiceCreateRequest | PlainMessage<QuestionnaireSectionsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for updating an existing Questionnaire Section record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the naming, start and end validities and description
 * of an established Questionnaire Section.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.QuestionnaireSectionsServiceUpdateRequest
 */
export declare class QuestionnaireSectionsServiceUpdateRequest extends Message<QuestionnaireSectionsServiceUpdateRequest> {
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
     * @description The unique internal identifier of the parent questionnaire template to which this section belongs.
     *
     * @example 105
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 questionnaire_template_id = 12;
     */
    questionnaireTemplateId?: bigint;
    /**
     *
     * @optional
     *
     * @description The numerical sequence determining the display order of this section relative to other sections within the same template.
     *
     * @example 1
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 sort_order = 13;
     */
    sortOrder?: bigint;
    /**
     *
     * @optional
     *
     * @description A detailed text description outlining the purpose, context, or instructions specific to this section of the questionnaire.
     *
     * @example "Section 1: Facility Safety and Compliance Guidelines"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string description = 20;
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
    constructor(data?: PartialMessage<QuestionnaireSectionsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceUpdateRequest;
    static equals(a: QuestionnaireSectionsServiceUpdateRequest | PlainMessage<QuestionnaireSectionsServiceUpdateRequest> | undefined, b: QuestionnaireSectionsServiceUpdateRequest | PlainMessage<QuestionnaireSectionsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents a full Questionnaire Section within the system.
 *
 * @generated from message Scailo.QuestionnaireSection
 */
export declare class QuestionnaireSection extends Message<QuestionnaireSection> {
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
     * @description The unique internal identifier of the parent questionnaire template to which this section belongs.
     *
     * @example 105
     *
     * @generated from field: uint64 questionnaire_template_id = 12;
     */
    questionnaireTemplateId: bigint;
    /**
     *
     * @description The numerical sequence determining the display order of this section relative to other sections within the same template.
     *
     * @example 1
     *
     * @generated from field: uint64 sort_order = 13;
     */
    sortOrder: bigint;
    /**
     *
     * @description A detailed text description outlining the purpose, context, or instructions specific to this section of the questionnaire.
     *
     * @example "Section 1: Facility Safety and Compliance Guidelines"
     *
     * @generated from field: string description = 20;
     */
    description: string;
    /**
     *
     * @description Collection of organization-specific dynamic data.
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<QuestionnaireSection>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSection";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSection;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSection;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSection;
    static equals(a: QuestionnaireSection | PlainMessage<QuestionnaireSection> | undefined, b: QuestionnaireSection | PlainMessage<QuestionnaireSection> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Questionnaire Section records.
 *
 * @generated from message Scailo.QuestionnaireSectionsList
 */
export declare class QuestionnaireSectionsList extends Message<QuestionnaireSectionsList> {
    /**
     * @description An array of Questionnaire Section records.
     *
     * @generated from field: repeated Scailo.QuestionnaireSection list = 1;
     */
    list: QuestionnaireSection[];
    constructor(data?: PartialMessage<QuestionnaireSectionsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionsList;
    static equals(a: QuestionnaireSectionsList | PlainMessage<QuestionnaireSectionsList> | undefined, b: QuestionnaireSectionsList | PlainMessage<QuestionnaireSectionsList> | undefined): boolean;
}
/**
 *
 * Pagination request for retrieving slices of Questionnaire Section records.
 *
 * @generated from message Scailo.QuestionnaireSectionsServicePaginationReq
 */
export declare class QuestionnaireSectionsServicePaginationReq extends Message<QuestionnaireSectionsServicePaginationReq> {
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
     * @generated from field: optional Scailo.QUESTIONNAIRE_SECTION_SORT_KEY sort_key = 5;
     */
    sortKey?: QUESTIONNAIRE_SECTION_SORT_KEY;
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
    constructor(data?: PartialMessage<QuestionnaireSectionsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServicePaginationReq;
    static equals(a: QuestionnaireSectionsServicePaginationReq | PlainMessage<QuestionnaireSectionsServicePaginationReq> | undefined, b: QuestionnaireSectionsServicePaginationReq | PlainMessage<QuestionnaireSectionsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.QuestionnaireSectionsServicePaginationResponse
 */
export declare class QuestionnaireSectionsServicePaginationResponse extends Message<QuestionnaireSectionsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.QuestionnaireSection payload = 4;
     */
    payload: QuestionnaireSection[];
    constructor(data?: PartialMessage<QuestionnaireSectionsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServicePaginationResponse;
    static equals(a: QuestionnaireSectionsServicePaginationResponse | PlainMessage<QuestionnaireSectionsServicePaginationResponse> | undefined, b: QuestionnaireSectionsServicePaginationResponse | PlainMessage<QuestionnaireSectionsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Advanced filter request for searching and paginating questionnaire sections using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.QuestionnaireSectionsServiceFilterReq
 */
export declare class QuestionnaireSectionsServiceFilterReq extends Message<QuestionnaireSectionsServiceFilterReq> {
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
     * @generated from field: optional Scailo.QUESTIONNAIRE_SECTION_SORT_KEY sort_key = 5;
     */
    sortKey?: QUESTIONNAIRE_SECTION_SORT_KEY;
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
     * @format: Alphanumeric characters and spaces only. Can be left empty.
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
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: optional string final_ref_number = 21;
     */
    finalRefNumber?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent questionnaire template to which this section belongs.
     *
     * @example 105
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 questionnaire_template_id = 30;
     */
    questionnaireTemplateId?: bigint;
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
    constructor(data?: PartialMessage<QuestionnaireSectionsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceFilterReq;
    static equals(a: QuestionnaireSectionsServiceFilterReq | PlainMessage<QuestionnaireSectionsServiceFilterReq> | undefined, b: QuestionnaireSectionsServiceFilterReq | PlainMessage<QuestionnaireSectionsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Target filter request for counting questionnaire section records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.QuestionnaireSectionsServiceCountReq
 */
export declare class QuestionnaireSectionsServiceCountReq extends Message<QuestionnaireSectionsServiceCountReq> {
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
     * @format: Alphanumeric characters and spaces only. Can be left empty.
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
     * @format: Alphanumeric characters and spaces only. Can be left empty.
     *
     * @generated from field: optional string final_ref_number = 21;
     */
    finalRefNumber?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent questionnaire template to which this section belongs.
     *
     * @example 105
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 questionnaire_template_id = 30;
     */
    questionnaireTemplateId?: bigint;
    /**
     *
     * @optional
     *
     * @description Count based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<QuestionnaireSectionsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceCountReq;
    static equals(a: QuestionnaireSectionsServiceCountReq | PlainMessage<QuestionnaireSectionsServiceCountReq> | undefined, b: QuestionnaireSectionsServiceCountReq | PlainMessage<QuestionnaireSectionsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Broad-spectrum search and lookup request for locating and paginating questionnaire sections via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.QuestionnaireSectionsServiceSearchAllReq
 */
export declare class QuestionnaireSectionsServiceSearchAllReq extends Message<QuestionnaireSectionsServiceSearchAllReq> {
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
     * @generated from field: optional Scailo.QUESTIONNAIRE_SECTION_SORT_KEY sort_key = 5;
     */
    sortKey?: QUESTIONNAIRE_SECTION_SORT_KEY;
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
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent questionnaire template to which this section belongs.
     *
     * @example 105
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 questionnaire_template_id = 30;
     */
    questionnaireTemplateId?: bigint;
    constructor(data?: PartialMessage<QuestionnaireSectionsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceSearchAllReq;
    static equals(a: QuestionnaireSectionsServiceSearchAllReq | PlainMessage<QuestionnaireSectionsServiceSearchAllReq> | undefined, b: QuestionnaireSectionsServiceSearchAllReq | PlainMessage<QuestionnaireSectionsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=questionnaire_sections.scailo_pb.d.ts.map