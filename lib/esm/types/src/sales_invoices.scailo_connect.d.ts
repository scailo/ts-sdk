import { SalesInvoice, SalesInvoiceAncillaryParameters, SalesInvoiceDispatchedStatisticsList, SalesInvoiceItem, SalesInvoiceItemHistoryRequest, SalesInvoiceItemProspectiveInfoRequest, SalesInvoiceItemsList, SalesInvoiceItemsSearchRequest, SalesInvoiceReference, SalesInvoiceReferencesList, SalesInvoicesList, SalesInvoicesServiceAlreadyAddedQuantityForSourceRequest, SalesInvoicesServiceAutofillRequest, SalesInvoicesServiceCountReq, SalesInvoicesServiceCreateRequest, SalesInvoicesServiceFilterReq, SalesInvoicesServiceItemCreateRequest, SalesInvoicesServiceItemUpdateRequest, SalesInvoicesServicePaginatedItemsResponse, SalesInvoicesServicePaginationReq, SalesInvoicesServicePaginationResponse, SalesInvoicesServiceReferenceCreateRequest, SalesInvoicesServiceSearchAllReq, SalesInvoicesServiceUpdateRequest } from "./sales_invoices.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile, SumResponse } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each sales invoice
 *
 * @generated from service Scailo.SalesInvoicesService
 */
export declare const SalesInvoicesService: {
    readonly typeName: "Scailo.SalesInvoicesService";
    readonly methods: {
        /**
         * Create and send for verification
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
         * Create and save as draft
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
         * Update draft
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
         * Send for verification
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
         * Verify
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
         * Approve
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
         * Send For Revision
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
         * Update revision
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
         * Halt
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
         * Discard
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
         * Restore
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
         * Complete
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
         * Repeat
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
         * Reopen
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
         * Add comment
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
         * Send Email
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
         * Autofill the sales invoice
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
         * Amend the sales invoice and send for revision
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
         * Add an item to a sales invoice
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
         * Modify an item in a sales invoice
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
         * Approve an item in a sales invoice
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
         * Delete an item in a sales invoice
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
         * Reorder items in a sales invoice
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
         * View Sales Invoice Item by ID
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
         * View approved sales invoice items for given sales invoice ID
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
         * View unapproved sales invoice items for given sales invoice ID
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
         * View the history of the sales invoice item
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
         * View approved sales invoice items for given sales invoice ID with pagination
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
         * View unapproved sales invoice items for given sales invoice ID with pagination
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
         * Search through sales invoice items with pagination
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
         * CSV operations
         * Download the CSV file that could be used to upload items from the filled CSV file. The same file can also be used as a template when there are no existing records
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
         * Upload items using a CSV file. This is an idempotent operation. All the existing items are deleted before adding the items from the file.
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
         * Add a reference
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
         * Approve a reference
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
         * Delete a reference
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
         * View a reference for the given ID
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
         * View all references for given sales invoice ID
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
         * View by ID
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
         * View by UUID
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
         * View only essential components by ID (without logs)
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
         * View only essential components (without logs) that matches the given UUID
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
         * View all records with the given IDs
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
         * View the ancillary parameters (UUIDs of the internal references) by UUID
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
         * View all
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
         * View all with the given entity UUID
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
         * View with pagination
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
         * View all the amendments made
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
         * View prospective families for the given sales invoice
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
         * Filter prospective families for the record represented by the given UUID identifier
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
         * View prospective sales invoice item info for the given family ID and sales invoice ID
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
         * View dispatched (goods dispatch) statistics of the sales invoice
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
         * View already added quantities
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
         * Download sales invoice with the given IdentifierUUID (can be used to allow public downloads)
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
         * View all that match the given search key
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
         * View all that match the given filter criteria
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
         * Count in status
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
         * Count all that match the given criteria
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
         * Returns the sum of the total value of all the records that match the given criteria
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