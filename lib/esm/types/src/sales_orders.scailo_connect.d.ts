import { SalesOrder, SalesOrderAncillaryParameters, SalesOrderBillingStatistics, SalesOrderContact, SalesOrderContactsList, SalesOrderInventoryMatchList, SalesOrderInventoryStatistics, SalesOrderItem, SalesOrderItemHistoryRequest, SalesOrderItemProspectiveInfoRequest, SalesOrderItemsList, SalesOrderItemsSearchRequest, SalesOrderPriceMatchList, SalesOrderReference, SalesOrderReferencesList, SalesOrdersList, SalesOrdersServiceAutofillRequest, SalesOrdersServiceContactCreateRequest, SalesOrdersServiceCountReq, SalesOrdersServiceCreateRequest, SalesOrdersServiceFilterReq, SalesOrdersServiceItemCreateRequest, SalesOrdersServiceItemSpecificationsUpdateRequest, SalesOrdersServiceItemTermsUpdateRequest, SalesOrdersServiceItemUpdateRequest, SalesOrdersServiceMultipleItemsCreateRequest, SalesOrdersServicePaginatedItemsResponse, SalesOrdersServicePaginationReq, SalesOrdersServicePaginationResponse, SalesOrdersServiceReferenceCreateRequest, SalesOrdersServiceSearchAllReq, SalesOrdersServiceUpdateRequest } from "./sales_orders.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, BooleanResponse, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, PriceResponse, ReorderItemsRequest, RepeatWithDeliveryDate, SimpleSearchReq, StandardFile, SumResponse } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Core service for managing the complete operational and approval lifecycle of Sales Orders.
 *
 * A Sales Order represents a formally negotiated agreement between the organization and a buyer
 * for the sale of specific goods or services. As the foundational document in the sales pipeline,
 * it acts as the authoritative source of truth for negotiated pricing, requested quantities,
 * client specifications, and overall commercial terms.
 *
 * **Lifecycle & Workflow:**
 * This service strictly enforces the state machine of a Sales Order:
 * - **Drafting:** Creating initial drafts with relaxed validation to allow iterative data entry.
 * - **Verification:** Submitting the order through internal review gates to ensure technical and commercial accuracy.
 * - **Approval:** Finalizing the order into a `STANDING` state, legally locking in the commercial terms and generating the final reference number.
 *
 * **Downstream Impact:**
 * Once a Sales Order reaches the approved (`STANDING`) state, it unlocks downstream workflows—authorizing
 * warehouse teams to physically fulfill the order (Goods Dispatches) and finance teams to generate preliminary
 * or finalized billing documents (Proforma and Sales Invoices) against the constrained quantities.
 *
 * @generated from service Scailo.SalesOrdersService
 */
