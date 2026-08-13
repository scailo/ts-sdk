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
exports.getScailoClientForAbsencesService = getScailoClientForAbsencesService;
exports.getScailoClientForActionsCodesService = getScailoClientForActionsCodesService;
exports.getScailoClientForActivitiesService = getScailoClientForActivitiesService;
exports.getScailoClientForActivitiesGroupsService = getScailoClientForActivitiesGroupsService;
exports.getScailoClientForActivitiesStatusesService = getScailoClientForActivitiesStatusesService;
exports.getScailoClientForActivitiesTagsService = getScailoClientForActivitiesTagsService;
exports.getScailoClientForAnnouncementsService = getScailoClientForAnnouncementsService;
exports.getScailoClientForAssetIndentsService = getScailoClientForAssetIndentsService;
exports.getScailoClientForAssociatesService = getScailoClientForAssociatesService;
exports.getScailoClientForAttendancesService = getScailoClientForAttendancesService;
exports.getScailoClientForAttendancesAmendmentsService = getScailoClientForAttendancesAmendmentsService;
exports.getScailoClientForBankAccountsService = getScailoClientForBankAccountsService;
exports.getScailoClientForClientStreamsService = getScailoClientForClientStreamsService;
exports.getScailoClientForClientsService = getScailoClientForClientsService;
exports.getScailoClientForComponentsService = getScailoClientForComponentsService;
exports.getScailoClientForCreditNotesService = getScailoClientForCreditNotesService;
exports.getScailoClientForCurrenciesService = getScailoClientForCurrenciesService;
exports.getScailoClientForDebitNotesService = getScailoClientForDebitNotesService;
exports.getScailoClientForDepartmentsService = getScailoClientForDepartmentsService;
exports.getScailoClientForEquationsFamiliesService = getScailoClientForEquationsFamiliesService;
exports.getScailoClientForEquationsReplaceablesService = getScailoClientForEquationsReplaceablesService;
exports.getScailoClientForEquationsSalesBundlesService = getScailoClientForEquationsSalesBundlesService;
exports.getScailoClientForEquationsWorkOrdersService = getScailoClientForEquationsWorkOrdersService;
exports.getScailoClientForEquipmentsService = getScailoClientForEquipmentsService;
exports.getScailoClientForExpensesService = getScailoClientForExpensesService;
exports.getScailoClientForFamiliesService = getScailoClientForFamiliesService;
exports.getScailoClientForFeedstocksService = getScailoClientForFeedstocksService;
exports.getScailoClientForFormsFieldsService = getScailoClientForFormsFieldsService;
exports.getScailoClientForFormsFieldsDataService = getScailoClientForFormsFieldsDataService;
exports.getScailoClientForFormsSectionsService = getScailoClientForFormsSectionsService;
exports.getScailoClientForGeneralSettingsService = getScailoClientForGeneralSettingsService;
exports.getScailoClientForGeneralStreamsService = getScailoClientForGeneralStreamsService;
exports.getScailoClientForGoalsService = getScailoClientForGoalsService;
exports.getScailoClientForGoodsDispatchesService = getScailoClientForGoodsDispatchesService;
exports.getScailoClientForGoodsReceiptsService = getScailoClientForGoodsReceiptsService;
exports.getScailoClientForHolidaysService = getScailoClientForHolidaysService;
exports.getScailoClientForInfrastructuresService = getScailoClientForInfrastructuresService;
exports.getScailoClientForInventoryService = getScailoClientForInventoryService;
exports.getScailoClientForInwardJobsService = getScailoClientForInwardJobsService;
exports.getScailoClientForInwardJobsFreeIssueMaterialsService = getScailoClientForInwardJobsFreeIssueMaterialsService;
exports.getScailoClientForInwardJobsFreeIssueMaterialsReturnsService = getScailoClientForInwardJobsFreeIssueMaterialsReturnsService;
exports.getScailoClientForLabelsService = getScailoClientForLabelsService;
exports.getScailoClientForLeavesAdjustmentsService = getScailoClientForLeavesAdjustmentsService;
exports.getScailoClientForLeavesLogsService = getScailoClientForLeavesLogsService;
exports.getScailoClientForLeavesRequestsService = getScailoClientForLeavesRequestsService;
exports.getScailoClientForLeavesTypesService = getScailoClientForLeavesTypesService;
exports.getScailoClientForLedgersService = getScailoClientForLedgersService;
exports.getScailoClientForLocationsService = getScailoClientForLocationsService;
exports.getScailoClientForLoginService = getScailoClientForLoginService;
exports.getScailoClientForMagicLinksService = getScailoClientForMagicLinksService;
exports.getScailoClientForMeetingsService = getScailoClientForMeetingsService;
exports.getScailoClientForMerchandisesService = getScailoClientForMerchandisesService;
exports.getScailoClientForNotesService = getScailoClientForNotesService;
exports.getScailoClientForOnDutiesService = getScailoClientForOnDutiesService;
exports.getScailoClientForOutwardJobsService = getScailoClientForOutwardJobsService;
exports.getScailoClientForOutwardJobsFreeIssueMaterialsService = getScailoClientForOutwardJobsFreeIssueMaterialsService;
exports.getScailoClientForOutwardJobsFreeIssueMaterialsReturnsService = getScailoClientForOutwardJobsFreeIssueMaterialsReturnsService;
exports.getScailoClientForOvertimesService = getScailoClientForOvertimesService;
exports.getScailoClientForPayrollGroupsService = getScailoClientForPayrollGroupsService;
exports.getScailoClientForPayrollParamsService = getScailoClientForPayrollParamsService;
exports.getScailoClientForProductionIndentsService = getScailoClientForProductionIndentsService;
exports.getScailoClientForProductionPlansService = getScailoClientForProductionPlansService;
exports.getScailoClientForProductsService = getScailoClientForProductsService;
exports.getScailoClientForProformaInvoicesService = getScailoClientForProformaInvoicesService;
exports.getScailoClientForProjectsService = getScailoClientForProjectsService;
exports.getScailoClientForPurchasesEnquiriesService = getScailoClientForPurchasesEnquiriesService;
exports.getScailoClientForPurchasesIndentsService = getScailoClientForPurchasesIndentsService;
exports.getScailoClientForPurchasesOrdersService = getScailoClientForPurchasesOrdersService;
exports.getScailoClientForPurchasesPaymentsService = getScailoClientForPurchasesPaymentsService;
exports.getScailoClientForPurchasesReturnsService = getScailoClientForPurchasesReturnsService;
exports.getScailoClientForQCGroupsService = getScailoClientForQCGroupsService;
exports.getScailoClientForQCParamsService = getScailoClientForQCParamsService;
exports.getScailoClientForQCSamplesService = getScailoClientForQCSamplesService;
exports.getScailoClientForQuestionnaireOptionGroupsService = getScailoClientForQuestionnaireOptionGroupsService;
exports.getScailoClientForQuestionnaireSectionsService = getScailoClientForQuestionnaireSectionsService;
exports.getScailoClientForQuestionnaireTemplatesService = getScailoClientForQuestionnaireTemplatesService;
exports.getScailoClientForQuotationsRequestsService = getScailoClientForQuotationsRequestsService;
exports.getScailoClientForQuotationsResponsesService = getScailoClientForQuotationsResponsesService;
exports.getScailoClientForReplaceableIndentsService = getScailoClientForReplaceableIndentsService;
exports.getScailoClientForRolesService = getScailoClientForRolesService;
exports.getScailoClientForSalariesService = getScailoClientForSalariesService;
exports.getScailoClientForSalesEnquiriesService = getScailoClientForSalesEnquiriesService;
exports.getScailoClientForSalesInvoicesService = getScailoClientForSalesInvoicesService;
exports.getScailoClientForSalesOrdersService = getScailoClientForSalesOrdersService;
exports.getScailoClientForSalesQuotationsService = getScailoClientForSalesQuotationsService;
exports.getScailoClientForSalesReceiptsService = getScailoClientForSalesReceiptsService;
exports.getScailoClientForSalesReturnsService = getScailoClientForSalesReturnsService;
exports.getScailoClientForShiftsService = getScailoClientForShiftsService;
exports.getScailoClientForShiftsGroupsService = getScailoClientForShiftsGroupsService;
exports.getScailoClientForSkillsGroupsService = getScailoClientForSkillsGroupsService;
exports.getScailoClientForSkillsParamsService = getScailoClientForSkillsParamsService;
exports.getScailoClientForStockAuditsService = getScailoClientForStockAuditsService;
exports.getScailoClientForStockIssuancesService = getScailoClientForStockIssuancesService;
exports.getScailoClientForStockReturnsService = getScailoClientForStockReturnsService;
exports.getScailoClientForStoragesService = getScailoClientForStoragesService;
exports.getScailoClientForStoresService = getScailoClientForStoresService;
exports.getScailoClientForSupplyOffersService = getScailoClientForSupplyOffersService;
exports.getScailoClientForTaxGroupsService = getScailoClientForTaxGroupsService;
exports.getScailoClientForTaxParamsService = getScailoClientForTaxParamsService;
exports.getScailoClientForTeamsService = getScailoClientForTeamsService;
exports.getScailoClientForTransactionalEmailsService = getScailoClientForTransactionalEmailsService;
exports.getScailoClientForUnitsOfMaterialsService = getScailoClientForUnitsOfMaterialsService;
exports.getScailoClientForUsersService = getScailoClientForUsersService;
exports.getScailoClientForVaultService = getScailoClientForVaultService;
exports.getScailoClientForVendorInvoicesService = getScailoClientForVendorInvoicesService;
exports.getScailoClientForVendorStreamsService = getScailoClientForVendorStreamsService;
exports.getScailoClientForVendorsService = getScailoClientForVendorsService;
exports.getScailoClientForVisitationsService = getScailoClientForVisitationsService;
exports.getScailoClientForWorkOrdersService = getScailoClientForWorkOrdersService;
exports.getScailoClientForWorkflowsRulesService = getScailoClientForWorkflowsRulesService;
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
__exportStar(require("./src/magic_links.scailo_connect"), exports);
__exportStar(require("./src/magic_links.scailo_pb"), exports);
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
__exportStar(require("./src/qc_params.scailo_connect"), exports);
__exportStar(require("./src/qc_params.scailo_pb"), exports);
__exportStar(require("./src/qc_samples.scailo_connect"), exports);
__exportStar(require("./src/qc_samples.scailo_pb"), exports);
__exportStar(require("./src/questionnaire_option_groups.scailo_connect"), exports);
__exportStar(require("./src/questionnaire_option_groups.scailo_pb"), exports);
__exportStar(require("./src/questionnaire_sections.scailo_connect"), exports);
__exportStar(require("./src/questionnaire_sections.scailo_pb"), exports);
__exportStar(require("./src/questionnaire_templates.scailo_connect"), exports);
__exportStar(require("./src/questionnaire_templates.scailo_pb"), exports);
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
__exportStar(require("./src/transactional_emails.scailo_connect"), exports);
__exportStar(require("./src/transactional_emails.scailo_pb"), exports);
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
const magic_links_scailo_connect_1 = require("./src/magic_links.scailo_connect");
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
const qc_params_scailo_connect_1 = require("./src/qc_params.scailo_connect");
const qc_samples_scailo_connect_1 = require("./src/qc_samples.scailo_connect");
const questionnaire_option_groups_scailo_connect_1 = require("./src/questionnaire_option_groups.scailo_connect");
const questionnaire_sections_scailo_connect_1 = require("./src/questionnaire_sections.scailo_connect");
const questionnaire_templates_scailo_connect_1 = require("./src/questionnaire_templates.scailo_connect");
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
const transactional_emails_scailo_connect_1 = require("./src/transactional_emails.scailo_connect");
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
function getScailoClientForAbsencesService(transport) {
    return (0, connect_1.createClient)(absences_scailo_connect_1.AbsencesService, transport);
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
function getScailoClientForActionsCodesService(transport) {
    return (0, connect_1.createClient)(actions_codes_scailo_connect_1.ActionsCodesService, transport);
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
function getScailoClientForActivitiesService(transport) {
    return (0, connect_1.createClient)(activities_scailo_connect_1.ActivitiesService, transport);
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
function getScailoClientForActivitiesGroupsService(transport) {
    return (0, connect_1.createClient)(activities_groups_scailo_connect_1.ActivitiesGroupsService, transport);
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
function getScailoClientForActivitiesStatusesService(transport) {
    return (0, connect_1.createClient)(activities_statuses_scailo_connect_1.ActivitiesStatusesService, transport);
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
function getScailoClientForActivitiesTagsService(transport) {
    return (0, connect_1.createClient)(activities_tags_scailo_connect_1.ActivitiesTagsService, transport);
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
function getScailoClientForAnnouncementsService(transport) {
    return (0, connect_1.createClient)(announcements_scailo_connect_1.AnnouncementsService, transport);
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
function getScailoClientForAssetIndentsService(transport) {
    return (0, connect_1.createClient)(asset_indents_scailo_connect_1.AssetIndentsService, transport);
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
function getScailoClientForAssociatesService(transport) {
    return (0, connect_1.createClient)(associates_scailo_connect_1.AssociatesService, transport);
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
function getScailoClientForAttendancesService(transport) {
    return (0, connect_1.createClient)(attendances_scailo_connect_1.AttendancesService, transport);
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
function getScailoClientForAttendancesAmendmentsService(transport) {
    return (0, connect_1.createClient)(attendances_amendments_scailo_connect_1.AttendancesAmendmentsService, transport);
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
function getScailoClientForBankAccountsService(transport) {
    return (0, connect_1.createClient)(bank_accounts_scailo_connect_1.BankAccountsService, transport);
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
function getScailoClientForClientStreamsService(transport) {
    return (0, connect_1.createClient)(client_streams_scailo_connect_1.ClientStreamsService, transport);
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
function getScailoClientForClientsService(transport) {
    return (0, connect_1.createClient)(clients_scailo_connect_1.ClientsService, transport);
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
function getScailoClientForComponentsService(transport) {
    return (0, connect_1.createClient)(components_scailo_connect_1.ComponentsService, transport);
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
function getScailoClientForCreditNotesService(transport) {
    return (0, connect_1.createClient)(credit_notes_scailo_connect_1.CreditNotesService, transport);
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
function getScailoClientForCurrenciesService(transport) {
    return (0, connect_1.createClient)(currencies_scailo_connect_1.CurrenciesService, transport);
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
function getScailoClientForDebitNotesService(transport) {
    return (0, connect_1.createClient)(debit_notes_scailo_connect_1.DebitNotesService, transport);
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
function getScailoClientForDepartmentsService(transport) {
    return (0, connect_1.createClient)(departments_scailo_connect_1.DepartmentsService, transport);
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
function getScailoClientForEquationsFamiliesService(transport) {
    return (0, connect_1.createClient)(equations_families_scailo_connect_1.EquationsFamiliesService, transport);
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
function getScailoClientForEquationsReplaceablesService(transport) {
    return (0, connect_1.createClient)(equations_replaceables_scailo_connect_1.EquationsReplaceablesService, transport);
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
function getScailoClientForEquationsSalesBundlesService(transport) {
    return (0, connect_1.createClient)(equations_sales_bundles_scailo_connect_1.EquationsSalesBundlesService, transport);
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
function getScailoClientForEquationsWorkOrdersService(transport) {
    return (0, connect_1.createClient)(equations_work_orders_scailo_connect_1.EquationsWorkOrdersService, transport);
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
function getScailoClientForEquipmentsService(transport) {
    return (0, connect_1.createClient)(equipments_scailo_connect_1.EquipmentsService, transport);
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
function getScailoClientForExpensesService(transport) {
    return (0, connect_1.createClient)(expenses_scailo_connect_1.ExpensesService, transport);
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
function getScailoClientForFamiliesService(transport) {
    return (0, connect_1.createClient)(families_scailo_connect_1.FamiliesService, transport);
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
function getScailoClientForFeedstocksService(transport) {
    return (0, connect_1.createClient)(feedstocks_scailo_connect_1.FeedstocksService, transport);
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
function getScailoClientForFormsFieldsService(transport) {
    return (0, connect_1.createClient)(forms_fields_scailo_connect_1.FormsFieldsService, transport);
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
function getScailoClientForFormsFieldsDataService(transport) {
    return (0, connect_1.createClient)(forms_fields_data_scailo_connect_1.FormsFieldsDataService, transport);
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
function getScailoClientForFormsSectionsService(transport) {
    return (0, connect_1.createClient)(forms_sections_scailo_connect_1.FormsSectionsService, transport);
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
function getScailoClientForGeneralSettingsService(transport) {
    return (0, connect_1.createClient)(general_settings_scailo_connect_1.GeneralSettingsService, transport);
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
function getScailoClientForGeneralStreamsService(transport) {
    return (0, connect_1.createClient)(general_streams_scailo_connect_1.GeneralStreamsService, transport);
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
function getScailoClientForGoalsService(transport) {
    return (0, connect_1.createClient)(goals_scailo_connect_1.GoalsService, transport);
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
function getScailoClientForGoodsDispatchesService(transport) {
    return (0, connect_1.createClient)(goods_dispatches_scailo_connect_1.GoodsDispatchesService, transport);
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
function getScailoClientForGoodsReceiptsService(transport) {
    return (0, connect_1.createClient)(goods_receipts_scailo_connect_1.GoodsReceiptsService, transport);
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
function getScailoClientForHolidaysService(transport) {
    return (0, connect_1.createClient)(holidays_scailo_connect_1.HolidaysService, transport);
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
function getScailoClientForInfrastructuresService(transport) {
    return (0, connect_1.createClient)(infrastructures_scailo_connect_1.InfrastructuresService, transport);
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
function getScailoClientForInventoryService(transport) {
    return (0, connect_1.createClient)(inventory_scailo_connect_1.InventoryService, transport);
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
function getScailoClientForInwardJobsService(transport) {
    return (0, connect_1.createClient)(inward_jobs_scailo_connect_1.InwardJobsService, transport);
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
function getScailoClientForInwardJobsFreeIssueMaterialsService(transport) {
    return (0, connect_1.createClient)(inward_jobs_free_issue_materials_scailo_connect_1.InwardJobsFreeIssueMaterialsService, transport);
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
function getScailoClientForInwardJobsFreeIssueMaterialsReturnsService(transport) {
    return (0, connect_1.createClient)(inward_jobs_free_issue_materials_returns_scailo_connect_1.InwardJobsFreeIssueMaterialsReturnsService, transport);
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
function getScailoClientForLabelsService(transport) {
    return (0, connect_1.createClient)(labels_scailo_connect_1.LabelsService, transport);
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
function getScailoClientForLeavesAdjustmentsService(transport) {
    return (0, connect_1.createClient)(leaves_adjustments_scailo_connect_1.LeavesAdjustmentsService, transport);
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
function getScailoClientForLeavesLogsService(transport) {
    return (0, connect_1.createClient)(leaves_logs_scailo_connect_1.LeavesLogsService, transport);
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
function getScailoClientForLeavesRequestsService(transport) {
    return (0, connect_1.createClient)(leaves_requests_scailo_connect_1.LeavesRequestsService, transport);
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
function getScailoClientForLeavesTypesService(transport) {
    return (0, connect_1.createClient)(leaves_types_scailo_connect_1.LeavesTypesService, transport);
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
function getScailoClientForLedgersService(transport) {
    return (0, connect_1.createClient)(ledgers_scailo_connect_1.LedgersService, transport);
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
function getScailoClientForLocationsService(transport) {
    return (0, connect_1.createClient)(locations_scailo_connect_1.LocationsService, transport);
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
function getScailoClientForLoginService(transport) {
    return (0, connect_1.createClient)(login_scailo_connect_1.LoginService, transport);
}
/**

Get the client to access the MagicLinksService. Transport is a connectrpc Transport, which is created as follows:

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
function getScailoClientForMagicLinksService(transport) {
    return (0, connect_1.createClient)(magic_links_scailo_connect_1.MagicLinksService, transport);
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
function getScailoClientForMeetingsService(transport) {
    return (0, connect_1.createClient)(meetings_scailo_connect_1.MeetingsService, transport);
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
function getScailoClientForMerchandisesService(transport) {
    return (0, connect_1.createClient)(merchandises_scailo_connect_1.MerchandisesService, transport);
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
function getScailoClientForNotesService(transport) {
    return (0, connect_1.createClient)(notes_scailo_connect_1.NotesService, transport);
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
function getScailoClientForOnDutiesService(transport) {
    return (0, connect_1.createClient)(on_duties_scailo_connect_1.OnDutiesService, transport);
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
function getScailoClientForOutwardJobsService(transport) {
    return (0, connect_1.createClient)(outward_jobs_scailo_connect_1.OutwardJobsService, transport);
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
function getScailoClientForOutwardJobsFreeIssueMaterialsService(transport) {
    return (0, connect_1.createClient)(outward_jobs_free_issue_materials_scailo_connect_1.OutwardJobsFreeIssueMaterialsService, transport);
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
function getScailoClientForOutwardJobsFreeIssueMaterialsReturnsService(transport) {
    return (0, connect_1.createClient)(outward_jobs_free_issue_materials_returns_scailo_connect_1.OutwardJobsFreeIssueMaterialsReturnsService, transport);
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
function getScailoClientForOvertimesService(transport) {
    return (0, connect_1.createClient)(overtimes_scailo_connect_1.OvertimesService, transport);
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
function getScailoClientForPayrollGroupsService(transport) {
    return (0, connect_1.createClient)(payroll_groups_scailo_connect_1.PayrollGroupsService, transport);
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
function getScailoClientForPayrollParamsService(transport) {
    return (0, connect_1.createClient)(payroll_params_scailo_connect_1.PayrollParamsService, transport);
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
function getScailoClientForProductionIndentsService(transport) {
    return (0, connect_1.createClient)(production_indents_scailo_connect_1.ProductionIndentsService, transport);
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
function getScailoClientForProductionPlansService(transport) {
    return (0, connect_1.createClient)(production_plans_scailo_connect_1.ProductionPlansService, transport);
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
function getScailoClientForProductsService(transport) {
    return (0, connect_1.createClient)(products_scailo_connect_1.ProductsService, transport);
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
function getScailoClientForProformaInvoicesService(transport) {
    return (0, connect_1.createClient)(proforma_invoices_scailo_connect_1.ProformaInvoicesService, transport);
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
function getScailoClientForProjectsService(transport) {
    return (0, connect_1.createClient)(projects_scailo_connect_1.ProjectsService, transport);
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
function getScailoClientForPurchasesEnquiriesService(transport) {
    return (0, connect_1.createClient)(purchases_enquiries_scailo_connect_1.PurchasesEnquiriesService, transport);
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
function getScailoClientForPurchasesIndentsService(transport) {
    return (0, connect_1.createClient)(purchases_indents_scailo_connect_1.PurchasesIndentsService, transport);
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
function getScailoClientForPurchasesOrdersService(transport) {
    return (0, connect_1.createClient)(purchases_orders_scailo_connect_1.PurchasesOrdersService, transport);
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
function getScailoClientForPurchasesPaymentsService(transport) {
    return (0, connect_1.createClient)(purchases_payments_scailo_connect_1.PurchasesPaymentsService, transport);
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
function getScailoClientForPurchasesReturnsService(transport) {
    return (0, connect_1.createClient)(purchases_returns_scailo_connect_1.PurchasesReturnsService, transport);
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
function getScailoClientForQCGroupsService(transport) {
    return (0, connect_1.createClient)(qc_groups_scailo_connect_1.QCGroupsService, transport);
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
function getScailoClientForQCParamsService(transport) {
    return (0, connect_1.createClient)(qc_params_scailo_connect_1.QCParamsService, transport);
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
function getScailoClientForQCSamplesService(transport) {
    return (0, connect_1.createClient)(qc_samples_scailo_connect_1.QCSamplesService, transport);
}
/**

Get the client to access the QuestionnaireOptionGroupsService. Transport is a connectrpc Transport, which is created as follows:

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
function getScailoClientForQuestionnaireOptionGroupsService(transport) {
    return (0, connect_1.createClient)(questionnaire_option_groups_scailo_connect_1.QuestionnaireOptionGroupsService, transport);
}
/**

Get the client to access the QuestionnaireSectionsService. Transport is a connectrpc Transport, which is created as follows:

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
function getScailoClientForQuestionnaireSectionsService(transport) {
    return (0, connect_1.createClient)(questionnaire_sections_scailo_connect_1.QuestionnaireSectionsService, transport);
}
/**

Get the client to access the QuestionnaireTemplatesService. Transport is a connectrpc Transport, which is created as follows:

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
function getScailoClientForQuestionnaireTemplatesService(transport) {
    return (0, connect_1.createClient)(questionnaire_templates_scailo_connect_1.QuestionnaireTemplatesService, transport);
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
function getScailoClientForQuotationsRequestsService(transport) {
    return (0, connect_1.createClient)(quotations_requests_scailo_connect_1.QuotationsRequestsService, transport);
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
function getScailoClientForQuotationsResponsesService(transport) {
    return (0, connect_1.createClient)(quotations_responses_scailo_connect_1.QuotationsResponsesService, transport);
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
function getScailoClientForReplaceableIndentsService(transport) {
    return (0, connect_1.createClient)(replaceable_indents_scailo_connect_1.ReplaceableIndentsService, transport);
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
function getScailoClientForRolesService(transport) {
    return (0, connect_1.createClient)(roles_scailo_connect_1.RolesService, transport);
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
function getScailoClientForSalariesService(transport) {
    return (0, connect_1.createClient)(salaries_scailo_connect_1.SalariesService, transport);
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
function getScailoClientForSalesEnquiriesService(transport) {
    return (0, connect_1.createClient)(sales_enquiries_scailo_connect_1.SalesEnquiriesService, transport);
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
function getScailoClientForSalesInvoicesService(transport) {
    return (0, connect_1.createClient)(sales_invoices_scailo_connect_1.SalesInvoicesService, transport);
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
function getScailoClientForSalesOrdersService(transport) {
    return (0, connect_1.createClient)(sales_orders_scailo_connect_1.SalesOrdersService, transport);
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
function getScailoClientForSalesQuotationsService(transport) {
    return (0, connect_1.createClient)(sales_quotations_scailo_connect_1.SalesQuotationsService, transport);
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
function getScailoClientForSalesReceiptsService(transport) {
    return (0, connect_1.createClient)(sales_receipts_scailo_connect_1.SalesReceiptsService, transport);
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
function getScailoClientForSalesReturnsService(transport) {
    return (0, connect_1.createClient)(sales_returns_scailo_connect_1.SalesReturnsService, transport);
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
function getScailoClientForShiftsService(transport) {
    return (0, connect_1.createClient)(shifts_scailo_connect_1.ShiftsService, transport);
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
function getScailoClientForShiftsGroupsService(transport) {
    return (0, connect_1.createClient)(shifts_groups_scailo_connect_1.ShiftsGroupsService, transport);
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
function getScailoClientForSkillsGroupsService(transport) {
    return (0, connect_1.createClient)(skills_groups_scailo_connect_1.SkillsGroupsService, transport);
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
function getScailoClientForSkillsParamsService(transport) {
    return (0, connect_1.createClient)(skills_params_scailo_connect_1.SkillsParamsService, transport);
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
function getScailoClientForStockAuditsService(transport) {
    return (0, connect_1.createClient)(stock_audits_scailo_connect_1.StockAuditsService, transport);
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
function getScailoClientForStockIssuancesService(transport) {
    return (0, connect_1.createClient)(stock_issuances_scailo_connect_1.StockIssuancesService, transport);
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
function getScailoClientForStockReturnsService(transport) {
    return (0, connect_1.createClient)(stock_returns_scailo_connect_1.StockReturnsService, transport);
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
function getScailoClientForStoragesService(transport) {
    return (0, connect_1.createClient)(storages_scailo_connect_1.StoragesService, transport);
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
function getScailoClientForStoresService(transport) {
    return (0, connect_1.createClient)(stores_scailo_connect_1.StoresService, transport);
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
function getScailoClientForSupplyOffersService(transport) {
    return (0, connect_1.createClient)(supply_offers_scailo_connect_1.SupplyOffersService, transport);
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
function getScailoClientForTaxGroupsService(transport) {
    return (0, connect_1.createClient)(tax_groups_scailo_connect_1.TaxGroupsService, transport);
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
function getScailoClientForTaxParamsService(transport) {
    return (0, connect_1.createClient)(tax_params_scailo_connect_1.TaxParamsService, transport);
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
function getScailoClientForTeamsService(transport) {
    return (0, connect_1.createClient)(teams_scailo_connect_1.TeamsService, transport);
}
/**

Get the client to access the TransactionalEmailsService. Transport is a connectrpc Transport, which is created as follows:

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
function getScailoClientForTransactionalEmailsService(transport) {
    return (0, connect_1.createClient)(transactional_emails_scailo_connect_1.TransactionalEmailsService, transport);
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
function getScailoClientForUnitsOfMaterialsService(transport) {
    return (0, connect_1.createClient)(units_of_materials_scailo_connect_1.UnitsOfMaterialsService, transport);
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
function getScailoClientForUsersService(transport) {
    return (0, connect_1.createClient)(users_scailo_connect_1.UsersService, transport);
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
function getScailoClientForVaultService(transport) {
    return (0, connect_1.createClient)(vault_scailo_connect_1.VaultService, transport);
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
function getScailoClientForVendorInvoicesService(transport) {
    return (0, connect_1.createClient)(vendor_invoices_scailo_connect_1.VendorInvoicesService, transport);
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
function getScailoClientForVendorStreamsService(transport) {
    return (0, connect_1.createClient)(vendor_streams_scailo_connect_1.VendorStreamsService, transport);
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
function getScailoClientForVendorsService(transport) {
    return (0, connect_1.createClient)(vendors_scailo_connect_1.VendorsService, transport);
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
function getScailoClientForVisitationsService(transport) {
    return (0, connect_1.createClient)(visitations_scailo_connect_1.VisitationsService, transport);
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
function getScailoClientForWorkOrdersService(transport) {
    return (0, connect_1.createClient)(work_orders_scailo_connect_1.WorkOrdersService, transport);
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
function getScailoClientForWorkflowsRulesService(transport) {
    return (0, connect_1.createClient)(workflows_rules_scailo_connect_1.WorkflowsRulesService, transport);
}
