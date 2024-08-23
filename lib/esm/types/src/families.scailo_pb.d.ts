import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ApprovalMetadata, BOOL_FILTER, EmployeeMetadata, LogbookLogConciseSLC, SORT_ORDER, STANDARD_LIFECYCLE_STATUS } from "./base.scailo_pb.js";
/**
 *
 * Stores the available family types
 *
 * @generated from enum Scailo.FAMILY_TYPE
 */
export declare enum FAMILY_TYPE {
    /**
     * Denotes any family type (only used for filter and search queries, when family type needs to be disregarded)
     *
     * @generated from enum value: FAMILY_TYPE_ANY_UNSPECIFIED = 0;
     */
    FAMILY_TYPE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes a component (a family that can be sold, bought, and manufactured - this is a general purpose family)
     *
     * @generated from enum value: FAMILY_TYPE_COMPONENT = 1;
     */
    FAMILY_TYPE_COMPONENT = 1,
    /**
     * Denotes equipment (a family that can be used within manufacturing process as a capex item, such as machines)
     *
     * @generated from enum value: FAMILY_TYPE_EQUIPMENT = 2;
     */
    FAMILY_TYPE_EQUIPMENT = 2,
    /**
     * Denotes feedstock (a family that will be used as raw material within manufacturing process, and will be consumed)
     *
     * @generated from enum value: FAMILY_TYPE_FEEDSTOCK = 3;
     */
    FAMILY_TYPE_FEEDSTOCK = 3,
    /**
     * Denotes infrastructure (a family that can be used for any non-manufacturing purpose. Examples include cars, rtubelights, computers, etc.)
     *
     * @generated from enum value: FAMILY_TYPE_INFRASTRUCTURE = 4;
     */
    FAMILY_TYPE_INFRASTRUCTURE = 4,
    /**
     * Denotes merchandise (a family that can only be bought and sold, and will not be a part of any value addition processes)
     *
     * @generated from enum value: FAMILY_TYPE_MERCHANDISE = 5;
     */
    FAMILY_TYPE_MERCHANDISE = 5,
    /**
     * Denotes product (a family that is the final outcome of a manufacturing process. Can only be sold, but not purchased)
     *
     * @generated from enum value: FAMILY_TYPE_PRODUCT = 6;
     */
    FAMILY_TYPE_PRODUCT = 6,
    /**
     * Denotes service (a family that deals exclusively with services, and no goods)
     *
     * @generated from enum value: FAMILY_TYPE_SERVICE = 7;
     */
    FAMILY_TYPE_SERVICE = 7
}
/**
 *
 * Stores the available consumption sequences
 *
 * @generated from enum Scailo.CONSUMPTION_SEQUENCE
 */
