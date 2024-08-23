import { AuthTokenValidityRequest, ClientUserLoginResponse, LogoutRequest, LogoutResponse, UserLoginHistoryList, UserLoginRequest, UserLoginResponse, VendorUserLoginResponse } from "./logins.scailo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { BooleanResponse, SimpleSearchReq } from "./base.scailo_pb.js";
/**
 *
 * Describes the methods applicable on the login service
 *
 * @generated from service Scailo.LoginService
 */
export declare const LoginService: {
    readonly typeName: "Scailo.LoginService";
    readonly methods: {
        /**
         * Login using credentials belonging to a user and evaluate using user's primary role (this has been deprecated. Use LoginAsEmployeePrimary instead)
         *
         * @generated from rpc Scailo.LoginService.UserLoginPrimary
         * @deprecated
         */
        readonly userLoginPrimary: {
            readonly name: "UserLoginPrimary";
            readonly I: typeof UserLoginRequest;
            readonly O: typeof UserLoginResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Login as employee using primary role
         *
         * @generated from rpc Scailo.LoginService.LoginAsEmployeePrimary
         */
        readonly loginAsEmployeePrimary: {
            readonly name: "LoginAsEmployeePrimary";
            readonly I: typeof UserLoginRequest;
            readonly O: typeof UserLoginResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Login as employee using mobile role
         *
         * @generated from rpc Scailo.LoginService.LoginAsEmployeeSecondary
         */
        readonly loginAsEmployeeSecondary: {
            readonly name: "LoginAsEmployeeSecondary";
            readonly I: typeof UserLoginRequest;
            readonly O: typeof UserLoginResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Login using credentials belonging to a vendor user
         *
         * @generated from rpc Scailo.LoginService.LoginAsVendorUser
         */
        readonly loginAsVendorUser: {
            readonly name: "LoginAsVendorUser";
            readonly I: typeof UserLoginRequest;
            readonly O: typeof VendorUserLoginResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Login using credentials belonging to a client user
         *
         * @generated from rpc Scailo.LoginService.LoginAsClientUser
         */
        readonly loginAsClientUser: {
            readonly name: "LoginAsClientUser";
            readonly I: typeof UserLoginRequest;
            readonly O: typeof ClientUserLoginResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Check if the auth token is still valid
         *
         * @generated from rpc Scailo.LoginService.IsAuthTokenValid
         */
        readonly isAuthTokenValid: {
            readonly name: "IsAuthTokenValid";
            readonly I: typeof AuthTokenValidityRequest;
            readonly O: typeof BooleanResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Logout
         *
         * @generated from rpc Scailo.LoginService.Logout
         */
        readonly logout: {
            readonly name: "Logout";
            readonly I: typeof LogoutRequest;
            readonly O: typeof LogoutResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * View login history for the given username
         *
         * @generated from rpc Scailo.LoginService.ViewHistory
         */
        readonly viewHistory: {
            readonly name: "ViewHistory";
            readonly I: typeof SimpleSearchReq;
            readonly O: typeof UserLoginHistoryList;
            readonly kind: MethodKind.Unary;
        };
    };
};
//# sourceMappingURL=logins.scailo_connect.d.ts.map