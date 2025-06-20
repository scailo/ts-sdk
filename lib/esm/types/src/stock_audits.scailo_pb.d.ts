import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest, FormFieldDatumFilterRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.STOCK_AUDIT_SORT_KEY
 */
export declare enum STOCK_AUDIT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: STOCK_AUDIT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    STOCK_AUDIT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: STOCK_AUDIT_SORT_KEY_CREATED_AT = 1;
     */
    STOCK_AUDIT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: STOCK_AUDIT_SORT_KEY_MODIFIED_AT = 2;
     */
    STOCK_AUDIT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: STOCK_AUDIT_SORT_KEY_APPROVED_ON = 3;
     */
    STOCK_AUDIT_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: STOCK_AUDIT_SORT_KEY_APPROVED_BY = 4;
     */
    STOCK_AUDIT_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: STOCK_AUDIT_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    STOCK_AUDIT_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: STOCK_AUDIT_SORT_KEY_COMPLETED_ON = 6;
     */
    STOCK_AUDIT_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: STOCK_AUDIT_SORT_KEY_REFERENCE_ID = 10;
     */
    STOCK_AUDIT_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: STOCK_AUDIT_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    STOCK_AUDIT_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.STOCK_AUDIT_ITEM_SORT_KEY
 */
export declare enum STOCK_AUDIT_ITEM_SORT_KEY {
    /**
     * Fetch results by id
     *
     * @generated from enum value: STOCK_AUDIT_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    STOCK_AUDIT_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch results by the creation timestamp
     *
     * @generated from enum value: STOCK_AUDIT_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    STOCK_AUDIT_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch results by the modified timestamp
     *
     * @generated from enum value: STOCK_AUDIT_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    STOCK_AUDIT_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch results by the approved on timestamp
     *
     * @generated from enum value: STOCK_AUDIT_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    STOCK_AUDIT_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch results by the approved by field
     *
     * @generated from enum value: STOCK_AUDIT_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    STOCK_AUDIT_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch results by the approver's role ID
     *
     * @generated from enum value: STOCK_AUDIT_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    STOCK_AUDIT_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch results by the family ID
     *
     * @generated from enum value: STOCK_AUDIT_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    STOCK_AUDIT_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch results by the physical quantity
     *
     * @generated from enum value: STOCK_AUDIT_ITEM_SORT_KEY_PHYSICAL_QUANTITY = 11;
     */
    STOCK_AUDIT_ITEM_SORT_KEY_PHYSICAL_QUANTITY = 11,
    /**
     * Fetch results by the digital quantity
     *
     * @generated from enum value: STOCK_AUDIT_ITEM_SORT_KEY_DIGITAL_QUANTITY = 12;
     */
    STOCK_AUDIT_ITEM_SORT_KEY_DIGITAL_QUANTITY = 12
}
/**
 *
 * Describes the applicable statuses of stock audit items
 *
 * @generated from enum Scailo.STOCK_AUDIT_ITEM_STATUS
 */
export declare enum STOCK_AUDIT_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: STOCK_AUDIT_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    STOCK_AUDIT_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the stock audit items must have been approved
     *
     * @generated from enum value: STOCK_AUDIT_ITEM_STATUS_APPROVED = 1;
     */
    STOCK_AUDIT_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the stock audit items must be waiting for approval
     *
     * @generated from enum value: STOCK_AUDIT_ITEM_STATUS_UNAPPROVED = 2;
     */
    STOCK_AUDIT_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.StockAuditsServiceCreateRequest
 */
