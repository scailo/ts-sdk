import { SalesOrder, SalesOrderAncillaryParameters, SalesOrderBillingStatistics, SalesOrderContact, SalesOrderContactsList, SalesOrderInventoryMatchList, SalesOrderInventoryStatistics, SalesOrderItem, SalesOrderItemHistoryRequest, SalesOrderItemProspectiveInfoRequest, SalesOrderItemsList, SalesOrderItemsSearchRequest, SalesOrderPriceMatchList, SalesOrderReference, SalesOrderReferencesList, SalesOrdersList, SalesOrdersServiceAutofillRequest, SalesOrdersServiceContactCreateRequest, SalesOrdersServiceCountReq, SalesOrdersServiceCreateRequest, SalesOrdersServiceFilterReq, SalesOrdersServiceItemCreateRequest, SalesOrdersServiceItemSpecificationsUpdateRequest, SalesOrdersServiceItemTermsUpdateRequest, SalesOrdersServiceItemUpdateRequest, SalesOrdersServiceMultipleItemsCreateRequest, SalesOrdersServicePaginatedItemsResponse, SalesOrdersServicePaginationReq, SalesOrdersServicePaginationResponse, SalesOrdersServiceReferenceCreateRequest, SalesOrdersServiceSearchAllReq, SalesOrdersServiceUpdateRequest } from "./sales_orders.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, BooleanResponse, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, PriceResponse, ReorderItemsRequest, RepeatWithDeliveryDate, SimpleSearchReq, StandardFile, SumResponse } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each sales order
 *
 * @generated from service Scailo.SalesOrdersService
 */
export declare const SalesOrdersService: {
    readonly typeName: "Scailo.SalesOrdersService";
    readonly methods: {
        /**
         * Create and send for verification
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
         * Repeat
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
         * Reopen
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
         * Send Email
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
         * Autofill the sales order
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
         * Amend the sales order and send for revision
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
         * Add multiple items to a sales order
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
         * Add an item to a sales order
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
         * Modify an item in a sales order
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
         * Update Price, Discount, Tax Group, Delivery Date and Specifications of an item in a sales order. This can safely be done even after the item may have been dispatched
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
         * Update specifications of an item in a sales order
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
         * Approve an item in a sales order
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
         * Delete an item in a sales order
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
         * Reorder items in a sales order
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
         * View Sales Order Item by ID
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
         * View Sales Order Item's price after factoring in the discount
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
         * View approved sales order items for given sales order ID
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
         * View unapproved sales order items for given sales order ID
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
         * View the history of the sales order item
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
         * View approved sales order items for given sales order ID with pagination
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
         * View unapproved sales order items for given sales order ID with pagination
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
         * Search through sales order items with pagination
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
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
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
         * Download the CSV template that could be used to upload items
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
         * Upload items using a CSV file. This is an idempotent operation. All the existing items are deleted before adding the items from the file.
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
         * Add a contact
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
         * Approve a contact
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
         * Delete a contact
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
         * View a contact for the given ID
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
         * View all contacts for given sales order UUID
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
         * Add a reference
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
         * Approve a reference
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
         * Delete a reference
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
         * View a reference for the given ID
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
         * View all references for given sales order ID
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
         * View by Reference ID (returns the latest record in case of duplicates)
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
         * View the ancillary parameters (UUIDs of the internal references) by UUID
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
         * View all the amendments made
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
         * View Inventory Statistics of Sales Order
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
         * View Billing Statistics of Sales Order
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
         * View Inventory Match of all the families within a Sales Order
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
         * View Price Match of all the families within a Sales Order (between the sales order, and the corresponding sales invoices, and any corresponding credit notes)
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
         * View prospective families for the given sales order
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
         * Filter prospective families for the record represented by the given UUID identifier
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
         * View prospective sales order item info for the given family ID and sales order ID
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
         * Checks if the record is downloadable (checks if the custom download function has been implemented)
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
         * Download sales order with the given IdentifierUUID (can be used to allow public downloads)
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
         * Returns the sum of the total value of all the records that match the given criteria
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