[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / USER\_TYPE

# Enumeration: USER\_TYPE

Enum defining the primary account classifications and systemic access types for users on the platform.

**`Generated`**

from enum Scailo.USER_TYPE

## Table of contents

### Enumeration Members

- [USER\_TYPE\_ANY\_UNSPECIFIED](USER_TYPE.md#user_type_any_unspecified)
- [USER\_TYPE\_CLIENT](USER_TYPE.md#user_type_client)
- [USER\_TYPE\_EMPLOYEE](USER_TYPE.md#user_type_employee)
- [USER\_TYPE\_VENDOR](USER_TYPE.md#user_type_vendor)

## Enumeration Members

### USER\_TYPE\_ANY\_UNSPECIFIED

• **USER\_TYPE\_ANY\_UNSPECIFIED** = ``0``

**`Description`**

Denotes that the user type filter should be disregarded. Used exclusively within search APIs to bypass classification restrictions.

**`Generated`**

from enum value: USER_TYPE_ANY_UNSPECIFIED = 0;

#### Defined in

[src/users.scailo_pb.ts:24](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L24)

___

### USER\_TYPE\_CLIENT

• **USER\_TYPE\_CLIENT** = ``2``

**`Description`**

Denotes an external client user mapping linked directly to a client organization or billing profile.

**`Generated`**

from enum value: USER_TYPE_CLIENT = 2;

#### Defined in

[src/users.scailo_pb.ts:40](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L40)

___

### USER\_TYPE\_EMPLOYEE

• **USER\_TYPE\_EMPLOYEE** = ``1``

**`Description`**

Denotes an internal employee lifecycle record bound to corporate attendance, shift scheduling, and payroll.

**`Generated`**

from enum value: USER_TYPE_EMPLOYEE = 1;

#### Defined in

[src/users.scailo_pb.ts:32](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L32)

___

### USER\_TYPE\_VENDOR

• **USER\_TYPE\_VENDOR** = ``3``

**`Description`**

Denotes an external vendor contact profile linked to supply chain logistics or procurement tracking.

**`Generated`**

from enum value: USER_TYPE_VENDOR = 3;

#### Defined in

[src/users.scailo_pb.ts:48](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/users.scailo_pb.ts#L48)
