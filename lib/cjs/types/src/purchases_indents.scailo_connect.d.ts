import { PurchaseIndent, PurchaseIndentItem, PurchaseIndentItemHistoryRequest, PurchaseIndentItemProspectiveInfoRequest, PurchaseIndentItemsSearchRequest, PurchaseIndentOrderedStatisticsList, PurchasesIndentsItemsList, PurchasesIndentsList, PurchasesIndentsServiceAutofillRequest, PurchasesIndentsServiceCountReq, PurchasesIndentsServiceCreateRequest, PurchasesIndentsServiceFilterReq, PurchasesIndentsServiceItemCreateRequest, PurchasesIndentsServiceItemSpecificationsUpdateRequest, PurchasesIndentsServiceItemUpdateRequest, PurchasesIndentsServiceMultipleItemsCreateRequest, PurchasesIndentsServicePaginatedItemsResponse, PurchasesIndentsServicePaginationReq, PurchasesIndentsServicePaginationResponse, PurchasesIndentsServiceSearchAllReq, PurchasesIndentsServiceUpdateRequest } from "./purchases_indents.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, RepeatWithDeliveryDate, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each purchase indent
 *
 * @generated from service Scailo.PurchasesIndentsService
 */
export declare const PurchasesIndentsService: {
    readonly typeName: "Scailo.PurchasesIndentsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.PurchasesIndentsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof PurchasesIndentsServiceCreateRequest;
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
         * @generated from rpc Scailo.PurchasesIndentsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof PurchasesIndentsServiceCreateRequest;
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
         * @generated from rpc Scailo.PurchasesIndentsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof PurchasesIndentsServiceUpdateRequest;
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
         * @generated from rpc Scailo.PurchasesIndentsService.SendForVerification
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
         * @generated from rpc Scailo.PurchasesIndentsService.Verify
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
         * @generated from rpc Scailo.PurchasesIndentsService.Approve
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
         * @generated from rpc Scailo.PurchasesIndentsService.SendForRevision
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
         * @generated from rpc Scailo.PurchasesIndentsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof PurchasesIndentsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.PurchasesIndentsService.Halt
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
         * @generated from rpc Scailo.PurchasesIndentsService.Discard
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
         * @generated from rpc Scailo.PurchasesIndentsService.Restore
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
         * @generated from rpc Scailo.PurchasesIndentsService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Duplicates an existing operational record (e.g., an order, schedule, or requisition) to create a new, distinct entity with a specified delivery date.
         *
         * **Side Effects:**
         * - Provisions a completely new record that inherits the core attributes, line items, and configurations of the source record identified by the UUID.
         * - Overrides the original delivery schedule with the newly provided `delivery_date` and assigns the newly provided external `reference_id`.
         * - Appends an audit trail entry linking the new record to its original source, tracking the duplication event and justification comment.
         * - Returns the internal identifier and UUID of the newly generated record.
         *
         * @generated from rpc Scailo.PurchasesIndentsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof RepeatWithDeliveryDate;
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
         * @generated from rpc Scailo.PurchasesIndentsService.Reopen
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
         * @generated from rpc Scailo.PurchasesIndentsService.CommentAdd
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
         * @generated from rpc Scailo.PurchasesIndentsService.SendEmail
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
         * @generated from rpc Scailo.PurchasesIndentsService.AttachVaultFolder
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
         * @generated from rpc Scailo.PurchasesIndentsService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Automatically populates a record with line items and configurations derived from its linked references.
         *
         * **Side Effects:**
         * - Queries the target record (identified by its UUID) for any attached operational constraints or references.
         * - Dynamically generates and attaches the corresponding line items to the record based on the sourced data, minimizing manual data entry.
         * - Appends an audit trail entry tracking the execution of the autofill operation and the provided justification comment.
         *
         * @generated from rpc Scailo.PurchasesIndentsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof PurchasesIndentsServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Evaluates whether the specified record has satisfied all prerequisite business rules required to transition into a completed lifecycle state.
         *
         * This is a non-mutating, read-only query that performs comprehensive server-side validation against the record's current operational constraints. Depending on the specific domain context, the underlying checks may verify that all dependent workflows are resolved, associated child records (such as line items or sub-tasks) have reached their terminal states, and no mandatory actions remain pending.
         * Client applications typically utilize this endpoint to dynamically determine whether the "Complete" action should be enabled or exposed in the user interface.
         *
         * @generated from rpc Scailo.PurchasesIndentsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add multiple items to a purchase indent
         *
         * @generated from rpc Scailo.PurchasesIndentsService.AddMultiplePurchaseIndentItems
         */
        readonly addMultiplePurchaseIndentItems: {
            readonly name: "AddMultiplePurchaseIndentItems";
            readonly I: typeof PurchasesIndentsServiceMultipleItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a purchase indent
         *
         * @generated from rpc Scailo.PurchasesIndentsService.AddPurchaseIndentItem
         */
        readonly addPurchaseIndentItem: {
            readonly name: "AddPurchaseIndentItem";
            readonly I: typeof PurchasesIndentsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a purchase indent
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ModifyPurchaseIndentItem
         */
        readonly modifyPurchaseIndentItem: {
            readonly name: "ModifyPurchaseIndentItem";
            readonly I: typeof PurchasesIndentsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update specifications of an item in a purchase indent
         *
         * @generated from rpc Scailo.PurchasesIndentsService.UpdatePurchaseIndentItemSpecifications
         */
        readonly updatePurchaseIndentItemSpecifications: {
            readonly name: "UpdatePurchaseIndentItemSpecifications";
            readonly I: typeof PurchasesIndentsServiceItemSpecificationsUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a purchase indent
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ApprovePurchaseIndentItem
         */
        readonly approvePurchaseIndentItem: {
            readonly name: "ApprovePurchaseIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a purchase indent
         *
         * @generated from rpc Scailo.PurchasesIndentsService.DeletePurchaseIndentItem
         */
        readonly deletePurchaseIndentItem: {
            readonly name: "DeletePurchaseIndentItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a purchase indent
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ReorderPurchaseIndentItems
         */
        readonly reorderPurchaseIndentItems: {
            readonly name: "ReorderPurchaseIndentItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Purchase Indent Item by ID
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewPurchaseIndentItemByID
         */
        readonly viewPurchaseIndentItemByID: {
            readonly name: "ViewPurchaseIndentItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseIndentItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved purchase indent items for given purchase indent ID
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewApprovedPurchaseIndentItems
         */
        readonly viewApprovedPurchaseIndentItems: {
            readonly name: "ViewApprovedPurchaseIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved purchase indent items for given purchase indent ID
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewUnapprovedPurchaseIndentItems
         */
        readonly viewUnapprovedPurchaseIndentItems: {
            readonly name: "ViewUnapprovedPurchaseIndentItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the purchase indent item
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewPurchaseIndentItemHistory
         */
        readonly viewPurchaseIndentItemHistory: {
            readonly name: "ViewPurchaseIndentItemHistory";
            readonly I: typeof PurchaseIndentItemHistoryRequest;
            readonly O: typeof PurchasesIndentsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved purchase indent items for given purchase indent ID with pagination
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewPaginatedApprovedPurchaseIndentItems
         */
        readonly viewPaginatedApprovedPurchaseIndentItems: {
            readonly name: "ViewPaginatedApprovedPurchaseIndentItems";
            readonly I: typeof PurchaseIndentItemsSearchRequest;
            readonly O: typeof PurchasesIndentsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved purchase indent items for given purchase indent ID with pagination
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewPaginatedUnapprovedPurchaseIndentItems
         */
        readonly viewPaginatedUnapprovedPurchaseIndentItems: {
            readonly name: "ViewPaginatedUnapprovedPurchaseIndentItems";
            readonly I: typeof PurchaseIndentItemsSearchRequest;
            readonly O: typeof PurchasesIndentsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through purchase indent items with pagination
         *
         * @generated from rpc Scailo.PurchasesIndentsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof PurchaseIndentItemsSearchRequest;
            readonly O: typeof PurchasesIndentsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.PurchasesIndentsService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.PurchasesIndentsService.DownloadItemsTemplateAsCSV
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
         * @generated from rpc Scailo.PurchasesIndentsService.UploadPurchaseIndentItems
         */
        readonly uploadPurchaseIndentItems: {
            readonly name: "UploadPurchaseIndentItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseIndent;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseIndent;
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
         * @generated from rpc Scailo.PurchasesIndentsService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof PurchaseIndent;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseIndent;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseIndent;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof PurchasesIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof PurchasesIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchasesIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof PurchasesIndentsServicePaginationReq;
            readonly O: typeof PurchasesIndentsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all purchase order IDs that are associated with the given purchase indent ID
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewAssociatedPurchaseOrderIDs
         */
        readonly viewAssociatedPurchaseOrderIDs: {
            readonly name: "ViewAssociatedPurchaseOrderIDs";
            readonly I: typeof Identifier;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective items for the given purchase indent
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.PurchasesIndentsService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective purchase indent item info for the given family ID and purchase indent ID
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewProspectivePurchaseIndentItem
         */
        readonly viewProspectivePurchaseIndentItem: {
            readonly name: "ViewProspectivePurchaseIndentItem";
            readonly I: typeof PurchaseIndentItemProspectiveInfoRequest;
            readonly O: typeof PurchasesIndentsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View ordered (purchase order) statistics of the purchase indent
         *
         * @generated from rpc Scailo.PurchasesIndentsService.ViewOrderedStatistics
         */
        readonly viewOrderedStatistics: {
            readonly name: "ViewOrderedStatistics";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseIndentOrderedStatisticsList;
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
         * @generated from rpc Scailo.PurchasesIndentsService.IsDownloadable
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
         * @generated from rpc Scailo.PurchasesIndentsService.DownloadByUUID
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
         * @generated from rpc Scailo.PurchasesIndentsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof PurchasesIndentsServiceSearchAllReq;
            readonly O: typeof PurchasesIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.PurchasesIndentsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof PurchasesIndentsServiceFilterReq;
            readonly O: typeof PurchasesIndentsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.PurchasesIndentsService.CountInStatus
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
         * @generated from rpc Scailo.PurchasesIndentsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof PurchasesIndentsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.PurchasesIndentsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof PurchasesIndentsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=purchases_indents.scailo_connect.d.ts.map