[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VENDOR\_USER\_STATUS

# Enumeration: VENDOR\_USER\_STATUS

Enum defining the applicable lifecycle and verification statuses for vendor users.

**`Generated`**

from enum Scailo.VENDOR_USER_STATUS

## Table of contents

### Enumeration Members

- [VENDOR\_USER\_STATUS\_ANY\_UNSPECIFIED](VENDOR_USER_STATUS.md#vendor_user_status_any_unspecified)
- [VENDOR\_USER\_STATUS\_APPROVED](VENDOR_USER_STATUS.md#vendor_user_status_approved)
- [VENDOR\_USER\_STATUS\_UNAPPROVED](VENDOR_USER_STATUS.md#vendor_user_status_unapproved)

## Enumeration Members

### VENDOR\_USER\_STATUS\_ANY\_UNSPECIFIED

• **VENDOR\_USER\_STATUS\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.

**`Generated`**

from enum value: VENDOR_USER_STATUS_ANY_UNSPECIFIED = 0;

#### Defined in

[src/vendors.scailo_pb.ts:307](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L307)

___

### VENDOR\_USER\_STATUS\_APPROVED

• **VENDOR\_USER\_STATUS\_APPROVED** = ``1``

**`Description`**

Denotes that the vendor user association has passed verification and is actively approved.

**`Generated`**

from enum value: VENDOR_USER_STATUS_APPROVED = 1;

#### Defined in

[src/vendors.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L314)

___

### VENDOR\_USER\_STATUS\_UNAPPROVED

• **VENDOR\_USER\_STATUS\_UNAPPROVED** = ``2``

**`Description`**

Denotes that the vendor user association is pending review and waiting for administrative approval.

**`Generated`**

from enum value: VENDOR_USER_STATUS_UNAPPROVED = 2;

#### Defined in

[src/vendors.scailo_pb.ts:321](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L321)
