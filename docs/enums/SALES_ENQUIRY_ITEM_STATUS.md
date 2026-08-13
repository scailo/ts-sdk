[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SALES\_ENQUIRY\_ITEM\_STATUS

# Enumeration: SALES\_ENQUIRY\_ITEM\_STATUS

Enum defining the applicable lifecycle and verification statuses for sales enquiry items.

**`Generated`**

from enum Scailo.SALES_ENQUIRY_ITEM_STATUS

## Table of contents

### Enumeration Members

- [SALES\_ENQUIRY\_ITEM\_STATUS\_ANY\_UNSPECIFIED](SALES_ENQUIRY_ITEM_STATUS.md#sales_enquiry_item_status_any_unspecified)
- [SALES\_ENQUIRY\_ITEM\_STATUS\_APPROVED](SALES_ENQUIRY_ITEM_STATUS.md#sales_enquiry_item_status_approved)
- [SALES\_ENQUIRY\_ITEM\_STATUS\_UNAPPROVED](SALES_ENQUIRY_ITEM_STATUS.md#sales_enquiry_item_status_unapproved)

## Enumeration Members

### SALES\_ENQUIRY\_ITEM\_STATUS\_ANY\_UNSPECIFIED

• **SALES\_ENQUIRY\_ITEM\_STATUS\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.

**`Generated`**

from enum value: SALES_ENQUIRY_ITEM_STATUS_ANY_UNSPECIFIED = 0;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:122](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L122)

___

### SALES\_ENQUIRY\_ITEM\_STATUS\_APPROVED

• **SALES\_ENQUIRY\_ITEM\_STATUS\_APPROVED** = ``1``

**`Description`**

Denotes that the sales enquiry item association has passed verification and is actively approved.

**`Generated`**

from enum value: SALES_ENQUIRY_ITEM_STATUS_APPROVED = 1;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:129](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L129)

___

### SALES\_ENQUIRY\_ITEM\_STATUS\_UNAPPROVED

• **SALES\_ENQUIRY\_ITEM\_STATUS\_UNAPPROVED** = ``2``

**`Description`**

Denotes that the sales enquiry item association is pending review and waiting for administrative approval.

**`Generated`**

from enum value: SALES_ENQUIRY_ITEM_STATUS_UNAPPROVED = 2;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:136](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L136)
