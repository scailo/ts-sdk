"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientForAbsencesService = getClientForAbsencesService;
exports.getClientForActionsCodesService = getClientForActionsCodesService;
exports.getClientForActivitiesService = getClientForActivitiesService;
exports.getClientForActivitiesGroupsService = getClientForActivitiesGroupsService;
exports.getClientForActivitiesStatusesService = getClientForActivitiesStatusesService;
exports.getClientForActivitiesTagsService = getClientForActivitiesTagsService;
exports.getClientForAnnouncementsService = getClientForAnnouncementsService;
exports.getClientForAssetIndentsService = getClientForAssetIndentsService;
exports.getClientForAssociatesService = getClientForAssociatesService;
exports.getClientForAttendancesService = getClientForAttendancesService;
exports.getClientForAttendancesAmendmentsService = getClientForAttendancesAmendmentsService;
exports.getClientForBankAccountsService = getClientForBankAccountsService;
exports.getClientForClientStreamsService = getClientForClientStreamsService;
exports.getClientForClientsService = getClientForClientsService;
exports.getClientForComponentsService = getClientForComponentsService;
exports.getClientForCreditNotesService = getClientForCreditNotesService;
exports.getClientForCurrenciesService = getClientForCurrenciesService;
exports.getClientForDebitNotesService = getClientForDebitNotesService;
exports.getClientForDepartmentsService = getClientForDepartmentsService;
exports.getClientForEquationsFamiliesService = getClientForEquationsFamiliesService;
exports.getClientForEquationsReplaceablesService = getClientForEquationsReplaceablesService;
exports.getClientForEquationsSalesBundlesService = getClientForEquationsSalesBundlesService;
exports.getClientForEquationsWorkOrdersService = getClientForEquationsWorkOrdersService;
exports.getClientForEquipmentsService = getClientForEquipmentsService;
exports.getClientForExpensesService = getClientForExpensesService;
exports.getClientForFamiliesService = getClientForFamiliesService;
exports.getClientForFeedstocksService = getClientForFeedstocksService;
exports.getClientForFormsFieldsService = getClientForFormsFieldsService;
exports.getClientForFormsFieldsDataService = getClientForFormsFieldsDataService;
exports.getClientForFormsSectionsService = getClientForFormsSectionsService;
exports.getClientForGeneralSettingsService = getClientForGeneralSettingsService;
exports.getClientForGeneralStreamsService = getClientForGeneralStreamsService;
exports.getClientForGoalsService = getClientForGoalsService;
exports.getClientForGoodsDispatchesService = getClientForGoodsDispatchesService;
exports.getClientForGoodsReceiptsService = getClientForGoodsReceiptsService;
exports.getClientForHolidaysService = getClientForHolidaysService;
exports.getClientForInfrastructuresService = getClientForInfrastructuresService;
exports.getClientForInventoryService = getClientForInventoryService;
exports.getClientForInwardJobsService = getClientForInwardJobsService;
exports.getClientForInwardJobsFreeIssueMaterialsService = getClientForInwardJobsFreeIssueMaterialsService;
exports.getClientForInwardJobsFreeIssueMaterialsReturnsService = getClientForInwardJobsFreeIssueMaterialsReturnsService;
exports.getClientForLabelsService = getClientForLabelsService;
exports.getClientForLeavesAdjustmentsService = getClientForLeavesAdjustmentsService;
exports.getClientForLeavesLogsService = getClientForLeavesLogsService;
exports.getClientForLeavesRequestsService = getClientForLeavesRequestsService;
exports.getClientForLeavesTypesService = getClientForLeavesTypesService;
exports.getClientForLedgersService = getClientForLedgersService;
exports.getClientForLocationsService = getClientForLocationsService;
exports.getClientForLoginService = getClientForLoginService;
exports.getClientForMeetingsService = getClientForMeetingsService;
exports.getClientForMerchandisesService = getClientForMerchandisesService;
exports.getClientForNotesService = getClientForNotesService;
exports.getClientForOnDutiesService = getClientForOnDutiesService;
exports.getClientForOutwardJobsService = getClientForOutwardJobsService;
exports.getClientForOutwardJobsFreeIssueMaterialsService = getClientForOutwardJobsFreeIssueMaterialsService;
exports.getClientForOutwardJobsFreeIssueMaterialsReturnsService = getClientForOutwardJobsFreeIssueMaterialsReturnsService;
exports.getClientForOvertimesService = getClientForOvertimesService;
exports.getClientForPayrollGroupsService = getClientForPayrollGroupsService;
exports.getClientForPayrollParamsService = getClientForPayrollParamsService;
exports.getClientForProductionIndentsService = getClientForProductionIndentsService;
exports.getClientForProductionPlansService = getClientForProductionPlansService;
exports.getClientForProductsService = getClientForProductsService;
exports.getClientForProformaInvoicesService = getClientForProformaInvoicesService;
exports.getClientForProjectsService = getClientForProjectsService;
exports.getClientForPurchasesEnquiriesService = getClientForPurchasesEnquiriesService;
exports.getClientForPurchasesIndentsService = getClientForPurchasesIndentsService;
exports.getClientForPurchasesOrdersService = getClientForPurchasesOrdersService;
exports.getClientForPurchasesPaymentsService = getClientForPurchasesPaymentsService;
exports.getClientForPurchasesReturnsService = getClientForPurchasesReturnsService;
exports.getClientForQCGroupsService = getClientForQCGroupsService;
exports.getClientForQCHubsService = getClientForQCHubsService;
exports.getClientForQCParamsService = getClientForQCParamsService;
exports.getClientForQCSamplesService = getClientForQCSamplesService;
exports.getClientForQuotationsRequestsService = getClientForQuotationsRequestsService;
exports.getClientForQuotationsResponsesService = getClientForQuotationsResponsesService;
exports.getClientForReplaceableIndentsService = getClientForReplaceableIndentsService;
exports.getClientForRolesService = getClientForRolesService;
exports.getClientForSalariesService = getClientForSalariesService;
exports.getClientForSalesEnquiriesService = getClientForSalesEnquiriesService;
exports.getClientForSalesInvoicesService = getClientForSalesInvoicesService;
exports.getClientForSalesOrdersService = getClientForSalesOrdersService;
exports.getClientForSalesQuotationsService = getClientForSalesQuotationsService;
exports.getClientForSalesReceiptsService = getClientForSalesReceiptsService;
exports.getClientForSalesReturnsService = getClientForSalesReturnsService;
exports.getClientForShiftsService = getClientForShiftsService;
exports.getClientForShiftsGroupsService = getClientForShiftsGroupsService;
exports.getClientForSkillsGroupsService = getClientForSkillsGroupsService;
exports.getClientForSkillsParamsService = getClientForSkillsParamsService;
exports.getClientForStockAuditsService = getClientForStockAuditsService;
exports.getClientForStockIssuancesService = getClientForStockIssuancesService;
exports.getClientForStockReturnsService = getClientForStockReturnsService;
exports.getClientForStoragesService = getClientForStoragesService;
exports.getClientForStoresService = getClientForStoresService;
exports.getClientForSupplyOffersService = getClientForSupplyOffersService;
exports.getClientForTaxGroupsService = getClientForTaxGroupsService;
exports.getClientForTaxParamsService = getClientForTaxParamsService;
exports.getClientForTeamsService = getClientForTeamsService;
exports.getClientForUnitsOfMaterialsService = getClientForUnitsOfMaterialsService;
exports.getClientForUsersService = getClientForUsersService;
exports.getClientForVaultService = getClientForVaultService;
exports.getClientForVendorInvoicesService = getClientForVendorInvoicesService;
exports.getClientForVendorStreamsService = getClientForVendorStreamsService;
exports.getClientForVendorsService = getClientForVendorsService;
exports.getClientForVisitationsService = getClientForVisitationsService;
exports.getClientForWorkOrdersService = getClientForWorkOrdersService;
exports.getClientForWorkflowsRulesService = getClientForWorkflowsRulesService;
__exportStar(require("./permissions"), exports);
__exportStar(require("./src/absences.scailo_connect"), exports);
__exportStar(require("./src/absences.scailo_pb"), exports);
__exportStar(require("./src/actions_codes.scailo_connect"), exports);
__exportStar(require("./src/actions_codes.scailo_pb"), exports);
__exportStar(require("./src/activities.scailo_connect"), exports);
__exportStar(require("./src/activities.scailo_pb"), exports);
__exportStar(require("./src/activities_groups.scailo_connect"), exports);
__exportStar(require("./src/activities_groups.scailo_pb"), exports);
__exportStar(require("./src/activities_statuses.scailo_connect"), exports);
__exportStar(require("./src/activities_statuses.scailo_pb"), exports);
__exportStar(require("./src/activities_tags.scailo_connect"), exports);
__exportStar(require("./src/activities_tags.scailo_pb"), exports);
__exportStar(require("./src/announcements.scailo_connect"), exports);
__exportStar(require("./src/announcements.scailo_pb"), exports);
__exportStar(require("./src/asset_indents.scailo_connect"), exports);
__exportStar(require("./src/asset_indents.scailo_pb"), exports);
__exportStar(require("./src/associates.scailo_connect"), exports);
__exportStar(require("./src/associates.scailo_pb"), exports);
__exportStar(require("./src/attendances.scailo_connect"), exports);
__exportStar(require("./src/attendances.scailo_pb"), exports);
__exportStar(require("./src/attendances_amendments.scailo_connect"), exports);
__exportStar(require("./src/attendances_amendments.scailo_pb"), exports);
__exportStar(require("./src/bank_accounts.scailo_connect"), exports);
__exportStar(require("./src/bank_accounts.scailo_pb"), exports);
__exportStar(require("./src/base.scailo_pb"), exports);
__exportStar(require("./src/client_streams.scailo_connect"), exports);
__exportStar(require("./src/client_streams.scailo_pb"), exports);
__exportStar(require("./src/clients.scailo_connect"), exports);
__exportStar(require("./src/clients.scailo_pb"), exports);
__exportStar(require("./src/components.scailo_connect"), exports);
__exportStar(require("./src/components.scailo_pb"), exports);
__exportStar(require("./src/credit_notes.scailo_connect"), exports);
__exportStar(require("./src/credit_notes.scailo_pb"), exports);
__exportStar(require("./src/currencies.scailo_connect"), exports);
__exportStar(require("./src/currencies.scailo_pb"), exports);
__exportStar(require("./src/debit_notes.scailo_connect"), exports);
__exportStar(require("./src/debit_notes.scailo_pb"), exports);
__exportStar(require("./src/departments.scailo_connect"), exports);
__exportStar(require("./src/departments.scailo_pb"), exports);
__exportStar(require("./src/equations_families.scailo_connect"), exports);
__exportStar(require("./src/equations_families.scailo_pb"), exports);
__exportStar(require("./src/equations_replaceables.scailo_connect"), exports);
__exportStar(require("./src/equations_replaceables.scailo_pb"), exports);
__exportStar(require("./src/equations_sales_bundles.scailo_connect"), exports);
__exportStar(require("./src/equations_sales_bundles.scailo_pb"), exports);
__exportStar(require("./src/equations_work_orders.scailo_connect"), exports);
__exportStar(require("./src/equations_work_orders.scailo_pb"), exports);
__exportStar(require("./src/equipments.scailo_connect"), exports);
__exportStar(require("./src/equipments.scailo_pb"), exports);
__exportStar(require("./src/expenses.scailo_connect"), exports);
__exportStar(require("./src/expenses.scailo_pb"), exports);
__exportStar(require("./src/families.scailo_connect"), exports);
__exportStar(require("./src/families.scailo_pb"), exports);
__exportStar(require("./src/feedstocks.scailo_connect"), exports);
__exportStar(require("./src/feedstocks.scailo_pb"), exports);
__exportStar(require("./src/forms_fields.scailo_connect"), exports);
__exportStar(require("./src/forms_fields.scailo_pb"), exports);
__exportStar(require("./src/forms_fields_data.scailo_connect"), exports);
__exportStar(require("./src/forms_fields_data.scailo_pb"), exports);
__exportStar(require("./src/forms_sections.scailo_connect"), exports);
__exportStar(require("./src/forms_sections.scailo_pb"), exports);
__exportStar(require("./src/general_settings.scailo_connect"), exports);
__exportStar(require("./src/general_settings.scailo_pb"), exports);
__exportStar(require("./src/general_streams.scailo_connect"), exports);
__exportStar(require("./src/general_streams.scailo_pb"), exports);
__exportStar(require("./src/genesis.validate.scailo_pb"), exports);
__exportStar(require("./src/goals.scailo_connect"), exports);
__exportStar(require("./src/goals.scailo_pb"), exports);
__exportStar(require("./src/goods_dispatches.scailo_connect"), exports);
__exportStar(require("./src/goods_dispatches.scailo_pb"), exports);
__exportStar(require("./src/goods_receipts.scailo_connect"), exports);
__exportStar(require("./src/goods_receipts.scailo_pb"), exports);
__exportStar(require("./src/holidays.scailo_connect"), exports);
__exportStar(require("./src/holidays.scailo_pb"), exports);
__exportStar(require("./src/infrastructures.scailo_connect"), exports);
__exportStar(require("./src/infrastructures.scailo_pb"), exports);
__exportStar(require("./src/inventory.scailo_connect"), exports);
__exportStar(require("./src/inventory.scailo_pb"), exports);
__exportStar(require("./src/inward_jobs.scailo_connect"), exports);
__exportStar(require("./src/inward_jobs.scailo_pb"), exports);
__exportStar(require("./src/inward_jobs_free_issue_materials.scailo_connect"), exports);
__exportStar(require("./src/inward_jobs_free_issue_materials.scailo_pb"), exports);
__exportStar(require("./src/inward_jobs_free_issue_materials_returns.scailo_connect"), exports);
__exportStar(require("./src/inward_jobs_free_issue_materials_returns.scailo_pb"), exports);
__exportStar(require("./src/labels.scailo_connect"), exports);
__exportStar(require("./src/labels.scailo_pb"), exports);
__exportStar(require("./src/leaves_adjustments.scailo_connect"), exports);
__exportStar(require("./src/leaves_adjustments.scailo_pb"), exports);
__exportStar(require("./src/leaves_logs.scailo_connect"), exports);
__exportStar(require("./src/leaves_logs.scailo_pb"), exports);
__exportStar(require("./src/leaves_requests.scailo_connect"), exports);
__exportStar(require("./src/leaves_requests.scailo_pb"), exports);
__exportStar(require("./src/leaves_types.scailo_connect"), exports);
__exportStar(require("./src/leaves_types.scailo_pb"), exports);
__exportStar(require("./src/ledgers.scailo_connect"), exports);
__exportStar(require("./src/ledgers.scailo_pb"), exports);
__exportStar(require("./src/locations.scailo_connect"), exports);
__exportStar(require("./src/locations.scailo_pb"), exports);
__exportStar(require("./src/login.scailo_connect"), exports);
__exportStar(require("./src/login.scailo_pb"), exports);
__exportStar(require("./src/meetings.scailo_connect"), exports);
__exportStar(require("./src/meetings.scailo_pb"), exports);
__exportStar(require("./src/merchandises.scailo_connect"), exports);
__exportStar(require("./src/merchandises.scailo_pb"), exports);
__exportStar(require("./src/notes.scailo_connect"), exports);
__exportStar(require("./src/notes.scailo_pb"), exports);
__exportStar(require("./src/on_duties.scailo_connect"), exports);
__exportStar(require("./src/on_duties.scailo_pb"), exports);
__exportStar(require("./src/outward_jobs.scailo_connect"), exports);
__exportStar(require("./src/outward_jobs.scailo_pb"), exports);
__exportStar(require("./src/outward_jobs_free_issue_materials.scailo_connect"), exports);
__exportStar(require("./src/outward_jobs_free_issue_materials.scailo_pb"), exports);
__exportStar(require("./src/outward_jobs_free_issue_materials_returns.scailo_connect"), exports);
__exportStar(require("./src/outward_jobs_free_issue_materials_returns.scailo_pb"), exports);
__exportStar(require("./src/overtimes.scailo_connect"), exports);
__exportStar(require("./src/overtimes.scailo_pb"), exports);
__exportStar(require("./src/payroll_groups.scailo_connect"), exports);
__exportStar(require("./src/payroll_groups.scailo_pb"), exports);
__exportStar(require("./src/payroll_params.scailo_connect"), exports);
__exportStar(require("./src/payroll_params.scailo_pb"), exports);
__exportStar(require("./src/production_indents.scailo_connect"), exports);
__exportStar(require("./src/production_indents.scailo_pb"), exports);
__exportStar(require("./src/production_plans.scailo_connect"), exports);
__exportStar(require("./src/production_plans.scailo_pb"), exports);
__exportStar(require("./src/products.scailo_connect"), exports);
__exportStar(require("./src/products.scailo_pb"), exports);
__exportStar(require("./src/proforma_invoices.scailo_connect"), exports);
__exportStar(require("./src/proforma_invoices.scailo_pb"), exports);
__exportStar(require("./src/projects.scailo_connect"), exports);
__exportStar(require("./src/projects.scailo_pb"), exports);
__exportStar(require("./src/purchases_enquiries.scailo_connect"), exports);
__exportStar(require("./src/purchases_enquiries.scailo_pb"), exports);
__exportStar(require("./src/purchases_indents.scailo_connect"), exports);
__exportStar(require("./src/purchases_indents.scailo_pb"), exports);
__exportStar(require("./src/purchases_orders.scailo_connect"), exports);
__exportStar(require("./src/purchases_orders.scailo_pb"), exports);
__exportStar(require("./src/purchases_payments.scailo_connect"), exports);
__exportStar(require("./src/purchases_payments.scailo_pb"), exports);
__exportStar(require("./src/purchases_returns.scailo_connect"), exports);
__exportStar(require("./src/purchases_returns.scailo_pb"), exports);
__exportStar(require("./src/qc_groups.scailo_connect"), exports);
__exportStar(require("./src/qc_groups.scailo_pb"), exports);
__exportStar(require("./src/qc_hubs.scailo_connect"), exports);
__exportStar(require("./src/qc_hubs.scailo_pb"), exports);
__exportStar(require("./src/qc_params.scailo_connect"), exports);
__exportStar(require("./src/qc_params.scailo_pb"), exports);
__exportStar(require("./src/qc_samples.scailo_connect"), exports);
__exportStar(require("./src/qc_samples.scailo_pb"), exports);
__exportStar(require("./src/quotations_requests.scailo_connect"), exports);
__exportStar(require("./src/quotations_requests.scailo_pb"), exports);
__exportStar(require("./src/quotations_responses.scailo_connect"), exports);
__exportStar(require("./src/quotations_responses.scailo_pb"), exports);
__exportStar(require("./src/replaceable_indents.scailo_connect"), exports);
__exportStar(require("./src/replaceable_indents.scailo_pb"), exports);
__exportStar(require("./src/roles.scailo_connect"), exports);
__exportStar(require("./src/roles.scailo_pb"), exports);
__exportStar(require("./src/salaries.scailo_connect"), exports);
__exportStar(require("./src/salaries.scailo_pb"), exports);
__exportStar(require("./src/sales_enquiries.scailo_connect"), exports);
__exportStar(require("./src/sales_enquiries.scailo_pb"), exports);
__exportStar(require("./src/sales_invoices.scailo_connect"), exports);
__exportStar(require("./src/sales_invoices.scailo_pb"), exports);
__exportStar(require("./src/sales_orders.scailo_connect"), exports);
__exportStar(require("./src/sales_orders.scailo_pb"), exports);
__exportStar(require("./src/sales_quotations.scailo_connect"), exports);
__exportStar(require("./src/sales_quotations.scailo_pb"), exports);
__exportStar(require("./src/sales_receipts.scailo_connect"), exports);
__exportStar(require("./src/sales_receipts.scailo_pb"), exports);
__exportStar(require("./src/sales_returns.scailo_connect"), exports);
__exportStar(require("./src/sales_returns.scailo_pb"), exports);
__exportStar(require("./src/shifts.scailo_connect"), exports);
__exportStar(require("./src/shifts.scailo_pb"), exports);
__exportStar(require("./src/shifts_groups.scailo_connect"), exports);
__exportStar(require("./src/shifts_groups.scailo_pb"), exports);
__exportStar(require("./src/skills_groups.scailo_connect"), exports);
__exportStar(require("./src/skills_groups.scailo_pb"), exports);
__exportStar(require("./src/skills_params.scailo_connect"), exports);
__exportStar(require("./src/skills_params.scailo_pb"), exports);
__exportStar(require("./src/stock_audits.scailo_connect"), exports);
__exportStar(require("./src/stock_audits.scailo_pb"), exports);
__exportStar(require("./src/stock_issuances.scailo_connect"), exports);
__exportStar(require("./src/stock_issuances.scailo_pb"), exports);
__exportStar(require("./src/stock_returns.scailo_connect"), exports);
__exportStar(require("./src/stock_returns.scailo_pb"), exports);
__exportStar(require("./src/storages.scailo_connect"), exports);
__exportStar(require("./src/storages.scailo_pb"), exports);
__exportStar(require("./src/stores.scailo_connect"), exports);
__exportStar(require("./src/stores.scailo_pb"), exports);
__exportStar(require("./src/supply_offers.scailo_connect"), exports);
__exportStar(require("./src/supply_offers.scailo_pb"), exports);
__exportStar(require("./src/tax_groups.scailo_connect"), exports);
__exportStar(require("./src/tax_groups.scailo_pb"), exports);
__exportStar(require("./src/tax_params.scailo_connect"), exports);
__exportStar(require("./src/tax_params.scailo_pb"), exports);
__exportStar(require("./src/teams.scailo_connect"), exports);
__exportStar(require("./src/teams.scailo_pb"), exports);
__exportStar(require("./src/units_of_materials.scailo_connect"), exports);
__exportStar(require("./src/units_of_materials.scailo_pb"), exports);
__exportStar(require("./src/users.scailo_connect"), exports);
__exportStar(require("./src/users.scailo_pb"), exports);
__exportStar(require("./src/vault.scailo_connect"), exports);
__exportStar(require("./src/vault.scailo_pb"), exports);
__exportStar(require("./src/vault_commons.scailo_pb"), exports);
__exportStar(require("./src/vault_files.scailo_pb"), exports);
__exportStar(require("./src/vault_folders.scailo_pb"), exports);
__exportStar(require("./src/vendor_invoices.scailo_connect"), exports);
__exportStar(require("./src/vendor_invoices.scailo_pb"), exports);
__exportStar(require("./src/vendor_streams.scailo_connect"), exports);
__exportStar(require("./src/vendor_streams.scailo_pb"), exports);
__exportStar(require("./src/vendors.scailo_connect"), exports);
__exportStar(require("./src/vendors.scailo_pb"), exports);
__exportStar(require("./src/visitations.scailo_connect"), exports);
__exportStar(require("./src/visitations.scailo_pb"), exports);
__exportStar(require("./src/work_orders.scailo_connect"), exports);
__exportStar(require("./src/work_orders.scailo_pb"), exports);
__exportStar(require("./src/workflows_rules.scailo_connect"), exports);
__exportStar(require("./src/workflows_rules.scailo_pb"), exports);
const connect_1 = require("@connectrpc/connect");
const absences_scailo_connect_1 = require("./src/absences.scailo_connect");
const actions_codes_scailo_connect_1 = require("./src/actions_codes.scailo_connect");
const activities_scailo_connect_1 = require("./src/activities.scailo_connect");
const activities_groups_scailo_connect_1 = require("./src/activities_groups.scailo_connect");
const activities_statuses_scailo_connect_1 = require("./src/activities_statuses.scailo_connect");
const activities_tags_scailo_connect_1 = require("./src/activities_tags.scailo_connect");
const announcements_scailo_connect_1 = require("./src/announcements.scailo_connect");
const asset_indents_scailo_connect_1 = require("./src/asset_indents.scailo_connect");
const associates_scailo_connect_1 = require("./src/associates.scailo_connect");
const attendances_scailo_connect_1 = require("./src/attendances.scailo_connect");
const attendances_amendments_scailo_connect_1 = require("./src/attendances_amendments.scailo_connect");
const bank_accounts_scailo_connect_1 = require("./src/bank_accounts.scailo_connect");
const client_streams_scailo_connect_1 = require("./src/client_streams.scailo_connect");
const clients_scailo_connect_1 = require("./src/clients.scailo_connect");
const components_scailo_connect_1 = require("./src/components.scailo_connect");
const credit_notes_scailo_connect_1 = require("./src/credit_notes.scailo_connect");
const currencies_scailo_connect_1 = require("./src/currencies.scailo_connect");
const debit_notes_scailo_connect_1 = require("./src/debit_notes.scailo_connect");
const departments_scailo_connect_1 = require("./src/departments.scailo_connect");
const equations_families_scailo_connect_1 = require("./src/equations_families.scailo_connect");
const equations_replaceables_scailo_connect_1 = require("./src/equations_replaceables.scailo_connect");
const equations_sales_bundles_scailo_connect_1 = require("./src/equations_sales_bundles.scailo_connect");
const equations_work_orders_scailo_connect_1 = require("./src/equations_work_orders.scailo_connect");
const equipments_scailo_connect_1 = require("./src/equipments.scailo_connect");
const expenses_scailo_connect_1 = require("./src/expenses.scailo_connect");
const families_scailo_connect_1 = require("./src/families.scailo_connect");
const feedstocks_scailo_connect_1 = require("./src/feedstocks.scailo_connect");
const forms_fields_scailo_connect_1 = require("./src/forms_fields.scailo_connect");
const forms_fields_data_scailo_connect_1 = require("./src/forms_fields_data.scailo_connect");
const forms_sections_scailo_connect_1 = require("./src/forms_sections.scailo_connect");
const general_settings_scailo_connect_1 = require("./src/general_settings.scailo_connect");
const general_streams_scailo_connect_1 = require("./src/general_streams.scailo_connect");
const goals_scailo_connect_1 = require("./src/goals.scailo_connect");
const goods_dispatches_scailo_connect_1 = require("./src/goods_dispatches.scailo_connect");
const goods_receipts_scailo_connect_1 = require("./src/goods_receipts.scailo_connect");
const holidays_scailo_connect_1 = require("./src/holidays.scailo_connect");
const infrastructures_scailo_connect_1 = require("./src/infrastructures.scailo_connect");
const inventory_scailo_connect_1 = require("./src/inventory.scailo_connect");
const inward_jobs_scailo_connect_1 = require("./src/inward_jobs.scailo_connect");
const inward_jobs_free_issue_materials_scailo_connect_1 = require("./src/inward_jobs_free_issue_materials.scailo_connect");
const inward_jobs_free_issue_materials_returns_scailo_connect_1 = require("./src/inward_jobs_free_issue_materials_returns.scailo_connect");
const labels_scailo_connect_1 = require("./src/labels.scailo_connect");
const leaves_adjustments_scailo_connect_1 = require("./src/leaves_adjustments.scailo_connect");
const leaves_logs_scailo_connect_1 = require("./src/leaves_logs.scailo_connect");
const leaves_requests_scailo_connect_1 = require("./src/leaves_requests.scailo_connect");
const leaves_types_scailo_connect_1 = require("./src/leaves_types.scailo_connect");
const ledgers_scailo_connect_1 = require("./src/ledgers.scailo_connect");
const locations_scailo_connect_1 = require("./src/locations.scailo_connect");
const login_scailo_connect_1 = require("./src/login.scailo_connect");
const meetings_scailo_connect_1 = require("./src/meetings.scailo_connect");
const merchandises_scailo_connect_1 = require("./src/merchandises.scailo_connect");
const notes_scailo_connect_1 = require("./src/notes.scailo_connect");
const on_duties_scailo_connect_1 = require("./src/on_duties.scailo_connect");
const outward_jobs_scailo_connect_1 = require("./src/outward_jobs.scailo_connect");
const outward_jobs_free_issue_materials_scailo_connect_1 = require("./src/outward_jobs_free_issue_materials.scailo_connect");
const outward_jobs_free_issue_materials_returns_scailo_connect_1 = require("./src/outward_jobs_free_issue_materials_returns.scailo_connect");
const overtimes_scailo_connect_1 = require("./src/overtimes.scailo_connect");
const payroll_groups_scailo_connect_1 = require("./src/payroll_groups.scailo_connect");
const payroll_params_scailo_connect_1 = require("./src/payroll_params.scailo_connect");
const production_indents_scailo_connect_1 = require("./src/production_indents.scailo_connect");
const production_plans_scailo_connect_1 = require("./src/production_plans.scailo_connect");
const products_scailo_connect_1 = require("./src/products.scailo_connect");
const proforma_invoices_scailo_connect_1 = require("./src/proforma_invoices.scailo_connect");
const projects_scailo_connect_1 = require("./src/projects.scailo_connect");
const purchases_enquiries_scailo_connect_1 = require("./src/purchases_enquiries.scailo_connect");
const purchases_indents_scailo_connect_1 = require("./src/purchases_indents.scailo_connect");
const purchases_orders_scailo_connect_1 = require("./src/purchases_orders.scailo_connect");
const purchases_payments_scailo_connect_1 = require("./src/purchases_payments.scailo_connect");
const purchases_returns_scailo_connect_1 = require("./src/purchases_returns.scailo_connect");
const qc_groups_scailo_connect_1 = require("./src/qc_groups.scailo_connect");
const qc_hubs_scailo_connect_1 = require("./src/qc_hubs.scailo_connect");
const qc_params_scailo_connect_1 = require("./src/qc_params.scailo_connect");
const qc_samples_scailo_connect_1 = require("./src/qc_samples.scailo_connect");
const quotations_requests_scailo_connect_1 = require("./src/quotations_requests.scailo_connect");
const quotations_responses_scailo_connect_1 = require("./src/quotations_responses.scailo_connect");
const replaceable_indents_scailo_connect_1 = require("./src/replaceable_indents.scailo_connect");
const roles_scailo_connect_1 = require("./src/roles.scailo_connect");
const salaries_scailo_connect_1 = require("./src/salaries.scailo_connect");
const sales_enquiries_scailo_connect_1 = require("./src/sales_enquiries.scailo_connect");
const sales_invoices_scailo_connect_1 = require("./src/sales_invoices.scailo_connect");
const sales_orders_scailo_connect_1 = require("./src/sales_orders.scailo_connect");
const sales_quotations_scailo_connect_1 = require("./src/sales_quotations.scailo_connect");
const sales_receipts_scailo_connect_1 = require("./src/sales_receipts.scailo_connect");
const sales_returns_scailo_connect_1 = require("./src/sales_returns.scailo_connect");
const shifts_scailo_connect_1 = require("./src/shifts.scailo_connect");
const shifts_groups_scailo_connect_1 = require("./src/shifts_groups.scailo_connect");
const skills_groups_scailo_connect_1 = require("./src/skills_groups.scailo_connect");
const skills_params_scailo_connect_1 = require("./src/skills_params.scailo_connect");
const stock_audits_scailo_connect_1 = require("./src/stock_audits.scailo_connect");
const stock_issuances_scailo_connect_1 = require("./src/stock_issuances.scailo_connect");
const stock_returns_scailo_connect_1 = require("./src/stock_returns.scailo_connect");
const storages_scailo_connect_1 = require("./src/storages.scailo_connect");
const stores_scailo_connect_1 = require("./src/stores.scailo_connect");
const supply_offers_scailo_connect_1 = require("./src/supply_offers.scailo_connect");
const tax_groups_scailo_connect_1 = require("./src/tax_groups.scailo_connect");
const tax_params_scailo_connect_1 = require("./src/tax_params.scailo_connect");
const teams_scailo_connect_1 = require("./src/teams.scailo_connect");
const units_of_materials_scailo_connect_1 = require("./src/units_of_materials.scailo_connect");
const users_scailo_connect_1 = require("./src/users.scailo_connect");
const vault_scailo_connect_1 = require("./src/vault.scailo_connect");
const vendor_invoices_scailo_connect_1 = require("./src/vendor_invoices.scailo_connect");
const vendor_streams_scailo_connect_1 = require("./src/vendor_streams.scailo_connect");
const vendors_scailo_connect_1 = require("./src/vendors.scailo_connect");
const visitations_scailo_connect_1 = require("./src/visitations.scailo_connect");
const work_orders_scailo_connect_1 = require("./src/work_orders.scailo_connect");
const workflows_rules_scailo_connect_1 = require("./src/workflows_rules.scailo_connect");
/**

Get the client to access the AbsencesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForAbsencesService(transport) {
    return (0, connect_1.createPromiseClient)(absences_scailo_connect_1.AbsencesService, transport);
}
/**

Get the client to access the ActionsCodesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForActionsCodesService(transport) {
    return (0, connect_1.createPromiseClient)(actions_codes_scailo_connect_1.ActionsCodesService, transport);
}
/**

Get the client to access the ActivitiesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForActivitiesService(transport) {
    return (0, connect_1.createPromiseClient)(activities_scailo_connect_1.ActivitiesService, transport);
}
/**

Get the client to access the ActivitiesGroupsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForActivitiesGroupsService(transport) {
    return (0, connect_1.createPromiseClient)(activities_groups_scailo_connect_1.ActivitiesGroupsService, transport);
}
/**

Get the client to access the ActivitiesStatusesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForActivitiesStatusesService(transport) {
    return (0, connect_1.createPromiseClient)(activities_statuses_scailo_connect_1.ActivitiesStatusesService, transport);
}
/**

Get the client to access the ActivitiesTagsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForActivitiesTagsService(transport) {
    return (0, connect_1.createPromiseClient)(activities_tags_scailo_connect_1.ActivitiesTagsService, transport);
}
/**

Get the client to access the AnnouncementsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForAnnouncementsService(transport) {
    return (0, connect_1.createPromiseClient)(announcements_scailo_connect_1.AnnouncementsService, transport);
}
/**

Get the client to access the AssetIndentsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForAssetIndentsService(transport) {
    return (0, connect_1.createPromiseClient)(asset_indents_scailo_connect_1.AssetIndentsService, transport);
}
/**

Get the client to access the AssociatesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForAssociatesService(transport) {
    return (0, connect_1.createPromiseClient)(associates_scailo_connect_1.AssociatesService, transport);
}
/**

Get the client to access the AttendancesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForAttendancesService(transport) {
    return (0, connect_1.createPromiseClient)(attendances_scailo_connect_1.AttendancesService, transport);
}
/**

Get the client to access the AttendancesAmendmentsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForAttendancesAmendmentsService(transport) {
    return (0, connect_1.createPromiseClient)(attendances_amendments_scailo_connect_1.AttendancesAmendmentsService, transport);
}
/**

Get the client to access the BankAccountsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForBankAccountsService(transport) {
    return (0, connect_1.createPromiseClient)(bank_accounts_scailo_connect_1.BankAccountsService, transport);
}
/**

Get the client to access the ClientStreamsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForClientStreamsService(transport) {
    return (0, connect_1.createPromiseClient)(client_streams_scailo_connect_1.ClientStreamsService, transport);
}
/**

Get the client to access the ClientsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForClientsService(transport) {
    return (0, connect_1.createPromiseClient)(clients_scailo_connect_1.ClientsService, transport);
}
/**

Get the client to access the ComponentsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForComponentsService(transport) {
    return (0, connect_1.createPromiseClient)(components_scailo_connect_1.ComponentsService, transport);
}
/**

Get the client to access the CreditNotesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForCreditNotesService(transport) {
    return (0, connect_1.createPromiseClient)(credit_notes_scailo_connect_1.CreditNotesService, transport);
}
/**

Get the client to access the CurrenciesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForCurrenciesService(transport) {
    return (0, connect_1.createPromiseClient)(currencies_scailo_connect_1.CurrenciesService, transport);
}
/**

Get the client to access the DebitNotesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForDebitNotesService(transport) {
    return (0, connect_1.createPromiseClient)(debit_notes_scailo_connect_1.DebitNotesService, transport);
}
/**

Get the client to access the DepartmentsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForDepartmentsService(transport) {
    return (0, connect_1.createPromiseClient)(departments_scailo_connect_1.DepartmentsService, transport);
}
/**

Get the client to access the EquationsFamiliesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForEquationsFamiliesService(transport) {
    return (0, connect_1.createPromiseClient)(equations_families_scailo_connect_1.EquationsFamiliesService, transport);
}
/**

Get the client to access the EquationsReplaceablesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForEquationsReplaceablesService(transport) {
    return (0, connect_1.createPromiseClient)(equations_replaceables_scailo_connect_1.EquationsReplaceablesService, transport);
}
/**

Get the client to access the EquationsSalesBundlesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForEquationsSalesBundlesService(transport) {
    return (0, connect_1.createPromiseClient)(equations_sales_bundles_scailo_connect_1.EquationsSalesBundlesService, transport);
}
/**

Get the client to access the EquationsWorkOrdersService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForEquationsWorkOrdersService(transport) {
    return (0, connect_1.createPromiseClient)(equations_work_orders_scailo_connect_1.EquationsWorkOrdersService, transport);
}
/**

Get the client to access the EquipmentsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForEquipmentsService(transport) {
    return (0, connect_1.createPromiseClient)(equipments_scailo_connect_1.EquipmentsService, transport);
}
/**

Get the client to access the ExpensesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForExpensesService(transport) {
    return (0, connect_1.createPromiseClient)(expenses_scailo_connect_1.ExpensesService, transport);
}
/**

Get the client to access the FamiliesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForFamiliesService(transport) {
    return (0, connect_1.createPromiseClient)(families_scailo_connect_1.FamiliesService, transport);
}
/**

Get the client to access the FeedstocksService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForFeedstocksService(transport) {
    return (0, connect_1.createPromiseClient)(feedstocks_scailo_connect_1.FeedstocksService, transport);
}
/**

Get the client to access the FormsFieldsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForFormsFieldsService(transport) {
    return (0, connect_1.createPromiseClient)(forms_fields_scailo_connect_1.FormsFieldsService, transport);
}
/**

Get the client to access the FormsFieldsDataService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForFormsFieldsDataService(transport) {
    return (0, connect_1.createPromiseClient)(forms_fields_data_scailo_connect_1.FormsFieldsDataService, transport);
}
/**

Get the client to access the FormsSectionsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForFormsSectionsService(transport) {
    return (0, connect_1.createPromiseClient)(forms_sections_scailo_connect_1.FormsSectionsService, transport);
}
/**

Get the client to access the GeneralSettingsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForGeneralSettingsService(transport) {
    return (0, connect_1.createPromiseClient)(general_settings_scailo_connect_1.GeneralSettingsService, transport);
}
/**

Get the client to access the GeneralStreamsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForGeneralStreamsService(transport) {
    return (0, connect_1.createPromiseClient)(general_streams_scailo_connect_1.GeneralStreamsService, transport);
}
/**

Get the client to access the GoalsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForGoalsService(transport) {
    return (0, connect_1.createPromiseClient)(goals_scailo_connect_1.GoalsService, transport);
}
/**

Get the client to access the GoodsDispatchesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForGoodsDispatchesService(transport) {
    return (0, connect_1.createPromiseClient)(goods_dispatches_scailo_connect_1.GoodsDispatchesService, transport);
}
/**

Get the client to access the GoodsReceiptsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForGoodsReceiptsService(transport) {
    return (0, connect_1.createPromiseClient)(goods_receipts_scailo_connect_1.GoodsReceiptsService, transport);
}
/**

Get the client to access the HolidaysService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForHolidaysService(transport) {
    return (0, connect_1.createPromiseClient)(holidays_scailo_connect_1.HolidaysService, transport);
}
/**

Get the client to access the InfrastructuresService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForInfrastructuresService(transport) {
    return (0, connect_1.createPromiseClient)(infrastructures_scailo_connect_1.InfrastructuresService, transport);
}
/**

Get the client to access the InventoryService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForInventoryService(transport) {
    return (0, connect_1.createPromiseClient)(inventory_scailo_connect_1.InventoryService, transport);
}
/**

Get the client to access the InwardJobsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForInwardJobsService(transport) {
    return (0, connect_1.createPromiseClient)(inward_jobs_scailo_connect_1.InwardJobsService, transport);
}
/**

Get the client to access the InwardJobsFreeIssueMaterialsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForInwardJobsFreeIssueMaterialsService(transport) {
    return (0, connect_1.createPromiseClient)(inward_jobs_free_issue_materials_scailo_connect_1.InwardJobsFreeIssueMaterialsService, transport);
}
/**

Get the client to access the InwardJobsFreeIssueMaterialsReturnsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForInwardJobsFreeIssueMaterialsReturnsService(transport) {
    return (0, connect_1.createPromiseClient)(inward_jobs_free_issue_materials_returns_scailo_connect_1.InwardJobsFreeIssueMaterialsReturnsService, transport);
}
/**

Get the client to access the LabelsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForLabelsService(transport) {
    return (0, connect_1.createPromiseClient)(labels_scailo_connect_1.LabelsService, transport);
}
/**

Get the client to access the LeavesAdjustmentsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForLeavesAdjustmentsService(transport) {
    return (0, connect_1.createPromiseClient)(leaves_adjustments_scailo_connect_1.LeavesAdjustmentsService, transport);
}
/**

Get the client to access the LeavesLogsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForLeavesLogsService(transport) {
    return (0, connect_1.createPromiseClient)(leaves_logs_scailo_connect_1.LeavesLogsService, transport);
}
/**

Get the client to access the LeavesRequestsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForLeavesRequestsService(transport) {
    return (0, connect_1.createPromiseClient)(leaves_requests_scailo_connect_1.LeavesRequestsService, transport);
}
/**

Get the client to access the LeavesTypesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForLeavesTypesService(transport) {
    return (0, connect_1.createPromiseClient)(leaves_types_scailo_connect_1.LeavesTypesService, transport);
}
/**

Get the client to access the LedgersService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForLedgersService(transport) {
    return (0, connect_1.createPromiseClient)(ledgers_scailo_connect_1.LedgersService, transport);
}
/**

Get the client to access the LocationsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForLocationsService(transport) {
    return (0, connect_1.createPromiseClient)(locations_scailo_connect_1.LocationsService, transport);
}
/**

Get the client to access the LoginService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForLoginService(transport) {
    return (0, connect_1.createPromiseClient)(login_scailo_connect_1.LoginService, transport);
}
/**

Get the client to access the MeetingsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForMeetingsService(transport) {
    return (0, connect_1.createPromiseClient)(meetings_scailo_connect_1.MeetingsService, transport);
}
/**

Get the client to access the MerchandisesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForMerchandisesService(transport) {
    return (0, connect_1.createPromiseClient)(merchandises_scailo_connect_1.MerchandisesService, transport);
}
/**

Get the client to access the NotesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForNotesService(transport) {
    return (0, connect_1.createPromiseClient)(notes_scailo_connect_1.NotesService, transport);
}
/**

Get the client to access the OnDutiesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForOnDutiesService(transport) {
    return (0, connect_1.createPromiseClient)(on_duties_scailo_connect_1.OnDutiesService, transport);
}
/**

Get the client to access the OutwardJobsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForOutwardJobsService(transport) {
    return (0, connect_1.createPromiseClient)(outward_jobs_scailo_connect_1.OutwardJobsService, transport);
}
/**

Get the client to access the OutwardJobsFreeIssueMaterialsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForOutwardJobsFreeIssueMaterialsService(transport) {
    return (0, connect_1.createPromiseClient)(outward_jobs_free_issue_materials_scailo_connect_1.OutwardJobsFreeIssueMaterialsService, transport);
}
/**

Get the client to access the OutwardJobsFreeIssueMaterialsReturnsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForOutwardJobsFreeIssueMaterialsReturnsService(transport) {
    return (0, connect_1.createPromiseClient)(outward_jobs_free_issue_materials_returns_scailo_connect_1.OutwardJobsFreeIssueMaterialsReturnsService, transport);
}
/**

Get the client to access the OvertimesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForOvertimesService(transport) {
    return (0, connect_1.createPromiseClient)(overtimes_scailo_connect_1.OvertimesService, transport);
}
/**

Get the client to access the PayrollGroupsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForPayrollGroupsService(transport) {
    return (0, connect_1.createPromiseClient)(payroll_groups_scailo_connect_1.PayrollGroupsService, transport);
}
/**

Get the client to access the PayrollParamsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForPayrollParamsService(transport) {
    return (0, connect_1.createPromiseClient)(payroll_params_scailo_connect_1.PayrollParamsService, transport);
}
/**

Get the client to access the ProductionIndentsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForProductionIndentsService(transport) {
    return (0, connect_1.createPromiseClient)(production_indents_scailo_connect_1.ProductionIndentsService, transport);
}
/**

Get the client to access the ProductionPlansService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForProductionPlansService(transport) {
    return (0, connect_1.createPromiseClient)(production_plans_scailo_connect_1.ProductionPlansService, transport);
}
/**

Get the client to access the ProductsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForProductsService(transport) {
    return (0, connect_1.createPromiseClient)(products_scailo_connect_1.ProductsService, transport);
}
/**

Get the client to access the ProformaInvoicesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForProformaInvoicesService(transport) {
    return (0, connect_1.createPromiseClient)(proforma_invoices_scailo_connect_1.ProformaInvoicesService, transport);
}
/**

Get the client to access the ProjectsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForProjectsService(transport) {
    return (0, connect_1.createPromiseClient)(projects_scailo_connect_1.ProjectsService, transport);
}
/**

Get the client to access the PurchasesEnquiriesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForPurchasesEnquiriesService(transport) {
    return (0, connect_1.createPromiseClient)(purchases_enquiries_scailo_connect_1.PurchasesEnquiriesService, transport);
}
/**

Get the client to access the PurchasesIndentsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForPurchasesIndentsService(transport) {
    return (0, connect_1.createPromiseClient)(purchases_indents_scailo_connect_1.PurchasesIndentsService, transport);
}
/**

Get the client to access the PurchasesOrdersService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForPurchasesOrdersService(transport) {
    return (0, connect_1.createPromiseClient)(purchases_orders_scailo_connect_1.PurchasesOrdersService, transport);
}
/**

Get the client to access the PurchasesPaymentsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForPurchasesPaymentsService(transport) {
    return (0, connect_1.createPromiseClient)(purchases_payments_scailo_connect_1.PurchasesPaymentsService, transport);
}
/**

Get the client to access the PurchasesReturnsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForPurchasesReturnsService(transport) {
    return (0, connect_1.createPromiseClient)(purchases_returns_scailo_connect_1.PurchasesReturnsService, transport);
}
/**

Get the client to access the QCGroupsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForQCGroupsService(transport) {
    return (0, connect_1.createPromiseClient)(qc_groups_scailo_connect_1.QCGroupsService, transport);
}
/**

Get the client to access the QCHubsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForQCHubsService(transport) {
    return (0, connect_1.createPromiseClient)(qc_hubs_scailo_connect_1.QCHubsService, transport);
}
/**

Get the client to access the QCParamsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForQCParamsService(transport) {
    return (0, connect_1.createPromiseClient)(qc_params_scailo_connect_1.QCParamsService, transport);
}
/**

Get the client to access the QCSamplesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForQCSamplesService(transport) {
    return (0, connect_1.createPromiseClient)(qc_samples_scailo_connect_1.QCSamplesService, transport);
}
/**

Get the client to access the QuotationsRequestsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForQuotationsRequestsService(transport) {
    return (0, connect_1.createPromiseClient)(quotations_requests_scailo_connect_1.QuotationsRequestsService, transport);
}
/**

Get the client to access the QuotationsResponsesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForQuotationsResponsesService(transport) {
    return (0, connect_1.createPromiseClient)(quotations_responses_scailo_connect_1.QuotationsResponsesService, transport);
}
/**

Get the client to access the ReplaceableIndentsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForReplaceableIndentsService(transport) {
    return (0, connect_1.createPromiseClient)(replaceable_indents_scailo_connect_1.ReplaceableIndentsService, transport);
}
/**

Get the client to access the RolesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForRolesService(transport) {
    return (0, connect_1.createPromiseClient)(roles_scailo_connect_1.RolesService, transport);
}
/**

Get the client to access the SalariesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForSalariesService(transport) {
    return (0, connect_1.createPromiseClient)(salaries_scailo_connect_1.SalariesService, transport);
}
/**

Get the client to access the SalesEnquiriesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForSalesEnquiriesService(transport) {
    return (0, connect_1.createPromiseClient)(sales_enquiries_scailo_connect_1.SalesEnquiriesService, transport);
}
/**

Get the client to access the SalesInvoicesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForSalesInvoicesService(transport) {
    return (0, connect_1.createPromiseClient)(sales_invoices_scailo_connect_1.SalesInvoicesService, transport);
}
/**

Get the client to access the SalesOrdersService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForSalesOrdersService(transport) {
    return (0, connect_1.createPromiseClient)(sales_orders_scailo_connect_1.SalesOrdersService, transport);
}
/**

Get the client to access the SalesQuotationsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForSalesQuotationsService(transport) {
    return (0, connect_1.createPromiseClient)(sales_quotations_scailo_connect_1.SalesQuotationsService, transport);
}
/**

Get the client to access the SalesReceiptsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForSalesReceiptsService(transport) {
    return (0, connect_1.createPromiseClient)(sales_receipts_scailo_connect_1.SalesReceiptsService, transport);
}
/**

Get the client to access the SalesReturnsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForSalesReturnsService(transport) {
    return (0, connect_1.createPromiseClient)(sales_returns_scailo_connect_1.SalesReturnsService, transport);
}
/**

Get the client to access the ShiftsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForShiftsService(transport) {
    return (0, connect_1.createPromiseClient)(shifts_scailo_connect_1.ShiftsService, transport);
}
/**

Get the client to access the ShiftsGroupsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForShiftsGroupsService(transport) {
    return (0, connect_1.createPromiseClient)(shifts_groups_scailo_connect_1.ShiftsGroupsService, transport);
}
/**

Get the client to access the SkillsGroupsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForSkillsGroupsService(transport) {
    return (0, connect_1.createPromiseClient)(skills_groups_scailo_connect_1.SkillsGroupsService, transport);
}
/**

Get the client to access the SkillsParamsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForSkillsParamsService(transport) {
    return (0, connect_1.createPromiseClient)(skills_params_scailo_connect_1.SkillsParamsService, transport);
}
/**

Get the client to access the StockAuditsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForStockAuditsService(transport) {
    return (0, connect_1.createPromiseClient)(stock_audits_scailo_connect_1.StockAuditsService, transport);
}
/**

Get the client to access the StockIssuancesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForStockIssuancesService(transport) {
    return (0, connect_1.createPromiseClient)(stock_issuances_scailo_connect_1.StockIssuancesService, transport);
}
/**

Get the client to access the StockReturnsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForStockReturnsService(transport) {
    return (0, connect_1.createPromiseClient)(stock_returns_scailo_connect_1.StockReturnsService, transport);
}
/**

Get the client to access the StoragesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForStoragesService(transport) {
    return (0, connect_1.createPromiseClient)(storages_scailo_connect_1.StoragesService, transport);
}
/**

Get the client to access the StoresService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForStoresService(transport) {
    return (0, connect_1.createPromiseClient)(stores_scailo_connect_1.StoresService, transport);
}
/**

Get the client to access the SupplyOffersService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForSupplyOffersService(transport) {
    return (0, connect_1.createPromiseClient)(supply_offers_scailo_connect_1.SupplyOffersService, transport);
}
/**

Get the client to access the TaxGroupsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForTaxGroupsService(transport) {
    return (0, connect_1.createPromiseClient)(tax_groups_scailo_connect_1.TaxGroupsService, transport);
}
/**

Get the client to access the TaxParamsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForTaxParamsService(transport) {
    return (0, connect_1.createPromiseClient)(tax_params_scailo_connect_1.TaxParamsService, transport);
}
/**

Get the client to access the TeamsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForTeamsService(transport) {
    return (0, connect_1.createPromiseClient)(teams_scailo_connect_1.TeamsService, transport);
}
/**

Get the client to access the UnitsOfMaterialsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForUnitsOfMaterialsService(transport) {
    return (0, connect_1.createPromiseClient)(units_of_materials_scailo_connect_1.UnitsOfMaterialsService, transport);
}
/**

Get the client to access the UsersService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForUsersService(transport) {
    return (0, connect_1.createPromiseClient)(users_scailo_connect_1.UsersService, transport);
}
/**

Get the client to access the VaultService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForVaultService(transport) {
    return (0, connect_1.createPromiseClient)(vault_scailo_connect_1.VaultService, transport);
}
/**

Get the client to access the VendorInvoicesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForVendorInvoicesService(transport) {
    return (0, connect_1.createPromiseClient)(vendor_invoices_scailo_connect_1.VendorInvoicesService, transport);
}
/**

Get the client to access the VendorStreamsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForVendorStreamsService(transport) {
    return (0, connect_1.createPromiseClient)(vendor_streams_scailo_connect_1.VendorStreamsService, transport);
}
/**

Get the client to access the VendorsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForVendorsService(transport) {
    return (0, connect_1.createPromiseClient)(vendors_scailo_connect_1.VendorsService, transport);
}
/**

Get the client to access the VisitationsService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForVisitationsService(transport) {
    return (0, connect_1.createPromiseClient)(visitations_scailo_connect_1.VisitationsService, transport);
}
/**

Get the client to access the WorkOrdersService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForWorkOrdersService(transport) {
    return (0, connect_1.createPromiseClient)(work_orders_scailo_connect_1.WorkOrdersService, transport);
}
/**

Get the client to access the WorkflowsRulesService. Transport is a connectrpc Transport, which is created as follows:

For web:
```
import { createConnectTransport } from "@connectrpc/connect-web";

function getWebTransport(apiEndPoint: string = location.origin) {
    return createConnectTransport({
        baseUrl: apiEndPoint, useBinaryFormat: false, interceptors: []
    });
}
```

For node:
```
import { createConnectTransport } from "@connectrpc/connect-node";

function getNodeTransport(apiEndPoint: string) {
    return createConnectTransport({
        baseUrl: apiEndPoint, httpVersion: "1.1", useBinaryFormat: false, interceptors: []
    });
}
```

*/
function getClientForWorkflowsRulesService(transport) {
    return (0, connect_1.createPromiseClient)(workflows_rules_scailo_connect_1.WorkflowsRulesService, transport);
}