export declare class StockAuditsServiceCreateRequest extends Message<StockAuditsServiceCreateRequest> {
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
     * The reference ID of the stock audit
     *
     * @generated from field: string reference_id = 10;
     */
    referenceId: string;
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
    constructor(data?: PartialMessage<StockAuditsServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditsServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditsServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditsServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditsServiceCreateRequest;
    static equals(a: StockAuditsServiceCreateRequest | PlainMessage<StockAuditsServiceCreateRequest> | undefined, b: StockAuditsServiceCreateRequest | PlainMessage<StockAuditsServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.StockAuditsServiceUpdateRequest
 */
export declare class StockAuditsServiceUpdateRequest extends Message<StockAuditsServiceUpdateRequest> {
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
     * The reference ID of the stock audit
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
    constructor(data?: PartialMessage<StockAuditsServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditsServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditsServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditsServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditsServiceUpdateRequest;
    static equals(a: StockAuditsServiceUpdateRequest | PlainMessage<StockAuditsServiceUpdateRequest> | undefined, b: StockAuditsServiceUpdateRequest | PlainMessage<StockAuditsServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.StockAudit
 */
export declare class StockAudit extends Message<StockAudit> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this stock audit
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
     * The status of this stock audit
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this stock audit
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this stock audit was marked as completed
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
     * The reference ID of the stock audit
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
     * The location ID of where the record is created
     *
     * @generated from field: uint64 location_id = 15;
     */
    locationId: bigint;
    /**
     * The list of associated stock audit items
     *
     * @generated from field: repeated Scailo.StockAuditItem list = 20;
     */
    list: StockAuditItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<StockAudit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAudit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAudit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAudit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAudit;
    static equals(a: StockAudit | PlainMessage<StockAudit> | undefined, b: StockAudit | PlainMessage<StockAudit> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a stock audit
 *
 * @generated from message Scailo.StockAuditsServiceItemCreateRequest
 */
export declare class StockAuditsServiceItemCreateRequest extends Message<StockAuditsServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the stock audit ID
     *
     * @generated from field: uint64 stock_audit_id = 10;
     */
    stockAuditId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The physically available quantity (in cents)
     *
     * @generated from field: uint64 physical_quantity = 13;
     */
    physicalQuantity: bigint;
    /**
     * The digitally available quantity (in cents)
     * uint64 digital_quantity = 14 [(genesis_validate.rules).uint64.gt = 0];
     * The reason for reconciliation
     *
     * @generated from field: string reconciliation_reason = 15;
     */
    reconciliationReason: string;
    constructor(data?: PartialMessage<StockAuditsServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditsServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditsServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditsServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditsServiceItemCreateRequest;
    static equals(a: StockAuditsServiceItemCreateRequest | PlainMessage<StockAuditsServiceItemCreateRequest> | undefined, b: StockAuditsServiceItemCreateRequest | PlainMessage<StockAuditsServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a stock audit
 *
 * @generated from message Scailo.StockAuditsServiceItemUpdateRequest
 */
export declare class StockAuditsServiceItemUpdateRequest extends Message<StockAuditsServiceItemUpdateRequest> {
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
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The physically available quantity (in cents)
     *
     * @generated from field: uint64 physical_quantity = 13;
     */
    physicalQuantity: bigint;
    /**
     * The digitally available quantity (in cents)
     * uint64 digital_quantity = 14 [(genesis_validate.rules).uint64.gt = 0];
     * The reason for reconciliation
     *
     * @generated from field: string reconciliation_reason = 15;
     */
    reconciliationReason: string;
    constructor(data?: PartialMessage<StockAuditsServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditsServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditsServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditsServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditsServiceItemUpdateRequest;
    static equals(a: StockAuditsServiceItemUpdateRequest | PlainMessage<StockAuditsServiceItemUpdateRequest> | undefined, b: StockAuditsServiceItemUpdateRequest | PlainMessage<StockAuditsServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a stock audit
 *
 * @generated from message Scailo.StockAuditItem
 */
export declare class StockAuditItem extends Message<StockAuditItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this stock audit
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
     * Stores the stock audit ID
     *
     * @generated from field: uint64 stock_audit_id = 10;
     */
    stockAuditId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 12;
     */
    itemHash: string;
    /**
     * The physically available quantity (in cents)
     *
     * @generated from field: uint64 physical_quantity = 13;
     */
    physicalQuantity: bigint;
    /**
     * The digitally available quantity (in cents)
     *
     * @generated from field: uint64 digital_quantity = 14;
     */
    digitalQuantity: bigint;
    /**
     * The reason for reconciliation
     *
     * @generated from field: string reconciliation_reason = 15;
     */
    reconciliationReason: string;
    constructor(data?: PartialMessage<StockAuditItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditItem;
    static equals(a: StockAuditItem | PlainMessage<StockAuditItem> | undefined, b: StockAuditItem | PlainMessage<StockAuditItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of stock audits
 *
 * @generated from message Scailo.StockAuditsList
 */
export declare class StockAuditsList extends Message<StockAuditsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.StockAudit list = 1;
     */
    list: StockAudit[];
    constructor(data?: PartialMessage<StockAuditsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditsList;
    static equals(a: StockAuditsList | PlainMessage<StockAuditsList> | undefined, b: StockAuditsList | PlainMessage<StockAuditsList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of stock audit items
 *
 * @generated from message Scailo.StockAuditsItemsList
 */
export declare class StockAuditsItemsList extends Message<StockAuditsItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.StockAuditItem list = 1;
     */
    list: StockAuditItem[];
    constructor(data?: PartialMessage<StockAuditsItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditsItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditsItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditsItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditsItemsList;
    static equals(a: StockAuditsItemsList | PlainMessage<StockAuditsItemsList> | undefined, b: StockAuditsItemsList | PlainMessage<StockAuditsItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.StockAuditItemHistoryRequest
 */
export declare class StockAuditItemHistoryRequest extends Message<StockAuditItemHistoryRequest> {
    /**
     * Stores the stock audit ID
     *
     * @generated from field: uint64 stock_audit_id = 10;
     */
    stockAuditId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<StockAuditItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditItemHistoryRequest;
    static equals(a: StockAuditItemHistoryRequest | PlainMessage<StockAuditItemHistoryRequest> | undefined, b: StockAuditItemHistoryRequest | PlainMessage<StockAuditItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective stock audit item
 *
 * @generated from message Scailo.StockAuditItemProspectiveInfoRequest
 */
export declare class StockAuditItemProspectiveInfoRequest extends Message<StockAuditItemProspectiveInfoRequest> {
    /**
     * Stores the stock audit ID
     *
     * @generated from field: uint64 stock_audit_id = 10;
     */
    stockAuditId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<StockAuditItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditItemProspectiveInfoRequest;
    static equals(a: StockAuditItemProspectiveInfoRequest | PlainMessage<StockAuditItemProspectiveInfoRequest> | undefined, b: StockAuditItemProspectiveInfoRequest | PlainMessage<StockAuditItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.StockAuditsServicePaginationReq
 */
export declare class StockAuditsServicePaginationReq extends Message<StockAuditsServicePaginationReq> {
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
     * @generated from field: Scailo.STOCK_AUDIT_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_AUDIT_SORT_KEY;
    /**
     * The status of this stock audit
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<StockAuditsServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditsServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditsServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditsServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditsServicePaginationReq;
    static equals(a: StockAuditsServicePaginationReq | PlainMessage<StockAuditsServicePaginationReq> | undefined, b: StockAuditsServicePaginationReq | PlainMessage<StockAuditsServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.StockAuditsServicePaginationResponse
 */
export declare class StockAuditsServicePaginationResponse extends Message<StockAuditsServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.StockAudit payload = 4;
     */
    payload: StockAudit[];
    constructor(data?: PartialMessage<StockAuditsServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditsServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditsServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditsServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditsServicePaginationResponse;
    static equals(a: StockAuditsServicePaginationResponse | PlainMessage<StockAuditsServicePaginationResponse> | undefined, b: StockAuditsServicePaginationResponse | PlainMessage<StockAuditsServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.StockAuditsServiceFilterReq
 */
export declare class StockAuditsServiceFilterReq extends Message<StockAuditsServiceFilterReq> {
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
     * @generated from field: Scailo.STOCK_AUDIT_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_AUDIT_SORT_KEY;
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
     * The status of this stock audit
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
     * The reference ID of the stock audit
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
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<StockAuditsServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditsServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditsServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditsServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditsServiceFilterReq;
    static equals(a: StockAuditsServiceFilterReq | PlainMessage<StockAuditsServiceFilterReq> | undefined, b: StockAuditsServiceFilterReq | PlainMessage<StockAuditsServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.StockAuditsServiceCountReq
 */
export declare class StockAuditsServiceCountReq extends Message<StockAuditsServiceCountReq> {
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
     * The status of this stock audit
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
     * The reference ID of the stock audit
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
     * The list of form data filters
     *
     * @generated from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;
     */
    formData: FormFieldDatumFilterRequest[];
    constructor(data?: PartialMessage<StockAuditsServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditsServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditsServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditsServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditsServiceCountReq;
    static equals(a: StockAuditsServiceCountReq | PlainMessage<StockAuditsServiceCountReq> | undefined, b: StockAuditsServiceCountReq | PlainMessage<StockAuditsServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.StockAuditsServiceSearchAllReq
 */
export declare class StockAuditsServiceSearchAllReq extends Message<StockAuditsServiceSearchAllReq> {
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
     * @generated from field: Scailo.STOCK_AUDIT_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_AUDIT_SORT_KEY;
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
    constructor(data?: PartialMessage<StockAuditsServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditsServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditsServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditsServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditsServiceSearchAllReq;
    static equals(a: StockAuditsServiceSearchAllReq | PlainMessage<StockAuditsServiceSearchAllReq> | undefined, b: StockAuditsServiceSearchAllReq | PlainMessage<StockAuditsServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.StockAuditItemsSearchRequest
 */
export declare class StockAuditItemsSearchRequest extends Message<StockAuditItemsSearchRequest> {
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
     * @generated from field: Scailo.STOCK_AUDIT_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_AUDIT_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.STOCK_AUDIT_ITEM_STATUS status = 7;
     */
    status: STOCK_AUDIT_ITEM_STATUS;
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
     * The ID of the stock audit
     *
     * @generated from field: uint64 stock_audit_id = 20;
     */
    stockAuditId: bigint;
    /**
     * The ID of the family
     *
     * @generated from field: uint64 family_id = 21;
     */
    familyId: bigint;
    /**
     * Stores the item hash
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
    constructor(data?: PartialMessage<StockAuditItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditItemsSearchRequest;
    static equals(a: StockAuditItemsSearchRequest | PlainMessage<StockAuditItemsSearchRequest> | undefined, b: StockAuditItemsSearchRequest | PlainMessage<StockAuditItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.StockAuditsServicePaginatedItemsResponse
 */
export declare class StockAuditsServicePaginatedItemsResponse extends Message<StockAuditsServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.StockAuditItem payload = 4;
     */
    payload: StockAuditItem[];
    constructor(data?: PartialMessage<StockAuditsServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockAuditsServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockAuditsServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockAuditsServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockAuditsServicePaginatedItemsResponse;
    static equals(a: StockAuditsServicePaginatedItemsResponse | PlainMessage<StockAuditsServicePaginatedItemsResponse> | undefined, b: StockAuditsServicePaginatedItemsResponse | PlainMessage<StockAuditsServicePaginatedItemsResponse> | undefined): boolean;
}
//# sourceMappingURL=stock_audits.scailo_pb.d.ts.map