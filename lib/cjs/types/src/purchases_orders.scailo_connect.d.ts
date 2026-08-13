import { PurchaseOrder, PurchaseOrderAncillaryParameters, PurchaseOrderBillingStatistics, PurchaseOrderContact, PurchaseOrderContactsList, PurchaseOrderInventoryMatchList, PurchaseOrderInventoryStatistics, PurchaseOrderItem, PurchaseOrderItemHistoryRequest, PurchaseOrderItemProspectiveInfoRequest, PurchaseOrderItemsList, PurchaseOrderItemsSearchRequest, PurchaseOrderPriceMatchList, PurchaseOrderReference, PurchaseOrderReferencesList, PurchasesOrdersList, PurchasesOrdersServiceAutofillRequest, PurchasesOrdersServiceContactCreateRequest, PurchasesOrdersServiceCountReq, PurchasesOrdersServiceCreateRequest, PurchasesOrdersServiceFilterReq, PurchasesOrdersServiceItemCreateRequest, PurchasesOrdersServiceItemSpecificationsUpdateRequest, PurchasesOrdersServiceItemUpdateRequest, PurchasesOrdersServiceMultipleItemsCreateRequest, PurchasesOrdersServicePaginatedItemsResponse, PurchasesOrdersServicePaginationReq, PurchasesOrdersServicePaginationResponse, PurchasesOrdersServiceReferenceCreateRequest, PurchasesOrdersServiceSearchAllReq, PurchasesOrdersServiceUpdateRequest } from "./purchases_orders.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, BooleanResponse, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, PriceResponse, ReorderItemsRequest, RepeatWithDeliveryDate, SimpleSearchReq, StandardFile, SumResponse } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each purchase order
 *
 * @generated from service Scailo.PurchasesOrdersService
 */
