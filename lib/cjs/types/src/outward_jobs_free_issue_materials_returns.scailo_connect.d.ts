import { OutwardJobFreeIssueMaterialReturn, OutwardJobFreeIssueMaterialReturnAncillaryParameters, OutwardJobFreeIssueMaterialReturnItem, OutwardJobFreeIssueMaterialReturnItemHistoryRequest, OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest, OutwardJobFreeIssueMaterialReturnItemsSearchRequest, OutwardJobsFreeIssueMaterialsReturnsItemsList, OutwardJobsFreeIssueMaterialsReturnsList, OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest, OutwardJobsFreeIssueMaterialsReturnsServiceCountReq, OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest, OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq, OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest, OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest, OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse, OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq, OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse, OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq, OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest } from "./outward_jobs_free_issue_materials_returns.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
import { FilterReturnableInventoryForIdentifierUUID, GenericInventoryList, SearchReturnableInventoryForIdentifierUUID } from "./inventory.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each outward job free issue material return
 *
 * @generated from service Scailo.OutwardJobsFreeIssueMaterialsReturnsService
 */
export declare const OutwardJobsFreeIssueMaterialsReturnsService: {
    readonly typeName: "Scailo.OutwardJobsFreeIssueMaterialsReturnsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest;
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceCreateRequest;
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest;
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.SendForVerification
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Verify
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Approve
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.SendForRevision
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Halt
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Discard
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Restore
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Complete
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Repeat
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Reopen
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.CommentAdd
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.SendEmail
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.AttachVaultFolder
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.CreateMagicLink
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a outward job free issue material return
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.AddOutwardJobFreeIssueMaterialReturnItem
         */
        readonly addOutwardJobFreeIssueMaterialReturnItem: {
            readonly name: "AddOutwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a outward job free issue material return
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ModifyOutwardJobFreeIssueMaterialReturnItem
         */
        readonly modifyOutwardJobFreeIssueMaterialReturnItem: {
            readonly name: "ModifyOutwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a outward job free issue material return
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ApproveOutwardJobFreeIssueMaterialReturnItem
         */
        readonly approveOutwardJobFreeIssueMaterialReturnItem: {
            readonly name: "ApproveOutwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a outward job free issue material return
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.DeleteOutwardJobFreeIssueMaterialReturnItem
         */
        readonly deleteOutwardJobFreeIssueMaterialReturnItem: {
            readonly name: "DeleteOutwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a outward job free issue material return
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ReorderOutwardJobFreeIssueMaterialReturnItems
         */
        readonly reorderOutwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ReorderOutwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Outward Job Free Issue Material Return Item by ID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewOutwardJobFreeIssueMaterialReturnItemByID
         */
        readonly viewOutwardJobFreeIssueMaterialReturnItemByID: {
            readonly name: "ViewOutwardJobFreeIssueMaterialReturnItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJobFreeIssueMaterialReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Outward Job Free Issue Material Return Item by Inventory Hash
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewOutwardJobFreeIssueMaterialReturnItemByInventoryHash
         */
        readonly viewOutwardJobFreeIssueMaterialReturnItemByInventoryHash: {
            readonly name: "ViewOutwardJobFreeIssueMaterialReturnItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof OutwardJobFreeIssueMaterialReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved outward job free issue material return items for given outward job free issue material return ID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewApprovedOutwardJobFreeIssueMaterialReturnItems
         */
        readonly viewApprovedOutwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewApprovedOutwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved outward job free issue material return items for given outward job free issue material return ID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewUnapprovedOutwardJobFreeIssueMaterialReturnItems
         */
        readonly viewUnapprovedOutwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewUnapprovedOutwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the outward job free issue material return item
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewOutwardJobFreeIssueMaterialReturnItemHistory
         */
        readonly viewOutwardJobFreeIssueMaterialReturnItemHistory: {
            readonly name: "ViewOutwardJobFreeIssueMaterialReturnItemHistory";
            readonly I: typeof OutwardJobFreeIssueMaterialReturnItemHistoryRequest;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved outward job free issue material return items for given outward job free issue material return ID with pagination
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewPaginatedApprovedOutwardJobFreeIssueMaterialReturnItems
         */
        readonly viewPaginatedApprovedOutwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewPaginatedApprovedOutwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof OutwardJobFreeIssueMaterialReturnItemsSearchRequest;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved outward job free issue material return items for given outward job free issue material return ID with pagination
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewPaginatedUnapprovedOutwardJobFreeIssueMaterialReturnItems
         */
        readonly viewPaginatedUnapprovedOutwardJobFreeIssueMaterialReturnItems: {
            readonly name: "ViewPaginatedUnapprovedOutwardJobFreeIssueMaterialReturnItems";
            readonly I: typeof OutwardJobFreeIssueMaterialReturnItemsSearchRequest;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through outward job free issue material return items with pagination
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof OutwardJobFreeIssueMaterialReturnItemsSearchRequest;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.DownloadItemsTemplateAsCSV
         */
        readonly downloadItemsTemplateAsCSV: {
            readonly name: "DownloadItemsTemplateAsCSV";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobFreeIssueMaterialReturn;
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof OutwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof OutwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobFreeIssueMaterialReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobFreeIssueMaterialReturnAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServicePaginationReq;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given outward job free issue material return
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective outward job free issue material return item info for the given family ID and outward job free issue material return ID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewProspectiveOutwardJobFreeIssueMaterialReturnItem
         */
        readonly viewProspectiveOutwardJobFreeIssueMaterialReturnItem: {
            readonly name: "ViewProspectiveOutwardJobFreeIssueMaterialReturnItem";
            readonly I: typeof OutwardJobFreeIssueMaterialReturnItemProspectiveInfoRequest;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search for returnable inventory
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.SearchReturnableInventory
         */
        readonly searchReturnableInventory: {
            readonly name: "SearchReturnableInventory";
            readonly I: typeof SearchReturnableInventoryForIdentifierUUID;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Filter returnable inventory
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.FilterReturnableInventory
         */
        readonly filterReturnableInventory: {
            readonly name: "FilterReturnableInventory";
            readonly I: typeof FilterReturnableInventoryForIdentifierUUID;
            readonly O: typeof GenericInventoryList;
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.IsDownloadable
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the label for the outward job free issue material return with the given IdentifierUUID
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.DownloadLabelByUUID
         */
        readonly downloadLabelByUUID: {
            readonly name: "DownloadLabelByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceSearchAllReq;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq;
            readonly O: typeof OutwardJobsFreeIssueMaterialsReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.CountInStatus
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
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.OutwardJobsFreeIssueMaterialsReturnsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof OutwardJobsFreeIssueMaterialsReturnsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=outward_jobs_free_issue_materials_returns.scailo_connect.d.ts.map