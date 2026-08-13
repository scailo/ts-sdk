import { Associate, AssociatePaginationResp, AssociatesList, AssociatesServiceCountReq, AssociatesServiceCreateRequest, AssociatesServiceFilterReq, AssociatesServiceImportRequest, AssociatesServicePaginationReq, AssociatesServiceSearchAllReq, AssociatesServiceUpdateRequest } from "./associates.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { ActiveStatus, BooleanResponse, BytesResponse, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, StandardFile } from "./base.scailo_pb.js";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
/**
 *
 * The AssociatesService manages the full operational lifecycle of associates.
 * It provides standard CRUD infrastructure, enterprise data ingestion, audit-logged state
 * transitions, compliance-driven file attachments, and granular permission checking.
 *
 * @generated from service Scailo.AssociatesService
 */
export declare const AssociatesService: {
    readonly typeName: "Scailo.AssociatesService";
    readonly methods: {
        /**
         * Bulk imports associate records from a structured request payload.
         *
         * **Side Effects:**
         * - Validates, parses, and persists multiple associate profiles simultaneously.
         * - Automatically generates unique system UUIDs for new entries.
         * - Dispatches asynchronous background synchronization jobs to downstream systems.
         *
         * **Errors:**
         * - `INVALID_ARGUMENT`: If the payload contains structurally malformed entries.
         *
         * @generated from rpc Scailo.AssociatesService.ImportFromReq
         */
        readonly importFromReq: {
            readonly name: "ImportFromReq";
            readonly I: typeof AssociatesServiceImportRequest;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Creates a new associate record and establishes their initial profile context.
         *
         * **Side Effects:**
         * - Reserves an incremental internal ID and provisions a globally unique UUID.
         * - Records a creation entry in the system compliance log.
         *
         * **Errors:**
         * - `INVALID_ARGUMENT`: If structural or business validation rules fail.
         *
         * @generated from rpc Scailo.AssociatesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof AssociatesServiceCreateRequest;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates an existing associate record with modified profile attributes.
         *
         * This method modifies primary operational data field-by-field based on the provided request.
         *
         * **Side Effects:**
         * - Overwrites mutable associate properties.
         * - Refreshes the record's primary modification timestamp.
         *
         * **Errors:**
         * - `NOT_FOUND`: If the targeted associate record does not exist.
         * - `FAILED_PRECONDITION`: If the associate is in a state that locks modification.
         *
         * @generated from rpc Scailo.AssociatesService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof AssociatesServiceUpdateRequest;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently cancels or deactivates the associate record within the system.
         *
         * **Status Transition:** -> `DISCARDED`
         *
         * **Side Effects:**
         * - Immediately revokes the associate's active visibility flags across primary lookups.
         * - Logs the required user justification comment into the system compliance trail.
         *
         * @generated from rpc Scailo.AssociatesService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restores a previously `DISCARDED` associate record back to an active state.
         *
         * **Status Transition:** -> `ACTIVE`
         *
         * **Side Effects:**
         * - Re-instates the associate record to standard search indices and data views.
         * - Records the restoration action and associated user notes in the audit trail.
         *
         * @generated from rpc Scailo.AssociatesService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Attaches a specified folder directly to a record without requiring a full revision workflow.
         *
         * This is a convenience API designed to bypass the traditional multi-step modification lifecycle
         * (e.g., creating a revision, updating data, submitting for verification, and awaiting approval).
         * It allows for the immediate, single-step association of a vault folder.
         *
         * **Side Effects & Lifecycle:**
         * * The overall status of the record remains unchanged.
         * * The record's modification timestamp is automatically updated to the current time.
         * * An entry is appended to the record's audit log tracking this attachment.
         *
         * @generated from rpc Scailo.AssociatesService.AttachVaultFolder
         */
        readonly attachVaultFolder: {
            readonly name: "AttachVaultFolder";
            readonly I: typeof VaultFolderAttachRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.AssociatesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.AssociatesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.AssociatesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.AssociatesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Associate;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.AssociatesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates and downloads the contact details of a specified associate formatted as an electronic business card (vCard).
         *
         * The resulting binary stream can be parsed directly by standard external email and contact clients.
         *
         * **Errors:**
         * - `NOT_FOUND`: If the associate target ID is missing.
         *
         * @generated from rpc Scailo.AssociatesService.DownloadVCard
         */
        readonly downloadVCard: {
            readonly name: "DownloadVCard";
            readonly I: typeof Identifier;
            readonly O: typeof BytesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.AssociatesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.AssociatesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.AssociatesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof AssociatesServicePaginationReq;
            readonly O: typeof AssociatePaginationResp;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Evaluates if the currently authenticated caller has sufficient permissions to modify an associate record.
         *
         * **Note:** This acts as a pre-flight authorization check for client applications to dynamically adjust UI capabilities.
         *
         * @generated from rpc Scailo.AssociatesService.CheckModifyPermission
         */
        readonly checkModifyPermission: {
            readonly name: "CheckModifyPermission";
            readonly I: typeof Empty;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Evaluates if the currently authenticated caller has sufficient permissions to add a new associate to the platform.
         *
         * **Note:** This acts as a pre-flight authorization check for client applications to dynamically adjust UI capabilities.
         *
         * @generated from rpc Scailo.AssociatesService.CheckAddPermission
         */
        readonly checkAddPermission: {
            readonly name: "CheckAddPermission";
            readonly I: typeof Empty;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.AssociatesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof AssociatesServiceSearchAllReq;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.AssociatesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof AssociatesServiceFilterReq;
            readonly O: typeof AssociatesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total count of records matching the given complex filter criteria.
         *
         * @generated from rpc Scailo.AssociatesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof AssociatesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.AssociatesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof AssociatesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Bulk imports records from a provided CSV file.
         * Behavior:
         * - Deduplication: Skips entries where the `code` already exists in the system.
         * - Atomicity: This is an "all-or-nothing" operation; if any part of the
         *   import fails, no changes are committed.
         * - Idempotency: Multiple calls with the same CSV result in the same state.
         * Returns a list of UUIDs for all successfully processed or existing records.
         *
         * @generated from rpc Scailo.AssociatesService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=associates.scailo_connect.d.ts.map