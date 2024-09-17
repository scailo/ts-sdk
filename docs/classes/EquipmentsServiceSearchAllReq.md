[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquipmentsServiceSearchAllReq

# Class: EquipmentsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.EquipmentsServiceSearchAllReq

## Hierarchy

- `Message`\<[`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)\>

  ↳ **`EquipmentsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](EquipmentsServiceSearchAllReq.md#constructor)

### Properties

- [count](EquipmentsServiceSearchAllReq.md#count)
- [entityUuid](EquipmentsServiceSearchAllReq.md#entityuuid)
- [familyId](EquipmentsServiceSearchAllReq.md#familyid)
- [isActive](EquipmentsServiceSearchAllReq.md#isactive)
- [isQcReportPublic](EquipmentsServiceSearchAllReq.md#isqcreportpublic)
- [offset](EquipmentsServiceSearchAllReq.md#offset)
- [parentRefId](EquipmentsServiceSearchAllReq.md#parentrefid)
- [refFrom](EquipmentsServiceSearchAllReq.md#reffrom)
- [refId](EquipmentsServiceSearchAllReq.md#refid)
- [searchKey](EquipmentsServiceSearchAllReq.md#searchkey)
- [secondaryUomId](EquipmentsServiceSearchAllReq.md#secondaryuomid)
- [sortKey](EquipmentsServiceSearchAllReq.md#sortkey)
- [sortOrder](EquipmentsServiceSearchAllReq.md#sortorder)
- [status](EquipmentsServiceSearchAllReq.md#status)
- [storageId](EquipmentsServiceSearchAllReq.md#storageid)
- [storeId](EquipmentsServiceSearchAllReq.md#storeid)
- [fields](EquipmentsServiceSearchAllReq.md#fields)
- [runtime](EquipmentsServiceSearchAllReq.md#runtime)
- [typeName](EquipmentsServiceSearchAllReq.md#typename)

### Methods

- [clone](EquipmentsServiceSearchAllReq.md#clone)
- [equals](EquipmentsServiceSearchAllReq.md#equals)
- [fromBinary](EquipmentsServiceSearchAllReq.md#frombinary)
- [fromJson](EquipmentsServiceSearchAllReq.md#fromjson)
- [fromJsonString](EquipmentsServiceSearchAllReq.md#fromjsonstring)
- [getType](EquipmentsServiceSearchAllReq.md#gettype)
- [toBinary](EquipmentsServiceSearchAllReq.md#tobinary)
- [toJSON](EquipmentsServiceSearchAllReq.md#tojson)
- [toJson](EquipmentsServiceSearchAllReq.md#tojson-1)
- [toJsonString](EquipmentsServiceSearchAllReq.md#tojsonstring)
- [equals](EquipmentsServiceSearchAllReq.md#equals-1)
- [fromBinary](EquipmentsServiceSearchAllReq.md#frombinary-1)
- [fromJson](EquipmentsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](EquipmentsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquipmentsServiceSearchAllReq**(`data?`): [`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)\> |

#### Returns

[`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)

#### Overrides

Message\&lt;EquipmentsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/equipments.scailo_pb.ts:1618

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/equipments.scailo_pb.ts:1518

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/equipments.scailo_pb.ts:1546

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

src/equipments.scailo_pb.ts:1588

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/equipments.scailo_pb.ts:1511

___

### isQcReportPublic

• **isQcReportPublic**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if the associated QC report should be public

**`Generated`**

from field: Scailo.BOOL_FILTER is_qc_report_public = 52;

#### Defined in

src/equipments.scailo_pb.ts:1616

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/equipments.scailo_pb.ts:1525

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

src/equipments.scailo_pb.ts:1567

___

### refFrom

• **refFrom**: [`EQUIPMENT_REF_FROM`](../enums/EQUIPMENT_REF_FROM.md) = `EQUIPMENT_REF_FROM.EQUIPMENT_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.EQUIPMENT_REF_FROM ref_from = 31;

#### Defined in

src/equipments.scailo_pb.ts:1574

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

src/equipments.scailo_pb.ts:1581

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/equipments.scailo_pb.ts:1560

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of equipment

**`Generated`**

from field: uint64 secondary_uom_id = 38;

#### Defined in

src/equipments.scailo_pb.ts:1595

___

### sortKey

• **sortKey**: [`INVENTORY_SORT_KEY`](../enums/INVENTORY_SORT_KEY.md) = `INVENTORY_SORT_KEY.INVENTORY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;

#### Defined in

src/equipments.scailo_pb.ts:1539

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/equipments.scailo_pb.ts:1532

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 10;

#### Defined in

src/equipments.scailo_pb.ts:1553

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the equipment is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

src/equipments.scailo_pb.ts:1609

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the equipment is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

src/equipments.scailo_pb.ts:1602

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equipments.scailo_pb.ts:1625

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equipments.scailo_pb.ts:1623

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquipmentsServiceSearchAllReq"``

#### Defined in

src/equipments.scailo_pb.ts:1624

## Methods

### clone

▸ **clone**(): [`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md) \| `PlainMessage`\<[`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md) \| `PlainMessage`\<[`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md) \| `PlainMessage`\<[`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/equipments.scailo_pb.ts:1656

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)

#### Defined in

src/equipments.scailo_pb.ts:1644

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)

#### Defined in

src/equipments.scailo_pb.ts:1648

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquipmentsServiceSearchAllReq`](EquipmentsServiceSearchAllReq.md)

#### Defined in

src/equipments.scailo_pb.ts:1652
