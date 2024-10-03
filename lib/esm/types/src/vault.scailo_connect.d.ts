import { VaultFile, VaultFileAddChunkRequest, VaultFileInitiateFileRequest, VaultFileInitiateFileResponse, VaultFileMoveFileRequest, VaultFileRenameFileRequest, VaultFilesList, VaultFileUnzipRequest, VaultFileVersionChunk, VaultFileVersionsList } from "./vault_files.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { BooleanResponse, CountResponse, Identifier, IdentifierUUID, IdentifierZeroable, StandardFile } from "./base.scailo_pb.js";
import { GiXAppRun, GiXAppRunCountReq, GiXAppRunFilterReq, GiXAppRunsList, VaultAccessLogsList, VaultDuplicateCheckReq, VaultPermission, VaultPermissionAddRequest, VaultPermissionModifyRequest, VaultSearchReq, VaultSearchResponsesList } from "./vault_commons.scailo_pb.js";
import { VaultFolder, VaultFolderAddRequest, VaultFolderDownload, VaultFolderMoveFolderRequest, VaultFolderRenameFolderRequest, VaultFoldersList } from "./vault_folders.scailo_pb.js";
import { GiXRelayReqWithBody, GiXRelayReqWithoutBody, GiXRelayResponse, VaultResourcesList } from "./vault.scailo_pb.js";
import { RolesList } from "./roles.scailo_pb.js";
/**
 *
 * Describes the available services in Vault
 *
 * File APIs
 *
 * @generated from service Scailo.VaultService
 */
