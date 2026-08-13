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
     * Stores the default value
     *
     * @generated from enum value: VAULT_PERMISSION_CODE_UNSPECIFIED = 0;
     */
    VAULT_PERMISSION_CODE_UNSPECIFIED = 0,
    /**
     * Stores the bit weight of the view permission (value is 2^0 = 1)
     *
     * @generated from enum value: VAULT_PERMISSION_CODE_VIEW = 1;
     */
    VAULT_PERMISSION_CODE_VIEW = 1,
    /**
     * Stores the bit weight of the meta permission (value is 2^1 = 2)
     *
     * @generated from enum value: VAULT_PERMISSION_CODE_META = 2;
     */
    VAULT_PERMISSION_CODE_META = 2,
    /**
     * Stores the bit weight of the download permission (value is 2^2 = 4)
     *
     * @generated from enum value: VAULT_PERMISSION_CODE_DOWNLOAD = 4;
     */
    VAULT_PERMISSION_CODE_DOWNLOAD = 4,
    /**
     * Stores the bit weight of the add permission (value is 2^3 = 8)
     *
     * @generated from enum value: VAULT_PERMISSION_CODE_ADD = 8;
     */
    VAULT_PERMISSION_CODE_ADD = 8,
    /**
     * Stores the bit weight of the delete permission (value is 2^4 = 16)
     *
     * @generated from enum value: VAULT_PERMISSION_CODE_DELETE = 16;
     */
    VAULT_PERMISSION_CODE_DELETE = 16,
    /**
     * Stores the bit weight of the execute permission (value is 2^5 = 32)
     *
     * @generated from enum value: VAULT_PERMISSION_CODE_EXECUTE = 32;
     */
    VAULT_PERMISSION_CODE_EXECUTE = 32,
    /**
     * Stores the bit weight of all the available permissions (value is 2^6 = 64 - 1)
     *
     * @generated from enum value: VAULT_PERMISSION_CODE_ALL = 63;
     */
    VAULT_PERMISSION_CODE_ALL = 63
}
/**
 *
 * Describes the available sort keys for enclave domains
 *
 * @generated from enum Scailo.ENCLAVE_DOMAIN_SORT_KEY
 */
