import { VendorInvoice, VendorInvoiceAncillaryParameters, VendorInvoiceItem, VendorInvoiceItemHistoryRequest, VendorInvoiceItemProspectiveInfoRequest, VendorInvoiceItemsList, VendorInvoiceItemsSearchRequest, VendorInvoiceReceiptStatisticsList, VendorInvoiceReference, VendorInvoiceReferencesList, VendorInvoicesList, VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest, VendorInvoicesServiceAutofillRequest, VendorInvoicesServiceCountReq, VendorInvoicesServiceCreateRequest, VendorInvoicesServiceFilterReq, VendorInvoicesServiceItemCreateRequest, VendorInvoicesServiceItemSpecificationsUpdateRequest, VendorInvoicesServiceItemUpdateRequest, VendorInvoicesServiceMultipleItemsCreateRequest, VendorInvoicesServicePaginatedItemsResponse, VendorInvoicesServicePaginationReq, VendorInvoicesServicePaginationResponse, VendorInvoicesServiceReferenceCreateRequest, VendorInvoicesServiceSearchAllReq, VendorInvoicesServiceUpdateRequest } from "./vendor_invoices.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile, SumResponse } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each vendor invoice
 *
 * @generated from service Scailo.VendorInvoicesService
 */
export declare const VendorInvoicesService: {
    readonly typeName: "Scailo.VendorInvoicesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.VendorInvoicesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof VendorInvoicesServiceCreateRequest;
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
         * @generated from rpc Scailo.VendorInvoicesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof VendorInvoicesServiceCreateRequest;
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
         * @generated from rpc Scailo.VendorInvoicesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof VendorInvoicesServiceUpdateRequest;
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
         * @generated from rpc Scailo.VendorInvoicesService.SendForVerification
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
         * @generated from rpc Scailo.VendorInvoicesService.Verify
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
         * @generated from rpc Scailo.VendorInvoicesService.Approve
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
         * @generated from rpc Scailo.VendorInvoicesService.SendForRevision
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
         * @generated from rpc Scailo.VendorInvoicesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof VendorInvoicesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.VendorInvoicesService.Halt
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
         * @generated from rpc Scailo.VendorInvoicesService.Discard
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
         * @generated from rpc Scailo.VendorInvoicesService.Restore
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
         * @generated from rpc Scailo.VendorInvoicesService.Complete
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
         * @generated from rpc Scailo.VendorInvoicesService.Repeat
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
         * @generated from rpc Scailo.VendorInvoicesService.Reopen
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
         * @generated from rpc Scailo.VendorInvoicesService.CommentAdd
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
         * @generated from rpc Scailo.VendorInvoicesService.SendEmail
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
         * @generated from rpc Scailo.VendorInvoicesService.AttachVaultFolder
         */
        readonly attachVaultFolder: {
            readonly name: "AttachVaultFolder";
            readonly I: typeof VaultFolderAttachRequest;
            readonly O: typeof IdentifierResponse;
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
         * @generated from rpc Scailo.VendorInvoicesService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof VendorInvoicesServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if all the material has been admitted to store
         *
         * @generated from rpc Scailo.VendorInvoicesService.IsAdmittedToStore
         */
        readonly isAdmittedToStore: {
            readonly name: "IsAdmittedToStore";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates a magic link for temporary, authenticated access to the resource.
         *
         * This enables non-system users (or users without active sessions) to view specific details.
         *
         * @generated from rpc Scailo.VendorInvoicesService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add multiple items to a vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.AddMultipleVendorInvoiceItems
         */
        readonly addMultipleVendorInvoiceItems: {
            readonly name: "AddMultipleVendorInvoiceItems";
            readonly I: typeof VendorInvoicesServiceMultipleItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.AddVendorInvoiceItem
         */
        readonly addVendorInvoiceItem: {
            readonly name: "AddVendorInvoiceItem";
            readonly I: typeof VendorInvoicesServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.ModifyVendorInvoiceItem
         */
        readonly modifyVendorInvoiceItem: {
            readonly name: "ModifyVendorInvoiceItem";
            readonly I: typeof VendorInvoicesServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update specifications of an item in a vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.UpdateVendorInvoiceItemSpecifications
         */
        readonly updateVendorInvoiceItemSpecifications: {
            readonly name: "UpdateVendorInvoiceItemSpecifications";
            readonly I: typeof VendorInvoicesServiceItemSpecificationsUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.ApproveVendorInvoiceItem
         */
        readonly approveVendorInvoiceItem: {
            readonly name: "ApproveVendorInvoiceItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.DeleteVendorInvoiceItem
         */
        readonly deleteVendorInvoiceItem: {
            readonly name: "DeleteVendorInvoiceItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.ReorderVendorInvoiceItems
         */
        readonly reorderVendorInvoiceItems: {
            readonly name: "ReorderVendorInvoiceItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Vendor Invoice Item by ID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewVendorInvoiceItemByID
         */
        readonly viewVendorInvoiceItemByID: {
            readonly name: "ViewVendorInvoiceItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof VendorInvoiceItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved vendor invoice items for given vendor invoice ID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewApprovedVendorInvoiceItems
         */
        readonly viewApprovedVendorInvoiceItems: {
            readonly name: "ViewApprovedVendorInvoiceItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof VendorInvoiceItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved vendor invoice items for given vendor invoice ID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewUnapprovedVendorInvoiceItems
         */
        readonly viewUnapprovedVendorInvoiceItems: {
            readonly name: "ViewUnapprovedVendorInvoiceItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof VendorInvoiceItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the vendor invoice item
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewVendorInvoiceItemHistory
         */
        readonly viewVendorInvoiceItemHistory: {
            readonly name: "ViewVendorInvoiceItemHistory";
            readonly I: typeof VendorInvoiceItemHistoryRequest;
            readonly O: typeof VendorInvoiceItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved vendor invoice items for given vendor invoice ID with pagination
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewPaginatedApprovedVendorInvoiceItems
         */
        readonly viewPaginatedApprovedVendorInvoiceItems: {
            readonly name: "ViewPaginatedApprovedVendorInvoiceItems";
            readonly I: typeof VendorInvoiceItemsSearchRequest;
            readonly O: typeof VendorInvoicesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved vendor invoice items for given vendor invoice ID with pagination
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewPaginatedUnapprovedVendorInvoiceItems
         */
        readonly viewPaginatedUnapprovedVendorInvoiceItems: {
            readonly name: "ViewPaginatedUnapprovedVendorInvoiceItems";
            readonly I: typeof VendorInvoiceItemsSearchRequest;
            readonly O: typeof VendorInvoicesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through vendor invoice items with pagination
         *
         * @generated from rpc Scailo.VendorInvoicesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof VendorInvoiceItemsSearchRequest;
            readonly O: typeof VendorInvoicesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.VendorInvoicesService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.VendorInvoicesService.DownloadItemsTemplateAsCSV
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
         * @generated from rpc Scailo.VendorInvoicesService.UploadVendorInvoiceItems
         */
        readonly uploadVendorInvoiceItems: {
            readonly name: "UploadVendorInvoiceItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a reference
         *
         * @generated from rpc Scailo.VendorInvoicesService.AddVendorInvoiceReference
         */
        readonly addVendorInvoiceReference: {
            readonly name: "AddVendorInvoiceReference";
            readonly I: typeof VendorInvoicesServiceReferenceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a reference
         *
         * @generated from rpc Scailo.VendorInvoicesService.ApproveVendorInvoiceReference
         */
        readonly approveVendorInvoiceReference: {
            readonly name: "ApproveVendorInvoiceReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a reference
         *
         * @generated from rpc Scailo.VendorInvoicesService.DeleteVendorInvoiceReference
         */
        readonly deleteVendorInvoiceReference: {
            readonly name: "DeleteVendorInvoiceReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a reference for the given ID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewVendorInvoiceReferenceByID
         */
        readonly viewVendorInvoiceReferenceByID: {
            readonly name: "ViewVendorInvoiceReferenceByID";
            readonly I: typeof Identifier;
            readonly O: typeof VendorInvoiceReference;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all references for given vendor invoice ID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewVendorInvoiceReferences
         */
        readonly viewVendorInvoiceReferences: {
            readonly name: "ViewVendorInvoiceReferences";
            readonly I: typeof Identifier;
            readonly O: typeof VendorInvoiceReferencesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof VendorInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorInvoice;
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
         * @generated from rpc Scailo.VendorInvoicesService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof VendorInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof VendorInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof VendorInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorInvoiceAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof VendorInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof VendorInvoicesServicePaginationReq;
            readonly O: typeof VendorInvoicesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.VendorInvoicesService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective vendor invoice item info for the given family ID and vendor invoice ID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewProspectiveVendorInvoiceItem
         */
        readonly viewProspectiveVendorInvoiceItem: {
            readonly name: "ViewProspectiveVendorInvoiceItem";
            readonly I: typeof VendorInvoiceItemProspectiveInfoRequest;
            readonly O: typeof VendorInvoicesServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View receipt (goods receipt) statistics of the vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewReceiptStatistics
         */
        readonly viewReceiptStatistics: {
            readonly name: "ViewReceiptStatistics";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorInvoiceReceiptStatisticsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest;
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
         * @generated from rpc Scailo.VendorInvoicesService.IsDownloadable
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
         * @generated from rpc Scailo.VendorInvoicesService.DownloadByUUID
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
         * @generated from rpc Scailo.VendorInvoicesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof VendorInvoicesServiceSearchAllReq;
            readonly O: typeof VendorInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.VendorInvoicesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof VendorInvoicesServiceFilterReq;
            readonly O: typeof VendorInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.VendorInvoicesService.CountInStatus
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
         * @generated from rpc Scailo.VendorInvoicesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof VendorInvoicesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the sum of the total value of all the records that match the given criteria
         *
         * @generated from rpc Scailo.VendorInvoicesService.AccruedValue
         */
        readonly accruedValue: {
            readonly name: "AccruedValue";
            readonly I: typeof VendorInvoicesServiceCountReq;
            readonly O: typeof SumResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.VendorInvoicesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof VendorInvoicesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=vendor_invoices.scailo_connect.d.ts.map