export declare const VaultService: {
    readonly typeName: "Scailo.VaultService";
    readonly methods: {
        /**
         * Initiate file upload
         *
         * @generated from rpc Scailo.VaultService.InitiateFile
         */
        readonly initiateFile: {
            readonly name: "InitiateFile";
            readonly I: typeof VaultFileInitiateFileRequest;
            readonly O: typeof VaultFileInitiateFileResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add chunk to a file version and returns the UUID of the added chunk
         *
         * @generated from rpc Scailo.VaultService.AddFileChunk
         */
        readonly addFileChunk: {
            readonly name: "AddFileChunk";
            readonly I: typeof VaultFileAddChunkRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Complete file upload
         *
         * @generated from rpc Scailo.VaultService.CompleteFile
         */
        readonly completeFile: {
            readonly name: "CompleteFile";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Rename file
         *
         * @generated from rpc Scailo.VaultService.RenameFile
         */
        readonly renameFile: {
            readonly name: "RenameFile";
            readonly I: typeof VaultFileRenameFileRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Unzip file
         *
         * @generated from rpc Scailo.VaultService.UnzipFile
         */
        readonly unzipFile: {
            readonly name: "UnzipFile";
            readonly I: typeof VaultFileUnzipRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Persist file
         *
         * @generated from rpc Scailo.VaultService.PersistFile
         */
        readonly persistFile: {
            readonly name: "PersistFile";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Move file
         *
         * @generated from rpc Scailo.VaultService.MoveFile
         */
        readonly moveFile: {
            readonly name: "MoveFile";
            readonly I: typeof VaultFileMoveFileRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete file
         *
         * @generated from rpc Scailo.VaultService.DeleteFile
         */
        readonly deleteFile: {
            readonly name: "DeleteFile";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permission APIs
         * Add permission and returns the UUID of the added permission
         *
         * @generated from rpc Scailo.VaultService.AddFilePermission
         */
        readonly addFilePermission: {
            readonly name: "AddFilePermission";
            readonly I: typeof VaultPermissionAddRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify permission and returns the UUID of the added permission
         *
         * @generated from rpc Scailo.VaultService.ModifyFilePermission
         */
        readonly modifyFilePermission: {
            readonly name: "ModifyFilePermission";
            readonly I: typeof VaultPermissionModifyRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete permission (returns the UUID of the file)
         *
         * @generated from rpc Scailo.VaultService.DeleteFilePermission
         */
        readonly deleteFilePermission: {
            readonly name: "DeleteFilePermission";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Downloads
         * Download file with the given UUID
         *
         * @generated from rpc Scailo.VaultService.DownloadFile
         */
        readonly downloadFile: {
            readonly name: "DownloadFile";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download file version with the given UUID
         *
         * @generated from rpc Scailo.VaultService.DownloadFileVersion
         */
        readonly downloadFileVersion: {
            readonly name: "DownloadFileVersion";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View logo
         *
         * @generated from rpc Scailo.VaultService.ViewFileLogo
         */
        readonly viewFileLogo: {
            readonly name: "ViewFileLogo";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View file by UUID
         *
         * @generated from rpc Scailo.VaultService.ViewFileByUUID
         */
        readonly viewFileByUUID: {
            readonly name: "ViewFileByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VaultFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View file by ID
         *
         * @generated from rpc Scailo.VaultService.ViewFileByID
         */
        readonly viewFileByID: {
            readonly name: "ViewFileByID";
            readonly I: typeof Identifier;
            readonly O: typeof VaultFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View chunk with the given UUID
         *
         * @generated from rpc Scailo.VaultService.ViewFileChunk
         */
        readonly viewFileChunk: {
            readonly name: "ViewFileChunk";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VaultFileVersionChunk;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View chunk metadata
         *
         * @generated from rpc Scailo.VaultService.ViewFileChunkMetadata
         */
        readonly viewFileChunkMetadata: {
            readonly name: "ViewFileChunkMetadata";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VaultFileVersionChunk;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View permission for file
         *
         * @generated from rpc Scailo.VaultService.ViewFilePermission
         */
        readonly viewFilePermission: {
            readonly name: "ViewFilePermission";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VaultPermission;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Check if file already exists
         *
         * @generated from rpc Scailo.VaultService.DoesFileExist
         */
        readonly doesFileExist: {
            readonly name: "DoesFileExist";
            readonly I: typeof VaultDuplicateCheckReq;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all versions of file
         *
         * @generated from rpc Scailo.VaultService.ViewFileVersions
         */
        readonly viewFileVersions: {
            readonly name: "ViewFileVersions";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VaultFileVersionsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View access logs of file
         *
         * @generated from rpc Scailo.VaultService.ViewFileAccessLogs
         */
        readonly viewFileAccessLogs: {
            readonly name: "ViewFileAccessLogs";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VaultAccessLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add folder
         *
         * @generated from rpc Scailo.VaultService.AddFolder
         */
        readonly addFolder: {
            readonly name: "AddFolder";
            readonly I: typeof VaultFolderAddRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Move folder
         *
         * @generated from rpc Scailo.VaultService.MoveFolder
         */
        readonly moveFolder: {
            readonly name: "MoveFolder";
            readonly I: typeof VaultFolderMoveFolderRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Rename folder
         *
         * @generated from rpc Scailo.VaultService.RenameFolder
         */
        readonly renameFolder: {
            readonly name: "RenameFolder";
            readonly I: typeof VaultFolderRenameFolderRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete folder
         *
         * @generated from rpc Scailo.VaultService.DeleteFolder
         */
        readonly deleteFolder: {
            readonly name: "DeleteFolder";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Zip folder and returns the UUID of the vault folder download
         *
         * @generated from rpc Scailo.VaultService.ZipFolder
         */
        readonly zipFolder: {
            readonly name: "ZipFolder";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permission APIs
         * Add permission and returns the UUID of the added permission
         *
         * @generated from rpc Scailo.VaultService.AddFolderPermission
         */
        readonly addFolderPermission: {
            readonly name: "AddFolderPermission";
            readonly I: typeof VaultPermissionAddRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify permission and returns the UUID of the modified permission
         *
         * @generated from rpc Scailo.VaultService.ModifyFolderPermission
         */
        readonly modifyFolderPermission: {
            readonly name: "ModifyFolderPermission";
            readonly I: typeof VaultPermissionModifyRequest;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete permission (returns the UUID of the folder)
         *
         * @generated from rpc Scailo.VaultService.DeleteFolderPermission
         */
        readonly deleteFolderPermission: {
            readonly name: "DeleteFolderPermission";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierUUID;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View folder by ID
         *
         * @generated from rpc Scailo.VaultService.ViewFolderByID
         */
        readonly viewFolderByID: {
            readonly name: "ViewFolderByID";
            readonly I: typeof IdentifierZeroable;
            readonly O: typeof VaultFolder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View folder by UUID
         *
         * @generated from rpc Scailo.VaultService.ViewFolderByUUID
         */
        readonly viewFolderByUUID: {
            readonly name: "ViewFolderByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VaultFolder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the status of the folder download
         *
         * @generated from rpc Scailo.VaultService.ViewFolderDownloadStatus
         */
        readonly viewFolderDownloadStatus: {
            readonly name: "ViewFolderDownloadStatus";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VaultFolderDownload;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the vault folder
         *
         * @generated from rpc Scailo.VaultService.DownloadFolder
         */
        readonly downloadFolder: {
            readonly name: "DownloadFolder";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all files accessible by self in the given folder
         *
         * @generated from rpc Scailo.VaultService.ViewAccessibleFilesInFolder
         */
        readonly viewAccessibleFilesInFolder: {
            readonly name: "ViewAccessibleFilesInFolder";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VaultFilesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all folders accessible by self in the given folder
         *
         * @generated from rpc Scailo.VaultService.ViewAccessibleFoldersInFolder
         */
        readonly viewAccessibleFoldersInFolder: {
            readonly name: "ViewAccessibleFoldersInFolder";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VaultFoldersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all the resources accessible by self in the given folder
         *
         * @generated from rpc Scailo.VaultService.ViewAccessibleResourcesInFolder
         */
        readonly viewAccessibleResourcesInFolder: {
            readonly name: "ViewAccessibleResourcesInFolder";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VaultResourcesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View permission for folder
         *
         * @generated from rpc Scailo.VaultService.ViewFolderPermission
         */
        readonly viewFolderPermission: {
            readonly name: "ViewFolderPermission";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VaultPermission;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Check if folder already exists
         *
         * @generated from rpc Scailo.VaultService.DoesFolderExist
         */
        readonly doesFolderExist: {
            readonly name: "DoesFolderExist";
            readonly I: typeof VaultDuplicateCheckReq;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View access logs of folder
         *
         * @generated from rpc Scailo.VaultService.ViewFolderAccessLogs
         */
        readonly viewFolderAccessLogs: {
            readonly name: "ViewFolderAccessLogs";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VaultAccessLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View passthrough roles for folder
         *
         * @generated from rpc Scailo.VaultService.ViewPassthroughRolesForFolder
         */
        readonly viewPassthroughRolesForFolder: {
            readonly name: "ViewPassthroughRolesForFolder";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof RolesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search for files and folders
         *
         * @generated from rpc Scailo.VaultService.Search
         */
        readonly search: {
            readonly name: "Search";
            readonly I: typeof VaultSearchReq;
            readonly O: typeof VaultSearchResponsesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * ------------------------------------------
         * GiX apps routes
         * Setup GiX app
         *
         * @generated from rpc Scailo.VaultService.SetupGiX
         */
        readonly setupGiX: {
            readonly name: "SetupGiX";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GiXAppRun;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Relay a DELETE API
         *
         * @generated from rpc Scailo.VaultService.GiXRelayDELETE
         */
        readonly giXRelayDELETE: {
            readonly name: "GiXRelayDELETE";
            readonly I: typeof GiXRelayReqWithoutBody;
            readonly O: typeof GiXRelayResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Relay a GET API
         *
         * @generated from rpc Scailo.VaultService.GiXRelayGET
         */
        readonly giXRelayGET: {
            readonly name: "GiXRelayGET";
            readonly I: typeof GiXRelayReqWithoutBody;
            readonly O: typeof GiXRelayResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Relay a HEAD API
         *
         * @generated from rpc Scailo.VaultService.GiXRelayHEAD
         */
        readonly giXRelayHEAD: {
            readonly name: "GiXRelayHEAD";
            readonly I: typeof GiXRelayReqWithoutBody;
            readonly O: typeof GiXRelayResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Relay a PATCH API
         *
         * @generated from rpc Scailo.VaultService.GiXRelayPATCH
         */
        readonly giXRelayPATCH: {
            readonly name: "GiXRelayPATCH";
            readonly I: typeof GiXRelayReqWithBody;
            readonly O: typeof GiXRelayResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Relay a POST API
         *
         * @generated from rpc Scailo.VaultService.GiXRelayPOST
         */
        readonly giXRelayPOST: {
            readonly name: "GiXRelayPOST";
            readonly I: typeof GiXRelayReqWithBody;
            readonly O: typeof GiXRelayResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Relay a PUT API
         *
         * @generated from rpc Scailo.VaultService.GiXRelayPUT
         */
        readonly giXRelayPUT: {
            readonly name: "GiXRelayPUT";
            readonly I: typeof GiXRelayReqWithBody;
            readonly O: typeof GiXRelayResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all runs that match the given filter criteria
         *
         * @generated from rpc Scailo.VaultService.GiXFilter
         */
        readonly giXFilter: {
            readonly name: "GiXFilter";
            readonly I: typeof GiXAppRunFilterReq;
            readonly O: typeof GiXAppRunsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count all runs that match the given filter criteria
         *
         * @generated from rpc Scailo.VaultService.GiXCount
         */
        readonly giXCount: {
            readonly name: "GiXCount";
            readonly I: typeof GiXAppRunCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=vault.scailo_connect.d.ts.map