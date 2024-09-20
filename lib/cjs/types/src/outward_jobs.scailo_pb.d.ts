import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.OUTWARD_JOB_SORT_KEY
 */
export declare enum OUTWARD_JOB_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: OUTWARD_JOB_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    OUTWARD_JOB_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: OUTWARD_JOB_SORT_KEY_CREATED_AT = 1;
     */
    OUTWARD_JOB_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: OUTWARD_JOB_SORT_KEY_MODIFIED_AT = 2;
     */
    OUTWARD_JOB_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: OUTWARD_JOB_SORT_KEY_APPROVED_ON = 3;
     */
    OUTWARD_JOB_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: OUTWARD_JOB_SORT_KEY_APPROVED_BY = 4;
     */
    OUTWARD_JOB_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: OUTWARD_JOB_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    OUTWARD_JOB_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: OUTWARD_JOB_SORT_KEY_COMPLETED_ON = 6;
     */
    OUTWARD_JOB_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: OUTWARD_JOB_SORT_KEY_REFERENCE_ID = 10;
     */
    OUTWARD_JOB_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: OUTWARD_JOB_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    OUTWARD_JOB_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the location ID
     *
     * @generated from enum value: OUTWARD_JOB_SORT_KEY_CONSIGNEE_LOCATION_ID = 12;
     */
    OUTWARD_JOB_SORT_KEY_CONSIGNEE_LOCATION_ID = 12,
    /**
     * Fetch ordered results by the vendor ID
     *
     * @generated from enum value: OUTWARD_JOB_SORT_KEY_VENDOR_ID = 13;
     */
    OUTWARD_JOB_SORT_KEY_VENDOR_ID = 13,
    /**
     * Fetch ordered results by the project ID
     *
     * @generated from enum value: OUTWARD_JOB_SORT_KEY_PROJECT_ID = 14;
     */
    OUTWARD_JOB_SORT_KEY_PROJECT_ID = 14
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.OUTWARD_JOB_INWARD_ITEM_SORT_KEY
 */
export declare enum OUTWARD_JOB_INWARD_ITEM_SORT_KEY {
    /**
     * Fetch results by id
     *
     * @generated from enum value: OUTWARD_JOB_INWARD_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    OUTWARD_JOB_INWARD_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch results by the creation timestamp
     *
     * @generated from enum value: OUTWARD_JOB_INWARD_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    OUTWARD_JOB_INWARD_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch results by the modified timestamp
     *
     * @generated from enum value: OUTWARD_JOB_INWARD_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    OUTWARD_JOB_INWARD_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch results by the approved on timestamp
     *
     * @generated from enum value: OUTWARD_JOB_INWARD_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    OUTWARD_JOB_INWARD_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch results by the approved by field
     *
     * @generated from enum value: OUTWARD_JOB_INWARD_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    OUTWARD_JOB_INWARD_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch results by the approver's role ID
     *
     * @generated from enum value: OUTWARD_JOB_INWARD_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    OUTWARD_JOB_INWARD_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch results by the family ID
     *
     * @generated from enum value: OUTWARD_JOB_INWARD_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    OUTWARD_JOB_INWARD_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch results by the internal quantity
     *
     * @generated from enum value: OUTWARD_JOB_INWARD_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    OUTWARD_JOB_INWARD_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11,
    /**
     * Fetch ordered results by the delivery date
     *
     * @generated from enum value: OUTWARD_JOB_INWARD_ITEM_SORT_KEY_DELIVERY_DATE = 12;
     */
    OUTWARD_JOB_INWARD_ITEM_SORT_KEY_DELIVERY_DATE = 12
}
/**
 *
 * Describes the applicable statuses of outward job inward items
 *
 * @generated from enum Scailo.OUTWARD_JOB_INWARD_ITEM_STATUS
 */
export declare enum OUTWARD_JOB_INWARD_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: OUTWARD_JOB_INWARD_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    OUTWARD_JOB_INWARD_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the outward job inward items must have been approved
     *
     * @generated from enum value: OUTWARD_JOB_INWARD_ITEM_STATUS_APPROVED = 1;
     */
    OUTWARD_JOB_INWARD_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the outward job inward items must be waiting for approval
     *
     * @generated from enum value: OUTWARD_JOB_INWARD_ITEM_STATUS_UNAPPROVED = 2;
     */
    OUTWARD_JOB_INWARD_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY
 */
