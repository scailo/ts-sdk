import { Team, TeamMember, TeamMemberHistoryRequest, TeamMembersSearchRequest, TeamsList, TeamsMembersList, TeamsServiceCountReq, TeamsServiceCreateRequest, TeamsServiceFilterReq, TeamsServiceMemberCreateRequest, TeamsServiceMemberUpdateRequest, TeamsServicePaginatedMembersResponse, TeamsServicePaginationReq, TeamsServicePaginationResponse, TeamsServiceSearchAllReq, TeamsServiceUpdateRequest } from "./teams.scailo_pb.js";
import { ActiveStatus, CloneRequest, CountInSLCStatusRequest, CountResponse, Identifier, IdentifierResponse, IdentifierUUID, IdentifierUUIDsList, IdentifierUUIDWithUserComment, IdentifierWithSearchKey, IdentifierWithUserComment, ReorderItemsRequest, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each team
 *
 * @generated from service Scailo.TeamsService
 */
export declare const TeamsService: {
    readonly typeName: "Scailo.TeamsService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.TeamsService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof TeamsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.TeamsService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof TeamsServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.TeamsService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof TeamsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.TeamsService.SendForVerification
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
         * @generated from rpc Scailo.TeamsService.Verify
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
         * @generated from rpc Scailo.TeamsService.Approve
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
         * @generated from rpc Scailo.TeamsService.SendForRevision
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
         * @generated from rpc Scailo.TeamsService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof TeamsServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.TeamsService.Halt
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
         * @generated from rpc Scailo.TeamsService.Discard
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
         * @generated from rpc Scailo.TeamsService.Restore
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
         * @generated from rpc Scailo.TeamsService.Complete
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
         * @generated from rpc Scailo.TeamsService.Repeat
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
         * @generated from rpc Scailo.TeamsService.Reopen
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
         * Send Email
         * rpc SendEmail (IdentifierWithEmailAttributes) returns (IdentifierResponse);
         *
         * @generated from rpc Scailo.TeamsService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Clone team from an existing team (denoted by the identifier)
         *
         * @generated from rpc Scailo.TeamsService.Clone
         */
        readonly clone: {
            readonly name: "Clone";
            readonly I: typeof CloneRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add a member to a team
         *
         * @generated from rpc Scailo.TeamsService.AddTeamMember
         */
        readonly addTeamMember: {
            readonly name: "AddTeamMember";
            readonly I: typeof TeamsServiceMemberCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Modify a member in a team
         *
         * @generated from rpc Scailo.TeamsService.ModifyTeamMember
         */
        readonly modifyTeamMember: {
            readonly name: "ModifyTeamMember";
            readonly I: typeof TeamsServiceMemberUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Approve a member in a team
         *
         * @generated from rpc Scailo.TeamsService.ApproveTeamMember
         */
        readonly approveTeamMember: {
            readonly name: "ApproveTeamMember";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete a member in a team
         *
         * @generated from rpc Scailo.TeamsService.DeleteTeamMember
         */
        readonly deleteTeamMember: {
            readonly name: "DeleteTeamMember";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reorder members in a team
         *
         * @generated from rpc Scailo.TeamsService.ReorderTeamMembers
         */
        readonly reorderTeamMembers: {
            readonly name: "ReorderTeamMembers";
            readonly I: typeof ReorderItemsRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View Team Member by ID
         *
         * @generated from rpc Scailo.TeamsService.ViewTeamMemberByID
         */
        readonly viewTeamMemberByID: {
            readonly name: "ViewTeamMemberByID";
            readonly I: typeof Identifier;
            readonly O: typeof TeamMember;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved team members for given team ID
         *
         * @generated from rpc Scailo.TeamsService.ViewApprovedTeamMembers
         */
        readonly viewApprovedTeamMembers: {
            readonly name: "ViewApprovedTeamMembers";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof TeamsMembersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved team members for given team ID
         *
         * @generated from rpc Scailo.TeamsService.ViewUnapprovedTeamMembers
         */
        readonly viewUnapprovedTeamMembers: {
            readonly name: "ViewUnapprovedTeamMembers";
            readonly I: typeof IdentifierWithSearchKey;
            readonly O: typeof TeamsMembersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the history of the team member
         *
         * @generated from rpc Scailo.TeamsService.ViewTeamMemberHistory
         */
        readonly viewTeamMemberHistory: {
            readonly name: "ViewTeamMemberHistory";
            readonly I: typeof TeamMemberHistoryRequest;
            readonly O: typeof TeamsMembersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View approved team members for given team ID with pagination
         *
         * @generated from rpc Scailo.TeamsService.ViewPaginatedApprovedTeamMembers
         */
        readonly viewPaginatedApprovedTeamMembers: {
            readonly name: "ViewPaginatedApprovedTeamMembers";
            readonly I: typeof TeamMembersSearchRequest;
            readonly O: typeof TeamsServicePaginatedMembersResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View unapproved team members for given team ID with pagination
         *
         * @generated from rpc Scailo.TeamsService.ViewPaginatedUnapprovedTeamMembers
         */
        readonly viewPaginatedUnapprovedTeamMembers: {
            readonly name: "ViewPaginatedUnapprovedTeamMembers";
            readonly I: typeof TeamMembersSearchRequest;
            readonly O: typeof TeamsServicePaginatedMembersResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search through team members with pagination
         *
         * @generated from rpc Scailo.TeamsService.SearchMembersWithPagination
         */
        readonly searchMembersWithPagination: {
            readonly name: "SearchMembersWithPagination";
            readonly I: typeof TeamMembersSearchRequest;
            readonly O: typeof TeamsServicePaginatedMembersResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all the teams that the member is part of (and not the team lead)
         *
         * @generated from rpc Scailo.TeamsService.ViewTeamsForMember
         */
        readonly viewTeamsForMember: {
            readonly name: "ViewTeamsForMember";
            readonly I: typeof Identifier;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.TeamsService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Team;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.TeamsService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Team;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.TeamsService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.TeamsService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.TeamsService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof TeamsServicePaginationReq;
            readonly O: typeof TeamsServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.TeamsService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof TeamsServiceSearchAllReq;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.TeamsService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof TeamsServiceFilterReq;
            readonly O: typeof TeamsList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.TeamsService.CountInStatus
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
         * @generated from rpc Scailo.TeamsService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof TeamsServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.TeamsService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof TeamsServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Import records using a CSV file (duplicate codes will be skipped)
         *
         * @generated from rpc Scailo.TeamsService.Import
         */
        readonly import: {
            readonly name: "Import";
            readonly I: typeof StandardFile;
            readonly O: typeof IdentifierUUIDsList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=teams.scailo_connect.d.ts.map