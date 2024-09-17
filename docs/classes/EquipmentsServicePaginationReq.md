[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquipmentsServicePaginationReq

# Class: EquipmentsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.EquipmentsServicePaginationReq

## Hierarchy

- `Message`\<[`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)\>

  ↳ **`EquipmentsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](EquipmentsServicePaginationReq.md#constructor)

### Properties

- [count](EquipmentsServicePaginationReq.md#count)
- [isActive](EquipmentsServicePaginationReq.md#isactive)
- [offset](EquipmentsServicePaginationReq.md#offset)
- [sortKey](EquipmentsServicePaginationReq.md#sortkey)
- [sortOrder](EquipmentsServicePaginationReq.md#sortorder)
- [status](EquipmentsServicePaginationReq.md#status)
- [fields](EquipmentsServicePaginationReq.md#fields)
- [runtime](EquipmentsServicePaginationReq.md#runtime)
- [typeName](EquipmentsServicePaginationReq.md#typename)

### Methods

- [clone](EquipmentsServicePaginationReq.md#clone)
- [equals](EquipmentsServicePaginationReq.md#equals)
- [fromBinary](EquipmentsServicePaginationReq.md#frombinary)
- [fromJson](EquipmentsServicePaginationReq.md#fromjson)
- [fromJsonString](EquipmentsServicePaginationReq.md#fromjsonstring)
- [getType](EquipmentsServicePaginationReq.md#gettype)
- [toBinary](EquipmentsServicePaginationReq.md#tobinary)
- [toJSON](EquipmentsServicePaginationReq.md#tojson)
- [toJson](EquipmentsServicePaginationReq.md#tojson-1)
- [toJsonString](EquipmentsServicePaginationReq.md#tojsonstring)
- [equals](EquipmentsServicePaginationReq.md#equals-1)
- [fromBinary](EquipmentsServicePaginationReq.md#frombinary-1)
- [fromJson](EquipmentsServicePaginationReq.md#fromjson-1)
- [fromJsonString](EquipmentsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquipmentsServicePaginationReq**(`data?`): [`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)\> |

#### Returns

[`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)

#### Overrides

Message\&lt;EquipmentsServicePaginationReq\&gt;.constructor

#### Defined in

src/equipments.scailo_pb.ts:816

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/equipments.scailo_pb.ts:786

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/equipments.scailo_pb.ts:779

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/equipments.scailo_pb.ts:793

___

### sortKey

• **sortKey**: [`INVENTORY_SORT_KEY`](../enums/INVENTORY_SORT_KEY.md) = `INVENTORY_SORT_KEY.INVENTORY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;

#### Defined in

src/equipments.scailo_pb.ts:807

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/equipments.scailo_pb.ts:800

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this equipment

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 6;

#### Defined in

src/equipments.scailo_pb.ts:814

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equipments.scailo_pb.ts:823

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equipments.scailo_pb.ts:821

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquipmentsServicePaginationReq"``

#### Defined in

src/equipments.scailo_pb.ts:822

## Methods

### clone

▸ **clone**(): [`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md) \| `PlainMessage`\<[`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md) \| `PlainMessage`\<[`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md) \| `PlainMessage`\<[`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/equipments.scailo_pb.ts:844

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)

#### Defined in

src/equipments.scailo_pb.ts:832

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)

#### Defined in

src/equipments.scailo_pb.ts:836

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquipmentsServicePaginationReq`](EquipmentsServicePaginationReq.md)

#### Defined in

src/equipments.scailo_pb.ts:840
