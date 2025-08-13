import { SalesEnquiriesItemsList, SalesEnquiriesList, SalesEnquiriesServiceContactCreateRequest, SalesEnquiriesServiceCountReq, SalesEnquiriesServiceCreateRequest, SalesEnquiriesServiceFilterReq, SalesEnquiriesServiceItemCreateRequest, SalesEnquiriesServiceItemUpdateRequest, SalesEnquiriesServicePaginatedItemsResponse, SalesEnquiriesServicePaginationReq, SalesEnquiriesServicePaginationResponse, SalesEnquiriesServiceSearchAllReq, SalesEnquiriesServiceUpdateRequest, SalesEnquiry, SalesEnquiryAncillaryParameters, SalesEnquiryContact, SalesEnquiryContactsList, SalesEnquiryItem, SalesEnquiryItemHistoryRequest, SalesEnquiryItemsSearchRequest } from "./sales_enquiries.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, RepeatWithDeliveryDate, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each sales enquiry
 *
 * @generated from service Scailo.SalesEnquiriesService
 */
export declare const SalesEnquiriesService: {
    readonly typeName: "Scailo.SalesEnquiriesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.SalesEnquiriesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof SalesEnquiriesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.SalesEnquiriesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof SalesEnquiriesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.SalesEnquiriesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof SalesEnquiriesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.SalesEnquiriesService.SendForVerification
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
         * @generated from rpc Scailo.SalesEnquiriesService.Verify
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
         * @generated from rpc Scailo.SalesEnquiriesService.Approve
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
         * @generated from rpc Scailo.SalesEnquiriesService.SendForRevision
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
         * @generated from rpc Scailo.SalesEnquiriesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof SalesEnquiriesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.SalesEnquiriesService.Halt
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
         * @generated from rpc Scailo.SalesEnquiriesService.Discard
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
         * @generated from rpc Scailo.SalesEnquiriesService.Restore
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
         * @generated from rpc Scailo.SalesEnquiriesService.Complete
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
         * @generated from rpc Scailo.SalesEnquiriesService.Repeat
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
         * @generated from rpc Scailo.SalesEnquiriesService.Reopen
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
         * @generated from rpc Scailo.SalesEnquiriesService.CommentAdd
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
         * @generated from rpc Scailo.SalesEnquiriesService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Amend the sales enquiry and send for revision
         *
         * @generated from rpc Scailo.SalesEnquiriesService.Amend
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
         * @generated from rpc Scailo.SalesEnquiriesService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a sales enquiry
         *
         * @generated from rpc Scailo.SalesEnquiriesService.AddSalesEnquiryItem
         */
        readonly addSalesEnquiryItem: {
            readonly name: "AddSalesEnquiryItem";
            readonly I: typeof SalesEnquiriesServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a sales enquiry
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ModifySalesEnquiryItem
         */
        readonly modifySalesEnquiryItem: {
            readonly name: "ModifySalesEnquiryItem";
            readonly I: typeof SalesEnquiriesServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a sales enquiry
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ApproveSalesEnquiryItem
         */
        readonly approveSalesEnquiryItem: {
            readonly name: "ApproveSalesEnquiryItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a sales enquiry
         *
         * @generated from rpc Scailo.SalesEnquiriesService.DeleteSalesEnquiryItem
         */
        readonly deleteSalesEnquiryItem: {
            readonly name: "DeleteSalesEnquiryItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a sales enquiry
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ReorderSalesEnquiryItems
         */
        readonly reorderSalesEnquiryItems: {
            readonly name: "ReorderSalesEnquiryItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Sales Enquiry Item by ID
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewSalesEnquiryItemByID
         */
        readonly viewSalesEnquiryItemByID: {
            readonly name: "ViewSalesEnquiryItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesEnquiryItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved sales enquiry items for given sales enquiry ID
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewApprovedSalesEnquiryItems
         */
        readonly viewApprovedSalesEnquiryItems: {
            readonly name: "ViewApprovedSalesEnquiryItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved sales enquiry items for given sales enquiry ID
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewUnapprovedSalesEnquiryItems
         */
        readonly viewUnapprovedSalesEnquiryItems: {
            readonly name: "ViewUnapprovedSalesEnquiryItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SalesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the sales enquiry item
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewSalesEnquiryItemHistory
         */
        readonly viewSalesEnquiryItemHistory: {
            readonly name: "ViewSalesEnquiryItemHistory";
            readonly I: typeof SalesEnquiryItemHistoryRequest;
            readonly O: typeof SalesEnquiriesItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved sales enquiry items for given sales enquiry ID with pagination
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewPaginatedApprovedSalesEnquiryItems
         */
        readonly viewPaginatedApprovedSalesEnquiryItems: {
            readonly name: "ViewPaginatedApprovedSalesEnquiryItems";
            readonly I: typeof SalesEnquiryItemsSearchRequest;
            readonly O: typeof SalesEnquiriesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved sales enquiry items for given sales enquiry ID with pagination
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewPaginatedUnapprovedSalesEnquiryItems
         */
        readonly viewPaginatedUnapprovedSalesEnquiryItems: {
            readonly name: "ViewPaginatedUnapprovedSalesEnquiryItems";
            readonly I: typeof SalesEnquiryItemsSearchRequest;
            readonly O: typeof SalesEnquiriesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through sales enquiry items with pagination
         *
         * @generated from rpc Scailo.SalesEnquiriesService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof SalesEnquiryItemsSearchRequest;
            readonly O: typeof SalesEnquiriesServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.SalesEnquiriesService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.SalesEnquiriesService.DownloadItemsTemplateAsCSV
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
         * @generated from rpc Scailo.SalesEnquiriesService.UploadSalesEnquiryItems
         */
        readonly uploadSalesEnquiryItems: {
            readonly name: "UploadSalesEnquiryItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a contact
         *
         * @generated from rpc Scailo.SalesEnquiriesService.AddSalesEnquiryContact
         */
        readonly addSalesEnquiryContact: {
            readonly name: "AddSalesEnquiryContact";
            readonly I: typeof SalesEnquiriesServiceContactCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a contact
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ApproveSalesEnquiryContact
         */
        readonly approveSalesEnquiryContact: {
            readonly name: "ApproveSalesEnquiryContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a contact
         *
         * @generated from rpc Scailo.SalesEnquiriesService.DeleteSalesEnquiryContact
         */
        readonly deleteSalesEnquiryContact: {
            readonly name: "DeleteSalesEnquiryContact";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a contact for the given ID
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewSalesEnquiryContactByID
         */
        readonly viewSalesEnquiryContactByID: {
            readonly name: "ViewSalesEnquiryContactByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesEnquiryContact;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all contacts for given sales enquiry UUID
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewSalesEnquiryContacts
         */
        readonly viewSalesEnquiryContacts: {
            readonly name: "ViewSalesEnquiryContacts";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesEnquiryContactsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Reference ID (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof SalesEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof SalesEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesEnquiry;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesEnquiryAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof SalesEnquiriesServicePaginationReq;
            readonly O: typeof SalesEnquiriesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all the amendments made
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewAmendments
         */
        readonly viewAmendments: {
            readonly name: "ViewAmendments";
            readonly I: typeof Identifier;
            readonly O: typeof AmendmentLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all sales orders IDs that are associated with the given sales enquiry ID
         *
         * @generated from rpc Scailo.SalesEnquiriesService.ViewAssociatedSalesOrdersIDs
         */
        readonly viewAssociatedSalesOrdersIDs: {
            readonly name: "ViewAssociatedSalesOrdersIDs";
            readonly I: typeof Identifier;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download sales enquiry with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.SalesEnquiriesService.DownloadByUUID
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
         * @generated from rpc Scailo.SalesEnquiriesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof SalesEnquiriesServiceSearchAllReq;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.SalesEnquiriesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof SalesEnquiriesServiceFilterReq;
            readonly O: typeof SalesEnquiriesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.SalesEnquiriesService.CountInStatus
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
         * @generated from rpc Scailo.SalesEnquiriesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof SalesEnquiriesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.SalesEnquiriesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof SalesEnquiriesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=sales_enquiries.scailo_connect.d.ts.map