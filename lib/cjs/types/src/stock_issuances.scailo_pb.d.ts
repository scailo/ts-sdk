import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { FormFieldDatum, FormFieldDatumCreateRequest } from "./forms_fields_data.scailo_pb.js";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.STOCK_ISSUANCE_SORT_KEY
 */
export declare enum STOCK_ISSUANCE_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    STOCK_ISSUANCE_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_CREATED_AT = 1;
     */
    STOCK_ISSUANCE_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_MODIFIED_AT = 2;
     */
    STOCK_ISSUANCE_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_APPROVED_ON = 3;
     */
    STOCK_ISSUANCE_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_APPROVED_BY = 4;
     */
    STOCK_ISSUANCE_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    STOCK_ISSUANCE_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the approver's completed on timestamp
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_COMPLETED_ON = 6;
     */
    STOCK_ISSUANCE_SORT_KEY_COMPLETED_ON = 6,
    /**
     * Fetch ordered results by the reference ID
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_REFERENCE_ID = 10;
     */
    STOCK_ISSUANCE_SORT_KEY_REFERENCE_ID = 10,
    /**
     * Fetch ordered results by the final ref number
     *
     * @generated from enum value: STOCK_ISSUANCE_SORT_KEY_FINAL_REF_NUMBER = 11;
     */
    STOCK_ISSUANCE_SORT_KEY_FINAL_REF_NUMBER = 11
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.STOCK_ISSUANCE_ITEM_SORT_KEY
 */
export declare enum STOCK_ISSUANCE_ITEM_SORT_KEY {
    /**
     * Fetch results by id
     *
     * @generated from enum value: STOCK_ISSUANCE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    STOCK_ISSUANCE_ITEM_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch results by the creation timestamp
     *
     * @generated from enum value: STOCK_ISSUANCE_ITEM_SORT_KEY_CREATED_AT = 1;
     */
    STOCK_ISSUANCE_ITEM_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch results by the modified timestamp
     *
     * @generated from enum value: STOCK_ISSUANCE_ITEM_SORT_KEY_MODIFIED_AT = 2;
     */
    STOCK_ISSUANCE_ITEM_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch results by the approved on timestamp
     *
     * @generated from enum value: STOCK_ISSUANCE_ITEM_SORT_KEY_APPROVED_ON = 3;
     */
    STOCK_ISSUANCE_ITEM_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch results by the approved by field
     *
     * @generated from enum value: STOCK_ISSUANCE_ITEM_SORT_KEY_APPROVED_BY = 4;
     */
    STOCK_ISSUANCE_ITEM_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch results by the approver's role ID
     *
     * @generated from enum value: STOCK_ISSUANCE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    STOCK_ISSUANCE_ITEM_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch results by the family ID
     *
     * @generated from enum value: STOCK_ISSUANCE_ITEM_SORT_KEY_FAMILY_ID = 10;
     */
    STOCK_ISSUANCE_ITEM_SORT_KEY_FAMILY_ID = 10,
    /**
     * Fetch results by the quantity
     *
     * @generated from enum value: STOCK_ISSUANCE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11;
     */
    STOCK_ISSUANCE_ITEM_SORT_KEY_INTERNAL_QUANTITY = 11
}
/**
 *
 * Describes the applicable statuses of stock issuance items
 *
 * @generated from enum Scailo.STOCK_ISSUANCE_ITEM_STATUS
 */
export declare enum STOCK_ISSUANCE_ITEM_STATUS {
    /**
     * Denotes that status be disregarded. This is used only within search APIs
     *
     * @generated from enum value: STOCK_ISSUANCE_ITEM_STATUS_ANY_UNSPECIFIED = 0;
     */
    STOCK_ISSUANCE_ITEM_STATUS_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the stock issuance items must have been approved
     *
     * @generated from enum value: STOCK_ISSUANCE_ITEM_STATUS_APPROVED = 1;
     */
    STOCK_ISSUANCE_ITEM_STATUS_APPROVED = 1,
    /**
     * Denotes that the stock issuance items must be waiting for approval
     *
     * @generated from enum value: STOCK_ISSUANCE_ITEM_STATUS_UNAPPROVED = 2;
     */
    STOCK_ISSUANCE_ITEM_STATUS_UNAPPROVED = 2
}
/**
 *
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.StockIssuancesServiceCreateRequest
 */
