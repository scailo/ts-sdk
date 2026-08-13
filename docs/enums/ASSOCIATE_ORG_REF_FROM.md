[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ASSOCIATE\_ORG\_REF\_FROM

# Enumeration: ASSOCIATE\_ORG\_REF\_FROM

Defines the available organizational entity types that an associate can be mapped or linked to.

This enumeration is primarily utilized across filtering workflows, search indices,
and relationship routing matrices to classify an associate's organizational alignment.

**`Generated`**

from enum Scailo.ASSOCIATE_ORG_REF_FROM

## Table of contents

### Enumeration Members

- [ASSOCIATE\_ORG\_REF\_FROM\_ANY\_UNSPECIFIED](ASSOCIATE_ORG_REF_FROM.md#associate_org_ref_from_any_unspecified)
- [ASSOCIATE\_ORG\_REF\_FROM\_CLIENT](ASSOCIATE_ORG_REF_FROM.md#associate_org_ref_from_client)
- [ASSOCIATE\_ORG\_REF\_FROM\_EMPTY](ASSOCIATE_ORG_REF_FROM.md#associate_org_ref_from_empty)
- [ASSOCIATE\_ORG\_REF\_FROM\_VENDOR](ASSOCIATE_ORG_REF_FROM.md#associate_org_ref_from_vendor)

## Enumeration Members

### ASSOCIATE\_ORG\_REF\_FROM\_ANY\_UNSPECIFIED

• **ASSOCIATE\_ORG\_REF\_FROM\_ANY\_UNSPECIFIED** = ``0``

Default fallback value. Evaluates to any or all types during broad filter queries.

This option is reserved exclusively for wide-scope search criteria and should not
be used as a permanent state value on a persisted record.

**`Generated`**

from enum value: ASSOCIATE_ORG_REF_FROM_ANY_UNSPECIFIED = 0;

#### Defined in

[src/associates.scailo_pb.ts:28](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L28)

___

### ASSOCIATE\_ORG\_REF\_FROM\_CLIENT

• **ASSOCIATE\_ORG\_REF\_FROM\_CLIENT** = ``2``

Indicates that the associate is officially linked to an external Client profile.

This mapping governs relevant customer-facing workflows, access permissions, and billing routing.

**`Generated`**

from enum value: ASSOCIATE_ORG_REF_FROM_CLIENT = 2;

#### Defined in

[src/associates.scailo_pb.ts:46](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L46)

___

### ASSOCIATE\_ORG\_REF\_FROM\_EMPTY

• **ASSOCIATE\_ORG\_REF\_FROM\_EMPTY** = ``1``

Indicates that the associate currently maintains no organizational mapping.

Use this state to locate unassigned, orphaned, or standalone associate profiles.

**`Generated`**

from enum value: ASSOCIATE_ORG_REF_FROM_EMPTY = 1;

#### Defined in

[src/associates.scailo_pb.ts:37](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L37)

___

### ASSOCIATE\_ORG\_REF\_FROM\_VENDOR

• **ASSOCIATE\_ORG\_REF\_FROM\_VENDOR** = ``3``

Indicates that the associate is officially linked to an external Vendor or Supplier profile.

This mapping governs supply chain linkages, procurement authorization, and fulfillment tracking.

**`Generated`**

from enum value: ASSOCIATE_ORG_REF_FROM_VENDOR = 3;

#### Defined in

[src/associates.scailo_pb.ts:55](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L55)
