import { PurchaseEnquiriesServicePaginatedItemsResponse, PurchaseEnquiry, PurchaseEnquiryItem, PurchaseEnquiryItemHistoryRequest, PurchaseEnquiryItemsSearchRequest, PurchasesEnquiriesItemsList, PurchasesEnquiriesList, PurchasesEnquiriesServiceCountReq, PurchasesEnquiriesServiceCreateRequest, PurchasesEnquiriesServiceFilterReq, PurchasesEnquiriesServiceItemCreateRequest, PurchasesEnquiriesServiceItemUpdateRequest, PurchasesEnquiriesServicePaginationReq, PurchasesEnquiriesServicePaginationResponse, PurchasesEnquiriesServiceSearchAllReq, PurchasesEnquiriesServiceUpdateRequest } from "./purchases_enquiries.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each purchase enquiry
 *
 * @generated from service Scailo.PurchasesEnquiriesService
 */
export declare const PurchasesEnquiriesService: {
    readonly typeName: "Scailo.PurchasesEnquiriesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof PurchasesEnquiriesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof PurchasesEnquiriesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof PurchasesEnquiriesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.SendForVerification
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
         * @generated from rpc Scailo.PurchasesEnquiriesService.Verify
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
         * @generated from rpc Scailo.PurchasesEnquiriesService.Approve
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
         * @generated from rpc Scailo.PurchasesEnquiriesService.SendForRevision
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
         * @generated from rpc Scailo.PurchasesEnquiriesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof PurchasesEnquiriesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.Halt
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
         * @generated from rpc Scailo.PurchasesEnquiriesService.Discard
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
         * @generated from rpc Scailo.PurchasesEnquiriesService.Restore
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
         * @generated from rpc Scailo.PurchasesEnquiriesService.Complete
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
         * @generated from rpc Scailo.PurchasesEnquiriesService.Repeat
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
         * @generated from rpc Scailo.PurchasesEnquiriesService.Reopen
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
         * @generated from rpc Scailo.PurchasesEnquiriesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a magic link
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a purchase enquiry
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.AddPurchaseEnquiryItem
         */
        readonly addPurchaseEnquiryItem: {
            readonly name: "AddPurchaseEnquiryItem";
            readonly I: typeof PurchasesEnquiriesServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a purchase enquiry
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ModifyPurchaseEnquiryItem
         */
        readonly modifyPurchaseEnquiryItem: {
            readonly name: "ModifyPurchaseEnquiryItem";
            readonly I: typeof PurchasesEnquiriesServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a purchase enquiry
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ApprovePurchaseEnquiryItem
         */
        readonly approvePurchaseEnquiryItem: {
            readonly name: "ApprovePurchaseEnquiryItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a purchase enquiry
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.DeletePurchaseEnquiryItem
         */
        readonly deletePurchaseEnquiryItem: {
            readonly name: "DeletePurchaseEnquiryItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a purchase enquiry
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ReorderPurchaseEnquiryItems
         */
        readonly reorderPurchaseEnquiryItems: {
            readonly name: "ReorderPurchaseEnquiryItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View purchase enquiry Item by ID
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ViewPurchaseEnquiryItemByID
         */
        readonly viewPurchaseEnquiryItemByID: {
            readonly name: "ViewPurchaseEnquiryItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseEnquiryItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved purchase enquiry items for given purchase enquiry ID
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ViewApprovedPurchaseEnquiryItems
         */
        readonly viewApprovedPurchaseEnquiryItems: {
            readonly name: "ViewApprovedPurchaseEnquiryItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved purchase enquiry items for given purchase enquiry ID
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ViewUnapprovedPurchaseEnquiryItems
         */
        readonly viewUnapprovedPurchaseEnquiryItems: {
            readonly name: "ViewUnapprovedPurchaseEnquiryItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof PurchasesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the purchase enquiry item
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ViewPurchaseEnquiryItemHistory
         */
        readonly viewPurchaseEnquiryItemHistory: {
            readonly name: "ViewPurchaseEnquiryItemHistory";
            readonly I: typeof PurchaseEnquiryItemHistoryRequest;
            readonly O: typeof PurchasesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved purchase enquiry items for given purchase enquiry ID with pagination
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ViewPaginatedApprovedPurchaseEnquiryItems
         */
        readonly viewPaginatedApprovedPurchaseEnquiryItems: {
            readonly name: "ViewPaginatedApprovedPurchaseEnquiryItems";
            readonly I: typeof PurchaseEnquiryItemsSearchRequest;
            readonly O: typeof PurchaseEnquiriesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved purchase enquiry items for given purchase enquiry ID with pagination
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ViewPaginatedUnapprovedPurchaseEnquiryItems
         */
        readonly viewPaginatedUnapprovedPurchaseEnquiryItems: {
            readonly name: "ViewPaginatedUnapprovedPurchaseEnquiryItems";
            readonly I: typeof PurchaseEnquiryItemsSearchRequest;
            readonly O: typeof PurchaseEnquiriesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through purchase enquiry items with pagination
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof PurchaseEnquiryItemsSearchRequest;
            readonly O: typeof PurchaseEnquiriesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.PurchasesEnquiriesService.DownloadItemsTemplateAsCSV
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
         * @generated from rpc Scailo.PurchasesEnquiriesService.UploadPurchaseEnquiryItems
         */
        readonly uploadPurchaseEnquiryItems: {
            readonly name: "UploadPurchaseEnquiryItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Reference ID (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof PurchaseEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof PurchaseEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchaseEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof PurchasesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof PurchasesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof PurchasesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof PurchasesEnquiriesServicePaginationReq;
            readonly O: typeof PurchasesEnquiriesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download purchase enquiry with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.DownloadByUUID
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
         * @generated from rpc Scailo.PurchasesEnquiriesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof PurchasesEnquiriesServiceSearchAllReq;
            readonly O: typeof PurchasesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof PurchasesEnquiriesServiceFilterReq;
            readonly O: typeof PurchasesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.CountInStatus
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
         * @generated from rpc Scailo.PurchasesEnquiriesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof PurchasesEnquiriesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.PurchasesEnquiriesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof PurchasesEnquiriesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=purchases_enquiries.scailo_connect.d.ts.map