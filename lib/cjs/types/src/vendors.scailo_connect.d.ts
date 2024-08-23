import { Vendor, VendorItem, VendorItemHistoryRequest, VendorItemsList, VendorItemsSearchRequest, VendorsList, VendorsServiceCountReq, VendorsServiceCreateRequest, VendorsServiceFilterReq, VendorsServiceItemCreateRequest, VendorsServiceItemUpdateRequest, VendorsServicePaginatedItemsResponse, VendorsServicePaginationReq, VendorsServicePaginationResponse, VendorsServiceSearchAllReq, VendorsServiceUpdateRequest, VendorsServiceUserCreateRequest, VendorUser, VendorUsersList } from "./vendors.scailo_pb.js";
import { ActiveStatus, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithEmailAttributes, IdentifierWithUserComment } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each vendor
 *
 * @generated from service Scailo.VendorsService
 */
export declare const VendorsService: {
    readonly typeName: "Scailo.VendorsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.VendorsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof VendorsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.VendorsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof VendorsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.VendorsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof VendorsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.VendorsService.SendForVerification
         */
        readonly sendForVerification: {
            readonly name: "SendForVerification";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Verify
         *
         * @generated from rpc Scailo.VendorsService.Verify
         */
        readonly verify: {
            readonly name: "Verify";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve
         *
         * @generated from rpc Scailo.VendorsService.Approve
         */
        readonly approve: {
            readonly name: "Approve";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send For Revision
         *
         * @generated from rpc Scailo.VendorsService.SendForRevision
         */
        readonly sendForRevision: {
            readonly name: "SendForRevision";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update revision
         *
         * @generated from rpc Scailo.VendorsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof VendorsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.VendorsService.Halt
         */
        readonly halt: {
            readonly name: "Halt";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Discard
         *
         * @generated from rpc Scailo.VendorsService.Discard
         */
        readonly discard: {
            readonly name: "Discard";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Restore
         *
         * @generated from rpc Scailo.VendorsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * @generated from rpc Scailo.VendorsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send Email
         *
         * @generated from rpc Scailo.VendorsService.SendEmail
         */
        readonly sendEmail: {
            readonly name: "SendEmail";
            readonly I: typeof IdentifierWithEmailAttributes;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add an item to a vendor
         *
         * @generated from rpc Scailo.VendorsService.AddVendorItem
         */
        readonly addVendorItem: {
            readonly name: "AddVendorItem";
            readonly I: typeof VendorsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify an item in a vendor
         *
         * @generated from rpc Scailo.VendorsService.ModifyVendorItem
         */
        readonly modifyVendorItem: {
            readonly name: "ModifyVendorItem";
            readonly I: typeof VendorsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve an item in a vendor
         *
         * @generated from rpc Scailo.VendorsService.ApproveVendorItem
         */
        readonly approveVendorItem: {
            readonly name: "ApproveVendorItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an item in a vendor
         *
         * @generated from rpc Scailo.VendorsService.DeleteVendorItem
         */
        readonly deleteVendorItem: {
            readonly name: "DeleteVendorItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder items in a vendor
         * rpc ReorderVendorItems(ReorderItemsRequest) returns (Identifier);
         * View Vendor Item by ID
         *
         * @generated from rpc Scailo.VendorsService.ViewVendorItemByID
         */
        readonly viewVendorItemByID: {
            readonly name: "ViewVendorItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof VendorItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved vendor items for given vendor ID with pagination
         *
         * @generated from rpc Scailo.VendorsService.ViewPaginatedApprovedVendorItems
         */
        readonly viewPaginatedApprovedVendorItems: {
            readonly name: "ViewPaginatedApprovedVendorItems";
            readonly I: typeof VendorItemsSearchRequest;
            readonly O: typeof VendorsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved vendor items for given vendor ID with pagination
         *
         * @generated from rpc Scailo.VendorsService.ViewPaginatedUnapprovedVendorItems
         */
        readonly viewPaginatedUnapprovedVendorItems: {
            readonly name: "ViewPaginatedUnapprovedVendorItems";
            readonly I: typeof VendorItemsSearchRequest;
            readonly O: typeof VendorsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the vendor item
         *
         * @generated from rpc Scailo.VendorsService.ViewVendorItemHistory
         */
        readonly viewVendorItemHistory: {
            readonly name: "ViewVendorItemHistory";
            readonly I: typeof VendorItemHistoryRequest;
            readonly O: typeof VendorItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through vendor items with pagination
         *
         * @generated from rpc Scailo.VendorsService.SearchItemsWithPagination
         */
        readonly searchItemsWithPagination: {
            readonly name: "SearchItemsWithPagination";
            readonly I: typeof VendorItemsSearchRequest;
            readonly O: typeof VendorsServicePaginatedItemsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a user
         *
         * @generated from rpc Scailo.VendorsService.AddVendorUser
         */
        readonly addVendorUser: {
            readonly name: "AddVendorUser";
            readonly I: typeof VendorsServiceUserCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a user
         *
         * @generated from rpc Scailo.VendorsService.ApproveVendorUser
         */
        readonly approveVendorUser: {
            readonly name: "ApproveVendorUser";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a user
         *
         * @generated from rpc Scailo.VendorsService.DeleteVendorUser
         */
        readonly deleteVendorUser: {
            readonly name: "DeleteVendorUser";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View a user for the given ID
         *
         * @generated from rpc Scailo.VendorsService.ViewVendorUserByID
         */
        readonly viewVendorUserByID: {
            readonly name: "ViewVendorUserByID";
            readonly I: typeof Identifier;
            readonly O: typeof VendorUser;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all users for given vendor ID
         *
         * @generated from rpc Scailo.VendorsService.ViewVendorUsers
         */
        readonly viewVendorUsers: {
            readonly name: "ViewVendorUsers";
            readonly I: typeof Identifier;
            readonly O: typeof VendorUsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.VendorsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Vendor;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.VendorsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof VendorsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.VendorsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof VendorsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.VendorsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof VendorsServicePaginationReq;
            readonly O: typeof VendorsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View vendors that have been associated with the given family ID (returns vendors that have not been approved for the family as well)
         *
         * @generated from rpc Scailo.VendorsService.ViewVendorsForFamily
         */
        readonly viewVendorsForFamily: {
            readonly name: "ViewVendorsForFamily";
            readonly I: typeof Identifier;
            readonly O: typeof VendorsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.VendorsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof VendorsServiceSearchAllReq;
            readonly O: typeof VendorsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.VendorsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof VendorsServiceFilterReq;
            readonly O: typeof VendorsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.VendorsService.CountInStatus
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
         * @generated from rpc Scailo.VendorsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof VendorsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=vendors.scailo_connect.d.ts.map