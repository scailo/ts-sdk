[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReturnsServicePaginatedItemsResponse

# Class: SalesReturnsServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.SalesReturnsServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)\>

  ↳ **`SalesReturnsServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](SalesReturnsServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](SalesReturnsServicePaginatedItemsResponse.md#count)
- [offset](SalesReturnsServicePaginatedItemsResponse.md#offset)
- [payload](SalesReturnsServicePaginatedItemsResponse.md#payload)
- [total](SalesReturnsServicePaginatedItemsResponse.md#total)
- [fields](SalesReturnsServicePaginatedItemsResponse.md#fields)
- [runtime](SalesReturnsServicePaginatedItemsResponse.md#runtime)
- [typeName](SalesReturnsServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](SalesReturnsServicePaginatedItemsResponse.md#clone)
- [equals](SalesReturnsServicePaginatedItemsResponse.md#equals)
- [fromBinary](SalesReturnsServicePaginatedItemsResponse.md#frombinary)
- [fromJson](SalesReturnsServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](SalesReturnsServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](SalesReturnsServicePaginatedItemsResponse.md#gettype)
- [toBinary](SalesReturnsServicePaginatedItemsResponse.md#tobinary)
- [toJSON](SalesReturnsServicePaginatedItemsResponse.md#tojson)
- [toJson](SalesReturnsServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](SalesReturnsServicePaginatedItemsResponse.md#tojsonstring)
- [equals](SalesReturnsServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](SalesReturnsServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](SalesReturnsServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](SalesReturnsServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReturnsServicePaginatedItemsResponse**(`data?`): [`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)\> |

#### Returns

[`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;SalesReturnsServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

src/sales_returns.scailo_pb.ts:1256

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/sales_returns.scailo_pb.ts:1233

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/sales_returns.scailo_pb.ts:1240

___

### payload

• **payload**: [`SalesReturnItem`](SalesReturnItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.SalesReturnItem payload = 4;

#### Defined in

src/sales_returns.scailo_pb.ts:1254

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/sales_returns.scailo_pb.ts:1247

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/sales_returns.scailo_pb.ts:1263

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/sales_returns.scailo_pb.ts:1261

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReturnsServicePaginatedItemsResponse"``

#### Defined in

src/sales_returns.scailo_pb.ts:1262

## Methods

### clone

▸ **clone**(): [`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/sales_returns.scailo_pb.ts:1282

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)

#### Defined in

src/sales_returns.scailo_pb.ts:1270

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)

#### Defined in

src/sales_returns.scailo_pb.ts:1274

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReturnsServicePaginatedItemsResponse`](SalesReturnsServicePaginatedItemsResponse.md)

#### Defined in

src/sales_returns.scailo_pb.ts:1278
