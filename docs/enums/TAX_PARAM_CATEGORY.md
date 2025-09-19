[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TAX\_PARAM\_CATEGORY

# Enumeration: TAX\_PARAM\_CATEGORY

Describes the available categories for a tax param

**`Generated`**

from enum Scailo.TAX_PARAM_CATEGORY

## Table of contents

### Enumeration Members

- [TAX\_PARAM\_CATEGORY\_ANY\_UNSPECIFIED](TAX_PARAM_CATEGORY.md#tax_param_category_any_unspecified)
- [TAX\_PARAM\_CATEGORY\_GENERAL](TAX_PARAM_CATEGORY.md#tax_param_category_general)
- [TAX\_PARAM\_CATEGORY\_PAYROLL](TAX_PARAM_CATEGORY.md#tax_param_category_payroll)

## Enumeration Members

### TAX\_PARAM\_CATEGORY\_ANY\_UNSPECIFIED

• **TAX\_PARAM\_CATEGORY\_ANY\_UNSPECIFIED** = ``0``

The default category, and is useful only for filter and search queries when the category needs to be disregarded

**`Generated`**

from enum value: TAX_PARAM_CATEGORY_ANY_UNSPECIFIED = 0;

#### Defined in

[src/tax_params.scailo_pb.ts:57](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L57)

___

### TAX\_PARAM\_CATEGORY\_GENERAL

• **TAX\_PARAM\_CATEGORY\_GENERAL** = ``1``

Denotes that the tax param belongs to the general category (applicable on purchase and sales)

**`Generated`**

from enum value: TAX_PARAM_CATEGORY_GENERAL = 1;

#### Defined in

[src/tax_params.scailo_pb.ts:64](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L64)

___

### TAX\_PARAM\_CATEGORY\_PAYROLL

• **TAX\_PARAM\_CATEGORY\_PAYROLL** = ``2``

Denotes that the tax param belongs to the payroll category (applicable when computing payroll)

**`Generated`**

from enum value: TAX_PARAM_CATEGORY_PAYROLL = 2;

#### Defined in

[src/tax_params.scailo_pb.ts:71](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_params.scailo_pb.ts#L71)
