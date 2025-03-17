import { SalesOrder, SalesOrderAncillaryParameters, SalesOrderBillingStatistics, SalesOrderContact, SalesOrderContactsList, SalesOrderInventoryMatchList, SalesOrderInventoryStatistics, SalesOrderItem, SalesOrderItemHistoryRequest, SalesOrderItemProspectiveInfoRequest, SalesOrderItemsList, SalesOrderItemsSearchRequest, SalesOrderReference, SalesOrderReferencesList, SalesOrdersList, SalesOrdersServiceAutofillRequest, SalesOrdersServiceContactCreateRequest, SalesOrdersServiceCountReq, SalesOrdersServiceCreateRequest, SalesOrdersServiceFilterReq, SalesOrdersServiceItemCreateRequest, SalesOrdersServiceItemUpdateRequest, SalesOrdersServicePaginatedItemsResponse, SalesOrdersServicePaginationReq, SalesOrdersServicePaginationResponse, SalesOrdersServiceReferenceCreateRequest, SalesOrdersServiceSearchAllReq, SalesOrdersServiceUpdateRequest } from "./sales_orders.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, PriceResponse, ReorderItemsRequest, RepeatWithDeliveryDate, StandardFile, SumResponse } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
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
         * Create and save as draft
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
         * Update draft
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
         * Send for verification
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
         * Verify
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
         * Approve
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
         * Send For Revision
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
         * Update revision
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
         * Halt
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
         * Discard
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
         * Restore
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
         * Complete
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
         * Add comment
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
         * Download the CSV file that could be used to upload items from the filled CSV file. The same file can also be used as a template when there are no existing records
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
         * View by ID
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
         * View by UUID
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
         * View only essential components by ID (without logs)
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
         * View only essential components (without logs) that matches the given UUID
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
         * View all records with the given IDs
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
         * View all
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
         * View all with the given entity UUID
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
         * View with pagination
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
         * Other view operations
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
         * View all that match the given search key
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
         * View all that match the given filter criteria
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
         * Count in status
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
         * Count all that match the given criteria
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
    };
};
//# sourceMappingURL=sales_orders.scailo_connect.d.ts.map