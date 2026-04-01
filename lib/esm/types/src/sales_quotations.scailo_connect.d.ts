import { SalesQuotation, SalesQuotationContact, SalesQuotationContactsList, SalesQuotationItem, SalesQuotationItemHistoryRequest, SalesQuotationItemProspectiveInfoRequest, SalesQuotationItemsList, SalesQuotationItemsSearchRequest, SalesQuotationReference, SalesQuotationReferencesList, SalesQuotationsList, SalesQuotationsServiceAutofillRequest, SalesQuotationsServiceContactCreateRequest, SalesQuotationsServiceCountReq, SalesQuotationsServiceCreateRequest, SalesQuotationsServiceFilterReq, SalesQuotationsServiceItemCreateRequest, SalesQuotationsServiceItemSpecificationsUpdateRequest, SalesQuotationsServiceItemUpdateRequest, SalesQuotationsServiceMultipleItemsCreateRequest, SalesQuotationsServicePaginatedItemsResponse, SalesQuotationsServicePaginationReq, SalesQuotationsServicePaginationResponse, SalesQuotationsServiceReferenceCreateRequest, SalesQuotationsServiceSearchAllReq, SalesQuotationsServiceUpdateRequest } from "./sales_quotations.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, BooleanResponse, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, PriceResponse, ReorderItemsRequest, RepeatWithDeliveryDate, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each sales quotation
 *
 * @generated from service Scailo.SalesQuotationsService
 */