export declare enum OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY {
    /**
     * Fetch results by id
     *
     * @generated from enum value: OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch results by the creation timestamp
     *
     * @generated from enum value: OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch results by the modified timestamp
     *
     * @generated from enum value: OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch results by the approved on timestamp
     *
     * @generated from enum value: OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch results by the approved by field
     *
     * @generated from enum value: OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch results by the approver's role ID
     *
     * @generated from enum value: OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch results by the family ID
     *
     * @generated from enum value: OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch results by the internal quantity
     *
     * @generated from enum value: OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11
}
/**
 *
 * Describes the applicable statuses of outward job outward items
 *
 * @generated from enum Scailo.OUTWARD_JOB_OUTWARD_ITEM_STATUS
 */
export declare enum OUTWARD_JOB_OUTWARD_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: OUTWARD_JOB_OUTWARD_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    OUTWARD_JOB_OUTWARD_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the outward job outward items must have been approved
     *
     * @generated from enum value: OUTWARD_JOB_OUTWARD_ITEM_STATUS_APPROVED = 1;
     */
    OUTWARD_JOB_OUTWARD_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the outward job outward items must be waiting for approval
     *
     * @generated from enum value: OUTWARD_JOB_OUTWARD_ITEM_STATUS_UNAPPROVED = 2;
     */
    OUTWARD_JOB_OUTWARD_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.OutwardJobsServiceCreateRequest
 */
export declare class OutwardJobsServiceCreateRequest extends Message<OutwardJobsServiceCreateRequest> {
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
     * The reference ID of the outward job
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The ID of the location
     *
     * @generated from field: uint64 consignee_location_id = 12;
     */
    consigneeLocationId: bigint;
    /**
     * The ID of the vendor
     *
     * @generated from field: uint64 vendor_id = 13;
     */
    vendorId: bigint;
    /**
     * The optional associated ID of the project
     *
     * @generated from field: uint64 project_id = 16;
     */
    projectId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<OutwardJobsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServiceCreateRequest;
    static equals(a: OutwardJobsServiceCreateRequest | PlainMessage<OutwardJobsServiceCreateRequest> | undefined, b: OutwardJobsServiceCreateRequest | PlainMessage<OutwardJobsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.OutwardJobsServiceUpdateRequest
 */
export declare class OutwardJobsServiceUpdateRequest extends Message<OutwardJobsServiceUpdateRequest> {
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
     * The reference ID of the outward job
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The optional associated ID of the project
     *
     * @generated from field: uint64 project_id = 16;
     */
    projectId: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<OutwardJobsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServiceUpdateRequest;
    static equals(a: OutwardJobsServiceUpdateRequest | PlainMessage<OutwardJobsServiceUpdateRequest> | undefined, b: OutwardJobsServiceUpdateRequest | PlainMessage<OutwardJobsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.OutwardJobsServiceAutofillRequest
 */
export declare class OutwardJobsServiceAutofillRequest extends Message<OutwardJobsServiceAutofillRequest> {
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
    constructor(data?: PartialMessage<OutwardJobsServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServiceAutofillRequest;
    static equals(a: OutwardJobsServiceAutofillRequest | PlainMessage<OutwardJobsServiceAutofillRequest> | undefined, b: OutwardJobsServiceAutofillRequest | PlainMessage<OutwardJobsServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.OutwardJobAncillaryParameters
 */
export declare class OutwardJobAncillaryParameters extends Message<OutwardJobAncillaryParameters> {
    /**
     * The UUID of the consignee location (the UUID of the associated consignee_location_id)
     *
     * @generated from field: string consignee_location_uuid = 212;
     */
    consigneeLocationUuid: string;
    /**
     * The UUID of the vendor (the UUID of the associated vendor_id)
     *
     * @generated from field: string vendor_uuid = 213;
     */
    vendorUuid: string;
    constructor(data?: PartialMessage<OutwardJobAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobAncillaryParameters;
    static equals(a: OutwardJobAncillaryParameters | PlainMessage<OutwardJobAncillaryParameters> | undefined, b: OutwardJobAncillaryParameters | PlainMessage<OutwardJobAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.OutwardJob
 */
export declare class OutwardJob extends Message<OutwardJob> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this outward job
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
     * The status of this outward job
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this outward job
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this outward job was marked as completed
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
     * The reference ID of the outward job
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
     * The ID of the location
     *
     * @generated from field: uint64 consignee_location_id = 12;
     */
    consigneeLocationId: bigint;
    /**
     * The ID of the vendor
     *
     * @generated from field: uint64 vendor_id = 13;
     */
    vendorId: bigint;
    /**
     * The optional associated ID of the project
     *
     * @generated from field: uint64 project_id = 16;
     */
    projectId: bigint;
    /**
     * The list of associated outward job inward items
     *
     * @generated from field: repeated Scailo.OutwardJobInwardItem inward_items_list = 20;
     */
    inwardItemsList: OutwardJobInwardItem[];
    /**
     * The list of associated outward job outward items
     *
     * @generated from field: repeated Scailo.OutwardJobOutwardItem outward_items_list = 21;
     */
    outwardItemsList: OutwardJobOutwardItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<OutwardJob>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJob";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJob;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJob;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJob;
    static equals(a: OutwardJob | PlainMessage<OutwardJob> | undefined, b: OutwardJob | PlainMessage<OutwardJob> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an inward item to a outward job
 *
 * @generated from message Scailo.OutwardJobsServiceInwardItemCreateRequest
 */
export declare class OutwardJobsServiceInwardItemCreateRequest extends Message<OutwardJobsServiceInwardItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the outward job ID
     *
     * @generated from field: uint64 outward_job_id = 10;
     */
    outwardJobId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity of the item
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 13;
     */
    deliveryDate: string;
    /**
     * Any extra specifications with regards to the item
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<OutwardJobsServiceInwardItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServiceInwardItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServiceInwardItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServiceInwardItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServiceInwardItemCreateRequest;
    static equals(a: OutwardJobsServiceInwardItemCreateRequest | PlainMessage<OutwardJobsServiceInwardItemCreateRequest> | undefined, b: OutwardJobsServiceInwardItemCreateRequest | PlainMessage<OutwardJobsServiceInwardItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an individual item as part of multiple item addition to a outward job
 *
 * @generated from message Scailo.OutwardJobsServiceMultipleInwardItemsSingleton
 */
export declare class OutwardJobsServiceMultipleInwardItemsSingleton extends Message<OutwardJobsServiceMultipleInwardItemsSingleton> {
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity of the item
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 13;
     */
    deliveryDate: string;
    /**
     * Any extra specifications with regards to the item
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<OutwardJobsServiceMultipleInwardItemsSingleton>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServiceMultipleInwardItemsSingleton";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServiceMultipleInwardItemsSingleton;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServiceMultipleInwardItemsSingleton;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServiceMultipleInwardItemsSingleton;
    static equals(a: OutwardJobsServiceMultipleInwardItemsSingleton | PlainMessage<OutwardJobsServiceMultipleInwardItemsSingleton> | undefined, b: OutwardJobsServiceMultipleInwardItemsSingleton | PlainMessage<OutwardJobsServiceMultipleInwardItemsSingleton> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add multiple items to a outward job
 *
 * @generated from message Scailo.OutwardJobsServiceMultipleInwardItemsCreateRequest
 */
export declare class OutwardJobsServiceMultipleInwardItemsCreateRequest extends Message<OutwardJobsServiceMultipleInwardItemsCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the outward job ID
     *
     * @generated from field: uint64 outward_job_id = 10;
     */
    outwardJobId: bigint;
    /**
     * List of items
     *
     * @generated from field: repeated Scailo.OutwardJobsServiceMultipleInwardItemsSingleton list = 11;
     */
    list: OutwardJobsServiceMultipleInwardItemsSingleton[];
    constructor(data?: PartialMessage<OutwardJobsServiceMultipleInwardItemsCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServiceMultipleInwardItemsCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServiceMultipleInwardItemsCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServiceMultipleInwardItemsCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServiceMultipleInwardItemsCreateRequest;
    static equals(a: OutwardJobsServiceMultipleInwardItemsCreateRequest | PlainMessage<OutwardJobsServiceMultipleInwardItemsCreateRequest> | undefined, b: OutwardJobsServiceMultipleInwardItemsCreateRequest | PlainMessage<OutwardJobsServiceMultipleInwardItemsCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an inward item in a outward job
 *
 * @generated from message Scailo.OutwardJobsServiceInwardItemUpdateRequest
 */
export declare class OutwardJobsServiceInwardItemUpdateRequest extends Message<OutwardJobsServiceInwardItemUpdateRequest> {
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
     * The quantity of the item
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 13;
     */
    deliveryDate: string;
    /**
     * Any extra specifications with regards to the item
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<OutwardJobsServiceInwardItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServiceInwardItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServiceInwardItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServiceInwardItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServiceInwardItemUpdateRequest;
    static equals(a: OutwardJobsServiceInwardItemUpdateRequest | PlainMessage<OutwardJobsServiceInwardItemUpdateRequest> | undefined, b: OutwardJobsServiceInwardItemUpdateRequest | PlainMessage<OutwardJobsServiceInwardItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an inward item associated to a outward job
 *
 * @generated from message Scailo.OutwardJobInwardItem
 */
export declare class OutwardJobInwardItem extends Message<OutwardJobInwardItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this outward job
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
     * Stores the outward job ID
     *
     * @generated from field: uint64 outward_job_id = 10;
     */
    outwardJobId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity of the item
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The delivery date of the item
     *
     * @generated from field: string delivery_date = 13;
     */
    deliveryDate: string;
    /**
     * Any extra specifications with regards to the item
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<OutwardJobInwardItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobInwardItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobInwardItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobInwardItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobInwardItem;
    static equals(a: OutwardJobInwardItem | PlainMessage<OutwardJobInwardItem> | undefined, b: OutwardJobInwardItem | PlainMessage<OutwardJobInwardItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of outward jobs
 *
 * @generated from message Scailo.OutwardJobsList
 */
export declare class OutwardJobsList extends Message<OutwardJobsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.OutwardJob list = 1;
     */
    list: OutwardJob[];
    constructor(data?: PartialMessage<OutwardJobsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsList;
    static equals(a: OutwardJobsList | PlainMessage<OutwardJobsList> | undefined, b: OutwardJobsList | PlainMessage<OutwardJobsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of outward job inward items
 *
 * @generated from message Scailo.OutwardJobsInwardItemsList
 */
export declare class OutwardJobsInwardItemsList extends Message<OutwardJobsInwardItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.OutwardJobInwardItem list = 1;
     */
    list: OutwardJobInwardItem[];
    constructor(data?: PartialMessage<OutwardJobsInwardItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsInwardItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsInwardItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsInwardItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsInwardItemsList;
    static equals(a: OutwardJobsInwardItemsList | PlainMessage<OutwardJobsInwardItemsList> | undefined, b: OutwardJobsInwardItemsList | PlainMessage<OutwardJobsInwardItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.OutwardJobInwardItemHistoryRequest
 */
export declare class OutwardJobInwardItemHistoryRequest extends Message<OutwardJobInwardItemHistoryRequest> {
    /**
     * Stores the outward job ID
     *
     * @generated from field: uint64 outward_job_id = 10;
     */
    outwardJobId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<OutwardJobInwardItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobInwardItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobInwardItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobInwardItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobInwardItemHistoryRequest;
    static equals(a: OutwardJobInwardItemHistoryRequest | PlainMessage<OutwardJobInwardItemHistoryRequest> | undefined, b: OutwardJobInwardItemHistoryRequest | PlainMessage<OutwardJobInwardItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective outward job inward item
 *
 * @generated from message Scailo.OutwardJobInwardItemProspectiveInfoRequest
 */
export declare class OutwardJobInwardItemProspectiveInfoRequest extends Message<OutwardJobInwardItemProspectiveInfoRequest> {
    /**
     * Stores the outward job ID
     *
     * @generated from field: uint64 outward_job_id = 10;
     */
    outwardJobId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<OutwardJobInwardItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobInwardItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobInwardItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobInwardItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobInwardItemProspectiveInfoRequest;
    static equals(a: OutwardJobInwardItemProspectiveInfoRequest | PlainMessage<OutwardJobInwardItemProspectiveInfoRequest> | undefined, b: OutwardJobInwardItemProspectiveInfoRequest | PlainMessage<OutwardJobInwardItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.OutwardJobsServicePaginationReq
 */
export declare class OutwardJobsServicePaginationReq extends Message<OutwardJobsServicePaginationReq> {
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
     * @generated from field: Scailo.OUTWARD_JOB_SORT_KEY sort_key = 5;
     */
    sortKey: OUTWARD_JOB_SORT_KEY;
    /**
     * The status of this outward job
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<OutwardJobsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServicePaginationReq;
    static equals(a: OutwardJobsServicePaginationReq | PlainMessage<OutwardJobsServicePaginationReq> | undefined, b: OutwardJobsServicePaginationReq | PlainMessage<OutwardJobsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.OutwardJobsServicePaginationResponse
 */
export declare class OutwardJobsServicePaginationResponse extends Message<OutwardJobsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.OutwardJob payload = 4;
     */
    payload: OutwardJob[];
    constructor(data?: PartialMessage<OutwardJobsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServicePaginationResponse;
    static equals(a: OutwardJobsServicePaginationResponse | PlainMessage<OutwardJobsServicePaginationResponse> | undefined, b: OutwardJobsServicePaginationResponse | PlainMessage<OutwardJobsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.OutwardJobsServiceFilterReq
 */
export declare class OutwardJobsServiceFilterReq extends Message<OutwardJobsServiceFilterReq> {
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
     * @generated from field: Scailo.OUTWARD_JOB_SORT_KEY sort_key = 5;
     */
    sortKey: OUTWARD_JOB_SORT_KEY;
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
     * The status of this outward job
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
     * The exact delivery date of any item in the outward job
     *
     * @generated from field: string delivery_date_exact = 17;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of any item in the outward job
     *
     * @generated from field: string delivery_date_start = 18;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of any item in the outward job
     *
     * @generated from field: string delivery_date_end = 19;
     */
    deliveryDateEnd: string;
    /**
     * The reference ID of the outward job
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
     * The ID of the location
     *
     * @generated from field: uint64 consignee_location_id = 22;
     */
    consigneeLocationId: bigint;
    /**
     * The ID of the vendor
     *
     * @generated from field: uint64 vendor_id = 23;
     */
    vendorId: bigint;
    /**
     * The optional associated ID of the project
     *
     * @generated from field: uint64 project_id = 26;
     */
    projectId: bigint;
    /**
     * The ID of the inward family
     *
     * @generated from field: uint64 inward_family_id = 30;
     */
    inwardFamilyId: bigint;
    constructor(data?: PartialMessage<OutwardJobsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServiceFilterReq;
    static equals(a: OutwardJobsServiceFilterReq | PlainMessage<OutwardJobsServiceFilterReq> | undefined, b: OutwardJobsServiceFilterReq | PlainMessage<OutwardJobsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.OutwardJobsServiceCountReq
 */
export declare class OutwardJobsServiceCountReq extends Message<OutwardJobsServiceCountReq> {
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
     * The status of this outward job
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
     * The exact delivery date of any item in the outward job
     *
     * @generated from field: string delivery_date_exact = 17;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of any item in the outward job
     *
     * @generated from field: string delivery_date_start = 18;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of any item in the outward job
     *
     * @generated from field: string delivery_date_end = 19;
     */
    deliveryDateEnd: string;
    /**
     * The reference ID of the outward job
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
     * The ID of the location
     *
     * @generated from field: uint64 consignee_location_id = 22;
     */
    consigneeLocationId: bigint;
    /**
     * The ID of the vendor
     *
     * @generated from field: uint64 vendor_id = 23;
     */
    vendorId: bigint;
    /**
     * The optional associated ID of the project
     *
     * @generated from field: uint64 project_id = 26;
     */
    projectId: bigint;
    /**
     * The ID of the inward family
     *
     * @generated from field: uint64 inward_family_id = 30;
     */
    inwardFamilyId: bigint;
    constructor(data?: PartialMessage<OutwardJobsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServiceCountReq;
    static equals(a: OutwardJobsServiceCountReq | PlainMessage<OutwardJobsServiceCountReq> | undefined, b: OutwardJobsServiceCountReq | PlainMessage<OutwardJobsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.OutwardJobsServiceSearchAllReq
 */
export declare class OutwardJobsServiceSearchAllReq extends Message<OutwardJobsServiceSearchAllReq> {
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
     * @generated from field: Scailo.OUTWARD_JOB_SORT_KEY sort_key = 5;
     */
    sortKey: OUTWARD_JOB_SORT_KEY;
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
     * The ID of the location
     *
     * @generated from field: uint64 consignee_location_id = 20;
     */
    consigneeLocationId: bigint;
    /**
     * The ID of the vendor
     *
     * @generated from field: uint64 vendor_id = 21;
     */
    vendorId: bigint;
    /**
     * The optional associated ID of the project
     *
     * @generated from field: uint64 project_id = 26;
     */
    projectId: bigint;
    constructor(data?: PartialMessage<OutwardJobsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServiceSearchAllReq;
    static equals(a: OutwardJobsServiceSearchAllReq | PlainMessage<OutwardJobsServiceSearchAllReq> | undefined, b: OutwardJobsServiceSearchAllReq | PlainMessage<OutwardJobsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.OutwardJobInwardItemsSearchRequest
 */
export declare class OutwardJobInwardItemsSearchRequest extends Message<OutwardJobInwardItemsSearchRequest> {
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
     * @generated from field: Scailo.OUTWARD_JOB_INWARD_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: OUTWARD_JOB_INWARD_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.OUTWARD_JOB_INWARD_ITEM_STATUS status = 7;
     */
    status: OUTWARD_JOB_INWARD_ITEM_STATUS;
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
     * The ID of the outward job
     *
     * @generated from field: uint64 outward_job_id = 20;
     */
    outwardJobId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 21;
     */
    familyId: bigint;
    /**
     * The exact delivery date of the item in the purchase order
     *
     * @generated from field: string delivery_date_exact = 28;
     */
    deliveryDateExact: string;
    /**
     * The start delivery date of the item in the purchase order
     *
     * @generated from field: string delivery_date_start = 29;
     */
    deliveryDateStart: string;
    /**
     * The end delivery date of the item in the purchase order
     *
     * @generated from field: string delivery_date_end = 30;
     */
    deliveryDateEnd: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<OutwardJobInwardItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobInwardItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobInwardItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobInwardItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobInwardItemsSearchRequest;
    static equals(a: OutwardJobInwardItemsSearchRequest | PlainMessage<OutwardJobInwardItemsSearchRequest> | undefined, b: OutwardJobInwardItemsSearchRequest | PlainMessage<OutwardJobInwardItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination inward items request
 *
 * @generated from message Scailo.OutwardJobsServicePaginatedInwardItemsResponse
 */
export declare class OutwardJobsServicePaginatedInwardItemsResponse extends Message<OutwardJobsServicePaginatedInwardItemsResponse> {
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
     * @generated from field: repeated Scailo.OutwardJobInwardItem payload = 4;
     */
    payload: OutwardJobInwardItem[];
    constructor(data?: PartialMessage<OutwardJobsServicePaginatedInwardItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServicePaginatedInwardItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServicePaginatedInwardItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServicePaginatedInwardItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServicePaginatedInwardItemsResponse;
    static equals(a: OutwardJobsServicePaginatedInwardItemsResponse | PlainMessage<OutwardJobsServicePaginatedInwardItemsResponse> | undefined, b: OutwardJobsServicePaginatedInwardItemsResponse | PlainMessage<OutwardJobsServicePaginatedInwardItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an outward item to a outward job
 *
 * @generated from message Scailo.OutwardJobsServiceOutwardItemCreateRequest
 */
export declare class OutwardJobsServiceOutwardItemCreateRequest extends Message<OutwardJobsServiceOutwardItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the outward job ID
     *
     * @generated from field: uint64 outward_job_id = 10;
     */
    outwardJobId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the optional item hash to be dispatched
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity of the item
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Any extra specifications with regards to the item
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<OutwardJobsServiceOutwardItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServiceOutwardItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServiceOutwardItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServiceOutwardItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServiceOutwardItemCreateRequest;
    static equals(a: OutwardJobsServiceOutwardItemCreateRequest | PlainMessage<OutwardJobsServiceOutwardItemCreateRequest> | undefined, b: OutwardJobsServiceOutwardItemCreateRequest | PlainMessage<OutwardJobsServiceOutwardItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an individual item as part of multiple item addition to a outward job
 *
 * @generated from message Scailo.OutwardJobsServiceMultipleOutwardItemsSingleton
 */
export declare class OutwardJobsServiceMultipleOutwardItemsSingleton extends Message<OutwardJobsServiceMultipleOutwardItemsSingleton> {
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the optional item hash to be dispatched
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity of the item
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Any extra specifications with regards to the item
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<OutwardJobsServiceMultipleOutwardItemsSingleton>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServiceMultipleOutwardItemsSingleton";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServiceMultipleOutwardItemsSingleton;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServiceMultipleOutwardItemsSingleton;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServiceMultipleOutwardItemsSingleton;
    static equals(a: OutwardJobsServiceMultipleOutwardItemsSingleton | PlainMessage<OutwardJobsServiceMultipleOutwardItemsSingleton> | undefined, b: OutwardJobsServiceMultipleOutwardItemsSingleton | PlainMessage<OutwardJobsServiceMultipleOutwardItemsSingleton> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add multiple items to a outward job
 *
 * @generated from message Scailo.OutwardJobsServiceMultipleOutwardItemsCreateRequest
 */
export declare class OutwardJobsServiceMultipleOutwardItemsCreateRequest extends Message<OutwardJobsServiceMultipleOutwardItemsCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the outward job ID
     *
     * @generated from field: uint64 outward_job_id = 10;
     */
    outwardJobId: bigint;
    /**
     * List of items
     *
     * @generated from field: repeated Scailo.OutwardJobsServiceMultipleOutwardItemsSingleton list = 11;
     */
    list: OutwardJobsServiceMultipleOutwardItemsSingleton[];
    constructor(data?: PartialMessage<OutwardJobsServiceMultipleOutwardItemsCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServiceMultipleOutwardItemsCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServiceMultipleOutwardItemsCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServiceMultipleOutwardItemsCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServiceMultipleOutwardItemsCreateRequest;
    static equals(a: OutwardJobsServiceMultipleOutwardItemsCreateRequest | PlainMessage<OutwardJobsServiceMultipleOutwardItemsCreateRequest> | undefined, b: OutwardJobsServiceMultipleOutwardItemsCreateRequest | PlainMessage<OutwardJobsServiceMultipleOutwardItemsCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an outward item in a outward job
 *
 * @generated from message Scailo.OutwardJobsServiceOutwardItemUpdateRequest
 */
export declare class OutwardJobsServiceOutwardItemUpdateRequest extends Message<OutwardJobsServiceOutwardItemUpdateRequest> {
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
     * Stores the optional item hash to be dispatched
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity of the item
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Any extra specifications with regards to the item
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<OutwardJobsServiceOutwardItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServiceOutwardItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServiceOutwardItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServiceOutwardItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServiceOutwardItemUpdateRequest;
    static equals(a: OutwardJobsServiceOutwardItemUpdateRequest | PlainMessage<OutwardJobsServiceOutwardItemUpdateRequest> | undefined, b: OutwardJobsServiceOutwardItemUpdateRequest | PlainMessage<OutwardJobsServiceOutwardItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an outward item associated to a outward job
 *
 * @generated from message Scailo.OutwardJobOutwardItem
 */
export declare class OutwardJobOutwardItem extends Message<OutwardJobOutwardItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this outward job
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
     * Stores the outward job ID
     *
     * @generated from field: uint64 outward_job_id = 10;
     */
    outwardJobId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * Stores the optional item hash to be dispatched
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The quantity of the item
     *
     * @generated from field: uint64 internal_quantity = 13;
     */
    internalQuantity: bigint;
    /**
     * Any extra specifications with regards to the item
     *
     * @generated from field: string specifications = 14;
     */
    specifications: string;
    constructor(data?: PartialMessage<OutwardJobOutwardItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobOutwardItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobOutwardItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobOutwardItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobOutwardItem;
    static equals(a: OutwardJobOutwardItem | PlainMessage<OutwardJobOutwardItem> | undefined, b: OutwardJobOutwardItem | PlainMessage<OutwardJobOutwardItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of outward job outward items
 *
 * @generated from message Scailo.OutwardJobsOutwardItemsList
 */
export declare class OutwardJobsOutwardItemsList extends Message<OutwardJobsOutwardItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.OutwardJobOutwardItem list = 1;
     */
    list: OutwardJobOutwardItem[];
    constructor(data?: PartialMessage<OutwardJobsOutwardItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsOutwardItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsOutwardItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsOutwardItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsOutwardItemsList;
    static equals(a: OutwardJobsOutwardItemsList | PlainMessage<OutwardJobsOutwardItemsList> | undefined, b: OutwardJobsOutwardItemsList | PlainMessage<OutwardJobsOutwardItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.OutwardJobOutwardItemHistoryRequest
 */
export declare class OutwardJobOutwardItemHistoryRequest extends Message<OutwardJobOutwardItemHistoryRequest> {
    /**
     * Stores the outward job ID
     *
     * @generated from field: uint64 outward_job_id = 10;
     */
    outwardJobId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<OutwardJobOutwardItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobOutwardItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobOutwardItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobOutwardItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobOutwardItemHistoryRequest;
    static equals(a: OutwardJobOutwardItemHistoryRequest | PlainMessage<OutwardJobOutwardItemHistoryRequest> | undefined, b: OutwardJobOutwardItemHistoryRequest | PlainMessage<OutwardJobOutwardItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective outward job outward item
 *
 * @generated from message Scailo.OutwardJobOutwardItemProspectiveInfoRequest
 */
export declare class OutwardJobOutwardItemProspectiveInfoRequest extends Message<OutwardJobOutwardItemProspectiveInfoRequest> {
    /**
     * Stores the outward job ID
     *
     * @generated from field: uint64 outward_job_id = 10;
     */
    outwardJobId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<OutwardJobOutwardItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobOutwardItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobOutwardItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobOutwardItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobOutwardItemProspectiveInfoRequest;
    static equals(a: OutwardJobOutwardItemProspectiveInfoRequest | PlainMessage<OutwardJobOutwardItemProspectiveInfoRequest> | undefined, b: OutwardJobOutwardItemProspectiveInfoRequest | PlainMessage<OutwardJobOutwardItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.OutwardJobOutwardItemsSearchRequest
 */
export declare class OutwardJobOutwardItemsSearchRequest extends Message<OutwardJobOutwardItemsSearchRequest> {
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
     * @generated from field: Scailo.OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: OUTWARD_JOB_OUTWARD_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.OUTWARD_JOB_OUTWARD_ITEM_STATUS status = 7;
     */
    status: OUTWARD_JOB_OUTWARD_ITEM_STATUS;
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
     * The ID of the outward job
     *
     * @generated from field: uint64 outward_job_id = 20;
     */
    outwardJobId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 21;
     */
    familyId: bigint;
    /**
     * The item hash of the family
     *
     * @generated from field: string item_hash = 22;
     */
    itemHash: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<OutwardJobOutwardItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobOutwardItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobOutwardItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobOutwardItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobOutwardItemsSearchRequest;
    static equals(a: OutwardJobOutwardItemsSearchRequest | PlainMessage<OutwardJobOutwardItemsSearchRequest> | undefined, b: OutwardJobOutwardItemsSearchRequest | PlainMessage<OutwardJobOutwardItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination outward items request
 *
 * @generated from message Scailo.OutwardJobsServicePaginatedOutwardItemsResponse
 */
export declare class OutwardJobsServicePaginatedOutwardItemsResponse extends Message<OutwardJobsServicePaginatedOutwardItemsResponse> {
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
     * @generated from field: repeated Scailo.OutwardJobOutwardItem payload = 4;
     */
    payload: OutwardJobOutwardItem[];
    constructor(data?: PartialMessage<OutwardJobsServicePaginatedOutwardItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServicePaginatedOutwardItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServicePaginatedOutwardItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServicePaginatedOutwardItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServicePaginatedOutwardItemsResponse;
    static equals(a: OutwardJobsServicePaginatedOutwardItemsResponse | PlainMessage<OutwardJobsServicePaginatedOutwardItemsResponse> | undefined, b: OutwardJobsServicePaginatedOutwardItemsResponse | PlainMessage<OutwardJobsServicePaginatedOutwardItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to create a outward job contact
 *
 * @generated from message Scailo.OutwardJobsServiceContactCreateRequest
 */
export declare class OutwardJobsServiceContactCreateRequest extends Message<OutwardJobsServiceContactCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the outward job ID
     *
     * @generated from field: uint64 outward_job_id = 10;
     */
    outwardJobId: bigint;
    /**
     * Stores the associate ID
     *
     * @generated from field: uint64 associate_id = 11;
     */
    associateId: bigint;
    constructor(data?: PartialMessage<OutwardJobsServiceContactCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobsServiceContactCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobsServiceContactCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobsServiceContactCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobsServiceContactCreateRequest;
    static equals(a: OutwardJobsServiceContactCreateRequest | PlainMessage<OutwardJobsServiceContactCreateRequest> | undefined, b: OutwardJobsServiceContactCreateRequest | PlainMessage<OutwardJobsServiceContactCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute a outward job contact
 *
 * @generated from message Scailo.OutwardJobContact
 */
export declare class OutwardJobContact extends Message<OutwardJobContact> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this outward job
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
     * Stores the outward job ID
     *
     * @generated from field: uint64 outward_job_id = 10;
     */
    outwardJobId: bigint;
    /**
     * Stores the associate ID
     *
     * @generated from field: uint64 associate_id = 11;
     */
    associateId: bigint;
    constructor(data?: PartialMessage<OutwardJobContact>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobContact";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobContact;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobContact;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobContact;
    static equals(a: OutwardJobContact | PlainMessage<OutwardJobContact> | undefined, b: OutwardJobContact | PlainMessage<OutwardJobContact> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of outward job contacts
 *
 * @generated from message Scailo.OutwardJobContactsList
 */
export declare class OutwardJobContactsList extends Message<OutwardJobContactsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.OutwardJobContact list = 1;
     */
    list: OutwardJobContact[];
    constructor(data?: PartialMessage<OutwardJobContactsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.OutwardJobContactsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OutwardJobContactsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OutwardJobContactsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OutwardJobContactsList;
    static equals(a: OutwardJobContactsList | PlainMessage<OutwardJobContactsList> | undefined, b: OutwardJobContactsList | PlainMessage<OutwardJobContactsList> | undefined): boolean;
}
//# sourceMappingURL=outward_jobs.scailo_pb.d.ts.map