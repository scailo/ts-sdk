import { SalesQuotation, SalesQuotationContact, SalesQuotationContactsList, SalesQuotationItem, SalesQuotationItemHistoryRequest, SalesQuotationItemProspectiveInfoRequest, SalesQuotationItemsList, SalesQuotationItemsSearchRequest, SalesQuotationReference, SalesQuotationReferencesList, SalesQuotationsList, SalesQuotationsServiceAutofillRequest, SalesQuotationsServiceContactCreateRequest, SalesQuotationsServiceCountReq, SalesQuotationsServiceCreateRequest, SalesQuotationsServiceFilterReq, SalesQuotationsServiceItemCreateRequest, SalesQuotationsServiceItemUpdateRequest, SalesQuotationsServicePaginatedItemsResponse, SalesQuotationsServicePaginationReq, SalesQuotationsServicePaginationResponse, SalesQuotationsServiceReferenceCreateRequest, SalesQuotationsServiceSearchAllReq, SalesQuotationsServiceUpdateRequest } from "./sales_quotations.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, PriceResponse, ReorderItemsRequest, RepeatWithDeliveryDate, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
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
         * Create and save as draft
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
         * Update draft
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
         * Send for verification
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
         * Verify
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
         * Approve
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
         * Send For Revision
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
         * Update revision
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
         * Halt
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
         * Discard
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
         * Restore
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
         * Complete
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
         * Add comment
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
         * Download the CSV file that could be used to upload items from the filled CSV file. The same file can also be used as a template when there are no existing records
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
         * View by ID
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
         * View by UUID
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
         * View only essential components of the record
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
         * View all
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
         * View all with the given entity UUID
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
         * View with pagination
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
         * View all that match the given search key
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
         * View all that match the given filter criteria
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
         * Count in status
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
         * Count all that match the given criteria
         *
         * @generated from rpc Scailo.SalesQuotationsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof SalesQuotationsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=sales_quotations.scailo_connect.d.ts.map