export declare const SalesOrdersService: {
    readonly typeName: "Scailo.SalesOrdersService";
    readonly methods: {
        /**
         * Creates a new record and immediately moves it to the verification workflow.
         *
         * This method validates all required fields.
         * The record is created with a `STANDARD_LIFECYCLE_STATUS.PREVERIFY` status.
         *
         * **Side Effects:**
         * - Generates a unique system UUID.
         * - Records an audit log for the "Create" action.
         * - May trigger automated verification workflows.
         *
         * **Errors:**
         * - `INVALID_ARGUMENT`: If validation rules fail (e.g., negative quantity, invalid timestamps).
         * - `ALREADY_EXISTS`: If the `reference_id` is already taken.
         *
         * @generated from rpc Scailo.SalesOrdersService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof SalesOrdersServiceCreateRequest;
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
         * @generated from rpc Scailo.SalesOrdersService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof SalesOrdersServiceCreateRequest;
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
         * @generated from rpc Scailo.SalesOrdersService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof SalesOrdersServiceUpdateRequest;
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
         * @generated from rpc Scailo.SalesOrdersService.SendForVerification
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
         * @generated from rpc Scailo.SalesOrdersService.Verify
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
         * @generated from rpc Scailo.SalesOrdersService.Approve
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
         * @generated from rpc Scailo.SalesOrdersService.SendForRevision
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
         * @generated from rpc Scailo.SalesOrdersService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof SalesOrdersServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.SalesOrdersService.Halt
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
         * @generated from rpc Scailo.SalesOrdersService.Discard
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
         * @generated from rpc Scailo.SalesOrdersService.Restore
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
         * @generated from rpc Scailo.SalesOrdersService.Complete
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
         * @generated from rpc Scailo.SalesOrdersService.Repeat
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
         * @generated from rpc Scailo.SalesOrdersService.Reopen
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
         * @generated from rpc Scailo.SalesOrdersService.CommentAdd
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
         * @generated from rpc Scailo.SalesOrdersService.SendEmail
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
         * @generated from rpc Scailo.SalesOrdersService.AttachVaultFolder
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
         * @generated from rpc Scailo.SalesOrdersService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof SalesOrdersServiceAutofillRequest;
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
         * @generated from rpc Scailo.SalesOrdersService.Amend
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
         * @generated from rpc Scailo.SalesOrdersService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Appends multiple line items to an existing Sales Order in a single batch transaction.
         *
         * **Side Effects:**
         * - Dynamically calculates base pricing, discounts, and taxes for each item in the batch.
         * - Attaches the newly created line items to the parent sales order.
         * - May place the items into a pending approval state depending on system configuration.
         * - Appends a unified audit trail entry tracking the batch creation event.
         *
         * @generated from rpc Scailo.SalesOrdersService.AddMultipleSalesOrderItems
         */
        readonly addMultipleSalesOrderItems: {
            readonly name: "AddMultipleSalesOrderItems";
            readonly I: typeof SalesOrdersServiceMultipleItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Appends a single line item to an existing Sales Order.
         *
         * **Side Effects:**
         * - Validates product family eligibility and calculates financial totals for the requested quantities.
         * - Attaches the new line item to the parent order.
         * - Appends an audit trail entry tracking the creation and user justification.
         *
         * @generated from rpc Scailo.SalesOrdersService.AddSalesOrderItem
         */
        readonly addSalesOrderItem: {
            readonly name: "AddSalesOrderItem";
            readonly I: typeof SalesOrdersServiceItemCreateRequest;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modifies the core transactional parameters (including quantities and client units) of an existing line item.
         *
         * **Side Effects:**
         * - Overwrites the previous quantities, terms, and specifications of the item.
         * - Triggers a recalculation of the parent sales order's grand total.
         * - May reset the item's approval status, requiring re-authorization.
         * - Appends an audit trail entry tracking the modifications.
         *
         * @generated from rpc Scailo.SalesOrdersService.ModifySalesOrderItem
         */
        readonly modifySalesOrderItem: {
            readonly name: "ModifySalesOrderItem";
            readonly I: typeof SalesOrdersServiceItemUpdateRequest;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates strictly the commercial terms (Price, Discount, Tax Group) and operational metadata (Delivery Date, Specifications) of a line item.
         *
         * **Side Effects:**
         * - Safely applies financial and scheduling adjustments without modifying underlying ordered quantities.
         * - Designed specifically to be executed even after an item has been partially or fully dispatched.
         * - Appends an audit trail entry tracking the financial or scheduling adjustments.
         *
         * @generated from rpc Scailo.SalesOrdersService.UpdateSalesOrderItemTerms
         */
        readonly updateSalesOrderItemTerms: {
            readonly name: "UpdateSalesOrderItemTerms";
            readonly I: typeof SalesOrdersServiceItemTermsUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Isolates updates strictly to the textual specifications or manufacturing notes of a line item.
         *
         * **Side Effects:**
         * - Modifies operational instructions without impacting any commercial terms, pricing, or quantities.
         * - Appends an audit trail entry tracking the specification change.
         *
         * @generated from rpc Scailo.SalesOrdersService.UpdateSalesOrderItemSpecifications
         */
        readonly updateSalesOrderItemSpecifications: {
            readonly name: "UpdateSalesOrderItemSpecifications";
            readonly I: typeof SalesOrdersServiceItemSpecificationsUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending line item, finalizing its active status within the sales order.
         *
         * **Side Effects:**
         * - Activates the line item, making it eligible for dispatch and invoicing workflows.
         * - Appends the required approval metadata, timestamp, and audit comment to the record's history.
         *
         * @generated from rpc Scailo.SalesOrdersService.ApproveSalesOrderItem
         */
        readonly approveSalesOrderItem: {
            readonly name: "ApproveSalesOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently removes or deactivates a line item from the sales order.
         *
         * **Side Effects:**
         * - Revokes the item from the order, subtracting its value from the grand total.
         * - Logs the deletion justification comment into the system compliance log.
         *
         * @generated from rpc Scailo.SalesOrdersService.DeleteSalesOrderItem
         */
        readonly deleteSalesOrderItem: {
            readonly name: "DeleteSalesOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorders the numerical sequence of line items within the sales order.
         *
         * **Side Effects:**
         * - Mutates the display sequence (`sort_order`) of the specified items in bulk.
         * - Directly affects how the items are visually arranged in UI tables and on printed PDF documents.
         *
         * @generated from rpc Scailo.SalesOrdersService.ReorderSalesOrderItems
         */
        readonly reorderSalesOrderItems: {
            readonly name: "ReorderSalesOrderItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the complete, finalized details of a specific line item by its internal sequence ID.
         *
         * This is a read-only operation that fetches full metadata, approval histories, and calculated financial values.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewSalesOrderItemByID
         */
        readonly viewSalesOrderItemByID: {
            readonly name: "ViewSalesOrderItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesOrderItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Calculates and returns the prospective net price of a line item after factoring in the requested discounts and tax groups.
         *
         * This read-only query is typically utilized by frontend interfaces to dynamically display "live" price previews to users as they adjust discount fields, prior to officially saving the item.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewSalesOrderItemPrice
         */
        readonly viewSalesOrderItemPrice: {
            readonly name: "ViewSalesOrderItemPrice";
            readonly I: typeof SalesOrderItemProspectiveInfoRequest;
            readonly O: typeof PriceResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all active, fully approved line items mapped to a specific sales order ID.
         *
         * This read-only query is optimized for rendering the finalized order summary on frontend interfaces and printed invoices.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewApprovedSalesOrderItems
         */
        readonly viewApprovedSalesOrderItems: {
            readonly name: "ViewApprovedSalesOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesOrderItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists pending or unapproved line items mapped to a specific sales order ID.
         *
         * This read-only query is utilized primarily by administrative dashboards to quickly identify order lines awaiting financial or operational authorization.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewUnapprovedSalesOrderItems
         */
        readonly viewUnapprovedSalesOrderItems: {
            readonly name: "ViewUnapprovedSalesOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesOrderItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the historical audit trail and lifecycle changes of a specific line item.
         *
         * This read-only operation aggregates the chronological evolution of the item, tracking term adjustments, specification updates, and state changes.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewSalesOrderItemHistory
         */
        readonly viewSalesOrderItemHistory: {
            readonly name: "ViewSalesOrderItemHistory";
            readonly I: typeof SalesOrderItemHistoryRequest;
            readonly O: typeof SalesOrderItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists active, approved line items using robust pagination controls.
         *
         * This read-only query is optimized for rendering extremely large orders in frontend data tables, supporting explicit windowing parameters.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewPaginatedApprovedSalesOrderItems
         */
        readonly viewPaginatedApprovedSalesOrderItems: {
            readonly name: "ViewPaginatedApprovedSalesOrderItems";
            readonly I: typeof SalesOrderItemsSearchRequest;
            readonly O: typeof SalesOrdersServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists pending or unapproved line items using robust pagination controls.
         *
         * This read-only query is optimized for administrative review dashboards handling high volumes of unapproved items.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewPaginatedUnapprovedSalesOrderItems
         */
        readonly viewPaginatedUnapprovedSalesOrderItems: {
            readonly name: "ViewPaginatedUnapprovedSalesOrderItems";
            readonly I: typeof SalesOrderItemsSearchRequest;
            readonly O: typeof SalesOrdersServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Searches through all line items using advanced filters, status flags, fuzzy text matching, and pagination.
         *
         * This read-only query is the primary entry point for complex lookups across massive order catalogs.
         *
         * @generated from rpc Scailo.SalesOrdersService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof SalesOrderItemsSearchRequest;
            readonly O: typeof SalesOrdersServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Exports the current list of line items for a specific sales order into a downloadable CSV file.
         *
         * This read-only operation is used by administrators to audit large orders offline, or as a baseline to modify items locally before executing a bulk upload.
         *
         * @generated from rpc Scailo.SalesOrdersService.DownloadItemsAsCSV
         */
        readonly downloadItemsAsCSV: {
            readonly name: "DownloadItemsAsCSV";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates and downloads a blank, structurally compliant CSV template.
         *
         * This read-only operation provides clients with the exact column headers required to successfully perform a bulk line-item upload.
         *
         * @generated from rpc Scailo.SalesOrdersService.DownloadItemsTemplateAsCSV
         */
        readonly downloadItemsTemplateAsCSV: {
            readonly name: "DownloadItemsTemplateAsCSV";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Processes a bulk ingestion of line items for a specific sales order via a CSV file upload.
         *
         * **Side Effects:**
         * - **CRITICAL:** This is an idempotent, destructive operation. It automatically deletes all existing line items currently mapped to the sales order before applying the new items from the CSV.
         * - Wipes the current active list and replaces it entirely with the parsed file contents.
         * - Triggers recalculations of order totals and appends creation audit logs for the newly imported items.
         *
         * @generated from rpc Scailo.SalesOrdersService.UploadSalesOrderItems
         */
        readonly uploadSalesOrderItems: {
            readonly name: "UploadSalesOrderItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Assigns a designated client associate (contact person) to the sales order.
         *
         * **Side Effects:**
         * - Creates a linkage identifying the specific individual in charge of or accountable for the order on the client's side.
         * - Appends an audit trail entry tracking the assignment.
         *
         * @generated from rpc Scailo.SalesOrdersService.AddSalesOrderContact
         */
        readonly addSalesOrderContact: {
            readonly name: "AddSalesOrderContact";
            readonly I: typeof SalesOrdersServiceContactCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending client contact assignment, finalizing their visibility on the order.
         *
         * **Side Effects:**
         * - Activates the contact linkage, allowing the associate's details to appear on formal documents.
         * - Appends an approval audit trail entry.
         *
         * @generated from rpc Scailo.SalesOrdersService.ApproveSalesOrderContact
         */
        readonly approveSalesOrderContact: {
            readonly name: "ApproveSalesOrderContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Removes a designated client associate from the sales order.
         *
         * **Side Effects:**
         * - Severs the linkage between the order and the individual.
         * - Appends a deletion justification to the audit log.
         *
         * @generated from rpc Scailo.SalesOrdersService.DeleteSalesOrderContact
         */
        readonly deleteSalesOrderContact: {
            readonly name: "DeleteSalesOrderContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the complete details of a specific contact mapping by its internal ID.
         *
         * This read-only query fetches the associate linkage data and workflow state.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewSalesOrderContactByID
         */
        readonly viewSalesOrderContactByID: {
            readonly name: "ViewSalesOrderContactByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesOrderContact;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all designated client associates (contacts) assigned to a specific sales order by its UUID.
         *
         * This read-only query is utilized to populate the "Points of Contact" section in frontend order views.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewSalesOrderContacts
         */
        readonly viewSalesOrderContacts: {
            readonly name: "ViewSalesOrderContacts";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesOrderContactsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Links an external or internal source document (e.g., Sales Quotation, Inward Job) to the sales order as an operational constraint.
         *
         * **Side Effects:**
         * - Establishes a strict data relationship that can drive downstream automation (like Autofill operations).
         * - Appends an audit trail entry tracking the reference linkage.
         *
         * @generated from rpc Scailo.SalesOrdersService.AddSalesOrderReference
         */
        readonly addSalesOrderReference: {
            readonly name: "AddSalesOrderReference";
            readonly I: typeof SalesOrdersServiceReferenceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending reference linkage, formalizing its constraint on the order.
         *
         * **Side Effects:**
         * - Activates the reference, making it eligible for use in automated workflows (e.g., pulling line items from the approved quotation).
         * - Appends an approval audit trail entry.
         *
         * @generated from rpc Scailo.SalesOrdersService.ApproveSalesOrderReference
         */
        readonly approveSalesOrderReference: {
            readonly name: "ApproveSalesOrderReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Removes a previously linked source document reference from the sales order.
         *
         * **Side Effects:**
         * - Severs the constraint linkage, meaning the order is no longer bound by the source document.
         * - Appends a deletion justification to the audit log.
         *
         * @generated from rpc Scailo.SalesOrdersService.DeleteSalesOrderReference
         */
        readonly deleteSalesOrderReference: {
            readonly name: "DeleteSalesOrderReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the complete details of a specific constraint reference mapping by its internal ID.
         *
         * This read-only query fetches the context, document type, and underlying source document ID.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewSalesOrderReferenceByID
         */
        readonly viewSalesOrderReferenceByID: {
            readonly name: "ViewSalesOrderReferenceByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesOrderReference;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all source document references and constraints attached to a specific sales order.
         *
         * This read-only query is utilized by frontend interfaces to display linked documents (e.g., "Generated from Quotation Q-400").
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewSalesOrderReferences
         */
        readonly viewSalesOrderReferences: {
            readonly name: "ViewSalesOrderReferences";
            readonly I: typeof Identifier;
            readonly O: typeof SalesOrderReferencesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesOrder;
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
         * @generated from rpc Scailo.SalesOrdersService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof SalesOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof SalesOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the globally unique identifiers (UUIDs) of a Sales Order's core relational dependencies.
         *
         * This is a read-only query designed to fetch essential parameter references—such as the buyer, consignee, location, and currency — without exposing the system's internal sequential integer IDs.
         * Client applications and external integrations utilize this endpoint to securely reference linked records while actively mitigating the risk of ID-based data enumeration.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesOrderAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SalesOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof SalesOrdersServicePaginationReq;
            readonly O: typeof SalesOrdersServicePaginationResponse;
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
         * @generated from rpc Scailo.SalesOrdersService.ViewAmendments
         */
        readonly viewAmendments: {
            readonly name: "ViewAmendments";
            readonly I: typeof Identifier;
            readonly O: typeof AmendmentLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the aggregated inventory fulfillment statistics for a specific Sales Order.
         *
         * This is a read-only analytics query that calculates the cumulative ordered, dispatched, and returned quantities across the entire order. It is primarily utilized by frontend dashboard widgets to visualize real-time warehouse fulfillment progress.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewInventoryStatistics
         */
        readonly viewInventoryStatistics: {
            readonly name: "ViewInventoryStatistics";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesOrderInventoryStatistics;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the aggregated billing and financial statistics for a specific Sales Order.
         *
         * This is a read-only analytics query that calculates the cumulative ordered, invoiced, and credited quantities across the entire order. It provides finance and order management teams with a high-level summary of the order's commercial lifecycle and outstanding unbilled quantities.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewBillingStatistics
         */
        readonly viewBillingStatistics: {
            readonly name: "ViewBillingStatistics";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesOrderBillingStatistics;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates a highly granular, cumulative inventory reconciliation report, aggregated by family across the entire Sales Order.
         *
         * This read-only diagnostic query dynamically groups multiple downstream transactions (e.g., staggered shipments, split returns, partial invoices) into a unified, family-level view. It maps every cumulative item lifecycle stage (ordered, dispatched, invoiced, returned, credited) against both internal primary and client-requested secondary units of measure. It is a critical endpoint used by operational teams to spot quantity discrepancies and ensure tight inventory accounting.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewInventoryMatch
         */
        readonly viewInventoryMatch: {
            readonly name: "ViewInventoryMatch";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesOrderInventoryMatchList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates a comprehensive, cumulative financial price match report, comparing expected revenue against all downstream invoicing and adjustments.
         *
         * This read-only diagnostic query dynamically aggregates data for every family on the Sales Order. It cross-references the cumulative ordered values against the actual realized revenue (aggregated across multiple sales invoices) and any issued refunds (aggregated across multiple credit notes). It guarantees airtight financial reconciliation prior to order closure.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewPriceMatch
         */
        readonly viewPriceMatch: {
            readonly name: "ViewPriceMatch";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesOrderPriceMatchList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a broad list of families that are eligible to be added to the specified sales order.
         *
         * This read-only query is used to populate dropdowns or catalog views when a user begins the process of adding new line items to an order.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Executes an advanced, filtered search against the families eligible to be added to a sales order.
         *
         * This read-only query allows users to narrow down large product catalogs based on specific metadata or categories before selecting an item.
         *
         * @generated from rpc Scailo.SalesOrdersService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates a fully populated, default line item creation payload for a specific product family.
         *
         * This read-only query acts as a "template builder." It fetches the default pricing, historical client units of measure, and default tax groups for the family, returning a pre-filled `SalesOrdersServiceItemCreateRequest` payload. Frontend clients use this to instantly auto-fill the "Add Item" form.
         *
         * @generated from rpc Scailo.SalesOrdersService.ViewProspectiveSalesOrderItem
         */
        readonly viewProspectiveSalesOrderItem: {
            readonly name: "ViewProspectiveSalesOrderItem";
            readonly I: typeof SalesOrderItemProspectiveInfoRequest;
            readonly O: typeof SalesOrdersServiceItemCreateRequest;
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
         * @generated from rpc Scailo.SalesOrdersService.IsDownloadable
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
         * @generated from rpc Scailo.SalesOrdersService.DownloadByUUID
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
         * @generated from rpc Scailo.SalesOrdersService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof SalesOrdersServiceSearchAllReq;
            readonly O: typeof SalesOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.SalesOrdersService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof SalesOrdersServiceFilterReq;
            readonly O: typeof SalesOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.SalesOrdersService.CountInStatus
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
         * @generated from rpc Scailo.SalesOrdersService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof SalesOrdersServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Calculates and returns the aggregate monetary sum of all sales orders matching the provided search criteria.
         *
         * This read-only analytics query is utilized by financial dashboards to dynamically generate real-time metrics, such as "Total Value of Active Orders" or "Total Revenue for Client X in Q3."
         *
         * @generated from rpc Scailo.SalesOrdersService.AccruedValue
         */
        readonly accruedValue: {
            readonly name: "AccruedValue";
            readonly I: typeof SalesOrdersServiceCountReq;
            readonly O: typeof SumResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.SalesOrdersService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof SalesOrdersServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=sales_orders.scailo_connect.d.ts.map