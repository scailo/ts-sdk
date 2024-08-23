import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BOOL_FILTER, EmployeeMetadata, SORT_ORDER } from "./base.scailo_pb.js";
/**
 *
 * Describes the available references for permissions
 *
 * @generated from enum Scailo.VAULT_REF_FOR
 */
export declare enum VAULT_REF_FOR {
    /**
     * Ignore ref for (can only be used during search APIs)
     *
     * @generated from enum value: VAULT_REF_FOR_ANY_UNSPECIFIED = 0;
     */
    VAULT_REF_FOR_ANY_UNSPECIFIED = 0,
    /**
     * Permission refers to a file
     *
     * @generated from enum value: VAULT_REF_FOR_FILE = 1;
     */
    VAULT_REF_FOR_FILE = 1,
    /**
     * Permission refers to a folder
     *
     * @generated from enum value: VAULT_REF_FOR_FOLDER = 2;
     */
    VAULT_REF_FOR_FOLDER = 2
}
/**
 *
 * Describes the available permission codes
 *
 * @generated from enum Scailo.VAULT_PERMISSION_CODE
 */
export declare enum VAULT_PERMISSION_CODE {
    /**
     * Stores the bit weight of the view permission (value is 2^0 = 1)
     *
     * @generated from enum value: VAULT_PERMISSION_CODE_VIEW_UNSPECIFIED = 0;
     */
    VAULT_PERMISSION_CODE_VIEW_UNSPECIFIED = 0,
    /**
     * Stores the bit weight of the meta permission (value is 2^1 = 2)
     *
     * @generated from enum value: VAULT_PERMISSION_CODE_META = 1;
     */
    VAULT_PERMISSION_CODE_META = 1,
    /**
     * Stores the bit weight of the download permission (value is 2^2 = 4)
     *
     * @generated from enum value: VAULT_PERMISSION_CODE_DOWNLOAD = 2;
     */
    VAULT_PERMISSION_CODE_DOWNLOAD = 2,
    /**
     * Stores the bit weight of the add permission (value is 2^3 = 8)
     *
     * @generated from enum value: VAULT_PERMISSION_CODE_ADD = 3;
     */
    VAULT_PERMISSION_CODE_ADD = 3,
    /**
     * Stores the bit weight of the delete permission (value is 2^4 = 16)
     *
     * @generated from enum value: VAULT_PERMISSION_CODE_DELETE = 4;
     */
    VAULT_PERMISSION_CODE_DELETE = 4,
    /**
     * Stores the bit weight of the execute permission (value is 2^5 = 32)
     *
     * @generated from enum value: VAULT_PERMISSION_CODE_EXECUTE = 5;
     */
    VAULT_PERMISSION_CODE_EXECUTE = 5,
    /**
     * Stores the bit weight of all the available permissions (value is 2^6 = 64)
     *
     * @generated from enum value: VAULT_PERMISSION_CODE_ALL = 20;
     */
    VAULT_PERMISSION_CODE_ALL = 20
}
/**
 *
 * Describes the available sort keys
 *
 * @generated from enum Scailo.VAULT_SORT_KEY
 */
export declare enum VAULT_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: VAULT_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    VAULT_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: VAULT_SORT_KEY_CREATED_AT = 1;
     */
    VAULT_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the modified timestamp
     *
     * @generated from enum value: VAULT_SORT_KEY_MODIFIED_AT = 2;
     */
    VAULT_SORT_KEY_MODIFIED_AT = 2,
    /**
     * Fetch ordered results by the name
     *
     * @generated from enum value: VAULT_SORT_KEY_NAME = 10;
     */
    VAULT_SORT_KEY_NAME = 10
}
/**
 *
 * Describes the available access log operations
 *
 * @generated from enum Scailo.VAULT_ACCESS_LOG_OPERATION
 */
