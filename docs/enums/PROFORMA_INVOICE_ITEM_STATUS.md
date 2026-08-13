[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PROFORMA\_INVOICE\_ITEM\_STATUS

# Enumeration: PROFORMA\_INVOICE\_ITEM\_STATUS

Enum defining the applicable lifecycle and verification statuses for proforma invoice items.

**`Generated`**

from enum Scailo.PROFORMA_INVOICE_ITEM_STATUS

## Table of contents

### Enumeration Members

- [PROFORMA\_INVOICE\_ITEM\_STATUS\_ANY\_UNSPECIFIED](PROFORMA_INVOICE_ITEM_STATUS.md#proforma_invoice_item_status_any_unspecified)
- [PROFORMA\_INVOICE\_ITEM\_STATUS\_APPROVED](PROFORMA_INVOICE_ITEM_STATUS.md#proforma_invoice_item_status_approved)
- [PROFORMA\_INVOICE\_ITEM\_STATUS\_UNAPPROVED](PROFORMA_INVOICE_ITEM_STATUS.md#proforma_invoice_item_status_unapproved)

## Enumeration Members

### PROFORMA\_INVOICE\_ITEM\_STATUS\_ANY\_UNSPECIFIED

• **PROFORMA\_INVOICE\_ITEM\_STATUS\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_STATUS_ANY_UNSPECIFIED = 0;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:302](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L302)

___

### PROFORMA\_INVOICE\_ITEM\_STATUS\_APPROVED

• **PROFORMA\_INVOICE\_ITEM\_STATUS\_APPROVED** = ``1``

**`Description`**

Denotes that the proforma invoice item association has passed verification and is actively approved.

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_STATUS_APPROVED = 1;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:309](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L309)

___

### PROFORMA\_INVOICE\_ITEM\_STATUS\_UNAPPROVED

• **PROFORMA\_INVOICE\_ITEM\_STATUS\_UNAPPROVED** = ``2``

**`Description`**

Denotes that the proforma invoice item association is pending review and waiting for administrative approval.

**`Generated`**

from enum value: PROFORMA_INVOICE_ITEM_STATUS_UNAPPROVED = 2;

#### Defined in

[src/proforma_invoices.scailo_pb.ts:316](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/proforma_invoices.scailo_pb.ts#L316)
