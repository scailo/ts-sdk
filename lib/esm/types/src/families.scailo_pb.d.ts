import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Defines the core classification categories for a family within the catalog.
 * These types dictate the operational lifecycle, permitted transactions (e.g., buy, sell, manufacture),
 * and the general purpose of the associated items.
 *
 * @generated from enum Scailo.FAMILY_TYPE
 */
export declare enum FAMILY_TYPE {
    /**
     * @description Denotes that the family type filter should be disregarded. Used exclusively within search/filter APIs to bypass type restrictions.
     *
     * @generated from enum value: FAMILY_TYPE_ANY_UNSPECIFIED = 0;
     */
    FAMILY_TYPE_ANY_UNSPECIFIED = 0,
    /**
     * @description Denotes a component. This is a general-purpose family of items that can be dynamically sold, bought, and manufactured.
     *
     * @generated from enum value: FAMILY_TYPE_COMPONENT = 1;
     */
    FAMILY_TYPE_COMPONENT = 1,
    /**
     * @description Denotes equipment. Represents a capital expenditure (CapEx) item utilized within the manufacturing process (e.g., machinery, assembly tools).
     *
     * @generated from enum value: FAMILY_TYPE_EQUIPMENT = 2;
     */
    FAMILY_TYPE_EQUIPMENT = 2,
    /**
     * @description Denotes feedstock. Represents raw materials that will be consumed and transformed during the manufacturing process.
     *
     * @generated from enum value: FAMILY_TYPE_FEEDSTOCK = 3;
     */
    FAMILY_TYPE_FEEDSTOCK = 3,
    /**
     * @description Denotes infrastructure. Represents non-manufacturing items utilized for general operational purposes (e.g., vehicles, computers, lighting/tubelights).
     *
     * @generated from enum value: FAMILY_TYPE_INFRASTRUCTURE = 4;
     */
    FAMILY_TYPE_INFRASTRUCTURE = 4,
    /**
     * @description Denotes merchandise. Represents goods that are strictly procured and resold without undergoing any internal value-addition processes.
     *
     * @generated from enum value: FAMILY_TYPE_MERCHANDISE = 5;
     */
    FAMILY_TYPE_MERCHANDISE = 5,
    /**
     * @description Denotes a product. Represents the final, finished outcome of a manufacturing process. Products can only be sold, not directly purchased.
     *
     * @generated from enum value: FAMILY_TYPE_PRODUCT = 6;
     */
    FAMILY_TYPE_PRODUCT = 6,
    /**
     * @description Denotes a service. Represents intangible offerings, labor, or digital services, completely excluding physical goods.
     *
     * @generated from enum value: FAMILY_TYPE_SERVICE = 7;
     */
    FAMILY_TYPE_SERVICE = 7
}
/**
 *
 * Defines the inventory depletion strategy and consumption prioritization rules for stored items.
 * These sequences determine the exact order in which stock is utilized, fulfilled, or depleted based on temporal or lifecycle attributes.
 *
 * @generated from enum Scailo.CONSUMPTION_SEQUENCE
 */
export declare enum CONSUMPTION_SEQUENCE {
    /**
     * @description Denotes that the consumption sequence should be disregarded. Used exclusively within search/filter APIs to bypass sequencing restrictions.
     *
     * @generated from enum value: CONSUMPTION_SEQUENCE_ANY_UNSPECIFIED = 0;
     */
    CONSUMPTION_SEQUENCE_ANY_UNSPECIFIED = 0,
    /**
     * @description Denotes a First-In-First-Out (FIFO) prioritization strictly based on the physical intake or receiving timestamp.
     *
     * @generated from enum value: CONSUMPTION_SEQUENCE_FIFO_INTAKE = 1;
     */
    CONSUMPTION_SEQUENCE_FIFO_INTAKE = 1,
    /**
     * @description Denotes a First-In-First-Out (FIFO) prioritization based on the expiration or shelf-life timeline (earliest to expire is consumed first).
     *
     * @generated from enum value: CONSUMPTION_SEQUENCE_FIFO_SHELF_LIFE = 2;
     */
    CONSUMPTION_SEQUENCE_FIFO_SHELF_LIFE = 2,
    /**
     * @description Denotes a First-In-First-Out (FIFO) prioritization based on the warranty expiration timeline (earliest warranty end is consumed first).
     *
     * @generated from enum value: CONSUMPTION_SEQUENCE_FIFO_WARRANTY = 3;
     */
    CONSUMPTION_SEQUENCE_FIFO_WARRANTY = 3,
    /**
     * @description Denotes a Last-In-First-Out (LIFO) prioritization strictly based on the physical intake or receiving timestamp (newest arrivals consumed first).
     *
     * @generated from enum value: CONSUMPTION_SEQUENCE_LIFO_INTAKE = 4;
     */
    CONSUMPTION_SEQUENCE_LIFO_INTAKE = 4,
    /**
     * @description Denotes a Last-In-First-Out (LIFO) prioritization based on the expiration or shelf-life timeline (latest to expire is consumed first).
     *
     * @generated from enum value: CONSUMPTION_SEQUENCE_LIFO_SHELF_LIFE = 5;
     */
    CONSUMPTION_SEQUENCE_LIFO_SHELF_LIFE = 5,
    /**
     * @description Denotes a Last-In-First-Out (LIFO) prioritization based on the warranty expiration timeline (latest warranty end is consumed first).
     *
     * @generated from enum value: CONSUMPTION_SEQUENCE_LIFO_WARRANTY = 6;
     */
    CONSUMPTION_SEQUENCE_LIFO_WARRANTY = 6
}
/**
 *
 * Enumeration of fields available for sorting vendor search results.
 *
 * @generated from enum Scailo.FAMILY_SORT_KEY
 */
export declare enum FAMILY_SORT_KEY {
    /**
     * @description Default sort behavior (by internal ID).
     *
     * @generated from enum value: FAMILY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    FAMILY_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * @description Sort by the timestamp the record was initially created.
     *
     * @generated from enum value: FAMILY_SORT_KEY_CREATED_AT = 1;
     */
    FAMILY_SORT_KEY_CREATED_AT = 1,
    /**
     * @description Sort by the timestamp the record was last modified.
     *
     * @generated from enum value: FAMILY_SORT_KEY_MODIFIED_AT = 2;
     */
    FAMILY_SORT_KEY_MODIFIED_AT = 2,
    /**
     * @description Sort by the official approval timestamp.
     *
     * @generated from enum value: FAMILY_SORT_KEY_APPROVED_ON = 3;
     */
    FAMILY_SORT_KEY_APPROVED_ON = 3,
    /**
     * @description Sort by the system ID of the approving user.
     *
     * @generated from enum value: FAMILY_SORT_KEY_APPROVED_BY = 4;
     */
    FAMILY_SORT_KEY_APPROVED_BY = 4,
    /**
     * @description Sort by the security role ID used by the approver.
     *
     * @generated from enum value: FAMILY_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    FAMILY_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * @description Sort alphabetically by the user-provided name.
     *
     * @generated from enum value: FAMILY_SORT_KEY_NAME = 10;
     */
    FAMILY_SORT_KEY_NAME = 10,
    /**
     * @description Sort alphabetically by the user-provided code.
     *
     * @generated from enum value: FAMILY_SORT_KEY_CODE = 12;
     */
    FAMILY_SORT_KEY_CODE = 12,
    /**
     * @description Sort by the user-provided unit quantity.
     *
     * @generated from enum value: FAMILY_SORT_KEY_UNIT_QUANTITY = 13;
     */
    FAMILY_SORT_KEY_UNIT_QUANTITY = 13,
    /**
     * @description Sort by the user-provided price.
     *
     * @generated from enum value: FAMILY_SORT_KEY_PRICE = 14;
     */
    FAMILY_SORT_KEY_PRICE = 14,
    /**
     * @description Sort by the user-provided amendment count.
     *
     * @generated from enum value: FAMILY_SORT_KEY_AMENDMENT_COUNT = 15;
     */
    FAMILY_SORT_KEY_AMENDMENT_COUNT = 15
}
/**
 *
 * Represents a collection payload encapsulating multiple family type classifications.
 * This message is commonly utilized in bulk retrieval responses or as a multi-select filter array.
 *
 * @generated from message Scailo.FamilyTypesList
 */
