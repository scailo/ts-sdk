import { InwardJobFreeIssueMaterial, InwardJobFreeIssueMaterialAncillaryParameters, InwardJobFreeIssueMaterialItem, InwardJobFreeIssueMaterialItemHistoryRequest, InwardJobFreeIssueMaterialItemProspectiveInfoRequest, InwardJobFreeIssueMaterialItemsSearchRequest, InwardJobsFreeIssueMaterialsItemsList, InwardJobsFreeIssueMaterialsList, InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest, InwardJobsFreeIssueMaterialsServiceAutofillRequest, InwardJobsFreeIssueMaterialsServiceCountReq, InwardJobsFreeIssueMaterialsServiceCreateRequest, InwardJobsFreeIssueMaterialsServiceFilterReq, InwardJobsFreeIssueMaterialsServiceItemCreateRequest, InwardJobsFreeIssueMaterialsServiceItemUpdateRequest, InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse, InwardJobsFreeIssueMaterialsServicePaginationReq, InwardJobsFreeIssueMaterialsServicePaginationResponse, InwardJobsFreeIssueMaterialsServiceSearchAllReq, InwardJobsFreeIssueMaterialsServiceUpdateRequest } from "./inward_jobs_free_issue_materials.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, DualQuantitiesResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each inward job free issue material
 *
 * @generated from service Scailo.InwardJobsFreeIssueMaterialsService
 */
export declare const InwardJobsFreeIssueMaterialsService: {
    readonly typeName: "Scailo.InwardJobsFreeIssueMaterialsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.SendForVerification
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Verify
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Approve
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.SendForRevision
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Halt
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Discard
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Restore
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Complete
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Repeat
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Reopen
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.CommentAdd
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the inward job free issue material
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Inward Job Free Issue Material can be marked as completed
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a inward job free issue material
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.AddInwardJobFreeIssueMaterialItem
         */
        readonly addInwardJobFreeIssueMaterialItem: {
            readonly name: "AddInwardJobFreeIssueMaterialItem";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a inward job free issue material
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ModifyInwardJobFreeIssueMaterialItem
         */
        readonly modifyInwardJobFreeIssueMaterialItem: {
            readonly name: "ModifyInwardJobFreeIssueMaterialItem";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a inward job free issue material
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ApproveInwardJobFreeIssueMaterialItem
         */
        readonly approveInwardJobFreeIssueMaterialItem: {
            readonly name: "ApproveInwardJobFreeIssueMaterialItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a inward job free issue material
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.DeleteInwardJobFreeIssueMaterialItem
         */
        readonly deleteInwardJobFreeIssueMaterialItem: {
            readonly name: "DeleteInwardJobFreeIssueMaterialItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a inward job free issue material
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ReorderInwardJobFreeIssueMaterialItems
         */
        readonly reorderInwardJobFreeIssueMaterialItems: {
            readonly name: "ReorderInwardJobFreeIssueMaterialItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Inward Job Free Issue Material Item by ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewInwardJobFreeIssueMaterialItemByID
         */
        readonly viewInwardJobFreeIssueMaterialItemByID: {
            readonly name: "ViewInwardJobFreeIssueMaterialItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobFreeIssueMaterialItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job free issue material items for given inward job free issue material ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewApprovedInwardJobFreeIssueMaterialItems
         */
        readonly viewApprovedInwardJobFreeIssueMaterialItems: {
            readonly name: "ViewApprovedInwardJobFreeIssueMaterialItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsFreeIssueMaterialsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job free issue material items for given inward job free issue material ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewUnapprovedInwardJobFreeIssueMaterialItems
         */
        readonly viewUnapprovedInwardJobFreeIssueMaterialItems: {
            readonly name: "ViewUnapprovedInwardJobFreeIssueMaterialItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof InwardJobsFreeIssueMaterialsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the inward job free issue material item
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewInwardJobFreeIssueMaterialItemHistory
         */
        readonly viewInwardJobFreeIssueMaterialItemHistory: {
            readonly name: "ViewInwardJobFreeIssueMaterialItemHistory";
            readonly I: typeof InwardJobFreeIssueMaterialItemHistoryRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved inward job free issue material items for given inward job free issue material ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewPaginatedApprovedInwardJobFreeIssueMaterialItems
         */
        readonly viewPaginatedApprovedInwardJobFreeIssueMaterialItems: {
            readonly name: "ViewPaginatedApprovedInwardJobFreeIssueMaterialItems";
            readonly I: typeof InwardJobFreeIssueMaterialItemsSearchRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved inward job free issue material items for given inward job free issue material ID with pagination
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewPaginatedUnapprovedInwardJobFreeIssueMaterialItems
         */
        readonly viewPaginatedUnapprovedInwardJobFreeIssueMaterialItems: {
            readonly name: "ViewPaginatedUnapprovedInwardJobFreeIssueMaterialItems";
            readonly I: typeof InwardJobFreeIssueMaterialItemsSearchRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through inward job free issue material items with pagination
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof InwardJobFreeIssueMaterialItemsSearchRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobFreeIssueMaterial;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobFreeIssueMaterial;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof InwardJobFreeIssueMaterial;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobFreeIssueMaterial;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof InwardJobsFreeIssueMaterialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobFreeIssueMaterialAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof InwardJobsFreeIssueMaterialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof InwardJobsFreeIssueMaterialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof InwardJobsFreeIssueMaterialsServicePaginationReq;
            readonly O: typeof InwardJobsFreeIssueMaterialsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given inward job free issue material
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective inward job free issue material item info for the given family ID and inward job free issue material ID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewProspectiveInwardJobFreeIssueMaterialItem
         */
        readonly viewProspectiveInwardJobFreeIssueMaterialItem: {
            readonly name: "ViewProspectiveInwardJobFreeIssueMaterialItem";
            readonly I: typeof InwardJobFreeIssueMaterialItemProspectiveInfoRequest;
            readonly O: typeof InwardJobsFreeIssueMaterialsServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Other view operations
         * Download inward job free issue material with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.DownloadByUUID
         */
        readonly downloadByUUID: {
            readonly name: "DownloadByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download the label for the inward job free issue material with the given IdentifierUUID
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.DownloadLabelByUUID
         */
        readonly downloadLabelByUUID: {
            readonly name: "DownloadLabelByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View already added quantities
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.ViewAddedFamilyQuantityForSource
         */
        readonly viewAddedFamilyQuantityForSource: {
            readonly name: "ViewAddedFamilyQuantityForSource";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceAlreadyAddedQuantityForSourceRequest;
            readonly O: typeof DualQuantitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceSearchAllReq;
            readonly O: typeof InwardJobsFreeIssueMaterialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceFilterReq;
            readonly O: typeof InwardJobsFreeIssueMaterialsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.CountInStatus
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
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.InwardJobsFreeIssueMaterialsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof InwardJobsFreeIssueMaterialsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=inward_jobs_free_issue_materials.scailo_connect.d.ts.map