export declare enum VAULT_ACCESS_LOG_OPERATION {
    /**
     * Ignore operation (useful only for search APIs)
     *
     * @generated from enum value: VAULT_ACCESS_LOG_OPERATION_ANY_UNSPECIFIED = 0;
     */
    VAULT_ACCESS_LOG_OPERATION_ANY_UNSPECIFIED = 0,
    /**
     * Denotes that the user has created the resource
     *
     * @generated from enum value: VAULT_ACCESS_LOG_OPERATION_CREATE = 1;
     */
    VAULT_ACCESS_LOG_OPERATION_CREATE = 1,
    /**
     * Denotes that the user has moved the resource
     *
     * @generated from enum value: VAULT_ACCESS_LOG_OPERATION_MOVE = 2;
     */
    VAULT_ACCESS_LOG_OPERATION_MOVE = 2,
    /**
     * Denotes that the user has renamed the resource
     *
     * @generated from enum value: VAULT_ACCESS_LOG_OPERATION_RENAME = 3;
     */
    VAULT_ACCESS_LOG_OPERATION_RENAME = 3,
    /**
     * Denotes that the user has deleted the resource
     *
     * @generated from enum value: VAULT_ACCESS_LOG_OPERATION_DELETE = 4;
     */
    VAULT_ACCESS_LOG_OPERATION_DELETE = 4,
    /**
     * Denotes that the user has downloaded the resource
     *
     * @generated from enum value: VAULT_ACCESS_LOG_OPERATION_DOWNLOAD = 5;
     */
    VAULT_ACCESS_LOG_OPERATION_DOWNLOAD = 5,
    /**
     * Denotes that the user has uploaded the resource
     *
     * @generated from enum value: VAULT_ACCESS_LOG_OPERATION_UPLOAD = 6;
     */
    VAULT_ACCESS_LOG_OPERATION_UPLOAD = 6,
    /**
     * Denotes that the user has begun unzipping the resource
     *
     * @generated from enum value: VAULT_ACCESS_LOG_OPERATION_UNZIP = 7;
     */
    VAULT_ACCESS_LOG_OPERATION_UNZIP = 7,
    /**
     * Denotes that the user has marked the resource as persistent
     *
     * @generated from enum value: VAULT_ACCESS_LOG_OPERATION_PERSISTENT = 8;
     */
    VAULT_ACCESS_LOG_OPERATION_PERSISTENT = 8,
    /**
     * Denotes that the user is updating the permissions to a resource
     *
     * @generated from enum value: VAULT_ACCESS_LOG_OPERATION_PERMISSIONS = 9;
     */
    VAULT_ACCESS_LOG_OPERATION_PERMISSIONS = 9,
    /**
     * Denotes that the user is executing the resource (most likely a GiX app)
     *
     * @generated from enum value: VAULT_ACCESS_LOG_OPERATION_EXECUTE = 10;
     */
    VAULT_ACCESS_LOG_OPERATION_EXECUTE = 10
}
/**
 *
 * Describes the parameters of a permission related to a vault file or folder
 *
 * @generated from message Scailo.VaultPermission
 */