export declare class StockIssuancesServiceCreateRequest extends Message<StockIssuancesServiceCreateRequest> {
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
     * The reference ID of the stock issuance
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
    constructor(data?: PartialMessage<StockIssuancesServiceCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuancesServiceCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceCreateRequest;
    static equals(a: StockIssuancesServiceCreateRequest | PlainMessage<StockIssuancesServiceCreateRequest> | undefined, b: StockIssuancesServiceCreateRequest | PlainMessage<StockIssuancesServiceCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.StockIssuancesServiceUpdateRequest
 */
export declare class StockIssuancesServiceUpdateRequest extends Message<StockIssuancesServiceUpdateRequest> {
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
     * The reference ID of the stock issuance
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
    constructor(data?: PartialMessage<StockIssuancesServiceUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuancesServiceUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceUpdateRequest;
    static equals(a: StockIssuancesServiceUpdateRequest | PlainMessage<StockIssuancesServiceUpdateRequest> | undefined, b: StockIssuancesServiceUpdateRequest | PlainMessage<StockIssuancesServiceUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to perform an autofill request
 *
 * @generated from message Scailo.StockIssuancesServiceAutofillRequest
 */
export declare class StockIssuancesServiceAutofillRequest extends Message<StockIssuancesServiceAutofillRequest> {
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
     * Stores if the inventory needs to be split into unit quantities
     *
     * @generated from field: bool split_into_unit_quantity = 10;
     */
    splitIntoUnitQuantity: boolean;
    constructor(data?: PartialMessage<StockIssuancesServiceAutofillRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuancesServiceAutofillRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceAutofillRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceAutofillRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceAutofillRequest;
    static equals(a: StockIssuancesServiceAutofillRequest | PlainMessage<StockIssuancesServiceAutofillRequest> | undefined, b: StockIssuancesServiceAutofillRequest | PlainMessage<StockIssuancesServiceAutofillRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are part of a standard response
 *
 * @generated from message Scailo.StockIssuance
 */
export declare class StockIssuance extends Message<StockIssuance> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this stock issuance
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
     * The status of this stock issuance
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this stock issuance
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The timestamp of when this stock issuance was marked as completed
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
     * The reference ID of the stock issuance
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
     * The location ID of where the record is created
     *
     * @generated from field: uint64 location_id = 15;
     */
    locationId: bigint;
    /**
     * The list of associated stock issuance items
     *
     * @generated from field: repeated Scailo.StockIssuanceItem list = 20;
     */
    list: StockIssuanceItem[];
    /**
     * The list of dynamic forms
     *
     * @generated from field: repeated Scailo.FormFieldDatum form_data = 30;
     */
    formData: FormFieldDatum[];
    constructor(data?: PartialMessage<StockIssuance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuance;
    static equals(a: StockIssuance | PlainMessage<StockIssuance> | undefined, b: StockIssuance | PlainMessage<StockIssuance> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to add an item to a stock issuance
 *
 * @generated from message Scailo.StockIssuancesServiceItemCreateRequest
 */
export declare class StockIssuancesServiceItemCreateRequest extends Message<StockIssuancesServiceItemCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the stock issuance ID
     *
     * @generated from field: uint64 stock_issuance_id = 10;
     */
    stockIssuanceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being admitted in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 13;
     */
    itemHash: string;
    constructor(data?: PartialMessage<StockIssuancesServiceItemCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuancesServiceItemCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceItemCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceItemCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceItemCreateRequest;
    static equals(a: StockIssuancesServiceItemCreateRequest | PlainMessage<StockIssuancesServiceItemCreateRequest> | undefined, b: StockIssuancesServiceItemCreateRequest | PlainMessage<StockIssuancesServiceItemCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to update an item in a stock issuance
 *
 * @generated from message Scailo.StockIssuancesServiceItemUpdateRequest
 */
export declare class StockIssuancesServiceItemUpdateRequest extends Message<StockIssuancesServiceItemUpdateRequest> {
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
     * The quantity (in cents) being admitted in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 13;
     */
    itemHash: string;
    constructor(data?: PartialMessage<StockIssuancesServiceItemUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuancesServiceItemUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceItemUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceItemUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceItemUpdateRequest;
    static equals(a: StockIssuancesServiceItemUpdateRequest | PlainMessage<StockIssuancesServiceItemUpdateRequest> | undefined, b: StockIssuancesServiceItemUpdateRequest | PlainMessage<StockIssuancesServiceItemUpdateRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that constitute an item associated to a stock issuance
 *
 * @generated from message Scailo.StockIssuanceItem
 */
export declare class StockIssuanceItem extends Message<StockIssuanceItem> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this stock issuance
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
     * Stores the stock issuance ID
     *
     * @generated from field: uint64 stock_issuance_id = 10;
     */
    stockIssuanceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    /**
     * The quantity (in cents) being admitted in internal unit of material
     *
     * @generated from field: uint64 internal_quantity = 12;
     */
    internalQuantity: bigint;
    /**
     * The hash of the inventory item
     *
     * @generated from field: string item_hash = 13;
     */
    itemHash: string;
    constructor(data?: PartialMessage<StockIssuanceItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuanceItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuanceItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuanceItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuanceItem;
    static equals(a: StockIssuanceItem | PlainMessage<StockIssuanceItem> | undefined, b: StockIssuanceItem | PlainMessage<StockIssuanceItem> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of stock issuances
 *
 * @generated from message Scailo.StockIssuancesList
 */
export declare class StockIssuancesList extends Message<StockIssuancesList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.StockIssuance list = 1;
     */
    list: StockIssuance[];
    constructor(data?: PartialMessage<StockIssuancesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuancesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesList;
    static equals(a: StockIssuancesList | PlainMessage<StockIssuancesList> | undefined, b: StockIssuancesList | PlainMessage<StockIssuancesList> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of stock issuance items
 *
 * @generated from message Scailo.StockIssuancesItemsList
 */
export declare class StockIssuancesItemsList extends Message<StockIssuancesItemsList> {
    /**
     * List of records
     *
     * @generated from field: repeated Scailo.StockIssuanceItem list = 1;
     */
    list: StockIssuanceItem[];
    constructor(data?: PartialMessage<StockIssuancesItemsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuancesItemsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesItemsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesItemsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesItemsList;
    static equals(a: StockIssuancesItemsList | PlainMessage<StockIssuancesItemsList> | undefined, b: StockIssuancesItemsList | PlainMessage<StockIssuancesItemsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the history of the record
 *
 * @generated from message Scailo.StockIssuanceItemHistoryRequest
 */
export declare class StockIssuanceItemHistoryRequest extends Message<StockIssuanceItemHistoryRequest> {
    /**
     * Stores the stock issuance ID
     *
     * @generated from field: uint64 stock_issuance_id = 10;
     */
    stockIssuanceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<StockIssuanceItemHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuanceItemHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuanceItemHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuanceItemHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuanceItemHistoryRequest;
    static equals(a: StockIssuanceItemHistoryRequest | PlainMessage<StockIssuanceItemHistoryRequest> | undefined, b: StockIssuanceItemHistoryRequest | PlainMessage<StockIssuanceItemHistoryRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are required to retrieve the info of a prospective stock issuance item
 *
 * @generated from message Scailo.StockIssuanceItemProspectiveInfoRequest
 */
export declare class StockIssuanceItemProspectiveInfoRequest extends Message<StockIssuanceItemProspectiveInfoRequest> {
    /**
     * Stores the stock issuance ID
     *
     * @generated from field: uint64 stock_issuance_id = 10;
     */
    stockIssuanceId: bigint;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 11;
     */
    familyId: bigint;
    constructor(data?: PartialMessage<StockIssuanceItemProspectiveInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuanceItemProspectiveInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuanceItemProspectiveInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuanceItemProspectiveInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuanceItemProspectiveInfoRequest;
    static equals(a: StockIssuanceItemProspectiveInfoRequest | PlainMessage<StockIssuanceItemProspectiveInfoRequest> | undefined, b: StockIssuanceItemProspectiveInfoRequest | PlainMessage<StockIssuanceItemProspectiveInfoRequest> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve the quantity that has already been added for the specific ref_from, ref_id and family_id
 *
 * @generated from message Scailo.StockIssuancesServiceAlreadyAddedQuantityForSourceRequest
 */
export declare class StockIssuancesServiceAlreadyAddedQuantityForSourceRequest extends Message<StockIssuancesServiceAlreadyAddedQuantityForSourceRequest> {
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
    constructor(data?: PartialMessage<StockIssuancesServiceAlreadyAddedQuantityForSourceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuancesServiceAlreadyAddedQuantityForSourceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceAlreadyAddedQuantityForSourceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceAlreadyAddedQuantityForSourceRequest;
    static equals(a: StockIssuancesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<StockIssuancesServiceAlreadyAddedQuantityForSourceRequest> | undefined, b: StockIssuancesServiceAlreadyAddedQuantityForSourceRequest | PlainMessage<StockIssuancesServiceAlreadyAddedQuantityForSourceRequest> | undefined): boolean;
}
/**
 *
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.StockIssuancesServicePaginationReq
 */
export declare class StockIssuancesServicePaginationReq extends Message<StockIssuancesServicePaginationReq> {
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
     * @generated from field: Scailo.STOCK_ISSUANCE_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_ISSUANCE_SORT_KEY;
    /**
     * The status of this stock issuance
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    constructor(data?: PartialMessage<StockIssuancesServicePaginationReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuancesServicePaginationReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServicePaginationReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServicePaginationReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServicePaginationReq;
    static equals(a: StockIssuancesServicePaginationReq | PlainMessage<StockIssuancesServicePaginationReq> | undefined, b: StockIssuancesServicePaginationReq | PlainMessage<StockIssuancesServicePaginationReq> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.StockIssuancesServicePaginationResponse
 */
export declare class StockIssuancesServicePaginationResponse extends Message<StockIssuancesServicePaginationResponse> {
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
     * @generated from field: repeated Scailo.StockIssuance payload = 4;
     */
    payload: StockIssuance[];
    constructor(data?: PartialMessage<StockIssuancesServicePaginationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuancesServicePaginationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServicePaginationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServicePaginationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServicePaginationResponse;
    static equals(a: StockIssuancesServicePaginationResponse | PlainMessage<StockIssuancesServicePaginationResponse> | undefined, b: StockIssuancesServicePaginationResponse | PlainMessage<StockIssuancesServicePaginationResponse> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.StockIssuancesServiceFilterReq
 */
export declare class StockIssuancesServiceFilterReq extends Message<StockIssuancesServiceFilterReq> {
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
     * @generated from field: Scailo.STOCK_ISSUANCE_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_ISSUANCE_SORT_KEY;
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
     * The status of this stock issuance
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
     * The reference ID of the stock issuance
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
    constructor(data?: PartialMessage<StockIssuancesServiceFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuancesServiceFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceFilterReq;
    static equals(a: StockIssuancesServiceFilterReq | PlainMessage<StockIssuancesServiceFilterReq> | undefined, b: StockIssuancesServiceFilterReq | PlainMessage<StockIssuancesServiceFilterReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a count search
 *
 * @generated from message Scailo.StockIssuancesServiceCountReq
 */
export declare class StockIssuancesServiceCountReq extends Message<StockIssuancesServiceCountReq> {
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
     * The status of this stock issuance
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
     * The reference ID of the stock issuance
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
    constructor(data?: PartialMessage<StockIssuancesServiceCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuancesServiceCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceCountReq;
    static equals(a: StockIssuancesServiceCountReq | PlainMessage<StockIssuancesServiceCountReq> | undefined, b: StockIssuancesServiceCountReq | PlainMessage<StockIssuancesServiceCountReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.StockIssuancesServiceSearchAllReq
 */
export declare class StockIssuancesServiceSearchAllReq extends Message<StockIssuancesServiceSearchAllReq> {
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
     * @generated from field: Scailo.STOCK_ISSUANCE_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_ISSUANCE_SORT_KEY;
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
    constructor(data?: PartialMessage<StockIssuancesServiceSearchAllReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuancesServiceSearchAllReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServiceSearchAllReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServiceSearchAllReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServiceSearchAllReq;
    static equals(a: StockIssuancesServiceSearchAllReq | PlainMessage<StockIssuancesServiceSearchAllReq> | undefined, b: StockIssuancesServiceSearchAllReq | PlainMessage<StockIssuancesServiceSearchAllReq> | undefined): boolean;
}
/**
 *
 * Describes the request payload to retrieve approved or unapproved items.
 *
 * @generated from message Scailo.StockIssuanceItemsSearchRequest
 */
export declare class StockIssuanceItemsSearchRequest extends Message<StockIssuanceItemsSearchRequest> {
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
     * @generated from field: Scailo.STOCK_ISSUANCE_ITEM_SORT_KEY sort_key = 5;
     */
    sortKey: STOCK_ISSUANCE_ITEM_SORT_KEY;
    /**
     * The entity UUID that is to be used to filter records
     *
     * @generated from field: string entity_uuid = 6;
     */
    entityUuid: string;
    /**
     * The status of the items
     *
     * @generated from field: Scailo.STOCK_ISSUANCE_ITEM_STATUS status = 7;
     */
    status: STOCK_ISSUANCE_ITEM_STATUS;
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
     * The ID of the stock issuance
     *
     * @generated from field: uint64 stock_issuance_id = 20;
     */
    stockIssuanceId: bigint;
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
    constructor(data?: PartialMessage<StockIssuanceItemsSearchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuanceItemsSearchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuanceItemsSearchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuanceItemsSearchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuanceItemsSearchRequest;
    static equals(a: StockIssuanceItemsSearchRequest | PlainMessage<StockIssuanceItemsSearchRequest> | undefined, b: StockIssuanceItemsSearchRequest | PlainMessage<StockIssuanceItemsSearchRequest> | undefined): boolean;
}
/**
 *
 * Describes the response to a pagination items request
 *
 * @generated from message Scailo.StockIssuancesServicePaginatedItemsResponse
 */
export declare class StockIssuancesServicePaginatedItemsResponse extends Message<StockIssuancesServicePaginatedItemsResponse> {
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
     * @generated from field: repeated Scailo.StockIssuanceItem payload = 4;
     */
    payload: StockIssuanceItem[];
    constructor(data?: PartialMessage<StockIssuancesServicePaginatedItemsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.StockIssuancesServicePaginatedItemsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StockIssuancesServicePaginatedItemsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StockIssuancesServicePaginatedItemsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StockIssuancesServicePaginatedItemsResponse;
    static equals(a: StockIssuancesServicePaginatedItemsResponse | PlainMessage<StockIssuancesServicePaginatedItemsResponse> | undefined, b: StockIssuancesServicePaginatedItemsResponse | PlainMessage<StockIssuancesServicePaginatedItemsResponse> | undefined): boolean;
}
//# sourceMappingURL=stock_issuances.scailo_pb.d.ts.map