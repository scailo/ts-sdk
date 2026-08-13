import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Enumeration of fields available for sorting questionnaire option group value search results.
 *
 * @generated from enum Scailo.QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY
 */
export declare enum QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_CREATED_AT = 1;
     */
    QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_MODIFIED_AT = 2;
     */
    QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_APPROVED_ON = 3;
     */
    QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_APPROVED_BY = 4;
     */
    QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the system ID of the associated questionnaire option group.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_QUESTIONNAIRE_OPTION_GROUP_ID = 10;
     */
    QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_QUESTIONNAIRE_OPTION_GROUP_ID = 10,
    /**
     * @description Sort by the user-provided sort order.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_SORT_ORDER = 12;
     */
    QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY_SORT_ORDER = 12
}
/**
 *
 * Enum defining the applicable lifecycle and verification statuses for questionnaire option group values.
 *
 * @generated from enum Scailo.QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS
 */
export declare enum QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS {
    /**
     * @description Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS_ANY_UNSPECIFIED = 0;
     */
    QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * @description Denotes that the vendor item association has passed verification and is actively approved.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS_APPROVED = 1;
     */
    QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS_APPROVED = 1,
    /**
     * @description Denotes that the vendor item association is pending review and waiting for administrative approval.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS_UNAPPROVED = 2;
     */
    QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS_UNAPPROVED = 2
}
/**
 *
 * Enumeration of fields available for sorting questionnaire option group search results.
 *
 * @generated from enum Scailo.QUESTIONNAIRE_OPTION_GROUP_SORT_KEY
 */
export declare enum QUESTIONNAIRE_OPTION_GROUP_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_CREATED_AT = 1;
     */
    QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_MODIFIED_AT = 2;
     */
    QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_APPROVED_ON = 3;
     */
    QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_APPROVED_BY = 4;
     */
    QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort by the timestamp of record completion.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_COMPLETED_ON = 6;
     */
    QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_COMPLETED_ON = 6,
    /**
     * @description Sort alphabetically by the user-provided name.
     *
     * @generated from enum value: QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_NAME = 10;
     */
    QUESTIONNAIRE_OPTION_GROUP_SORT_KEY_NAME = 10
}
/**
 *
 * Request message for defining and creating a new Questionnaire Option Group.
 * This record serves as a reusable container or dictionary for predefined answer choices
 * (e.g., "Yes/No/N/A", "1-5 Satisfaction Scale", "Department List") that can be mapped
 * to specific questions within a Questionnaire Template.
 *
 * **Note:** This is typically utilized by Administrators or Form Designers to standardize
 * and centralize response sets, ensuring data consistency across multiple assessments,
 * audits, or surveys.
 *
 * @generated from message Scailo.QuestionnaireOptionGroupsServiceCreateRequest
 */