export declare class VaultPermission extends Message<VaultPermission> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this user
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores the reference for which this permission is applicable
     *
     * @generated from field: Scailo.VAULT_REF_FOR ref_for = 10;
     */
    refFor: VAULT_REF_FOR;
    /**
     * Stores the ID of the underlying file or folder that this permission if applicable for
     *
     * @generated from field: uint64 ref_id = 11;
     */
    refId: bigint;
    /**
     * Stores the ID of the role
     *
     * @generated from field: uint64 role_id = 12;
     */
    roleId: bigint;
    /**
     * Stores the applicable permissions
     *
     * @generated from field: uint64 permission_code = 13;
     */
    permissionCode: bigint;
    constructor(data?: PartialMessage<VaultPermission>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultPermission";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultPermission;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultPermission;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultPermission;
    static equals(a: VaultPermission | PlainMessage<VaultPermission> | undefined, b: VaultPermission | PlainMessage<VaultPermission> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to create a vault permission
 *
 * @generated from message Scailo.VaultPermissionAddRequest
 */
export declare class VaultPermissionAddRequest extends Message<VaultPermissionAddRequest> {
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
     * Stores the UUID of the underlying file or folder that this permission if applicable for
     *
     * @generated from field: string ref_uuid = 11;
     */
    refUuid: string;
    /**
     * Stores the ID of the role
     *
     * @generated from field: uint64 role_id = 12;
     */
    roleId: bigint;
    /**
     * Stores the applicable permissions
     *
     * @generated from field: uint64 permission_code = 13;
     */
    permissionCode: bigint;
    constructor(data?: PartialMessage<VaultPermissionAddRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultPermissionAddRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultPermissionAddRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultPermissionAddRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultPermissionAddRequest;
    static equals(a: VaultPermissionAddRequest | PlainMessage<VaultPermissionAddRequest> | undefined, b: VaultPermissionAddRequest | PlainMessage<VaultPermissionAddRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters required to modify a vault permission
 *
 * @generated from message Scailo.VaultPermissionModifyRequest
 */
export declare class VaultPermissionModifyRequest extends Message<VaultPermissionModifyRequest> {
    /**
     * The UUID of the permission
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Stores any comment that the user might add during this operation
     *
     * @generated from field: string user_comment = 2;
     */
    userComment: string;
    /**
     * Stores the applicable permissions
     *
     * @generated from field: uint64 permission_code = 13;
     */
    permissionCode: bigint;
    constructor(data?: PartialMessage<VaultPermissionModifyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultPermissionModifyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultPermissionModifyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultPermissionModifyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultPermissionModifyRequest;
    static equals(a: VaultPermissionModifyRequest | PlainMessage<VaultPermissionModifyRequest> | undefined, b: VaultPermissionModifyRequest | PlainMessage<VaultPermissionModifyRequest> | undefined): boolean;
}
/**
 *
 * Describes the resources section of a GiX app
 *
 * @generated from message Scailo.GixResources
 */
export declare class GixResources extends Message<GixResources> {
    /**
     * Stores the entry point of the GiX app
     *
     * @generated from field: string html_entry = 1 [json_name = "html_entry"];
     */
    htmlEntry: string;
    /**
     * Stores the list of logos that are available
     *
     * @generated from field: repeated string logos = 2;
     */
    logos: string[];
    /**
     * Stores the list of external APIs that need to be accessible by the GiX app
     *
     * @generated from field: repeated string external_apis = 3 [json_name = "external_apis"];
     */
    externalApis: string[];
    constructor(data?: PartialMessage<GixResources>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GixResources";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GixResources;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GixResources;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GixResources;
    static equals(a: GixResources | PlainMessage<GixResources> | undefined, b: GixResources | PlainMessage<GixResources> | undefined): boolean;
}
/**
 *
 * Describes the manifest file of a GiX app. Stores the attributes that can be a part of the MANIFEST.yaml file, that is present in the root folder of a GiX app
 *
 * @generated from message Scailo.GiXManifest
 */
export declare class GiXManifest extends Message<GiXManifest> {
    /**
     * Stores the manifest version
     *
     * @generated from field: string manifest_version = 1 [json_name = "manifest_version"];
     */
    manifestVersion: string;
    /**
     * Stores the application version
     *
     * @generated from field: string app_version = 2 [json_name = "app_version"];
     */
    appVersion: string;
    /**
     * Stores the name of the application
     *
     * @generated from field: string app_name = 3 [json_name = "app_name"];
     */
    appName: string;
    /**
     * Stores the unique identifier for the application
     *
     * @generated from field: string app_unique_identifier = 4 [json_name = "app_unique_identifier"];
     */
    appUniqueIdentifier: string;
    /**
     * Stores the minimum version of Genesis that the application supports
     *
     * @generated from field: string min_genesis_version = 5 [json_name = "min_genesis_version"];
     */
    minGenesisVersion: string;
    /**
     * Stores the manimum version of Genesis that the application supports
     *
     * @generated from field: string max_genesis_version = 6 [json_name = "max_genesis_version"];
     */
    maxGenesisVersion: string;
    /**
     * Stores the resources of the GiX application
     *
     * @generated from field: Scailo.GixResources resources = 7;
     */
    resources?: GixResources;
    constructor(data?: PartialMessage<GiXManifest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GiXManifest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GiXManifest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GiXManifest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GiXManifest;
    static equals(a: GiXManifest | PlainMessage<GiXManifest> | undefined, b: GiXManifest | PlainMessage<GiXManifest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are a part of each vault app execution (GiX app execution)
 *
 * @generated from message Scailo.GiXAppRun
 */
export declare class GiXAppRun extends Message<GiXAppRun> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this user
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores the ID of the file that is being executed
     *
     * @generated from field: uint64 vault_file_id = 10;
     */
    vaultFileId: bigint;
    /**
     * Stores the ID of the version of the file that is being executed
     *
     * @generated from field: uint64 vault_file_version_id = 11;
     */
    vaultFileVersionId: bigint;
    /**
     * Stores the unique identifier of the application
     *
     * @generated from field: string app_unique_identifier = 12;
     */
    appUniqueIdentifier: string;
    /**
     * Stores the path of the extracted file on disk, from where static files will be served
     *
     * @generated from field: string extracted_path = 13;
     */
    extractedPath: string;
    /**
     * Stores the IP address from where the app was executed
     *
     * @generated from field: string ip_addr = 14;
     */
    ipAddr: string;
    /**
     * Stores the manifest of the GiX app
     *
     * @generated from field: Scailo.GiXManifest manifest = 15;
     */
    manifest?: GiXManifest;
    /**
     * Stores the username of the user who is running the app
     *
     * @generated from field: string run_by = 16;
     */
    runBy: string;
    /**
     * Stores the application version
     *
     * @generated from field: string app_version = 30;
     */
    appVersion: string;
    /**
     * Stores the name of the application
     *
     * @generated from field: string app_name = 31;
     */
    appName: string;
    /**
     * Stores the endpoint of the application execution
     *
     * @generated from field: string app_endpoint = 40;
     */
    appEndpoint: string;
    constructor(data?: PartialMessage<GiXAppRun>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GiXAppRun";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GiXAppRun;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GiXAppRun;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GiXAppRun;
    static equals(a: GiXAppRun | PlainMessage<GiXAppRun> | undefined, b: GiXAppRun | PlainMessage<GiXAppRun> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of gix app runs
 *
 * @generated from message Scailo.GiXAppRunsList
 */
export declare class GiXAppRunsList extends Message<GiXAppRunsList> {
    /**
     * List of runs
     *
     * @generated from field: repeated Scailo.GiXAppRun list = 1;
     */
    list: GiXAppRun[];
    constructor(data?: PartialMessage<GiXAppRunsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GiXAppRunsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GiXAppRunsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GiXAppRunsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GiXAppRunsList;
    static equals(a: GiXAppRunsList | PlainMessage<GiXAppRunsList> | undefined, b: GiXAppRunsList | PlainMessage<GiXAppRunsList> | undefined): boolean;
}
/**
 *
 * Describes the request payload of a count filter for app runs
 *
 * @generated from message Scailo.GiXAppRunCountReq
 */
export declare class GiXAppRunCountReq extends Message<GiXAppRunCountReq> {
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
     * The UUID of the file
     *
     * @generated from field: string vault_file_uuid = 20;
     */
    vaultFileUuid: string;
    /**
     * The UUID of the version
     *
     * --------------------------------------------------------
     *
     * @generated from field: string vault_file_version_uuid = 21;
     */
    vaultFileVersionUuid: string;
    /**
     * The username of the user who executed the app
     *
     * @generated from field: string run_by = 30;
     */
    runBy: string;
    constructor(data?: PartialMessage<GiXAppRunCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GiXAppRunCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GiXAppRunCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GiXAppRunCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GiXAppRunCountReq;
    static equals(a: GiXAppRunCountReq | PlainMessage<GiXAppRunCountReq> | undefined, b: GiXAppRunCountReq | PlainMessage<GiXAppRunCountReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search for gix app runs
 *
 * @generated from message Scailo.GiXAppRunFilterReq
 */
export declare class GiXAppRunFilterReq extends Message<GiXAppRunFilterReq> {
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
     * // The sort order that is to be used to fetch the pagination response
     * SORT_ORDER sort_order = 4;
     * // The sort key that is to be used to fetch the pagination response
     * VAULT_SORT_KEY sort_key = 5;
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
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
     * The UUID of the file
     *
     * @generated from field: string vault_file_uuid = 20;
     */
    vaultFileUuid: string;
    /**
     * The UUID of the version
     *
     * --------------------------------------------------------
     *
     * @generated from field: string vault_file_version_uuid = 21;
     */
    vaultFileVersionUuid: string;
    /**
     * The username of the user who executed the app
     *
     * @generated from field: string run_by = 30;
     */
    runBy: string;
    constructor(data?: PartialMessage<GiXAppRunFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.GiXAppRunFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GiXAppRunFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GiXAppRunFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GiXAppRunFilterReq;
    static equals(a: GiXAppRunFilterReq | PlainMessage<GiXAppRunFilterReq> | undefined, b: GiXAppRunFilterReq | PlainMessage<GiXAppRunFilterReq> | undefined): boolean;
}
/**
 * @generated from message Scailo.VaultSearchReq
 */
export declare class VaultSearchReq extends Message<VaultSearchReq> {
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
     * @generated from field: Scailo.VAULT_SORT_KEY sort_key = 5;
     */
    sortKey: VAULT_SORT_KEY;
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
     * Limit the search to the given ref_for
     *
     * @generated from field: Scailo.VAULT_REF_FOR ref_for = 9;
     */
    refFor: VAULT_REF_FOR;
    /**
     * Limit the search to an optional folder
     *
     * @generated from field: string folder_uuid = 10;
     */
    folderUuid: string;
    /**
     * Describes the key with which the search operation needs to be performed
     *
     * @generated from field: string search_key = 11;
     */
    searchKey: string;
    constructor(data?: PartialMessage<VaultSearchReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultSearchReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultSearchReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultSearchReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultSearchReq;
    static equals(a: VaultSearchReq | PlainMessage<VaultSearchReq> | undefined, b: VaultSearchReq | PlainMessage<VaultSearchReq> | undefined): boolean;
}
/**
 *
 * Describes the search information of vault files and folders into a single message
 *
 * @generated from message Scailo.VaultSearchResponse
 */
export declare class VaultSearchResponse extends Message<VaultSearchResponse> {
    /**
     * The search name
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * The type of the file
     *
     * @generated from field: Scailo.VAULT_REF_FOR type = 2;
     */
    type: VAULT_REF_FOR;
    /**
     * The ID of the element
     *
     * @generated from field: uint64 element_id = 3;
     */
    elementId: bigint;
    /**
     * The UUID of the element
     *
     * @generated from field: string element_uuid = 4;
     */
    elementUuid: string;
    /**
     * The full path of the folder or the file
     *
     * @generated from field: string path = 5;
     */
    path: string;
    /**
     * The link to the parent folder
     *
     * @generated from field: string parent_folder_uuid = 6;
     */
    parentFolderUuid: string;
    constructor(data?: PartialMessage<VaultSearchResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultSearchResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultSearchResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultSearchResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultSearchResponse;
    static equals(a: VaultSearchResponse | PlainMessage<VaultSearchResponse> | undefined, b: VaultSearchResponse | PlainMessage<VaultSearchResponse> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of vault search response
 *
 * @generated from message Scailo.VaultSearchResponsesList
 */
export declare class VaultSearchResponsesList extends Message<VaultSearchResponsesList> {
    /**
     * List of search responses
     *
     * @generated from field: repeated Scailo.VaultSearchResponse list = 1;
     */
    list: VaultSearchResponse[];
    constructor(data?: PartialMessage<VaultSearchResponsesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultSearchResponsesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultSearchResponsesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultSearchResponsesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultSearchResponsesList;
    static equals(a: VaultSearchResponsesList | PlainMessage<VaultSearchResponsesList> | undefined, b: VaultSearchResponsesList | PlainMessage<VaultSearchResponsesList> | undefined): boolean;
}
/**
 *
 * Describes the message to test if the file or folder already exists in the given folder UUID
 *
 * @generated from message Scailo.VaultDuplicateCheckReq
 */
export declare class VaultDuplicateCheckReq extends Message<VaultDuplicateCheckReq> {
    /**
     * The name of the file/folder
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The UUID of the folder that the file/folder will reside in
     *
     * @generated from field: string folder_uuid = 13;
     */
    folderUuid: string;
    constructor(data?: PartialMessage<VaultDuplicateCheckReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultDuplicateCheckReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultDuplicateCheckReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultDuplicateCheckReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultDuplicateCheckReq;
    static equals(a: VaultDuplicateCheckReq | PlainMessage<VaultDuplicateCheckReq> | undefined, b: VaultDuplicateCheckReq | PlainMessage<VaultDuplicateCheckReq> | undefined): boolean;
}
/**
 *
 * Describes the access log of every file or folder
 *
 * @generated from message Scailo.VaultAccessLog
 */
export declare class VaultAccessLog extends Message<VaultAccessLog> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the metadata of this user
     *
     * @generated from field: Scailo.EmployeeMetadata metadata = 2;
     */
    metadata?: EmployeeMetadata;
    /**
     * Stores the reference for which this access log is applicable
     *
     * @generated from field: Scailo.VAULT_REF_FOR ref_for = 10;
     */
    refFor: VAULT_REF_FOR;
    /**
     * Stores the ID of the underlying file or folder that has been accessed
     *
     * @generated from field: uint64 ref_id = 11;
     */
    refId: bigint;
    /**
     * Stores the username of the user who accessed this resource
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * Stores the IP address from where the resource was accessed
     *
     * @generated from field: string ip_addr = 13;
     */
    ipAddr: string;
    /**
     * Stores the operation that was performed (Add/Move/Rename/Delete/Download)
     *
     * @generated from field: Scailo.VAULT_ACCESS_LOG_OPERATION operation = 14;
     */
    operation: VAULT_ACCESS_LOG_OPERATION;
    /**
     * Stores the comment that describes the operation
     *
     * @generated from field: string comment = 15;
     */
    comment: string;
    constructor(data?: PartialMessage<VaultAccessLog>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultAccessLog";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultAccessLog;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultAccessLog;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultAccessLog;
    static equals(a: VaultAccessLog | PlainMessage<VaultAccessLog> | undefined, b: VaultAccessLog | PlainMessage<VaultAccessLog> | undefined): boolean;
}
/**
 *
 * Describes the necessary parameters to create an access log
 *
 * @generated from message Scailo.VaultAccessLogCreateRequest
 */
export declare class VaultAccessLogCreateRequest extends Message<VaultAccessLogCreateRequest> {
    /**
     * Stores a globally unique entity UUID. This will be set at the organization level
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the reference for which this access log is applicable
     *
     * @generated from field: Scailo.VAULT_REF_FOR ref_for = 10;
     */
    refFor: VAULT_REF_FOR;
    /**
     * Stores the ID of the underlying file or folder that has been accessed
     *
     * @generated from field: uint64 ref_id = 11;
     */
    refId: bigint;
    /**
     * Stores the username of the user who accessed this resource
     *
     * @generated from field: string username = 12;
     */
    username: string;
    /**
     * Stores the IP address from where the resource was accessed
     *
     * @generated from field: string ip_addr = 13;
     */
    ipAddr: string;
    /**
     * Stores the operation that was performed (Add/Move/Rename/Delete/Download)
     *
     * @generated from field: Scailo.VAULT_ACCESS_LOG_OPERATION operation = 14;
     */
    operation: VAULT_ACCESS_LOG_OPERATION;
    /**
     * Stores the comment that describes the operation
     *
     * @generated from field: string comment = 15;
     */
    comment: string;
    constructor(data?: PartialMessage<VaultAccessLogCreateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultAccessLogCreateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultAccessLogCreateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultAccessLogCreateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultAccessLogCreateRequest;
    static equals(a: VaultAccessLogCreateRequest | PlainMessage<VaultAccessLogCreateRequest> | undefined, b: VaultAccessLogCreateRequest | PlainMessage<VaultAccessLogCreateRequest> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of access logs
 *
 * @generated from message Scailo.VaultAccessLogsList
 */
export declare class VaultAccessLogsList extends Message<VaultAccessLogsList> {
    /**
     * List of access logs
     *
     * @generated from field: repeated Scailo.VaultAccessLog list = 1;
     */
    list: VaultAccessLog[];
    constructor(data?: PartialMessage<VaultAccessLogsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultAccessLogsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultAccessLogsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultAccessLogsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultAccessLogsList;
    static equals(a: VaultAccessLogsList | PlainMessage<VaultAccessLogsList> | undefined, b: VaultAccessLogsList | PlainMessage<VaultAccessLogsList> | undefined): boolean;
}
//# sourceMappingURL=vault_commons.scailo_pb.d.ts.map