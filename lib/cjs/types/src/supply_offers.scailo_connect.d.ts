import { SupplyOffer, SupplyOfferAncillaryParameters, SupplyOfferItem, SupplyOfferItemHistoryRequest, SupplyOfferItemProspectiveInfoRequest, SupplyOfferItemsList, SupplyOfferItemsSearchRequest, SupplyOffersList, SupplyOffersServiceAutofillRequest, SupplyOffersServiceCountReq, SupplyOffersServiceCreateRequest, SupplyOffersServiceFilterReq, SupplyOffersServiceItemCreateRequest, SupplyOffersServiceItemUpdateRequest, SupplyOffersServicePaginatedItemsResponse, SupplyOffersServicePaginationReq, SupplyOffersServicePaginationResponse, SupplyOffersServiceSearchAllReq, SupplyOffersServiceUpdateRequest } from "./supply_offers.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, PriceResponse, ReorderItemsRequest, RepeatWithDeliveryDate, SimpleSearchReq, StandardFile, SumResponse } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each supply offer
 *
 * @generated from service Scailo.SupplyOffersService
 */
export declare const SupplyOffersService: {
    readonly typeName: "Scailo.SupplyOffersService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.SupplyOffersService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof SupplyOffersServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.SupplyOffersService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof SupplyOffersServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.SupplyOffersService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof SupplyOffersServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.SupplyOffersService.SendForVerification
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
         * @generated from rpc Scailo.SupplyOffersService.Verify
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
         * @generated from rpc Scailo.SupplyOffersService.Approve
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
         * @generated from rpc Scailo.SupplyOffersService.SendForRevision
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
         * @generated from rpc Scailo.SupplyOffersService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof SupplyOffersServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.SupplyOffersService.Halt
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
         * @generated from rpc Scailo.SupplyOffersService.Discard
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
         * @generated from rpc Scailo.SupplyOffersService.Restore
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
         * @generated from rpc Scailo.SupplyOffersService.Complete
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
         * @generated from rpc Scailo.SupplyOffersService.Repeat
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
         * @generated from rpc Scailo.SupplyOffersService.Reopen
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
         * @generated from rpc Scailo.SupplyOffersService.CommentAdd
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
         * @generated from rpc Scailo.SupplyOffersService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the supply offer
         *
         * @generated from rpc Scailo.SupplyOffersService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof SupplyOffersServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Amend the supply offer and send for revision
         *
         * @generated from rpc Scailo.SupplyOffersService.Amend
         */
        readonly amend: {
            readonly name: "Amend";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a supply offer
         *
         * @generated from rpc Scailo.SupplyOffersService.AddSupplyOfferItem
         */
        readonly addSupplyOfferItem: {
            readonly name: "AddSupplyOfferItem";
            readonly I: typeof SupplyOffersServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a supply offer
         *
         * @generated from rpc Scailo.SupplyOffersService.ModifySupplyOfferItem
         */
        readonly modifySupplyOfferItem: {
            readonly name: "ModifySupplyOfferItem";
            readonly I: typeof SupplyOffersServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a supply offer
         *
         * @generated from rpc Scailo.SupplyOffersService.ApproveSupplyOfferItem
         */
        readonly approveSupplyOfferItem: {
            readonly name: "ApproveSupplyOfferItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a supply offer
         *
         * @generated from rpc Scailo.SupplyOffersService.DeleteSupplyOfferItem
         */
        readonly deleteSupplyOfferItem: {
            readonly name: "DeleteSupplyOfferItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a supply offer
         *
         * @generated from rpc Scailo.SupplyOffersService.ReorderSupplyOfferItems
         */
        readonly reorderSupplyOfferItems: {
            readonly name: "ReorderSupplyOfferItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Supply Offer Item by ID
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewSupplyOfferItemByID
         */
        readonly viewSupplyOfferItemByID: {
            readonly name: "ViewSupplyOfferItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SupplyOfferItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Supply Offer Item's price after factoring in the discount
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewSupplyOfferItemPrice
         */
        readonly viewSupplyOfferItemPrice: {
            readonly name: "ViewSupplyOfferItemPrice";
            readonly I: typeof SupplyOfferItemProspectiveInfoRequest;
            readonly O: typeof PriceResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved supply offer items for given supply offer ID
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewApprovedSupplyOfferItems
         */
        readonly viewApprovedSupplyOfferItems: {
            readonly name: "ViewApprovedSupplyOfferItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SupplyOfferItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved supply offer items for given supply offer ID
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewUnapprovedSupplyOfferItems
         */
        readonly viewUnapprovedSupplyOfferItems: {
            readonly name: "ViewUnapprovedSupplyOfferItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SupplyOfferItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the supply offer item
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewSupplyOfferItemHistory
         */
        readonly viewSupplyOfferItemHistory: {
            readonly name: "ViewSupplyOfferItemHistory";
            readonly I: typeof SupplyOfferItemHistoryRequest;
            readonly O: typeof SupplyOfferItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved supply offer items for given supply offer ID with pagination
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewPaginatedApprovedSupplyOfferItems
         */
        readonly viewPaginatedApprovedSupplyOfferItems: {
            readonly name: "ViewPaginatedApprovedSupplyOfferItems";
            readonly I: typeof SupplyOfferItemsSearchRequest;
            readonly O: typeof SupplyOffersServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved supply offer items for given supply offer ID with pagination
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewPaginatedUnapprovedSupplyOfferItems
         */
        readonly viewPaginatedUnapprovedSupplyOfferItems: {
            readonly name: "ViewPaginatedUnapprovedSupplyOfferItems";
            readonly I: typeof SupplyOfferItemsSearchRequest;
            readonly O: typeof SupplyOffersServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through supply offer items with pagination
         *
         * @generated from rpc Scailo.SupplyOffersService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof SupplyOfferItemsSearchRequest;
            readonly O: typeof SupplyOffersServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.SupplyOffersService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.SupplyOffersService.DownloadItemsTemplateAsCSV
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
         * @generated from rpc Scailo.SupplyOffersService.UploadSupplyOfferItems
         */
        readonly uploadSupplyOfferItems: {
            readonly name: "UploadSupplyOfferItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof SupplyOffer;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SupplyOffer;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Reference ID (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof SupplyOffer;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof SupplyOffer;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SupplyOffer;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof SupplyOffersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SupplyOfferAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SupplyOffersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SupplyOffersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof SupplyOffersServicePaginationReq;
            readonly O: typeof SupplyOffersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all the amendments made
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewAmendments
         */
        readonly viewAmendments: {
            readonly name: "ViewAmendments";
            readonly I: typeof Identifier;
            readonly O: typeof AmendmentLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given supply offer
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.SupplyOffersService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective supply offer item info for the given family ID and supply offer ID
         *
         * @generated from rpc Scailo.SupplyOffersService.ViewProspectiveSupplyOfferItem
         */
        readonly viewProspectiveSupplyOfferItem: {
            readonly name: "ViewProspectiveSupplyOfferItem";
            readonly I: typeof SupplyOfferItemProspectiveInfoRequest;
            readonly O: typeof SupplyOffersServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Other view operations
         * Download supply offer with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.SupplyOffersService.DownloadByUUID
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
         * @generated from rpc Scailo.SupplyOffersService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof SupplyOffersServiceSearchAllReq;
            readonly O: typeof SupplyOffersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.SupplyOffersService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof SupplyOffersServiceFilterReq;
            readonly O: typeof SupplyOffersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.SupplyOffersService.CountInStatus
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
         * @generated from rpc Scailo.SupplyOffersService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof SupplyOffersServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Returns the sum of the total value of all the records that match the given criteria
         *
         * @generated from rpc Scailo.SupplyOffersService.AccruedValue
         */
        readonly accruedValue: {
            readonly name: "AccruedValue";
            readonly I: typeof SupplyOffersServiceCountReq;
            readonly O: typeof SumResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.SupplyOffersService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof SupplyOffersServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=supply_offers.scailo_connect.d.ts.map