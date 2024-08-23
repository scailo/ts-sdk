import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY
 */
export declare enum INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the family ID
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch ordered results by the internal quantity
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the client unit of material ID
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_CLIENT_UOM_ID = 12;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_CLIENT_UOM_ID = 12,
    /**
     * Fetch ordered results by the client quantity
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_CLIENT_QUANTITY = 13;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_CLIENT_QUANTITY = 13,
    /**
     * Fetch ordered results by the client family code
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY_CLIENT_FAMILY_CODE = 14
}
/**
 *
 * Describes the applicable statuses of inward job free issue material items
 *
 * @generated from enum Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS
 */
export declare enum INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the inward job free issue material items must have been approved
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS_APPROVED = 1;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the inward job free issue material items must be waiting for approval
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS_UNAPPROVED = 2;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY
 */
export declare enum INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_CREATED_AT = 1;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_MODIFIED_AT = 2;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_APPROVED_ON = 3;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_APPROVED_BY = 4;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_COMPLETED_ON = 6;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_REFERENCE_ID = 10;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsServiceCreateRequest
 */
export declare class InwardJobsFreeIssueMaterialsServiceCreateRequest extends Message<InwardJobsFreeIssueMaterialsServiceCreateRequest> {
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
     * The reference ID of the inward job free issue material
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceCreateRequest;
    static equals(a: InwardJobsFreeIssueMaterialsServiceCreateRequest | PlainMessage<InwardJobsFreeIssueMaterialsServiceCreateRequest> | undefined, b: InwardJobsFreeIssueMaterialsServiceCreateRequest | PlainMessage<InwardJobsFreeIssueMaterialsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsServiceUpdateRequest
 */
export declare class InwardJobsFreeIssueMaterialsServiceUpdateRequest extends Message<InwardJobsFreeIssueMaterialsServiceUpdateRequest> {
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
     * The reference ID of the inward job free issue material
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
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceUpdateRequest;
    static equals(a: InwardJobsFreeIssueMaterialsServiceUpdateRequest | PlainMessage<InwardJobsFreeIssueMaterialsServiceUpdateRequest> | undefined, b: InwardJobsFreeIssueMaterialsServiceUpdateRequest | PlainMessage<InwardJobsFreeIssueMaterialsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsServiceAutofillRequest
 */
export declare class InwardJobsFreeIssueMaterialsServiceAutofillRequest extends Message<InwardJobsFreeIssueMaterialsServiceAutofillRequest> {
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
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceAutofillRequest;
    static equals(a: InwardJobsFreeIssueMaterialsServiceAutofillRequest | PlainMessage<InwardJobsFreeIssueMaterialsServiceAutofillRequest> | undefined, b: InwardJobsFreeIssueMaterialsServiceAutofillRequest | PlainMessage<InwardJobsFreeIssueMaterialsServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.InwardJobFreeIssueMaterial
 */
export declare class InwardJobFreeIssueMaterial extends Message<InwardJobFreeIssueMaterial> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this inward job free issue material
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
     * The status of this inward job free issue material
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this inward job free issue material
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this inward job free issue material was marked as completed
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
     * The reference ID of the inward job free issue material
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
     * @generated from field: string ref_from = 12;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The list of associated inward job free issue material items
     *
     * @generated from field: repeated Scailo.InwardJobFreeIssueMaterialItem list = 20;
     */
    list: InwardJobFreeIssueMaterialItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<InwardJobFreeIssueMaterial>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobFreeIssueMaterial";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobFreeIssueMaterial;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterial;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterial;
    static equals(a: InwardJobFreeIssueMaterial | PlainMessage<InwardJobFreeIssueMaterial> | undefined, b: InwardJobFreeIssueMaterial | PlainMessage<InwardJobFreeIssueMaterial> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a inward job free issue material
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsServiceItemCreateRequest
 */
export declare class InwardJobsFreeIssueMaterialsServiceItemCreateRequest extends Message<InwardJobsFreeIssueMaterialsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the inward job free issue material ID
     *
     * @generated from field: uint64 inward_job_free_issue_material_id = 10;
     */
    inwardJobFreeIssueMaterialId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being received in internal unit of material
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
     * Stores the quantity (in cents) being received in client's unit of material
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
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceItemCreateRequest;
    static equals(a: InwardJobsFreeIssueMaterialsServiceItemCreateRequest | PlainMessage<InwardJobsFreeIssueMaterialsServiceItemCreateRequest> | undefined, b: InwardJobsFreeIssueMaterialsServiceItemCreateRequest | PlainMessage<InwardJobsFreeIssueMaterialsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a inward job free issue material
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsServiceItemUpdateRequest
 */
export declare class InwardJobsFreeIssueMaterialsServiceItemUpdateRequest extends Message<InwardJobsFreeIssueMaterialsServiceItemUpdateRequest> {
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
     * The quantity (in cents) being received in internal unit of material
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
     * Stores the quantity (in cents) being received in client's unit of material
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
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceItemUpdateRequest;
    static equals(a: InwardJobsFreeIssueMaterialsServiceItemUpdateRequest | PlainMessage<InwardJobsFreeIssueMaterialsServiceItemUpdateRequest> | undefined, b: InwardJobsFreeIssueMaterialsServiceItemUpdateRequest | PlainMessage<InwardJobsFreeIssueMaterialsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a inward job free issue material
 *
 * @generated from message Scailo.InwardJobFreeIssueMaterialItem
 */
export declare class InwardJobFreeIssueMaterialItem extends Message<InwardJobFreeIssueMaterialItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this inward job free issue material
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
     * Stores the inward job free issue material ID
     *
     * @generated from field: uint64 inward_job_free_issue_material_id = 10;
     */
    inwardJobFreeIssueMaterialId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being received in internal unit of material
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
     * Stores the quantity (in cents) being received in client's unit of material
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
    constructor(data?: PartialMessage<InwardJobFreeIssueMaterialItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobFreeIssueMaterialItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobFreeIssueMaterialItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialItem;
    static equals(a: InwardJobFreeIssueMaterialItem | PlainMessage<InwardJobFreeIssueMaterialItem> | undefined, b: InwardJobFreeIssueMaterialItem | PlainMessage<InwardJobFreeIssueMaterialItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of inward jobs free issue materials
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsList
 */
export declare class InwardJobsFreeIssueMaterialsList extends Message<InwardJobsFreeIssueMaterialsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.InwardJobFreeIssueMaterial list = 1;
     */
    list: InwardJobFreeIssueMaterial[];
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsList;
    static equals(a: InwardJobsFreeIssueMaterialsList | PlainMessage<InwardJobsFreeIssueMaterialsList> | undefined, b: InwardJobsFreeIssueMaterialsList | PlainMessage<InwardJobsFreeIssueMaterialsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of inward job free issue material items
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsItemsList
 */
export declare class InwardJobsFreeIssueMaterialsItemsList extends Message<InwardJobsFreeIssueMaterialsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.InwardJobFreeIssueMaterialItem list = 1;
     */
    list: InwardJobFreeIssueMaterialItem[];
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsItemsList;
    static equals(a: InwardJobsFreeIssueMaterialsItemsList | PlainMessage<InwardJobsFreeIssueMaterialsItemsList> | undefined, b: InwardJobsFreeIssueMaterialsItemsList | PlainMessage<InwardJobsFreeIssueMaterialsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.InwardJobFreeIssueMaterialItemHistoryRequest
 */
export declare class InwardJobFreeIssueMaterialItemHistoryRequest extends Message<InwardJobFreeIssueMaterialItemHistoryRequest> {
    /**
     * Stores the inward job free issue material ID
     *
     * @generated from field: uint64 inward_job_free_issue_material_id = 10;
     */
    inwardJobFreeIssueMaterialId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<InwardJobFreeIssueMaterialItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobFreeIssueMaterialItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobFreeIssueMaterialItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialItemHistoryRequest;
    static equals(a: InwardJobFreeIssueMaterialItemHistoryRequest | PlainMessage<InwardJobFreeIssueMaterialItemHistoryRequest> | undefined, b: InwardJobFreeIssueMaterialItemHistoryRequest | PlainMessage<InwardJobFreeIssueMaterialItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective inward job free issue material item
 *
 * @generated from message Scailo.InwardJobFreeIssueMaterialItemProspectiveInfoRequest
 */
export declare class InwardJobFreeIssueMaterialItemProspectiveInfoRequest extends Message<InwardJobFreeIssueMaterialItemProspectiveInfoRequest> {
    /**
     * Stores the inward job free issue material ID
     *
     * @generated from field: uint64 inward_job_free_issue_material_id = 10;
     */
    inwardJobFreeIssueMaterialId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<InwardJobFreeIssueMaterialItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobFreeIssueMaterialItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobFreeIssueMaterialItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialItemProspectiveInfoRequest;
    static equals(a: InwardJobFreeIssueMaterialItemProspectiveInfoRequest | PlainMessage<InwardJobFreeIssueMaterialItemProspectiveInfoRequest> | undefined, b: InwardJobFreeIssueMaterialItemProspectiveInfoRequest | PlainMessage<InwardJobFreeIssueMaterialItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.InwardJobFreeIssueMaterialItemsSearchRequest
 */
export declare class InwardJobFreeIssueMaterialItemsSearchRequest extends Message<InwardJobFreeIssueMaterialItemsSearchRequest> {
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
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS status = 7;
     */
    status: INWARD_JOB_FREE_ISSUE_MATERIAL_ITEM_STATUS;
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
     * The ID of the inward job free issue material
     *
     * @generated from field: uint64 inward_job_free_issue_material_id = 20;
     */
    inwardJobFreeIssueMaterialId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 22;
     */
    familyId: bigint;
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
    constructor(data?: PartialMessage<InwardJobFreeIssueMaterialItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobFreeIssueMaterialItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobFreeIssueMaterialItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobFreeIssueMaterialItemsSearchRequest;
    static equals(a: InwardJobFreeIssueMaterialItemsSearchRequest | PlainMessage<InwardJobFreeIssueMaterialItemsSearchRequest> | undefined, b: InwardJobFreeIssueMaterialItemsSearchRequest | PlainMessage<InwardJobFreeIssueMaterialItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse
 */
export declare class InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse extends Message<InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.InwardJobFreeIssueMaterialItem payload = 4;
     */
    payload: InwardJobFreeIssueMaterialItem[];
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse;
    static equals(a: InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse | PlainMessage<InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse> | undefined, b: InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse | PlainMessage<InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest extends Message<InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     * The associated reference
     *
     * @generated from field: string ref_from = 1;
     */
    refFrom: string;
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
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsServicePaginationReq
 */
export declare class InwardJobsFreeIssueMaterialsServicePaginationReq extends Message<InwardJobsFreeIssueMaterialsServicePaginationReq> {
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
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY sort_key = 5;
     */
    sortKey: INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY;
    /**
     * The status of this inward job free issue material
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServicePaginationReq;
    static equals(a: InwardJobsFreeIssueMaterialsServicePaginationReq | PlainMessage<InwardJobsFreeIssueMaterialsServicePaginationReq> | undefined, b: InwardJobsFreeIssueMaterialsServicePaginationReq | PlainMessage<InwardJobsFreeIssueMaterialsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsServicePaginationResponse
 */
export declare class InwardJobsFreeIssueMaterialsServicePaginationResponse extends Message<InwardJobsFreeIssueMaterialsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.InwardJobFreeIssueMaterial payload = 4;
     */
    payload: InwardJobFreeIssueMaterial[];
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServicePaginationResponse;
    static equals(a: InwardJobsFreeIssueMaterialsServicePaginationResponse | PlainMessage<InwardJobsFreeIssueMaterialsServicePaginationResponse> | undefined, b: InwardJobsFreeIssueMaterialsServicePaginationResponse | PlainMessage<InwardJobsFreeIssueMaterialsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsServiceFilterReq
 */
export declare class InwardJobsFreeIssueMaterialsServiceFilterReq extends Message<InwardJobsFreeIssueMaterialsServiceFilterReq> {
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
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY sort_key = 5;
     */
    sortKey: INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY;
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
     * The status of this inward job free issue material
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
     * The reference ID of the inward job free issue material
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
     * @generated from field: string ref_from = 22;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
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
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceFilterReq;
    static equals(a: InwardJobsFreeIssueMaterialsServiceFilterReq | PlainMessage<InwardJobsFreeIssueMaterialsServiceFilterReq> | undefined, b: InwardJobsFreeIssueMaterialsServiceFilterReq | PlainMessage<InwardJobsFreeIssueMaterialsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsServiceCountReq
 */
export declare class InwardJobsFreeIssueMaterialsServiceCountReq extends Message<InwardJobsFreeIssueMaterialsServiceCountReq> {
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
     * The status of this inward job free issue material
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
     * The reference ID of the inward job free issue material
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
     * @generated from field: string ref_from = 22;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
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
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceCountReq;
    static equals(a: InwardJobsFreeIssueMaterialsServiceCountReq | PlainMessage<InwardJobsFreeIssueMaterialsServiceCountReq> | undefined, b: InwardJobsFreeIssueMaterialsServiceCountReq | PlainMessage<InwardJobsFreeIssueMaterialsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.InwardJobsFreeIssueMaterialsServiceSearchAllReq
 */
export declare class InwardJobsFreeIssueMaterialsServiceSearchAllReq extends Message<InwardJobsFreeIssueMaterialsServiceSearchAllReq> {
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
     * @generated from field: Scailo.INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY sort_key = 5;
     */
    sortKey: INWARD_JOB_FREE_ISSUE_MATERIAL_SORT_KEY;
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
     * @generated from field: string ref_from = 22;
     */
    refFrom: string;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    constructor(data?: PartialMessage<InwardJobsFreeIssueMaterialsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.InwardJobsFreeIssueMaterialsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InwardJobsFreeIssueMaterialsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InwardJobsFreeIssueMaterialsServiceSearchAllReq;
    static equals(a: InwardJobsFreeIssueMaterialsServiceSearchAllReq | PlainMessage<InwardJobsFreeIssueMaterialsServiceSearchAllReq> | undefined, b: InwardJobsFreeIssueMaterialsServiceSearchAllReq | PlainMessage<InwardJobsFreeIssueMaterialsServiceSearchAllReq> | undefined): boolean;
}
//# sourceMappingURL=inward_jobs_free_issue_materials.scailo_pb.d.ts.map