export declare class QuestionnaireOptionGroupsServiceCreateRequest extends Message<QuestionnaireOptionGroupsServiceCreateRequest> {
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
     * @description The primary, human-readable name of the questionnaire option group.
     *
     * @example "Standard Satisfaction Rating"
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
     * @description The unique alphanumeric code used to internally classify and represent the option group.
     *
     * @example "OPT-SAT-1-5"
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
     * @description A detailed text description outlining the purpose and context of this option group.
     *
     * @example "A standard 1-to-5 rating scale used for general employee satisfaction surveys."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
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
    constructor(data?: PartialMessage<QuestionnaireOptionGroupsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroupsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroupsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServiceCreateRequest;
    static equals(a: QuestionnaireOptionGroupsServiceCreateRequest | PlainMessage<QuestionnaireOptionGroupsServiceCreateRequest> | undefined, b: QuestionnaireOptionGroupsServiceCreateRequest | PlainMessage<QuestionnaireOptionGroupsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for updating an existing Questionnaire Option Group record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the naming, start and end validities and description
 * of an established Questionnaire Option Group.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.QuestionnaireOptionGroupsServiceUpdateRequest
 */
export declare class QuestionnaireOptionGroupsServiceUpdateRequest extends Message<QuestionnaireOptionGroupsServiceUpdateRequest> {
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
     * @description The primary, human-readable name of the questionnaire option group.
     *
     * @example "Standard Satisfaction Rating"
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
     * @description The unique alphanumeric code used to internally classify and represent the option group.
     *
     * @example "OPT-SAT-1-5"
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
     * @description A detailed text description outlining the purpose and context of this option group.
     *
     * @example "A standard 1-to-5 rating scale used for general employee satisfaction surveys."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
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
    constructor(data?: PartialMessage<QuestionnaireOptionGroupsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroupsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroupsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServiceUpdateRequest;
    static equals(a: QuestionnaireOptionGroupsServiceUpdateRequest | PlainMessage<QuestionnaireOptionGroupsServiceUpdateRequest> | undefined, b: QuestionnaireOptionGroupsServiceUpdateRequest | PlainMessage<QuestionnaireOptionGroupsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents a full Questionnaire Option Group within the system.
 *
 * @generated from message Scailo.QuestionnaireOptionGroup
 */
export declare class QuestionnaireOptionGroup extends Message<QuestionnaireOptionGroup> {
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
     * @description The primary, human-readable name of the questionnaire option group.
     *
     * @example "Standard Satisfaction Rating"
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @description The unique alphanumeric code used to internally classify and represent the option group.
     *
     * @example "OPT-SAT-1-5"
     *
     * @generated from field: string code = 11;
     */
    code: string;
    /**
     *
     * @description A detailed text description outlining the purpose and context of this option group.
     *
     * @example "A standard 1-to-5 rating scale used for general employee satisfaction surveys."
     *
     * @generated from field: string description = 13;
     */
    description: string;
    /**
     *
     * @description The aggregated collection of individual predefined answer choices (values) that belong to this option group. For example, if this group is a "Yes/No" scale, this list contains the actual "Yes" and "No" entity records.
     *
     * @generated from field: repeated Scailo.QuestionnaireOptionGroupValue list = 20;
     */
    list: QuestionnaireOptionGroupValue[];
    /**
     *
     * @description Collection of organization-specific dynamic data.
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<QuestionnaireOptionGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroup;
    static equals(a: QuestionnaireOptionGroup | PlainMessage<QuestionnaireOptionGroup> | undefined, b: QuestionnaireOptionGroup | PlainMessage<QuestionnaireOptionGroup> | undefined): boolean;
}
/**
 *
 * Request message for defining and creating a new individual choice (value) within an existing Questionnaire Option Group.
 * This record represents a single distinct answer option (e.g., "Yes", "Highly Satisfied", "N/A")
 * that will be presented to users, explicitly mapping it to its parent group and dictating its display sequence.
 *
 * **Note:** This is utilized by form designers when populating the specific, selectable choices
 * inside a standardized dropdown, radio button group, or rating scale.
 *
 * @generated from message Scailo.QuestionnaireOptionGroupsServiceValueCreateRequest
 */
export declare class QuestionnaireOptionGroupsServiceValueCreateRequest extends Message<QuestionnaireOptionGroupsServiceValueCreateRequest> {
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
     * @description The unique internal identifier of the parent questionnaire option group to which this specific value belongs.
     *
     * @example 105
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 questionnaire_option_group_id = 10;
     */
    questionnaireOptionGroupId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The actual text or string representing the specific answer choice presented to the user.
     *
     * @example "Highly Satisfied"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string value = 11;
     */
    value: string;
    /**
     *
     * @mandatory
     *
     * @description The numerical sequence determining the top-to-bottom or left-to-right display order of this specific value relative to other choices within the same option group.
     *
     * @example 1
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sort_order = 12;
     */
    sortOrder: bigint;
    constructor(data?: PartialMessage<QuestionnaireOptionGroupsServiceValueCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroupsServiceValueCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroupsServiceValueCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServiceValueCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServiceValueCreateRequest;
    static equals(a: QuestionnaireOptionGroupsServiceValueCreateRequest | PlainMessage<QuestionnaireOptionGroupsServiceValueCreateRequest> | undefined, b: QuestionnaireOptionGroupsServiceValueCreateRequest | PlainMessage<QuestionnaireOptionGroupsServiceValueCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for modifying an existing individual choice (value) within a Questionnaire Option Group.
 * This payload allows administrators or form designers to update the textual representation of an answer
 * choice or adjust its display sequence within the group without needing to recreate the entire option list.
 *
 * @generated from message Scailo.QuestionnaireOptionGroupsServiceValueUpdateRequest
 */
export declare class QuestionnaireOptionGroupsServiceValueUpdateRequest extends Message<QuestionnaireOptionGroupsServiceValueUpdateRequest> {
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
     * @description The updated text or string representing the specific answer choice presented to the user.
     *
     * @example "Somewhat Satisfied"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string value = 11;
     */
    value: string;
    /**
     *
     * @mandatory
     *
     * @description The updated numerical sequence determining the top-to-bottom or left-to-right display order of this specific value relative to other choices within the same option group.
     *
     * @example 2
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sort_order = 12;
     */
    sortOrder: bigint;
    constructor(data?: PartialMessage<QuestionnaireOptionGroupsServiceValueUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroupsServiceValueUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroupsServiceValueUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServiceValueUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServiceValueUpdateRequest;
    static equals(a: QuestionnaireOptionGroupsServiceValueUpdateRequest | PlainMessage<QuestionnaireOptionGroupsServiceValueUpdateRequest> | undefined, b: QuestionnaireOptionGroupsServiceValueUpdateRequest | PlainMessage<QuestionnaireOptionGroupsServiceValueUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents the finalized state of a single individual choice (value) associated with a Questionnaire Option Group.
 * This message encapsulates the core mapping of a distinct answer option (e.g., "Yes", "N/A", "5 - Excellent"),
 * including its display sequence, parent group association, and standard compliance metadata.
 *
 * @generated from message Scailo.QuestionnaireOptionGroupValue
 */
export declare class QuestionnaireOptionGroupValue extends Message<QuestionnaireOptionGroupValue> {
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
     * @description The unique internal identifier of the parent questionnaire option group to which this specific value belongs.
     *
     * @example 105
     *
     * @generated from field: uint64 questionnaire_option_group_id = 10;
     */
    questionnaireOptionGroupId: bigint;
    /**
     *
     * @description The actual text or string representing the specific answer choice presented to the user.
     *
     * @example "Highly Satisfied"
     *
     * @generated from field: string value = 11;
     */
    value: string;
    /**
     *
     * @description The numerical sequence determining the top-to-bottom or left-to-right display order of this specific value relative to other choices within the same option group.
     *
     * @example 1
     *
     * @generated from field: uint64 sort_order = 12;
     */
    sortOrder: bigint;
    constructor(data?: PartialMessage<QuestionnaireOptionGroupValue>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroupValue";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroupValue;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupValue;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupValue;
    static equals(a: QuestionnaireOptionGroupValue | PlainMessage<QuestionnaireOptionGroupValue> | undefined, b: QuestionnaireOptionGroupValue | PlainMessage<QuestionnaireOptionGroupValue> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Questionnaire Option Group records.
 *
 * @generated from message Scailo.QuestionnaireOptionGroupsList
 */
export declare class QuestionnaireOptionGroupsList extends Message<QuestionnaireOptionGroupsList> {
    /**
     * @description An array of Questionnaire Option Group records.
     *
     * @generated from field: repeated Scailo.QuestionnaireOptionGroup list = 1;
     */
    list: QuestionnaireOptionGroup[];
    constructor(data?: PartialMessage<QuestionnaireOptionGroupsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroupsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroupsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsList;
    static equals(a: QuestionnaireOptionGroupsList | PlainMessage<QuestionnaireOptionGroupsList> | undefined, b: QuestionnaireOptionGroupsList | PlainMessage<QuestionnaireOptionGroupsList> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Questionnaire Option Group Value records.
 *
 * @generated from message Scailo.QuestionnaireOptionGroupsValuesList
 */
export declare class QuestionnaireOptionGroupsValuesList extends Message<QuestionnaireOptionGroupsValuesList> {
    /**
     * @description An array of Questionnaire Option Group Value records.
     *
     * @generated from field: repeated Scailo.QuestionnaireOptionGroupValue list = 1;
     */
    list: QuestionnaireOptionGroupValue[];
    constructor(data?: PartialMessage<QuestionnaireOptionGroupsValuesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroupsValuesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroupsValuesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsValuesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsValuesList;
    static equals(a: QuestionnaireOptionGroupsValuesList | PlainMessage<QuestionnaireOptionGroupsValuesList> | undefined, b: QuestionnaireOptionGroupsValuesList | PlainMessage<QuestionnaireOptionGroupsValuesList> | undefined): boolean;
}
/**
 *
 * Represents the request payload containing the parameter constraints required to
 * retrieve the historical audit trail and lifecycle changes of a specific questionnaire option group value record.
 *
 * @generated from message Scailo.QuestionnaireOptionGroupValueHistoryRequest
 */
export declare class QuestionnaireOptionGroupValueHistoryRequest extends Message<QuestionnaireOptionGroupValueHistoryRequest> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the parent questionnaire option group to which this specific value belongs.
     *
     * @example 105
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 questionnaire_option_group_id = 10;
     */
    questionnaireOptionGroupId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The numerical sequence determining the top-to-bottom or left-to-right display order of this specific value relative to other choices within the same option group.
     *
     * @example 1
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sort_order = 12;
     */
    sortOrder: bigint;
    constructor(data?: PartialMessage<QuestionnaireOptionGroupValueHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroupValueHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroupValueHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupValueHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupValueHistoryRequest;
    static equals(a: QuestionnaireOptionGroupValueHistoryRequest | PlainMessage<QuestionnaireOptionGroupValueHistoryRequest> | undefined, b: QuestionnaireOptionGroupValueHistoryRequest | PlainMessage<QuestionnaireOptionGroupValueHistoryRequest> | undefined): boolean;
}
/**
 *
 * Request payload structure used to search and filter Questionnaire Option Group Value records.
 * Supports pagination controls, tenancy isolation, status grouping, and text-based matching.
 *
 * @generated from message Scailo.QuestionnaireOptionGroupValuesSearchRequest
 */
export declare class QuestionnaireOptionGroupValuesSearchRequest extends Message<QuestionnaireOptionGroupValuesSearchRequest> {
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
     * @generated from field: optional Scailo.QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY sort_key = 5;
     */
    sortKey?: QUESTIONNAIRE_OPTION_GROUP_VALUE_SORT_KEY;
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
     * @example QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS_APPROVED
     *
     * @generated from field: optional Scailo.QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS status = 7;
     */
    status?: QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS;
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
     * @description The unique internal identifier of the parent questionnaire option group to which this specific value belongs.
     *
     * @example 105
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 questionnaire_option_group_id = 20;
     */
    questionnaireOptionGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description Alphanumeric key phrase or keyword token used to perform lookup matches across searchable fields.
     *
     * @example "Item A"
     *
     * @regex .*
     *
     * @format String value, can be empty.
     *
     * @generated from field: optional string search_key = 40;
     */
    searchKey?: string;
    constructor(data?: PartialMessage<QuestionnaireOptionGroupValuesSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroupValuesSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroupValuesSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupValuesSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupValuesSearchRequest;
    static equals(a: QuestionnaireOptionGroupValuesSearchRequest | PlainMessage<QuestionnaireOptionGroupValuesSearchRequest> | undefined, b: QuestionnaireOptionGroupValuesSearchRequest | PlainMessage<QuestionnaireOptionGroupValuesSearchRequest> | undefined): boolean;
}
/**
 *
 * Paginated response packet containing a subset of Questionnaire Option Group Value records.
 * Includes complete operational state parameters for rendering frontend data grids and tables.
 *
 * @generated from message Scailo.QuestionnaireOptionGroupsServicePaginatedValuesResponse
 */
export declare class QuestionnaireOptionGroupsServicePaginatedValuesResponse extends Message<QuestionnaireOptionGroupsServicePaginatedValuesResponse> {
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
     * @generated from field: repeated Scailo.QuestionnaireOptionGroupValue payload = 4;
     */
    payload: QuestionnaireOptionGroupValue[];
    constructor(data?: PartialMessage<QuestionnaireOptionGroupsServicePaginatedValuesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroupsServicePaginatedValuesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroupsServicePaginatedValuesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServicePaginatedValuesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServicePaginatedValuesResponse;
    static equals(a: QuestionnaireOptionGroupsServicePaginatedValuesResponse | PlainMessage<QuestionnaireOptionGroupsServicePaginatedValuesResponse> | undefined, b: QuestionnaireOptionGroupsServicePaginatedValuesResponse | PlainMessage<QuestionnaireOptionGroupsServicePaginatedValuesResponse> | undefined): boolean;
}
/**
 *
 * Pagination request for retrieving slices of Questionnaire Option Group records.
 *
 * @generated from message Scailo.QuestionnaireOptionGroupsServicePaginationReq
 */
export declare class QuestionnaireOptionGroupsServicePaginationReq extends Message<QuestionnaireOptionGroupsServicePaginationReq> {
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
     * @generated from field: optional Scailo.QUESTIONNAIRE_OPTION_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey?: QUESTIONNAIRE_OPTION_GROUP_SORT_KEY;
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
    constructor(data?: PartialMessage<QuestionnaireOptionGroupsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroupsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroupsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServicePaginationReq;
    static equals(a: QuestionnaireOptionGroupsServicePaginationReq | PlainMessage<QuestionnaireOptionGroupsServicePaginationReq> | undefined, b: QuestionnaireOptionGroupsServicePaginationReq | PlainMessage<QuestionnaireOptionGroupsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.QuestionnaireOptionGroupsServicePaginationResponse
 */
export declare class QuestionnaireOptionGroupsServicePaginationResponse extends Message<QuestionnaireOptionGroupsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.QuestionnaireOptionGroup payload = 4;
     */
    payload: QuestionnaireOptionGroup[];
    constructor(data?: PartialMessage<QuestionnaireOptionGroupsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroupsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroupsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServicePaginationResponse;
    static equals(a: QuestionnaireOptionGroupsServicePaginationResponse | PlainMessage<QuestionnaireOptionGroupsServicePaginationResponse> | undefined, b: QuestionnaireOptionGroupsServicePaginationResponse | PlainMessage<QuestionnaireOptionGroupsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Advanced filter request for searching and paginating questionnaire option groups using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.QuestionnaireOptionGroupsServiceFilterReq
 */
export declare class QuestionnaireOptionGroupsServiceFilterReq extends Message<QuestionnaireOptionGroupsServiceFilterReq> {
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
     * @generated from field: optional Scailo.QUESTIONNAIRE_OPTION_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey?: QUESTIONNAIRE_OPTION_GROUP_SORT_KEY;
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
     * @description The primary, human-readable name of the questionnaire option group.
     *
     * @example "Standard Satisfaction Rating"
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
     * @description The unique alphanumeric code used to internally classify and represent the option group.
     *
     * @example "OPT-SAT-1-5"
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
    constructor(data?: PartialMessage<QuestionnaireOptionGroupsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroupsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroupsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServiceFilterReq;
    static equals(a: QuestionnaireOptionGroupsServiceFilterReq | PlainMessage<QuestionnaireOptionGroupsServiceFilterReq> | undefined, b: QuestionnaireOptionGroupsServiceFilterReq | PlainMessage<QuestionnaireOptionGroupsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Target filter request for counting questionnaire option group records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.QuestionnaireOptionGroupsServiceCountReq
 */
export declare class QuestionnaireOptionGroupsServiceCountReq extends Message<QuestionnaireOptionGroupsServiceCountReq> {
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
     * @description The primary, human-readable name of the questionnaire option group.
     *
     * @example "Standard Satisfaction Rating"
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
     * @description The unique alphanumeric code used to internally classify and represent the option group.
     *
     * @example "OPT-SAT-1-5"
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
     * @description Count based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<QuestionnaireOptionGroupsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroupsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroupsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServiceCountReq;
    static equals(a: QuestionnaireOptionGroupsServiceCountReq | PlainMessage<QuestionnaireOptionGroupsServiceCountReq> | undefined, b: QuestionnaireOptionGroupsServiceCountReq | PlainMessage<QuestionnaireOptionGroupsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Broad-spectrum search and lookup request for locating and paginating questionnaire option groups via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.QuestionnaireOptionGroupsServiceSearchAllReq
 */
export declare class QuestionnaireOptionGroupsServiceSearchAllReq extends Message<QuestionnaireOptionGroupsServiceSearchAllReq> {
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
     * @generated from field: optional Scailo.QUESTIONNAIRE_OPTION_GROUP_SORT_KEY sort_key = 5;
     */
    sortKey?: QUESTIONNAIRE_OPTION_GROUP_SORT_KEY;
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
    constructor(data?: PartialMessage<QuestionnaireOptionGroupsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.QuestionnaireOptionGroupsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuestionnaireOptionGroupsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuestionnaireOptionGroupsServiceSearchAllReq;
    static equals(a: QuestionnaireOptionGroupsServiceSearchAllReq | PlainMessage<QuestionnaireOptionGroupsServiceSearchAllReq> | undefined, b: QuestionnaireOptionGroupsServiceSearchAllReq | PlainMessage<QuestionnaireOptionGroupsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=questionnaire_option_groups.scailo_pb.d.ts.map