export declare class FamilyTypesList extends Message<FamilyTypesList> {
    /**
     *
     * @optional
     *
     * @description An array containing one or more specific family type classifications.
     *
     * @example ["FAMILY_TYPE_COMPONENT", "FAMILY_TYPE_MERCHANDISE"]
     *
     * @format Repeated array of valid FAMILY_TYPE enum strings or integer values.
     *
     * @generated from field: repeated Scailo.FAMILY_TYPE list = 1;
     */
    list: FAMILY_TYPE[];
    constructor(data?: PartialMessage<FamilyTypesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamilyTypesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamilyTypesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamilyTypesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamilyTypesList;
    static equals(a: FamilyTypesList | PlainMessage<FamilyTypesList> | undefined, b: FamilyTypesList | PlainMessage<FamilyTypesList> | undefined): boolean;
}
/**
 *
 * Request message for defining and creating a new Family profile within the catalog.
 * This record tracks critical hierarchical metadata, classification types, taxation codes,
 * pricing configurations, and inventory consumption rules associated with a target entity.
 *
 * **Note:** This is the primary entry point for Inventory Managers, Catalog Administrators,
 * and Procurement to register new item families and structural classifications for inventory tracking and compliance.
 *
 * @generated from message Scailo.FamiliesServiceCreateRequest
 */
export declare class FamiliesServiceCreateRequest extends Message<FamiliesServiceCreateRequest> {
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
     * @description The primary, human-readable name of the family.
     *
     * @example "Industrial Fasteners"
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
     * @description The designated name of the family utilized for external-facing documents, invoices, and printed reports.
     *
     * @example "Ind. Fasteners"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string print_name = 11;
     */
    printName: string;
    /**
     *
     * @mandatory
     *
     * @description The unique alphanumeric code used to internally classify and represent the family.
     *
     * @example "FAM-IND-FST-01"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: string code = 12;
     */
    code: string;
    /**
     *
     * @optional
     *
     * @description A detailed text description outlining the characteristics, specifications, and purpose of the family.
     *
     * @example "Heavy duty industrial fasteners suitable for high-stress applications."
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string description = 14;
     */
    description?: string;
    /**
     *
     * @mandatory
     *
     * @description The classification type of the family, dictating its operational lifecycle and valid transaction types (e.g., equipment, feedstock, product).
     *
     * @example "FAMILY_TYPE_COMPONENT"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid FAMILY_TYPE enum value string or integer.
     *
     * @generated from field: Scailo.FAMILY_TYPE family_type = 15;
     */
    familyType: FAMILY_TYPE;
    /**
     *
     * @optional
     *
     * @description The Harmonized System of Nomenclature (HSN) or Service Accounting Code (SAC) applied for taxation and regulatory compliance.
     *
     * @example "73181500"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string hsn_sac_code = 16;
     */
    hsnSacCode?: string;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the unit of material (UOM) used to measure items within this family.
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 uom_id = 17;
     */
    uomId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The standard batch or unit quantity multiplier for items within this family, represented in base subunits.
     *
     * @example 100
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 unit_quantity = 18;
     */
    unitQuantity: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent family. A value of 0 indicates this is a top-level root family.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Unsigned 64-bit integer greater than or equal to 0.
     *
     * @generated from field: optional uint64 parent_id = 19;
     */
    parentId?: bigint;
    /**
     *
     * @mandatory
     *
     * @description A boolean flag indicating whether this family is a leaf node in the hierarchy (i.e., it cannot contain nested sub-families).
     *
     * @example true
     *
     * @regex ^(?:true|false)$
     *
     * @format Boolean true or false.
     *
     * @generated from field: bool is_leaf = 20;
     */
    isLeaf: boolean;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the accounting ledger associated with this family for financial tracking. A value of 0 typically denotes no specific ledger assignment.
     *
     * @example 452
     *
     * @regex ^[0-9]+$
     *
     * @format Unsigned 64-bit integer greater than or equal to 0.
     *
     * @generated from field: optional uint64 ledger_id = 21;
     */
    ledgerId?: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the default tax group applied to items nested under this family.
     *
     * @example 4
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 tax_group_id = 23;
     */
    taxGroupId: bigint;
    /**
     *
     * @optional
     *
     * @description The default base unit price for items in this family, represented in the base currency subunit (e.g., cents).
     *
     * @example 1550
     *
     * @regex ^[0-9]+$
     *
     * @format Unsigned 64-bit integer greater than or equal to 0.
     *
     * @generated from field: optional uint64 price = 26;
     */
    price?: bigint;
    /**
     *
     * @optional
     *
     * @description The minimum inventory threshold required to be maintained for items within this family, commonly used to trigger automated restock alerts.
     *
     * @example 500
     *
     * @regex ^[0-9]+$
     *
     * @format Unsigned 64-bit integer greater than or equal to 0.
     *
     * @generated from field: optional uint64 min_stock_to_maintain = 27;
     */
    minStockToMaintain?: bigint;
    /**
     *
     * @mandatory
     *
     * @description The default inventory depletion sequence applied to items within this family (e.g., FIFO based on intake, LIFO based on shelf life).
     *
     * @example "CONSUMPTION_SEQUENCE_FIFO_INTAKE"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid CONSUMPTION_SEQUENCE enum value string or integer.
     *
     * @generated from field: Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 28;
     */
    consumptionSequence: CONSUMPTION_SEQUENCE;
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
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 50;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<FamiliesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServiceCreateRequest;
    static equals(a: FamiliesServiceCreateRequest | PlainMessage<FamiliesServiceCreateRequest> | undefined, b: FamiliesServiceCreateRequest | PlainMessage<FamiliesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for updating an existing Family record.
 * Only applicable for records in `DRAFT` or `REVISION` states.
 * This message allows for modifying the name, print name, description, hsn sac code, uom id, unit quantity, ledger id, tax group id, price, min stock to maintain, consumption sequence and other custom form fields
 * of an established Family.
 *
 * **Note:** Only fields provided in the request will typically be updated.
 * The unique system ID is required to locate the target record.
 *
 * @generated from message Scailo.FamiliesServiceUpdateRequest
 */
export declare class FamiliesServiceUpdateRequest extends Message<FamiliesServiceUpdateRequest> {
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
     * @description The primary, human-readable name of the family.
     *
     * @example "Industrial Fasteners"
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
     * @description The designated name of the family utilized for external-facing documents, invoices, and printed reports.
     *
     * @example "Ind. Fasteners"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string print_name = 11;
     */
    printName?: string;
    /**
     *
     * @optional
     *
     * @description A detailed text description outlining the characteristics, specifications, and purpose of the family.
     *
     * @example "Heavy duty industrial fasteners suitable for high-stress applications."
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string description = 14;
     */
    description?: string;
    /**
     *
     * @optional
     *
     * @description The Harmonized System of Nomenclature (HSN) or Service Accounting Code (SAC) applied for taxation and regulatory compliance.
     *
     * @example "73181500"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string hsn_sac_code = 16;
     */
    hsnSacCode?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the unit of material (UOM) used to measure items within this family.
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 uom_id = 17;
     */
    uomId?: bigint;
    /**
     *
     * @optional
     *
     * @description The standard batch or unit quantity multiplier for items within this family, represented in base subunits.
     *
     * @example 100
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 unit_quantity = 18;
     */
    unitQuantity?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the accounting ledger associated with this family for financial tracking. A value of 0 typically denotes no specific ledger assignment.
     *
     * @example 452
     *
     * @regex ^[0-9]+$
     *
     * @format Unsigned 64-bit integer greater than or equal to 0.
     *
     * @generated from field: optional uint64 ledger_id = 21;
     */
    ledgerId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the default tax group applied to items nested under this family.
     *
     * @example 4
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 tax_group_id = 23;
     */
    taxGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The default base unit price for items in this family, represented in the base currency subunit (e.g., cents).
     *
     * @example 1550
     *
     * @regex ^[0-9]+$
     *
     * @format Unsigned 64-bit integer greater than or equal to 0.
     *
     * @generated from field: optional uint64 price = 26;
     */
    price?: bigint;
    /**
     *
     * @optional
     *
     * @description The minimum inventory threshold required to be maintained for items within this family, commonly used to trigger automated restock alerts.
     *
     * @example 500
     *
     * @regex ^[0-9]+$
     *
     * @format Unsigned 64-bit integer greater than or equal to 0.
     *
     * @generated from field: optional uint64 min_stock_to_maintain = 27;
     */
    minStockToMaintain?: bigint;
    /**
     *
     * @optional
     *
     * @description The default inventory depletion sequence applied to items within this family (e.g., FIFO based on intake, LIFO based on shelf life).
     *
     * @example "CONSUMPTION_SEQUENCE_FIFO_INTAKE"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid CONSUMPTION_SEQUENCE enum value string or integer.
     *
     * @generated from field: optional Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 28;
     */
    consumptionSequence?: CONSUMPTION_SEQUENCE;
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
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 50;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<FamiliesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServiceUpdateRequest;
    static equals(a: FamiliesServiceUpdateRequest | PlainMessage<FamiliesServiceUpdateRequest> | undefined, b: FamiliesServiceUpdateRequest | PlainMessage<FamiliesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Request message for modifying the foundational identity and structural classification of an existing Family.
 * This payload specifically targets core attributes that define the record's base operational behavior—such as
 * the unique alphanumeric code, structural hierarchy (parent mapping and leaf status), and the primary family type.
 *
 * **Critical Constraint:** Because these fields dictate core catalog integrity and transactional rules, consumers
 * must use this request strictly **prior to the first approval** of the family record. Once a family has been
 * approved, its identity attributes are permanently locked and cannot be mutated via this operation.
 *
 * **Note:** This is typically utilized by Catalog Administrators or Inventory Managers during the initial onboarding,
 * draft, or review phases to correct structural mappings before finalizing the catalog entry.
 *
 * @generated from message Scailo.FamiliesServiceUpdateIdentityRequest
 */
export declare class FamiliesServiceUpdateIdentityRequest extends Message<FamiliesServiceUpdateIdentityRequest> {
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
     * @description The unique alphanumeric code used to internally classify and represent the family. Can be updated only prior to the first approval.
     *
     * @example "FAM-IND-FST-01"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 12;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description The classification type of the family, dictating its operational lifecycle and valid transaction types (e.g., equipment, feedstock, product). Can be updated only prior to the first approval.
     *
     * @example "FAMILY_TYPE_COMPONENT"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid FAMILY_TYPE enum value string or integer.
     *
     * @generated from field: optional Scailo.FAMILY_TYPE family_type = 15;
     */
    familyType?: FAMILY_TYPE;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent family. A value of 0 indicates this is a top-level root family. Can be updated only prior to the first approval.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Unsigned 64-bit integer greater than or equal to 0.
     *
     * @generated from field: optional uint64 parent_id = 19;
     */
    parentId?: bigint;
    /**
     *
     * @optional
     *
     * @description A boolean flag indicating whether this family is a leaf node in the hierarchy (i.e., it cannot contain nested sub-families). Can be updated only prior to the first approval.
     *
     * @example true
     *
     * @regex ^(?:true|false)$
     *
     * @format Boolean true or false.
     *
     * @generated from field: optional bool is_leaf = 20;
     */
    isLeaf?: boolean;
    constructor(data?: PartialMessage<FamiliesServiceUpdateIdentityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServiceUpdateIdentityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServiceUpdateIdentityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServiceUpdateIdentityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServiceUpdateIdentityRequest;
    static equals(a: FamiliesServiceUpdateIdentityRequest | PlainMessage<FamiliesServiceUpdateIdentityRequest> | undefined, b: FamiliesServiceUpdateIdentityRequest | PlainMessage<FamiliesServiceUpdateIdentityRequest> | undefined): boolean;
}
/**
 *
 * Represents a full Family within the system.
 *
 * @generated from message Scailo.Family
 */
export declare class Family extends Message<Family> {
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
     * @description Link to the document storage folder.
     *
     * @example 15234
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     *
     * @description The primary, human-readable name of the family.
     *
     * @example "Industrial Fasteners"
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     *
     * @description The designated name of the family utilized for external-facing documents, invoices, and printed reports.
     *
     * @example "Ind. Fasteners"
     *
     * @generated from field: string print_name = 11;
     */
    printName: string;
    /**
     *
     * @description The unique alphanumeric code used to internally classify and represent the family.
     *
     * @example "FAM-IND-FST-01"
     *
     * @generated from field: string code = 12;
     */
    code: string;
    /**
     *
     * @description A detailed text description outlining the characteristics, specifications, and purpose of the family.
     *
     * @example "Heavy duty industrial fasteners suitable for high-stress applications."
     *
     * @generated from field: string description = 14;
     */
    description: string;
    /**
     *
     * @description The classification type of the family, dictating its operational lifecycle and valid transaction types (e.g., equipment, feedstock, product).
     *
     * @example "FAMILY_TYPE_COMPONENT"
     *
     * @generated from field: Scailo.FAMILY_TYPE family_type = 15;
     */
    familyType: FAMILY_TYPE;
    /**
     *
     * @description The Harmonized System of Nomenclature (HSN) or Service Accounting Code (SAC) applied for taxation and regulatory compliance.
     *
     * @example "73181500"
     *
     * @generated from field: string hsn_sac_code = 16;
     */
    hsnSacCode: string;
    /**
     *
     * @description The unique internal identifier of the unit of material (UOM) used to measure items within this family.
     *
     * @example 12
     *
     * @generated from field: uint64 uom_id = 17;
     */
    uomId: bigint;
    /**
     *
     * @description The standard batch or unit quantity multiplier for items within this family, represented in base subunits.
     *
     * @example 100
     *
     * @generated from field: uint64 unit_quantity = 18;
     */
    unitQuantity: bigint;
    /**
     *
     * @description The unique internal identifier of the parent family. A value of 0 indicates this is a top-level root family.
     *
     * @example 0
     *
     * @generated from field: uint64 parent_id = 19;
     */
    parentId: bigint;
    /**
     *
     * @description A boolean flag indicating whether this family is a leaf node in the hierarchy (i.e., it cannot contain nested sub-families).
     *
     * @example true
     *
     * @generated from field: bool is_leaf = 20;
     */
    isLeaf: boolean;
    /**
     *
     * @description The unique internal identifier of the accounting ledger associated with this family for financial tracking. A value of 0 typically denotes no specific ledger assignment.
     *
     * @example 452
     *
     * @generated from field: uint64 ledger_id = 21;
     */
    ledgerId: bigint;
    /**
     *
     * @description The unique internal identifier of the default tax group applied to items nested under this family.
     *
     * @example 4
     *
     * @generated from field: uint64 tax_group_id = 23;
     */
    taxGroupId: bigint;
    /**
     *
     * @description The default base unit price for items in this family, represented in the base currency subunit (e.g., cents).
     *
     * @example 1550
     *
     * @generated from field: uint64 price = 26;
     */
    price: bigint;
    /**
     *
     * @description The minimum inventory threshold required to be maintained for items within this family, commonly used to trigger automated restock alerts.
     *
     * @example 500
     *
     * @generated from field: uint64 min_stock_to_maintain = 27;
     */
    minStockToMaintain: bigint;
    /**
     *
     * @description The default inventory depletion sequence applied to items within this family (e.g., FIFO based on intake, LIFO based on shelf life).
     *
     * @example "CONSUMPTION_SEQUENCE_FIFO_INTAKE"
     *
     * @generated from field: Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 29;
     */
    consumptionSequence: CONSUMPTION_SEQUENCE;
    /**
     *
     * @description The number of times that this record has been amended after approval.
     *
     * @example 5
     *
     * @generated from field: uint64 amendment_count = 40;
     */
    amendmentCount: bigint;
    /**
     *
     * @description Collection of organization-specific dynamic data.
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 50;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<Family>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.Family";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Family;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Family;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Family;
    static equals(a: Family | PlainMessage<Family> | undefined, b: Family | PlainMessage<Family> | undefined): boolean;
}
/**
 *
 * Container message for a collection of Family records.
 *
 * @generated from message Scailo.FamiliesList
 */
export declare class FamiliesList extends Message<FamiliesList> {
    /**
     * @description An array of Family records.
     *
     * @generated from field: repeated Scailo.Family list = 1;
     */
    list: Family[];
    constructor(data?: PartialMessage<FamiliesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesList;
    static equals(a: FamiliesList | PlainMessage<FamiliesList> | undefined, b: FamiliesList | PlainMessage<FamiliesList> | undefined): boolean;
}
/**
 *
 * Pagination request for retrieving slices of Family records.
 *
 * @generated from message Scailo.FamiliesServicePaginationReq
 */
export declare class FamiliesServicePaginationReq extends Message<FamiliesServicePaginationReq> {
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
     * @generated from field: optional Scailo.FAMILY_SORT_KEY sort_key = 5;
     */
    sortKey?: FAMILY_SORT_KEY;
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
    constructor(data?: PartialMessage<FamiliesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServicePaginationReq;
    static equals(a: FamiliesServicePaginationReq | PlainMessage<FamiliesServicePaginationReq> | undefined, b: FamiliesServicePaginationReq | PlainMessage<FamiliesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Response message for paginated queries, including total counts for UI elements.
 *
 * @generated from message Scailo.FamiliesServicePaginationResponse
 */
export declare class FamiliesServicePaginationResponse extends Message<FamiliesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.Family payload = 4;
     */
    payload: Family[];
    constructor(data?: PartialMessage<FamiliesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServicePaginationResponse;
    static equals(a: FamiliesServicePaginationResponse | PlainMessage<FamiliesServicePaginationResponse> | undefined, b: FamiliesServicePaginationResponse | PlainMessage<FamiliesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Advanced filter request for searching and paginating families using multiple logical criteria.
 * This message encapsulates pagination controls, sorting keys, lifecycle status filters,
 * timestamp ranges, and entity references.
 *
 * **Note:** This is the primary message layout used by the frontend and external API clients
 * to build robust data-table queries, reporting views, and targeted record lookups.
 *
 * @generated from message Scailo.FamiliesServiceFilterReq
 */
export declare class FamiliesServiceFilterReq extends Message<FamiliesServiceFilterReq> {
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
     * @generated from field: optional Scailo.FAMILY_SORT_KEY sort_key = 5;
     */
    sortKey?: FAMILY_SORT_KEY;
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
     * @description Filter by multiple lifecycle statuses simultaneously. Returns records that match any of the provided statuses (logical OR). If the list is empty, this filter is disregarded.
     *
     * @example ["DRAFT", "STANDING"]
     *
     * @format Repeated array of valid STANDARD_LIFECYCLE_STATUS enum strings or integer values.
     *
     * @generated from field: repeated Scailo.STANDARD_LIFECYCLE_STATUS multi_status = 100;
     */
    multiStatus: STANDARD_LIFECYCLE_STATUS[];
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
     * @description The primary, human-readable name of the family.
     *
     * @example "Industrial Fasteners"
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
     * @description The unique alphanumeric code used to internally classify and represent the family. Can be updated only prior to the first approval.
     *
     * @example "FAM-IND-FST-01"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 22;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description The classification type of the family, dictating its operational lifecycle and valid transaction types (e.g., equipment, feedstock, product). Can be updated only prior to the first approval.
     *
     * @example "FAMILY_TYPE_COMPONENT"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid FAMILY_TYPE enum value string or integer.
     *
     * @generated from field: optional Scailo.FAMILY_TYPE family_type = 25;
     */
    familyType?: FAMILY_TYPE;
    /**
     *
     * @optional
     *
     * @description Filter by multiple family classification types simultaneously. Returns records that match any of the provided types (logical OR). If the list is empty, this filter is disregarded.
     *
     * @example ["FAMILY_TYPE_COMPONENT", "FAMILY_TYPE_EQUIPMENT"]
     *
     * @format Repeated array of valid FAMILY_TYPE enum strings or integer values.
     *
     * @generated from field: repeated Scailo.FAMILY_TYPE multi_family_type = 250;
     */
    multiFamilyType: FAMILY_TYPE[];
    /**
     *
     * @optional
     *
     * @description The Harmonized System of Nomenclature (HSN) or Service Accounting Code (SAC) applied for taxation and regulatory compliance.
     *
     * @example "73181500"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string hsn_sac_code = 26;
     */
    hsnSacCode?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the unit of material (UOM) used to measure items within this family.
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 uom_id = 27;
     */
    uomId?: bigint;
    /**
     *
     * @optional
     *
     * @description The standard batch or unit quantity multiplier for items within this family, represented in base subunits.
     *
     * @example 100
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 unit_quantity = 28;
     */
    unitQuantity?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent family. A value of 0 indicates this is a top-level root family. Can be updated only prior to the first approval.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Unsigned 64-bit integer greater than or equal to 0.
     *
     * @generated from field: optional uint64 parent_id = 29;
     */
    parentId?: bigint;
    /**
     *
     * @optional
     *
     * @description A boolean flag indicating whether this family is a leaf node in the hierarchy (i.e., it cannot contain nested sub-families). Can be updated only prior to the first approval.
     *
     * @example true
     *
     * @regex ^(?:true|false)$
     *
     * @format Boolean true or false.
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_leaf = 30;
     */
    isLeaf?: BOOL_FILTER;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the accounting ledger associated with this family for financial tracking. A value of 0 typically denotes no specific ledger assignment.
     *
     * @example 452
     *
     * @regex ^[0-9]+$
     *
     * @format Unsigned 64-bit integer greater than or equal to 0.
     *
     * @generated from field: optional uint64 ledger_id = 31;
     */
    ledgerId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the unique internal identifier of the Quality Control (QC) group associated with the family.
     *
     * @example 88
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 qc_group_id = 32;
     */
    qcGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the default tax group applied to items nested under this family.
     *
     * @example 4
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 tax_group_id = 33;
     */
    taxGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The default inventory depletion sequence applied to items within this family (e.g., FIFO based on intake, LIFO based on shelf life).
     *
     * @example "CONSUMPTION_SEQUENCE_FIFO_INTAKE"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid CONSUMPTION_SEQUENCE enum value string or integer.
     *
     * @generated from field: optional Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 39;
     */
    consumptionSequence?: CONSUMPTION_SEQUENCE;
    /**
     *
     * @optional
     *
     * @description Filter by the unique internal identifier of a parent storage location. Returns all families physically located within this storage node or any of its nested child storage locations.
     *
     * @example 1050
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 parent_storage_id = 50;
     */
    parentStorageId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the unique internal identifier of a categorization label applied to the family.
     *
     * @example 12
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 label_id = 60;
     */
    labelId?: bigint;
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
    constructor(data?: PartialMessage<FamiliesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServiceFilterReq;
    static equals(a: FamiliesServiceFilterReq | PlainMessage<FamiliesServiceFilterReq> | undefined, b: FamiliesServiceFilterReq | PlainMessage<FamiliesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Target filter request for counting family records matching specific logical criteria.
 * This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
 * and entity references to determine the total size of a targeted dataset.
 *
 * **Note:** This is the primary message layout used by backend calculation engines, reporting
 * services, and frontend pagination headers to evaluate total record matches dynamically
 * before or alongside retrieving paginated results.
 *
 * @generated from message Scailo.FamiliesServiceCountReq
 */
export declare class FamiliesServiceCountReq extends Message<FamiliesServiceCountReq> {
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
     * @description Filter by multiple lifecycle statuses simultaneously. Returns records that match any of the provided statuses (logical OR). If the list is empty, this filter is disregarded.
     *
     * @example ["DRAFT", "STANDING"]
     *
     * @format Repeated array of valid STANDARD_LIFECYCLE_STATUS enum strings or integer values.
     *
     * @generated from field: repeated Scailo.STANDARD_LIFECYCLE_STATUS multi_status = 100;
     */
    multiStatus: STANDARD_LIFECYCLE_STATUS[];
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
     * @description The primary, human-readable name of the family.
     *
     * @example "Industrial Fasteners"
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
     * @description The unique alphanumeric code used to internally classify and represent the family. Can be updated only prior to the first approval.
     *
     * @example "FAM-IND-FST-01"
     *
     * @regex .+
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string code = 22;
     */
    code?: string;
    /**
     *
     * @optional
     *
     * @description The classification type of the family, dictating its operational lifecycle and valid transaction types (e.g., equipment, feedstock, product). Can be updated only prior to the first approval.
     *
     * @example "FAMILY_TYPE_COMPONENT"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid FAMILY_TYPE enum value string or integer.
     *
     * @generated from field: optional Scailo.FAMILY_TYPE family_type = 25;
     */
    familyType?: FAMILY_TYPE;
    /**
     *
     * @optional
     *
     * @description Filter by multiple family classification types simultaneously. Returns records that match any of the provided types (logical OR). If the list is empty, this filter is disregarded.
     *
     * @example ["FAMILY_TYPE_COMPONENT", "FAMILY_TYPE_EQUIPMENT"]
     *
     * @format Repeated array of valid FAMILY_TYPE enum strings or integer values.
     *
     * @generated from field: repeated Scailo.FAMILY_TYPE multi_family_type = 250;
     */
    multiFamilyType: FAMILY_TYPE[];
    /**
     *
     * @optional
     *
     * @description The Harmonized System of Nomenclature (HSN) or Service Accounting Code (SAC) applied for taxation and regulatory compliance.
     *
     * @example "73181500"
     *
     * @regex .*
     *
     * @format Must be a non-empty string.
     *
     * @generated from field: optional string hsn_sac_code = 26;
     */
    hsnSacCode?: string;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the unit of material (UOM) used to measure items within this family.
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 uom_id = 27;
     */
    uomId?: bigint;
    /**
     *
     * @optional
     *
     * @description The standard batch or unit quantity multiplier for items within this family, represented in base subunits.
     *
     * @example 100
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 unit_quantity = 28;
     */
    unitQuantity?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent family. A value of 0 indicates this is a top-level root family. Can be updated only prior to the first approval.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Unsigned 64-bit integer greater than or equal to 0.
     *
     * @generated from field: optional uint64 parent_id = 29;
     */
    parentId?: bigint;
    /**
     *
     * @optional
     *
     * @description A boolean flag indicating whether this family is a leaf node in the hierarchy (i.e., it cannot contain nested sub-families). Can be updated only prior to the first approval.
     *
     * @example true
     *
     * @regex ^(?:true|false)$
     *
     * @format Boolean true or false.
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_leaf = 30;
     */
    isLeaf?: BOOL_FILTER;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the accounting ledger associated with this family for financial tracking. A value of 0 typically denotes no specific ledger assignment.
     *
     * @example 452
     *
     * @regex ^[0-9]+$
     *
     * @format Unsigned 64-bit integer greater than or equal to 0.
     *
     * @generated from field: optional uint64 ledger_id = 31;
     */
    ledgerId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the unique internal identifier of the Quality Control (QC) group associated with the family.
     *
     * @example 88
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 qc_group_id = 32;
     */
    qcGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the default tax group applied to items nested under this family.
     *
     * @example 4
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: optional uint64 tax_group_id = 33;
     */
    taxGroupId?: bigint;
    /**
     *
     * @optional
     *
     * @description The default inventory depletion sequence applied to items within this family (e.g., FIFO based on intake, LIFO based on shelf life).
     *
     * @example "CONSUMPTION_SEQUENCE_FIFO_INTAKE"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid CONSUMPTION_SEQUENCE enum value string or integer.
     *
     * @generated from field: optional Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 39;
     */
    consumptionSequence?: CONSUMPTION_SEQUENCE;
    /**
     *
     * @optional
     *
     * @description Filter by the unique internal identifier of a parent storage location. Returns all families physically located within this storage node or any of its nested child storage locations.
     *
     * @example 1050
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 parent_storage_id = 50;
     */
    parentStorageId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the unique internal identifier of a categorization label applied to the family.
     *
     * @example 12
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: optional uint64 label_id = 60;
     */
    labelId?: bigint;
    /**
     *
     * @optional
     *
     * @description Filter based on dynamic form field values.
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<FamiliesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServiceCountReq;
    static equals(a: FamiliesServiceCountReq | PlainMessage<FamiliesServiceCountReq> | undefined, b: FamiliesServiceCountReq | PlainMessage<FamiliesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Broad-spectrum search and lookup request for locating and paginating families via text matching.
 * This message encapsulates full-text query parameters, pagination controls, sorting keys,
 * lifecycle status constraints, and other core references.
 *
 * **Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
 * inputs, and omni-box search utilities where users need to match loose textual terms against
 * records while retaining structural pagination.
 *
 * @generated from message Scailo.FamiliesServiceSearchAllReq
 */
export declare class FamiliesServiceSearchAllReq extends Message<FamiliesServiceSearchAllReq> {
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
     * @generated from field: optional Scailo.FAMILY_SORT_KEY sort_key = 5;
     */
    sortKey?: FAMILY_SORT_KEY;
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
     * @description Filter by multiple lifecycle statuses simultaneously. Returns records that match any of the provided statuses (logical OR). If the list is empty, this filter is disregarded.
     *
     * @example ["DRAFT", "STANDING"]
     *
     * @format Repeated array of valid STANDARD_LIFECYCLE_STATUS enum strings or integer values.
     *
     * @generated from field: repeated Scailo.STANDARD_LIFECYCLE_STATUS multi_status = 100;
     */
    multiStatus: STANDARD_LIFECYCLE_STATUS[];
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
    /**
     *
     * @optional
     *
     * @description The classification type of the family, dictating its operational lifecycle and valid transaction types (e.g., equipment, feedstock, product). Can be updated only prior to the first approval.
     *
     * @example "FAMILY_TYPE_COMPONENT"
     *
     * @regex ^[A-Z_]+$
     *
     * @format Valid FAMILY_TYPE enum value string or integer.
     *
     * @generated from field: optional Scailo.FAMILY_TYPE family_type = 25;
     */
    familyType?: FAMILY_TYPE;
    /**
     *
     * @optional
     *
     * @description Filter by multiple family classification types simultaneously. Returns records that match any of the provided types (logical OR). If the list is empty, this filter is disregarded.
     *
     * @example ["FAMILY_TYPE_COMPONENT", "FAMILY_TYPE_EQUIPMENT"]
     *
     * @format Repeated array of valid FAMILY_TYPE enum strings or integer values.
     *
     * @generated from field: repeated Scailo.FAMILY_TYPE multi_family_type = 250;
     */
    multiFamilyType: FAMILY_TYPE[];
    /**
     *
     * @optional
     *
     * @description The unique internal identifier of the parent family. A value of 0 indicates this is a top-level root family. Can be updated only prior to the first approval.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Unsigned 64-bit integer greater than or equal to 0.
     *
     * @generated from field: optional uint64 parent_id = 29;
     */
    parentId?: bigint;
    /**
     *
     * @optional
     *
     * @description A boolean flag indicating whether this family is a leaf node in the hierarchy (i.e., it cannot contain nested sub-families). Can be updated only prior to the first approval.
     *
     * @example true
     *
     * @regex ^(?:true|false)$
     *
     * @format Boolean true or false.
     *
     * @generated from field: optional Scailo.BOOL_FILTER is_leaf = 30;
     */
    isLeaf?: BOOL_FILTER;
    constructor(data?: PartialMessage<FamiliesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServiceSearchAllReq;
    static equals(a: FamiliesServiceSearchAllReq | PlainMessage<FamiliesServiceSearchAllReq> | undefined, b: FamiliesServiceSearchAllReq | PlainMessage<FamiliesServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Request message for filtering and retrieving prospective families applicable to a specific transactional record.
 * This payload combines a universally unique identifier (UUID) for a target resource (e.g., a Purchase Order, Sales Order, or Production Plan)
 * with standard catalog filtering criteria to narrow down eligible families that can be associated with that resource.
 *
 * **Note:** This is commonly used by frontend interfaces to populate context-aware dropdowns or selection grids,
 * ensuring users only see families that are legally or operationally valid for the specified document.
 *
 * @generated from message Scailo.FilterFamiliesReqForIdentifier
 */
export declare class FilterFamiliesReqForIdentifier extends Message<FilterFamiliesReqForIdentifier> {
    /**
     *
     * @mandatory
     *
     * @description The globally unique identifier of the target resource (e.g., Purchase Order, Sales Order) for which prospective families are being evaluated and filtered.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format Must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     *
     * @mandatory
     *
     * @description The advanced filtering criteria used to narrow down the list of prospective families. Encapsulates pagination, sorting, and attribute-based constraints.
     *
     * @format Nested FamiliesServiceFilterReq message block.
     *
     * @generated from field: Scailo.FamiliesServiceFilterReq filter = 10;
     */
    filter?: FamiliesServiceFilterReq;
    constructor(data?: PartialMessage<FilterFamiliesReqForIdentifier>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FilterFamiliesReqForIdentifier";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FilterFamiliesReqForIdentifier;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FilterFamiliesReqForIdentifier;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FilterFamiliesReqForIdentifier;
    static equals(a: FilterFamiliesReqForIdentifier | PlainMessage<FilterFamiliesReqForIdentifier> | undefined, b: FilterFamiliesReqForIdentifier | PlainMessage<FilterFamiliesReqForIdentifier> | undefined): boolean;
}
/**
 *
 * Request message for associating a categorization label with a specific family.
 * This mapping is primarily used to tag families for reporting, targeted filtering, or localized taxonomy without altering their core identity.
 *
 * @generated from message Scailo.FamiliesServiceLabelCreateRequest
 */
export declare class FamiliesServiceLabelCreateRequest extends Message<FamiliesServiceLabelCreateRequest> {
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
     * @description The unique internal identifier of the target family.
     *
     * @example 582
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target label to attach to the family.
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 label_id = 11;
     */
    labelId: bigint;
    constructor(data?: PartialMessage<FamiliesServiceLabelCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServiceLabelCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServiceLabelCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServiceLabelCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServiceLabelCreateRequest;
    static equals(a: FamiliesServiceLabelCreateRequest | PlainMessage<FamiliesServiceLabelCreateRequest> | undefined, b: FamiliesServiceLabelCreateRequest | PlainMessage<FamiliesServiceLabelCreateRequest> | undefined): boolean;
}
/**
 *
 * Represents the finalized association between a family and a categorization label.
 * Encapsulates the core entity mapping along with standard lifecycle and compliance metadata.
 *
 * @generated from message Scailo.FamilyLabel
 */
export declare class FamilyLabel extends Message<FamilyLabel> {
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
     * @description The unique internal identifier of the associated family.
     *
     * @example 582
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     *
     * @description The unique internal identifier of the associated label.
     *
     * @example 12
     *
     * @generated from field: uint64 label_id = 11;
     */
    labelId: bigint;
    constructor(data?: PartialMessage<FamilyLabel>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamilyLabel";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamilyLabel;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamilyLabel;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamilyLabel;
    static equals(a: FamilyLabel | PlainMessage<FamilyLabel> | undefined, b: FamilyLabel | PlainMessage<FamilyLabel> | undefined): boolean;
}
/**
 *
 * Represents a collection payload encapsulating multiple family label associations.
 * Used for bulk retrieval or data-grid population.
 *
 * @generated from message Scailo.FamilyLabelsList
 */
export declare class FamilyLabelsList extends Message<FamilyLabelsList> {
    /**
     *
     * @description An array containing the requested family label association records.
     *
     * @format Repeated array of FamilyLabel message blocks.
     *
     * @generated from field: repeated Scailo.FamilyLabel list = 1;
     */
    list: FamilyLabel[];
    constructor(data?: PartialMessage<FamilyLabelsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamilyLabelsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamilyLabelsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamilyLabelsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamilyLabelsList;
    static equals(a: FamilyLabelsList | PlainMessage<FamilyLabelsList> | undefined, b: FamilyLabelsList | PlainMessage<FamilyLabelsList> | undefined): boolean;
}
/**
 *
 * Request message for associating a physical or logical storage location with a specific family.
 * This instructs the inventory management system where items within this family are permitted to be stored.
 *
 * @generated from message Scailo.FamiliesServiceStorageCreateRequest
 */
export declare class FamiliesServiceStorageCreateRequest extends Message<FamiliesServiceStorageCreateRequest> {
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
     * @description The unique internal identifier of the target family.
     *
     * @example 582
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target storage location to associate with the family.
     *
     * @example 1050
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 storage_id = 11;
     */
    storageId: bigint;
    constructor(data?: PartialMessage<FamiliesServiceStorageCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServiceStorageCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServiceStorageCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServiceStorageCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServiceStorageCreateRequest;
    static equals(a: FamiliesServiceStorageCreateRequest | PlainMessage<FamiliesServiceStorageCreateRequest> | undefined, b: FamiliesServiceStorageCreateRequest | PlainMessage<FamiliesServiceStorageCreateRequest> | undefined): boolean;
}
/**
 *
 * Represents the finalized association between a family and an authorized storage location.
 *
 * @generated from message Scailo.FamilyStorage
 */
export declare class FamilyStorage extends Message<FamilyStorage> {
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
     * @description The unique internal identifier of the associated family.
     *
     * @example 582
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     *
     * @description The unique internal identifier of the associated storage location.
     *
     * @example 1050
     *
     * @generated from field: uint64 storage_id = 11;
     */
    storageId: bigint;
    constructor(data?: PartialMessage<FamilyStorage>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamilyStorage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamilyStorage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamilyStorage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamilyStorage;
    static equals(a: FamilyStorage | PlainMessage<FamilyStorage> | undefined, b: FamilyStorage | PlainMessage<FamilyStorage> | undefined): boolean;
}
/**
 *
 * Represents a collection payload encapsulating multiple family storage location assignments.
 *
 * @generated from message Scailo.FamilyStoragesList
 */
export declare class FamilyStoragesList extends Message<FamilyStoragesList> {
    /**
     *
     * @description An array containing the requested family storage association records.
     *
     * @format Repeated array of FamilyStorage message blocks.
     *
     * @generated from field: repeated Scailo.FamilyStorage list = 1;
     */
    list: FamilyStorage[];
    constructor(data?: PartialMessage<FamilyStoragesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamilyStoragesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamilyStoragesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamilyStoragesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamilyStoragesList;
    static equals(a: FamilyStoragesList | PlainMessage<FamilyStoragesList> | undefined, b: FamilyStoragesList | PlainMessage<FamilyStoragesList> | undefined): boolean;
}
/**
 *
 * Request message to verify the existence or availability of a specific unit of material (UOM) conversion rule for a given family.
 * Used defensively by client applications before allowing orders in alternate units.
 *
 * @generated from message Scailo.FamiliesServiceUnitConversionPresenceRequest
 */
export declare class FamiliesServiceUnitConversionPresenceRequest extends Message<FamiliesServiceUnitConversionPresenceRequest> {
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target family.
     *
     * @example 582
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the target alternate unit of material (UOM).
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 uom_id = 11;
     */
    uomId: bigint;
    constructor(data?: PartialMessage<FamiliesServiceUnitConversionPresenceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServiceUnitConversionPresenceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServiceUnitConversionPresenceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServiceUnitConversionPresenceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServiceUnitConversionPresenceRequest;
    static equals(a: FamiliesServiceUnitConversionPresenceRequest | PlainMessage<FamiliesServiceUnitConversionPresenceRequest> | undefined, b: FamiliesServiceUnitConversionPresenceRequest | PlainMessage<FamiliesServiceUnitConversionPresenceRequest> | undefined): boolean;
}
/**
 *
 * Request message for creating a mathematical conversion rule between a family's base unit of material and an alternate unit.
 * Used to support multi-unit procurement and manufacturing (e.g., converting base 'Pieces' to alternate 'Boxes').
 *
 * @generated from message Scailo.FamiliesServiceUnitConversionCreateRequest
 */
export declare class FamiliesServiceUnitConversionCreateRequest extends Message<FamiliesServiceUnitConversionCreateRequest> {
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
     * @description The unique internal identifier of the target family.
     *
     * @example 582
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the alternate unit of material (UOM) being mapped.
     *
     * @example 12
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 uom_id = 11;
     */
    uomId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The mathematical multiplication factor applied to calculate the conversion (Base Unit * Factor / Divisor = Alternate Unit).
     *
     * @example 10
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 factor = 12;
     */
    factor: bigint;
    /**
     *
     * @mandatory
     *
     * @description The mathematical division factor applied to calculate the conversion.
     *
     * @example 1
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 divisor = 13;
     */
    divisor: bigint;
    constructor(data?: PartialMessage<FamiliesServiceUnitConversionCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServiceUnitConversionCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServiceUnitConversionCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServiceUnitConversionCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServiceUnitConversionCreateRequest;
    static equals(a: FamiliesServiceUnitConversionCreateRequest | PlainMessage<FamiliesServiceUnitConversionCreateRequest> | undefined, b: FamiliesServiceUnitConversionCreateRequest | PlainMessage<FamiliesServiceUnitConversionCreateRequest> | undefined): boolean;
}
/**
 *
 * Represents a mathematical conversion rule mapped to a specific family, facilitating transactions in multiple units of material.
 *
 * @generated from message Scailo.FamilyUnitConversion
 */
export declare class FamilyUnitConversion extends Message<FamilyUnitConversion> {
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
     * @description The unique internal identifier of the associated family.
     *
     * @example 582
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     *
     * @description The unique internal identifier of the alternate unit of material (UOM).
     *
     * @example 12
     *
     * @generated from field: uint64 uom_id = 11;
     */
    uomId: bigint;
    /**
     *
     * @description The mathematical multiplication factor for the conversion.
     *
     * @example 10
     *
     * @generated from field: uint64 factor = 12;
     */
    factor: bigint;
    /**
     *
     * @description The mathematical division factor for the conversion.
     *
     * @example 1
     *
     * @generated from field: uint64 divisor = 13;
     */
    divisor: bigint;
    constructor(data?: PartialMessage<FamilyUnitConversion>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamilyUnitConversion";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamilyUnitConversion;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamilyUnitConversion;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamilyUnitConversion;
    static equals(a: FamilyUnitConversion | PlainMessage<FamilyUnitConversion> | undefined, b: FamilyUnitConversion | PlainMessage<FamilyUnitConversion> | undefined): boolean;
}
/**
 *
 * Represents a collection payload encapsulating multiple family unit conversion rules.
 *
 * @generated from message Scailo.FamilyUnitConversionsList
 */
export declare class FamilyUnitConversionsList extends Message<FamilyUnitConversionsList> {
    /**
     *
     * @description An array containing the requested family unit conversion records.
     *
     * @format Repeated array of FamilyUnitConversion message blocks.
     *
     * @generated from field: repeated Scailo.FamilyUnitConversion list = 1;
     */
    list: FamilyUnitConversion[];
    constructor(data?: PartialMessage<FamilyUnitConversionsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamilyUnitConversionsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamilyUnitConversionsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamilyUnitConversionsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamilyUnitConversionsList;
    static equals(a: FamilyUnitConversionsList | PlainMessage<FamilyUnitConversionsList> | undefined, b: FamilyUnitConversionsList | PlainMessage<FamilyUnitConversionsList> | undefined): boolean;
}
/**
 *
 * Request message for associating a Quality Control (QC) group with a specific family.
 * This determines the specific inspection and compliance workflows required for items within this family upon intake or production.
 *
 * @generated from message Scailo.FamiliesServiceQCGroupCreateRequest
 */
export declare class FamiliesServiceQCGroupCreateRequest extends Message<FamiliesServiceQCGroupCreateRequest> {
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
     * @description The unique internal identifier of the target family.
     *
     * @example 582
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the QC group to associate with the family.
     *
     * @example 88
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 qc_group_id = 11;
     */
    qcGroupId: bigint;
    constructor(data?: PartialMessage<FamiliesServiceQCGroupCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServiceQCGroupCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServiceQCGroupCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServiceQCGroupCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServiceQCGroupCreateRequest;
    static equals(a: FamiliesServiceQCGroupCreateRequest | PlainMessage<FamiliesServiceQCGroupCreateRequest> | undefined, b: FamiliesServiceQCGroupCreateRequest | PlainMessage<FamiliesServiceQCGroupCreateRequest> | undefined): boolean;
}
/**
 *
 * Represents the finalized association between a family and a Quality Control (QC) compliance group.
 *
 * @generated from message Scailo.FamilyQCGroup
 */
export declare class FamilyQCGroup extends Message<FamilyQCGroup> {
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
     * @description The unique internal identifier of the associated family.
     *
     * @example 582
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     *
     * @description The unique internal identifier of the associated QC group.
     *
     * @example 88
     *
     * @generated from field: uint64 qc_group_id = 11;
     */
    qcGroupId: bigint;
    constructor(data?: PartialMessage<FamilyQCGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamilyQCGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamilyQCGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamilyQCGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamilyQCGroup;
    static equals(a: FamilyQCGroup | PlainMessage<FamilyQCGroup> | undefined, b: FamilyQCGroup | PlainMessage<FamilyQCGroup> | undefined): boolean;
}
/**
 *
 * Represents a collection payload encapsulating multiple family QC group assignments.
 *
 * @generated from message Scailo.FamilyQCGroupsList
 */
export declare class FamilyQCGroupsList extends Message<FamilyQCGroupsList> {
    /**
     *
     * @description An array containing the requested family QC group association records.
     *
     * @format Repeated array of FamilyQCGroup message blocks.
     *
     * @generated from field: repeated Scailo.FamilyQCGroup list = 1;
     */
    list: FamilyQCGroup[];
    constructor(data?: PartialMessage<FamilyQCGroupsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamilyQCGroupsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamilyQCGroupsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamilyQCGroupsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamilyQCGroupsList;
    static equals(a: FamilyQCGroupsList | PlainMessage<FamilyQCGroupsList> | undefined, b: FamilyQCGroupsList | PlainMessage<FamilyQCGroupsList> | undefined): boolean;
}
/**
 *
 * Request message for attaching an image or visual asset to a specific family.
 * This binds a previously uploaded document vault file to the family for use in catalogs or technical references.
 *
 * @generated from message Scailo.FamiliesServiceImageCreateRequest
 */
export declare class FamiliesServiceImageCreateRequest extends Message<FamiliesServiceImageCreateRequest> {
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
     * @description The unique internal identifier of the target family.
     *
     * @example 582
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     *
     * @mandatory
     *
     * @description The unique internal identifier of the uploaded image file within Vault.
     *
     * @example 15234
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 vault_file_id = 11;
     */
    vaultFileId: bigint;
    /**
     *
     * @mandatory
     *
     * @description A boolean flag indicating whether the image is publicly accessible (e.g., on external catalogs) or restricted to internal users.
     *
     * @example true
     *
     * @regex ^(?:true|false)$
     *
     * @format Boolean true or false.
     *
     * @generated from field: bool is_public = 12;
     */
    isPublic: boolean;
    /**
     *
     * @mandatory
     *
     * @description The ordering or display sequence of the image relative to other images in the family gallery.
     *
     * @example 1
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sequence_number = 13;
     */
    sequenceNumber: bigint;
    constructor(data?: PartialMessage<FamiliesServiceImageCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServiceImageCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServiceImageCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServiceImageCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServiceImageCreateRequest;
    static equals(a: FamiliesServiceImageCreateRequest | PlainMessage<FamiliesServiceImageCreateRequest> | undefined, b: FamiliesServiceImageCreateRequest | PlainMessage<FamiliesServiceImageCreateRequest> | undefined): boolean;
}
/**
 *
 * Request message for modifying the metadata (such as visibility or display order) of an existing family image attachment.
 *
 * @generated from message Scailo.FamiliesServiceImageUpdateRequest
 */
export declare class FamiliesServiceImageUpdateRequest extends Message<FamiliesServiceImageUpdateRequest> {
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
     * @description A boolean flag indicating whether the image is publicly accessible (e.g., on external catalogs) or restricted to internal users.
     *
     * @example false
     *
     * @regex ^(?:true|false)$
     *
     * @format Boolean true or false.
     *
     * @generated from field: bool is_public = 12;
     */
    isPublic: boolean;
    /**
     *
     * @mandatory
     *
     * @description The updated ordering or display sequence of the image relative to other images in the family gallery.
     *
     * @example 2
     *
     * @regex ^[1-9][0-9]*$
     *
     * @format Unsigned 64-bit integer greater than 0.
     *
     * @generated from field: uint64 sequence_number = 13;
     */
    sequenceNumber: bigint;
    constructor(data?: PartialMessage<FamiliesServiceImageUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServiceImageUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServiceImageUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServiceImageUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServiceImageUpdateRequest;
    static equals(a: FamiliesServiceImageUpdateRequest | PlainMessage<FamiliesServiceImageUpdateRequest> | undefined, b: FamiliesServiceImageUpdateRequest | PlainMessage<FamiliesServiceImageUpdateRequest> | undefined): boolean;
}
/**
 *
 * Represents a visual asset association tied to a family, dictating its presentation order and access visibility.
 *
 * @generated from message Scailo.FamilyImage
 */
export declare class FamilyImage extends Message<FamilyImage> {
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
     * @description The unique internal identifier of the associated family.
     *
     * @example 582
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     *
     * @description The unique internal identifier of the vault file acting as the image source.
     *
     * @example 15234
     *
     * @generated from field: uint64 vault_file_id = 11;
     */
    vaultFileId: bigint;
    /**
     *
     * @description A boolean flag indicating if the image is publicly accessible.
     *
     * @example true
     *
     * @generated from field: bool is_public = 12;
     */
    isPublic: boolean;
    /**
     *
     * @description The sequential display order of the image.
     *
     * @example 1
     *
     * @generated from field: uint64 sequence_number = 13;
     */
    sequenceNumber: bigint;
    constructor(data?: PartialMessage<FamilyImage>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamilyImage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamilyImage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamilyImage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamilyImage;
    static equals(a: FamilyImage | PlainMessage<FamilyImage> | undefined, b: FamilyImage | PlainMessage<FamilyImage> | undefined): boolean;
}
/**
 *
 * Represents a collection payload encapsulating multiple family image associations.
 *
 * @generated from message Scailo.FamilyImagesList
 */
export declare class FamilyImagesList extends Message<FamilyImagesList> {
    /**
     *
     * @description An array containing the requested family image association records.
     *
     * @format Repeated array of FamilyImage message blocks.
     *
     * @generated from field: repeated Scailo.FamilyImage list = 1;
     */
    list: FamilyImage[];
    constructor(data?: PartialMessage<FamilyImagesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamilyImagesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamilyImagesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamilyImagesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamilyImagesList;
    static equals(a: FamilyImagesList | PlainMessage<FamilyImagesList> | undefined, b: FamilyImagesList | PlainMessage<FamilyImagesList> | undefined): boolean;
}
/**
 *
 * Request message for updating the standard base unit price of an existing family.
 * This isolates price mutations from deeper structural updates, enabling rapid pricing adjustments while maintaining catalog integrity.
 *
 * @generated from message Scailo.FamiliesServiceUpdatePriceRequest
 */
export declare class FamiliesServiceUpdatePriceRequest extends Message<FamiliesServiceUpdatePriceRequest> {
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
     * @description The globally unique identifier (UUID) of the target family.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format Valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string uuid = 10;
     */
    uuid: string;
    /**
     *
     * @mandatory
     *
     * @description The new base unit price for items in this family, represented in the base currency subunit (e.g., cents).
     *
     * @example 1750
     *
     * @regex ^[0-9]+$
     *
     * @format Unsigned 64-bit integer greater than or equal to 0.
     *
     * @generated from field: uint64 price = 26;
     */
    price: bigint;
    constructor(data?: PartialMessage<FamiliesServiceUpdatePriceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServiceUpdatePriceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServiceUpdatePriceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServiceUpdatePriceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServiceUpdatePriceRequest;
    static equals(a: FamiliesServiceUpdatePriceRequest | PlainMessage<FamiliesServiceUpdatePriceRequest> | undefined, b: FamiliesServiceUpdatePriceRequest | PlainMessage<FamiliesServiceUpdatePriceRequest> | undefined): boolean;
}
/**
 *
 * Request message for updating the minimum inventory threshold (safety stock) of an existing family.
 * This triggers operational rules within the inventory system to automate restock alerts when physical stock dips below this value.
 *
 * @generated from message Scailo.FamiliesServiceUpdateMinStockToMaintainRequest
 */
export declare class FamiliesServiceUpdateMinStockToMaintainRequest extends Message<FamiliesServiceUpdateMinStockToMaintainRequest> {
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
     * @description The globally unique identifier (UUID) of the target family.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format Valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string uuid = 10;
     */
    uuid: string;
    /**
     *
     * @mandatory
     *
     * @description The updated minimum inventory threshold required to be maintained for items within this family.
     *
     * @example 1000
     *
     * @regex ^[0-9]+$
     *
     * @format Unsigned 64-bit integer greater than or equal to 0.
     *
     * @generated from field: uint64 min_stock_to_maintain = 27;
     */
    minStockToMaintain: bigint;
    constructor(data?: PartialMessage<FamiliesServiceUpdateMinStockToMaintainRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.FamiliesServiceUpdateMinStockToMaintainRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FamiliesServiceUpdateMinStockToMaintainRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FamiliesServiceUpdateMinStockToMaintainRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FamiliesServiceUpdateMinStockToMaintainRequest;
    static equals(a: FamiliesServiceUpdateMinStockToMaintainRequest | PlainMessage<FamiliesServiceUpdateMinStockToMaintainRequest> | undefined, b: FamiliesServiceUpdateMinStockToMaintainRequest | PlainMessage<FamiliesServiceUpdateMinStockToMaintainRequest> | undefined): boolean;
}
//# sourceMappingURL=families.scailo_pb.d.ts.map