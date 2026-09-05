[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QUESTIONNAIRE\_SECTION\_CONDITIONAL\_RULE\_STATUS

# Enumeration: QUESTIONNAIRE\_SECTION\_CONDITIONAL\_RULE\_STATUS

Enum defining the applicable lifecycle and verification statuses for sales order items.

**`Generated`**

from enum Scailo.QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS

## Table of contents

### Enumeration Members

- [QUESTIONNAIRE\_SECTION\_CONDITIONAL\_RULE\_STATUS\_ANY\_UNSPECIFIED](QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS.md#questionnaire_section_conditional_rule_status_any_unspecified)
- [QUESTIONNAIRE\_SECTION\_CONDITIONAL\_RULE\_STATUS\_APPROVED](QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS.md#questionnaire_section_conditional_rule_status_approved)
- [QUESTIONNAIRE\_SECTION\_CONDITIONAL\_RULE\_STATUS\_UNAPPROVED](QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS.md#questionnaire_section_conditional_rule_status_unapproved)

## Enumeration Members

### QUESTIONNAIRE\_SECTION\_CONDITIONAL\_RULE\_STATUS\_ANY\_UNSPECIFIED

• **QUESTIONNAIRE\_SECTION\_CONDITIONAL\_RULE\_STATUS\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.

**`Generated`**

from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS_ANY_UNSPECIFIED = 0;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:261](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L261)

___

### QUESTIONNAIRE\_SECTION\_CONDITIONAL\_RULE\_STATUS\_APPROVED

• **QUESTIONNAIRE\_SECTION\_CONDITIONAL\_RULE\_STATUS\_APPROVED** = ``1``

**`Description`**

Denotes that the sales order item association has passed verification and is actively approved.

**`Generated`**

from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS_APPROVED = 1;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:268](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L268)

___

### QUESTIONNAIRE\_SECTION\_CONDITIONAL\_RULE\_STATUS\_UNAPPROVED

• **QUESTIONNAIRE\_SECTION\_CONDITIONAL\_RULE\_STATUS\_UNAPPROVED** = ``2``

**`Description`**

Denotes that the sales order item association is pending review and waiting for administrative approval.

**`Generated`**

from enum value: QUESTIONNAIRE_SECTION_CONDITIONAL_RULE_STATUS_UNAPPROVED = 2;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:275](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L275)
