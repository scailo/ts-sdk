[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TAX\_PARAM\_VALUE\_TYPE

# Enumeration: TAX\_PARAM\_VALUE\_TYPE

Describes the available value types for a tax param

**`Generated`**

from enum Scailo.TAX_PARAM_VALUE_TYPE

## Table of contents

### Enumeration Members

- [TAX\_PARAM\_VALUE\_TYPE\_ANY\_UNSPECIFIED](TAX_PARAM_VALUE_TYPE.md#tax_param_value_type_any_unspecified)
- [TAX\_PARAM\_VALUE\_TYPE\_FIXED](TAX_PARAM_VALUE_TYPE.md#tax_param_value_type_fixed)
- [TAX\_PARAM\_VALUE\_TYPE\_PERCENTAGE](TAX_PARAM_VALUE_TYPE.md#tax_param_value_type_percentage)

## Enumeration Members

### TAX\_PARAM\_VALUE\_TYPE\_ANY\_UNSPECIFIED

• **TAX\_PARAM\_VALUE\_TYPE\_ANY\_UNSPECIFIED** = ``0``

The default value type, and is useful only for filter and search queries when the value type needs to be disregarded

**`Generated`**

from enum value: TAX_PARAM_VALUE_TYPE_ANY_UNSPECIFIED = 0;

#### Defined in

[src/tax_params.scailo_pb.ts:22](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L22)

___

### TAX\_PARAM\_VALUE\_TYPE\_FIXED

• **TAX\_PARAM\_VALUE\_TYPE\_FIXED** = ``2``

Denotes that the value type is fixed (tax is a fixed value)

**`Generated`**

from enum value: TAX_PARAM_VALUE_TYPE_FIXED = 2;

#### Defined in

[src/tax_params.scailo_pb.ts:36](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L36)

___

### TAX\_PARAM\_VALUE\_TYPE\_PERCENTAGE

• **TAX\_PARAM\_VALUE\_TYPE\_PERCENTAGE** = ``1``

Denotes that the value type is percentage (tax is calculated as a percentage over the base value)

**`Generated`**

from enum value: TAX_PARAM_VALUE_TYPE_PERCENTAGE = 1;

#### Defined in

[src/tax_params.scailo_pb.ts:29](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L29)
