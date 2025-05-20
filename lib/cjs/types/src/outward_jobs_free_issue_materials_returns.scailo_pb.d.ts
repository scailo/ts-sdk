import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a outward job free issue material return can be added
 *
 * @generated from enum Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM
 */
export declare enum OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the outward job free issue material return originated from a outward job
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_OUTWARD_JOB = 1;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_OUTWARD_JOB = 1
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY
 */
export declare enum OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch ordered results by the internal quantity
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the vendor unit of material ID
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_VENDOR_UOM_ID = 12;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_VENDOR_UOM_ID = 12,
    /**
     * Fetch ordered results by the vendor quantity
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_VENDOR_QUANTITY = 13;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_VENDOR_QUANTITY = 13
}
/**
 *
 * Describes the applicable statuses of outward job free issue material return items
 *
 * @generated from enum Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS
 */
export declare enum OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the outward job free issue material return items must have been approved
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS_APPROVED = 1;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the outward job free issue material return items must be waiting for approval
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS_UNAPPROVED = 2;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY
 */
export declare enum OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_CREATED_AT = 1;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_MODIFIED_AT = 2;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_APPROVED_ON = 3;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_APPROVED_BY = 4;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_COMPLETED_ON = 6;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_REFERENCE_ID = 10;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest
 */