export declare const PurchasesOrdersService: {
    readonly typeName: "Scailo.PurchasesOrdersService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.PurchasesOrdersService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof PurchasesOrdersServiceCreateRequest;
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
         * @generated from rpc Scailo.PurchasesOrdersService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof PurchasesOrdersServiceCreateRequest;
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
         * @generated from rpc Scailo.PurchasesOrdersService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof PurchasesOrdersServiceUpdateRequest;
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
         * @generated from rpc Scailo.PurchasesOrdersService.SendForVerification
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
         * @generated from rpc Scailo.PurchasesOrdersService.Verify
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
         * @generated from rpc Scailo.PurchasesOrdersService.Approve
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
         * @generated from rpc Scailo.PurchasesOrdersService.SendForRevision
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
         * @generated from rpc Scailo.PurchasesOrdersService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof PurchasesOrdersServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.PurchasesOrdersService.Halt
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
         * @generated from rpc Scailo.PurchasesOrdersService.Discard
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
         * @generated from rpc Scailo.PurchasesOrdersService.Restore
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
         * @generated from rpc Scailo.PurchasesOrdersService.Complete
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
         * @generated from rpc Scailo.PurchasesOrdersService.Repeat
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
         * @generated from rpc Scailo.PurchasesOrdersService.Reopen
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
         * @generated from rpc Scailo.PurchasesOrdersService.CommentAdd
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
         * @generated from rpc Scailo.PurchasesOrdersService.SendEmail
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
         * @generated from rpc Scailo.PurchasesOrdersService.AttachVaultFolder
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
         * @generated from rpc Scailo.PurchasesOrdersService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof PurchasesOrdersServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Initiates a formal amendment process for a specific record, transitioning it into a structured revision workflow.
         *
         * This API is utilized when substantive modifications are required for an already finalized or approved record.
         * Rather than mutating the active data directly, it explicitly triggers a compliance-driven revision cycle,
         * ensuring that all proposed changes are tracked and undergo standard review and authorization procedures.
         *
         * **Side Effects & Lifecycle:**
         * * The record's internal amendment count property is strictly incremented by 1.
         * * The record is placed into a pending revision state, typically preserving the availability of the currently approved version until the amendment is finalized.
         * * The optional user comment is permanently appended to the record's audit log as the formal justification for initiating the change.
         *
         * @generated from rpc Scailo.PurchasesOrdersService.Amend
         */
        readonly amend: {
            readonly name: "Amend";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates a magic link for temporary, authenticated access to the resource.
         *
         * This enables non-system users (or users without active sessions) to view specific details.
         *
         * @generated from rpc Scailo.PurchasesOrdersService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add multiple items to a purchase order
         *
         * @generated from rpc Scailo.PurchasesOrdersService.AddMultiplePurchaseOrderItems
         */
        readonly addMultiplePurchaseOrderItems: {
            readonly name: "AddMultiplePurchaseOrderItems";
            readonly I: typeof PurchasesOrdersServiceMultipleItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a purchase order
         *
         * @generated from rpc Scailo.PurchasesOrdersService.AddPurchaseOrderItem
         */
        readonly addPurchaseOrderItem: {
            readonly name: "AddPurchaseOrderItem";
            readonly I: typeof PurchasesOrdersServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a purchase order
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ModifyPurchaseOrderItem
         */
        readonly modifyPurchaseOrderItem: {
            readonly name: "ModifyPurchaseOrderItem";
            readonly I: typeof PurchasesOrdersServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update specifications of an item in a purchase order
         *
         * @generated from rpc Scailo.PurchasesOrdersService.UpdatePurchaseOrderItemSpecifications
         */
        readonly updatePurchaseOrderItemSpecifications: {
            readonly name: "UpdatePurchaseOrderItemSpecifications";
            readonly I: typeof PurchasesOrdersServiceItemSpecificationsUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a purchase order
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ApprovePurchaseOrderItem
         */
        readonly approvePurchaseOrderItem: {
            readonly name: "ApprovePurchaseOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a purchase order
         *
         * @generated from rpc Scailo.PurchasesOrdersService.DeletePurchaseOrderItem
         */
        readonly deletePurchaseOrderItem: {
            readonly name: "DeletePurchaseOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a purchase order
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ReorderPurchaseOrderItems
         */
        readonly reorderPurchaseOrderItems: {
            readonly name: "ReorderPurchaseOrderItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Purchase Order Item by ID
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewPurchaseOrderItemByID
         */
        readonly viewPurchaseOrderItemByID: {
            readonly name: "ViewPurchaseOrderItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseOrderItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Purchase Order Item's price after factoring in the discount
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewPurchaseOrderItemPrice
         */
        readonly viewPurchaseOrderItemPrice: {
            readonly name: "ViewPurchaseOrderItemPrice";
            readonly I: typeof PurchaseOrderItemProspectiveInfoRequest;
            readonly O: typeof PriceResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved purchase order items for given purchase order ID
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewApprovedPurchaseOrderItems
         */
        readonly viewApprovedPurchaseOrderItems: {
            readonly name: "ViewApprovedPurchaseOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchaseOrderItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved purchase order items for given purchase order ID
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewUnapprovedPurchaseOrderItems
         */
        readonly viewUnapprovedPurchaseOrderItems: {
            readonly name: "ViewUnapprovedPurchaseOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchaseOrderItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the purchase order item
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewPurchaseOrderItemHistory
         */
        readonly viewPurchaseOrderItemHistory: {
            readonly name: "ViewPurchaseOrderItemHistory";
            readonly I: typeof PurchaseOrderItemHistoryRequest;
            readonly O: typeof PurchaseOrderItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved purchase order items for given purchase order ID with pagination
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewPaginatedApprovedPurchaseOrderItems
         */
        readonly viewPaginatedApprovedPurchaseOrderItems: {
            readonly name: "ViewPaginatedApprovedPurchaseOrderItems";
            readonly I: typeof PurchaseOrderItemsSearchRequest;
            readonly O: typeof PurchasesOrdersServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved purchase order items for given purchase order ID with pagination
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewPaginatedUnapprovedPurchaseOrderItems
         */
        readonly viewPaginatedUnapprovedPurchaseOrderItems: {
            readonly name: "ViewPaginatedUnapprovedPurchaseOrderItems";
            readonly I: typeof PurchaseOrderItemsSearchRequest;
            readonly O: typeof PurchasesOrdersServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through purchase order items with pagination
         *
         * @generated from rpc Scailo.PurchasesOrdersService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof PurchaseOrderItemsSearchRequest;
            readonly O: typeof PurchasesOrdersServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.PurchasesOrdersService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.PurchasesOrdersService.DownloadItemsTemplateAsCSV
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
         * @generated from rpc Scailo.PurchasesOrdersService.UploadPurchaseOrderItems
         */
        readonly uploadPurchaseOrderItems: {
            readonly name: "UploadPurchaseOrderItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a contact
         *
         * @generated from rpc Scailo.PurchasesOrdersService.AddPurchaseOrderContact
         */
        readonly addPurchaseOrderContact: {
            readonly name: "AddPurchaseOrderContact";
            readonly I: typeof PurchasesOrdersServiceContactCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a contact
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ApprovePurchaseOrderContact
         */
        readonly approvePurchaseOrderContact: {
            readonly name: "ApprovePurchaseOrderContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a contact
         *
         * @generated from rpc Scailo.PurchasesOrdersService.DeletePurchaseOrderContact
         */
        readonly deletePurchaseOrderContact: {
            readonly name: "DeletePurchaseOrderContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a contact for the given ID
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewPurchaseOrderContactByID
         */
        readonly viewPurchaseOrderContactByID: {
            readonly name: "ViewPurchaseOrderContactByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseOrderContact;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all contacts for given purchase order UUID
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewPurchaseOrderContacts
         */
        readonly viewPurchaseOrderContacts: {
            readonly name: "ViewPurchaseOrderContacts";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseOrderContactsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a reference
         *
         * @generated from rpc Scailo.PurchasesOrdersService.AddPurchaseOrderReference
         */
        readonly addPurchaseOrderReference: {
            readonly name: "AddPurchaseOrderReference";
            readonly I: typeof PurchasesOrdersServiceReferenceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a reference
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ApprovePurchaseOrderReference
         */
        readonly approvePurchaseOrderReference: {
            readonly name: "ApprovePurchaseOrderReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a reference
         *
         * @generated from rpc Scailo.PurchasesOrdersService.DeletePurchaseOrderReference
         */
        readonly deletePurchaseOrderReference: {
            readonly name: "DeletePurchaseOrderReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a reference for the given ID
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewPurchaseOrderReferenceByID
         */
        readonly viewPurchaseOrderReferenceByID: {
            readonly name: "ViewPurchaseOrderReferenceByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseOrderReference;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all references for given purchase order ID
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewPurchaseOrderReferences
         */
        readonly viewPurchaseOrderReferences: {
            readonly name: "ViewPurchaseOrderReferences";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseOrderReferencesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseOrder;
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
         * @generated from rpc Scailo.PurchasesOrdersService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof PurchaseOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof PurchasesOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseOrderAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof PurchasesOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchasesOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof PurchasesOrdersServicePaginationReq;
            readonly O: typeof PurchasesOrdersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the comprehensive, chronological history of formal amendments applied to a specific record.
         *
         * This read-only query exposes the complete audit trail of revision workflows that the entity has undergone.
         * It is explicitly designed to support compliance checks, historical tracking, and administrative reviews by
         * detailing exactly how and when a record evolved over its lifecycle.
         *
         * **Side Effects & Lifecycle:**
         * * This is a strictly read-only operation; the underlying record and its current lifecycle state remain entirely unchanged.
         * * Aggregates and returns a sequential log of amendment events, which typically include revision counts, initiation timestamps, and the justification comments provided when the amendments were triggered.
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewAmendments
         */
        readonly viewAmendments: {
            readonly name: "ViewAmendments";
            readonly I: typeof Identifier;
            readonly O: typeof AmendmentLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Inventory Statistics of Purchase Order
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewInventoryStatistics
         */
        readonly viewInventoryStatistics: {
            readonly name: "ViewInventoryStatistics";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseOrderInventoryStatistics;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Billing Statistics of Purchase Order
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewBillingStatistics
         */
        readonly viewBillingStatistics: {
            readonly name: "ViewBillingStatistics";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseOrderBillingStatistics;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Inventory Match of all the families within a Purchase Order
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewInventoryMatch
         */
        readonly viewInventoryMatch: {
            readonly name: "ViewInventoryMatch";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseOrderInventoryMatchList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Price Match of all the families within a Purchase Order (between the purchase order, and the corresponding vendor invoices, and any corresponding debit notes)
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewPriceMatch
         */
        readonly viewPriceMatch: {
            readonly name: "ViewPriceMatch";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseOrderPriceMatchList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given purchase order
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.PurchasesOrdersService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective purchase order item info for the given family ID and purchase order ID
         *
         * @generated from rpc Scailo.PurchasesOrdersService.ViewProspectivePurchaseOrderItem
         */
        readonly viewProspectivePurchaseOrderItem: {
            readonly name: "ViewProspectivePurchaseOrderItem";
            readonly I: typeof PurchaseOrderItemProspectiveInfoRequest;
            readonly O: typeof PurchasesOrdersServiceItemCreateRequest;
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
         * @generated from rpc Scailo.PurchasesOrdersService.IsDownloadable
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
         * @generated from rpc Scailo.PurchasesOrdersService.DownloadByUUID
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
         * @generated from rpc Scailo.PurchasesOrdersService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof PurchasesOrdersServiceSearchAllReq;
            readonly O: typeof PurchasesOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.PurchasesOrdersService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof PurchasesOrdersServiceFilterReq;
            readonly O: typeof PurchasesOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.PurchasesOrdersService.CountInStatus
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
         * @generated from rpc Scailo.PurchasesOrdersService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof PurchasesOrdersServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the sum of the total value of all the records that match the given criteria
         *
         * @generated from rpc Scailo.PurchasesOrdersService.AccruedValue
         */
        readonly accruedValue: {
            readonly name: "AccruedValue";
            readonly I: typeof PurchasesOrdersServiceCountReq;
            readonly O: typeof SumResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.PurchasesOrdersService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof PurchasesOrdersServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=purchases_orders.scailo_connect.d.ts.map