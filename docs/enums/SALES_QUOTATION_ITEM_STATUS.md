[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SALES\_QUOTATION\_ITEM\_STATUS

# Enumeration: SALES\_QUOTATION\_ITEM\_STATUS

Enum defining the applicable lifecycle and verification statuses for sales quotation items.

**`Generated`**

from enum Scailo.SALES_QUOTATION_ITEM_STATUS

## Table of contents

### Enumeration Members

- [SALES\_QUOTATION\_ITEM\_STATUS\_ANY\_UNSPECIFIED](SALES_QUOTATION_ITEM_STATUS.md#sales_quotation_item_status_any_unspecified)
- [SALES\_QUOTATION\_ITEM\_STATUS\_APPROVED](SALES_QUOTATION_ITEM_STATUS.md#sales_quotation_item_status_approved)
- [SALES\_QUOTATION\_ITEM\_STATUS\_UNAPPROVED](SALES_QUOTATION_ITEM_STATUS.md#sales_quotation_item_status_unapproved)

## Enumeration Members

### SALES\_QUOTATION\_ITEM\_STATUS\_ANY\_UNSPECIFIED

• **SALES\_QUOTATION\_ITEM\_STATUS\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.

**`Generated`**

from enum value: SALES_QUOTATION_ITEM_STATUS_ANY_UNSPECIFIED = 0;

#### Defined in

[src/sales_quotations.scailo_pb.ts:347](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L347)

___

### SALES\_QUOTATION\_ITEM\_STATUS\_APPROVED

• **SALES\_QUOTATION\_ITEM\_STATUS\_APPROVED** = ``1``

**`Description`**

Denotes that the sales quotation item association has passed verification and is actively approved.

**`Generated`**

from enum value: SALES_QUOTATION_ITEM_STATUS_APPROVED = 1;

#### Defined in

[src/sales_quotations.scailo_pb.ts:354](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L354)

___

### SALES\_QUOTATION\_ITEM\_STATUS\_UNAPPROVED

• **SALES\_QUOTATION\_ITEM\_STATUS\_UNAPPROVED** = ``2``

**`Description`**

Denotes that the sales quotation item association is pending review and waiting for administrative approval.

**`Generated`**

from enum value: SALES_QUOTATION_ITEM_STATUS_UNAPPROVED = 2;

#### Defined in

[src/sales_quotations.scailo_pb.ts:361](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/sales_quotations.scailo_pb.ts#L361)
