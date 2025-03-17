import { OnDutiesList, OnDutiesServiceCountReq, OnDutiesServiceCreateRequest, OnDutiesServiceFilterReq, OnDutiesServiceImageEntryRequest, OnDutiesServiceImageExitRequest, OnDutiesServicePaginationReq, OnDutiesServicePaginationResponse, OnDutiesServiceSearchAllReq, OnDutiesServiceUpdateRequest, OnDuty } from "./on_duties.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, GPSCoordinatesResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, ImageResponse } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each onduty
 *
 * @generated from service Scailo.OnDutiesService
 */
export declare const OnDutiesService: {
    readonly typeName: "Scailo.OnDutiesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.OnDutiesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof OnDutiesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.OnDutiesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof OnDutiesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.OnDutiesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof OnDutiesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.OnDutiesService.SendForVerification
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
         * @generated from rpc Scailo.OnDutiesService.Verify
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
         * @generated from rpc Scailo.OnDutiesService.Approve
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
         * @generated from rpc Scailo.OnDutiesService.SendForRevision
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
         * @generated from rpc Scailo.OnDutiesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof OnDutiesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.OnDutiesService.Halt
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
         * @generated from rpc Scailo.OnDutiesService.Discard
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
         * @generated from rpc Scailo.OnDutiesService.Restore
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
         * @generated from rpc Scailo.OnDutiesService.Complete
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
         * @generated from rpc Scailo.OnDutiesService.Repeat
         */
        readonly repeat: {
            readonly name: "Repeat";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add comment
         *
         * Send Email
         * rpc SendEmail (Identifier) returns (IdentifierResponse);
         *
         * @generated from rpc Scailo.OnDutiesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Store entry time
         *
         * @generated from rpc Scailo.OnDutiesService.RecordImageEntry
         */
        readonly recordImageEntry: {
            readonly name: "RecordImageEntry";
            readonly I: typeof OnDutiesServiceImageEntryRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Store exit time
         *
         * @generated from rpc Scailo.OnDutiesService.RecordImageExit
         */
        readonly recordImageExit: {
            readonly name: "RecordImageExit";
            readonly I: typeof OnDutiesServiceImageExitRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.OnDutiesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof OnDuty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.OnDutiesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OnDuty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.OnDutiesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof OnDuty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.OnDutiesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OnDuty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.OnDutiesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof OnDutiesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.OnDutiesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof OnDutiesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.OnDutiesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof OnDutiesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.OnDutiesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof OnDutiesServicePaginationReq;
            readonly O: typeof OnDutiesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View entry image for onduty ID
         *
         * @generated from rpc Scailo.OnDutiesService.ViewEntryImage
         */
        readonly viewEntryImage: {
            readonly name: "ViewEntryImage";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Confirm that the entry image of the given onduty ID belongs to the user
         *
         * @generated from rpc Scailo.OnDutiesService.ConfirmEntryImage
         */
        readonly confirmEntryImage: {
            readonly name: "ConfirmEntryImage";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View exit image for onduty ID
         *
         * @generated from rpc Scailo.OnDutiesService.ViewExitImage
         */
        readonly viewExitImage: {
            readonly name: "ViewExitImage";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Confirm that the exit image of the given onduty ID belongs to the user
         *
         * @generated from rpc Scailo.OnDutiesService.ConfirmExitImage
         */
        readonly confirmExitImage: {
            readonly name: "ConfirmExitImage";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View entry GPS coordinates for onduty ID
         *
         * @generated from rpc Scailo.OnDutiesService.ViewEntryGPSCoordinates
         */
        readonly viewEntryGPSCoordinates: {
            readonly name: "ViewEntryGPSCoordinates";
            readonly I: typeof Identifier;
            readonly O: typeof GPSCoordinatesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View exit GPS coordinates for onduty ID
         *
         * @generated from rpc Scailo.OnDutiesService.ViewExitGPSCoordinates
         */
        readonly viewExitGPSCoordinates: {
            readonly name: "ViewExitGPSCoordinates";
            readonly I: typeof Identifier;
            readonly O: typeof GPSCoordinatesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.OnDutiesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof OnDutiesServiceSearchAllReq;
            readonly O: typeof OnDutiesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.OnDutiesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof OnDutiesServiceFilterReq;
            readonly O: typeof OnDutiesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.OnDutiesService.CountInStatus
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
         * @generated from rpc Scailo.OnDutiesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof OnDutiesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=on_duties.scailo_connect.d.ts.map