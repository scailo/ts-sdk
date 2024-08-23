[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / MerchandisesServicePaginationReq

# Class: MerchandisesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.MerchandisesServicePaginationReq

## Hierarchy

- `Message`\<[`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)\>

  ↳ **`MerchandisesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](MerchandisesServicePaginationReq.md#constructor)

### Properties

- [count](MerchandisesServicePaginationReq.md#count)
- [isActive](MerchandisesServicePaginationReq.md#isactive)
- [offset](MerchandisesServicePaginationReq.md#offset)
- [sortKey](MerchandisesServicePaginationReq.md#sortkey)
- [sortOrder](MerchandisesServicePaginationReq.md#sortorder)
- [status](MerchandisesServicePaginationReq.md#status)
- [fields](MerchandisesServicePaginationReq.md#fields)
- [runtime](MerchandisesServicePaginationReq.md#runtime)
- [typeName](MerchandisesServicePaginationReq.md#typename)

### Methods

- [clone](MerchandisesServicePaginationReq.md#clone)
- [equals](MerchandisesServicePaginationReq.md#equals)
- [fromBinary](MerchandisesServicePaginationReq.md#frombinary)
- [fromJson](MerchandisesServicePaginationReq.md#fromjson)
- [fromJsonString](MerchandisesServicePaginationReq.md#fromjsonstring)
- [getType](MerchandisesServicePaginationReq.md#gettype)
- [toBinary](MerchandisesServicePaginationReq.md#tobinary)
- [toJSON](MerchandisesServicePaginationReq.md#tojson)
- [toJson](MerchandisesServicePaginationReq.md#tojson-1)
- [toJsonString](MerchandisesServicePaginationReq.md#tojsonstring)
- [equals](MerchandisesServicePaginationReq.md#equals-1)
- [fromBinary](MerchandisesServicePaginationReq.md#frombinary-1)
- [fromJson](MerchandisesServicePaginationReq.md#fromjson-1)
- [fromJsonString](MerchandisesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new MerchandisesServicePaginationReq**(`data?`): [`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)\> |

#### Returns

[`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)

#### Overrides

Message\&lt;MerchandisesServicePaginationReq\&gt;.constructor

#### Defined in

src/merchandises.scailo_pb.ts:816

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/merchandises.scailo_pb.ts:786

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/merchandises.scailo_pb.ts:779

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/merchandises.scailo_pb.ts:793

___

### sortKey

• **sortKey**: [`INVENTORY_SORT_KEY`](../enums/INVENTORY_SORT_KEY.md) = `INVENTORY_SORT_KEY.INVENTORY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;

#### Defined in

src/merchandises.scailo_pb.ts:807

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/merchandises.scailo_pb.ts:800

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this merchandise

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 6;

#### Defined in

src/merchandises.scailo_pb.ts:814

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/merchandises.scailo_pb.ts:823

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/merchandises.scailo_pb.ts:821

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MerchandisesServicePaginationReq"``

#### Defined in

src/merchandises.scailo_pb.ts:822

## Methods

### clone

▸ **clone**(): [`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md) \| `PlainMessage`\<[`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md) \| `PlainMessage`\<[`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md) \| `PlainMessage`\<[`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/merchandises.scailo_pb.ts:844

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)

#### Defined in

src/merchandises.scailo_pb.ts:832

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)

#### Defined in

src/merchandises.scailo_pb.ts:836

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MerchandisesServicePaginationReq`](MerchandisesServicePaginationReq.md)

#### Defined in

src/merchandises.scailo_pb.ts:840
