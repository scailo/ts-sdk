import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { EmployeeMetadata } from "./base.scailo_pb.js";
import { VaultPermission } from "./vault_commons.scailo_pb.js";
/**
 *
 * Describes the parameters necessary to add a vault folder
 *
 * @generated from message Scailo.VaultFolderAddRequest
 */
export declare class VaultFolderAddRequest extends Message<VaultFolderAddRequest> {
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
     * The name of the folder
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The UUID of the parent folder
     *
     * @generated from field: string parent_folder_uuid = 11;
     */
    parentFolderUuid: string;
    constructor(data?: PartialMessage<VaultFolderAddRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFolderAddRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFolderAddRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFolderAddRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFolderAddRequest;
    static equals(a: VaultFolderAddRequest | PlainMessage<VaultFolderAddRequest> | undefined, b: VaultFolderAddRequest | PlainMessage<VaultFolderAddRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to move a vault folder
 *
 * @generated from message Scailo.VaultFolderMoveFolderRequest
 */
export declare class VaultFolderMoveFolderRequest extends Message<VaultFolderMoveFolderRequest> {
    /**
     * The UUID of the folder
     *
     * @generated from field: string source_folder_uuid = 1;
     */
    sourceFolderUuid: string;
    /**
     * The UUID of the destination folder that the folder needs to be moved into
     *
     * @generated from field: string destination_folder_uuid = 13;
     */
    destinationFolderUuid: string;
    constructor(data?: PartialMessage<VaultFolderMoveFolderRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFolderMoveFolderRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFolderMoveFolderRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFolderMoveFolderRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFolderMoveFolderRequest;
    static equals(a: VaultFolderMoveFolderRequest | PlainMessage<VaultFolderMoveFolderRequest> | undefined, b: VaultFolderMoveFolderRequest | PlainMessage<VaultFolderMoveFolderRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to rename a vault folder
 *
 * @generated from message Scailo.VaultFolderRenameFolderRequest
 */
export declare class VaultFolderRenameFolderRequest extends Message<VaultFolderRenameFolderRequest> {
    /**
     * The UUID of the folder
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * The new name of the folder
     *
     * @generated from field: string name = 10;
     */
    name: string;
    constructor(data?: PartialMessage<VaultFolderRenameFolderRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFolderRenameFolderRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFolderRenameFolderRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFolderRenameFolderRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFolderRenameFolderRequest;
    static equals(a: VaultFolderRenameFolderRequest | PlainMessage<VaultFolderRenameFolderRequest> | undefined, b: VaultFolderRenameFolderRequest | PlainMessage<VaultFolderRenameFolderRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters of a vault folder
 *
 * @generated from message Scailo.VaultFolder
 */
export declare class VaultFolder extends Message<VaultFolder> {
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
     * The name of the folder
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The ID of the parent folder
     *
     * @generated from field: uint64 parent_folder_id = 11;
     */
    parentFolderId: bigint;
    /**
     * The path of the folder
     *
     * @generated from field: string path_tree = 12;
     */
    pathTree: string;
    /**
     * The list of permissions
     *
     * @generated from field: repeated Scailo.VaultPermission permissions = 20;
     */
    permissions: VaultPermission[];
    /**
     * The list of all the parent folders
     *
     * @generated from field: repeated Scailo.VaultFolder parent_folders = 30;
     */
    parentFolders: VaultFolder[];
    /**
     * The UUID of the parent folder
     *
     * @generated from field: string parent_folder_uuid = 50;
     */
    parentFolderUuid: string;
    constructor(data?: PartialMessage<VaultFolder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFolder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFolder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFolder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFolder;
    static equals(a: VaultFolder | PlainMessage<VaultFolder> | undefined, b: VaultFolder | PlainMessage<VaultFolder> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of vault folders
 *
 * @generated from message Scailo.VaultFoldersList
 */
export declare class VaultFoldersList extends Message<VaultFoldersList> {
    /**
     * List of folders
     *
     * @generated from field: repeated Scailo.VaultFolder list = 1;
     */
    list: VaultFolder[];
    constructor(data?: PartialMessage<VaultFoldersList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFoldersList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFoldersList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFoldersList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFoldersList;
    static equals(a: VaultFoldersList | PlainMessage<VaultFoldersList> | undefined, b: VaultFoldersList | PlainMessage<VaultFoldersList> | undefined): boolean;
}
/**
 *
 * Describes the parameters of a vault folder download
 *
 * @generated from message Scailo.VaultFolderDownload
 */
export declare class VaultFolderDownload extends Message<VaultFolderDownload> {
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
     * The ID of the folder that is being downloaded
     *
     * @generated from field: uint64 folder_id = 10;
     */
    folderId: bigint;
    /**
     * The path to the generated zip file
     *
     * @generated from field: string zip_file_path = 11;
     */
    zipFilePath: string;
    /**
     * Stores if the folder has been zipped
     *
     * @generated from field: bool is_zipped = 12;
     */
    isZipped: boolean;
    /**
     * Stores the username of the user who requested this download
     *
     * @generated from field: string requested_by = 13;
     */
    requestedBy: string;
    /**
     * Stores the timestamp of when the download of the folder began
     *
     * @generated from field: uint64 download_started_at = 14;
     */
    downloadStartedAt: bigint;
    /**
     * Stores the timestamp of when the download of the folder finished
     *
     * @generated from field: uint64 download_ended_at = 15;
     */
    downloadEndedAt: bigint;
    /**
     * Stores the username of the user who downloaded this folder
     *
     * @generated from field: string downloaded_by = 16;
     */
    downloadedBy: string;
    /**
     * Stores an error encountered, if any
     *
     * @generated from field: string error = 17;
     */
    error: string;
    constructor(data?: PartialMessage<VaultFolderDownload>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFolderDownload";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFolderDownload;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFolderDownload;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFolderDownload;
    static equals(a: VaultFolderDownload | PlainMessage<VaultFolderDownload> | undefined, b: VaultFolderDownload | PlainMessage<VaultFolderDownload> | undefined): boolean;
}
//# sourceMappingURL=vault_folders.scailo_pb.d.ts.map