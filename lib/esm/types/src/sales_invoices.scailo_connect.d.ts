import { SalesInvoice, SalesInvoiceAncillaryParameters, SalesInvoiceDispatchedStatisticsList, SalesInvoiceItem, SalesInvoiceItemHistoryRequest, SalesInvoiceItemProspectiveInfoRequest, SalesInvoiceItemsList, SalesInvoiceItemsSearchRequest, SalesInvoiceReference, SalesInvoiceReferencesList, SalesInvoicesList, SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest, SalesInvoicesServiceAutofillRequest, SalesInvoicesServiceCountReq, SalesInvoicesServiceCreateRequest, SalesInvoicesServiceFilterReq, SalesInvoicesServiceItemCreateRequest, SalesInvoicesServiceItemSpecificationsUpdateRequest, SalesInvoicesServiceItemUpdateRequest, SalesInvoicesServiceMultipleItemsCreateRequest, SalesInvoicesServicePaginatedItemsResponse, SalesInvoicesServicePaginationReq, SalesInvoicesServicePaginationResponse, SalesInvoicesServiceReferenceCreateRequest, SalesInvoicesServiceSearchAllReq, SalesInvoicesServiceUpdateRequest } from "./sales_invoices.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile, SumResponse } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { VaultFolderAttachRequest } from "./vault_folders.scailo_pb.js";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Core service for managing the complete operational and approval lifecycle of Sales Invoices.
 *
 * A Sales Invoice is the finalized, legally binding financial document issued to a buyer,
 * representing a formal request for payment for goods or services rendered. It acts as the
 * culmination of the sales and fulfillment pipeline, accurately converting negotiated commercial
 * terms (from the source Sales Order) and physical fulfillment metrics (from Goods Dispatches)
 * into a definitive financial obligation.
 *
 * **Lifecycle & Workflow:**
 * This service strictly enforces the state machine of a Sales Invoice:
 * - **Drafting:** Creating initial drafts with relaxed validation to allow iterative aggregation of billable items and manual adjustments.
 * - **Verification:** Submitting the invoice through internal financial review to ensure commercial compliance, accurate tax application, and quantity reconciliation.
 * - **Approval:** Finalizing the invoice into a `STANDING` state, locking the financial record, generating the immutable invoice number, and officially recognizing the accounts receivable.
 *
 * **Operational Impact:**
 * Reaching the approved (`STANDING`) state ensures that the invoice is ready for distribution to the buyer
 * and integration with downstream accounting or ERP systems for payment tracking and ledger reconciliation.
 *
 * @generated from service Scailo.SalesInvoicesService
 */
