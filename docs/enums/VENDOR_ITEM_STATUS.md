[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VENDOR\_ITEM\_STATUS

# Enumeration: VENDOR\_ITEM\_STATUS

Enum defining the applicable lifecycle and verification statuses for vendor items.

**`Generated`**

from enum Scailo.VENDOR_ITEM_STATUS

## Table of contents

### Enumeration Members

- [VENDOR\_ITEM\_STATUS\_ANY\_UNSPECIFIED](VENDOR_ITEM_STATUS.md#vendor_item_status_any_unspecified)
- [VENDOR\_ITEM\_STATUS\_APPROVED](VENDOR_ITEM_STATUS.md#vendor_item_status_approved)
- [VENDOR\_ITEM\_STATUS\_UNAPPROVED](VENDOR_ITEM_STATUS.md#vendor_item_status_unapproved)

## Enumeration Members

### VENDOR\_ITEM\_STATUS\_ANY\_UNSPECIFIED

• **VENDOR\_ITEM\_STATUS\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.

**`Generated`**

from enum value: VENDOR_ITEM_STATUS_ANY_UNSPECIFIED = 0;

#### Defined in

[src/vendors.scailo_pb.ts:272](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L272)

___

### VENDOR\_ITEM\_STATUS\_APPROVED

• **VENDOR\_ITEM\_STATUS\_APPROVED** = ``1``

**`Description`**

Denotes that the vendor item association has passed verification and is actively approved.

**`Generated`**

from enum value: VENDOR_ITEM_STATUS_APPROVED = 1;

#### Defined in

[src/vendors.scailo_pb.ts:279](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L279)

___

### VENDOR\_ITEM\_STATUS\_UNAPPROVED

• **VENDOR\_ITEM\_STATUS\_UNAPPROVED** = ``2``

**`Description`**

Denotes that the vendor item association is pending review and waiting for administrative approval.

**`Generated`**

from enum value: VENDOR_ITEM_STATUS_UNAPPROVED = 2;

#### Defined in

[src/vendors.scailo_pb.ts:286](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L286)