export declare enum ENCLAVE_DOMAIN_SORT_KEY {
    /**
     * Fetch ordered results by id
     *
     * @generated from enum value: ENCLAVE_DOMAIN_SORT_KEY_ID_UNSPECIFIED = 0;
     */
    ENCLAVE_DOMAIN_SORT_KEY_ID_UNSPECIFIED = 0,
    /**
     * Fetch ordered results by the creation timestamp
     *
     * @generated from enum value: ENCLAVE_DOMAIN_SORT_KEY_CREATED_AT = 1;
     */
    ENCLAVE_DOMAIN_SORT_KEY_CREATED_AT = 1,
    /**
     * Fetch ordered results by the domain
     *
     * @generated from enum value: ENCLAVE_DOMAIN_SORT_KEY_DOMAIN = 10;
     */
    ENCLAVE_DOMAIN_SORT_KEY_DOMAIN = 10
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
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
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
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
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
     *
     * @optional
     *
     * @description Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.
     *
     * @example "This is a comment for audit purposes."
     *
     * @regex .*
     *
     * @format May contain any UTF-8 characters or be left empty.
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
     * Stores the minimum version of Scailo that the application supports
     *
     * @generated from field: string min_genesis_version = 5 [json_name = "min_genesis_version"];
     */
    minGenesisVersion: string;
    /**
     * Stores the manimum version of Scailo that the application supports
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
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
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
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
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
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
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
     *
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
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
 *
 * Describes the resources section of an Enclave
 *
 * @generated from message Scailo.EnclaveResources
 */
export declare class EnclaveResources extends Message<EnclaveResources> {
    /**
     * Stores the list of logos that are available
     *
     * @generated from field: repeated string logos = 1;
     */
    logos: string[];
    /**
     * Stores the list of folders that need to be accessible by the Enclave
     *
     * @generated from field: repeated string folders = 2;
     */
    folders: string[];
    /**
     * Stores the list of files that need to be accessible by the Enclave
     *
     * @generated from field: repeated string files = 3;
     */
    files: string[];
    constructor(data?: PartialMessage<EnclaveResources>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveResources";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveResources;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveResources;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveResources;
    static equals(a: EnclaveResources | PlainMessage<EnclaveResources> | undefined, b: EnclaveResources | PlainMessage<EnclaveResources> | undefined): boolean;
}
/**
 *
 * Describes each environment variable that is defined in the Manifest of an Enclave
 *
 * @generated from message Scailo.EnclaveManifestEnvVariable
 */
export declare class EnclaveManifestEnvVariable extends Message<EnclaveManifestEnvVariable> {
    /**
     * Stores the name of the environment variable
     *
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * Stores the default value of the environment variable
     *
     * @generated from field: string value = 2;
     */
    value: string;
    /**
     * Stores if the variable is a secret
     *
     * @generated from field: bool is_secret = 3 [json_name = "is_secret"];
     */
    isSecret: boolean;
    constructor(data?: PartialMessage<EnclaveManifestEnvVariable>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveManifestEnvVariable";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveManifestEnvVariable;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveManifestEnvVariable;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveManifestEnvVariable;
    static equals(a: EnclaveManifestEnvVariable | PlainMessage<EnclaveManifestEnvVariable> | undefined, b: EnclaveManifestEnvVariable | PlainMessage<EnclaveManifestEnvVariable> | undefined): boolean;
}
/**
 *
 * Describes the manifest file of an Enclave. Stores the attributes that can be a part of the MANIFEST.yaml file, that is present in the root folder of an Enclave
 *
 * @generated from message Scailo.EnclaveManifest
 */
export declare class EnclaveManifest extends Message<EnclaveManifest> {
    /**
     * Stores the manifest version
     *
     * @generated from field: string manifest_version = 1 [json_name = "manifest_version"];
     */
    manifestVersion: string;
    /**
     * Stores the enclave runtime (valid options are node, golang, python)
     *
     * @generated from field: string enclave_runtime = 2 [json_name = "enclave_runtime"];
     */
    enclaveRuntime: string;
    /**
     * Stores the application version
     *
     * @generated from field: string app_version = 3 [json_name = "app_version"];
     */
    appVersion: string;
    /**
     * Stores the name of the application
     *
     * @generated from field: string app_name = 4 [json_name = "app_name"];
     */
    appName: string;
    /**
     * Stores the name of the enclave
     *
     * @generated from field: string enclave_name = 5 [json_name = "enclave_name"];
     */
    enclaveName: string;
    /**
     * Stores the unique identifier for the application
     *
     * @generated from field: string app_unique_identifier = 6 [json_name = "app_unique_identifier"];
     */
    appUniqueIdentifier: string;
    /**
     * Stores the command that starts the enclave
     *
     * @generated from field: string start_exec = 7 [json_name = "start_exec"];
     */
    startExec: string;
    /**
     * Stores how the entry to the application is to be handled
     *
     * @generated from field: string entry_point_management = 8 [json_name = "entry_point_management"];
     */
    entryPointManagement: string;
    /**
     * Stores the list of default environment variables
     *
     * @generated from field: repeated Scailo.EnclaveManifestEnvVariable env_variables = 9 [json_name = "env_variables"];
     */
    envVariables: EnclaveManifestEnvVariable[];
    /**
     * Stores the resources of the Enclave
     *
     * @generated from field: Scailo.EnclaveResources resources = 10;
     */
    resources?: EnclaveResources;
    constructor(data?: PartialMessage<EnclaveManifest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveManifest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveManifest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveManifest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveManifest;
    static equals(a: EnclaveManifest | PlainMessage<EnclaveManifest> | undefined, b: EnclaveManifest | PlainMessage<EnclaveManifest> | undefined): boolean;
}
/**
 *
 * Describes the parameters that are a part of each enclave ingress
 *
 * @generated from message Scailo.EnclaveIngress
 */
export declare class EnclaveIngress extends Message<EnclaveIngress> {
    /**
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
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
     * Stores the unique token that can be used to identify the user who executed this enclave
     *
     * @generated from field: string token = 10;
     */
    token: string;
    /**
     * Stores the expiry timestamp of the ingress token
     *
     * @generated from field: uint64 expires_at = 11;
     */
    expiresAt: bigint;
    /**
     * Stores the ID of the file that is being executed
     *
     * @generated from field: uint64 vault_file_id = 20;
     */
    vaultFileId: bigint;
    /**
     * Stores the ID of the version of the file that is being executed
     *
     * @generated from field: uint64 vault_file_version_id = 21;
     */
    vaultFileVersionId: bigint;
    /**
     * Stores the unique identifier of the application
     *
     * @generated from field: string enclave_name = 22;
     */
    enclaveName: string;
    /**
     * Stores the IP address from where the app was executed
     *
     * @generated from field: string ip_addr = 24;
     */
    ipAddr: string;
    /**
     * Stores the ID of the user who executed this enclave
     *
     * @generated from field: uint64 runner_user_id = 30;
     */
    runnerUserId: bigint;
    /**
     * Stores the ID of the user when this enclave was executed
     *
     * @generated from field: uint64 runner_role_id = 31;
     */
    runnerRoleId: bigint;
    /**
     * Stores the endpoint of the application execution
     *
     * @generated from field: string app_endpoint = 60;
     */
    appEndpoint: string;
    constructor(data?: PartialMessage<EnclaveIngress>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveIngress";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveIngress;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveIngress;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveIngress;
    static equals(a: EnclaveIngress | PlainMessage<EnclaveIngress> | undefined, b: EnclaveIngress | PlainMessage<EnclaveIngress> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of enclave ingresses
 *
 * @generated from message Scailo.EnclaveIngressesList
 */
export declare class EnclaveIngressesList extends Message<EnclaveIngressesList> {
    /**
     * List of runs
     *
     * @generated from field: repeated Scailo.EnclaveIngress list = 1;
     */
    list: EnclaveIngress[];
    constructor(data?: PartialMessage<EnclaveIngressesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveIngressesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveIngressesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveIngressesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveIngressesList;
    static equals(a: EnclaveIngressesList | PlainMessage<EnclaveIngressesList> | undefined, b: EnclaveIngressesList | PlainMessage<EnclaveIngressesList> | undefined): boolean;
}
/**
 *
 * Describes the request payload of a count filter for enclave runs
 *
 * @generated from message Scailo.EnclaveIngressCountReq
 */
export declare class EnclaveIngressCountReq extends Message<EnclaveIngressCountReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
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
     * Stores the ID of the user who executed this enclave
     *
     * @generated from field: uint64 runner_user_id = 30;
     */
    runnerUserId: bigint;
    /**
     * Stores the ID of the user when this enclave was executed
     *
     * @generated from field: uint64 runner_role_id = 31;
     */
    runnerRoleId: bigint;
    constructor(data?: PartialMessage<EnclaveIngressCountReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveIngressCountReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveIngressCountReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveIngressCountReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveIngressCountReq;
    static equals(a: EnclaveIngressCountReq | PlainMessage<EnclaveIngressCountReq> | undefined, b: EnclaveIngressCountReq | PlainMessage<EnclaveIngressCountReq> | undefined): boolean;
}
/**
 *
 * Describes the base request payload of a filter search for enclave runs
 *
 * @generated from message Scailo.EnclaveIngressFilterReq
 */
export declare class EnclaveIngressFilterReq extends Message<EnclaveIngressFilterReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
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
     *
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
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
     * Stores the ID of the user who executed this enclave
     *
     * @generated from field: uint64 runner_user_id = 30;
     */
    runnerUserId: bigint;
    /**
     * Stores the ID of the user when this enclave was executed
     *
     * @generated from field: uint64 runner_role_id = 31;
     */
    runnerRoleId: bigint;
    constructor(data?: PartialMessage<EnclaveIngressFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveIngressFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveIngressFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveIngressFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveIngressFilterReq;
    static equals(a: EnclaveIngressFilterReq | PlainMessage<EnclaveIngressFilterReq> | undefined, b: EnclaveIngressFilterReq | PlainMessage<EnclaveIngressFilterReq> | undefined): boolean;
}
/**
 *
 * The request payload to verify an enclave ingress
 *
 * @generated from message Scailo.VerifyEnclaveIngressRequest
 */
export declare class VerifyEnclaveIngressRequest extends Message<VerifyEnclaveIngressRequest> {
    /**
     * The token that needs to be verified
     *
     * @generated from field: string token = 1;
     */
    token: string;
    constructor(data?: PartialMessage<VerifyEnclaveIngressRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VerifyEnclaveIngressRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyEnclaveIngressRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyEnclaveIngressRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyEnclaveIngressRequest;
    static equals(a: VerifyEnclaveIngressRequest | PlainMessage<VerifyEnclaveIngressRequest> | undefined, b: VerifyEnclaveIngressRequest | PlainMessage<VerifyEnclaveIngressRequest> | undefined): boolean;
}
/**
 *
 * The response payload to verify an enclave ingress
 *
 * @generated from message Scailo.VerifyEnclaveIngressResponse
 */
export declare class VerifyEnclaveIngressResponse extends Message<VerifyEnclaveIngressResponse> {
    /**
     * The name of the enclave
     *
     * @generated from field: string enclave_name = 1;
     */
    enclaveName: string;
    /**
     * The UUID of the user who is running the enclave
     *
     * @generated from field: string user_uuid = 2;
     */
    userUuid: string;
    /**
     * The UUID of the user's role
     *
     * @generated from field: string role_uuid = 3;
     */
    roleUuid: string;
    /**
     * The auth token of the user that can be used for subsequent requests
     *
     * @generated from field: string auth_token = 4;
     */
    authToken: string;
    /**
     * The timestamp after which the auth token expires
     *
     * @generated from field: uint64 expires_at = 5;
     */
    expiresAt: bigint;
    constructor(data?: PartialMessage<VerifyEnclaveIngressResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VerifyEnclaveIngressResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyEnclaveIngressResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyEnclaveIngressResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyEnclaveIngressResponse;
    static equals(a: VerifyEnclaveIngressResponse | PlainMessage<VerifyEnclaveIngressResponse> | undefined, b: VerifyEnclaveIngressResponse | PlainMessage<VerifyEnclaveIngressResponse> | undefined): boolean;
}
/**
 *
 * Stores the payload that is necessary to create a custom environment variable for an enclave
 *
 * @generated from message Scailo.EnclaveEnvironmentVariableAddRequest
 */
export declare class EnclaveEnvironmentVariableAddRequest extends Message<EnclaveEnvironmentVariableAddRequest> {
    /**
     * The UUID of the enclave file that will be updated with the given environment variable
     *
     * @generated from field: string file_uuid = 1;
     */
    fileUuid: string;
    /**
     * The name of the environment variable
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * The value of the environment variable
     *
     * @generated from field: string value = 12;
     */
    value: string;
    /**
     * Denotes if the value should be stored as a secret (will not be visible to the user post creation)
     *
     * @generated from field: bool is_secret = 13;
     */
    isSecret: boolean;
    constructor(data?: PartialMessage<EnclaveEnvironmentVariableAddRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveEnvironmentVariableAddRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveEnvironmentVariableAddRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveEnvironmentVariableAddRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveEnvironmentVariableAddRequest;
    static equals(a: EnclaveEnvironmentVariableAddRequest | PlainMessage<EnclaveEnvironmentVariableAddRequest> | undefined, b: EnclaveEnvironmentVariableAddRequest | PlainMessage<EnclaveEnvironmentVariableAddRequest> | undefined): boolean;
}
/**
 *
 * Stores the payload that is necessary to update a custom environment variable for an enclave
 *
 * @generated from message Scailo.EnclaveEnvironmentVariableUpdateRequest
 */
export declare class EnclaveEnvironmentVariableUpdateRequest extends Message<EnclaveEnvironmentVariableUpdateRequest> {
    /**
     * The UUID of the environment variables that needs to be updated
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * The value of the environment variable that needs to be updated
     *
     * @generated from field: string value = 11;
     */
    value: string;
    constructor(data?: PartialMessage<EnclaveEnvironmentVariableUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveEnvironmentVariableUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveEnvironmentVariableUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveEnvironmentVariableUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveEnvironmentVariableUpdateRequest;
    static equals(a: EnclaveEnvironmentVariableUpdateRequest | PlainMessage<EnclaveEnvironmentVariableUpdateRequest> | undefined, b: EnclaveEnvironmentVariableUpdateRequest | PlainMessage<EnclaveEnvironmentVariableUpdateRequest> | undefined): boolean;
}
/**
 *
 * Denotes an individual environment variable that is part of an enclave
 *
 * @generated from message Scailo.EnclaveEnvironmentVariable
 */
export declare class EnclaveEnvironmentVariable extends Message<EnclaveEnvironmentVariable> {
    /**
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
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
     * Stores the ID of the file that the environment variable belongs to
     *
     * @generated from field: uint64 vault_file_id = 10;
     */
    vaultFileId: bigint;
    /**
     * The name of the environment variable
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * The value of the environment variable
     *
     * @generated from field: string value = 12;
     */
    value: string;
    /**
     * Denotes if the value should be stored as a secret (will not be visible to the user post creation)
     *
     * @generated from field: bool is_secret = 13;
     */
    isSecret: boolean;
    constructor(data?: PartialMessage<EnclaveEnvironmentVariable>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveEnvironmentVariable";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveEnvironmentVariable;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveEnvironmentVariable;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveEnvironmentVariable;
    static equals(a: EnclaveEnvironmentVariable | PlainMessage<EnclaveEnvironmentVariable> | undefined, b: EnclaveEnvironmentVariable | PlainMessage<EnclaveEnvironmentVariable> | undefined): boolean;
}
/**
 *
 * Denotes the list of environment variables that are part of an enclave
 *
 * @generated from message Scailo.EnclaveEnvironmentVariablesList
 */
export declare class EnclaveEnvironmentVariablesList extends Message<EnclaveEnvironmentVariablesList> {
    /**
     * List of environment variables
     *
     * @generated from field: repeated Scailo.EnclaveEnvironmentVariable list = 1;
     */
    list: EnclaveEnvironmentVariable[];
    constructor(data?: PartialMessage<EnclaveEnvironmentVariablesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveEnvironmentVariablesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveEnvironmentVariablesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveEnvironmentVariablesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveEnvironmentVariablesList;
    static equals(a: EnclaveEnvironmentVariablesList | PlainMessage<EnclaveEnvironmentVariablesList> | undefined, b: EnclaveEnvironmentVariablesList | PlainMessage<EnclaveEnvironmentVariablesList> | undefined): boolean;
}
/**
 *
 * Stores the payload that is necessary to create a custom domain for an enclave
 *
 * @generated from message Scailo.EnclaveDomainAddRequest
 */
export declare class EnclaveDomainAddRequest extends Message<EnclaveDomainAddRequest> {
    /**
     * The UUID of the enclave file that will be updated with the given domain
     *
     * @generated from field: string file_uuid = 1;
     */
    fileUuid: string;
    /**
     * The domain that points to the enclave
     *
     * @generated from field: string domain = 11;
     */
    domain: string;
    constructor(data?: PartialMessage<EnclaveDomainAddRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveDomainAddRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveDomainAddRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveDomainAddRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveDomainAddRequest;
    static equals(a: EnclaveDomainAddRequest | PlainMessage<EnclaveDomainAddRequest> | undefined, b: EnclaveDomainAddRequest | PlainMessage<EnclaveDomainAddRequest> | undefined): boolean;
}
/**
 *
 * Denotes an individual domain that is part of an enclave
 *
 * @generated from message Scailo.EnclaveDomain
 */
export declare class EnclaveDomain extends Message<EnclaveDomain> {
    /**
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
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
     * Stores the ID of the file that the domain belongs to
     *
     * @generated from field: uint64 vault_file_id = 10;
     */
    vaultFileId: bigint;
    /**
     * The domain that points to the enclave
     *
     * @generated from field: string domain = 11;
     */
    domain: string;
    /**
     * The internal address of the service that the domain points to
     *
     * @generated from field: string service_addr = 12;
     */
    serviceAddr: string;
    constructor(data?: PartialMessage<EnclaveDomain>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveDomain";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveDomain;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveDomain;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveDomain;
    static equals(a: EnclaveDomain | PlainMessage<EnclaveDomain> | undefined, b: EnclaveDomain | PlainMessage<EnclaveDomain> | undefined): boolean;
}
/**
 *
 * Describes the request payload of a enclave domains filter search
 *
 * @generated from message Scailo.EnclaveDomainsFilterReq
 */
export declare class EnclaveDomainsFilterReq extends Message<EnclaveDomainsFilterReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.
     *
     * @example 100
     *
     * @regex ^(?:-1|0|[1-9][0-9]*)$
     *
     * @format Must be -1 or any non-negative integer (>= -1).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: Scailo.ENCLAVE_DOMAIN_SORT_KEY sort_key = 5;
     */
    sortKey: ENCLAVE_DOMAIN_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
     *
     * @generated from field: string entity_uuid = 8;
     */
    entityUuid: string;
    /**
     * The domain that points to the enclave
     *
     * @generated from field: string domain = 11;
     */
    domain: string;
    /**
     * The internal address of the service that the domain points to
     *
     * @generated from field: string service_addr = 12;
     */
    serviceAddr: string;
    constructor(data?: PartialMessage<EnclaveDomainsFilterReq>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveDomainsFilterReq";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveDomainsFilterReq;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveDomainsFilterReq;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveDomainsFilterReq;
    static equals(a: EnclaveDomainsFilterReq | PlainMessage<EnclaveDomainsFilterReq> | undefined, b: EnclaveDomainsFilterReq | PlainMessage<EnclaveDomainsFilterReq> | undefined): boolean;
}
/**
 *
 * Denotes the list of domains that are part of an enclave
 *
 * @generated from message Scailo.EnclaveDomainsList
 */
export declare class EnclaveDomainsList extends Message<EnclaveDomainsList> {
    /**
     * List of domains
     *
     * @generated from field: repeated Scailo.EnclaveDomain list = 1;
     */
    list: EnclaveDomain[];
    constructor(data?: PartialMessage<EnclaveDomainsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveDomainsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveDomainsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveDomainsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveDomainsList;
    static equals(a: EnclaveDomainsList | PlainMessage<EnclaveDomainsList> | undefined, b: EnclaveDomainsList | PlainMessage<EnclaveDomainsList> | undefined): boolean;
}
/**
 *
 * The response that contains the default domain suffix that is used for creating enclave domains
 *
 * @generated from message Scailo.EnclaveDomainSuffixResp
 */
export declare class EnclaveDomainSuffixResp extends Message<EnclaveDomainSuffixResp> {
    /**
     * The suffix that is used
     *
     * @generated from field: string suffix = 1;
     */
    suffix: string;
    /**
     * The relay that is used
     *
     * @generated from field: string relay = 2;
     */
    relay: string;
    constructor(data?: PartialMessage<EnclaveDomainSuffixResp>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveDomainSuffixResp";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveDomainSuffixResp;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveDomainSuffixResp;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveDomainSuffixResp;
    static equals(a: EnclaveDomainSuffixResp | PlainMessage<EnclaveDomainSuffixResp> | undefined, b: EnclaveDomainSuffixResp | PlainMessage<EnclaveDomainSuffixResp> | undefined): boolean;
}
/**
 *
 * Stores the payload that is necessary to create a custom frame for an enclave
 *
 * @generated from message Scailo.EnclaveFrameAddRequest
 */
export declare class EnclaveFrameAddRequest extends Message<EnclaveFrameAddRequest> {
    /**
     * The UUID of the enclave file that will be updated with the given frame
     *
     * @generated from field: string file_uuid = 1;
     */
    fileUuid: string;
    /**
     * The sequence number of the frame
     *
     * @generated from field: uint64 sequence_number = 10;
     */
    sequenceNumber: bigint;
    /**
     * The time in seconds after which the frame needs to be refreshed. O denotes no auto refresh.
     *
     * @generated from field: uint64 auto_refresh_interval = 11;
     */
    autoRefreshInterval: bigint;
    /**
     * The width of the frame, with the possible values being 3, 4, 6, 8, 9, and 12
     *
     * @generated from field: uint64 width = 12;
     */
    width: bigint;
    /**
     * The height of the frame in vh (viewport height)
     *
     * @generated from field: uint64 height = 13;
     */
    height: bigint;
    constructor(data?: PartialMessage<EnclaveFrameAddRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveFrameAddRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveFrameAddRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveFrameAddRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveFrameAddRequest;
    static equals(a: EnclaveFrameAddRequest | PlainMessage<EnclaveFrameAddRequest> | undefined, b: EnclaveFrameAddRequest | PlainMessage<EnclaveFrameAddRequest> | undefined): boolean;
}
/**
 *
 * Stores the payload that is necessary to update a custom frame for an enclave
 *
 * @generated from message Scailo.EnclaveFrameUpdateRequest
 */
export declare class EnclaveFrameUpdateRequest extends Message<EnclaveFrameUpdateRequest> {
    /**
     * The UUID of the frame that needs to be updated
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * The sequence number of the frame
     *
     * @generated from field: uint64 sequence_number = 10;
     */
    sequenceNumber: bigint;
    /**
     * The time in seconds after which the frame needs to be refreshed
     *
     * @generated from field: uint64 auto_refresh_interval = 11;
     */
    autoRefreshInterval: bigint;
    /**
     * The width of the frame, with the possible values being 3, 4, 6, 8, 9, and 12
     *
     * @generated from field: uint64 width = 12;
     */
    width: bigint;
    /**
     * The height of the frame in vh (viewport height)
     *
     * @generated from field: uint64 height = 13;
     */
    height: bigint;
    constructor(data?: PartialMessage<EnclaveFrameUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveFrameUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveFrameUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveFrameUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveFrameUpdateRequest;
    static equals(a: EnclaveFrameUpdateRequest | PlainMessage<EnclaveFrameUpdateRequest> | undefined, b: EnclaveFrameUpdateRequest | PlainMessage<EnclaveFrameUpdateRequest> | undefined): boolean;
}
/**
 *
 * Denotes an individual frame that is part of an enclave
 *
 * @generated from message Scailo.EnclaveFrame
 */
export declare class EnclaveFrame extends Message<EnclaveFrame> {
    /**
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
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
     * Stores the ID of the user that the frame belongs to
     *
     * @generated from field: uint64 user_id = 10;
     */
    userId: bigint;
    /**
     * Stores the ID of the file that is used to render the frame
     *
     * @generated from field: uint64 vault_file_id = 11;
     */
    vaultFileId: bigint;
    /**
     * The sequence number of the frame
     *
     * @generated from field: uint64 sequence_number = 20;
     */
    sequenceNumber: bigint;
    /**
     * The time in seconds after which the frame needs to be refreshed
     *
     * @generated from field: uint64 auto_refresh_interval = 21;
     */
    autoRefreshInterval: bigint;
    /**
     * The width of the frame, with the possible values being 3, 4, 6, 8, 9, and 12
     *
     * @generated from field: uint64 width = 22;
     */
    width: bigint;
    /**
     * The height of the frame in vh (viewport height)
     *
     * @generated from field: uint64 height = 23;
     */
    height: bigint;
    constructor(data?: PartialMessage<EnclaveFrame>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveFrame";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveFrame;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveFrame;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveFrame;
    static equals(a: EnclaveFrame | PlainMessage<EnclaveFrame> | undefined, b: EnclaveFrame | PlainMessage<EnclaveFrame> | undefined): boolean;
}
/**
 *
 * Describes the data that is returned after setting up a frame
 *
 * @generated from message Scailo.EnclaveFrameSetup
 */
export declare class EnclaveFrameSetup extends Message<EnclaveFrameSetup> {
    /**
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @generated from field: string entity_uuid = 1;
     */
    entityUuid: string;
    /**
     * Stores the expiry timestamp of the frame
     *
     * @generated from field: uint64 expires_at = 10;
     */
    expiresAt: bigint;
    /**
     * Stores the unique identifier of the application
     *
     * @generated from field: string enclave_name = 12;
     */
    enclaveName: string;
    /**
     * Stores the endpoint of the application execution
     *
     * @generated from field: string app_endpoint = 13;
     */
    appEndpoint: string;
    /**
     * Stores the UUID of the enclave frame
     *
     * @generated from field: string enclave_frame_uuid = 20;
     */
    enclaveFrameUuid: string;
    /**
     * Stores the UUID of the file
     *
     * @generated from field: string file_uuid = 21;
     */
    fileUuid: string;
    /**
     * Stores the version number of the enclave
     *
     * @generated from field: string app_version = 22;
     */
    appVersion: string;
    /**
     * The sequence number of the frame
     *
     * @generated from field: uint64 sequence_number = 30;
     */
    sequenceNumber: bigint;
    /**
     * The time in seconds after which the frame needs to be refreshed
     *
     * @generated from field: uint64 auto_refresh_interval = 31;
     */
    autoRefreshInterval: bigint;
    /**
     * The width of the frame, with the possible values being 3, 4, 6, 8, 9, and 12
     *
     * @generated from field: uint64 width = 32;
     */
    width: bigint;
    /**
     * The height of the frame in vh (viewport height)
     *
     * @generated from field: uint64 height = 33;
     */
    height: bigint;
    constructor(data?: PartialMessage<EnclaveFrameSetup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveFrameSetup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveFrameSetup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveFrameSetup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveFrameSetup;
    static equals(a: EnclaveFrameSetup | PlainMessage<EnclaveFrameSetup> | undefined, b: EnclaveFrameSetup | PlainMessage<EnclaveFrameSetup> | undefined): boolean;
}
/**
 *
 * Describes the list of enclave frames that have been setup
 *
 * @generated from message Scailo.EnclaveFrameSetupList
 */
export declare class EnclaveFrameSetupList extends Message<EnclaveFrameSetupList> {
    /**
     * List of setup frames
     *
     * @generated from field: repeated Scailo.EnclaveFrameSetup list = 1;
     */
    list: EnclaveFrameSetup[];
    constructor(data?: PartialMessage<EnclaveFrameSetupList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.EnclaveFrameSetupList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnclaveFrameSetupList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnclaveFrameSetupList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnclaveFrameSetupList;
    static equals(a: EnclaveFrameSetupList | PlainMessage<EnclaveFrameSetupList> | undefined, b: EnclaveFrameSetupList | PlainMessage<EnclaveFrameSetupList> | undefined): boolean;
}
/**
 * @generated from message Scailo.VaultSearchReq
 */
export declare class VaultSearchReq extends Message<VaultSearchReq> {
    /**
     *
     * @optional
     *
     * @description Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.
     *
     * @example ANY
     *
     * @generated from field: Scailo.BOOL_FILTER is_active = 1;
     */
    isActive: BOOL_FILTER;
    /**
     *
     * @mandatory
     *
     * @description Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.
     *
     * @example 100
     *
     * @regex ^(?:-1|0|[1-9][0-9]*)$
     *
     * @format Must be -1 or any non-negative integer (>= -1).
     *
     * @generated from field: int64 count = 2;
     */
    count: bigint;
    /**
     *
     * @optional
     *
     * @description Number of records to skip (offset) for pagination.
     *
     * @example 0
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 offset = 3;
     */
    offset: bigint;
    /**
     *
     * @optional
     *
     * @description Sort direction.
     *
     * @example DESCENDING
     *
     * @generated from field: Scailo.SORT_ORDER sort_order = 4;
     */
    sortOrder: SORT_ORDER;
    /**
     *
     * @optional
     *
     * @description The field used for sorting.
     *
     * @generated from field: Scailo.VAULT_SORT_KEY sort_key = 5;
     */
    sortKey: VAULT_SORT_KEY;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_start = 101;
     */
    creationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records created ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 creation_timestamp_end = 102;
     */
    creationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or AFTER this UNIX timestamp.
     *
     * @example 1672531200
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_start = 103;
     */
    modificationTimestampStart: bigint;
    /**
     *
     * @optional
     *
     * @description Filter records modified ON or BEFORE this UNIX timestamp.
     *
     * @example 1704067199
     *
     * @regex ^[0-9]+$
     *
     * @format Non-negative integer.
     *
     * @generated from field: uint64 modification_timestamp_end = 104;
     */
    modificationTimestampEnd: bigint;
    /**
     *
     * @optional
     *
     * @description Filter by the organization UUID.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
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
     *
     * @mandatory
     *
     * @description The search string to match against reference IDs.
     *
     * @example "Medical 2023"
     *
     * @regex .*
     *
     * @format: May contain any UTF-8 characters.
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
     *
     * @description The organization's globally unique identifier.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
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
     *
     * @optional
     *
     * @description The globally unique identifier for the Organization or Business Entity.
     *
     * @example "550e8400-e29b-41d4-a716-446655440000"
     *
     * @regex ^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$
     *
     * @format If provided, must be a valid v4 UUID in canonical hyphenated form.
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