import { User, UsersList, UsersServiceCountReq, UsersServiceCreateRequest, UsersServiceFilterReq, UsersServicePaginationReq, UsersServicePaginationResponse, UsersServiceRegisterMobileDeviceRequest, UsersServiceSearchAllReq, UsersServiceUpdateRequest } from "./users.scailo_pb.js";
import { ActiveStatus, Base64String, CountInSLCStatusRequest, CountResponse, Empty, Identifier, IdentifiersList, IdentifierUUID, IdentifierUUIDsList, IdentifierWithUserComment, IdentifierZeroable, ImageResponse, MonthAndDayFilter, SimpleSearchReq, StandardFile, StringResponse, StringsList, UpdateOwnPasswordReq, UpdatePasswordReq, UploadPictureReq } from "./base.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 *
 * Describes the common methods applicable on each user
 *
 * @generated from service Scailo.UsersService
 */
export declare const UsersService: {
    readonly typeName: "Scailo.UsersService";
    readonly methods: {
        /**
         * Register user's mobile device for push notifications. Returns the ID of the user device record
         *
         * @generated from rpc Scailo.UsersService.RegisterMobileDevice
         */
        readonly registerMobileDevice: {
            readonly name: "RegisterMobileDevice";
            readonly I: typeof UsersServiceRegisterMobileDeviceRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and send for verification
         *
         * @generated from rpc Scailo.UsersService.Create
         */
        readonly create: {
            readonly name: "Create";
            readonly I: typeof UsersServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create and save as draft
         *
         * @generated from rpc Scailo.UsersService.Draft
         */
        readonly draft: {
            readonly name: "Draft";
            readonly I: typeof UsersServiceCreateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update draft
         *
         * @generated from rpc Scailo.UsersService.DraftUpdate
         */
        readonly draftUpdate: {
            readonly name: "DraftUpdate";
            readonly I: typeof UsersServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Send for verification
         *
         * @generated from rpc Scailo.UsersService.SendForVerification
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
         * @generated from rpc Scailo.UsersService.Verify
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
         * @generated from rpc Scailo.UsersService.Approve
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
         * @generated from rpc Scailo.UsersService.SendForRevision
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
         * @generated from rpc Scailo.UsersService.RevisionUpdate
         */
        readonly revisionUpdate: {
            readonly name: "RevisionUpdate";
            readonly I: typeof UsersServiceUpdateRequest;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Halt
         *
         * @generated from rpc Scailo.UsersService.Halt
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
         * @generated from rpc Scailo.UsersService.Discard
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
         * @generated from rpc Scailo.UsersService.Restore
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
         * Send Email
         * rpc SendEmail (Identifier) returns (Identifier);
         *
         * @generated from rpc Scailo.UsersService.CommentAdd
         */
        readonly commentAdd: {
            readonly name: "CommentAdd";
            readonly I: typeof IdentifierWithUserComment;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update user's password by another user (such as an administrator)
         *
         * @generated from rpc Scailo.UsersService.UpdatePassword
         */
        readonly updatePassword: {
            readonly name: "UpdatePassword";
            readonly I: typeof UpdatePasswordReq;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update user's own password
         *
         * @generated from rpc Scailo.UsersService.UpdateOwnPassword
         */
        readonly updateOwnPassword: {
            readonly name: "UpdateOwnPassword";
            readonly I: typeof UpdateOwnPasswordReq;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update the user's profile picture
         *
         * @generated from rpc Scailo.UsersService.UpdateProfilePicture
         */
        readonly updateProfilePicture: {
            readonly name: "UpdateProfilePicture";
            readonly I: typeof UploadPictureReq;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update the user's signature
         *
         * @generated from rpc Scailo.UsersService.UpdateSignature
         */
        readonly updateSignature: {
            readonly name: "UpdateSignature";
            readonly I: typeof UploadPictureReq;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Enable MFA for user
         *
         * @generated from rpc Scailo.UsersService.MFAEnable
         */
        readonly mFAEnable: {
            readonly name: "MFAEnable";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Reset MFA for user
         *
         * @generated from rpc Scailo.UsersService.MFAReset
         */
        readonly mFAReset: {
            readonly name: "MFAReset";
            readonly I: typeof Identifier;
            readonly O: typeof Identifier;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by ID (returns the entire information about the user, including the logs)
         *
         * @generated from rpc Scailo.UsersService.ViewByID
         */
        readonly viewByID: {
            readonly name: "ViewByID";
            readonly I: typeof IdentifierZeroable;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by UUID (logs aren't returned)
         *
         * @generated from rpc Scailo.UsersService.ViewByUUID
         */
        readonly viewByUUID: {
            readonly name: "ViewByUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by username (logs aren't returned)
         *
         * @generated from rpc Scailo.UsersService.ViewByUsername
         */
        readonly viewByUsername: {
            readonly name: "ViewByUsername";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View by user's code (logs aren't returned)
         *
         * @generated from rpc Scailo.UsersService.ViewByCode
         */
        readonly viewByCode: {
            readonly name: "ViewByCode";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all
         *
         * @generated from rpc Scailo.UsersService.ViewAll
         */
        readonly viewAll: {
            readonly name: "ViewAll";
            readonly I: typeof ActiveStatus;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all with the given entity UUID
         *
         * @generated from rpc Scailo.UsersService.ViewAllForEntityUUID
         */
        readonly viewAllForEntityUUID: {
            readonly name: "ViewAllForEntityUUID";
            readonly I: typeof IdentifierUUID;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View with pagination
         *
         * @generated from rpc Scailo.UsersService.ViewWithPagination
         */
        readonly viewWithPagination: {
            readonly name: "ViewWithPagination";
            readonly I: typeof UsersServicePaginationReq;
            readonly O: typeof UsersServicePaginationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all users with the given IDs
         *
         * @generated from rpc Scailo.UsersService.ViewFromIDs
         */
        readonly viewFromIDs: {
            readonly name: "ViewFromIDs";
            readonly I: typeof IdentifiersList;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all users with the given UUIDs
         *
         * @generated from rpc Scailo.UsersService.ViewFromUUIDs
         */
        readonly viewFromUUIDs: {
            readonly name: "ViewFromUUIDs";
            readonly I: typeof IdentifierUUIDsList;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all users with the given usernames
         *
         * @generated from rpc Scailo.UsersService.ViewFromUsernames
         */
        readonly viewFromUsernames: {
            readonly name: "ViewFromUsernames";
            readonly I: typeof StringsList;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View self user (the profile of the logged in user)
         *
         * @generated from rpc Scailo.UsersService.ViewSelf
         */
        readonly viewSelf: {
            readonly name: "ViewSelf";
            readonly I: typeof Empty;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all users with birthdays on the given date
         *
         * @generated from rpc Scailo.UsersService.ViewBirthdaysOn
         */
        readonly viewBirthdaysOn: {
            readonly name: "ViewBirthdaysOn";
            readonly I: typeof MonthAndDayFilter;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View user's signature
         *
         * @generated from rpc Scailo.UsersService.ViewSignature
         */
        readonly viewSignature: {
            readonly name: "ViewSignature";
            readonly I: typeof Identifier;
            readonly O: typeof Base64String;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View user's profile picture
         *
         * @generated from rpc Scailo.UsersService.ViewProfilePicture
         */
        readonly viewProfilePicture: {
            readonly name: "ViewProfilePicture";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View user's VCard
         *
         * @generated from rpc Scailo.UsersService.ViewVCard
         */
        readonly viewVCard: {
            readonly name: "ViewVCard";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View user's QR Code as image
         *
         * @generated from rpc Scailo.UsersService.ViewQRImage
         */
        readonly viewQRImage: {
            readonly name: "ViewQRImage";
            readonly I: typeof Identifier;
            readonly O: typeof ImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View user's QR Code as string
         *
         * @generated from rpc Scailo.UsersService.ViewQRString
         */
        readonly viewQRString: {
            readonly name: "ViewQRString";
            readonly I: typeof Identifier;
            readonly O: typeof StringResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View user info on the basis of the provided image. The image should consist of only the user's face. Will return an error if the image has not been recognized.
         *
         * @generated from rpc Scailo.UsersService.IdentifyCroppedFace
         */
        readonly identifyCroppedFace: {
            readonly name: "IdentifyCroppedFace";
            readonly I: typeof StandardFile;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View user info on the basis of the provided image. The image should consist of just the user (might be a full sized photo). The face will be cropped. Will return an error if the image has not been recognized.
         *
         * @generated from rpc Scailo.UsersService.IdentifyFullFace
         */
        readonly identifyFullFace: {
            readonly name: "IdentifyFullFace";
            readonly I: typeof StandardFile;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given search key
         *
         * @generated from rpc Scailo.UsersService.SearchAll
         */
        readonly searchAll: {
            readonly name: "SearchAll";
            readonly I: typeof UsersServiceSearchAllReq;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View all that match the given filter criteria
         *
         * @generated from rpc Scailo.UsersService.Filter
         */
        readonly filter: {
            readonly name: "Filter";
            readonly I: typeof UsersServiceFilterReq;
            readonly O: typeof UsersList;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Count in status
         *
         * @generated from rpc Scailo.UsersService.CountInStatus
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
         * @generated from rpc Scailo.UsersService.Count
         */
        readonly count: {
            readonly name: "Count";
            readonly I: typeof UsersServiceCountReq;
            readonly O: typeof CountResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=users.scailo_connect.d.ts.map