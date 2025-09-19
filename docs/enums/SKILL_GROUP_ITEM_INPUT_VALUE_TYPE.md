[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE

# Enumeration: SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE

Describes the available input types for a skill group item (with possible vbalues being number-absolute, number-percentage, text-input, text-dropdown)

**`Generated`**

from enum Scailo.SKILL_GROUP_ITEM_INPUT_VALUE_TYPE

## Table of contents

### Enumeration Members

- [SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE\_ANY\_UNSPECIFIED](SKILL_GROUP_ITEM_INPUT_VALUE_TYPE.md#skill_group_item_input_value_type_any_unspecified)
- [SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE\_NUMBER\_ABSOLUTE](SKILL_GROUP_ITEM_INPUT_VALUE_TYPE.md#skill_group_item_input_value_type_number_absolute)
- [SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE\_NUMBER\_PERCENTAGE](SKILL_GROUP_ITEM_INPUT_VALUE_TYPE.md#skill_group_item_input_value_type_number_percentage)
- [SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE\_TEXT\_DROPDOWN](SKILL_GROUP_ITEM_INPUT_VALUE_TYPE.md#skill_group_item_input_value_type_text_dropdown)
- [SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE\_TEXT\_INPUT](SKILL_GROUP_ITEM_INPUT_VALUE_TYPE.md#skill_group_item_input_value_type_text_input)

## Enumeration Members

### SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE\_ANY\_UNSPECIFIED

• **SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE\_ANY\_UNSPECIFIED** = ``0``

Denotes that value type is disregarded. This is used only within search APIs

**`Generated`**

from enum value: SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_ANY_UNSPECIFIED = 0;

#### Defined in

[src/skills_groups.scailo_pb.ts:23](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L23)

___

### SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE\_NUMBER\_ABSOLUTE

• **SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE\_NUMBER\_ABSOLUTE** = ``1``

Input value type is an absolute number (with min and max defined in number_min_value and number_max_value)

**`Generated`**

from enum value: SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_NUMBER_ABSOLUTE = 1;

#### Defined in

[src/skills_groups.scailo_pb.ts:30](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L30)

___

### SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE\_NUMBER\_PERCENTAGE

• **SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE\_NUMBER\_PERCENTAGE** = ``2``

Input value type is a percentage

**`Generated`**

from enum value: SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_NUMBER_PERCENTAGE = 2;

#### Defined in

[src/skills_groups.scailo_pb.ts:37](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L37)

___

### SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE\_TEXT\_DROPDOWN

• **SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE\_TEXT\_DROPDOWN** = ``4``

Input value type is a dropdown (from the values as defined in text_values)

**`Generated`**

from enum value: SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_TEXT_DROPDOWN = 4;

#### Defined in

[src/skills_groups.scailo_pb.ts:51](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L51)

___

### SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE\_TEXT\_INPUT

• **SKILL\_GROUP\_ITEM\_INPUT\_VALUE\_TYPE\_TEXT\_INPUT** = ``3``

Input value type is a textual input

**`Generated`**

from enum value: SKILL_GROUP_ITEM_INPUT_VALUE_TYPE_TEXT_INPUT = 3;

#### Defined in

[src/skills_groups.scailo_pb.ts:44](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/skills_groups.scailo_pb.ts#L44)