export declare const SalesInvoicesService: {
    readonly typeName: "Scailo.SalesInvoicesService";
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
         * @generated from rpc Scailo.SalesInvoicesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof SalesInvoicesServiceCreateRequest;
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
         * @generated from rpc Scailo.SalesInvoicesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof SalesInvoicesServiceCreateRequest;
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
         * @generated from rpc Scailo.SalesInvoicesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof SalesInvoicesServiceUpdateRequest;
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
         * @generated from rpc Scailo.SalesInvoicesService.SendForVerification
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
         * @generated from rpc Scailo.SalesInvoicesService.Verify
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
         * @generated from rpc Scailo.SalesInvoicesService.Approve
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
         * @generated from rpc Scailo.SalesInvoicesService.SendForRevision
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
         * @generated from rpc Scailo.SalesInvoicesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof SalesInvoicesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.SalesInvoicesService.Halt
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
         * @generated from rpc Scailo.SalesInvoicesService.Discard
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
         * @generated from rpc Scailo.SalesInvoicesService.Restore
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
         * @generated from rpc Scailo.SalesInvoicesService.Complete
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
         * @generated from rpc Scailo.SalesInvoicesService.Repeat
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
         * @generated from rpc Scailo.SalesInvoicesService.Reopen
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
         * @generated from rpc Scailo.SalesInvoicesService.CommentAdd
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
         * @generated from rpc Scailo.SalesInvoicesService.SendEmail
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
         * @generated from rpc Scailo.SalesInvoicesService.AttachVaultFolder
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
         * @generated from rpc Scailo.SalesInvoicesService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof SalesInvoicesServiceAutofillRequest;
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
         * @generated from rpc Scailo.SalesInvoicesService.Amend
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
         * @generated from rpc Scailo.SalesInvoicesService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Appends a batch of billable line items to an existing Sales Invoice in a single transactional operation.
         *
         * **Side Effects:**
         * - Maps multiple catalog families, quantities, and pricing structures to the invoice simultaneously.
         * - Triggers a bulk recalculation of the invoice's financial grand total.
         * - Appends creation audit logs for all attached items.
         *
         * @generated from rpc Scailo.SalesInvoicesService.AddMultipleSalesInvoiceItems
         */
        readonly addMultipleSalesInvoiceItems: {
            readonly name: "AddMultipleSalesInvoiceItems";
            readonly I: typeof SalesInvoicesServiceMultipleItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Appends a single billable line item to an existing Sales Invoice.
         *
         * **Side Effects:**
         * - Defines the specific family, mapped unit quantities, pricing, and tax brackets for which the buyer is being formally billed.
         * - Recomputes the parent invoice's prospective grand total.
         * - Appends an audit trail entry tracking the creation and user justification.
         *
         * @generated from rpc Scailo.SalesInvoicesService.AddSalesInvoiceItem
         */
        readonly addSalesInvoiceItem: {
            readonly name: "AddSalesInvoiceItem";
            readonly I: typeof SalesInvoicesServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modifies the core transactional parameters of an existing billable line item.
         *
         * **Side Effects:**
         * - Overwrites billed quantities, proposed commercial terms (unit price, tax), and custom specifications to ensure financial accuracy.
         * - Triggers a recalculation of the parent sales invoice's financial grand total.
         * - May reset the item's approval status, requiring re-authorization.
         * - Appends an audit trail entry tracking the modifications.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ModifySalesInvoiceItem
         */
        readonly modifySalesInvoiceItem: {
            readonly name: "ModifySalesInvoiceItem";
            readonly I: typeof SalesInvoicesServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates strictly the custom textual specifications or notes associated with a billed item.
         *
         * **Side Effects:**
         * - Modifies descriptive text without impacting or triggering recalculations of the item's financial values.
         * - Typically avoids resetting the approval workflow state, allowing for minor typographical corrections.
         * - Appends an audit trail entry tracking the text update.
         *
         * @generated from rpc Scailo.SalesInvoicesService.UpdateSalesInvoiceItemSpecifications
         */
        readonly updateSalesInvoiceItemSpecifications: {
            readonly name: "UpdateSalesInvoiceItemSpecifications";
            readonly I: typeof SalesInvoicesServiceItemSpecificationsUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending billable line item, finalizing its active status within the sales invoice.
         *
         * **Side Effects:**
         * - Activates the billed item, validating its inclusion in the formal financial obligation presented to the buyer.
         * - Appends the required approval metadata, timestamp, and audit comment to the record's history.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ApproveSalesInvoiceItem
         */
        readonly approveSalesInvoiceItem: {
            readonly name: "ApproveSalesInvoiceItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently removes or deactivates a billable line item from the sales invoice.
         *
         * **Side Effects:**
         * - Revokes the item from the invoice, subtracting its financial value from the grand total.
         * - Logs the deletion justification comment into the system compliance log.
         *
         * @generated from rpc Scailo.SalesInvoicesService.DeleteSalesInvoiceItem
         */
        readonly deleteSalesInvoiceItem: {
            readonly name: "DeleteSalesInvoiceItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorders the numerical sequence of billable line items within the sales invoice.
         *
         * **Side Effects:**
         * - Mutates the display sequence (`sort_order`) of the specified items in bulk.
         * - Directly dictates how the items are visually arranged on the final generated PDF invoice document sent to the buyer.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ReorderSalesInvoiceItems
         */
        readonly reorderSalesInvoiceItems: {
            readonly name: "ReorderSalesInvoiceItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the complete, finalized details of a specific billed line item by its internal sequence ID.
         *
         * This read-only operation fetches full metadata, approval histories, and calculated financial values.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewSalesInvoiceItemByID
         */
        readonly viewSalesInvoiceItemByID: {
            readonly name: "ViewSalesInvoiceItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesInvoiceItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all active, fully approved billable line items mapped to a specific sales invoice ID.
         *
         * This read-only query is optimized for rendering the finalized billing summary on frontend interfaces and generating the formal PDF document.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewApprovedSalesInvoiceItems
         */
        readonly viewApprovedSalesInvoiceItems: {
            readonly name: "ViewApprovedSalesInvoiceItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesInvoiceItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists pending or unapproved billable line items mapped to a specific sales invoice ID.
         *
         * This read-only query is utilized primarily by administrative dashboards to quickly identify invoice components awaiting financial review.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewUnapprovedSalesInvoiceItems
         */
        readonly viewUnapprovedSalesInvoiceItems: {
            readonly name: "ViewUnapprovedSalesInvoiceItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesInvoiceItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the historical audit trail and lifecycle changes of a specific billed line item.
         *
         * This read-only operation aggregates the chronological evolution of the item, tracking quantity/price adjustments and state changes throughout the drafting phase.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewSalesInvoiceItemHistory
         */
        readonly viewSalesInvoiceItemHistory: {
            readonly name: "ViewSalesInvoiceItemHistory";
            readonly I: typeof SalesInvoiceItemHistoryRequest;
            readonly O: typeof SalesInvoiceItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists active, approved billable line items using robust pagination controls.
         *
         * This read-only query is optimized for rendering massive invoices in frontend data tables, supporting explicit windowing parameters.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewPaginatedApprovedSalesInvoiceItems
         */
        readonly viewPaginatedApprovedSalesInvoiceItems: {
            readonly name: "ViewPaginatedApprovedSalesInvoiceItems";
            readonly I: typeof SalesInvoiceItemsSearchRequest;
            readonly O: typeof SalesInvoicesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists pending or unapproved billable line items using robust pagination controls.
         *
         * This read-only query is optimized for administrative review dashboards handling high volumes of unapproved billing components.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewPaginatedUnapprovedSalesInvoiceItems
         */
        readonly viewPaginatedUnapprovedSalesInvoiceItems: {
            readonly name: "ViewPaginatedUnapprovedSalesInvoiceItems";
            readonly I: typeof SalesInvoiceItemsSearchRequest;
            readonly O: typeof SalesInvoicesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Searches through all billable line items using advanced filters, status flags, fuzzy text matching, and pagination.
         *
         * This read-only query is the primary entry point for complex lookups across massive lists of invoiced items.
         *
         * @generated from rpc Scailo.SalesInvoicesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof SalesInvoiceItemsSearchRequest;
            readonly O: typeof SalesInvoicesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Exports the current list of billable line items for a specific sales invoice into a downloadable CSV file.
         *
         * This read-only operation is used by finance teams to review large invoices offline in spreadsheet software, or as a baseline to modify items locally before executing a bulk upload.
         *
         * @generated from rpc Scailo.SalesInvoicesService.DownloadItemsAsCSV
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
         * This read-only operation provides clients with the exact column headers required to successfully perform a bulk line-item upload for an invoice.
         *
         * @generated from rpc Scailo.SalesInvoicesService.DownloadItemsTemplateAsCSV
         */
        readonly downloadItemsTemplateAsCSV: {
            readonly name: "DownloadItemsTemplateAsCSV";
            readonly I: typeof Empty;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Processes a bulk ingestion of billable line items for a specific sales invoice via a CSV file upload.
         *
         * **Side Effects:**
         * - **CRITICAL:** This is an idempotent, destructive operation. It automatically deletes all existing line items currently mapped to the sales invoice before applying the new items from the CSV.
         * - Wipes the current active list and replaces it entirely with the parsed file contents.
         * - Triggers a complete recalculation of the invoice's financial totals and appends creation audit logs for all newly imported items.
         *
         * @generated from rpc Scailo.SalesInvoicesService.UploadSalesInvoiceItems
         */
        readonly uploadSalesInvoiceItems: {
            readonly name: "UploadSalesInvoiceItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Creates a formal linkage between a Sales Invoice and a Goods Dispatch document.
         *
         * **Side Effects:**
         * - Establishes strict traceability by attaching proof of physical inventory fulfillment to the financial billing document.
         * - Enables reconciliation workflows to compare billed quantities against actual shipped quantities.
         * - Appends an audit trail entry tracking the creation of the reference.
         *
         * @generated from rpc Scailo.SalesInvoicesService.AddSalesInvoiceReference
         */
        readonly addSalesInvoiceReference: {
            readonly name: "AddSalesInvoiceReference";
            readonly I: typeof SalesInvoicesServiceReferenceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approves a pending Goods Dispatch reference mapping, finalizing its active status on the Sales Invoice.
         *
         * **Side Effects:**
         * - Activates the linkage, formally acknowledging the attached dispatch as valid proof of delivery/fulfillment for the billed items.
         * - Appends the required approval metadata, timestamp, and audit comment to the record's history.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ApproveSalesInvoiceReference
         */
        readonly approveSalesInvoiceReference: {
            readonly name: "ApproveSalesInvoiceReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Permanently removes or severs the linkage between a Goods Dispatch and the Sales Invoice.
         *
         * **Side Effects:**
         * - Detaches the physical fulfillment proof from the billing document.
         * - Logs the deletion justification comment into the system compliance log.
         *
         * @generated from rpc Scailo.SalesInvoicesService.DeleteSalesInvoiceReference
         */
        readonly deleteSalesInvoiceReference: {
            readonly name: "DeleteSalesInvoiceReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the complete details of a specific invoice-to-dispatch reference mapping by its internal ID.
         *
         * This read-only query fetches the mapping details and its approval workflow state.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewSalesInvoiceReferenceByID
         */
        readonly viewSalesInvoiceReferenceByID: {
            readonly name: "ViewSalesInvoiceReferenceByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesInvoiceReference;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lists all active Goods Dispatch references mapped to a specific Sales Invoice ID.
         *
         * This read-only query is utilized to populate the "Linked Deliveries" or "Fulfillment Proofs" section in frontend invoice management views, allowing finance teams to verify that all billed items have actually left the warehouse.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewSalesInvoiceReferences
         */
        readonly viewSalesInvoiceReferences: {
            readonly name: "ViewSalesInvoiceReferences";
            readonly I: typeof Identifier;
            readonly O: typeof SalesInvoiceReferencesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesInvoice;
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
         * @generated from rpc Scailo.SalesInvoicesService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof SalesInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof SalesInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the ancillary configuration parameters and universally unique identifiers (UUIDs) of related entities for a specific Sales Invoice.
         *
         * This read-only query securely exposes downstream linkages—such as the UUID of the originating source document (e.g., the parent Sales Order)
         * and the applied currency—to frontend interfaces and external API clients. It allows external systems to resolve and navigate these relationships
         * without exposing internal, sequential database IDs.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesInvoiceAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SalesInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof SalesInvoicesServicePaginationReq;
            readonly O: typeof SalesInvoicesServicePaginationResponse;
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
         * @generated from rpc Scailo.SalesInvoicesService.ViewAmendments
         */
        readonly viewAmendments: {
            readonly name: "ViewAmendments";
            readonly I: typeof Identifier;
            readonly O: typeof AmendmentLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of eligible families that can be added as billable line items to a specific sales invoice.
         *
         * This read-only query evaluates the originating source document (e.g., the parent Sales Order) and returns only those items that still have pending, unbilled quantities. It is typically utilized to populate frontend dropdowns during the invoice drafting phase, ensuring users can only bill for valid, negotiated families.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewProspectiveFamilies
         */
        readonly viewProspectiveFamilies: {
            readonly name: "ViewProspectiveFamilies";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Searches and filters the list of eligible, unbilled families for a specific sales invoice using advanced criteria.
         *
         * This read-only query provides the same business value as `ViewProspectiveFamilies` but includes robust pagination and filtering. It is optimized for scenarios where the source document contains hundreds of line items, allowing finance users to quickly locate specific unbilled families to add to the current invoice.
         *
         * @generated from rpc Scailo.SalesInvoicesService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Generates a pre-populated item creation payload for a specific eligible family.
         *
         * This read-only operation acts as a templating engine. When a user selects a family to bill, this endpoint fetches the negotiated unit prices, default tax brackets, and remaining unbilled quantities directly from the source document. It returns a ready-to-submit payload that minimizes manual frontend data entry and enforces financial consistency.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewProspectiveSalesInvoiceItem
         */
        readonly viewProspectiveSalesInvoiceItem: {
            readonly name: "ViewProspectiveSalesInvoiceItem";
            readonly I: typeof SalesInvoiceItemProspectiveInfoRequest;
            readonly O: typeof SalesInvoicesServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves the reconciliation metrics comparing the financial billed quantities against the physically dispatched quantities for a specific sales invoice.
         *
         * This read-only query aggregates data across all linked Goods Dispatches. It empowers finance teams to audit fulfillment side-by-side with billing, making it easy to identify partial shipments, backorders, or physical fulfillment discrepancies before the invoice is finalized and sent to the buyer.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewDispatchedStatistics
         */
        readonly viewDispatchedStatistics: {
            readonly name: "ViewDispatchedStatistics";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesInvoiceDispatchedStatisticsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Calculates the cumulative quantity of a specific family that has already been billed across all historical invoices linked to a given source document.
         *
         * This read-only query acts as a critical financial safeguard during the billing lifecycle. By revealing exactly how much of a family has already been invoiced, it prevents frontend clients and downstream APIs from accidentally over-billing the buyer beyond the original constraints of the parent Sales Order.
         *
         * @generated from rpc Scailo.SalesInvoicesService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest;
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
         * @generated from rpc Scailo.SalesInvoicesService.IsDownloadable
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
         * @generated from rpc Scailo.SalesInvoicesService.DownloadByUUID
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
         * @generated from rpc Scailo.SalesInvoicesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof SalesInvoicesServiceSearchAllReq;
            readonly O: typeof SalesInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.SalesInvoicesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof SalesInvoicesServiceFilterReq;
            readonly O: typeof SalesInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.SalesInvoicesService.CountInStatus
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
         * @generated from rpc Scailo.SalesInvoicesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof SalesInvoicesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Calculates and returns the aggregated financial grand total (accrued value) across all Sales Invoices that match the specified filter criteria.
         *
         * This read-only analytical query is optimized for high-level financial reporting and dashboard metrics. It empowers client applications to dynamically compute total generated revenue, evaluate client-specific billing aggregates, or summarize invoice values over designated time periods without the overhead of fetching and parsing massive lists of individual records.
         *
         * @generated from rpc Scailo.SalesInvoicesService.AccruedValue
         */
        readonly accruedValue: {
            readonly name: "AccruedValue";
            readonly I: typeof SalesInvoicesServiceCountReq;
            readonly O: typeof SumResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.SalesInvoicesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof SalesInvoicesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=sales_invoices.scailo_connect.d.ts.map