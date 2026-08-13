[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QUESTIONNAIRE\_OPTION\_GROUP\_VALUE\_STATUS

# Enumeration: QUESTIONNAIRE\_OPTION\_GROUP\_VALUE\_STATUS

Enum defining the applicable lifecycle and verification statuses for questionnaire option group values.

**`Generated`**

from enum Scailo.QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS

## Table of contents

### Enumeration Members

- [QUESTIONNAIRE\_OPTION\_GROUP\_VALUE\_STATUS\_ANY\_UNSPECIFIED](QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS.md#questionnaire_option_group_value_status_any_unspecified)
- [QUESTIONNAIRE\_OPTION\_GROUP\_VALUE\_STATUS\_APPROVED](QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS.md#questionnaire_option_group_value_status_approved)
- [QUESTIONNAIRE\_OPTION\_GROUP\_VALUE\_STATUS\_UNAPPROVED](QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS.md#questionnaire_option_group_value_status_unapproved)

## Enumeration Members

### QUESTIONNAIRE\_OPTION\_GROUP\_VALUE\_STATUS\_ANY\_UNSPECIFIED

• **QUESTIONNAIRE\_OPTION\_GROUP\_VALUE\_STATUS\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.

**`Generated`**

from enum value: QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS_ANY_UNSPECIFIED = 0;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:98](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L98)

___

### QUESTIONNAIRE\_OPTION\_GROUP\_VALUE\_STATUS\_APPROVED

• **QUESTIONNAIRE\_OPTION\_GROUP\_VALUE\_STATUS\_APPROVED** = ``1``

**`Description`**

Denotes that the vendor item association has passed verification and is actively approved.

**`Generated`**

from enum value: QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS_APPROVED = 1;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:105](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L105)

___

### QUESTIONNAIRE\_OPTION\_GROUP\_VALUE\_STATUS\_UNAPPROVED

• **QUESTIONNAIRE\_OPTION\_GROUP\_VALUE\_STATUS\_UNAPPROVED** = ``2``

**`Description`**

Denotes that the vendor item association is pending review and waiting for administrative approval.

**`Generated`**

from enum value: QUESTIONNAIRE_OPTION_GROUP_VALUE_STATUS_UNAPPROVED = 2;

#### Defined in

[src/questionnaire_option_groups.scailo_pb.ts:112](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_option_groups.scailo_pb.ts#L112)
