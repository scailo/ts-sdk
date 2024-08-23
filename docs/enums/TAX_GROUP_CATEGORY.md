[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / TAX\_GROUP\_CATEGORY

# Enumeration: TAX\_GROUP\_CATEGORY

Describes the available categories for a tax group

**`Generated`**

from enum Scailo.TAX_GROUP_CATEGORY

## Table of contents

### Enumeration Members

- [TAX\_GROUP\_CATEGORY\_ANY\_UNSPECIFIED](TAX_GROUP_CATEGORY.md#tax_group_category_any_unspecified)
- [TAX\_GROUP\_CATEGORY\_CUMULATIVE\_EXCESS\_ON\_GOODS](TAX_GROUP_CATEGORY.md#tax_group_category_cumulative_excess_on_goods)
- [TAX\_GROUP\_CATEGORY\_GENERAL](TAX_GROUP_CATEGORY.md#tax_group_category_general)
- [TAX\_GROUP\_CATEGORY\_PAYROLL](TAX_GROUP_CATEGORY.md#tax_group_category_payroll)

## Enumeration Members

### TAX\_GROUP\_CATEGORY\_ANY\_UNSPECIFIED

• **TAX\_GROUP\_CATEGORY\_ANY\_UNSPECIFIED** = ``0``

The default category, and is useful only for filter and search queries when the category needs to be disregarded

**`Generated`**

from enum value: TAX_GROUP_CATEGORY_ANY_UNSPECIFIED = 0;

#### Defined in

src/tax_groups.scailo_pb.ts:23

___

### TAX\_GROUP\_CATEGORY\_CUMULATIVE\_EXCESS\_ON\_GOODS

• **TAX\_GROUP\_CATEGORY\_CUMULATIVE\_EXCESS\_ON\_GOODS** = ``3``

Denotes that the tax group belongs to the cumulative excess on goods category (applicable when calculating the excess tax on goods)

**`Generated`**

from enum value: TAX_GROUP_CATEGORY_CUMULATIVE_EXCESS_ON_GOODS = 3;

#### Defined in

src/tax_groups.scailo_pb.ts:44

___

### TAX\_GROUP\_CATEGORY\_GENERAL

• **TAX\_GROUP\_CATEGORY\_GENERAL** = ``1``

Denotes that the tax group belongs to the general category (applicable on purchase and sales)

**`Generated`**

from enum value: TAX_GROUP_CATEGORY_GENERAL = 1;

#### Defined in

src/tax_groups.scailo_pb.ts:30

___

### TAX\_GROUP\_CATEGORY\_PAYROLL

• **TAX\_GROUP\_CATEGORY\_PAYROLL** = ``2``

Denotes that the tax group belongs to the payroll category (applicable when computing payroll)

**`Generated`**

from enum value: TAX_GROUP_CATEGORY_PAYROLL = 2;

#### Defined in

src/tax_groups.scailo_pb.ts:37
