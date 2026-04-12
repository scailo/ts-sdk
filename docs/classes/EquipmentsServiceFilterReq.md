[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquipmentsServiceFilterReq

# Class: EquipmentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.EquipmentsServiceFilterReq

## Hierarchy

- `Message`\<[`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)\>

  ↳ **`EquipmentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](EquipmentsServiceFilterReq.md#constructor)

### Properties

- [code](EquipmentsServiceFilterReq.md#code)
- [count](EquipmentsServiceFilterReq.md#count)
- [creationTimestampEnd](EquipmentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](EquipmentsServiceFilterReq.md#creationtimestampstart)
- [discardedAtEnd](EquipmentsServiceFilterReq.md#discardedatend)
- [discardedAtStart](EquipmentsServiceFilterReq.md#discardedatstart)
- [entityUuid](EquipmentsServiceFilterReq.md#entityuuid)
- [familyId](EquipmentsServiceFilterReq.md#familyid)
- [formData](EquipmentsServiceFilterReq.md#formdata)
- [hash](EquipmentsServiceFilterReq.md#hash)
- [internalItemCode](EquipmentsServiceFilterReq.md#internalitemcode)
- [isActive](EquipmentsServiceFilterReq.md#isactive)
- [isQcReportPublic](EquipmentsServiceFilterReq.md#isqcreportpublic)
- [locationId](EquipmentsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](EquipmentsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](EquipmentsServiceFilterReq.md#modificationtimestampstart)
- [offset](EquipmentsServiceFilterReq.md#offset)
- [parentRefId](EquipmentsServiceFilterReq.md#parentrefid)
- [quantityRemainingMax](EquipmentsServiceFilterReq.md#quantityremainingmax)
- [quantityRemainingMin](EquipmentsServiceFilterReq.md#quantityremainingmin)
- [refFrom](EquipmentsServiceFilterReq.md#reffrom)
- [refId](EquipmentsServiceFilterReq.md#refid)
- [secondaryUomId](EquipmentsServiceFilterReq.md#secondaryuomid)
- [shelfLifeTimestampEnd](EquipmentsServiceFilterReq.md#shelflifetimestampend)
- [shelfLifeTimestampStart](EquipmentsServiceFilterReq.md#shelflifetimestampstart)
- [sortKey](EquipmentsServiceFilterReq.md#sortkey)
- [sortOrder](EquipmentsServiceFilterReq.md#sortorder)
- [status](EquipmentsServiceFilterReq.md#status)
- [storageId](EquipmentsServiceFilterReq.md#storageid)
- [storeId](EquipmentsServiceFilterReq.md#storeid)
- [storeIntakeAtEnd](EquipmentsServiceFilterReq.md#storeintakeatend)
- [storeIntakeAtStart](EquipmentsServiceFilterReq.md#storeintakeatstart)
- [vendorId](EquipmentsServiceFilterReq.md#vendorid)
- [warrantyTimestampEnd](EquipmentsServiceFilterReq.md#warrantytimestampend)
- [warrantyTimestampStart](EquipmentsServiceFilterReq.md#warrantytimestampstart)
- [fields](EquipmentsServiceFilterReq.md#fields)
- [runtime](EquipmentsServiceFilterReq.md#runtime)
- [typeName](EquipmentsServiceFilterReq.md#typename)

### Methods

- [clone](EquipmentsServiceFilterReq.md#clone)
- [equals](EquipmentsServiceFilterReq.md#equals)
- [fromBinary](EquipmentsServiceFilterReq.md#frombinary)
- [fromJson](EquipmentsServiceFilterReq.md#fromjson)
- [fromJsonString](EquipmentsServiceFilterReq.md#fromjsonstring)
- [getType](EquipmentsServiceFilterReq.md#gettype)
- [toBinary](EquipmentsServiceFilterReq.md#tobinary)
- [toJSON](EquipmentsServiceFilterReq.md#tojson)
- [toJson](EquipmentsServiceFilterReq.md#tojson-1)
- [toJsonString](EquipmentsServiceFilterReq.md#tojsonstring)
- [equals](EquipmentsServiceFilterReq.md#equals-1)
- [fromBinary](EquipmentsServiceFilterReq.md#frombinary-1)
- [fromJson](EquipmentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](EquipmentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquipmentsServiceFilterReq**(`data?`): [`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)\> |

#### Returns

[`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)

#### Overrides

Message\&lt;EquipmentsServiceFilterReq\&gt;.constructor

#### Defined in

[src/equipments.scailo_pb.ts:1328](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1328)

## Properties

### code

• **code**: `string` = `""`

The auto generated code of the equipment

**`Generated`**

from field: string code = 34;

#### Defined in

[src/equipments.scailo_pb.ts:1219](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1219)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/equipments.scailo_pb.ts:1031](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1031)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/equipments.scailo_pb.ts:1101](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1101)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/equipments.scailo_pb.ts:1085](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1085)

___

### discardedAtEnd

• **discardedAtEnd**: `bigint` = `protoInt64.zero`

The end range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_end = 23;

#### Defined in

[src/equipments.scailo_pb.ts:1184](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1184)

___

### discardedAtStart

• **discardedAtStart**: `bigint` = `protoInt64.zero`

The start range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_start = 22;

#### Defined in

[src/equipments.scailo_pb.ts:1177](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1177)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/equipments.scailo_pb.ts:1149](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1149)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/equipments.scailo_pb.ts:1212](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1212)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/equipments.scailo_pb.ts:1326](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1326)

___

### hash

• **hash**: `string` = `""`

The computed hash of the equipment

**`Generated`**

from field: string hash = 36;

#### Defined in

[src/equipments.scailo_pb.ts:1233](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1233)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Filter by the exact internal code

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/equipments.scailo_pb.ts:1226](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1226)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/equipments.scailo_pb.ts:1015](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1015)

___

### isQcReportPublic

• **isQcReportPublic**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if the associated QC report should be public

**`Generated`**

from field: Scailo.BOOL_FILTER is_qc_report_public = 52;

#### Defined in

[src/equipments.scailo_pb.ts:1303](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1303)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

Filter by the location ID

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/equipments.scailo_pb.ts:1310](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1310)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/equipments.scailo_pb.ts:1133](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1133)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/equipments.scailo_pb.ts:1117](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1117)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/equipments.scailo_pb.ts:1047](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1047)

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

[src/equipments.scailo_pb.ts:1191](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1191)

___

### quantityRemainingMax

• **quantityRemainingMax**: `bigint` = `protoInt64.zero`

The maximum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_max = 38;

#### Defined in

[src/equipments.scailo_pb.ts:1247](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1247)

___

### quantityRemainingMin

• **quantityRemainingMin**: `bigint` = `protoInt64.zero`

The minimum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_min = 37;

#### Defined in

[src/equipments.scailo_pb.ts:1240](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1240)

___

### refFrom

• **refFrom**: [`EQUIPMENT_REF_FROM`](../enums/EQUIPMENT_REF_FROM.md) = `EQUIPMENT_REF_FROM.EQUIPMENT_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.EQUIPMENT_REF_FROM ref_from = 31;

#### Defined in

[src/equipments.scailo_pb.ts:1198](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1198)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/equipments.scailo_pb.ts:1205](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1205)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of equipment

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/equipments.scailo_pb.ts:1254](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1254)

___

### shelfLifeTimestampEnd

• **shelfLifeTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_end = 41;

#### Defined in

[src/equipments.scailo_pb.ts:1268](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1268)

___

### shelfLifeTimestampStart

• **shelfLifeTimestampStart**: `bigint` = `protoInt64.zero`

The start range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_start = 40;

#### Defined in

[src/equipments.scailo_pb.ts:1261](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1261)

___

### sortKey

• **sortKey**: [`INVENTORY_SORT_KEY`](../enums/INVENTORY_SORT_KEY.md) = `INVENTORY_SORT_KEY.INVENTORY_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;

#### Defined in

[src/equipments.scailo_pb.ts:1069](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1069)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/equipments.scailo_pb.ts:1059](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1059)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this equipment

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 10;

#### Defined in

[src/equipments.scailo_pb.ts:1156](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1156)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the equipment is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/equipments.scailo_pb.ts:1296](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1296)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the equipment is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

[src/equipments.scailo_pb.ts:1289](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1289)

___

### storeIntakeAtEnd

• **storeIntakeAtEnd**: `bigint` = `protoInt64.zero`

The end range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_end = 21;

#### Defined in

[src/equipments.scailo_pb.ts:1170](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1170)

___

### storeIntakeAtStart

• **storeIntakeAtStart**: `bigint` = `protoInt64.zero`

The start range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_start = 20;

#### Defined in

[src/equipments.scailo_pb.ts:1163](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1163)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

Filter by the given vendor ID

--------------------------------------------------

**`Generated`**

from field: uint64 vendor_id = 81;

#### Defined in

[src/equipments.scailo_pb.ts:1319](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1319)

___

### warrantyTimestampEnd

• **warrantyTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_end = 43;

#### Defined in

[src/equipments.scailo_pb.ts:1282](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1282)

___

### warrantyTimestampStart

• **warrantyTimestampStart**: `bigint` = `protoInt64.zero`

The start range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_start = 42;

#### Defined in

[src/equipments.scailo_pb.ts:1275](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1275)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equipments.scailo_pb.ts:1335](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1335)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equipments.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1333)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquipmentsServiceFilterReq"``

#### Defined in

[src/equipments.scailo_pb.ts:1334](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1334)

## Methods

### clone

▸ **clone**(): [`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md) \| `PlainMessage`\<[`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md) \| `PlainMessage`\<[`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md) \| `PlainMessage`\<[`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equipments.scailo_pb.ts:1385](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1385)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)

#### Defined in

[src/equipments.scailo_pb.ts:1373](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1373)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)

#### Defined in

[src/equipments.scailo_pb.ts:1377](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1377)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquipmentsServiceFilterReq`](EquipmentsServiceFilterReq.md)

#### Defined in

[src/equipments.scailo_pb.ts:1381](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equipments.scailo_pb.ts#L1381)
