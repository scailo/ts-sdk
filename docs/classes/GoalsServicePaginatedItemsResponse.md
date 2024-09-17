[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoalsServicePaginatedItemsResponse

# Class: GoalsServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.GoalsServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)\>

  ↳ **`GoalsServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](GoalsServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](GoalsServicePaginatedItemsResponse.md#count)
- [offset](GoalsServicePaginatedItemsResponse.md#offset)
- [payload](GoalsServicePaginatedItemsResponse.md#payload)
- [total](GoalsServicePaginatedItemsResponse.md#total)
- [fields](GoalsServicePaginatedItemsResponse.md#fields)
- [runtime](GoalsServicePaginatedItemsResponse.md#runtime)
- [typeName](GoalsServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](GoalsServicePaginatedItemsResponse.md#clone)
- [equals](GoalsServicePaginatedItemsResponse.md#equals)
- [fromBinary](GoalsServicePaginatedItemsResponse.md#frombinary)
- [fromJson](GoalsServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](GoalsServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](GoalsServicePaginatedItemsResponse.md#gettype)
- [toBinary](GoalsServicePaginatedItemsResponse.md#tobinary)
- [toJSON](GoalsServicePaginatedItemsResponse.md#tojson)
- [toJson](GoalsServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](GoalsServicePaginatedItemsResponse.md#tojsonstring)
- [equals](GoalsServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](GoalsServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](GoalsServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](GoalsServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServicePaginatedItemsResponse**(`data?`): [`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)\> |

#### Returns

[`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;GoalsServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

src/goals.scailo_pb.ts:1318

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/goals.scailo_pb.ts:1295

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/goals.scailo_pb.ts:1302

___

### payload

• **payload**: [`GoalItem`](GoalItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.GoalItem payload = 4;

#### Defined in

src/goals.scailo_pb.ts:1316

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/goals.scailo_pb.ts:1309

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/goals.scailo_pb.ts:1325

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/goals.scailo_pb.ts:1323

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoalsServicePaginatedItemsResponse"``

#### Defined in

src/goals.scailo_pb.ts:1324

## Methods

### clone

▸ **clone**(): [`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/goals.scailo_pb.ts:1344

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)

#### Defined in

src/goals.scailo_pb.ts:1332

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)

#### Defined in

src/goals.scailo_pb.ts:1336

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServicePaginatedItemsResponse`](GoalsServicePaginatedItemsResponse.md)

#### Defined in

src/goals.scailo_pb.ts:1340
