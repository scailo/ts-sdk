import { Attendance, AttendancesList, AttendancesServiceCountReq, AttendancesServiceCreateRequest, AttendancesServiceFilterReq, AttendancesServiceImageEntryRequest, AttendancesServiceImageExitRequest, AttendancesServicePaginationReq, AttendancesServicePaginationResponse, AttendancesServiceSearchAllReq, AttendancesServiceUpdateRequest } from "./attendances.scailo_pb.js";
import { ActiveStatus, BooleanResponse, CountInSLCStatusRequest, CountResponse, GPSCoordinatesResponse, Identifier, IdentifierResponse, IdentifiersList, IdentifierUUID, IdentifierUUIDWithUserComment, ImageResponse, StandardFile } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { MagicLink, MagicLinksServiceCreateRequestForSpecificResource } from "./magic_links.scailo_pb.js";
/**
 *
 * Describes the common methods applicable on each attendance
 *
 * @generated from service Scailo.AttendancesService
 */
export declare const AttendancesService: {
    readonly typeName: "Scailo.AttendancesService";
    readonly methods: {
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.AttendancesService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof AttendancesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.AttendancesService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof AttendancesServiceCreateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.AttendancesService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof AttendancesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.AttendancesService.SendForVerification
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
         * @generated from rpc Scailo.AttendancesService.Verify
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
         * @generated from rpc Scailo.AttendancesService.Approve
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
         * @generated from rpc Scailo.AttendancesService.SendForRevision
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
         * @generated from rpc Scailo.AttendancesService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof AttendancesServiceUpdateRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.AttendancesService.Halt
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
         * @generated from rpc Scailo.AttendancesService.Discard
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
         * @generated from rpc Scailo.AttendancesService.Restore
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
         * @generated from rpc Scailo.AttendancesService.Complete
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
         * @generated from rpc Scailo.AttendancesService.Repeat
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
         * @generated from rpc Scailo.AttendancesService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierUUIDWithUserComment;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send Email
         * rpc SendEmail (Identifier) returns (IdentifierResponse);
         * Create a magic link
         *
         * @generated from rpc Scailo.AttendancesService.CreateMagicLink
         */
        readonly createMagicLink: {
            readonly name: "CreateMagicLink";
            readonly I: typeof MagicLinksServiceCreateRequestForSpecificResource;
            readonly O: typeof MagicLink;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Store entry time
         *
         * @generated from rpc Scailo.AttendancesService.RecordImageEntry
         */
        readonly recordImageEntry: {
            readonly name: "RecordImageEntry";
            readonly I: typeof AttendancesServiceImageEntryRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Store exit time
         *
         * @generated from rpc Scailo.AttendancesService.RecordImageExit
         */
        readonly recordImageExit: {
            readonly name: "RecordImageExit";
            readonly I: typeof AttendancesServiceImageExitRequest;
            readonly O: typeof IdentifierResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID
         *
         * @generated from rpc Scailo.AttendancesService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof Identifier;
            readonly O: typeof Attendance;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID
         *
         * @generated from rpc Scailo.AttendancesService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Attendance;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components by ID (without logs)
         *
         * @generated from rpc Scailo.AttendancesService.ViewEssentialByID
         */
        readonly viewEssentialByID: {
            readonly name: "ViewEssentialByID";
            readonly I: typeof Identifier;
            readonly O: typeof Attendance;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View only essential components (without logs) that matches the given UUID
         *
         * @generated from rpc Scailo.AttendancesService.ViewEssentialByUUID
         */
        readonly viewEssentialByUUID: {
            readonly name: "ViewEssentialByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof Attendance;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all records with the given IDs
         *
         * @generated from rpc Scailo.AttendancesService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof AttendancesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.AttendancesService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof AttendancesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.AttendancesService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof AttendancesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.AttendancesService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof AttendancesServicePaginationReq;
            readonly O: typeof AttendancesServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View entry image for attendance UUID
         *
         * @generated from rpc Scailo.AttendancesService.ViewEntryImage
         */
        readonly viewEntryImage: {
            readonly name: "ViewEntryImage";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Confirm that the entry image of the given attendance UUID belongs to the user
         *
         * @generated from rpc Scailo.AttendancesService.ConfirmEntryImage
         */
        readonly confirmEntryImage: {
            readonly name: "ConfirmEntryImage";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View exit image for attendance UUID
         *
         * @generated from rpc Scailo.AttendancesService.ViewExitImage
         */
        readonly viewExitImage: {
            readonly name: "ViewExitImage";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Confirm that the exit image of the given attendance UUID belongs to the user
         *
         * @generated from rpc Scailo.AttendancesService.ConfirmExitImage
         */
        readonly confirmExitImage: {
            readonly name: "ConfirmExitImage";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View entry GPS coordinates for attendance UUID
         *
         * @generated from rpc Scailo.AttendancesService.ViewEntryGPSCoordinates
         */
        readonly viewEntryGPSCoordinates: {
            readonly name: "ViewEntryGPSCoordinates";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GPSCoordinatesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View exit GPS coordinates for attendance UUID
         *
         * @generated from rpc Scailo.AttendancesService.ViewExitGPSCoordinates
         */
        readonly viewExitGPSCoordinates: {
            readonly name: "ViewExitGPSCoordinates";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof GPSCoordinatesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View entry GPS static image from Google Maps
         *
         * @generated from rpc Scailo.AttendancesService.ViewEntryGPSStaticImage
         */
        readonly viewEntryGPSStaticImage: {
            readonly name: "ViewEntryGPSStaticImage";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View exit GPS static image from Google Maps
         *
         * @generated from rpc Scailo.AttendancesService.ViewExitGPSStaticImage
         */
        readonly viewExitGPSStaticImage: {
            readonly name: "ViewExitGPSStaticImage";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View the open attendance for a user (with the given identifier), if available. Returns an empty instance if no attendance is available
         *
         * @generated from rpc Scailo.AttendancesService.ViewOpenAttendanceForUser
         */
        readonly viewOpenAttendanceForUser: {
            readonly name: "ViewOpenAttendanceForUser";
            readonly I: typeof Identifier;
            readonly O: typeof Attendance;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.AttendancesService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof AttendancesServiceSearchAllReq;
            readonly O: typeof AttendancesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.AttendancesService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof AttendancesServiceFilterReq;
            readonly O: typeof AttendancesList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Checks if a user (with the given identifier) has an open attendance (attendance with only entry and no exit)
         *
         * @generated from rpc Scailo.AttendancesService.EmployeeHasOpenAttendance
         */
        readonly employeeHasOpenAttendance: {
            readonly name: "EmployeeHasOpenAttendance";
            readonly I: typeof Identifier;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.AttendancesService.CountInStatus
         */
        readonly countInStatus: {
            readonly name: "CountInStatus";
            readonly I: typeof CountInSLCStatusRequest;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given count criteria
         *
         * @generated from rpc Scailo.AttendancesService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof AttendancesServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * CSV operations
         * Download the CSV file that consists of the list of records according to the given filter request. The same file could also be used as a template for uploading records
         *
         * @generated from rpc Scailo.AttendancesService.DownloadAsCSV
         */
        readonly downloadAsCSV: {
            readonly name: "DownloadAsCSV";
            readonly I: typeof AttendancesServiceFilterReq;
            readonly O: typeof StandardFile;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=attendances.scailo_connect.d.ts.map