export declare enum CONSUMPTION_SEQUENCE {
    /**
     * Denotes any consumption sequence (only used for filter and search queries, when consumption sequence needs to be disregarded)
     *
     * @generated from enum value: CONSUMPTION_SEQUENCE_ANY_UNSPECIFIED = 0;
     */
    CONSUMPTION_SEQUENCE_ANY_UNSPECIFIED = 0,
    /**
     * Denotes first-in-first-out according to the intake timestamp
     *
     * @generated from enum value: CONSUMPTION_SEQUENCE_FIFO_INTAKE = 1;
     */
    CONSUMPTION_SEQUENCE_FIFO_INTAKE = 1,
    /**
     * Denotes first-in-first-out according to the shelf life
     *
     * @generated from enum value: CONSUMPTION_SEQUENCE_FIFO_SHELF_LIFE = 2;
     */
    CONSUMPTION_SEQUENCE_FIFO_SHELF_LIFE = 2,
    /**
     * Denotes first-in-first-out according to the warranty
     *
     * @generated from enum value: CONSUMPTION_SEQUENCE_FIFO_WARRANTY = 3;
     */
    CONSUMPTION_SEQUENCE_FIFO_WARRANTY = 3,
    /**
     * Denotes last-in-first-out according to the intake timestamp
     *
     * @generated from enum value: CONSUMPTION_SEQUENCE_LIFO_INTAKE = 4;
     */
    CONSUMPTION_SEQUENCE_LIFO_INTAKE = 4,
    /**
     * Denotes last-in-first-out according to the shelf life
     *
     * @generated from enum value: CONSUMPTION_SEQUENCE_LIFO_SHELF_LIFE = 5;
     */
    CONSUMPTION_SEQUENCE_LIFO_SHELF_LIFE = 5,
    /**
     * Denotes last-in-first-out according to the warranty
     *
     * @generated from enum value: CONSUMPTION_SEQUENCE_LIFO_WARRANTY = 6;
     */
    CONSUMPTION_SEQUENCE_LIFO_WARRANTY = 6
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.FAMILY_SORT_KEY
 */
export declare enum FAMILY_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: FAMILY_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    FAMILY_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: FAMILY_SORT_KEY_CREATED_AT = 1;
     */
    FAMILY_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: FAMILY_SORT_KEY_MODIFIED_AT = 2;
     */
    FAMILY_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the approved on timestamp
     *
     * @generated from enum value: FAMILY_SORT_KEY_APPROVED_ON = 3;
     */
    FAMILY_SORT_KEY_APPROVED_ON = 3,
    /**
     * Fetch ordered results by the approved by field
     *
     * @generated from enum value: FAMILY_SORT_KEY_APPROVED_BY = 4;
     */
    FAMILY_SORT_KEY_APPROVED_BY = 4,
    /**
     * Fetch ordered results by the approver's role ID
     *
     * @generated from enum value: FAMILY_SORT_KEY_APPROVER_ROLE_ID = 5;
     */
    FAMILY_SORT_KEY_APPROVER_ROLE_ID = 5,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: FAMILY_SORT_KEY_NAME = 10;
     */
    FAMILY_SORT_KEY_NAME = 10,
    /**
     * Fetch ordered results by the drawing number
     *
     * @generated from enum value: FAMILY_SORT_KEY_DRAWING_NUMBER = 11;
     */
    FAMILY_SORT_KEY_DRAWING_NUMBER = 11,
    /**
     * Fetch ordered results by the code
     *
     * @generated from enum value: FAMILY_SORT_KEY_CODE = 12;
     */
    FAMILY_SORT_KEY_CODE = 12,
    /**
     * Fetch ordered results by the unit quantity
     *
     * @generated from enum value: FAMILY_SORT_KEY_UNIT_QUANTITY = 13;
     */
    FAMILY_SORT_KEY_UNIT_QUANTITY = 13,
    /**
     * Fetch ordered results by the price
     *
     * @generated from enum value: FAMILY_SORT_KEY_PRICE = 14;
     */
    FAMILY_SORT_KEY_PRICE = 14,
    /**
     * Fetch ordered results by the amendment count
     *
     * @generated from enum value: FAMILY_SORT_KEY_AMENDMENT_COUNT = 15;
     */
    FAMILY_SORT_KEY_AMENDMENT_COUNT = 15
}
/**
 *
 * Describes the message consisting of the list of family types
 *
 * @generated from message Scailo.FamilyTypesList
 */
