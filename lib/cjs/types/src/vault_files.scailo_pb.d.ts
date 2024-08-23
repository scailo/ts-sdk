import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { EmployeeMetadata } from "./base.scailo_pb.js";
import { VaultPermission } from "./vault_commons.scailo_pb.js";
/**
 *
 * Describes the parameters necessary to initiate a vault file
 *
 * @generated from message Scailo.VaultFileInitiateFileRequest
 */
export declare class VaultFileInitiateFileRequest extends Message<VaultFileInitiateFileRequest> {
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
     * The name of the file
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The file type
     *
     * @generated from field: string type = 11;
     */
    type: string;
    /**
     * The UUID of the folder that the file is present in
     *
     * @generated from field: string folder_uuid = 13;
     */
    folderUuid: string;
    constructor(data?: PartialMessage<VaultFileInitiateFileRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFileInitiateFileRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFileInitiateFileRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFileInitiateFileRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFileInitiateFileRequest;
    static equals(a: VaultFileInitiateFileRequest | PlainMessage<VaultFileInitiateFileRequest> | undefined, b: VaultFileInitiateFileRequest | PlainMessage<VaultFileInitiateFileRequest> | undefined): boolean;
}
/**
 *
 * Describes the payload in the response to a file initiate request
 *
 * @generated from message Scailo.VaultFileInitiateFileResponse
 */
export declare class VaultFileInitiateFileResponse extends Message<VaultFileInitiateFileResponse> {
    /**
     * The UUID of the file
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * The max size of the chunk (in bytes) for uploading a file
     *
     * @generated from field: uint64 chunk_size = 2;
     */
    chunkSize: bigint;
    constructor(data?: PartialMessage<VaultFileInitiateFileResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFileInitiateFileResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFileInitiateFileResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFileInitiateFileResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFileInitiateFileResponse;
    static equals(a: VaultFileInitiateFileResponse | PlainMessage<VaultFileInitiateFileResponse> | undefined, b: VaultFileInitiateFileResponse | PlainMessage<VaultFileInitiateFileResponse> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to rename a vault file
 *
 * @generated from message Scailo.VaultFileRenameFileRequest
 */
export declare class VaultFileRenameFileRequest extends Message<VaultFileRenameFileRequest> {
    /**
     * The UUID of the file
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * The new name of the file
     *
     * @generated from field: string name = 10;
     */
    name: string;
    constructor(data?: PartialMessage<VaultFileRenameFileRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFileRenameFileRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFileRenameFileRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFileRenameFileRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFileRenameFileRequest;
    static equals(a: VaultFileRenameFileRequest | PlainMessage<VaultFileRenameFileRequest> | undefined, b: VaultFileRenameFileRequest | PlainMessage<VaultFileRenameFileRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to move a vault file
 *
 * @generated from message Scailo.VaultFileMoveFileRequest
 */
export declare class VaultFileMoveFileRequest extends Message<VaultFileMoveFileRequest> {
    /**
     * The UUID of the file
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * The UUID of the destination folder that the file needs to be moved into
     *
     * @generated from field: string destination_folder_uuid = 13;
     */
    destinationFolderUuid: string;
    constructor(data?: PartialMessage<VaultFileMoveFileRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFileMoveFileRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFileMoveFileRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFileMoveFileRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFileMoveFileRequest;
    static equals(a: VaultFileMoveFileRequest | PlainMessage<VaultFileMoveFileRequest> | undefined, b: VaultFileMoveFileRequest | PlainMessage<VaultFileMoveFileRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters of a vault file
 *
 * @generated from message Scailo.VaultFile
 */
export declare class VaultFile extends Message<VaultFile> {
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
     * The timestamp of when the file upload was completed
     *
     * @generated from field: uint64 completed_at = 6;
     */
    completedAt: bigint;
    /**
     * The name of the file
     *
     * @generated from field: string name = 10;
     */
    name: string;
    /**
     * The file type
     *
     * @generated from field: string type = 11;
     */
    type: string;
    /**
     * Stores if the file has been made persistent
     *
     * @generated from field: bool is_persistent = 12;
     */
    isPersistent: boolean;
    /**
     * The ID of the folder that the file lives in
     *
     * @generated from field: uint64 folder_id = 13;
     */
    folderId: bigint;
    /**
     * The path of the file
     *
     * @generated from field: string path_tree = 14;
     */
    pathTree: string;
    /**
     * The size of the file in bytes
     *
     * @generated from field: uint64 size = 20;
     */
    size: bigint;
    /**
     * The list of permissions
     *
     * @generated from field: repeated Scailo.VaultPermission permissions = 30;
     */
    permissions: VaultPermission[];
    /**
     * The UUID of the folder that the file is present in
     *
     * @generated from field: string folder_uuid = 50;
     */
    folderUuid: string;
    constructor(data?: PartialMessage<VaultFile>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFile";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFile;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFile;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFile;
    static equals(a: VaultFile | PlainMessage<VaultFile> | undefined, b: VaultFile | PlainMessage<VaultFile> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of vault files
 *
 * @generated from message Scailo.VaultFilesList
 */
export declare class VaultFilesList extends Message<VaultFilesList> {
    /**
     * List of files
     *
     * @generated from field: repeated Scailo.VaultFile list = 1;
     */
    list: VaultFile[];
    constructor(data?: PartialMessage<VaultFilesList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFilesList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFilesList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFilesList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFilesList;
    static equals(a: VaultFilesList | PlainMessage<VaultFilesList> | undefined, b: VaultFilesList | PlainMessage<VaultFilesList> | undefined): boolean;
}
/**
 *
 * Describes the parameres of a version of each file
 *
 * @generated from message Scailo.VaultFileVersion
 */
export declare class VaultFileVersion extends Message<VaultFileVersion> {
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
     * The timestamp of when the file version upload was completed
     *
     * @generated from field: uint64 completed_at = 6;
     */
    completedAt: bigint;
    /**
     * Stores the ID of the file that the version belongs to
     *
     * @generated from field: uint64 vault_file_id = 10;
     */
    vaultFileId: bigint;
    /**
     * The name of the file
     *
     * @generated from field: string name = 11;
     */
    name: string;
    /**
     * The file type
     *
     * @generated from field: string type = 12;
     */
    type: string;
    /**
     * The size of the file version in bytes
     *
     * @generated from field: uint64 size = 20;
     */
    size: bigint;
    constructor(data?: PartialMessage<VaultFileVersion>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFileVersion";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFileVersion;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFileVersion;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFileVersion;
    static equals(a: VaultFileVersion | PlainMessage<VaultFileVersion> | undefined, b: VaultFileVersion | PlainMessage<VaultFileVersion> | undefined): boolean;
}
/**
 *
 * Describes the message consisting of the list of vault file versions
 *
 * @generated from message Scailo.VaultFileVersionsList
 */
export declare class VaultFileVersionsList extends Message<VaultFileVersionsList> {
    /**
     * List of versions of the file
     *
     * @generated from field: repeated Scailo.VaultFileVersion list = 1;
     */
    list: VaultFileVersion[];
    constructor(data?: PartialMessage<VaultFileVersionsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFileVersionsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFileVersionsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFileVersionsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFileVersionsList;
    static equals(a: VaultFileVersionsList | PlainMessage<VaultFileVersionsList> | undefined, b: VaultFileVersionsList | PlainMessage<VaultFileVersionsList> | undefined): boolean;
}
/**
 *
 * Describes the parameters necessary to add a chunk to a file
 *
 * @generated from message Scailo.VaultFileAddChunkRequest
 */
export declare class VaultFileAddChunkRequest extends Message<VaultFileAddChunkRequest> {
    /**
     * The UUID of the file
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Stores the sequence ID of this chunk
     *
     * @generated from field: uint64 sequence_id = 11;
     */
    sequenceId: bigint;
    /**
     * Stores the content of the chunk
     *
     * @generated from field: bytes chunk = 12;
     */
    chunk: Uint8Array;
    constructor(data?: PartialMessage<VaultFileAddChunkRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFileAddChunkRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFileAddChunkRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFileAddChunkRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFileAddChunkRequest;
    static equals(a: VaultFileAddChunkRequest | PlainMessage<VaultFileAddChunkRequest> | undefined, b: VaultFileAddChunkRequest | PlainMessage<VaultFileAddChunkRequest> | undefined): boolean;
}
/**
 *
 * Describes the parameters of each chunk of a file version
 *
 * @generated from message Scailo.VaultFileVersionChunk
 */
export declare class VaultFileVersionChunk extends Message<VaultFileVersionChunk> {
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
     * Stores the ID of the file version to which this chunk belongs
     *
     * @generated from field: uint64 vault_file_version_id = 10;
     */
    vaultFileVersionId: bigint;
    /**
     * Stores the sequence ID of this chunk
     *
     * @generated from field: uint64 sequence_id = 11;
     */
    sequenceId: bigint;
    /**
     * Stores the content of the chunk
     *
     * @generated from field: bytes chunk = 12;
     */
    chunk: Uint8Array;
    /**
     * Stores the checksum of the chunk
     *
     * @generated from field: string checksum = 13;
     */
    checksum: string;
    constructor(data?: PartialMessage<VaultFileVersionChunk>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFileVersionChunk";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFileVersionChunk;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFileVersionChunk;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFileVersionChunk;
    static equals(a: VaultFileVersionChunk | PlainMessage<VaultFileVersionChunk> | undefined, b: VaultFileVersionChunk | PlainMessage<VaultFileVersionChunk> | undefined): boolean;
}
/**
 *
 * Stores the request to unzip a zipped file
 *
 * @generated from message Scailo.VaultFileUnzipRequest
 */
export declare class VaultFileUnzipRequest extends Message<VaultFileUnzipRequest> {
    /**
     * The UUID of the file that needs to be unzipped
     *
     * @generated from field: string uuid = 1;
     */
    uuid: string;
    /**
     * Stores if the file needs to be deleted after unzipping
     *
     * @generated from field: bool delete_after_unzip = 2;
     */
    deleteAfterUnzip: boolean;
    constructor(data?: PartialMessage<VaultFileUnzipRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Scailo.VaultFileUnzipRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VaultFileUnzipRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VaultFileUnzipRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VaultFileUnzipRequest;
    static equals(a: VaultFileUnzipRequest | PlainMessage<VaultFileUnzipRequest> | undefined, b: VaultFileUnzipRequest | PlainMessage<VaultFileUnzipRequest> | undefined): boolean;
}
//# sourceMappingURL=vault_files.scailo_pb.d.ts.map