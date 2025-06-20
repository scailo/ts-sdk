import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
import { FAMILY_TYPE } from "./families.scailo_pb.js";
/**
 *
 * Stores all the possible references from which a production plan can be added
 *
 * @generated from enum Scailo.PRODUCTION_PLAN_REF_FROM
 */
export declare enum PRODUCTION_PLAN_REF_FROM {
    /**
     * Used only in filters
     *
     * @generated from enum value: PRODUCTION_PLAN_REF_FROM_ANY_UNSPECIFIED = 0;
     */
    PRODUCTION_PLAN_REF_FROM_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the production plan originated from a work order
     *
     * @generated from enum value: PRODUCTION_PLAN_REF_FROM_WORK_ORDER = 1;
     */
    PRODUCTION_PLAN_REF_FROM_WORK_ORDER = 1
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PRODUCTION_PLAN_SORT_KEY
 */
export declare enum PRODUCTION_PLAN_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PRODUCTION_PLAN_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_CREATED_AT = 1;
     */
    PRODUCTION_PLAN_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_MODIFIED_AT = 2;
     */
    PRODUCTION_PLAN_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_APPROVED_ON = 3;
     */
    PRODUCTION_PLAN_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_APPROVED_BY = 4;
     */
    PRODUCTION_PLAN_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PRODUCTION_PLAN_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_COMPLETED_ON = 6;
     */
    PRODUCTION_PLAN_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_REFERENCE_ID = 10;
     */
    PRODUCTION_PLAN_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    PRODUCTION_PLAN_SORT_KEY_FINAL_REF_NUMBER = 11,
    /**
     * Fetch ordered results by the location ID
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_LOCATION_ID = 12;
     */
    PRODUCTION_PLAN_SORT_KEY_LOCATION_ID = 12,
    /**
     * Fetch ordered results by the start time
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_STARTS_AT = 13;
     */
    PRODUCTION_PLAN_SORT_KEY_STARTS_AT = 13,
    /**
     * Fetch ordered results by the end time
     *
     * @generated from enum value: PRODUCTION_PLAN_SORT_KEY_ENDS_AT = 14;
     */
    PRODUCTION_PLAN_SORT_KEY_ENDS_AT = 14
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.PRODUCTION_PLAN_ITEM_SORT_KEY
 */
export declare enum PRODUCTION_PLAN_ITEM_SORT_KEY {
    /**
     * Fetch results by id
     *
     * @generated from enum value: PRODUCTION_PLAN_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    PRODUCTION_PLAN_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch results by the creation timestamp
     *
     * @generated from enum value: PRODUCTION_PLAN_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    PRODUCTION_PLAN_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch results by the modified timestamp
     *
     * @generated from enum value: PRODUCTION_PLAN_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    PRODUCTION_PLAN_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch results by the approved on timestamp
     *
     * @generated from enum value: PRODUCTION_PLAN_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    PRODUCTION_PLAN_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch results by the approved by field
     *
     * @generated from enum value: PRODUCTION_PLAN_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    PRODUCTION_PLAN_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch results by the approver's role ID
     *
     * @generated from enum value: PRODUCTION_PLAN_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    PRODUCTION_PLAN_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch results by the family ID
     *
     * @generated from enum value: PRODUCTION_PLAN_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    PRODUCTION_PLAN_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch results by the quantity
     *
     * @generated from enum value: PRODUCTION_PLAN_ITEM_SORT_KEY_QUANTITY = 11;
     */
    PRODUCTION_PLAN_ITEM_SORT_KEY_QUANTITY = 11
}
/**
 *
 * Describes the applicable statuses of production plan items
 *
 * @generated from enum Scailo.PRODUCTION_PLAN_ITEM_STATUS
 */
export declare enum PRODUCTION_PLAN_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: PRODUCTION_PLAN_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    PRODUCTION_PLAN_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the production plan items must have been approved
     *
     * @generated from enum value: PRODUCTION_PLAN_ITEM_STATUS_APPROVED = 1;
     */
    PRODUCTION_PLAN_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the production plan items must be waiting for approval
     *
     * @generated from enum value: PRODUCTION_PLAN_ITEM_STATUS_UNAPPROVED = 2;
     */
    PRODUCTION_PLAN_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.ProductionPlansServiceCreateRequest
 */
export declare class ProductionPlansServiceCreateRequest extends Message<ProductionPlansServiceCreateRequest> {
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
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 8;
     */
    projectId: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the production plan
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The associated reference
     *
     * @generated from field: Scailo.PRODUCTION_PLAN_REF_FROM ref_from = 12;
     */
    refFrom: PRODUCTION_PLAN_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 14;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 15;
     */
    supervisor: string;
    /**
     * The start UNIX timestamp
     *
     * @generated from field: uint64 starts_at = 16;
     */
    startsAt: bigint;
    /**
     * The end UNIX timestamp
     *
     * @generated from field: uint64 ends_at = 17;
     */
    endsAt: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ProductionPlansServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlansServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceCreateRequest;
    static equals(a: ProductionPlansServiceCreateRequest | PlainMessage<ProductionPlansServiceCreateRequest> | undefined, b: ProductionPlansServiceCreateRequest | PlainMessage<ProductionPlansServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.ProductionPlansServiceUpdateRequest
 */
export declare class ProductionPlansServiceUpdateRequest extends Message<ProductionPlansServiceUpdateRequest> {
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
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 8;
     */
    projectId: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the production plan
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 15;
     */
    supervisor: string;
    /**
     * The start UNIX timestamp
     *
     * @generated from field: uint64 starts_at = 16;
     */
    startsAt: bigint;
    /**
     * The end UNIX timestamp
     *
     * @generated from field: uint64 ends_at = 17;
     */
    endsAt: bigint;
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;
     */
    formData: FormFieldDatumCreateRequest[];
    constructor(data?: PartialMessage<ProductionPlansServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlansServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceUpdateRequest;
    static equals(a: ProductionPlansServiceUpdateRequest | PlainMessage<ProductionPlansServiceUpdateRequest> | undefined, b: ProductionPlansServiceUpdateRequest | PlainMessage<ProductionPlansServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.ProductionPlansServiceAutofillRequest
 */
export declare class ProductionPlansServiceAutofillRequest extends Message<ProductionPlansServiceAutofillRequest> {
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
     * Denotes if all the equation dependencies (if applicable) should also be automatically added to the production plan
     *
     * @generated from field: bool populate_using_equation_dependencies = 3;
     */
    populateUsingEquationDependencies: boolean;
    constructor(data?: PartialMessage<ProductionPlansServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlansServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceAutofillRequest;
    static equals(a: ProductionPlansServiceAutofillRequest | PlainMessage<ProductionPlansServiceAutofillRequest> | undefined, b: ProductionPlansServiceAutofillRequest | PlainMessage<ProductionPlansServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Stores the UUID references of the record
 *
 * @generated from message Scailo.ProductionPlanAncillaryParameters
 */
export declare class ProductionPlanAncillaryParameters extends Message<ProductionPlanAncillaryParameters> {
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
    constructor(data?: PartialMessage<ProductionPlanAncillaryParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlanAncillaryParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlanAncillaryParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlanAncillaryParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlanAncillaryParameters;
    static equals(a: ProductionPlanAncillaryParameters | PlainMessage<ProductionPlanAncillaryParameters> | undefined, b: ProductionPlanAncillaryParameters | PlainMessage<ProductionPlanAncillaryParameters> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.ProductionPlan
 */
export declare class ProductionPlan extends Message<ProductionPlan> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this production plan
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
     * The status of this production plan
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this production plan
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this production plan was marked as completed
     *
     * @generated from field: uint64 completed_on = 6;
     */
    completedOn: bigint;
    /**
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 8;
     */
    projectId: bigint;
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The reference ID of the production plan
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
     * @generated from field: Scailo.PRODUCTION_PLAN_REF_FROM ref_from = 12;
     */
    refFrom: PRODUCTION_PLAN_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 13;
     */
    refId: bigint;
    /**
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 14;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 15;
     */
    supervisor: string;
    /**
     * The start UNIX timestamp
     *
     * @generated from field: uint64 starts_at = 16;
     */
    startsAt: bigint;
    /**
     * The end UNIX timestamp
     *
     * @generated from field: uint64 ends_at = 17;
     */
    endsAt: bigint;
    /**
     * The list of associated production plan items
     *
     * @generated from field: repeated Scailo.ProductionPlanItem list = 20;
     */
    list: ProductionPlanItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<ProductionPlan>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlan";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlan;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlan;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlan;
    static equals(a: ProductionPlan | PlainMessage<ProductionPlan> | undefined, b: ProductionPlan | PlainMessage<ProductionPlan> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a production plan
 *
 * @generated from message Scailo.ProductionPlansServiceItemCreateRequest
 */
export declare class ProductionPlansServiceItemCreateRequest extends Message<ProductionPlansServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the production plan ID
     *
     * @generated from field: uint64 production_plan_id = 10;
     */
    productionPlanId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity being manufactured
     *
     * @generated from field: uint64 quantity = 12;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<ProductionPlansServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlansServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceItemCreateRequest;
    static equals(a: ProductionPlansServiceItemCreateRequest | PlainMessage<ProductionPlansServiceItemCreateRequest> | undefined, b: ProductionPlansServiceItemCreateRequest | PlainMessage<ProductionPlansServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a production plan
 *
 * @generated from message Scailo.ProductionPlansServiceItemUpdateRequest
 */
export declare class ProductionPlansServiceItemUpdateRequest extends Message<ProductionPlansServiceItemUpdateRequest> {
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
     * The quantity being manufactured
     *
     * @generated from field: uint64 quantity = 12;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<ProductionPlansServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlansServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceItemUpdateRequest;
    static equals(a: ProductionPlansServiceItemUpdateRequest | PlainMessage<ProductionPlansServiceItemUpdateRequest> | undefined, b: ProductionPlansServiceItemUpdateRequest | PlainMessage<ProductionPlansServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a production plan
 *
 * @generated from message Scailo.ProductionPlanItem
 */
export declare class ProductionPlanItem extends Message<ProductionPlanItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this production plan
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
     * Stores the production plan ID
     *
     * @generated from field: uint64 production_plan_id = 10;
     */
    productionPlanId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity being manufactured
     *
     * @generated from field: uint64 quantity = 12;
     */
    quantity: bigint;
    constructor(data?: PartialMessage<ProductionPlanItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlanItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlanItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlanItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlanItem;
    static equals(a: ProductionPlanItem | PlainMessage<ProductionPlanItem> | undefined, b: ProductionPlanItem | PlainMessage<ProductionPlanItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of production plans
 *
 * @generated from message Scailo.ProductionPlansList
 */
export declare class ProductionPlansList extends Message<ProductionPlansList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ProductionPlan list = 1;
     */
    list: ProductionPlan[];
    constructor(data?: PartialMessage<ProductionPlansList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlansList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansList;
    static equals(a: ProductionPlansList | PlainMessage<ProductionPlansList> | undefined, b: ProductionPlansList | PlainMessage<ProductionPlansList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of production plan items
 *
 * @generated from message Scailo.ProductionPlansItemsList
 */
export declare class ProductionPlansItemsList extends Message<ProductionPlansItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.ProductionPlanItem list = 1;
     */
    list: ProductionPlanItem[];
    constructor(data?: PartialMessage<ProductionPlansItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlansItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansItemsList;
    static equals(a: ProductionPlansItemsList | PlainMessage<ProductionPlansItemsList> | undefined, b: ProductionPlansItemsList | PlainMessage<ProductionPlansItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.ProductionPlanItemHistoryRequest
 */
export declare class ProductionPlanItemHistoryRequest extends Message<ProductionPlanItemHistoryRequest> {
    /**
     * Stores the production plan ID
     *
     * @generated from field: uint64 production_plan_id = 10;
     */
    productionPlanId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<ProductionPlanItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlanItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlanItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlanItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlanItemHistoryRequest;
    static equals(a: ProductionPlanItemHistoryRequest | PlainMessage<ProductionPlanItemHistoryRequest> | undefined, b: ProductionPlanItemHistoryRequest | PlainMessage<ProductionPlanItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective production plan item
 *
 * @generated from message Scailo.ProductionPlanItemProspectiveInfoRequest
 */
export declare class ProductionPlanItemProspectiveInfoRequest extends Message<ProductionPlanItemProspectiveInfoRequest> {
    /**
     * Stores the production plan ID
     *
     * @generated from field: uint64 production_plan_id = 10;
     */
    productionPlanId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<ProductionPlanItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlanItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlanItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlanItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlanItemProspectiveInfoRequest;
    static equals(a: ProductionPlanItemProspectiveInfoRequest | PlainMessage<ProductionPlanItemProspectiveInfoRequest> | undefined, b: ProductionPlanItemProspectiveInfoRequest | PlainMessage<ProductionPlanItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.ProductionPlansServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class ProductionPlansServiceAlreadyAddedQuantityForSourceRequest extends Message<ProductionPlansServiceAlreadyAddedQuantityForSourceRequest> {
    /**
     * The associated reference
     *
     * @generated from field: Scailo.PRODUCTION_PLAN_REF_FROM ref_from = 1;
     */
    refFrom: PRODUCTION_PLAN_REF_FROM;
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
    constructor(data?: PartialMessage<ProductionPlansServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlansServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: ProductionPlansServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<ProductionPlansServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: ProductionPlansServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<ProductionPlansServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.ProductionPlansServicePaginationReq
 */
export declare class ProductionPlansServicePaginationReq extends Message<ProductionPlansServicePaginationReq> {
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
     * @generated from field: Scailo.PRODUCTION_PLAN_SORT_KEY sort_key = 5;
     */
    sortKey: PRODUCTION_PLAN_SORT_KEY;
    /**
     * The status of this production plan
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<ProductionPlansServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlansServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServicePaginationReq;
    static equals(a: ProductionPlansServicePaginationReq | PlainMessage<ProductionPlansServicePaginationReq> | undefined, b: ProductionPlansServicePaginationReq | PlainMessage<ProductionPlansServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.ProductionPlansServicePaginationResponse
 */
export declare class ProductionPlansServicePaginationResponse extends Message<ProductionPlansServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.ProductionPlan payload = 4;
     */
    payload: ProductionPlan[];
    constructor(data?: PartialMessage<ProductionPlansServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlansServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServicePaginationResponse;
    static equals(a: ProductionPlansServicePaginationResponse | PlainMessage<ProductionPlansServicePaginationResponse> | undefined, b: ProductionPlansServicePaginationResponse | PlainMessage<ProductionPlansServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.ProductionPlansServiceFilterReq
 */
export declare class ProductionPlansServiceFilterReq extends Message<ProductionPlansServiceFilterReq> {
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
     * @generated from field: Scailo.PRODUCTION_PLAN_SORT_KEY sort_key = 5;
     */
    sortKey: PRODUCTION_PLAN_SORT_KEY;
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
     * The status of this production plan
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
     * The reference ID of the production plan
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
     * @generated from field: Scailo.PRODUCTION_PLAN_REF_FROM ref_from = 22;
     */
    refFrom: PRODUCTION_PLAN_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 25;
     */
    supervisor: string;
    /**
     * The start range of "starts at"
     *
     * @generated from field: uint64 starts_at_start = 30;
     */
    startsAtStart: bigint;
    /**
     * The end range of "starts at"
     *
     * @generated from field: uint64 starts_at_end = 31;
     */
    startsAtEnd: bigint;
    /**
     * The start range of "ends at"
     *
     * @generated from field: uint64 ends_at_start = 32;
     */
    endsAtStart: bigint;
    /**
     * The end range of "ends at"
     *
     * @generated from field: uint64 ends_at_end = 33;
     */
    endsAtEnd: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 50;
     */
    familyId: bigint;
    /**
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 60;
     */
    projectId: bigint;
    /**
     * Sales Order related filters
     * The associated buyer client ID of the linked sales order
     *
     * @generated from field: uint64 buyer_client_id = 80;
     */
    buyerClientId: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<ProductionPlansServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlansServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceFilterReq;
    static equals(a: ProductionPlansServiceFilterReq | PlainMessage<ProductionPlansServiceFilterReq> | undefined, b: ProductionPlansServiceFilterReq | PlainMessage<ProductionPlansServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.ProductionPlansServiceCountReq
 */
export declare class ProductionPlansServiceCountReq extends Message<ProductionPlansServiceCountReq> {
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
     * The status of this production plan
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
     * The reference ID of the production plan
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
     * @generated from field: Scailo.PRODUCTION_PLAN_REF_FROM ref_from = 22;
     */
    refFrom: PRODUCTION_PLAN_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 25;
     */
    supervisor: string;
    /**
     * The start range of "starts at"
     *
     * @generated from field: uint64 starts_at_start = 30;
     */
    startsAtStart: bigint;
    /**
     * The end range of "starts at"
     *
     * @generated from field: uint64 starts_at_end = 31;
     */
    startsAtEnd: bigint;
    /**
     * The start range of "ends at"
     *
     * @generated from field: uint64 ends_at_start = 32;
     */
    endsAtStart: bigint;
    /**
     * The end range of "ends at"
     *
     * @generated from field: uint64 ends_at_end = 33;
     */
    endsAtEnd: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 50;
     */
    familyId: bigint;
    /**
     * The associated project ID
     *
     * @generated from field: uint64 project_id = 60;
     */
    projectId: bigint;
    /**
     * Sales Order related filters
     * The associated buyer client ID of the linked sales order
     *
     * @generated from field: uint64 buyer_client_id = 80;
     */
    buyerClientId: bigint;
    /**
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<ProductionPlansServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlansServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceCountReq;
    static equals(a: ProductionPlansServiceCountReq | PlainMessage<ProductionPlansServiceCountReq> | undefined, b: ProductionPlansServiceCountReq | PlainMessage<ProductionPlansServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.ProductionPlansServiceSearchAllReq
 */
export declare class ProductionPlansServiceSearchAllReq extends Message<ProductionPlansServiceSearchAllReq> {
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
     * @generated from field: Scailo.PRODUCTION_PLAN_SORT_KEY sort_key = 5;
     */
    sortKey: PRODUCTION_PLAN_SORT_KEY;
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
     * @generated from field: Scailo.PRODUCTION_PLAN_REF_FROM ref_from = 22;
     */
    refFrom: PRODUCTION_PLAN_REF_FROM;
    /**
     * The associated ID of the reference
     *
     * @generated from field: uint64 ref_id = 23;
     */
    refId: bigint;
    /**
     * The ID of the location
     *
     * @generated from field: uint64 location_id = 24;
     */
    locationId: bigint;
    /**
     * The username of the supervisor
     *
     * @generated from field: string supervisor = 25;
     */
    supervisor: string;
    constructor(data?: PartialMessage<ProductionPlansServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlansServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServiceSearchAllReq;
    static equals(a: ProductionPlansServiceSearchAllReq | PlainMessage<ProductionPlansServiceSearchAllReq> | undefined, b: ProductionPlansServiceSearchAllReq | PlainMessage<ProductionPlansServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.ProductionPlanItemsSearchRequest
 */
export declare class ProductionPlanItemsSearchRequest extends Message<ProductionPlanItemsSearchRequest> {
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
     * @generated from field: Scailo.PRODUCTION_PLAN_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: PRODUCTION_PLAN_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.PRODUCTION_PLAN_ITEM_STATUS status = 7;
     */
    status: PRODUCTION_PLAN_ITEM_STATUS;
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
     * The ID of the production plan
     *
     * @generated from field: uint64 production_plan_id = 20;
     */
    productionPlanId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 21;
     */
    familyId: bigint;
    /**
     * The type of the family
     *
     * @generated from field: Scailo.FAMILY_TYPE family_type = 30;
     */
    familyType: FAMILY_TYPE;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 40;
     */
    searchKey: string;
    constructor(data?: PartialMessage<ProductionPlanItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlanItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlanItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlanItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlanItemsSearchRequest;
    static equals(a: ProductionPlanItemsSearchRequest | PlainMessage<ProductionPlanItemsSearchRequest> | undefined, b: ProductionPlanItemsSearchRequest | PlainMessage<ProductionPlanItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.ProductionPlansServicePaginatedItemsResponse
 */
export declare class ProductionPlansServicePaginatedItemsResponse extends Message<ProductionPlansServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.ProductionPlanItem payload = 4;
     */
    payload: ProductionPlanItem[];
    constructor(data?: PartialMessage<ProductionPlansServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlansServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlansServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlansServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlansServicePaginatedItemsResponse;
    static equals(a: ProductionPlansServicePaginatedItemsResponse | PlainMessage<ProductionPlansServicePaginatedItemsResponse> | undefined, b: ProductionPlansServicePaginatedItemsResponse | PlainMessage<ProductionPlansServicePaginatedItemsResponse> | undefined): boolean;
}
/**
 *
 * Describes the production statistics of the production plan
 *
 * @generated from message Scailo.ProductionPlanProductionStatistics
 */
export declare class ProductionPlanProductionStatistics extends Message<ProductionPlanProductionStatistics> {
    /**
     * Stores the ID of the family
     *
     * @generated from field: uint64 family_id = 1;
     */
    familyId: bigint;
    /**
     * Stores the production plan quantity
     *
     * @generated from field: uint64 production_plan_quantity = 2;
     */
    productionPlanQuantity: bigint;
    /**
     * Stores the produced quantity
     *
     * @generated from field: uint64 produced_quantity = 3;
     */
    producedQuantity: bigint;
    constructor(data?: PartialMessage<ProductionPlanProductionStatistics>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlanProductionStatistics";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlanProductionStatistics;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlanProductionStatistics;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlanProductionStatistics;
    static equals(a: ProductionPlanProductionStatistics | PlainMessage<ProductionPlanProductionStatistics> | undefined, b: ProductionPlanProductionStatistics | PlainMessage<ProductionPlanProductionStatistics> | undefined): boolean;
}
/**
 *
 * Describes the list of production statistics of the production plan
 *
 * @generated from message Scailo.ProductionPlanProductionStatisticsList
 */
export declare class ProductionPlanProductionStatisticsList extends Message<ProductionPlanProductionStatisticsList> {
    /**
     * @generated from field: repeated Scailo.ProductionPlanProductionStatistics list = 1;
     */
    list: ProductionPlanProductionStatistics[];
    constructor(data?: PartialMessage<ProductionPlanProductionStatisticsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.ProductionPlanProductionStatisticsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProductionPlanProductionStatisticsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProductionPlanProductionStatisticsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProductionPlanProductionStatisticsList;
    static equals(a: ProductionPlanProductionStatisticsList | PlainMessage<ProductionPlanProductionStatisticsList> | undefined, b: ProductionPlanProductionStatisticsList | PlainMessage<ProductionPlanProductionStatisticsList> | undefined): boolean;
}
//# sourceMappingURL=production_plans.scailo_pb.d.ts.map