import { WorkOrder, WorkOrderAncillaryParameters, WorkOrderItem, WorkOrderItemHistoryRequest, WorkOrderItemProspectiveInfoRequest, WorkOrderItemsSearchRequest, WorkOrderProductionStatisticsList, WorkOrderRequirementStatisticsList, WorkOrdersItemsList, WorkOrdersList, WorkOrdersServiceAutofillRequest, WorkOrdersServiceCountReq, WorkOrdersServiceCreateRequest, WorkOrdersServiceFilterReq, WorkOrdersServiceItemCreateRequest, WorkOrdersServiceItemUpdateRequest, WorkOrdersServicePaginatedItemsResponse, WorkOrdersServicePaginationReq, WorkOrdersServicePaginationResponse, WorkOrdersServiceSearchAllReq, WorkOrdersServiceUpdateRequest } from "./work_orders.scailo_pb.js";
import { ActiveStatus, AmendmentLogsList, BooleanResponse, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithFile, IdentifierUUIDWithUserComment, IdentifierWithEmailAttributes, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, RepeatWithDeliveryDate, SimpleSearchReq, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
import { FamiliesList, FilterFamiliesReqForIdentifier } from "./families.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each work order
 *
 * @generated from service Scailo.WorkOrdersService
 */
export declare const WorkOrdersService: {
    readonly typeName: "Scailo.WorkOrdersService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.WorkOrdersService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof WorkOrdersServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.WorkOrdersService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof WorkOrdersServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.WorkOrdersService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof WorkOrdersServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.WorkOrdersService.SendForVerification
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
         * @generated from rpc Scailo.WorkOrdersService.Verify
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
         * @generated from rpc Scailo.WorkOrdersService.Approve
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
         * @generated from rpc Scailo.WorkOrdersService.SendForRevision
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
         * @generated from rpc Scailo.WorkOrdersService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof WorkOrdersServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.WorkOrdersService.Halt
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
         * @generated from rpc Scailo.WorkOrdersService.Discard
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
         * @generated from rpc Scailo.WorkOrdersService.Restore
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
         * @generated from rpc Scailo.WorkOrdersService.Complete
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
         * @generated from rpc Scailo.WorkOrdersService.Repeat
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
         * @generated from rpc Scailo.WorkOrdersService.Reopen
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
         * @generated from rpc Scailo.WorkOrdersService.CommentAdd
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
         * @generated from rpc Scailo.WorkOrdersService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a magic link
         *
         * @generated from rpc Scailo.WorkOrdersService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Autofill the work order
         *
         * @generated from rpc Scailo.WorkOrdersService.Autofill
         */
        readonly autofill: {
            readonly name: "Autofill";
            readonly I: typeof WorkOrdersServiceAutofillRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Amend the work order and send for revision
         *
         * @generated from rpc Scailo.WorkOrdersService.Amend
         */
        readonly amend: {
            readonly name: "Amend";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the Work Order can be marked as completed
         *
         * @generated from rpc Scailo.WorkOrdersService.IsCompletable
         */
        readonly isCompletable: {
            readonly name: "IsCompletable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a work order
         *
         * @generated from rpc Scailo.WorkOrdersService.AddWorkOrderItem
         */
        readonly addWorkOrderItem: {
            readonly name: "AddWorkOrderItem";
            readonly I: typeof WorkOrdersServiceItemCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a work order
         *
         * @generated from rpc Scailo.WorkOrdersService.ModifyWorkOrderItem
         */
        readonly modifyWorkOrderItem: {
            readonly name: "ModifyWorkOrderItem";
            readonly I: typeof WorkOrdersServiceItemUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a work order
         *
         * @generated from rpc Scailo.WorkOrdersService.ApproveWorkOrderItem
         */
        readonly approveWorkOrderItem: {
            readonly name: "ApproveWorkOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a work order
         *
         * @generated from rpc Scailo.WorkOrdersService.DeleteWorkOrderItem
         */
        readonly deleteWorkOrderItem: {
            readonly name: "DeleteWorkOrderItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a work order
         *
         * @generated from rpc Scailo.WorkOrdersService.ReorderWorkOrderItems
         */
        readonly reorderWorkOrderItems: {
            readonly name: "ReorderWorkOrderItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Work Order Item by ID
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewWorkOrderItemByID
         */
        readonly viewWorkOrderItemByID: {
            readonly name: "ViewWorkOrderItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof WorkOrderItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved work order items for given work order ID
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewApprovedWorkOrderItems
         */
        readonly viewApprovedWorkOrderItems: {
            readonly name: "ViewApprovedWorkOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof WorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved work order items for given work order ID
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewUnapprovedWorkOrderItems
         */
        readonly viewUnapprovedWorkOrderItems: {
            readonly name: "ViewUnapprovedWorkOrderItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof WorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the work order item
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewWorkOrderItemHistory
         */
        readonly viewWorkOrderItemHistory: {
            readonly name: "ViewWorkOrderItemHistory";
            readonly I: typeof WorkOrderItemHistoryRequest;
            readonly O: typeof WorkOrdersItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved work order items for given work order ID with pagination
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewPaginatedApprovedWorkOrderItems
         */
        readonly viewPaginatedApprovedWorkOrderItems: {
            readonly name: "ViewPaginatedApprovedWorkOrderItems";
            readonly I: typeof WorkOrderItemsSearchRequest;
            readonly O: typeof WorkOrdersServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved work order items for given work order ID with pagination
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewPaginatedUnapprovedWorkOrderItems
         */
        readonly viewPaginatedUnapprovedWorkOrderItems: {
            readonly name: "ViewPaginatedUnapprovedWorkOrderItems";
            readonly I: typeof WorkOrderItemsSearchRequest;
            readonly O: typeof WorkOrdersServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through work order items with pagination
         *
         * @generated from rpc Scailo.WorkOrdersService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof WorkOrderItemsSearchRequest;
            readonly O: typeof WorkOrdersServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file with the associated line items. The same file could then be used to upload line items.
         *
         * @generated from rpc Scailo.WorkOrdersService.DownloadItemsAsCSV
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
         * @generated from rpc Scailo.WorkOrdersService.DownloadItemsTemplateAsCSV
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
         * @generated from rpc Scailo.WorkOrdersService.UploadWorkOrderItems
         */
        readonly uploadWorkOrderItems: {
            readonly name: "UploadWorkOrderItems";
            readonly I: typeof IdentifierUUIDWithFile;
            readonly O: typeof IdentifiersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof WorkOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof WorkOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by Reference ID (returns the latest record in case of duplicates)
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewByReferenceID
         */
        readonly viewByReferenceID: {
            readonly name: "ViewByReferenceID";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof WorkOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof WorkOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof WorkOrder;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof WorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the ancillary parameters (UUIDs of the internal references) by UUID
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewAncillaryParametersByUUID
         */
        readonly viewAncillaryParametersByUUID: {
            readonly name: "ViewAncillaryParametersByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof WorkOrderAncillaryParameters;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof WorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof WorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof WorkOrdersServicePaginationReq;
            readonly O: typeof WorkOrdersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all the amendments made
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewAmendments
         */
        readonly viewAmendments: {
            readonly name: "ViewAmendments";
            readonly I: typeof Identifier;
            readonly O: typeof AmendmentLogsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective families for the given work order
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewProspectiveFamilies
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
         * @generated from rpc Scailo.WorkOrdersService.FilterProspectiveFamilies
         */
        readonly filterProspectiveFamilies: {
            readonly name: "FilterProspectiveFamilies";
            readonly I: typeof FilterFamiliesReqForIdentifier;
            readonly O: typeof FamiliesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View prospective work order item info for the given family ID and work order ID
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewProspectiveWorkOrderItem
         */
        readonly viewProspectiveWorkOrderItem: {
            readonly name: "ViewProspectiveWorkOrderItem";
            readonly I: typeof WorkOrderItemProspectiveInfoRequest;
            readonly O: typeof WorkOrdersServiceItemCreateRequest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View requirement statistics (match with the selected sales order) of the work order
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewRequirementStatistics
         */
        readonly viewRequirementStatistics: {
            readonly name: "ViewRequirementStatistics";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof WorkOrderRequirementStatisticsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View production statistics (match with all the associated production plans) of the work order
         *
         * @generated from rpc Scailo.WorkOrdersService.ViewProductionStatistics
         */
        readonly viewProductionStatistics: {
            readonly name: "ViewProductionStatistics";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof WorkOrderProductionStatisticsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if the record is downloadable (checks if the custom download function has been implemented)
         *
         * @generated from rpc Scailo.WorkOrdersService.IsDownloadable
         */
        readonly isDownloadable: {
            readonly name: "IsDownloadable";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Download work order with the given IdentifierUUID (can be used to allow public downloads)
         *
         * @generated from rpc Scailo.WorkOrdersService.DownloadByUUID
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
         * @generated from rpc Scailo.WorkOrdersService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof WorkOrdersServiceSearchAllReq;
            readonly O: typeof WorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.WorkOrdersService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof WorkOrdersServiceFilterReq;
            readonly O: typeof WorkOrdersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.WorkOrdersService.CountInStatus
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
         * @generated from rpc Scailo.WorkOrdersService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof WorkOrdersServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.WorkOrdersService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof WorkOrdersServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=work_orders.scailo_connect.d.ts.map