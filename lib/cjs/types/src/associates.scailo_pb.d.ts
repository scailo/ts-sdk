import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Defines the available organizational entity types that an associate can be mapped or linked to.
 *
 * This enumeration is primarily utilized across filtering workflows, search indices,
 * and relationship routing matrices to classify an associate's organizational alignment.
 *
 * @generated from enum Scailo.ASSOCIATE_ORG_REF_FROM
 */
export declare enum ASSOCIATE_ORG_REF_FROM {
    /**
     * Default fallback value. Evaluates to any or all types during broad filter queries.
     *
     * This option is reserved exclusively for wide-scope search criteria and should not
     * be used as a permanent state value on a persisted record.
     *
     * @generated from enum value: ASSOCIATE_ORG_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    ASSOCIATE_ORG_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Indicates that the associate currently maintains no organizational mapping.
     *
     * Use this state to locate unassigned, orphaned, or standalone associate profiles.
     *
     * @generated from enum value: ASSOCIATE_ORG_REF_FROM_EMPTY = 1;
     */
    ASSOCIATE_ORG_REF_FROM_EMPTY = 1,
    /**
     * Indicates that the associate is officially linked to an external Client profile.
     *
     * This mapping governs relevant customer-facing workflows, access permissions, and billing routing.
     *
     * @generated from enum value: ASSOCIATE_ORG_REF_FROM_CLIENT = 2;
     */
    ASSOCIATE_ORG_REF_FROM_CLIENT = 2,
    /**
     * Indicates that the associate is officially linked to an external Vendor or Supplier profile.
     *
     * This mapping governs supply chain linkages, procurement authorization, and fulfillment tracking.
     *
     * @generated from enum value: ASSOCIATE_ORG_REF_FROM_VENDOR = 3;
     */
    ASSOCIATE_ORG_REF_FROM_VENDOR = 3
}
/**
 *
 * Enumeration of fields available for sorting associate search results.
 *
 * @generated from enum Scailo.ASSOCIATE_SORT_KEY
 */
export declare enum ASSOCIATE_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ASSOCIATE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_CREATED_AT = 1;
     */
    ASSOCIATE_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_MODIFIED_AT = 2;
     */
    ASSOCIATE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort alphabetically by the user-provided first name.
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_FIRST_NAME = 10;
     */
    ASSOCIATE_SORT_KEY_FIRST_NAME = 10,
    /**
     * @description Sort alphabetically by the user-provided middle name.
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_MIDDLE_NAME = 11;
     */
    ASSOCIATE_SORT_KEY_MIDDLE_NAME = 11,
    /**
     * @description Sort alphabetically by the user-provided last name.
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_LAST_NAME = 12;
     */
    ASSOCIATE_SORT_KEY_LAST_NAME = 12,
    /**
     * @description Sort alphabetically by the user-provided organization name.
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_ORG_NAME = 13;
     */
    ASSOCIATE_SORT_KEY_ORG_NAME = 13,
    /**
     * @description Sort alphabetically by the user-provided job title.
     *
     * @generated from enum value: ASSOCIATE_SORT_KEY_JOB_TITLE = 14;
     */
    ASSOCIATE_SORT_KEY_JOB_TITLE = 14
}
/**
 *
 * Represents a full Associate within the system.
 *
 * @generated from message Scailo.Associate
 */
