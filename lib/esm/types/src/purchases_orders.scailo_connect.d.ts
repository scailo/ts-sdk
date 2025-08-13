import { PurchaseOrder, PurchaseOrderAncillaryParameters, PurchaseOrderBillingStatistics, PurchaseOrderContact, PurchaseOrderContactsList, PurchaseOrderInventoryMatchList, PurchaseOrderInventoryStatistics, PurchaseOrderItem, PurchaseOrderItemHistoryRequest, PurchaseOrderItemProspectiveInfoRequest, PurchaseOrderItemsList, PurchaseOrderItemsSearchRequest, PurchaseOrderPriceMatchList, PurchaseOrderReference, PurchaseOrderReferencesList, PurchasesOrdersList, PurchasesOrdersServiceAutofillRequest, PurchasesOrdersServiceContactCreateRequest, PurchasesOrdersServiceCountReq, PurchasesOrdersServiceCreateRequest, PurchasesOrdersServiceFilterReq, PurchasesOrdersServiceItemCreateRequest, PurchasesOrdersServiceItemUpdateRequest, PurchasesOrdersServicePaginatedItemsResponse, PurchasesOrdersServicePaginationReq, PurchasesOrdersServicePaginationResponse, PurchasesOrdersServiceReferenceCreateRequest, PurchasesOrdersServiceSearchAllReq, PurchasesOrdersServiceUpdateRequest } from "./purchases_orders.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, PriceResponse, ReorderItemsRequest, RepeatWithDeliveryDate, SimpleSearchReq, StandardFile, SumResponse } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
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
         * Create and save as draft
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
         * Update draft
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
         * Send for verification
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
         * Verify
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
         * Approve
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
         * Send For Revision
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
         * Update revision
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
         * Halt
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
         * Discard
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
         * Restore
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
         * Complete
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
         * Repeat
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
         * Reopen
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
         * Add comment
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
         * Send Email
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
         * Autofill the purchase order
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
         * Amend the purchase order and send for revision
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
         * Create a magic link
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
         * View by ID
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
         * View by UUID
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
         * View by Reference ID (returns the latest record in case of duplicates)
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
         * View only essential components by ID (without logs)
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
         * View only essential components (without logs) that matches the given UUID
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
         * View all records with the given IDs
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
         * View all
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
         * View all with the given entity UUID
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
         * View with pagination
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
         * View all the amendments made
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
         * Other view operations
         * Download purchase order with the given IdentifierUUID (can be used to allow public downloads)
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
         * View all that match the given search key
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
         * View all that match the given filter criteria
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
         * Count in status
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
         * Count all that match the given criteria
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