export declare class FamilyTypesList extends Message<FamilyTypesList> {
    /**
     * List of family types
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
 * Describes the parameters necessary to create a record
 *
 * @generated from message Scailo.FamiliesServiceCreateRequest
 */
export declare class FamiliesServiceCreateRequest extends Message<FamiliesServiceCreateRequest> {
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
     * The name of the family
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The name of the family that is to be used on prints
     *
     * @generated from field: string print_name = 11;
     */
    printName: string;
    /**
     * The unique code that represents the family
     *
     * @generated from field: string code = 12;
     */
    code: string;
    /**
     * The drawing number of the family
     *
     * @generated from field: string drawing_number = 13;
     */
    drawingNumber: string;
    /**
     * The description of the family
     *
     * @generated from field: string description = 14;
     */
    description: string;
    /**
     * The type of the family
     *
     * @generated from field: Scailo.FAMILY_TYPE family_type = 15;
     */
    familyType: FAMILY_TYPE;
    /**
     * The HSN/SAC code of the family
     *
     * @generated from field: string hsn_sac_code = 16;
     */
    hsnSacCode: string;
    /**
     * Stores the ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 17;
     */
    uomId: bigint;
    /**
     * Stores the unit quantity
     *
     * @generated from field: uint64 unit_quantity = 18;
     */
    unitQuantity: bigint;
    /**
     * Stores the ID of the parent family
     *
     * @generated from field: uint64 parent_id = 19;
     */
    parentId: bigint;
    /**
     * Stores if the family is a leaf family
     *
     * @generated from field: bool is_leaf = 20;
     */
    isLeaf: boolean;
    /**
     * Stores the ID of the ledger
     *
     * @generated from field: uint64 ledger_id = 21;
     */
    ledgerId: bigint;
    /**
     * Stores the ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 23;
     */
    taxGroupId: bigint;
    /**
     * Stores the unit price
     *
     * @generated from field: uint64 price = 26;
     */
    price: bigint;
    /**
     * Stores the minimum stock to maintain
     *
     * @generated from field: uint64 min_stock_to_maintain = 27;
     */
    minStockToMaintain: bigint;
    /**
     * Stores the consumption sequence
     *
     * @generated from field: Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 28;
     */
    consumptionSequence: CONSUMPTION_SEQUENCE;
    /**
     * Stores the list of label IDs
     *
     * @generated from field: repeated uint64 label_ids = 30;
     */
    labelIds: bigint[];
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
 * Describes the parameters necessary to update a record
 *
 * @generated from message Scailo.FamiliesServiceUpdateRequest
 */
export declare class FamiliesServiceUpdateRequest extends Message<FamiliesServiceUpdateRequest> {
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
     * Optional boolean value that denotes if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)
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
     * The name of the family
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The name of the family that is to be used on prints
     *
     * @generated from field: string print_name = 11;
     */
    printName: string;
    /**
     * The unique code that represents the family
     *
     * @generated from field: string code = 12;
     */
    code: string;
    /**
     * The drawing number of the family
     *
     * @generated from field: string drawing_number = 13;
     */
    drawingNumber: string;
    /**
     * The description of the family
     *
     * @generated from field: string description = 14;
     */
    description: string;
    /**
     * The type of the family
     *
     * @generated from field: Scailo.FAMILY_TYPE family_type = 15;
     */
    familyType: FAMILY_TYPE;
    /**
     * The HSN/SAC code of the family
     *
     * @generated from field: string hsn_sac_code = 16;
     */
    hsnSacCode: string;
    /**
     * Stores the ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 17;
     */
    uomId: bigint;
    /**
     * Stores the unit quantity
     *
     * @generated from field: uint64 unit_quantity = 18;
     */
    unitQuantity: bigint;
    /**
     * Stores the ID of the parent family
     *
     * @generated from field: uint64 parent_id = 19;
     */
    parentId: bigint;
    /**
     * Stores if the family is a leaf family
     *
     * @generated from field: bool is_leaf = 20;
     */
    isLeaf: boolean;
    /**
     * Stores the ID of the ledger
     *
     * @generated from field: uint64 ledger_id = 21;
     */
    ledgerId: bigint;
    /**
     * Stores the ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 23;
     */
    taxGroupId: bigint;
    /**
     * Stores the unit price
     *
     * @generated from field: uint64 price = 26;
     */
    price: bigint;
    /**
     * Stores the minimum stock to maintain
     *
     * @generated from field: uint64 min_stock_to_maintain = 27;
     */
    minStockToMaintain: bigint;
    /**
     * Stores the consumption sequence
     *
     * @generated from field: Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 28;
     */
    consumptionSequence: CONSUMPTION_SEQUENCE;
    /**
     * Stores the list of label IDs
     *
     * @generated from field: repeated uint64 label_ids = 30;
     */
    labelIds: bigint[];
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
 * Describes the parameters that are part of a family structure
 *
 * @generated from message Scailo.Family
 */
export declare class Family extends Message<Family> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this family
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
     * The status of this family
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;
     */
    status: STANDARD_LIFECYCLE_STATUS;
    /**
     * Stores the logs of every operation performed on this purchase order
     *
     * @generated from field: repeated Scailo.LogbookLogConciseSLC logs = 5;
     */
    logs: LogbookLogConciseSLC[];
    /**
     * The associated vault folder ID
     *
     * @generated from field: uint64 vault_folder_id = 9;
     */
    vaultFolderId: bigint;
    /**
     * The name of the family
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The name of the family that is to be used on prints
     *
     * @generated from field: string print_name = 11;
     */
    printName: string;
    /**
     * The unique code that represents the family
     *
     * @generated from field: string code = 12;
     */
    code: string;
    /**
     * The drawing number of the family
     *
     * @generated from field: string drawing_number = 13;
     */
    drawingNumber: string;
    /**
     * The description of the family
     *
     * @generated from field: string description = 14;
     */
    description: string;
    /**
     * The type of the family
     *
     * @generated from field: Scailo.FAMILY_TYPE family_type = 15;
     */
    familyType: FAMILY_TYPE;
    /**
     * The HSN/SAC code of the family
     *
     * @generated from field: string hsn_sac_code = 16;
     */
    hsnSacCode: string;
    /**
     * Stores the ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 17;
     */
    uomId: bigint;
    /**
     * Stores the unit quantity
     *
     * @generated from field: uint64 unit_quantity = 18;
     */
    unitQuantity: bigint;
    /**
     * Stores the ID of the parent family
     *
     * @generated from field: uint64 parent_id = 19;
     */
    parentId: bigint;
    /**
     * Stores if the family is a leaf family
     *
     * @generated from field: bool is_leaf = 20;
     */
    isLeaf: boolean;
    /**
     * Stores the ID of the ledger
     *
     * @generated from field: uint64 ledger_id = 21;
     */
    ledgerId: bigint;
    /**
     * Stores the ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 23;
     */
    taxGroupId: bigint;
    /**
     * Stores the unit price
     *
     * @generated from field: uint64 price = 26;
     */
    price: bigint;
    /**
     * Stores the minimum stock to maintain
     *
     * @generated from field: uint64 min_stock_to_maintain = 27;
     */
    minStockToMaintain: bigint;
    /**
     * Stores the consumption sequence
     *
     * @generated from field: Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 29;
     */
    consumptionSequence: CONSUMPTION_SEQUENCE;
    /**
     * Stores the list of label IDs
     *
     * @generated from field: repeated uint64 label_ids = 30;
     */
    labelIds: bigint[];
    /**
     * The number of times that the family has been amended
     *
     * @generated from field: uint64 amendment_count = 40;
     */
    amendmentCount: bigint;
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
 * Describes the message consisting of the list of families
 *
 * @generated from message Scailo.FamiliesList
 */
export declare class FamiliesList extends Message<FamiliesList> {
    /**
     * List of families
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
 * Describes a pagination request to retrieve records
 *
 * @generated from message Scailo.FamiliesServicePaginationReq
 */
export declare class FamiliesServicePaginationReq extends Message<FamiliesServicePaginationReq> {
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
     * @generated from field: Scailo.FAMILY_SORT_KEY sort_key = 5;
     */
    sortKey: FAMILY_SORT_KEY;
    /**
     * The status of this family
     *
     * @generated from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;
     */
    status: STANDARD_LIFECYCLE_STATUS;
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
 * Describes the response to a pagination request
 *
 * @generated from message Scailo.FamiliesServicePaginationResponse
 */
export declare class FamiliesServicePaginationResponse extends Message<FamiliesServicePaginationResponse> {
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
 * Describes the base request payload of a filter search
 *
 * @generated from message Scailo.FamiliesServiceFilterReq
 */
export declare class FamiliesServiceFilterReq extends Message<FamiliesServiceFilterReq> {
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
     * @generated from field: Scailo.FAMILY_SORT_KEY sort_key = 5;
     */
    sortKey: FAMILY_SORT_KEY;
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
     * The status of this family
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
     * The name of the family
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code that represents the family
     *
     * @generated from field: string code = 22;
     */
    code: string;
    /**
     * The drawing number of the family
     *
     * @generated from field: string drawing_number = 23;
     */
    drawingNumber: string;
    /**
     * The type of the family
     *
     * @generated from field: Scailo.FAMILY_TYPE family_type = 25;
     */
    familyType: FAMILY_TYPE;
    /**
     * The HSN/SAC code of the family
     *
     * @generated from field: string hsn_sac_code = 26;
     */
    hsnSacCode: string;
    /**
     * Stores the ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 27;
     */
    uomId: bigint;
    /**
     * Stores the unit quantity
     *
     * @generated from field: uint64 unit_quantity = 28;
     */
    unitQuantity: bigint;
    /**
     * Stores the ID of the parent family
     *
     * @generated from field: uint64 parent_id = 29;
     */
    parentId: bigint;
    /**
     * Filter with the given leaf property
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 30;
     */
    isLeaf: BOOL_FILTER;
    /**
     * Stores the ID of the ledger
     *
     * @generated from field: uint64 ledger_id = 31;
     */
    ledgerId: bigint;
    /**
     * Stores the ID of the QC group
     *
     * @generated from field: uint64 qc_group_id = 32;
     */
    qcGroupId: bigint;
    /**
     * Stores the ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 33;
     */
    taxGroupId: bigint;
    /**
     * Stores the consumption sequence
     *
     * @generated from field: Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 39;
     */
    consumptionSequence: CONSUMPTION_SEQUENCE;
    /**
     * Filter by families that are present in the given parent storage ID (and all the corresponding child storage IDs)
     *
     * @generated from field: uint64 parent_storage_id = 50;
     */
    parentStorageId: bigint;
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
 * Describes the request to count all families with the given criteria
 *
 * @generated from message Scailo.FamiliesServiceCountReq
 */
export declare class FamiliesServiceCountReq extends Message<FamiliesServiceCountReq> {
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
     * The status of this family
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
     * The name of the family
     *
     * @generated from field: string name = 20;
     */
    name: string;
    /**
     * The unique code that represents the family
     *
     * @generated from field: string code = 22;
     */
    code: string;
    /**
     * The drawing number of the family
     *
     * @generated from field: string drawing_number = 23;
     */
    drawingNumber: string;
    /**
     * The type of the family
     *
     * @generated from field: Scailo.FAMILY_TYPE family_type = 25;
     */
    familyType: FAMILY_TYPE;
    /**
     * The HSN/SAC code of the family
     *
     * @generated from field: string hsn_sac_code = 26;
     */
    hsnSacCode: string;
    /**
     * Stores the ID of the associated unit of material
     *
     * @generated from field: uint64 uom_id = 27;
     */
    uomId: bigint;
    /**
     * Stores the unit quantity
     *
     * @generated from field: uint64 unit_quantity = 28;
     */
    unitQuantity: bigint;
    /**
     * Stores the ID of the parent family
     *
     * @generated from field: uint64 parent_id = 29;
     */
    parentId: bigint;
    /**
     * Filter with the given leaf property
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 30;
     */
    isLeaf: BOOL_FILTER;
    /**
     * Stores the ID of the ledger
     *
     * @generated from field: uint64 ledger_id = 31;
     */
    ledgerId: bigint;
    /**
     * Stores the ID of the QC group
     *
     * @generated from field: uint64 qc_group_id = 32;
     */
    qcGroupId: bigint;
    /**
     * Stores the ID of the tax group
     *
     * @generated from field: uint64 tax_group_id = 33;
     */
    taxGroupId: bigint;
    /**
     * Stores the consumption sequence
     *
     * @generated from field: Scailo.CONSUMPTION_SEQUENCE consumption_sequence = 39;
     */
    consumptionSequence: CONSUMPTION_SEQUENCE;
    /**
     * Filter by families that are present in the given parent storage ID (and all the corresponding child storage IDs)
     *
     * @generated from field: uint64 parent_storage_id = 50;
     */
    parentStorageId: bigint;
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
 * Describes the request payload for performing a generic search operation on records
 *
 * @generated from message Scailo.FamiliesServiceSearchAllReq
 */
export declare class FamiliesServiceSearchAllReq extends Message<FamiliesServiceSearchAllReq> {
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
     * @generated from field: Scailo.FAMILY_SORT_KEY sort_key = 5;
     */
    sortKey: FAMILY_SORT_KEY;
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
     * The type of the family
     *
     * @generated from field: Scailo.FAMILY_TYPE family_type = 25;
     */
    familyType: FAMILY_TYPE;
    /**
     * The ID of the associated non-leaf parent family
     *
     * @generated from field: uint64 parent_id = 29;
     */
    parentId: bigint;
    /**
     * Filter with the given leaf property
     *
     * @generated from field: Scailo.BOOL_FILTER is_leaf = 30;
     */
    isLeaf: BOOL_FILTER;
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
 * Describes the parameters necessary to create a family storage
 *
 * @generated from message Scailo.FamiliesServiceStorageCreateRequest
 */
export declare class FamiliesServiceStorageCreateRequest extends Message<FamiliesServiceStorageCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     * Stores the storage ID
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
 * Describes the parameters that constitute a family storage
 *
 * @generated from message Scailo.FamilyStorage
 */
export declare class FamilyStorage extends Message<FamilyStorage> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this family
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
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     * Stores the storage ID
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
 * Describes the message consisting of the list of family storages
 *
 * @generated from message Scailo.FamilyStoragesList
 */
export declare class FamilyStoragesList extends Message<FamilyStoragesList> {
    /**
     * List of records
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
 * Describes the parameters necessary to check if a family unit conversion is available
 *
 * @generated from message Scailo.FamiliesServiceUnitConversionPresenceRequest
 */
export declare class FamiliesServiceUnitConversionPresenceRequest extends Message<FamiliesServiceUnitConversionPresenceRequest> {
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     * Stores the unit of material ID
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
 * Describes the parameters necessary to create a family unit conversion
 *
 * @generated from message Scailo.FamiliesServiceUnitConversionCreateRequest
 */
export declare class FamiliesServiceUnitConversionCreateRequest extends Message<FamiliesServiceUnitConversionCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     * Stores the unit of material ID
     *
     * @generated from field: uint64 uom_id = 11;
     */
    uomId: bigint;
    /**
     * Stores the factor
     *
     * @generated from field: uint64 factor = 12;
     */
    factor: bigint;
    /**
     * Stores the divisor
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
 * Describes the parameters that constitute a family unit conversion
 *
 * @generated from message Scailo.FamilyUnitConversion
 */
export declare class FamilyUnitConversion extends Message<FamilyUnitConversion> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this family
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
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     * Stores the unit of material ID
     *
     * @generated from field: uint64 uom_id = 11;
     */
    uomId: bigint;
    /**
     * Stores the factor
     *
     * @generated from field: uint64 factor = 12;
     */
    factor: bigint;
    /**
     * Stores the divisor
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
 * Describes the message consisting of the list of family unit conversions
 *
 * @generated from message Scailo.FamilyUnitConversionsList
 */
export declare class FamilyUnitConversionsList extends Message<FamilyUnitConversionsList> {
    /**
     * List of records
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
 * Describes the parameters necessary to create a family qc group
 *
 * @generated from message Scailo.FamiliesServiceQCGroupCreateRequest
 */
export declare class FamiliesServiceQCGroupCreateRequest extends Message<FamiliesServiceQCGroupCreateRequest> {
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 1;
     */
    userComment: string;
    /**
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     * Stores the qc group ID
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
 * Describes the parameters that constitute a family qc group
 *
 * @generated from message Scailo.FamilyQCGroup
 */
export declare class FamilyQCGroup extends Message<FamilyQCGroup> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this family
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
     * Stores the family ID
     *
     * @generated from field: uint64 family_id = 10;
     */
    familyId: bigint;
    /**
     * Stores the qc group ID
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
 * Describes the message consisting of the list of family qc groups
 *
 * @generated from message Scailo.FamilyQCGroupsList
 */
export declare class FamilyQCGroupsList extends Message<FamilyQCGroupsList> {
    /**
     * List of records
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
//# sourceMappingURL=families.scailo_pb.d.ts.map