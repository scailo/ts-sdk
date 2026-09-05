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
 * @generated from enum Scailo.QUESTIONNAIRE_SECTION_SERVICE_CONDITIONAL_RULE_OPERATOR
 */
export declare enum QUESTIONNAIRE_SECTION_SERVICE_CONDITIONAL_RULE_OPERATOR {
    /**
     * @description Default sort behavior (by internal item sequence ID).
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_SERVICE_CONDITIONAL_RULE_OPERATOR_UNSPECIFIED = 0;
     */
    QUESTIONNAIRE_SECTION_SERVICE_CONDITIONAL_RULE_OPERATOR_UNSPECIFIED = 0
}
/**
 *
 * Enumeration of fields available for sorting sales order item search results.
 *
 * @generated from enum Scailo.QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY
 */
export declare enum QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY {
    /**
     * @description Default sort behavior (by internal item sequence ID).
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the item record was initially created.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_CREATED_AT = 1;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the item record was last modified.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_MODIFIED_AT = 2;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp of the item.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_APPROVED_ON = 3;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_APPROVED_BY = 4;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the internal ID of the family.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_FAMILY_ID = 10;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_FAMILY_ID = 10,
    /**
     * @description Sort by the ordered quantity evaluated in the internal unit of measure.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * @description Sort by the internal ID of the client's requested unit of measure.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_CLIENT_UOM_ID = 12;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_CLIENT_UOM_ID = 12,
    /**
     * @description Sort by the ordered quantity evaluated in the client's unit of measure.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_CLIENT_QUANTITY = 13;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_CLIENT_QUANTITY = 13,
    /**
     * @description Sort alphabetically by the client's specific family code or SKU.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_CLIENT_FAMILY_CODE = 14;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_CLIENT_FAMILY_CODE = 14,
    /**
     * @description Sort by the agreed-upon base unit price.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_UNIT_PRICE = 15;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_UNIT_PRICE = 15,
    /**
     * @description Sort by the internal ID of the assigned tax group.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_TAX_GROUP_ID = 16;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_TAX_GROUP_ID = 16,
    /**
     * @description Sort by the percentage discount applied to the item.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_DISCOUNT = 17;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_DISCOUNT = 17,
    /**
     * @description Sort chronologically by the target delivery date for the item.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_DELIVERY_DATE = 18;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY_DELIVERY_DATE = 18
}
/**
 *
 * Enum defining the applicable lifecycle and verification statuses for sales order items.
 *
 * @generated from enum Scailo.QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS
 */
export declare enum QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS {
    /**
     * @description Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS_ANY_UNSPECIFIED = 0;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * @description Denotes that the sales order item association has passed verification and is actively approved.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS_APPROVED = 1;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS_APPROVED = 1,
    /**
     * @description Denotes that the sales order item association is pending review and waiting for administrative approval.
     *
     * @generated from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS_UNAPPROVED = 2;
     */
    QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS_UNAPPROVED = 2
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
/**
 *
 * Request message for appending a new individual line item to an existing Questionnaire Section.
 * This payload defines the specific family, quantities mapped between internal
 * and client-specific units of measure, commercial terms (price, tax, discount),
 * and delivery expectations for the item.
 *
 * @generated from message Scailo.QuestionnaireSectionsServiceConditionalRuleCreateRequest
 */
export declare class QuestionnaireSectionsServiceConditionalRuleCreateRequest extends Message<QuestionnaireSectionsServiceConditionalRuleCreateRequest> {
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
     * @description The unique internal identifier of the parent questionnaire section to which this item will be attached.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 questionnaire_section_id = 10;
     */
    questionnaireSectionId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the family or catalog item being ordered.
     *
     * @example 505
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 family_id = 12;
     */
    familyId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The ordered quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 10000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the Unit of Measure (UOM) requested by the client for this item.
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The ordered quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 5000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_quantity = 15;
     */
    clientQuantity: bigint;
    /**
     *
     * @optional
     *
     * @description The client's specific alphanumeric part number, SKU, or family code used for their internal referencing.
     *
     * @example "CLI-SKU-992"
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string client_family_code = 16;
     */
    clientFamilyCode?: string;
    /**
     *
     * @mandatory
     *
     * @description The agreed-upon price per unit for this item, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 unit_price = 17;
     */
    unitPrice: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the tax group or tax bracket applicable to this specific line item.
     *
     * @example 4
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 tax_group_id = 18;
     */
    taxGroupId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).
     *
     * @example 1500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 discount = 19;
     */
    discount: bigint;
    /**
     *
     * @mandatory
     *
     * @description The specific target delivery date for this line item, which may differ from the overall order's delivery schedule.
     *
     * @example "2023-11-15"
     *
     * @regex .+
     *
     * @format Must be a non-empty string. Expected to follow the standard date format designated by the client (e.g., YYYY-MM-DD).
     *
     * @generated from field: string delivery_date = 20;
     */
    deliveryDate: string;
    /**
     *
     * @optional
     *
     * @description Additional custom textual requirements, manufacturing notes, or specifications for fulfilling this item.
     *
     * @example "Requires double-reinforced packaging for international transit."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string specifications = 21;
     */
    specifications?: string;
    /**
     *
     * @optional
     *
     * @description A boolean flag indicating whether this specific line item is eligible to be processed for invoicing.
     *
     * @example true
     *
     * @regex ^(?:true|false)$
     *
     * @format Boolean true or false.
     *
     * @generated from field: optional bool is_invoiceable = 22;
     */
    isInvoiceable?: boolean;
    constructor(data?: PartialMessage<QuestionnaireSectionsServiceConditionalRuleCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionsServiceConditionalRuleCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionsServiceConditionalRuleCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceConditionalRuleCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceConditionalRuleCreateRequest;
    static equals(a: QuestionnaireSectionsServiceConditionalRuleCreateRequest | PlainMessage<QuestionnaireSectionsServiceConditionalRuleCreateRequest> | undefined, b: QuestionnaireSectionsServiceConditionalRuleCreateRequest | PlainMessage<QuestionnaireSectionsServiceConditionalRuleCreateRequest> | undefined): boolean;
}
/**
 *
 * Represents a single line item payload within a bulk creation request.
 * Contains the exact same transactional parameters as a standard item creation request,
 * omitting the parent order ID which is declared once at the batch level.
 *
 * @generated from message Scailo.QuestionnaireSectionsServiceMultipleConditionalRulesSingleton
 */
export declare class QuestionnaireSectionsServiceMultipleConditionalRulesSingleton extends Message<QuestionnaireSectionsServiceMultipleConditionalRulesSingleton> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the family or catalog item being ordered.
     *
     * @example 505
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 family_id = 12;
     */
    familyId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The ordered quantity represented in the system's internal base unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 10000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the Unit of Measure (UOM) requested by the client for this item.
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The ordered quantity represented in the client's specific unit of measure. Stored in subunits (cents) to maintain fractional precision.
     *
     * @example 5000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_quantity = 15;
     */
    clientQuantity: bigint;
    /**
     *
     * @optional
     *
     * @description The client's specific alphanumeric part number, SKU, or family code used for their internal referencing.
     *
     * @example "CLI-SKU-992"
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string client_family_code = 16;
     */
    clientFamilyCode?: string;
    /**
     *
     * @mandatory
     *
     * @description The agreed-upon price per unit for this item, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 unit_price = 17;
     */
    unitPrice: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the tax group or tax bracket applicable to this specific line item.
     *
     * @example 4
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 tax_group_id = 18;
     */
    taxGroupId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).
     *
     * @example 1500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 discount = 19;
     */
    discount: bigint;
    /**
     *
     * @mandatory
     *
     * @description The specific target delivery date for this line item, which may differ from the overall order's delivery schedule.
     *
     * @example "2023-11-15"
     *
     * @regex .+
     *
     * @format Must be a non-empty string. Expected to follow the standard date format designated by the client (e.g., YYYY-MM-DD).
     *
     * @generated from field: string delivery_date = 20;
     */
    deliveryDate: string;
    /**
     *
     * @optional
     *
     * @description Additional custom textual requirements, manufacturing notes, or specifications for fulfilling this item.
     *
     * @example "Requires double-reinforced packaging for international transit."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string specifications = 21;
     */
    specifications?: string;
    /**
     *
     * @optional
     *
     * @description A boolean flag indicating whether this specific line item is eligible to be processed for invoicing.
     *
     * @example true
     *
     * @regex ^(?:true|false)$
     *
     * @format Boolean true or false.
     *
     * @generated from field: optional bool is_invoiceable = 22;
     */
    isInvoiceable?: boolean;
    constructor(data?: PartialMessage<QuestionnaireSectionsServiceMultipleConditionalRulesSingleton>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionsServiceMultipleConditionalRulesSingleton";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionsServiceMultipleConditionalRulesSingleton;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceMultipleConditionalRulesSingleton;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceMultipleConditionalRulesSingleton;
    static equals(a: QuestionnaireSectionsServiceMultipleConditionalRulesSingleton | PlainMessage<QuestionnaireSectionsServiceMultipleConditionalRulesSingleton> | undefined, b: QuestionnaireSectionsServiceMultipleConditionalRulesSingleton | PlainMessage<QuestionnaireSectionsServiceMultipleConditionalRulesSingleton> | undefined): boolean;
}
/**
 *
 * Request message for appending multiple line items to a Questionnaire Section in a single batch transaction.
 * Optimized for scenarios like order imports or autofill operations where dozens of items
 * are attached simultaneously to a parent record.
 *
 * @generated from message Scailo.QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest
 */
export declare class QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest extends Message<QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest> {
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
     * @description The unique internal identifier of the parent questionnaire section to which this batch of items will be attached.
     *
     * @example 1024
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 questionnaire_section_id = 10;
     */
    questionnaireSectionId: bigint;
    /**
     *
     * @mandatory
     *
     * @description An array containing the individual line item payloads to be appended to the order.
     *
     * @example []
     *
     * @format Repeated array of QuestionnaireSectionsServiceMultipleConditionalRulesSingleton message blocks.
     *
     * @generated from field: repeated Scailo.QuestionnaireSectionsServiceMultipleConditionalRulesSingleton list = 11;
     */
    list: QuestionnaireSectionsServiceMultipleConditionalRulesSingleton[];
    constructor(data?: PartialMessage<QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest;
    static equals(a: QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest | PlainMessage<QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest> | undefined, b: QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest | PlainMessage<QuestionnaireSectionsServiceMultipleConditionalRulesCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for modifying the core transactional parameters of an existing Questionnaire Section line item.
 * Supports updating quantities, commercial terms, delivery dates, and specifications,
 * typically utilized during order negotiation or amendment phases.
 *
 * @generated from message Scailo.QuestionnaireSectionsServiceConditionalRuleUpdateRequest
 */
export declare class QuestionnaireSectionsServiceConditionalRuleUpdateRequest extends Message<QuestionnaireSectionsServiceConditionalRuleUpdateRequest> {
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
     * @mandatory
     *
     * @description The updated ordered quantity represented in the system's internal base unit of measure. Stored in subunits (cents).
     *
     * @example 10000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     *
     * @mandatory
     *
     * @description The updated unique internal identifier of the Unit of Measure (UOM) requested by the client.
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The updated ordered quantity represented in the client's specific unit of measure. Stored in subunits (cents).
     *
     * @example 5000
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 client_quantity = 15;
     */
    clientQuantity: bigint;
    /**
     *
     * @optional
     *
     * @description The updated client's specific alphanumeric part number, SKU, or family code.
     *
     * @example "CLI-SKU-992"
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string client_family_code = 16;
     */
    clientFamilyCode?: string;
    /**
     *
     * @mandatory
     *
     * @description The updated price per unit for this item, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 unit_price = 17;
     */
    unitPrice: bigint;
    /**
     *
     * @mandatory
     *
     * @description The updated unique internal identifier of the tax group or tax bracket applicable to this item.
     *
     * @example 4
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 tax_group_id = 18;
     */
    taxGroupId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The updated discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).
     *
     * @example 1500
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 discount = 19;
     */
    discount: bigint;
    /**
     *
     * @mandatory
     *
     * @description The updated specific target delivery date for this line item.
     *
     * @example "2023-11-15"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string delivery_date = 20;
     */
    deliveryDate: string;
    /**
     *
     * @optional
     *
     * @description Updated custom textual requirements, manufacturing notes, or specifications for fulfilling this item.
     *
     * @example "Requires double-reinforced packaging for international transit."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string specifications = 21;
     */
    specifications?: string;
    /**
     *
     * @optional
     *
     * @description A boolean flag indicating whether this specific line item is eligible to be processed for invoicing.
     *
     * @example true
     *
     * @regex ^(?:true|false)$
     *
     * @format Boolean true or false.
     *
     * @generated from field: optional bool is_invoiceable = 22;
     */
    isInvoiceable?: boolean;
    constructor(data?: PartialMessage<QuestionnaireSectionsServiceConditionalRuleUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionsServiceConditionalRuleUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionsServiceConditionalRuleUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceConditionalRuleUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServiceConditionalRuleUpdateRequest;
    static equals(a: QuestionnaireSectionsServiceConditionalRuleUpdateRequest | PlainMessage<QuestionnaireSectionsServiceConditionalRuleUpdateRequest> | undefined, b: QuestionnaireSectionsServiceConditionalRuleUpdateRequest | PlainMessage<QuestionnaireSectionsServiceConditionalRuleUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents a complete, finalized Questionnaire Section Item entity within the system.
 * This message encapsulates the comprehensive state of a single ordered product or service,
 * including its relationship to the parent order, mapped quantities across internal and client units,
 * commercial terms (pricing, taxes, discounts), delivery schedules, and derived financial calculations.
 *
 * **Note:** This payload is utilized in read operations to provide clients and downstream systems
 * (like billing or fulfillment) with the exact, immutable state of an individual line item.
 *
 * @generated from message Scailo.QuestionnaireSectionConditionalRule
 */
export declare class QuestionnaireSectionConditionalRule extends Message<QuestionnaireSectionConditionalRule> {
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
     * @description The unique internal identifier of the parent questionnaire section to which this line item belongs.
     *
     * @example 1024
     *
     * @generated from field: uint64 questionnaire_section_id = 10;
     */
    questionnaireSectionId: bigint;
    /**
     *
     * @description The unique internal sequence identifier of another questionnaire section line item that this item is bundled or packaged with.
     *
     * @example 1025
     *
     * @generated from field: uint64 bundled_with_id = 11;
     */
    bundledWithId: bigint;
    /**
     *
     * @description The unique internal identifier of the family or catalog item being ordered.
     *
     * @example 505
     *
     * @generated from field: uint64 family_id = 12;
     */
    familyId: bigint;
    /**
     *
     * @description The ordered quantity represented in the system's internal base unit of measure. Stored in subunits (cents).
     *
     * @example 10000
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     *
     * @description The unique internal identifier of the Unit of Measure (UOM) requested by the client for this item.
     *
     * @example 12
     *
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     *
     * @description The ordered quantity represented in the client's specific unit of measure. Stored in subunits (cents).
     *
     * @example 5000
     *
     * @generated from field: uint64 client_quantity = 15;
     */
    clientQuantity: bigint;
    /**
     *
     * @description The client's specific alphanumeric part number, SKU, or family code used for their internal referencing.
     *
     * @example "CLI-SKU-992"
     *
     * @generated from field: string client_family_code = 16;
     */
    clientFamilyCode: string;
    /**
     *
     * @description The agreed-upon price per unit for this item before discounts, represented in the base currency subunit (e.g., cents).
     *
     * @example 2500
     *
     * @generated from field: uint64 unit_price = 17;
     */
    unitPrice: bigint;
    /**
     *
     * @description The unique internal identifier of the tax group or tax bracket applicable to this specific line item.
     *
     * @example 4
     *
     * @generated from field: uint64 tax_group_id = 18;
     */
    taxGroupId: bigint;
    /**
     *
     * @description The discount percentage applied to this specific item, represented in subunits (e.g., 1500 for 15.00%).
     *
     * @example 1500
     *
     * @generated from field: uint64 discount = 19;
     */
    discount: bigint;
    /**
     *
     * @description The specific target delivery date for this line item.
     *
     * @example "2023-11-15"
     *
     * @generated from field: string delivery_date = 20;
     */
    deliveryDate: string;
    /**
     *
     * @description Additional custom textual requirements, manufacturing notes, or specifications for fulfilling this item.
     *
     * @example "Requires double-reinforced packaging for international transit."
     *
     * @generated from field: string specifications = 21;
     */
    specifications: string;
    /**
     *
     * @description A boolean flag indicating whether this specific line item is eligible to be processed for invoicing.
     *
     * @example true
     *
     * @generated from field: bool is_invoiceable = 22;
     */
    isInvoiceable: boolean;
    /**
     *
     * @description The system-calculated net price per unit after the applied discount has been subtracted from the base unit price. Represented in the base currency subunit (e.g., cents).
     *
     * @example 2125
     *
     * @generated from field: uint64 discounted_unit_price = 30;
     */
    discountedUnitPrice: bigint;
    constructor(data?: PartialMessage<QuestionnaireSectionConditionalRule>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionConditionalRule";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionConditionalRule;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionConditionalRule;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionConditionalRule;
    static equals(a: QuestionnaireSectionConditionalRule | PlainMessage<QuestionnaireSectionConditionalRule> | undefined, b: QuestionnaireSectionConditionalRule | PlainMessage<QuestionnaireSectionConditionalRule> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Questionnaire Section Item records.
 *
 * @generated from message Scailo.QuestionnaireSectionConditionalRulesList
 */
export declare class QuestionnaireSectionConditionalRulesList extends Message<QuestionnaireSectionConditionalRulesList> {
    /**
     * @description An array of Questionnaire Section Item records.
     *
     * @generated from field: repeated Scailo.QuestionnaireSectionConditionalRule list = 1;
     */
    list: QuestionnaireSectionConditionalRule[];
    constructor(data?: PartialMessage<QuestionnaireSectionConditionalRulesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionConditionalRulesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionConditionalRulesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionConditionalRulesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionConditionalRulesList;
    static equals(a: QuestionnaireSectionConditionalRulesList | PlainMessage<QuestionnaireSectionConditionalRulesList> | undefined, b: QuestionnaireSectionConditionalRulesList | PlainMessage<QuestionnaireSectionConditionalRulesList> | undefined): boolean;
}
/**
 *
 * Represents the request payload containing the parameter constraints required to
 * retrieve the historical audit trail and lifecycle changes of a specific questionnaire section conditional rule record.
 *
 * @generated from message Scailo.QuestionnaireSectionConditionalRuleHistoryRequest
 */
export declare class QuestionnaireSectionConditionalRuleHistoryRequest extends Message<QuestionnaireSectionConditionalRuleHistoryRequest> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target questionnaire section associated with the historical record.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer greater than zero.
     *
     * @generated from field: uint64 questionnaire_section_id = 10;
     */
    questionnaireSectionId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target family associated with the historical record.
     *
     * @example 582
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer greater than zero.
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<QuestionnaireSectionConditionalRuleHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionConditionalRuleHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionConditionalRuleHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionConditionalRuleHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionConditionalRuleHistoryRequest;
    static equals(a: QuestionnaireSectionConditionalRuleHistoryRequest | PlainMessage<QuestionnaireSectionConditionalRuleHistoryRequest> | undefined, b: QuestionnaireSectionConditionalRuleHistoryRequest | PlainMessage<QuestionnaireSectionConditionalRuleHistoryRequest> | undefined): boolean;
}
/**
 *
 * Request payload structure used to search and filter Questionnaire Section Conditional Rule records.
 * Supports pagination controls, tenancy isolation, status grouping, and text-based matching.
 *
 * @generated from message Scailo.QuestionnaireSectionConditionalRulesSearchRequest
 */
export declare class QuestionnaireSectionConditionalRulesSearchRequest extends Message<QuestionnaireSectionConditionalRulesSearchRequest> {
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
     * @generated from field: optional Scailo.QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY sort_key = 5;
     */
    sortKey?: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_SORT_KEY;
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
     * @description The field used for sorting.
     *
     * @generated from field: optional Scailo.QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS status = 7;
     */
    status?: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS;
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
     * @description Filter line items belonging to a specific parent sales order.
     *
     * @example 1024
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 sales_order_id = 20;
     */
    salesOrderId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the internal identifier of the primary sales order line item that this item is bundled with.
     *
     * @example 1025
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 bundled_with_id = 21;
     */
    bundledWithId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter line items belonging to a specific family.
     *
     * @example 505
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 family_id = 22;
     */
    familyId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter line items requesting a specific client Unit of Measure (UOM).
     *
     * @example 12
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 client_uom_id = 23;
     */
    clientUomId?: bigint;
    /**
     *
     * @optional
     *
     * @description Fuzzy match for the client's specific alphanumeric part number, SKU, or family code.
     *
     * @example "CLI-SKU-992"
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
     *
     * @generated from field: optional string client_family_code = 26;
     */
    clientFamilyCode?: string;
    /**
     *
     * @optional
     *
     * @description Filter line items mapped to a specific tax group.
     *
     * @example 4
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 tax_group_id = 27;
     */
    taxGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter line items scheduled for exact delivery on this specific date.
     *
     * @example "2023-11-15"
     *
     * @regex .*
     *
     * @format String following the standard date format (e.g., YYYY-MM-DD).
     *
     * @generated from field: optional string delivery_date_exact = 28;
     */
    deliveryDateExact?: string;
    /**
     *
     * @optional
     *
     * @description Filter line items scheduled for delivery ON or AFTER this specific date.
     *
     * @example "2023-11-01"
     *
     * @regex .*
     *
     * @format String following the standard date format (e.g., YYYY-MM-DD).
     *
     * @generated from field: optional string delivery_date_start = 29;
     */
    deliveryDateStart?: string;
    /**
     *
     * @optional
     *
     * @description Filter line items scheduled for delivery ON or BEFORE this specific date.
     *
     * @example "2023-11-30"
     *
     * @regex .*
     *
     * @format String following the standard date format (e.g., YYYY-MM-DD).
     *
     * @generated from field: optional string delivery_date_end = 30;
     */
    deliveryDateEnd?: string;
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
    constructor(data?: PartialMessage<QuestionnaireSectionConditionalRulesSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionConditionalRulesSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionConditionalRulesSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionConditionalRulesSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionConditionalRulesSearchRequest;
    static equals(a: QuestionnaireSectionConditionalRulesSearchRequest | PlainMessage<QuestionnaireSectionConditionalRulesSearchRequest> | undefined, b: QuestionnaireSectionConditionalRulesSearchRequest | PlainMessage<QuestionnaireSectionConditionalRulesSearchRequest> | undefined): boolean;
}
/**
 *
 * Paginated response packet containing a subset of Questionnaire Section Conditional Rule records.
 * Includes complete operational state parameters for rendering frontend data grids and tables.
 *
 * @generated from message Scailo.QuestionnaireSectionsServicePaginatedConditionalRulesResponse
 */
export declare class QuestionnaireSectionsServicePaginatedConditionalRulesResponse extends Message<QuestionnaireSectionsServicePaginatedConditionalRulesResponse> {
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
     * @generated from field: repeated Scailo.QuestionnaireSectionConditionalRule payload = 4;
     */
    payload: QuestionnaireSectionConditionalRule[];
    constructor(data?: PartialMessage<QuestionnaireSectionsServicePaginatedConditionalRulesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireSectionsServicePaginatedConditionalRulesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireSectionsServicePaginatedConditionalRulesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServicePaginatedConditionalRulesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireSectionsServicePaginatedConditionalRulesResponse;
    static equals(a: QuestionnaireSectionsServicePaginatedConditionalRulesResponse | PlainMessage<QuestionnaireSectionsServicePaginatedConditionalRulesResponse> | undefined, b: QuestionnaireSectionsServicePaginatedConditionalRulesResponse | PlainMessage<QuestionnaireSectionsServicePaginatedConditionalRulesResponse> | undefined): boolean;
}
//# sourceMappingURL=questionnaire_sections.scailo_pb.d.ts.map