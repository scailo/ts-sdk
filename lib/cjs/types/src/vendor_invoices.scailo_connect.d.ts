import { VendorInvoice, VendorInvoiceAncillaryParameters, VendorInvoiceItem, VendorInvoiceItemHistoryRequest, VendorInvoiceItemProspectiveInfoRequest, VendorInvoiceItemsList, VendorInvoiceItemsSearchRequest, VendorInvoiceReceiptStatisticsList, VendorInvoiceReference, VendorInvoiceReferencesList, VendorInvoicesList, VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest, VendorInvoicesServiceAutofillRequest, VendorInvoicesServiceCountReq, VendorInvoicesServiceCreateRequest, VendorInvoicesServiceFilterReq, VendorInvoicesServiceItemCreateRequest, VendorInvoicesServiceItemUpdateRequest, VendorInvoicesServicePaginatedItemsResponse, VendorInvoicesServicePaginationReq, VendorInvoicesServicePaginationResponse, VendorInvoicesServiceReferenceCreateRequest, VendorInvoicesServiceSearchAllReq, VendorInvoicesServiceUpdateRequest } from "./vendor_invoices.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile, SumResponse } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each vendor invoice
 *
 * @generated from service Scailo.VendorInvoicesService
 */
export declare const VendorInvoicesService: {
    readonly typeName: "Scailo.VendorInvoicesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.VendorInvoicesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof VendorInvoicesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.VendorInvoicesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof VendorInvoicesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.VendorInvoicesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof VendorInvoicesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.VendorInvoicesService.SendForVerification
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
         * @generated from rpc Scailo.VendorInvoicesService.Verify
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
         * @generated from rpc Scailo.VendorInvoicesService.Approve
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
         * @generated from rpc Scailo.VendorInvoicesService.SendForRevision
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
         * @generated from rpc Scailo.VendorInvoicesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof VendorInvoicesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.VendorInvoicesService.Halt
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
         * @generated from rpc Scailo.VendorInvoicesService.Discard
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
         * @generated from rpc Scailo.VendorInvoicesService.Restore
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
         * @generated from rpc Scailo.VendorInvoicesService.Complete
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
         * @generated from rpc Scailo.VendorInvoicesService.Repeat
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
         * @generated from rpc Scailo.VendorInvoicesService.Reopen
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
         * @generated from rpc Scailo.VendorInvoicesService.CommentAdd
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
         * @generated from rpc Scailo.VendorInvoicesService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof VendorInvoicesServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if all the material has been admitted to store
         *
         * @generated from rpc Scailo.VendorInvoicesService.IsAdmittedToStore
         */
        readonly isAdmittedToStore: {
            readonly name: "IsAdmittedToStore";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a magic link
         *
         * @generated from rpc Scailo.VendorInvoicesService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.AddVendorInvoiceItem
         */
        readonly addVendorInvoiceItem: {
            readonly name: "AddVendorInvoiceItem";
            readonly I: typeof VendorInvoicesServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.ModifyVendorInvoiceItem
         */
        readonly modifyVendorInvoiceItem: {
            readonly name: "ModifyVendorInvoiceItem";
            readonly I: typeof VendorInvoicesServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.ApproveVendorInvoiceItem
         */
        readonly approveVendorInvoiceItem: {
            readonly name: "ApproveVendorInvoiceItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.DeleteVendorInvoiceItem
         */
        readonly deleteVendorInvoiceItem: {
            readonly name: "DeleteVendorInvoiceItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.ReorderVendorInvoiceItems
         */
        readonly reorderVendorInvoiceItems: {
            readonly name: "ReorderVendorInvoiceItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Vendor Invoice Item by ID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewVendorInvoiceItemByID
         */
        readonly viewVendorInvoiceItemByID: {
            readonly name: "ViewVendorInvoiceItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof VendorInvoiceItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved vendor invoice items for given vendor invoice ID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewApprovedVendorInvoiceItems
         */
        readonly viewApprovedVendorInvoiceItems: {
            readonly name: "ViewApprovedVendorInvoiceItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof VendorInvoiceItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved vendor invoice items for given vendor invoice ID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewUnapprovedVendorInvoiceItems
         */
        readonly viewUnapprovedVendorInvoiceItems: {
            readonly name: "ViewUnapprovedVendorInvoiceItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof VendorInvoiceItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the vendor invoice item
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewVendorInvoiceItemHistory
         */
        readonly viewVendorInvoiceItemHistory: {
            readonly name: "ViewVendorInvoiceItemHistory";
            readonly I: typeof VendorInvoiceItemHistoryRequest;
            readonly O: typeof VendorInvoiceItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved vendor invoice items for given vendor invoice ID with pagination
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewPaginatedApprovedVendorInvoiceItems
         */
        readonly viewPaginatedApprovedVendorInvoiceItems: {
            readonly name: "ViewPaginatedApprovedVendorInvoiceItems";
            readonly I: typeof VendorInvoiceItemsSearchRequest;
            readonly O: typeof VendorInvoicesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved vendor invoice items for given vendor invoice ID with pagination
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewPaginatedUnapprovedVendorInvoiceItems
         */
        readonly viewPaginatedUnapprovedVendorInvoiceItems: {
            readonly name: "ViewPaginatedUnapprovedVendorInvoiceItems";
            readonly I: typeof VendorInvoiceItemsSearchRequest;
            readonly O: typeof VendorInvoicesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through vendor invoice items with pagination
         *
         * @generated from rpc Scailo.VendorInvoicesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof VendorInvoiceItemsSearchRequest;
            readonly O: typeof VendorInvoicesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that could be used to upload items from the filled CSV file. The same file can also be used as a template when there are no existing records
         *
         * @generated from rpc Scailo.VendorInvoicesService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.VendorInvoicesService.UploadVendorInvoiceItems
         */
        readonly uploadVendorInvoiceItems: {
            readonly name: "UploadVendorInvoiceItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a reference
         *
         * @generated from rpc Scailo.VendorInvoicesService.AddVendorInvoiceReference
         */
        readonly addVendorInvoiceReference: {
            readonly name: "AddVendorInvoiceReference";
            readonly I: typeof VendorInvoicesServiceReferenceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a reference
         *
         * @generated from rpc Scailo.VendorInvoicesService.ApproveVendorInvoiceReference
         */
        readonly approveVendorInvoiceReference: {
            readonly name: "ApproveVendorInvoiceReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a reference
         *
         * @generated from rpc Scailo.VendorInvoicesService.DeleteVendorInvoiceReference
         */
        readonly deleteVendorInvoiceReference: {
            readonly name: "DeleteVendorInvoiceReference";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a reference for the given ID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewVendorInvoiceReferenceByID
         */
        readonly viewVendorInvoiceReferenceByID: {
            readonly name: "ViewVendorInvoiceReferenceByID";
            readonly I: typeof Identifier;
            readonly O: typeof VendorInvoiceReference;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all references for given vendor invoice ID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewVendorInvoiceReferences
         */
        readonly viewVendorInvoiceReferences: {
            readonly name: "ViewVendorInvoiceReferences";
            readonly I: typeof Identifier;
            readonly O: typeof VendorInvoiceReferencesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof VendorInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof VendorInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorInvoice;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof VendorInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorInvoiceAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof VendorInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof VendorInvoicesServicePaginationReq;
            readonly O: typeof VendorInvoicesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.VendorInvoicesService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective vendor invoice item info for the given family ID and vendor invoice ID
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewProspectiveVendorInvoiceItem
         */
        readonly viewProspectiveVendorInvoiceItem: {
            readonly name: "ViewProspectiveVendorInvoiceItem";
            readonly I: typeof VendorInvoiceItemProspectiveInfoRequest;
            readonly O: typeof VendorInvoicesServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View receipt (goods receipt) statistics of the vendor invoice
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewReceiptStatistics
         */
        readonly viewReceiptStatistics: {
            readonly name: "ViewReceiptStatistics";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorInvoiceReceiptStatisticsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Scailo.VendorInvoicesService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof VendorInvoicesServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download vendor invoice with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.VendorInvoicesService.DownloadByUUID
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
         * @generated from rpc Scailo.VendorInvoicesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof VendorInvoicesServiceSearchAllReq;
            readonly O: typeof VendorInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.VendorInvoicesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof VendorInvoicesServiceFilterReq;
            readonly O: typeof VendorInvoicesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.VendorInvoicesService.CountInStatus
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
         * @generated from rpc Scailo.VendorInvoicesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof VendorInvoicesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the sum of the total value of all the records that match the given criteria
         *
         * @generated from rpc Scailo.VendorInvoicesService.AccruedValue
         */
        readonly accruedValue: {
            readonly name: "AccruedValue";
            readonly I: typeof VendorInvoicesServiceCountReq;
            readonly O: typeof SumResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.VendorInvoicesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof VendorInvoicesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=vendor_invoices.scailo_connect.d.ts.map