import { EquationFamily, EquationFamilyItem, EquationFamilyItemHistoryRequest, EquationFamilyItemsSearchRequest, EquationsFamiliesItemsList, EquationsFamiliesList, EquationsFamiliesServiceCountReq, EquationsFamiliesServiceCreateRequest, EquationsFamiliesServiceFilterReq, EquationsFamiliesServiceItemCreateRequest, EquationsFamiliesServiceItemUpdateRequest, EquationsFamiliesServicePaginatedItemsResponse, EquationsFamiliesServicePaginationReq, EquationsFamiliesServicePaginationResponse, EquationsFamiliesServiceSearchAllReq, EquationsFamiliesServiceUpdateRequest } from "./equations_families.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CloneRequest, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each equation family
 *
 * @generated from service Scailo.EquationsFamiliesService
 */
export declare const EquationsFamiliesService: {
    readonly typeName: "Scailo.EquationsFamiliesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.EquationsFamiliesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof EquationsFamiliesServiceCreateRequest;
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
         * @generated from rpc Scailo.EquationsFamiliesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof EquationsFamiliesServiceCreateRequest;
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
         * @generated from rpc Scailo.EquationsFamiliesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof EquationsFamiliesServiceUpdateRequest;
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
         * @generated from rpc Scailo.EquationsFamiliesService.SendForVerification
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
         * @generated from rpc Scailo.EquationsFamiliesService.Verify
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
         * @generated from rpc Scailo.EquationsFamiliesService.Approve
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
         * @generated from rpc Scailo.EquationsFamiliesService.SendForRevision
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
         * @generated from rpc Scailo.EquationsFamiliesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof EquationsFamiliesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.EquationsFamiliesService.Halt
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
         * @generated from rpc Scailo.EquationsFamiliesService.Discard
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
         * @generated from rpc Scailo.EquationsFamiliesService.Restore
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
         * @generated from rpc Scailo.EquationsFamiliesService.Complete
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
         * @generated from rpc Scailo.EquationsFamiliesService.Repeat
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
         * @generated from rpc Scailo.EquationsFamiliesService.Reopen
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
         * Send Email
         * rpc SendEmail (IdentifierWithEmailAttributes) returns (IdentifierResponse);
         *
         * @generated from rpc Scailo.EquationsFamiliesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
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
         * @generated from rpc Scailo.EquationsFamiliesService.AttachVaultFolder
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
         * @generated from rpc Scailo.EquationsFamiliesService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Initiates the creation of a new record by duplicating the structural properties of an existing record.
         *
         * **Side Effects:**
         * - Provisions a new record populated with the metadata and configurations of the source record.
         * - Does not clone operational transactions or historical logs of the source.
         * - Appends an audit trail entry tracking the cloning operation and justification.
         *
         * @generated from rpc Scailo.EquationsFamiliesService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a equation family
         *
         * @generated from rpc Scailo.EquationsFamiliesService.AddEquationFamilyItem
         */
        readonly addEquationFamilyItem: {
            readonly name: "AddEquationFamilyItem";
            readonly I: typeof EquationsFamiliesServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a equation family
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ModifyEquationFamilyItem
         */
        readonly modifyEquationFamilyItem: {
            readonly name: "ModifyEquationFamilyItem";
            readonly I: typeof EquationsFamiliesServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a equation family
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ApproveEquationFamilyItem
         */
        readonly approveEquationFamilyItem: {
            readonly name: "ApproveEquationFamilyItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a equation family
         *
         * @generated from rpc Scailo.EquationsFamiliesService.DeleteEquationFamilyItem
         */
        readonly deleteEquationFamilyItem: {
            readonly name: "DeleteEquationFamilyItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a equation family
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ReorderEquationFamilyItems
         */
        readonly reorderEquationFamilyItems: {
            readonly name: "ReorderEquationFamilyItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Equation Family Item by ID
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewEquationFamilyItemByID
         */
        readonly viewEquationFamilyItemByID: {
            readonly name: "ViewEquationFamilyItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationFamilyItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved equation family items for given equation family ID
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewApprovedEquationFamilyItems
         */
        readonly viewApprovedEquationFamilyItems: {
            readonly name: "ViewApprovedEquationFamilyItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsFamiliesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved equation family items for given equation family ID
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewUnapprovedEquationFamilyItems
         */
        readonly viewUnapprovedEquationFamilyItems: {
            readonly name: "ViewUnapprovedEquationFamilyItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof EquationsFamiliesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the equation family item
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewEquationFamilyItemHistory
         */
        readonly viewEquationFamilyItemHistory: {
            readonly name: "ViewEquationFamilyItemHistory";
            readonly I: typeof EquationFamilyItemHistoryRequest;
            readonly O: typeof EquationsFamiliesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved equation family items for given equation family ID with pagination
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewPaginatedApprovedEquationFamilyItems
         */
        readonly viewPaginatedApprovedEquationFamilyItems: {
            readonly name: "ViewPaginatedApprovedEquationFamilyItems";
            readonly I: typeof EquationFamilyItemsSearchRequest;
            readonly O: typeof EquationsFamiliesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved equation family items for given equation family ID with pagination
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewPaginatedUnapprovedEquationFamilyItems
         */
        readonly viewPaginatedUnapprovedEquationFamilyItems: {
            readonly name: "ViewPaginatedUnapprovedEquationFamilyItems";
            readonly I: typeof EquationFamilyItemsSearchRequest;
            readonly O: typeof EquationsFamiliesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through equation family items with pagination
         *
         * @generated from rpc Scailo.EquationsFamiliesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof EquationFamilyItemsSearchRequest;
            readonly O: typeof EquationsFamiliesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.EquationsFamiliesService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.EquationsFamiliesService.DownloadItemsTemplateAsCSV
         */
        readonly downloadItemsTemplateAsCSV: {
            readonly name: "DownloadItemsTemplateAsCSV";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the CSV file with the entire dependency tree. Useful for identifying quantities necessary from all the dependencies.
         *
         * @generated from rpc Scailo.EquationsFamiliesService.DownloadTreeAsCSV
         */
        readonly downloadTreeAsCSV: {
            readonly name: "DownloadTreeAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Upload items using a CSV file. This is an idempotent operation. All the existing items are deleted before adding the items from the file.
         *
         * @generated from rpc Scailo.EquationsFamiliesService.UploadEquationFamilyItems
         */
        readonly uploadEquationFamilyItems: {
            readonly name: "UploadEquationFamilyItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationFamily;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationFamily;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Name (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewByName
         */
        readonly viewByName: {
            readonly name: "ViewByName";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof EquationFamily;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationFamily;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationFamily;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof EquationsFamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof EquationsFamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof EquationsFamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof EquationsFamiliesServicePaginationReq;
            readonly O: typeof EquationsFamiliesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the latest equation for a family (denoted by the given identifier)
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewForFamilyID
         */
        readonly viewForFamilyID: {
            readonly name: "ViewForFamilyID";
            readonly I: typeof Identifier;
            readonly O: typeof EquationFamily;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the latest equation for every family from the given identifiers list
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewForFamilyIDs
         */
        readonly viewForFamilyIDs: {
            readonly name: "ViewForFamilyIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof EquationsFamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given equation family (without cyclical dependencies)
         *
         * @generated from rpc Scailo.EquationsFamiliesService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Filter prospective families for the record represented by the given UUID identifier (without cyclical dependencies)
         *
         * @generated from rpc Scailo.EquationsFamiliesService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
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
         * @generated from rpc Scailo.EquationsFamiliesService.IsDownloadable
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
         * @generated from rpc Scailo.EquationsFamiliesService.DownloadByUUID
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
         * @generated from rpc Scailo.EquationsFamiliesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof EquationsFamiliesServiceSearchAllReq;
            readonly O: typeof EquationsFamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.EquationsFamiliesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof EquationsFamiliesServiceFilterReq;
            readonly O: typeof EquationsFamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.EquationsFamiliesService.CountInStatus
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
         * @generated from rpc Scailo.EquationsFamiliesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof EquationsFamiliesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.EquationsFamiliesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof EquationsFamiliesServiceFilterReq;
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
         * @generated from rpc Scailo.EquationsFamiliesService.ImportFromCSV
         */
        readonly importFromCSV: {
            readonly name: "ImportFromCSV";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=equations_families.scailo_connect.d.ts.map