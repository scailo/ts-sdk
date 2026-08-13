import { StockAudit, StockAuditItem, StockAuditItemHistoryRequest, StockAuditItemProspectiveInfoRequest, StockAuditItemsSearchRequest, StockAuditsItemsList, StockAuditsList, StockAuditsServiceCountReq, StockAuditsServiceCreateRequest, StockAuditsServiceFilterReq, StockAuditsServiceItemCreateRequest, StockAuditsServiceItemUpdateRequest, StockAuditsServicePaginatedItemsResponse, StockAuditsServicePaginationReq, StockAuditsServicePaginationResponse, StockAuditsServiceSearchAllReq, StockAuditsServiceUpdateRequest } from "./stock_audits.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each stock audit
 *
 * @generated from service Scailo.StockAuditsService
 */
export declare const StockAuditsService: {
    readonly typeName: "Scailo.StockAuditsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.StockAuditsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof StockAuditsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Saves a new record as a draft without triggering side effects.
         *
         * Use this method when you have incomplete information but wish to persist
         * the record for later completion. The record remains in a `DRAFT` state.
         *
         * **Note:** Some strict validation rules may be relaxed in the backend for drafts compared to `Create`.
         *
         * **Side Effects:**
         * - Generates a unique system UUID.
         * - Records an audit log for the "Draft" action.
         *
         * **Errors:**
         * - `INVALID_ARGUMENT`: If critical system fields are missing.
         *
         * @generated from rpc Scailo.StockAuditsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof StockAuditsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates an existing record that is currently in `DRAFT` status.
         *
         * This method allows modification of all primary attributes while the record is not yet verified.
         *
         * **Errors:**
         * - `FAILED_PRECONDITION`: If the record is not in a `DRAFT` state.
         * - `NOT_FOUND`: If the provided ID does not exist.
         *
         * @generated from rpc Scailo.StockAuditsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof StockAuditsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Submits a record in `DRAFT` or `REVISION` status for verification.
         *
         * This triggers the first stage of the approval workflow.
         *
         * **Status Transition:** -> `PREVERIFY`
         *
         * **Side Effects:**
         * - Notifies designated verifiers or approvers.
         * - Locks certain fields from being updated without returning to `REVISION`.
         *
         * @generated from rpc Scailo.StockAuditsService.SendForVerification
         */
        readonly sendForVerification: {
            readonly name: "SendForVerification";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Marks a record as verified, signaling that it is ready for final approval.
         *
         * **Status Transition:** -> `VERIFIED`
         *
         * **Side Effects:**
         * - Records the verifying user and timestamp in the audit logs.
         *
         * @generated from rpc Scailo.StockAuditsService.Verify
         */
        readonly verify: {
            readonly name: "Verify";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Officially approves the record.
         *
         * **Status Transition:** -> `STANDING`
         *
         * **Side Effects:**
         * - Finalizes the `final_ref_number`.
         * - Records the approver's identity and timestamp.
         *
         * @generated from rpc Scailo.StockAuditsService.Approve
         */
        readonly approve: {
            readonly name: "Approve";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Sends the record back to the creator for corrections.
         *
         * Use this if details are incorrect or supporting documents (in the vault) are missing.
         *
         * **Status Transition:** -> `REVISION`
         *
         * **Side Effects:**
         * - Notifies the record creator that changes are required.
         *
         * @generated from rpc Scailo.StockAuditsService.SendForRevision
         */
        readonly sendForRevision: {
            readonly name: "SendForRevision";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates a record that has been sent back for `REVISION`.
         *
         * **Side Effects:**
         * - Re-validates the updated fields.
         *
         * @generated from rpc Scailo.StockAuditsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof StockAuditsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.StockAuditsService.Halt
         */
        readonly halt: {
            readonly name: "Halt";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently cancels the record.
         *
         * Records in this state are typically ignored.
         *
         * **Status Transition:** -> `DISCARDED`
         *
         * @generated from rpc Scailo.StockAuditsService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restores a previously `DISCARDED` or `HALTED` record.
         *
         * **Side Effects:**
         * - Moves the record back to `PREVERIFY` and sends for verification.
         *
         * @generated from rpc Scailo.StockAuditsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Marks the record as finalized and fully processed.
         *
         * **Status Transition:** -> `COMPLETED`
         *
         * **Side Effects:**
         * - Locks the record from further modification.
         *
         * @generated from rpc Scailo.StockAuditsService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Creates a new record based on an existing one (cloning).
         *
         * This is useful for repeating records or correcting finalized records by starting fresh.
         *
         * @generated from rpc Scailo.StockAuditsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopens a finalized or closed record for further modifications.
         *
         * **Status Transition:** -> `REVISION`
         *
         * **Side Effects:**
         * - Unlocks the record to allow edits.
         * - Logs the required user comment into the audit trail for compliance tracking.
         *
         * @generated from rpc Scailo.StockAuditsService.Reopen
         */
        readonly reopen: {
            readonly name: "Reopen";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Adds an audit comment to the record's history without changing its current lifecycle status.
         *
         * @generated from rpc Scailo.StockAuditsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Triggers an automated email notification related to the record.
         *
         * **Side Effects:**
         * - Dispatches a structured email to the designated recipients based on the provided attributes.
         * - Appends an entry to the system communication logs for auditing purposes.
         *
         * @generated from rpc Scailo.StockAuditsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
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
         * @generated from rpc Scailo.StockAuditsService.AttachVaultFolder
         */
        readonly attachVaultFolder: {
            readonly name: "AttachVaultFolder";
            readonly I: typeof VaultFolderAttachRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates a magic link for temporary, authenticated access to the resource.
         *
         * This enables non-system users (or users without active sessions) to view specific details.
         *
         * @generated from rpc Scailo.StockAuditsService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Evaluates whether the specified record has satisfied all prerequisite business rules required to transition into a completed lifecycle state.
         *
         * This is a non-mutating, read-only query that performs comprehensive server-side validation against the record's current operational constraints. Depending on the specific domain context, the underlying checks may verify that all dependent workflows are resolved, associated child records (such as line items or sub-tasks) have reached their terminal states, and no mandatory actions remain pending.
         * Client applications typically utilize this endpoint to dynamically determine whether the "Complete" action should be enabled or exposed in the user interface.
         *
         * @generated from rpc Scailo.StockAuditsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a stock audit
         *
         * @generated from rpc Scailo.StockAuditsService.AddStockAuditItem
         */
        readonly addStockAuditItem: {
            readonly name: "AddStockAuditItem";
            readonly I: typeof StockAuditsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a stock audit
         *
         * @generated from rpc Scailo.StockAuditsService.ModifyStockAuditItem
         */
        readonly modifyStockAuditItem: {
            readonly name: "ModifyStockAuditItem";
            readonly I: typeof StockAuditsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a stock audit
         *
         * @generated from rpc Scailo.StockAuditsService.ApproveStockAuditItem
         */
        readonly approveStockAuditItem: {
            readonly name: "ApproveStockAuditItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a stock audit
         *
         * @generated from rpc Scailo.StockAuditsService.DeleteStockAuditItem
         */
        readonly deleteStockAuditItem: {
            readonly name: "DeleteStockAuditItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a stock audit
         *
         * @generated from rpc Scailo.StockAuditsService.ReorderStockAuditItems
         */
        readonly reorderStockAuditItems: {
            readonly name: "ReorderStockAuditItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Stock Audit Item by ID
         *
         * @generated from rpc Scailo.StockAuditsService.ViewStockAuditItemByID
         */
        readonly viewStockAuditItemByID: {
            readonly name: "ViewStockAuditItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockAuditItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Stock Audit Item by Inventory Hash
         *
         * @generated from rpc Scailo.StockAuditsService.ViewStockAuditItemByInventoryHash
         */
        readonly viewStockAuditItemByInventoryHash: {
            readonly name: "ViewStockAuditItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof StockAuditItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved stock audit items for given stock audit ID
         *
         * @generated from rpc Scailo.StockAuditsService.ViewApprovedStockAuditItems
         */
        readonly viewApprovedStockAuditItems: {
            readonly name: "ViewApprovedStockAuditItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockAuditsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved stock audit items for given stock audit ID
         *
         * @generated from rpc Scailo.StockAuditsService.ViewUnapprovedStockAuditItems
         */
        readonly viewUnapprovedStockAuditItems: {
            readonly name: "ViewUnapprovedStockAuditItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof StockAuditsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the stock audit item
         *
         * @generated from rpc Scailo.StockAuditsService.ViewStockAuditItemHistory
         */
        readonly viewStockAuditItemHistory: {
            readonly name: "ViewStockAuditItemHistory";
            readonly I: typeof StockAuditItemHistoryRequest;
            readonly O: typeof StockAuditsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved stock audit items for given stock audit ID with pagination
         *
         * @generated from rpc Scailo.StockAuditsService.ViewPaginatedApprovedStockAuditItems
         */
        readonly viewPaginatedApprovedStockAuditItems: {
            readonly name: "ViewPaginatedApprovedStockAuditItems";
            readonly I: typeof StockAuditItemsSearchRequest;
            readonly O: typeof StockAuditsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved stock audit items for given stock audit ID with pagination
         *
         * @generated from rpc Scailo.StockAuditsService.ViewPaginatedUnapprovedStockAuditItems
         */
        readonly viewPaginatedUnapprovedStockAuditItems: {
            readonly name: "ViewPaginatedUnapprovedStockAuditItems";
            readonly I: typeof StockAuditItemsSearchRequest;
            readonly O: typeof StockAuditsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through stock audit items with pagination
         *
         * @generated from rpc Scailo.StockAuditsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof StockAuditItemsSearchRequest;
            readonly O: typeof StockAuditsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.StockAuditsService.DownloadItemsAsCSV
         */
        readonly downloadItemsAsCSV: {
            readonly name: "DownloadItemsAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV template that could be used to upload items
         *
         * @generated from rpc Scailo.StockAuditsService.DownloadItemsTemplateAsCSV
         */
        readonly downloadItemsTemplateAsCSV: {
            readonly name: "DownloadItemsTemplateAsCSV";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Upload items using a CSV file. This is an idempotent operation. All the existing items are deleted before adding the items from the file.
         *
         * @generated from rpc Scailo.StockAuditsService.UploadStockAuditItems
         */
        readonly uploadStockAuditItems: {
            readonly name: "UploadStockAuditItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.StockAuditsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockAudit;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.StockAuditsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StockAudit;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record based on its user-defined, external reference ID.
         *
         * This read-only operation is utilized for targeted lookups using human-readable identifiers (e.g., "REF-2023-001") rather than internal system IDs or unpredictable UUIDs.
         * Because external reference IDs might occasionally be duplicated across a tenant's dataset (due to legacy data imports, external CRM syncing overlaps, or manual entry overrides),
         * this query guarantees a deterministic response. In the event of a collision, it automatically resolves the conflict by returning only the most recently created or modified record
         * that matches the requested reference string.
         *
         * @generated from rpc Scailo.StockAuditsService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof StockAudit;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.StockAuditsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof StockAudit;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.StockAuditsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StockAudit;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.StockAuditsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof StockAuditsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.StockAuditsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof StockAuditsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.StockAuditsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StockAuditsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.StockAuditsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof StockAuditsServicePaginationReq;
            readonly O: typeof StockAuditsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given stock audit
         *
         * @generated from rpc Scailo.StockAuditsService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Filter prospective families for the record represented by the given UUID identifier
         *
         * @generated from rpc Scailo.StockAuditsService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective stock audit item info for the given family ID and stock audit ID
         *
         * @generated from rpc Scailo.StockAuditsService.ViewProspectiveStockAuditItem
         */
        readonly viewProspectiveStockAuditItem: {
            readonly name: "ViewProspectiveStockAuditItem";
            readonly I: typeof StockAuditItemProspectiveInfoRequest;
            readonly O: typeof StockAuditsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the label for the stock audit with the given IdentifierUUID
         *
         * @generated from rpc Scailo.StockAuditsService.DownloadLabelByUUID
         */
        readonly downloadLabelByUUID: {
            readonly name: "DownloadLabelByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Evaluates the download eligibility of a specific record using its universally unique identifier (UUID).
         *
         * This endpoint serves as a lightweight precursor to the actual file retrieval process. It verifies
         * whether the target record supports file extraction by checking if a custom download function has
         * been implemented for the underlying asset. By utilizing this check, client applications can
         * preemptively determine file availability and dynamically adjust user interface elements
         * (e.g., enabling or disabling a download button) without initiating a full, potentially heavy
         * download request.
         *
         * @generated from rpc Scailo.StockAuditsService.IsDownloadable
         */
        readonly isDownloadable: {
            readonly name: "IsDownloadable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the underlying file or document payload associated with a specific entity
         * using its universally unique identifier (UUID).
         *
         * This endpoint is designed for versatile resource retrieval and is commonly utilized
         * to facilitate direct, secure, or public-facing downloads. By relying on an obscure
         * UUID rather than predictable internal sequential IDs, it ensures that external
         * download links remain unguessable and safe for broad distribution.
         *
         * @generated from rpc Scailo.StockAuditsService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.StockAuditsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof StockAuditsServiceSearchAllReq;
            readonly O: typeof StockAuditsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.StockAuditsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof StockAuditsServiceFilterReq;
            readonly O: typeof StockAuditsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.StockAuditsService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total count of records matching the given complex filter criteria.
         *
         * @generated from rpc Scailo.StockAuditsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof StockAuditsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.StockAuditsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof StockAuditsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=stock_audits.scailo_connect.d.ts.map