export declare class Associate extends Message<Associate> {
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
     * @description Link to the document storage folder.
     *
     * @example 15234
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     *
     * @description The legal first name of the associate. Space characters are strictly prohibited.
     *
     * @example "John"
     *
     * @generated from field: string first_name = 10;
     */
    firstName: string;
    /**
     *
     * @description The legal middle name of the associate. Space characters are strictly prohibited.
     *
     * @example "Fitzgerald"
     *
     * @generated from field: string middle_name = 11;
     */
    middleName: string;
    /**
     *
     * @description The legal last name of the associate. Space characters are strictly prohibited.
     *
     * @example "Doe"
     *
     * @generated from field: string last_name = 12;
     */
    lastName: string;
    /**
     *
     * @description Identifies the type of external organization mapping (e.g., Client, Vendor, or None).
     *
     * @example ASSOCIATE_ORG_REF_FROM_EMPTY
     *
     * @generated from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;
     */
    orgRefFrom: ASSOCIATE_ORG_REF_FROM;
    /**
     *
     * @description The numeric sequence identifier matching the targeted external Client or Vendor entity.
     *
     * @example 8923
     *
     * @generated from field: uint64 org_ref_id = 14;
     */
    orgRefId: bigint;
    /**
     *
     * @description The display name of the organization the associate represents.
     *
     * @example "Acme Inc"
     *
     * @note If an explicit `org_ref_id` is supplied, this field will be automatically overwritten and populated by the backend.
     *
     * @generated from field: string org_name = 15;
     */
    orgName: string;
    /**
     *
     * @description The professional job title held by the associate.
     *
     * @example "Operations Manager"
     *
     * @generated from field: string job_title = 16;
     */
    jobTitle: string;
    /**
     *
     * @description The corporate department or division to which the associate is assigned.
     *
     * @example "Field Operations"
     *
     * @generated from field: string department = 17;
     */
    department: string;
    /**
     *
     * @description The primary work or corporate telephone number for contacting the associate.
     *
     * @example "+12125550123"
     *
     * @generated from field: string work_phone = 18;
     */
    workPhone: string;
    /**
     *
     * @description The primary business-related email address for the associate.
     *
     * @example "j.doe@corporate-hub.com"
     *
     * @generated from field: string work_email = 19;
     */
    workEmail: string;
    /**
     *
     * @description The personal or secondary mobile phone number for the associate.
     *
     * @example "+12125550123"
     *
     * @generated from field: string personal_phone = 20;
     */
    personalPhone: string;
    /**
     *
     * @description The personal or non-work email address for the associate.
     *
     * @example "j.doe@personal.com"
     *
     * @generated from field: string personal_email = 21;
     */
    personalEmail: string;
    /**
     *
     * @description The calendar date of birth of the associate.
     *
     * @example "Mon Jan 02 2006"
     *
     * @generated from field: string birthday = 22;
     */
    birthday: string;
    /**
     *
     * @description The corporate or employment start anniversary date of the associate.
     *
     * @example "Mon Jan 02 2016"
     *
     * @generated from field: string anniversary = 23;
     */
    anniversary: string;
    /**
     *
     * @description A comprehensive text description, biography, or operational notes regarding the associate.
     *
     * @example "This is a longer description about the associate"
     *
     * @generated from field: string description = 24;
     */
    description: string;
    constructor(data?: PartialMessage<Associate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Associate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Associate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Associate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Associate;
    static equals(a: Associate | PlainMessage<Associate> | undefined, b: Associate | PlainMessage<Associate> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Associate records.
 *
 * @generated from message Scailo.AssociatesList
 */
export declare class AssociatesList extends Message<AssociatesList> {
    /**
     * @description An array of Associate records.
     *
     * @generated from field: repeated Scailo.Associate list = 1;
     */
    list: Associate[];
    constructor(data?: PartialMessage<AssociatesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesList;
    static equals(a: AssociatesList | PlainMessage<AssociatesList> | undefined, b: AssociatesList | PlainMessage<AssociatesList> | undefined): boolean;
}
/**
 *
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.AssociatePaginationResp
 */
export declare class AssociatePaginationResp extends Message<AssociatePaginationResp> {
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
     * @generated from field: repeated Scailo.Associate payload = 4;
     */
    payload: Associate[];
    constructor(data?: PartialMessage<AssociatePaginationResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatePaginationResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatePaginationResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatePaginationResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatePaginationResp;
    static equals(a: AssociatePaginationResp | PlainMessage<AssociatePaginationResp> | undefined, b: AssociatePaginationResp | PlainMessage<AssociatePaginationResp> | undefined): boolean;
}
/**
 *
 * Represents the structured payload required to initialize and create an associate record.
 * Contains primary profile attributes, contact information, organizational mapping data,
 * and operational metadata.
 *
 * @generated from message Scailo.AssociatesServiceCreateRequest
 */
export declare class AssociatesServiceCreateRequest extends Message<AssociatesServiceCreateRequest> {
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
     * @description The legal first name of the associate. Space characters are strictly prohibited.
     *
     * @example "John"
     *
     * @regex ^[0-9A-Za-z]+$
     *
     * @format Alphanumeric characters only. Maximum length of 256 characters.
     *
     * @generated from field: string first_name = 10;
     */
    firstName: string;
    /**
     *
     * @optional
     *
     * @description The legal middle name of the associate. Space characters are strictly prohibited.
     *
     * @example "Fitzgerald"
     *
     * @regex ^[0-9A-Za-z]*$
     *
     * @format Alphanumeric characters only. Maximum length of 256 characters.
     *
     * @generated from field: optional string middle_name = 11;
     */
    middleName?: string;
    /**
     *
     * @optional
     *
     * @description The legal last name of the associate. Space characters are strictly prohibited.
     *
     * @example "Doe"
     *
     * @regex ^[0-9A-Za-z]*$
     *
     * @format Alphanumeric characters only. Maximum length of 256 characters.
     *
     * @generated from field: optional string last_name = 12;
     */
    lastName?: string;
    /**
     *
     * @mandatory
     *
     * @description Identifies the type of external organization mapping (e.g., Client, Vendor, or None).
     *
     * @example ASSOCIATE_ORG_REF_FROM_EMPTY
     *
     * @format Must align with valid states within the ASSOCIATE_ORG_REF_FROM enum definition.
     *
     * @generated from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;
     */
    orgRefFrom: ASSOCIATE_ORG_REF_FROM;
    /**
     *
     * @optional
     *
     * @description The numeric sequence identifier matching the targeted external Client or Vendor entity.
     *
     * @example 8923
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer. Evaluated and validated in conjunction with the `org_ref_from` selector.
     *
     * @generated from field: optional uint64 org_ref_id = 14;
     */
    orgRefId?: bigint;
    /**
     *
     * @optional
     *
     * @description The display name of the organization the associate represents.
     *
     * @example "Acme Inc"
     *
     * @note If an explicit `org_ref_id` is supplied, this field will be automatically overwritten and populated by the backend.
     *
     * @regex ^[0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces allowed. Maximum length of 256 characters.
     *
     * @generated from field: optional string org_name = 15;
     */
    orgName?: string;
    /**
     *
     * @optional
     *
     * @description The professional job title held by the associate.
     *
     * @example "Operations Manager"
     *
     * @regex ^[0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces allowed. Maximum length of 256 characters.
     *
     * @generated from field: optional string job_title = 16;
     */
    jobTitle?: string;
    /**
     *
     * @optional
     *
     * @description The corporate department or division to which the associate is assigned.
     *
     * @example "Field Operations"
     *
     * @regex ^[0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces allowed. Maximum length of 256 characters.
     *
     * @generated from field: optional string department = 17;
     */
    department?: string;
    /**
     *
     * @optional
     *
     * @description The primary work or corporate telephone number for contacting the associate.
     *
     * @example "+12125550123"
     *
     * @regex .+
     *
     * @format Non-empty string; adoption of standard international E.164 formats is highly recommended.
     *
     * @generated from field: optional string work_phone = 18;
     */
    workPhone?: string;
    /**
     *
     * @optional
     *
     * @description The primary business-related email address for the associate.
     *
     * @example "j.doe@corporate-hub.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format If provided, must be a valid email address string.
     *
     * @generated from field: optional string work_email = 19;
     */
    workEmail?: string;
    /**
     *
     * @optional
     *
     * @description The personal or secondary mobile phone number for the associate.
     *
     * @example "+12125550123"
     *
     * @regex .+
     *
     * @format Non-empty string; adoption of standard international E.164 formats is highly recommended.
     *
     * @generated from field: optional string personal_phone = 20;
     */
    personalPhone?: string;
    /**
     *
     * @optional
     *
     * @description The personal or non-work email address for the associate.
     *
     * @example "j.doe@personal.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format If provided, must be a valid email address string.
     *
     * @generated from field: optional string personal_email = 21;
     */
    personalEmail?: string;
    /**
     *
     * @optional
     *
     * @description The calendar date of birth of the associate.
     *
     * @example "Mon Jan 02 2006"
     *
     * @regex .*
     *
     * @format Must follow the specific string syntax format: `Day Month Date Year`.
     *
     * @generated from field: optional string birthday = 22;
     */
    birthday?: string;
    /**
     *
     * @optional
     *
     * @description The corporate or employment start anniversary date of the associate.
     *
     * @example "Mon Jan 02 2016"
     *
     * @regex .*
     *
     * @format Must follow the specific string syntax format: `Day Month Date Year`.
     *
     * @generated from field: optional string anniversary = 23;
     */
    anniversary?: string;
    /**
     *
     * @optional
     *
     * @description A comprehensive text description, biography, or operational notes regarding the associate.
     *
     * @example "This is a longer description about the associate"
     *
     * @regex .*
     *
     * @format Supports free-form UTF-8 text representation.
     *
     * @generated from field: optional string description = 24;
     */
    description?: string;
    constructor(data?: PartialMessage<AssociatesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceCreateRequest;
    static equals(a: AssociatesServiceCreateRequest | PlainMessage<AssociatesServiceCreateRequest> | undefined, b: AssociatesServiceCreateRequest | PlainMessage<AssociatesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the necessary data structure to import a list of associates
 *
 * @generated from message Scailo.AssociatesServiceImportRequest
 */
export declare class AssociatesServiceImportRequest extends Message<AssociatesServiceImportRequest> {
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
     * The list of associates that need to be imported
     *
     * @generated from field: repeated Scailo.AssociatesServiceCreateRequest list = 10;
     */
    list: AssociatesServiceCreateRequest[];
    constructor(data?: PartialMessage<AssociatesServiceImportRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesServiceImportRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceImportRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceImportRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceImportRequest;
    static equals(a: AssociatesServiceImportRequest | PlainMessage<AssociatesServiceImportRequest> | undefined, b: AssociatesServiceImportRequest | PlainMessage<AssociatesServiceImportRequest> | undefined): boolean;
}
/**
 *
 * Describes the data structure to perform the update (draft/revision) operation on a associate
 *
 * @generated from message Scailo.AssociatesServiceUpdateRequest
 */
export declare class AssociatesServiceUpdateRequest extends Message<AssociatesServiceUpdateRequest> {
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
     * @description The legal first name of the associate. Space characters are strictly prohibited.
     *
     * @example "John"
     *
     * @regex ^[0-9A-Za-z]+$
     *
     * @format Alphanumeric characters only. Maximum length of 256 characters.
     *
     * @generated from field: optional string first_name = 10;
     */
    firstName?: string;
    /**
     *
     * @optional
     *
     * @description The legal middle name of the associate. Space characters are strictly prohibited.
     *
     * @example "Fitzgerald"
     *
     * @regex ^[0-9A-Za-z]*$
     *
     * @format Alphanumeric characters only. Maximum length of 256 characters.
     *
     * @generated from field: optional string middle_name = 11;
     */
    middleName?: string;
    /**
     *
     * @optional
     *
     * @description The legal last name of the associate. Space characters are strictly prohibited.
     *
     * @example "Doe"
     *
     * @regex ^[0-9A-Za-z]*$
     *
     * @format Alphanumeric characters only. Maximum length of 256 characters.
     *
     * @generated from field: optional string last_name = 12;
     */
    lastName?: string;
    /**
     *
     * @optional
     *
     * @description Identifies the type of external organization mapping (e.g., Client, Vendor, or None).
     *
     * @example ASSOCIATE_ORG_REF_FROM_EMPTY
     *
     * @format Must align with valid states within the ASSOCIATE_ORG_REF_FROM enum definition.
     *
     * @generated from field: optional Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;
     */
    orgRefFrom?: ASSOCIATE_ORG_REF_FROM;
    /**
     *
     * @optional
     *
     * @description The numeric sequence identifier matching the targeted external Client or Vendor entity.
     *
     * @example 8923
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer. Evaluated and validated in conjunction with the `org_ref_from` selector.
     *
     * @generated from field: optional uint64 org_ref_id = 14;
     */
    orgRefId?: bigint;
    /**
     *
     * @optional
     *
     * @description The display name of the organization the associate represents.
     *
     * @example "Acme Inc"
     *
     * @note If an explicit `org_ref_id` is supplied, this field will be automatically overwritten and populated by the backend.
     *
     * @regex ^[0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces allowed. Maximum length of 256 characters.
     *
     * @generated from field: optional string org_name = 15;
     */
    orgName?: string;
    /**
     *
     * @optional
     *
     * @description The professional job title held by the associate.
     *
     * @example "Operations Manager"
     *
     * @regex ^[0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces allowed. Maximum length of 256 characters.
     *
     * @generated from field: optional string job_title = 16;
     */
    jobTitle?: string;
    /**
     *
     * @optional
     *
     * @description The corporate department or division to which the associate is assigned.
     *
     * @example "Field Operations"
     *
     * @regex ^[0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces allowed. Maximum length of 256 characters.
     *
     * @generated from field: optional string department = 17;
     */
    department?: string;
    /**
     *
     * @optional
     *
     * @description The primary work or corporate telephone number for contacting the associate.
     *
     * @example "+12125550123"
     *
     * @regex .+
     *
     * @format Non-empty string; adoption of standard international E.164 formats is highly recommended.
     *
     * @generated from field: optional string work_phone = 18;
     */
    workPhone?: string;
    /**
     *
     * @optional
     *
     * @description The primary business-related email address for the associate.
     *
     * @example "j.doe@corporate-hub.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format If provided, must be a valid email address string.
     *
     * @generated from field: optional string work_email = 19;
     */
    workEmail?: string;
    /**
     *
     * @optional
     *
     * @description The personal or secondary mobile phone number for the associate.
     *
     * @example "+12125550123"
     *
     * @regex .+
     *
     * @format Non-empty string; adoption of standard international E.164 formats is highly recommended.
     *
     * @generated from field: optional string personal_phone = 20;
     */
    personalPhone?: string;
    /**
     *
     * @optional
     *
     * @description The personal or non-work email address for the associate.
     *
     * @example "j.doe@personal.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format If provided, must be a valid email address string.
     *
     * @generated from field: optional string personal_email = 21;
     */
    personalEmail?: string;
    /**
     *
     * @optional
     *
     * @description The calendar date of birth of the associate.
     *
     * @example "Mon Jan 02 2006"
     *
     * @regex .*
     *
     * @format Must follow the specific string syntax format: `Day Month Date Year`.
     *
     * @generated from field: optional string birthday = 22;
     */
    birthday?: string;
    /**
     *
     * @optional
     *
     * @description The corporate or employment start anniversary date of the associate.
     *
     * @example "Mon Jan 02 2016"
     *
     * @regex .*
     *
     * @format Must follow the specific string syntax format: `Day Month Date Year`.
     *
     * @generated from field: optional string anniversary = 23;
     */
    anniversary?: string;
    /**
     *
     * @optional
     *
     * @description A comprehensive text description, biography, or operational notes regarding the associate.
     *
     * @example "This is a longer description about the associate"
     *
     * @regex .*
     *
     * @format Supports free-form UTF-8 text representation.
     *
     * @generated from field: optional string description = 24;
     */
    description?: string;
    constructor(data?: PartialMessage<AssociatesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceUpdateRequest;
    static equals(a: AssociatesServiceUpdateRequest | PlainMessage<AssociatesServiceUpdateRequest> | undefined, b: AssociatesServiceUpdateRequest | PlainMessage<AssociatesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Pagination request for retrieving slices of Associate records.
 *
 * @generated from message Scailo.AssociatesServicePaginationReq
 */
export declare class AssociatesServicePaginationReq extends Message<AssociatesServicePaginationReq> {
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
     * @generated from field: optional Scailo.ASSOCIATE_SORT_KEY sort_key = 5;
     */
    sortKey?: ASSOCIATE_SORT_KEY;
    constructor(data?: PartialMessage<AssociatesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServicePaginationReq;
    static equals(a: AssociatesServicePaginationReq | PlainMessage<AssociatesServicePaginationReq> | undefined, b: AssociatesServicePaginationReq | PlainMessage<AssociatesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Advanced filter request for searching and paginating associates using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.AssociatesServiceFilterReq
 */
export declare class AssociatesServiceFilterReq extends Message<AssociatesServiceFilterReq> {
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
     * @generated from field: optional Scailo.ASSOCIATE_SORT_KEY sort_key = 5;
     */
    sortKey?: ASSOCIATE_SORT_KEY;
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
     * @description The legal first name of the associate. Space characters are strictly prohibited.
     *
     * @example "John"
     *
     * @regex ^[0-9A-Za-z]+$
     *
     * @format Alphanumeric characters only. Maximum length of 256 characters.
     *
     * @generated from field: optional string first_name = 10;
     */
    firstName?: string;
    /**
     *
     * @optional
     *
     * @description The legal middle name of the associate. Space characters are strictly prohibited.
     *
     * @example "Fitzgerald"
     *
     * @regex ^[0-9A-Za-z]*$
     *
     * @format Alphanumeric characters only. Maximum length of 256 characters.
     *
     * @generated from field: optional string middle_name = 11;
     */
    middleName?: string;
    /**
     *
     * @optional
     *
     * @description The legal last name of the associate. Space characters are strictly prohibited.
     *
     * @example "Doe"
     *
     * @regex ^[0-9A-Za-z]*$
     *
     * @format Alphanumeric characters only. Maximum length of 256 characters.
     *
     * @generated from field: optional string last_name = 12;
     */
    lastName?: string;
    /**
     *
     * @optional
     *
     * @description Identifies the type of external organization mapping (e.g., Client, Vendor, or None).
     *
     * @example ASSOCIATE_ORG_REF_FROM_EMPTY
     *
     * @format Must align with valid states within the ASSOCIATE_ORG_REF_FROM enum definition.
     *
     * @generated from field: optional Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;
     */
    orgRefFrom?: ASSOCIATE_ORG_REF_FROM;
    /**
     *
     * @optional
     *
     * @description The numeric sequence identifier matching the targeted external Client or Vendor entity.
     *
     * @example 8923
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer. Evaluated and validated in conjunction with the `org_ref_from` selector.
     *
     * @generated from field: optional uint64 org_ref_id = 14;
     */
    orgRefId?: bigint;
    /**
     *
     * @optional
     *
     * @description The display name of the organization the associate represents.
     *
     * @example "Acme Inc"
     *
     * @note If an explicit `org_ref_id` is supplied, this field will be automatically overwritten and populated by the backend.
     *
     * @regex ^[0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces allowed. Maximum length of 256 characters.
     *
     * @generated from field: optional string org_name = 15;
     */
    orgName?: string;
    /**
     *
     * @optional
     *
     * @description The professional job title held by the associate.
     *
     * @example "Operations Manager"
     *
     * @regex ^[0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces allowed. Maximum length of 256 characters.
     *
     * @generated from field: optional string job_title = 16;
     */
    jobTitle?: string;
    /**
     *
     * @optional
     *
     * @description The corporate department or division to which the associate is assigned.
     *
     * @example "Field Operations"
     *
     * @regex ^[0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces allowed. Maximum length of 256 characters.
     *
     * @generated from field: optional string department = 17;
     */
    department?: string;
    /**
     *
     * @optional
     *
     * @description The primary work or corporate telephone number for contacting the associate.
     *
     * @example "+12125550123"
     *
     * @regex .+
     *
     * @format Non-empty string; adoption of standard international E.164 formats is highly recommended.
     *
     * @generated from field: optional string work_phone = 18;
     */
    workPhone?: string;
    /**
     *
     * @optional
     *
     * @description The primary business-related email address for the associate.
     *
     * @example "j.doe@corporate-hub.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format If provided, must be a valid email address string.
     *
     * @generated from field: optional string work_email = 19;
     */
    workEmail?: string;
    /**
     *
     * @optional
     *
     * @description The personal or secondary mobile phone number for the associate.
     *
     * @example "+12125550123"
     *
     * @regex .+
     *
     * @format Non-empty string; adoption of standard international E.164 formats is highly recommended.
     *
     * @generated from field: optional string personal_phone = 20;
     */
    personalPhone?: string;
    /**
     *
     * @optional
     *
     * @description The personal or non-work email address for the associate.
     *
     * @example "j.doe@personal.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format If provided, must be a valid email address string.
     *
     * @generated from field: optional string personal_email = 21;
     */
    personalEmail?: string;
    /**
     *
     * @optional
     *
     * @description Filter results to retrieve only the associates associated with or belonging to a specific Vendor.
     *
     * @example 5402
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 vendor_id = 50;
     */
    vendorId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter results to retrieve only the associates associated with or belonging to a specific Client.
     *
     * @example 9107
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 client_id = 60;
     */
    clientId?: bigint;
    constructor(data?: PartialMessage<AssociatesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceFilterReq;
    static equals(a: AssociatesServiceFilterReq | PlainMessage<AssociatesServiceFilterReq> | undefined, b: AssociatesServiceFilterReq | PlainMessage<AssociatesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Target filter request for counting associate records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.AssociatesServiceCountReq
 */
export declare class AssociatesServiceCountReq extends Message<AssociatesServiceCountReq> {
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
     * @description The legal first name of the associate. Space characters are strictly prohibited.
     *
     * @example "John"
     *
     * @regex ^[0-9A-Za-z]+$
     *
     * @format Alphanumeric characters only. Maximum length of 256 characters.
     *
     * @generated from field: optional string first_name = 10;
     */
    firstName?: string;
    /**
     *
     * @optional
     *
     * @description The legal middle name of the associate. Space characters are strictly prohibited.
     *
     * @example "Fitzgerald"
     *
     * @regex ^[0-9A-Za-z]*$
     *
     * @format Alphanumeric characters only. Maximum length of 256 characters.
     *
     * @generated from field: optional string middle_name = 11;
     */
    middleName?: string;
    /**
     *
     * @optional
     *
     * @description The legal last name of the associate. Space characters are strictly prohibited.
     *
     * @example "Doe"
     *
     * @regex ^[0-9A-Za-z]*$
     *
     * @format Alphanumeric characters only. Maximum length of 256 characters.
     *
     * @generated from field: optional string last_name = 12;
     */
    lastName?: string;
    /**
     *
     * @optional
     *
     * @description Identifies the type of external organization mapping (e.g., Client, Vendor, or None).
     *
     * @example ASSOCIATE_ORG_REF_FROM_EMPTY
     *
     * @format Must align with valid states within the ASSOCIATE_ORG_REF_FROM enum definition.
     *
     * @generated from field: optional Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;
     */
    orgRefFrom?: ASSOCIATE_ORG_REF_FROM;
    /**
     *
     * @optional
     *
     * @description The numeric sequence identifier matching the targeted external Client or Vendor entity.
     *
     * @example 8923
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer. Evaluated and validated in conjunction with the `org_ref_from` selector.
     *
     * @generated from field: optional uint64 org_ref_id = 14;
     */
    orgRefId?: bigint;
    /**
     *
     * @optional
     *
     * @description The display name of the organization the associate represents.
     *
     * @example "Acme Inc"
     *
     * @note If an explicit `org_ref_id` is supplied, this field will be automatically overwritten and populated by the backend.
     *
     * @regex ^[0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces allowed. Maximum length of 256 characters.
     *
     * @generated from field: optional string org_name = 15;
     */
    orgName?: string;
    /**
     *
     * @optional
     *
     * @description The professional job title held by the associate.
     *
     * @example "Operations Manager"
     *
     * @regex ^[0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces allowed. Maximum length of 256 characters.
     *
     * @generated from field: optional string job_title = 16;
     */
    jobTitle?: string;
    /**
     *
     * @optional
     *
     * @description The corporate department or division to which the associate is assigned.
     *
     * @example "Field Operations"
     *
     * @regex ^[0-9A-Za-z ]*$
     *
     * @format Alphanumeric characters and spaces allowed. Maximum length of 256 characters.
     *
     * @generated from field: optional string department = 17;
     */
    department?: string;
    /**
     *
     * @optional
     *
     * @description The primary work or corporate telephone number for contacting the associate.
     *
     * @example "+12125550123"
     *
     * @regex .+
     *
     * @format Non-empty string; adoption of standard international E.164 formats is highly recommended.
     *
     * @generated from field: optional string work_phone = 18;
     */
    workPhone?: string;
    /**
     *
     * @optional
     *
     * @description The primary business-related email address for the associate.
     *
     * @example "j.doe@corporate-hub.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format If provided, must be a valid email address string.
     *
     * @generated from field: optional string work_email = 19;
     */
    workEmail?: string;
    /**
     *
     * @optional
     *
     * @description The personal or secondary mobile phone number for the associate.
     *
     * @example "+12125550123"
     *
     * @regex .+
     *
     * @format Non-empty string; adoption of standard international E.164 formats is highly recommended.
     *
     * @generated from field: optional string personal_phone = 20;
     */
    personalPhone?: string;
    /**
     *
     * @optional
     *
     * @description The personal or non-work email address for the associate.
     *
     * @example "j.doe@personal.com"
     *
     * @regex ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
     *
     * @format If provided, must be a valid email address string.
     *
     * @generated from field: optional string personal_email = 21;
     */
    personalEmail?: string;
    /**
     *
     * @optional
     *
     * @description Filter results to retrieve only the associates associated with or belonging to a specific Vendor.
     *
     * @example 5402
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 vendor_id = 50;
     */
    vendorId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter results to retrieve only the associates associated with or belonging to a specific Client.
     *
     * @example 9107
     *
     * @regex ^[0-9]*$
     *
     * @format Non-negative 64-bit integer.
     *
     * @generated from field: optional uint64 client_id = 60;
     */
    clientId?: bigint;
    constructor(data?: PartialMessage<AssociatesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceCountReq;
    static equals(a: AssociatesServiceCountReq | PlainMessage<AssociatesServiceCountReq> | undefined, b: AssociatesServiceCountReq | PlainMessage<AssociatesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Broad-spectrum search and lookup request for locating and paginating associates via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.AssociatesServiceSearchAllReq
 */
export declare class AssociatesServiceSearchAllReq extends Message<AssociatesServiceSearchAllReq> {
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
     * @generated from field: optional Scailo.ASSOCIATE_SORT_KEY sort_key = 5;
     */
    sortKey?: ASSOCIATE_SORT_KEY;
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
     * @generated from field: optional string search_key = 10;
     */
    searchKey?: string;
    /**
     *
     * @optional
     *
     * @description Identifies the type of external organization mapping (e.g., Client, Vendor, or None).
     *
     * @example ASSOCIATE_ORG_REF_FROM_EMPTY
     *
     * @format Must align with valid states within the ASSOCIATE_ORG_REF_FROM enum definition.
     *
     * @generated from field: optional Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;
     */
    orgRefFrom?: ASSOCIATE_ORG_REF_FROM;
    /**
     *
     * @optional
     *
     * @description The numeric sequence identifier matching the targeted external Client or Vendor entity.
     *
     * @example 8923
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer. Evaluated and validated in conjunction with the `org_ref_from` selector.
     *
     * @generated from field: optional uint64 org_ref_id = 14;
     */
    orgRefId?: bigint;
    constructor(data?: PartialMessage<AssociatesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.AssociatesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssociatesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssociatesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssociatesServiceSearchAllReq;
    static equals(a: AssociatesServiceSearchAllReq | PlainMessage<AssociatesServiceSearchAllReq> | undefined, b: AssociatesServiceSearchAllReq | PlainMessage<AssociatesServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=associates.scailo_pb.d.ts.map