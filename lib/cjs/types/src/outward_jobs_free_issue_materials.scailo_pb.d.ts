import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which an outward job free issue material can be added
 *
 * @generated from enum Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM
 */
export declare enum OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the outward job free issue material originated from an outward job
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM_OUTWARD_JOB = 1;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM_OUTWARD_JOB = 1
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY
 */
export declare enum OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch ordered results by the internal quantity
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the vendor unit of material ID
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_VENDOR_UOM_ID = 12;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_VENDOR_UOM_ID = 12,
    /**
     * Fetch ordered results by the vendor quantity
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_VENDOR_QUANTITY = 13;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_VENDOR_QUANTITY = 13,
    /**
     * Fetch ordered results by the vendor family code
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_VENDOR_FAMILY_CODE = 14;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_VENDOR_FAMILY_CODE = 14
}
/**
 *
 * Describes the applicable statuses of outward job free issue material items
 *
 * @generated from enum Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS
 */
export declare enum OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the outward job free issue material items must have been approved
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS_APPROVED = 1;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the outward job free issue material items must be waiting for approval
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS_UNAPPROVED = 2;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY
 */
export declare enum OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_CREATED_AT = 1;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_MODIFIED_AT = 2;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_APPROVED_ON = 3;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_APPROVED_BY = 4;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_COMPLETED_ON = 6;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_REFERENCE_ID = 10;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsServiceCreateRequest
 */
