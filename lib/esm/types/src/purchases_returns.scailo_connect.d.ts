import { PurchaseReturn, PurchaseReturnAncillaryParameters, PurchaseReturnItem, PurchaseReturnItemHistoryRequest, PurchaseReturnItemProspectiveInfoRequest, PurchaseReturnItemsSearchRequest, PurchasesReturnsItemsList, PurchasesReturnsList, PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest, PurchasesReturnsServiceCountReq, PurchasesReturnsServiceCreateRequest, PurchasesReturnsServiceFilterReq, PurchasesReturnsServiceItemCreateRequest, PurchasesReturnsServiceItemUpdateRequest, PurchasesReturnsServicePaginatedItemsResponse, PurchasesReturnsServicePaginationReq, PurchasesReturnsServicePaginationResponse, PurchasesReturnsServiceSearchAllReq, PurchasesReturnsServiceUpdateRequest } from "./purchases_returns.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
import { FilterReturnableInventoryForIdentifierUUID, GenericInventoryList, SearchReturnableInventoryForIdentifierUUID } from "./inventory.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each purchase return
 *
 * @generated from service Scailo.PurchasesReturnsService
 */
export declare const PurchasesReturnsService: {
    readonly typeName: "Scailo.PurchasesReturnsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.PurchasesReturnsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof PurchasesReturnsServiceCreateRequest;
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
         * @generated from rpc Scailo.PurchasesReturnsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof PurchasesReturnsServiceCreateRequest;
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
         * @generated from rpc Scailo.PurchasesReturnsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof PurchasesReturnsServiceUpdateRequest;
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
         * @generated from rpc Scailo.PurchasesReturnsService.SendForVerification
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
         * @generated from rpc Scailo.PurchasesReturnsService.Verify
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
         * @generated from rpc Scailo.PurchasesReturnsService.Approve
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
         * @generated from rpc Scailo.PurchasesReturnsService.SendForRevision
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
         * @generated from rpc Scailo.PurchasesReturnsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof PurchasesReturnsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.PurchasesReturnsService.Halt
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
         * @generated from rpc Scailo.PurchasesReturnsService.Discard
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
         * @generated from rpc Scailo.PurchasesReturnsService.Restore
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
         * @generated from rpc Scailo.PurchasesReturnsService.Complete
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
         * @generated from rpc Scailo.PurchasesReturnsService.Repeat
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
         * @generated from rpc Scailo.PurchasesReturnsService.Reopen
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
         * @generated from rpc Scailo.PurchasesReturnsService.CommentAdd
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
         * @generated from rpc Scailo.PurchasesReturnsService.SendEmail
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
         * @generated from rpc Scailo.PurchasesReturnsService.AttachVaultFolder
         */
        readonly attachVaultFolder: {
            readonly name: "AttachVaultFolder";
            readonly I: typeof VaultFolderAttachRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Evaluates whether the specified record has satisfied all prerequisite business rules required to transition into a completed lifecycle state.
         *
         * This is a non-mutating, read-only query that performs comprehensive server-side validation against the record's current operational constraints. Depending on the specific domain context, the underlying checks may verify that all dependent workflows are resolved, associated child records (such as line items or sub-tasks) have reached their terminal states, and no mandatory actions remain pending.
         * Client applications typically utilize this endpoint to dynamically determine whether the "Complete" action should be enabled or exposed in the user interface.
         *
         * @generated from rpc Scailo.PurchasesReturnsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates a magic link for temporary, authenticated access to the resource.
         *
         * This enables non-system users (or users without active sessions) to view specific details.
         *
         * @generated from rpc Scailo.PurchasesReturnsService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a purchase return
         *
         * @generated from rpc Scailo.PurchasesReturnsService.AddPurchaseReturnItem
         */
        readonly addPurchaseReturnItem: {
            readonly name: "AddPurchaseReturnItem";
            readonly I: typeof PurchasesReturnsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a purchase return
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ModifyPurchaseReturnItem
         */
        readonly modifyPurchaseReturnItem: {
            readonly name: "ModifyPurchaseReturnItem";
            readonly I: typeof PurchasesReturnsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a purchase return
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ApprovePurchaseReturnItem
         */
        readonly approvePurchaseReturnItem: {
            readonly name: "ApprovePurchaseReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a purchase return
         *
         * @generated from rpc Scailo.PurchasesReturnsService.DeletePurchaseReturnItem
         */
        readonly deletePurchaseReturnItem: {
            readonly name: "DeletePurchaseReturnItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a purchase return
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ReorderPurchaseReturnItems
         */
        readonly reorderPurchaseReturnItems: {
            readonly name: "ReorderPurchaseReturnItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Purchase Return Item by ID
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewPurchaseReturnItemByID
         */
        readonly viewPurchaseReturnItemByID: {
            readonly name: "ViewPurchaseReturnItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Purchase Return Item by Inventory Hash
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewPurchaseReturnItemByInventoryHash
         */
        readonly viewPurchaseReturnItemByInventoryHash: {
            readonly name: "ViewPurchaseReturnItemByInventoryHash";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof PurchaseReturnItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved purchase return items for given purchase return ID
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewApprovedPurchaseReturnItems
         */
        readonly viewApprovedPurchaseReturnItems: {
            readonly name: "ViewApprovedPurchaseReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved purchase return items for given purchase return ID
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewUnapprovedPurchaseReturnItems
         */
        readonly viewUnapprovedPurchaseReturnItems: {
            readonly name: "ViewUnapprovedPurchaseReturnItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the purchase return item
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewPurchaseReturnItemHistory
         */
        readonly viewPurchaseReturnItemHistory: {
            readonly name: "ViewPurchaseReturnItemHistory";
            readonly I: typeof PurchaseReturnItemHistoryRequest;
            readonly O: typeof PurchasesReturnsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved sales return items for given sales return ID with pagination
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewPaginatedApprovedPurchaseReturnItems
         */
        readonly viewPaginatedApprovedPurchaseReturnItems: {
            readonly name: "ViewPaginatedApprovedPurchaseReturnItems";
            readonly I: typeof PurchaseReturnItemsSearchRequest;
            readonly O: typeof PurchasesReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved sales return items for given sales return ID with pagination
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewPaginatedUnapprovedPurchaseReturnItems
         */
        readonly viewPaginatedUnapprovedPurchaseReturnItems: {
            readonly name: "ViewPaginatedUnapprovedPurchaseReturnItems";
            readonly I: typeof PurchaseReturnItemsSearchRequest;
            readonly O: typeof PurchasesReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through sales return items with pagination
         *
         * @generated from rpc Scailo.PurchasesReturnsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof PurchaseReturnItemsSearchRequest;
            readonly O: typeof PurchasesReturnsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.PurchasesReturnsService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.PurchasesReturnsService.DownloadItemsTemplateAsCSV
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
         * @generated from rpc Scailo.PurchasesReturnsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseReturn;
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
         * @generated from rpc Scailo.PurchasesReturnsService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof PurchaseReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseReturn;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseReturnAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof PurchasesReturnsServicePaginationReq;
            readonly O: typeof PurchasesReturnsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given purchase return
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.PurchasesReturnsService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective purchase return item info for the given family ID and purchase return ID
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewProspectivePurchaseReturnItem
         */
        readonly viewProspectivePurchaseReturnItem: {
            readonly name: "ViewProspectivePurchaseReturnItem";
            readonly I: typeof PurchaseReturnItemProspectiveInfoRequest;
            readonly O: typeof PurchasesReturnsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search for returnable inventory
         *
         * @generated from rpc Scailo.PurchasesReturnsService.SearchReturnableInventory
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
         * @generated from rpc Scailo.PurchasesReturnsService.FilterReturnableInventory
         */
        readonly filterReturnableInventory: {
            readonly name: "FilterReturnableInventory";
            readonly I: typeof FilterReturnableInventoryForIdentifierUUID;
            readonly O: typeof GenericInventoryList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Other view operations
         * View the associated debit note information that is denoted by the identifier in the response for the goods dispatch that is denoted by the identifier UUID in the request
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewAssociatedDebitNoteInfo
         */
        readonly viewAssociatedDebitNoteInfo: {
            readonly name: "ViewAssociatedDebitNoteInfo";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Purchase Return has been billed
         *
         * @generated from rpc Scailo.PurchasesReturnsService.IsBilled
         */
        readonly isBilled: {
            readonly name: "IsBilled";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Scailo.PurchasesReturnsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof PurchasesReturnsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
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
         * @generated from rpc Scailo.PurchasesReturnsService.IsDownloadable
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
         * @generated from rpc Scailo.PurchasesReturnsService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the label for the purchase return with the given IdentifierUUID
         *
         * @generated from rpc Scailo.PurchasesReturnsService.DownloadLabelByUUID
         */
        readonly downloadLabelByUUID: {
            readonly name: "DownloadLabelByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a free-text search across records using a search key.
         *
         * @generated from rpc Scailo.PurchasesReturnsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof PurchasesReturnsServiceSearchAllReq;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.PurchasesReturnsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof PurchasesReturnsServiceFilterReq;
            readonly O: typeof PurchasesReturnsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.PurchasesReturnsService.CountInStatus
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
         * @generated from rpc Scailo.PurchasesReturnsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof PurchasesReturnsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.PurchasesReturnsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof PurchasesReturnsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=purchases_returns.scailo_connect.d.ts.map