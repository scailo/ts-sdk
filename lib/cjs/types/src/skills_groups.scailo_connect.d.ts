import { SkillGroup, SkillGroupItem, SkillGroupItemHistoryRequest, SkillsGroupsItemsList, SkillsGroupsList, SkillsGroupsServiceCountReq, SkillsGroupsServiceCreateRequest, SkillsGroupsServiceFilterReq, SkillsGroupsServiceItemCreateRequest, SkillsGroupsServiceItemUpdateRequest, SkillsGroupsServicePaginationReq, SkillsGroupsServicePaginationResponse, SkillsGroupsServiceSearchAllReq, SkillsGroupsServiceUpdateRequest } from "./skills_groups.scailo_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierUUID, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each skill group
 *
 * @generated from service Scailo.SkillsGroupsService
 */
export declare const SkillsGroupsService: {
    readonly typeName: "Scailo.SkillsGroupsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.SkillsGroupsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof SkillsGroupsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.SkillsGroupsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof SkillsGroupsServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.SkillsGroupsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof SkillsGroupsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.SkillsGroupsService.SendForVerification
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
         * @generated from rpc Scailo.SkillsGroupsService.Verify
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
         * @generated from rpc Scailo.SkillsGroupsService.Approve
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
         * @generated from rpc Scailo.SkillsGroupsService.SendForRevision
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
         * @generated from rpc Scailo.SkillsGroupsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof SkillsGroupsServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.SkillsGroupsService.Halt
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
         * @generated from rpc Scailo.SkillsGroupsService.Discard
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
         * @generated from rpc Scailo.SkillsGroupsService.Restore
         */
        readonly restore: {
            readonly name: "Restore";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Complete
         *
         * @generated from rpc Scailo.SkillsGroupsService.Complete
         */
        readonly complete: {
            readonly name: "Complete";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Repeat
         *
         * @generated from rpc Scailo.SkillsGroupsService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reopen
         *
         * @generated from rpc Scailo.SkillsGroupsService.Reopen
         */
        readonly reopen: {
            readonly name: "Reopen";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * Send Email
         * rpc SendEmail (IdentifierWithEmailAttributes) returns (Identifier);
         *
         * @generated from rpc Scailo.SkillsGroupsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Clone skill group from an existing skill group (denoted by the identifier)
         *
         * @generated from rpc Scailo.SkillsGroupsService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a param to a skill group
         *
         * @generated from rpc Scailo.SkillsGroupsService.AddSkillGroupItem
         */
        readonly addSkillGroupItem: {
            readonly name: "AddSkillGroupItem";
            readonly I: typeof SkillsGroupsServiceItemCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a param in a skill group
         *
         * @generated from rpc Scailo.SkillsGroupsService.ModifySkillGroupItem
         */
        readonly modifySkillGroupItem: {
            readonly name: "ModifySkillGroupItem";
            readonly I: typeof SkillsGroupsServiceItemUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a param in a skill group
         *
         * @generated from rpc Scailo.SkillsGroupsService.ApproveSkillGroupItem
         */
        readonly approveSkillGroupItem: {
            readonly name: "ApproveSkillGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a param in a skill group
         *
         * @generated from rpc Scailo.SkillsGroupsService.DeleteSkillGroupItem
         */
        readonly deleteSkillGroupItem: {
            readonly name: "DeleteSkillGroupItem";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder params in a skill group
         *
         * @generated from rpc Scailo.SkillsGroupsService.ReorderSkillGroupItems
         */
        readonly reorderSkillGroupItems: {
            readonly name: "ReorderSkillGroupItems";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Skill Group Item by ID
         *
         * @generated from rpc Scailo.SkillsGroupsService.ViewSkillGroupItemByID
         */
        readonly viewSkillGroupItemByID: {
            readonly name: "ViewSkillGroupItemByID";
            readonly I: typeof Identifier;
            readonly O: typeof SkillGroupItem;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved skill group params for given skill group ID
         *
         * @generated from rpc Scailo.SkillsGroupsService.ViewApprovedSkillGroupItems
         */
        readonly viewApprovedSkillGroupItems: {
            readonly name: "ViewApprovedSkillGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SkillsGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved skill group params for given skill group ID
         *
         * @generated from rpc Scailo.SkillsGroupsService.ViewUnapprovedSkillGroupItems
         */
        readonly viewUnapprovedSkillGroupItems: {
            readonly name: "ViewUnapprovedSkillGroupItems";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof SkillsGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the skill group item
         *
         * @generated from rpc Scailo.SkillsGroupsService.ViewSkillGroupItemHistory
         */
        readonly viewSkillGroupItemHistory: {
            readonly name: "ViewSkillGroupItemHistory";
            readonly I: typeof SkillGroupItemHistoryRequest;
            readonly O: typeof SkillsGroupsItemsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.SkillsGroupsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof SkillGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.SkillsGroupsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof SkillsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.SkillsGroupsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof SkillsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.SkillsGroupsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof SkillsGroupsServicePaginationReq;
            readonly O: typeof SkillsGroupsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the latest skill group for a role (denoted by the given identifier)
         *
         * @generated from rpc Scailo.SkillsGroupsService.ViewForRoleID
         */
        readonly viewForRoleID: {
            readonly name: "ViewForRoleID";
            readonly I: typeof Identifier;
            readonly O: typeof SkillGroup;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.SkillsGroupsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof SkillsGroupsServiceSearchAllReq;
            readonly O: typeof SkillsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.SkillsGroupsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof SkillsGroupsServiceFilterReq;
            readonly O: typeof SkillsGroupsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.SkillsGroupsService.CountInStatus
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
         * @generated from rpc Scailo.SkillsGroupsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof SkillsGroupsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=skills_groups.scailo_connect.d.ts.map