export declare class OutwardJobsFreeIssueMaterialsServiceCreateRequest extends Message<OutwardJobsFreeIssueMaterialsServiceCreateRequest> {
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
     * The reference ID of the outward job free issue material
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 12;
     */
    refFrom: OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The location ID of where the record is created
     *
     * @generated from field: uint64 location_id = 15;
     */
    locationId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceCreateRequest;
    static equals(a: OutwardJobsFreeIssueMaterialsServiceCreateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsServiceCreateRequest> | undefined, b: OutwardJobsFreeIssueMaterialsServiceCreateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsServiceUpdateRequest
 */
export declare class OutwardJobsFreeIssueMaterialsServiceUpdateRequest extends Message<OutwardJobsFreeIssueMaterialsServiceUpdateRequest> {
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
     * The reference ID of the outward job free issue material
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceUpdateRequest;
    static equals(a: OutwardJobsFreeIssueMaterialsServiceUpdateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsServiceUpdateRequest> | undefined, b: OutwardJobsFreeIssueMaterialsServiceUpdateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsServiceAutofillRequest
 */
export declare class OutwardJobsFreeIssueMaterialsServiceAutofillRequest extends Message<OutwardJobsFreeIssueMaterialsServiceAutofillRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * The UUID of the record that needs to be updated
     *
     * @generated from field: string uuid = 2;
     */
    uuid: string;
    /**
     * Stores if the inventory needs to be split into unit quantities
     *
     * @generated from field: bool split_into_unit_quantity = 10;
     */
    splitIntoUnitQuantity: boolean;
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceAutofillRequest;
    static equals(a: OutwardJobsFreeIssueMaterialsServiceAutofillRequest | PlainMessage<OutwardJobsFreeIssueMaterialsServiceAutofillRequest> | undefined, b: OutwardJobsFreeIssueMaterialsServiceAutofillRequest | PlainMessage<OutwardJobsFreeIssueMaterialsServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.OutwardJobFreeIssueMaterialAncillaryParameters
 */
export declare class OutwardJobFreeIssueMaterialAncillaryParameters extends Message<OutwardJobFreeIssueMaterialAncillaryParameters> {
    /**
     * The UUID of the ref_id (the UUID of the associated ref_id)
     *
     * @generated from field: string ref_uuid = 213;
     */
    refUuid: string;
    /**
     * The UUID of the location (the UUID of the associated location_id)
     *
     * @generated from field: string location_uuid = 215;
     */
    locationUuid: string;
    constructor(data?: PartialMessage<OutwardJobFreeIssueMaterialAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobFreeIssueMaterialAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobFreeIssueMaterialAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialAncillaryParameters;
    static equals(a: OutwardJobFreeIssueMaterialAncillaryParameters | PlainMessage<OutwardJobFreeIssueMaterialAncillaryParameters> | undefined, b: OutwardJobFreeIssueMaterialAncillaryParameters | PlainMessage<OutwardJobFreeIssueMaterialAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.OutwardJobFreeIssueMaterial
 */
export declare class OutwardJobFreeIssueMaterial extends Message<OutwardJobFreeIssueMaterial> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this outward job free issue material
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
     * The status of this outward job free issue material
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this outward job free issue material
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this outward job free issue material was marked as completed
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
     * The reference ID of the outward job free issue material
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 11;
     */
    finalRefNumber: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 12;
     */
    refFrom: OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The location ID of where the record is created
     *
     * @generated from field: uint64 location_id = 15;
     */
    locationId: bigint;
    /**
     * The list of associated outward job free issue material items
     *
     * @generated from field: repeated Scailo.OutwardJobFreeIssueMaterialItem list = 20;
     */
    list: OutwardJobFreeIssueMaterialItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<OutwardJobFreeIssueMaterial>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobFreeIssueMaterial";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobFreeIssueMaterial;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterial;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterial;
    static equals(a: OutwardJobFreeIssueMaterial | PlainMessage<OutwardJobFreeIssueMaterial> | undefined, b: OutwardJobFreeIssueMaterial | PlainMessage<OutwardJobFreeIssueMaterial> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a outward job free issue material
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsServiceItemCreateRequest
 */
export declare class OutwardJobsFreeIssueMaterialsServiceItemCreateRequest extends Message<OutwardJobsFreeIssueMaterialsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the outward job free issue material ID
     *
     * @generated from field: uint64 outward_job_free_issue_material_id = 10;
     */
    outwardJobFreeIssueMaterialId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the item hash to be sent
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity (in cents) being received in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 14;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being received in vendor's unit of material
     *
     * @generated from field: uint64 vendor_quantity = 15;
     */
    vendorQuantity: bigint;
    /**
     * Stores the family code as defined by the vendor
     *
     * @generated from field: string vendor_family_code = 16;
     */
    vendorFamilyCode: string;
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceItemCreateRequest;
    static equals(a: OutwardJobsFreeIssueMaterialsServiceItemCreateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsServiceItemCreateRequest> | undefined, b: OutwardJobsFreeIssueMaterialsServiceItemCreateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a outward job free issue material
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest
 */
export declare class OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest extends Message<OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest> {
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
    /**
     * Stores the item hash to be sent
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity (in cents) being received in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 14;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being received in vendor's unit of material
     *
     * @generated from field: uint64 vendor_quantity = 15;
     */
    vendorQuantity: bigint;
    /**
     * Stores the family code as defined by the vendor
     *
     * @generated from field: string vendor_family_code = 16;
     */
    vendorFamilyCode: string;
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest;
    static equals(a: OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest> | undefined, b: OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a outward job free issue material
 *
 * @generated from message Scailo.OutwardJobFreeIssueMaterialItem
 */
export declare class OutwardJobFreeIssueMaterialItem extends Message<OutwardJobFreeIssueMaterialItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this outward job free issue material
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
     * Stores the outward job free issue material ID
     *
     * @generated from field: uint64 outward_job_free_issue_material_id = 10;
     */
    outwardJobFreeIssueMaterialId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the item hash to be sent
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity (in cents) being received in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Stores the ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 14;
     */
    vendorUomId: bigint;
    /**
     * Stores the quantity (in cents) being received in vendor's unit of material
     *
     * @generated from field: uint64 vendor_quantity = 15;
     */
    vendorQuantity: bigint;
    /**
     * Stores the family code as defined by the vendor
     *
     * @generated from field: string vendor_family_code = 16;
     */
    vendorFamilyCode: string;
    constructor(data?: PartialMessage<OutwardJobFreeIssueMaterialItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobFreeIssueMaterialItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobFreeIssueMaterialItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialItem;
    static equals(a: OutwardJobFreeIssueMaterialItem | PlainMessage<OutwardJobFreeIssueMaterialItem> | undefined, b: OutwardJobFreeIssueMaterialItem | PlainMessage<OutwardJobFreeIssueMaterialItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of outward jobs free issue materials
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsList
 */
export declare class OutwardJobsFreeIssueMaterialsList extends Message<OutwardJobsFreeIssueMaterialsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.OutwardJobFreeIssueMaterial list = 1;
     */
    list: OutwardJobFreeIssueMaterial[];
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsList;
    static equals(a: OutwardJobsFreeIssueMaterialsList | PlainMessage<OutwardJobsFreeIssueMaterialsList> | undefined, b: OutwardJobsFreeIssueMaterialsList | PlainMessage<OutwardJobsFreeIssueMaterialsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of outward job free issue material items
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsItemsList
 */
export declare class OutwardJobsFreeIssueMaterialsItemsList extends Message<OutwardJobsFreeIssueMaterialsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.OutwardJobFreeIssueMaterialItem list = 1;
     */
    list: OutwardJobFreeIssueMaterialItem[];
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsItemsList;
    static equals(a: OutwardJobsFreeIssueMaterialsItemsList | PlainMessage<OutwardJobsFreeIssueMaterialsItemsList> | undefined, b: OutwardJobsFreeIssueMaterialsItemsList | PlainMessage<OutwardJobsFreeIssueMaterialsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.OutwardJobFreeIssueMaterialItemHistoryRequest
 */
export declare class OutwardJobFreeIssueMaterialItemHistoryRequest extends Message<OutwardJobFreeIssueMaterialItemHistoryRequest> {
    /**
     * Stores the outward job free issue material ID
     *
     * @generated from field: uint64 outward_job_free_issue_material_id = 10;
     */
    outwardJobFreeIssueMaterialId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<OutwardJobFreeIssueMaterialItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobFreeIssueMaterialItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobFreeIssueMaterialItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialItemHistoryRequest;
    static equals(a: OutwardJobFreeIssueMaterialItemHistoryRequest | PlainMessage<OutwardJobFreeIssueMaterialItemHistoryRequest> | undefined, b: OutwardJobFreeIssueMaterialItemHistoryRequest | PlainMessage<OutwardJobFreeIssueMaterialItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective outward job free issue material item
 *
 * @generated from message Scailo.OutwardJobFreeIssueMaterialItemProspectiveInfoRequest
 */
export declare class OutwardJobFreeIssueMaterialItemProspectiveInfoRequest extends Message<OutwardJobFreeIssueMaterialItemProspectiveInfoRequest> {
    /**
     * Stores the outward job free issue material ID
     *
     * @generated from field: uint64 outward_job_free_issue_material_id = 10;
     */
    outwardJobFreeIssueMaterialId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<OutwardJobFreeIssueMaterialItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobFreeIssueMaterialItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobFreeIssueMaterialItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialItemProspectiveInfoRequest;
    static equals(a: OutwardJobFreeIssueMaterialItemProspectiveInfoRequest | PlainMessage<OutwardJobFreeIssueMaterialItemProspectiveInfoRequest> | undefined, b: OutwardJobFreeIssueMaterialItemProspectiveInfoRequest | PlainMessage<OutwardJobFreeIssueMaterialItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.OutwardJobFreeIssueMaterialItemsSearchRequest
 */
export declare class OutwardJobFreeIssueMaterialItemsSearchRequest extends Message<OutwardJobFreeIssueMaterialItemsSearchRequest> {
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
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS status = 7;
     */
    status: OUTWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS;
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
     * The ID of the outward job free issue material
     *
     * @generated from field: uint64 outward_job_free_issue_material_id = 20;
     */
    outwardJobFreeIssueMaterialId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 22;
     */
    familyId: bigint;
    /**
     * Stores the item hash to be sent
     *
     * @generated from field: string item_hash = 23;
     */
    itemHash: string;
    /**
     * The ID of the vendor's unit of material
     *
     * @generated from field: uint64 vendor_uom_id = 24;
     */
    vendorUomId: bigint;
    /**
     * Stores the family code as given by the vendor
     *
     * @generated from field: string vendor_family_code = 26;
     */
    vendorFamilyCode: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<OutwardJobFreeIssueMaterialItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobFreeIssueMaterialItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobFreeIssueMaterialItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialItemsSearchRequest;
    static equals(a: OutwardJobFreeIssueMaterialItemsSearchRequest | PlainMessage<OutwardJobFreeIssueMaterialItemsSearchRequest> | undefined, b: OutwardJobFreeIssueMaterialItemsSearchRequest | PlainMessage<OutwardJobFreeIssueMaterialItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse
 */
export declare class OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse extends Message<OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.OutwardJobFreeIssueMaterialItem payload = 4;
     */
    payload: OutwardJobFreeIssueMaterialItem[];
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse;
    static equals(a: OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse | PlainMessage<OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse> | undefined, b: OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse | PlainMessage<OutwardJobsFreeIssueMaterialsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest extends Message<OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     * The associated reference
     *
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 1;
     */
    refFrom: OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 2;
     */
    refId: bigint;
    /**
     * The associated family ID
     *
     * @generated from field: uint64 family_id = 3;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<OutwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsServicePaginationReq
 */
export declare class OutwardJobsFreeIssueMaterialsServicePaginationReq extends Message<OutwardJobsFreeIssueMaterialsServicePaginationReq> {
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
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY sort_key = 5;
     */
    sortKey: OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY;
    /**
     * The status of this outward job free issue material
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServicePaginationReq;
    static equals(a: OutwardJobsFreeIssueMaterialsServicePaginationReq | PlainMessage<OutwardJobsFreeIssueMaterialsServicePaginationReq> | undefined, b: OutwardJobsFreeIssueMaterialsServicePaginationReq | PlainMessage<OutwardJobsFreeIssueMaterialsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsServicePaginationResponse
 */
export declare class OutwardJobsFreeIssueMaterialsServicePaginationResponse extends Message<OutwardJobsFreeIssueMaterialsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.OutwardJobFreeIssueMaterial payload = 4;
     */
    payload: OutwardJobFreeIssueMaterial[];
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServicePaginationResponse;
    static equals(a: OutwardJobsFreeIssueMaterialsServicePaginationResponse | PlainMessage<OutwardJobsFreeIssueMaterialsServicePaginationResponse> | undefined, b: OutwardJobsFreeIssueMaterialsServicePaginationResponse | PlainMessage<OutwardJobsFreeIssueMaterialsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsServiceFilterReq
 */
export declare class OutwardJobsFreeIssueMaterialsServiceFilterReq extends Message<OutwardJobsFreeIssueMaterialsServiceFilterReq> {
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
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY sort_key = 5;
     */
    sortKey: OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY;
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
     * The status of this outward job free issue material
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
     * The reference ID of the outward job free issue material
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 22;
     */
    refFrom: OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The location ID of where the record is created
     *
     * @generated from field: uint64 location_id = 25;
     */
    locationId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 30;
     */
    familyId: bigint;
    /**
     * Outward Job related filters
     * The associated vendor ID of the linked outward job
     *
     * @generated from field: uint64 vendor_id = 51;
     */
    vendorId: bigint;
    /**
     * The ID of the associated project of the linked outward job
     *
     * @generated from field: uint64 project_id = 52;
     */
    projectId: bigint;
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceFilterReq;
    static equals(a: OutwardJobsFreeIssueMaterialsServiceFilterReq | PlainMessage<OutwardJobsFreeIssueMaterialsServiceFilterReq> | undefined, b: OutwardJobsFreeIssueMaterialsServiceFilterReq | PlainMessage<OutwardJobsFreeIssueMaterialsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsServiceCountReq
 */
export declare class OutwardJobsFreeIssueMaterialsServiceCountReq extends Message<OutwardJobsFreeIssueMaterialsServiceCountReq> {
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
     * The status of this outward job free issue material
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
     * The reference ID of the outward job free issue material
     *
     * @generated from field: string reference_id = 20;
     */
    referenceId: string;
    /**
     * The unique reference number that has been automatically generated
     *
     * @generated from field: string final_ref_number = 21;
     */
    finalRefNumber: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 22;
     */
    refFrom: OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The location ID of where the record is created
     *
     * @generated from field: uint64 location_id = 25;
     */
    locationId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 30;
     */
    familyId: bigint;
    /**
     * Outward Job related filters
     * The associated vendor ID of the linked outward job
     *
     * @generated from field: uint64 vendor_id = 51;
     */
    vendorId: bigint;
    /**
     * The ID of the associated project of the linked outward job
     *
     * @generated from field: uint64 project_id = 52;
     */
    projectId: bigint;
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceCountReq;
    static equals(a: OutwardJobsFreeIssueMaterialsServiceCountReq | PlainMessage<OutwardJobsFreeIssueMaterialsServiceCountReq> | undefined, b: OutwardJobsFreeIssueMaterialsServiceCountReq | PlainMessage<OutwardJobsFreeIssueMaterialsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsServiceSearchAllReq
 */
export declare class OutwardJobsFreeIssueMaterialsServiceSearchAllReq extends Message<OutwardJobsFreeIssueMaterialsServiceSearchAllReq> {
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
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY sort_key = 5;
     */
    sortKey: OUTWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY;
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
    /**
     * The associated reference
     *
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM ref_from = 22;
     */
    refFrom: OUTWARD_JOB_FREE_ISSUE_MATERIAL_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsServiceSearchAllReq;
    static equals(a: OutwardJobsFreeIssueMaterialsServiceSearchAllReq | PlainMessage<OutwardJobsFreeIssueMaterialsServiceSearchAllReq> | undefined, b: OutwardJobsFreeIssueMaterialsServiceSearchAllReq | PlainMessage<OutwardJobsFreeIssueMaterialsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=outward_jobs_free_issue_materials.scailo_pb.d.ts.map