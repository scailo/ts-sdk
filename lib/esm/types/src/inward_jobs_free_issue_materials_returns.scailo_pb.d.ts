import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a inward job free issue material return can be added
 *
 * @generated from enum Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM
 */
export declare enum INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the inward job free issue material return originated from a inward job
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_INWARD_JOB = 1;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM_INWARD_JOB = 1
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY
 */
export declare enum INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch ordered results by the internal quantity
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the client unit of material ID
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_CLIENT_UOM_ID = 12,
    /**
     * Fetch ordered results by the client quantity
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_CLIENT_QUANTITY = 13,
    /**
     * Fetch ordered results by the client family code
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14
}
/**
 *
 * Describes the applicable statuses of inward job free issue material return items
 *
 * @generated from enum Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS
 */
export declare enum INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the inward job free issue material return items must have been approved
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS_APPROVED = 1;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the inward job free issue material return items must be waiting for approval
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS_UNAPPROVED = 2;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY
 */
export declare enum INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_CREATED_AT = 1;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_MODIFIED_AT = 2;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_APPROVED_ON = 3;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_APPROVED_BY = 4;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_COMPLETED_ON = 6;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_REFERENCE_ID = 10;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest
 */
export declare class InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest extends Message<InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest> {
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
     * The reference ID of the inward job free issue material return
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 12;
     */
    refFrom: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM;
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
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest;
    static equals(a: InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest> | undefined, b: InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest
 */
export declare class InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest extends Message<InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest> {
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
     * The reference ID of the inward job free issue material return
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
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest;
    static equals(a: InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest> | undefined, b: InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.InwardJobFreeIssueMaterialReturnAncillaryParameters
 */
export declare class InwardJobFreeIssueMaterialReturnAncillaryParameters extends Message<InwardJobFreeIssueMaterialReturnAncillaryParameters> {
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
    constructor(data?: PartialMessage<InwardJobFreeIssueMaterialReturnAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobFreeIssueMaterialReturnAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobFreeIssueMaterialReturnAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialReturnAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialReturnAncillaryParameters;
    static equals(a: InwardJobFreeIssueMaterialReturnAncillaryParameters | PlainMessage<InwardJobFreeIssueMaterialReturnAncillaryParameters> | undefined, b: InwardJobFreeIssueMaterialReturnAncillaryParameters | PlainMessage<InwardJobFreeIssueMaterialReturnAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.InwardJobFreeIssueMaterialReturn
 */
export declare class InwardJobFreeIssueMaterialReturn extends Message<InwardJobFreeIssueMaterialReturn> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this inward job free issue material return
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
     * The status of this inward job free issue material return
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this inward job free issue material return
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this inward job free issue material return was marked as completed
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
     * The reference ID of the inward job free issue material return
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
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 12;
     */
    refFrom: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM;
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
     * The list of associated inward job free issue material return items
     *
     * @generated from field: repeated Scailo.InwardJobFreeIssueMaterialReturnItem list = 20;
     */
    list: InwardJobFreeIssueMaterialReturnItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<InwardJobFreeIssueMaterialReturn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobFreeIssueMaterialReturn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobFreeIssueMaterialReturn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialReturn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialReturn;
    static equals(a: InwardJobFreeIssueMaterialReturn | PlainMessage<InwardJobFreeIssueMaterialReturn> | undefined, b: InwardJobFreeIssueMaterialReturn | PlainMessage<InwardJobFreeIssueMaterialReturn> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a inward job free issue material return
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest
 */
export declare class InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest extends Message<InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the inward job free issue material return ID
     *
     * @generated from field: uint64 inward_job_free_issue_material_return_id = 10;
     */
    inwardJobFreeIssueMaterialReturnId: bigint;
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
     * Stores the ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being dispatched in client's unit of material
     *
     * @generated from field: uint64 client_quantity = 15;
     */
    clientQuantity: bigint;
    /**
     * Stores the family code as defined by the client
     *
     * @generated from field: string client_family_code = 16;
     */
    clientFamilyCode: string;
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest;
    static equals(a: InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest> | undefined, b: InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a inward job free issue material return
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest
 */
export declare class InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest extends Message<InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest> {
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
     * Stores the ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being dispatched in client's unit of material
     *
     * @generated from field: uint64 client_quantity = 15;
     */
    clientQuantity: bigint;
    /**
     * Stores the family code as defined by the client
     *
     * @generated from field: string client_family_code = 16;
     */
    clientFamilyCode: string;
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest;
    static equals(a: InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest> | undefined, b: InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a inward job free issue material return
 *
 * @generated from message Scailo.InwardJobFreeIssueMaterialReturnItem
 */
export declare class InwardJobFreeIssueMaterialReturnItem extends Message<InwardJobFreeIssueMaterialReturnItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this inward job free issue material return
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
     * Stores the inward job free issue material return ID
     *
     * @generated from field: uint64 inward_job_free_issue_material_return_id = 10;
     */
    inwardJobFreeIssueMaterialReturnId: bigint;
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
     * Stores the ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 14;
     */
    clientUomId: bigint;
    /**
     * Stores the quantity (in cents) being dispatched in client's unit of material
     *
     * @generated from field: uint64 client_quantity = 15;
     */
    clientQuantity: bigint;
    /**
     * Stores the family code as defined by the client
     *
     * @generated from field: string client_family_code = 16;
     */
    clientFamilyCode: string;
    constructor(data?: PartialMessage<InwardJobFreeIssueMaterialReturnItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobFreeIssueMaterialReturnItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobFreeIssueMaterialReturnItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialReturnItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialReturnItem;
    static equals(a: InwardJobFreeIssueMaterialReturnItem | PlainMessage<InwardJobFreeIssueMaterialReturnItem> | undefined, b: InwardJobFreeIssueMaterialReturnItem | PlainMessage<InwardJobFreeIssueMaterialReturnItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of inward job free issue material returns
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsReturnsList
 */
export declare class InwardJobsFreeIssueMaterialsReturnsList extends Message<InwardJobsFreeIssueMaterialsReturnsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.InwardJobFreeIssueMaterialReturn list = 1;
     */
    list: InwardJobFreeIssueMaterialReturn[];
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsReturnsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsReturnsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsReturnsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsList;
    static equals(a: InwardJobsFreeIssueMaterialsReturnsList | PlainMessage<InwardJobsFreeIssueMaterialsReturnsList> | undefined, b: InwardJobsFreeIssueMaterialsReturnsList | PlainMessage<InwardJobsFreeIssueMaterialsReturnsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of inward job free issue material return items
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsReturnsItemsList
 */
export declare class InwardJobsFreeIssueMaterialsReturnsItemsList extends Message<InwardJobsFreeIssueMaterialsReturnsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.InwardJobFreeIssueMaterialReturnItem list = 1;
     */
    list: InwardJobFreeIssueMaterialReturnItem[];
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsReturnsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsReturnsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsReturnsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsItemsList;
    static equals(a: InwardJobsFreeIssueMaterialsReturnsItemsList | PlainMessage<InwardJobsFreeIssueMaterialsReturnsItemsList> | undefined, b: InwardJobsFreeIssueMaterialsReturnsItemsList | PlainMessage<InwardJobsFreeIssueMaterialsReturnsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.InwardJobFreeIssueMaterialReturnItemHistoryRequest
 */
export declare class InwardJobFreeIssueMaterialReturnItemHistoryRequest extends Message<InwardJobFreeIssueMaterialReturnItemHistoryRequest> {
    /**
     * Stores the inward job free issue material return ID
     *
     * @generated from field: uint64 inward_job_free_issue_material_return_id = 10;
     */
    inwardJobFreeIssueMaterialReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<InwardJobFreeIssueMaterialReturnItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobFreeIssueMaterialReturnItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobFreeIssueMaterialReturnItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialReturnItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialReturnItemHistoryRequest;
    static equals(a: InwardJobFreeIssueMaterialReturnItemHistoryRequest | PlainMessage<InwardJobFreeIssueMaterialReturnItemHistoryRequest> | undefined, b: InwardJobFreeIssueMaterialReturnItemHistoryRequest | PlainMessage<InwardJobFreeIssueMaterialReturnItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective inward job free issue material return item
 *
 * @generated from message Scailo.InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest
 */
export declare class InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest extends Message<InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest> {
    /**
     * Stores the inward job free issue material return ID
     *
     * @generated from field: uint64 inward_job_free_issue_material_return_id = 10;
     */
    inwardJobFreeIssueMaterialReturnId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest;
    static equals(a: InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest | PlainMessage<InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest> | undefined, b: InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest | PlainMessage<InwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.InwardJobFreeIssueMaterialReturnItemsSearchRequest
 */
export declare class InwardJobFreeIssueMaterialReturnItemsSearchRequest extends Message<InwardJobFreeIssueMaterialReturnItemsSearchRequest> {
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
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS status = 7;
     */
    status: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_ITEM_STATUS;
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
     * The ID of the inward job free issue material return
     *
     * @generated from field: uint64 inward_job_free_issue_material_return_id = 20;
     */
    inwardJobFreeIssueMaterialReturnId: bigint;
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
     * The ID of the client's unit of material
     *
     * @generated from field: uint64 client_uom_id = 24;
     */
    clientUomId: bigint;
    /**
     * Stores the family code as given by the client
     *
     * @generated from field: string client_family_code = 26;
     */
    clientFamilyCode: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<InwardJobFreeIssueMaterialReturnItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobFreeIssueMaterialReturnItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobFreeIssueMaterialReturnItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialReturnItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialReturnItemsSearchRequest;
    static equals(a: InwardJobFreeIssueMaterialReturnItemsSearchRequest | PlainMessage<InwardJobFreeIssueMaterialReturnItemsSearchRequest> | undefined, b: InwardJobFreeIssueMaterialReturnItemsSearchRequest | PlainMessage<InwardJobFreeIssueMaterialReturnItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse
 */
export declare class InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse extends Message<InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.InwardJobFreeIssueMaterialReturnItem payload = 4;
     */
    payload: InwardJobFreeIssueMaterialReturnItem[];
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
    static equals(a: InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse> | undefined, b: InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest extends Message<InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     * The associated reference
     *
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 1;
     */
    refFrom: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM;
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
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsReturnsServicePaginationReq
 */
export declare class InwardJobsFreeIssueMaterialsReturnsServicePaginationReq extends Message<InwardJobsFreeIssueMaterialsReturnsServicePaginationReq> {
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
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY;
    /**
     * The status of this inward job free issue material return
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsReturnsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsReturnsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsReturnsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServicePaginationReq;
    static equals(a: InwardJobsFreeIssueMaterialsReturnsServicePaginationReq | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServicePaginationReq> | undefined, b: InwardJobsFreeIssueMaterialsReturnsServicePaginationReq | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse
 */
export declare class InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse extends Message<InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.InwardJobFreeIssueMaterialReturn payload = 4;
     */
    payload: InwardJobFreeIssueMaterialReturn[];
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse;
    static equals(a: InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse> | undefined, b: InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsReturnsServiceFilterReq
 */
export declare class InwardJobsFreeIssueMaterialsReturnsServiceFilterReq extends Message<InwardJobsFreeIssueMaterialsReturnsServiceFilterReq> {
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
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY;
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
     * The status of this inward job free issue material return
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
     * The reference ID of the inward job free issue material return
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
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 22;
     */
    refFrom: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM;
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
     * Inward Job related filters
     * The associated consignee client ID of the linked inward job
     *
     * @generated from field: uint64 consignee_client_id = 50;
     */
    consigneeClientId: bigint;
    /**
     * The associated buyer client ID of the linked inward job
     *
     * @generated from field: uint64 buyer_client_id = 51;
     */
    buyerClientId: bigint;
    /**
     * The ID of the associated project of the linked inward job
     *
     * @generated from field: uint64 project_id = 52;
     */
    projectId: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsReturnsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsReturnsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceFilterReq;
    static equals(a: InwardJobsFreeIssueMaterialsReturnsServiceFilterReq | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceFilterReq> | undefined, b: InwardJobsFreeIssueMaterialsReturnsServiceFilterReq | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsReturnsServiceCountReq
 */
export declare class InwardJobsFreeIssueMaterialsReturnsServiceCountReq extends Message<InwardJobsFreeIssueMaterialsReturnsServiceCountReq> {
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
     * The status of this inward job free issue material return
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
     * The reference ID of the inward job free issue material return
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
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 22;
     */
    refFrom: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM;
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
     * Inward Job related filters
     * The associated consignee client ID of the linked inward job
     *
     * @generated from field: uint64 consignee_client_id = 50;
     */
    consigneeClientId: bigint;
    /**
     * The associated buyer client ID of the linked inward job
     *
     * @generated from field: uint64 buyer_client_id = 51;
     */
    buyerClientId: bigint;
    /**
     * The ID of the associated project of the linked inward job
     *
     * @generated from field: uint64 project_id = 52;
     */
    projectId: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsReturnsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsReturnsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceCountReq;
    static equals(a: InwardJobsFreeIssueMaterialsReturnsServiceCountReq | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceCountReq> | undefined, b: InwardJobsFreeIssueMaterialsReturnsServiceCountReq | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq
 */
export declare class InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq extends Message<InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq> {
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
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY sort_key = 5;
     */
    sortKey: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_SORT_KEY;
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
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM ref_from = 22;
     */
    refFrom: INWARD_JOB_FREE_ISSUE_MATERIAL_RETURN_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq;
    static equals(a: InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq> | undefined, b: InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq | PlainMessage<InwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=inward_jobs_free_issue_materials_returns.scailo_pb.d.ts.map