export declare class OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest extends Message<OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest> {
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
     * The reference ID of the outward job free issue material return
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 12;
     */
    refFrom: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM;
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
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest;
    static equals(a: OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest> | undefined, b: OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest
 */
export declare class OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest extends Message<OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest> {
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
     * The reference ID of the outward job free issue material return
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
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest;
    static equals(a: OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest> | undefined, b: OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.OutwardJobFreeIssueMaterialReturnAncillaryParameters
 */
export declare class OutwardJobFreeIssueMaterialReturnAncillaryParameters extends Message<OutwardJobFreeIssueMaterialReturnAncillaryParameters> {
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
    constructor(data?: PartialMessage<OutwardJobFreeIssueMaterialReturnAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobFreeIssueMaterialReturnAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobFreeIssueMaterialReturnAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialReturnAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialReturnAncillaryParameters;
    static equals(a: OutwardJobFreeIssueMaterialReturnAncillaryParameters | PlainMessage<OutwardJobFreeIssueMaterialReturnAncillaryParameters> | undefined, b: OutwardJobFreeIssueMaterialReturnAncillaryParameters | PlainMessage<OutwardJobFreeIssueMaterialReturnAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.OutwardJobFreeIssueMaterialReturn
 */
export declare class OutwardJobFreeIssueMaterialReturn extends Message<OutwardJobFreeIssueMaterialReturn> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this outward job free issue material return
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
     * The status of this outward job free issue material return
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this outward job free issue material return
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this outward job free issue material return was marked as completed
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
     * The reference ID of the outward job free issue material return
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
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 12;
     */
    refFrom: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM;
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
     * The list of associated outward job free issue material return items
     *
     * @generated from field: repeated Scailo.OutwardJobFreeIssueMaterialReturnItem list = 20;
     */
    list: OutwardJobFreeIssueMaterialReturnItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<OutwardJobFreeIssueMaterialReturn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobFreeIssueMaterialReturn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobFreeIssueMaterialReturn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialReturn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialReturn;
    static equals(a: OutwardJobFreeIssueMaterialReturn | PlainMessage<OutwardJobFreeIssueMaterialReturn> | undefined, b: OutwardJobFreeIssueMaterialReturn | PlainMessage<OutwardJobFreeIssueMaterialReturn> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a outward job free issue material return
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest
 */
export declare class OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest extends Message<OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the outward job free issue material return ID
     *
     * @generated from field: uint64 outward_job_free_issue_material_return_id = 10;
     */
    outwardJobFreeIssueMaterialReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the item hash to be dispatched
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity (in cents) being dispatched in internal unit of material
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
     * Stores the quantity (in cents) being dispatched in vendor's unit of material
     *
     * @generated from field: uint64 vendor_quantity = 15;
     */
    vendorQuantity: bigint;
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest;
    static equals(a: OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest> | undefined, b: OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a outward job free issue material return
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest
 */
export declare class OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest extends Message<OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest> {
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
     * Stores the item hash to be dispatched
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity (in cents) being dispatched in internal unit of material
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
     * Stores the quantity (in cents) being dispatched in vendor's unit of material
     *
     * @generated from field: uint64 vendor_quantity = 15;
     */
    vendorQuantity: bigint;
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest;
    static equals(a: OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest> | undefined, b: OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a outward job free issue material return
 *
 * @generated from message Scailo.OutwardJobFreeIssueMaterialReturnItem
 */
export declare class OutwardJobFreeIssueMaterialReturnItem extends Message<OutwardJobFreeIssueMaterialReturnItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this outward job free issue material return
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
     * Stores the outward job free issue material return ID
     *
     * @generated from field: uint64 outward_job_free_issue_material_return_id = 10;
     */
    outwardJobFreeIssueMaterialReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the item hash to be dispatched
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity (in cents) being dispatched in internal unit of material
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
     * Stores the quantity (in cents) being dispatched in vendor's unit of material
     *
     * @generated from field: uint64 vendor_quantity = 15;
     */
    vendorQuantity: bigint;
    constructor(data?: PartialMessage<OutwardJobFreeIssueMaterialReturnItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobFreeIssueMaterialReturnItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobFreeIssueMaterialReturnItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialReturnItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialReturnItem;
    static equals(a: OutwardJobFreeIssueMaterialReturnItem | PlainMessage<OutwardJobFreeIssueMaterialReturnItem> | undefined, b: OutwardJobFreeIssueMaterialReturnItem | PlainMessage<OutwardJobFreeIssueMaterialReturnItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of outward job free issue material returns
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsReturnsList
 */
export declare class OutwardJobsFreeIssueMaterialsReturnsList extends Message<OutwardJobsFreeIssueMaterialsReturnsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.OutwardJobFreeIssueMaterialReturn list = 1;
     */
    list: OutwardJobFreeIssueMaterialReturn[];
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsReturnsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsReturnsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsReturnsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsList;
    static equals(a: OutwardJobsFreeIssueMaterialsReturnsList | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsList> | undefined, b: OutwardJobsFreeIssueMaterialsReturnsList | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of outward job free issue material return items
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsReturnsItemsList
 */
export declare class OutwardJobsFreeIssueMaterialsReturnsItemsList extends Message<OutwardJobsFreeIssueMaterialsReturnsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.OutwardJobFreeIssueMaterialReturnItem list = 1;
     */
    list: OutwardJobFreeIssueMaterialReturnItem[];
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsReturnsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsReturnsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsReturnsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsItemsList;
    static equals(a: OutwardJobsFreeIssueMaterialsReturnsItemsList | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsItemsList> | undefined, b: OutwardJobsFreeIssueMaterialsReturnsItemsList | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.OutwardJobFreeIssueMaterialReturnItemHistoryRequest
 */
export declare class OutwardJobFreeIssueMaterialReturnItemHistoryRequest extends Message<OutwardJobFreeIssueMaterialReturnItemHistoryRequest> {
    /**
     * Stores the outward job free issue material return ID
     *
     * @generated from field: uint64 outward_job_free_issue_material_return_id = 10;
     */
    outwardJobFreeIssueMaterialReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<OutwardJobFreeIssueMaterialReturnItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobFreeIssueMaterialReturnItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobFreeIssueMaterialReturnItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialReturnItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialReturnItemHistoryRequest;
    static equals(a: OutwardJobFreeIssueMaterialReturnItemHistoryRequest | PlainMessage<OutwardJobFreeIssueMaterialReturnItemHistoryRequest> | undefined, b: OutwardJobFreeIssueMaterialReturnItemHistoryRequest | PlainMessage<OutwardJobFreeIssueMaterialReturnItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective outward job free issue material return item
 *
 * @generated from message Scailo.OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest
 */
export declare class OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest extends Message<OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest> {
    /**
     * Stores the outward job free issue material return ID
     *
     * @generated from field: uint64 outward_job_free_issue_material_return_id = 10;
     */
    outwardJobFreeIssueMaterialReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest;
    static equals(a: OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest | PlainMessage<OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest> | undefined, b: OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest | PlainMessage<OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.OutwardJobFreeIssueMaterialReturnItemsSearchRequest
 */
export declare class OutwardJobFreeIssueMaterialReturnItemsSearchRequest extends Message<OutwardJobFreeIssueMaterialReturnItemsSearchRequest> {
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
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS status = 7;
     */
    status: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS;
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
     * The ID of the outward job free issue material return
     *
     * @generated from field: uint64 outward_job_free_issue_material_return_id = 20;
     */
    outwardJobFreeIssueMaterialReturnId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 22;
     */
    familyId: bigint;
    /**
     * Stores the item hash to be dispatched
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
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<OutwardJobFreeIssueMaterialReturnItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobFreeIssueMaterialReturnItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobFreeIssueMaterialReturnItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialReturnItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobFreeIssueMaterialReturnItemsSearchRequest;
    static equals(a: OutwardJobFreeIssueMaterialReturnItemsSearchRequest | PlainMessage<OutwardJobFreeIssueMaterialReturnItemsSearchRequest> | undefined, b: OutwardJobFreeIssueMaterialReturnItemsSearchRequest | PlainMessage<OutwardJobFreeIssueMaterialReturnItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse
 */
export declare class OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse extends Message<OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.OutwardJobFreeIssueMaterialReturnItem payload = 4;
     */
    payload: OutwardJobFreeIssueMaterialReturnItem[];
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
    static equals(a: OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse> | undefined, b: OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest extends Message<OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     * The associated reference
     *
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 1;
     */
    refFrom: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM;
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
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq
 */
export declare class OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq extends Message<OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq> {
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
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY;
    /**
     * The status of this outward job free issue material return
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq;
    static equals(a: OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq> | undefined, b: OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse
 */
export declare class OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse extends Message<OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.OutwardJobFreeIssueMaterialReturn payload = 4;
     */
    payload: OutwardJobFreeIssueMaterialReturn[];
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse;
    static equals(a: OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse> | undefined, b: OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq
 */
export declare class OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq extends Message<OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq> {
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
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY;
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
     * The status of this outward job free issue material return
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
     * The reference ID of the outward job free issue material return
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
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 22;
     */
    refFrom: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM;
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
     * The associated consignee location ID of the linked outward job
     *
     * @generated from field: uint64 consignee_location_id = 50;
     */
    consigneeLocationId: bigint;
    /**
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
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq;
    static equals(a: OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq> | undefined, b: OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceCountReq
 */
export declare class OutwardJobsFreeIssueMaterialsReturnsServiceCountReq extends Message<OutwardJobsFreeIssueMaterialsReturnsServiceCountReq> {
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
     * The status of this outward job free issue material return
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
     * The reference ID of the outward job free issue material return
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
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 22;
     */
    refFrom: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM;
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
     * The associated consignee location ID of the linked outward job
     *
     * @generated from field: uint64 consignee_location_id = 50;
     */
    consigneeLocationId: bigint;
    /**
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
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsReturnsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceCountReq;
    static equals(a: OutwardJobsFreeIssueMaterialsReturnsServiceCountReq | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceCountReq> | undefined, b: OutwardJobsFreeIssueMaterialsReturnsServiceCountReq | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq
 */
export declare class OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq extends Message<OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq> {
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
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY;
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
     * @generated from field: Scailo.OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 22;
     */
    refFrom: OUTWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    constructor(data?: PartialMessage<OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq;
    static equals(a: OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq> | undefined, b: OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq | PlainMessage<OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=outward_jobs_free_issue_materials_returns.scailo_pb.d.ts.map