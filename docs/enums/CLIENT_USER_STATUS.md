[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CLIENT\_USER\_STATUS

# Enumeration: CLIENT\_USER\_STATUS

Enum defining the applicable lifecycle and verification statuses for client users.

**`Generated`**

from enum Scailo.CLIENT_USER_STATUS

## Table of contents

### Enumeration Members

- [CLIENT\_USER\_STATUS\_ANY\_UNSPECIFIED](CLIENT_USER_STATUS.md#client_user_status_any_unspecified)
- [CLIENT\_USER\_STATUS\_APPROVED](CLIENT_USER_STATUS.md#client_user_status_approved)
- [CLIENT\_USER\_STATUS\_UNAPPROVED](CLIENT_USER_STATUS.md#client_user_status_unapproved)

## Enumeration Members

### CLIENT\_USER\_STATUS\_ANY\_UNSPECIFIED

• **CLIENT\_USER\_STATUS\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Denotes that the status filter should be disregarded. Used exclusively within search APIs to bypass status restrictions.

**`Generated`**

from enum value: CLIENT_USER_STATUS_ANY_UNSPECIFIED = 0;

#### Defined in

[src/clients.scailo_pb.ts:114](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L114)

___

### CLIENT\_USER\_STATUS\_APPROVED

• **CLIENT\_USER\_STATUS\_APPROVED** = ``1``

**`Description`**

Denotes that the client user association has passed verification and is actively approved.

**`Generated`**

from enum value: CLIENT_USER_STATUS_APPROVED = 1;

#### Defined in

[src/clients.scailo_pb.ts:121](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L121)

___

### CLIENT\_USER\_STATUS\_UNAPPROVED

• **CLIENT\_USER\_STATUS\_UNAPPROVED** = ``2``

**`Description`**

Denotes that the client user association is pending review and waiting for administrative approval.

**`Generated`**

from enum value: CLIENT_USER_STATUS_UNAPPROVED = 2;

#### Defined in

[src/clients.scailo_pb.ts:128](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L128)
