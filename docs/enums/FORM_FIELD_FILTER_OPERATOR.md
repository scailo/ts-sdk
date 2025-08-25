[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FORM\_FIELD\_FILTER\_OPERATOR

# Enumeration: FORM\_FIELD\_FILTER\_OPERATOR

Describes the form field filter operator

**`Generated`**

from enum Scailo.FORM_FIELD_FILTER_OPERATOR

## Table of contents

### Enumeration Members

- [FORM\_FIELD\_FILTER\_OPERATOR\_EQUALITY](FORM_FIELD_FILTER_OPERATOR.md#form_field_filter_operator_equality)
- [FORM\_FIELD\_FILTER\_OPERATOR\_GREATER\_THAN](FORM_FIELD_FILTER_OPERATOR.md#form_field_filter_operator_greater_than)
- [FORM\_FIELD\_FILTER\_OPERATOR\_GREATER\_THAN\_OR\_EQUAL](FORM_FIELD_FILTER_OPERATOR.md#form_field_filter_operator_greater_than_or_equal)
- [FORM\_FIELD\_FILTER\_OPERATOR\_LESS\_THAN](FORM_FIELD_FILTER_OPERATOR.md#form_field_filter_operator_less_than)
- [FORM\_FIELD\_FILTER\_OPERATOR\_LESS\_THAN\_OR\_EQUAL](FORM_FIELD_FILTER_OPERATOR.md#form_field_filter_operator_less_than_or_equal)
- [FORM\_FIELD\_FILTER\_OPERATOR\_SIMILARITY\_UNSPECIFIED](FORM_FIELD_FILTER_OPERATOR.md#form_field_filter_operator_similarity_unspecified)

## Enumeration Members

### FORM\_FIELD\_FILTER\_OPERATOR\_EQUALITY

• **FORM\_FIELD\_FILTER\_OPERATOR\_EQUALITY** = ``10``

The operator uses equality. Returns all records that match the given value

**`Generated`**

from enum value: FORM_FIELD_FILTER_OPERATOR_EQUALITY = 10;

#### Defined in

src/forms_fields_data.scailo_pb.ts:30

___

### FORM\_FIELD\_FILTER\_OPERATOR\_GREATER\_THAN

• **FORM\_FIELD\_FILTER\_OPERATOR\_GREATER\_THAN** = ``30``

The operator uses greater than. Returns all records that are greater than the given value. Useful for comparing numbers and dates. For strings, it returns all records that are lexicographically greater than the given value.

**`Generated`**

from enum value: FORM_FIELD_FILTER_OPERATOR_GREATER_THAN = 30;

#### Defined in

src/forms_fields_data.scailo_pb.ts:51

___

### FORM\_FIELD\_FILTER\_OPERATOR\_GREATER\_THAN\_OR\_EQUAL

• **FORM\_FIELD\_FILTER\_OPERATOR\_GREATER\_THAN\_OR\_EQUAL** = ``31``

The operator uses greater than or equal. Returns all records that are greater than or equal to the given value. Useful for comparing numbers and dates. For strings, it returns all records that are lexicographically greater than or equal to the given value.

**`Generated`**

from enum value: FORM_FIELD_FILTER_OPERATOR_GREATER_THAN_OR_EQUAL = 31;

#### Defined in

src/forms_fields_data.scailo_pb.ts:58

___

### FORM\_FIELD\_FILTER\_OPERATOR\_LESS\_THAN

• **FORM\_FIELD\_FILTER\_OPERATOR\_LESS\_THAN** = ``20``

The operator uses less than. Returns all records that are less than the given value. Useful for comparing numbers and dates. For strings, it returns all records that are lexicographically less than the given value.

**`Generated`**

from enum value: FORM_FIELD_FILTER_OPERATOR_LESS_THAN = 20;

#### Defined in

src/forms_fields_data.scailo_pb.ts:37

___

### FORM\_FIELD\_FILTER\_OPERATOR\_LESS\_THAN\_OR\_EQUAL

• **FORM\_FIELD\_FILTER\_OPERATOR\_LESS\_THAN\_OR\_EQUAL** = ``21``

The operator uses less than or equal. Returns all records that are less than or equal to the given value. Useful for comparing numbers and dates. For strings, it returns all records that are lexicographically less than or equal to the given value.

**`Generated`**

from enum value: FORM_FIELD_FILTER_OPERATOR_LESS_THAN_OR_EQUAL = 21;

#### Defined in

src/forms_fields_data.scailo_pb.ts:44

___

### FORM\_FIELD\_FILTER\_OPERATOR\_SIMILARITY\_UNSPECIFIED

• **FORM\_FIELD\_FILTER\_OPERATOR\_SIMILARITY\_UNSPECIFIED** = ``0``

The default operator which uses similarity to filter. Returns all records that are similar to the given value

**`Generated`**

from enum value: FORM_FIELD_FILTER_OPERATOR_SIMILARITY_UNSPECIFIED = 0;

#### Defined in

src/forms_fields_data.scailo_pb.ts:23