export declare const SalesQuotationsService: {
    readonly typeName: "Scailo.SalesQuotationsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.SalesQuotationsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof SalesQuotationsServiceCreateRequest;
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
         * @generated from rpc Scailo.SalesQuotationsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof SalesQuotationsServiceCreateRequest;
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
         * @generated from rpc Scailo.SalesQuotationsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof SalesQuotationsServiceUpdateRequest;
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
         * @generated from rpc Scailo.SalesQuotationsService.SendForVerification
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
         * @generated from rpc Scailo.SalesQuotationsService.Verify
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
         * @generated from rpc Scailo.SalesQuotationsService.Approve
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
         * @generated from rpc Scailo.SalesQuotationsService.SendForRevision
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
         * @generated from rpc Scailo.SalesQuotationsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof SalesQuotationsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Temporarily halts processing of the record.
         *
         * **Status Transition:** -> `HALTED`
         *
         * @generated from rpc Scailo.SalesQuotationsService.Halt
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
         * @generated from rpc Scailo.SalesQuotationsService.Discard
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
         * @generated from rpc Scailo.SalesQuotationsService.Restore
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
         * @generated from rpc Scailo.SalesQuotationsService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Repeat
         *
         * @generated from rpc Scailo.SalesQuotationsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof RepeatWithDeliveryDate;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Scailo.SalesQuotationsService.Reopen
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
         * @generated from rpc Scailo.SalesQuotationsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send Email
         *
         * @generated from rpc Scailo.SalesQuotationsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the sales quotation
         *
         * @generated from rpc Scailo.SalesQuotationsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof SalesQuotationsServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Amend the sales quotation and send for revision
         *
         * @generated from rpc Scailo.SalesQuotationsService.Amend
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
         * @generated from rpc Scailo.SalesQuotationsService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add multiple items to a sales quotation
         *
         * @generated from rpc Scailo.SalesQuotationsService.AddMultipleSalesQuotationItems
         */
        readonly addMultipleSalesQuotationItems: {
            readonly name: "AddMultipleSalesQuotationItems";
            readonly I: typeof SalesQuotationsServiceMultipleItemsCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a sales quotation
         *
         * @generated from rpc Scailo.SalesQuotationsService.AddSalesQuotationItem
         */
        readonly addSalesQuotationItem: {
            readonly name: "AddSalesQuotationItem";
            readonly I: typeof SalesQuotationsServiceItemCreateRequest;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a sales quotation
         *
         * @generated from rpc Scailo.SalesQuotationsService.ModifySalesQuotationItem
         */
        readonly modifySalesQuotationItem: {
            readonly name: "ModifySalesQuotationItem";
            readonly I: typeof SalesQuotationsServiceItemUpdateRequest;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update specifications of an item in a sales quotation
         *
         * @generated from rpc Scailo.SalesQuotationsService.UpdateSalesQuotationItemSpecifications
         */
        readonly updateSalesQuotationItemSpecifications: {
            readonly name: "UpdateSalesQuotationItemSpecifications";
            readonly I: typeof SalesQuotationsServiceItemSpecificationsUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a sales quotation
         *
         * @generated from rpc Scailo.SalesQuotationsService.ApproveSalesQuotationItem
         */
        readonly approveSalesQuotationItem: {
            readonly name: "ApproveSalesQuotationItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a sales quotation
         *
         * @generated from rpc Scailo.SalesQuotationsService.DeleteSalesQuotationItem
         */
        readonly deleteSalesQuotationItem: {
            readonly name: "DeleteSalesQuotationItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a sales quotation
         *
         * @generated from rpc Scailo.SalesQuotationsService.ReorderSalesQuotationItems
         */
        readonly reorderSalesQuotationItems: {
            readonly name: "ReorderSalesQuotationItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Sales Quotation Item by ID
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewSalesQuotationItemByID
         */
        readonly viewSalesQuotationItemByID: {
            readonly name: "ViewSalesQuotationItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesQuotationItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Sales Quotation Item's price after factoring in the discount
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewSalesQuotationItemPrice
         */
        readonly viewSalesQuotationItemPrice: {
            readonly name: "ViewSalesQuotationItemPrice";
            readonly I: typeof SalesQuotationItemProspectiveInfoRequest;
            readonly O: typeof PriceResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved sales quotation items for given sales quotation ID
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewApprovedSalesQuotationItems
         */
        readonly viewApprovedSalesQuotationItems: {
            readonly name: "ViewApprovedSalesQuotationItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesQuotationItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved sales quotation items for given sales quotation ID
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewUnapprovedSalesQuotationItems
         */
        readonly viewUnapprovedSalesQuotationItems: {
            readonly name: "ViewUnapprovedSalesQuotationItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesQuotationItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the sales quotation item
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewSalesQuotationItemHistory
         */
        readonly viewSalesQuotationItemHistory: {
            readonly name: "ViewSalesQuotationItemHistory";
            readonly I: typeof SalesQuotationItemHistoryRequest;
            readonly O: typeof SalesQuotationItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved sales quotation items for given sales quotation ID with pagination
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewPaginatedApprovedSalesQuotationItems
         */
        readonly viewPaginatedApprovedSalesQuotationItems: {
            readonly name: "ViewPaginatedApprovedSalesQuotationItems";
            readonly I: typeof SalesQuotationItemsSearchRequest;
            readonly O: typeof SalesQuotationsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved sales quotation items for given sales quotation ID with pagination
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewPaginatedUnapprovedSalesQuotationItems
         */
        readonly viewPaginatedUnapprovedSalesQuotationItems: {
            readonly name: "ViewPaginatedUnapprovedSalesQuotationItems";
            readonly I: typeof SalesQuotationItemsSearchRequest;
            readonly O: typeof SalesQuotationsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through sales quotation items with pagination
         *
         * @generated from rpc Scailo.SalesQuotationsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof SalesQuotationItemsSearchRequest;
            readonly O: typeof SalesQuotationsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.SalesQuotationsService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.SalesQuotationsService.DownloadItemsTemplateAsCSV
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
         * @generated from rpc Scailo.SalesQuotationsService.UploadSalesQuotationItems
         */
        readonly uploadSalesQuotationItems: {
            readonly name: "UploadSalesQuotationItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a contact
         *
         * @generated from rpc Scailo.SalesQuotationsService.AddSalesQuotationContact
         */
        readonly addSalesQuotationContact: {
            readonly name: "AddSalesQuotationContact";
            readonly I: typeof SalesQuotationsServiceContactCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a contact
         *
         * @generated from rpc Scailo.SalesQuotationsService.ApproveSalesQuotationContact
         */
        readonly approveSalesQuotationContact: {
            readonly name: "ApproveSalesQuotationContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a contact
         *
         * @generated from rpc Scailo.SalesQuotationsService.DeleteSalesQuotationContact
         */
        readonly deleteSalesQuotationContact: {
            readonly name: "DeleteSalesQuotationContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a contact for the given ID
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewSalesQuotationContactByID
         */
        readonly viewSalesQuotationContactByID: {
            readonly name: "ViewSalesQuotationContactByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesQuotationContact;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all contacts for given sales quotation UUID
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewSalesQuotationContacts
         */
        readonly viewSalesQuotationContacts: {
            readonly name: "ViewSalesQuotationContacts";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesQuotationContactsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a reference
         *
         * @generated from rpc Scailo.SalesQuotationsService.AddSalesQuotationReference
         */
        readonly addSalesQuotationReference: {
            readonly name: "AddSalesQuotationReference";
            readonly I: typeof SalesQuotationsServiceReferenceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a reference
         *
         * @generated from rpc Scailo.SalesQuotationsService.ApproveSalesQuotationReference
         */
        readonly approveSalesQuotationReference: {
            readonly name: "ApproveSalesQuotationReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a reference
         *
         * @generated from rpc Scailo.SalesQuotationsService.DeleteSalesQuotationReference
         */
        readonly deleteSalesQuotationReference: {
            readonly name: "DeleteSalesQuotationReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a reference for the given ID
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewSalesQuotationReferenceByID
         */
        readonly viewSalesQuotationReferenceByID: {
            readonly name: "ViewSalesQuotationReferenceByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesQuotationReference;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all references for given sales quotation ID
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewSalesQuotationReferences
         */
        readonly viewSalesQuotationReferences: {
            readonly name: "ViewSalesQuotationReferences";
            readonly I: typeof Identifier;
            readonly O: typeof SalesQuotationReferencesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its internal numeric ID. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesQuotation;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a single record by its globally unique UUID. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesQuotation;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Reference ID (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof SalesQuotation;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by ID excluding high-volume fields like logs for performance. This operation is optimized for high-performance internal system logic and backend-to-backend communication
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesQuotation;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a record by UUID excluding high-volume fields like logs. This is intended for public-facing interfaces, since record identifiers aren't sequential and thus cannot be predicted.
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesQuotation;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a list of records matching the provided array of internal IDs.
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof SalesQuotationsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records filtered by their active status.
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SalesQuotationsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns all records belonging to a specific organization/entity UUID.
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesQuotationsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Retrieves a paginated list of records based on status, sort keys, and offsets.
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof SalesQuotationsServicePaginationReq;
            readonly O: typeof SalesQuotationsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all the amendments made
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewAmendments
         */
        readonly viewAmendments: {
            readonly name: "ViewAmendments";
            readonly I: typeof Identifier;
            readonly O: typeof AmendmentLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given sales quotation
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.SalesQuotationsService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective sales quotation item info for the given family ID and sales quotation ID
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewProspectiveSalesQuotationItem
         */
        readonly viewProspectiveSalesQuotationItem: {
            readonly name: "ViewProspectiveSalesQuotationItem";
            readonly I: typeof SalesQuotationItemProspectiveInfoRequest;
            readonly O: typeof SalesQuotationsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Other view operations
         * View all sales orders IDs that are associated with the given sales quotation ID
         *
         * @generated from rpc Scailo.SalesQuotationsService.ViewAssociatedSalesOrdersIDs
         */
        readonly viewAssociatedSalesOrdersIDs: {
            readonly name: "ViewAssociatedSalesOrdersIDs";
            readonly I: typeof Identifier;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the record is downloadable (checks if the custom download function has been implemented)
         *
         * @generated from rpc Scailo.SalesQuotationsService.IsDownloadable
         */
        readonly isDownloadable: {
            readonly name: "IsDownloadable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download sales quotation with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.SalesQuotationsService.DownloadByUUID
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
         * @generated from rpc Scailo.SalesQuotationsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof SalesQuotationsServiceSearchAllReq;
            readonly O: typeof SalesQuotationsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Performs a high-granularity search based on multiple specific field filters.
         *
         * @generated from rpc Scailo.SalesQuotationsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof SalesQuotationsServiceFilterReq;
            readonly O: typeof SalesQuotationsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the total number of records currently in a specific lifecycle status.
         *
         * @generated from rpc Scailo.SalesQuotationsService.CountInStatus
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
         * @generated from rpc Scailo.SalesQuotationsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof SalesQuotationsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.SalesQuotationsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof SalesQuotationsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=sales_quotations.scailo_connect.d.ts.map