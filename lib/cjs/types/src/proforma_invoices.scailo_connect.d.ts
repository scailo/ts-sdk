import { ProformaInvoice, ProformaInvoiceAncillaryParameters, ProformaInvoiceItem, ProformaInvoiceItemHistoryRequest, ProformaInvoiceItemProspectiveInfoRequest, ProformaInvoiceItemsList, ProformaInvoiceItemsSearchRequest, ProformaInvoicesList, ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest, ProformaInvoicesServiceAutofillRequest, ProformaInvoicesServiceCountReq, ProformaInvoicesServiceCreateRequest, ProformaInvoicesServiceFilterReq, ProformaInvoicesServiceItemCreateRequest, ProformaInvoicesServiceItemUpdateRequest, ProformaInvoicesServicePaginatedItemsResponse, ProformaInvoicesServicePaginationReq, ProformaInvoicesServicePaginationResponse, ProformaInvoicesServiceSearchAllReq, ProformaInvoicesServiceUpdateRequest } from "./proforma_invoices.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile, SumResponse } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each proforma invoice
 *
 * @generated from service Scailo.ProformaInvoicesService
 */
export declare const ProformaInvoicesService: {
    readonly typeName: "Scailo.ProformaInvoicesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.ProformaInvoicesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof ProformaInvoicesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.ProformaInvoicesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof ProformaInvoicesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.ProformaInvoicesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof ProformaInvoicesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.ProformaInvoicesService.SendForVerification
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
         * @generated from rpc Scailo.ProformaInvoicesService.Verify
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
         * @generated from rpc Scailo.ProformaInvoicesService.Approve
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
         * @generated from rpc Scailo.ProformaInvoicesService.SendForRevision
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
         * @generated from rpc Scailo.ProformaInvoicesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof ProformaInvoicesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.ProformaInvoicesService.Halt
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
         * @generated from rpc Scailo.ProformaInvoicesService.Discard
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
         * @generated from rpc Scailo.ProformaInvoicesService.Restore
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
         * @generated from rpc Scailo.ProformaInvoicesService.Complete
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
         * @generated from rpc Scailo.ProformaInvoicesService.Repeat
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
         * @generated from rpc Scailo.ProformaInvoicesService.Reopen
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
         * @generated from rpc Scailo.ProformaInvoicesService.CommentAdd
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
         * @generated from rpc Scailo.ProformaInvoicesService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the proforma invoice
         *
         * @generated from rpc Scailo.ProformaInvoicesService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof ProformaInvoicesServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Amend the proforma invoice and send for revision
         *
         * @generated from rpc Scailo.ProformaInvoicesService.Amend
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
         * @generated from rpc Scailo.ProformaInvoicesService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a proforma invoice
         *
         * @generated from rpc Scailo.ProformaInvoicesService.AddProformaInvoiceItem
         */
        readonly addProformaInvoiceItem: {
            readonly name: "AddProformaInvoiceItem";
            readonly I: typeof ProformaInvoicesServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a proforma invoice
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ModifyProformaInvoiceItem
         */
        readonly modifyProformaInvoiceItem: {
            readonly name: "ModifyProformaInvoiceItem";
            readonly I: typeof ProformaInvoicesServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a proforma invoice
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ApproveProformaInvoiceItem
         */
        readonly approveProformaInvoiceItem: {
            readonly name: "ApproveProformaInvoiceItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a proforma invoice
         *
         * @generated from rpc Scailo.ProformaInvoicesService.DeleteProformaInvoiceItem
         */
        readonly deleteProformaInvoiceItem: {
            readonly name: "DeleteProformaInvoiceItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a proforma invoice
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ReorderProformaInvoiceItems
         */
        readonly reorderProformaInvoiceItems: {
            readonly name: "ReorderProformaInvoiceItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Proforma Invoice Item by ID
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewProformaInvoiceItemByID
         */
        readonly viewProformaInvoiceItemByID: {
            readonly name: "ViewProformaInvoiceItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProformaInvoiceItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved proforma invoice items for given proforma invoice ID
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewApprovedProformaInvoiceItems
         */
        readonly viewApprovedProformaInvoiceItems: {
            readonly name: "ViewApprovedProformaInvoiceItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ProformaInvoiceItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved proforma invoice items for given proforma invoice ID
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewUnapprovedProformaInvoiceItems
         */
        readonly viewUnapprovedProformaInvoiceItems: {
            readonly name: "ViewUnapprovedProformaInvoiceItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof ProformaInvoiceItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the proforma invoice item
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewProformaInvoiceItemHistory
         */
        readonly viewProformaInvoiceItemHistory: {
            readonly name: "ViewProformaInvoiceItemHistory";
            readonly I: typeof ProformaInvoiceItemHistoryRequest;
            readonly O: typeof ProformaInvoiceItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved proforma invoice items for given proforma invoice ID with pagination
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewPaginatedApprovedProformaInvoiceItems
         */
        readonly viewPaginatedApprovedProformaInvoiceItems: {
            readonly name: "ViewPaginatedApprovedProformaInvoiceItems";
            readonly I: typeof ProformaInvoiceItemsSearchRequest;
            readonly O: typeof ProformaInvoicesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved proforma invoice items for given proforma invoice ID with pagination
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewPaginatedUnapprovedProformaInvoiceItems
         */
        readonly viewPaginatedUnapprovedProformaInvoiceItems: {
            readonly name: "ViewPaginatedUnapprovedProformaInvoiceItems";
            readonly I: typeof ProformaInvoiceItemsSearchRequest;
            readonly O: typeof ProformaInvoicesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through proforma invoice items with pagination
         *
         * @generated from rpc Scailo.ProformaInvoicesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof ProformaInvoiceItemsSearchRequest;
            readonly O: typeof ProformaInvoicesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that could be used to upload items from the filled CSV file. The same file can also be used as a template when there are no existing records
         *
         * @generated from rpc Scailo.ProformaInvoicesService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.ProformaInvoicesService.UploadProformaInvoiceItems
         */
        readonly uploadProformaInvoiceItems: {
            readonly name: "UploadProformaInvoiceItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProformaInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ProformaInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof ProformaInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ProformaInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof ProformaInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ProformaInvoiceAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof ProformaInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ProformaInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof ProformaInvoicesServicePaginationReq;
            readonly O: typeof ProformaInvoicesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all the amendments made
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewAmendments
         */
        readonly viewAmendments: {
            readonly name: "ViewAmendments";
            readonly I: typeof Identifier;
            readonly O: typeof AmendmentLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given proforma invoice
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.ProformaInvoicesService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective proforma invoice item info for the given family ID and proforma invoice ID
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewProspectiveProformaInvoiceItem
         */
        readonly viewProspectiveProformaInvoiceItem: {
            readonly name: "ViewProspectiveProformaInvoiceItem";
            readonly I: typeof ProformaInvoiceItemProspectiveInfoRequest;
            readonly O: typeof ProformaInvoicesServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download proforma invoice with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.ProformaInvoicesService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the associated sales invoice information that is denoted by the identifier in the response for the proforma invoice that is denoted by the identifier UUID in the request
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewAssociatedSalesInvoiceInfo
         */
        readonly viewAssociatedSalesInvoiceInfo: {
            readonly name: "ViewAssociatedSalesInvoiceInfo";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Goods Dispatch has been billed
         *
         * @generated from rpc Scailo.ProformaInvoicesService.IsBilled
         */
        readonly isBilled: {
            readonly name: "IsBilled";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Scailo.ProformaInvoicesService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof ProformaInvoicesServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.ProformaInvoicesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof ProformaInvoicesServiceSearchAllReq;
            readonly O: typeof ProformaInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.ProformaInvoicesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof ProformaInvoicesServiceFilterReq;
            readonly O: typeof ProformaInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.ProformaInvoicesService.CountInStatus
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
         * @generated from rpc Scailo.ProformaInvoicesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof ProformaInvoicesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the sum of the total value of all the records that match the given criteria
         *
         * @generated from rpc Scailo.ProformaInvoicesService.AccruedValue
         */
        readonly accruedValue: {
            readonly name: "AccruedValue";
            readonly I: typeof ProformaInvoicesServiceCountReq;
            readonly O: typeof SumResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.ProformaInvoicesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof ProformaInvoicesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=proforma_invoices.scailo_connect.d.ts.map