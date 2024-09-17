[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSamplesServiceSearchAllReq

# Class: QCSamplesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.QCSamplesServiceSearchAllReq

## Hierarchy

- `Message`\<[`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)\>

  ↳ **`QCSamplesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](QCSamplesServiceSearchAllReq.md#constructor)

### Properties

- [count](QCSamplesServiceSearchAllReq.md#count)
- [entityUuid](QCSamplesServiceSearchAllReq.md#entityuuid)
- [familyId](QCSamplesServiceSearchAllReq.md#familyid)
- [familyType](QCSamplesServiceSearchAllReq.md#familytype)
- [inventoryItemUuid](QCSamplesServiceSearchAllReq.md#inventoryitemuuid)
- [isActive](QCSamplesServiceSearchAllReq.md#isactive)
- [offset](QCSamplesServiceSearchAllReq.md#offset)
- [qcGroupId](QCSamplesServiceSearchAllReq.md#qcgroupid)
- [searchKey](QCSamplesServiceSearchAllReq.md#searchkey)
- [sortKey](QCSamplesServiceSearchAllReq.md#sortkey)
- [sortOrder](QCSamplesServiceSearchAllReq.md#sortorder)
- [status](QCSamplesServiceSearchAllReq.md#status)
- [fields](QCSamplesServiceSearchAllReq.md#fields)
- [runtime](QCSamplesServiceSearchAllReq.md#runtime)
- [typeName](QCSamplesServiceSearchAllReq.md#typename)

### Methods

- [clone](QCSamplesServiceSearchAllReq.md#clone)
- [equals](QCSamplesServiceSearchAllReq.md#equals)
- [fromBinary](QCSamplesServiceSearchAllReq.md#frombinary)
- [fromJson](QCSamplesServiceSearchAllReq.md#fromjson)
- [fromJsonString](QCSamplesServiceSearchAllReq.md#fromjsonstring)
- [getType](QCSamplesServiceSearchAllReq.md#gettype)
- [toBinary](QCSamplesServiceSearchAllReq.md#tobinary)
- [toJSON](QCSamplesServiceSearchAllReq.md#tojson)
- [toJson](QCSamplesServiceSearchAllReq.md#tojson-1)
- [toJsonString](QCSamplesServiceSearchAllReq.md#tojsonstring)
- [equals](QCSamplesServiceSearchAllReq.md#equals-1)
- [fromBinary](QCSamplesServiceSearchAllReq.md#frombinary-1)
- [fromJson](QCSamplesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](QCSamplesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSamplesServiceSearchAllReq**(`data?`): [`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)\> |

#### Returns

[`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)

#### Overrides

Message\&lt;QCSamplesServiceSearchAllReq\&gt;.constructor

#### Defined in

src/qc_samples.scailo_pb.ts:1497

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/qc_samples.scailo_pb.ts:1425

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/qc_samples.scailo_pb.ts:1453

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: uint64 family_id = 18;

#### Defined in

src/qc_samples.scailo_pb.ts:1481

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

The associated family type

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 17;

#### Defined in

src/qc_samples.scailo_pb.ts:1474

___

### inventoryItemUuid

• **inventoryItemUuid**: `string` = `""`

The UUID of the inventory item

**`Generated`**

from field: string inventory_item_uuid = 20;

#### Defined in

src/qc_samples.scailo_pb.ts:1495

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/qc_samples.scailo_pb.ts:1418

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/qc_samples.scailo_pb.ts:1432

___

### qcGroupId

• **qcGroupId**: `bigint` = `protoInt64.zero`

The ID of the qc group

**`Generated`**

from field: uint64 qc_group_id = 19;

#### Defined in

src/qc_samples.scailo_pb.ts:1488

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/qc_samples.scailo_pb.ts:1467

___

### sortKey

• **sortKey**: [`QC_SAMPLE_SORT_KEY`](../enums/QC_SAMPLE_SORT_KEY.md) = `QC_SAMPLE_SORT_KEY.QC_SAMPLE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.QC_SAMPLE_SORT_KEY sort_key = 5;

#### Defined in

src/qc_samples.scailo_pb.ts:1446

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/qc_samples.scailo_pb.ts:1439

___

### status

• **status**: [`QC_SAMPLE_LIFECYCLE`](../enums/QC_SAMPLE_LIFECYCLE.md) = `QC_SAMPLE_LIFECYCLE.QC_SAMPLE_LIFECYCLE_ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.QC_SAMPLE_LIFECYCLE status = 10;

#### Defined in

src/qc_samples.scailo_pb.ts:1460

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_samples.scailo_pb.ts:1504

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_samples.scailo_pb.ts:1502

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSamplesServiceSearchAllReq"``

#### Defined in

src/qc_samples.scailo_pb.ts:1503

## Methods

### clone

▸ **clone**(): [`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md) \| `PlainMessage`\<[`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md) \| `PlainMessage`\<[`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md) \| `PlainMessage`\<[`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_samples.scailo_pb.ts:1531

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)

#### Defined in

src/qc_samples.scailo_pb.ts:1519

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)

#### Defined in

src/qc_samples.scailo_pb.ts:1523

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServiceSearchAllReq`](QCSamplesServiceSearchAllReq.md)

#### Defined in

src/qc_samples.scailo_pb.ts:1527
