[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamsServicePaginatedMessagesResponse

# Class: VendorStreamsServicePaginatedMessagesResponse

Describes the response to a pagination messages request

**`Generated`**

from message Scailo.VendorStreamsServicePaginatedMessagesResponse

## Hierarchy

- `Message`\<[`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)\>

  ↳ **`VendorStreamsServicePaginatedMessagesResponse`**

## Table of contents

### Constructors

- [constructor](VendorStreamsServicePaginatedMessagesResponse.md#constructor)

### Properties

- [count](VendorStreamsServicePaginatedMessagesResponse.md#count)
- [offset](VendorStreamsServicePaginatedMessagesResponse.md#offset)
- [payload](VendorStreamsServicePaginatedMessagesResponse.md#payload)
- [total](VendorStreamsServicePaginatedMessagesResponse.md#total)
- [fields](VendorStreamsServicePaginatedMessagesResponse.md#fields)
- [runtime](VendorStreamsServicePaginatedMessagesResponse.md#runtime)
- [typeName](VendorStreamsServicePaginatedMessagesResponse.md#typename)

### Methods

- [clone](VendorStreamsServicePaginatedMessagesResponse.md#clone)
- [equals](VendorStreamsServicePaginatedMessagesResponse.md#equals)
- [fromBinary](VendorStreamsServicePaginatedMessagesResponse.md#frombinary)
- [fromJson](VendorStreamsServicePaginatedMessagesResponse.md#fromjson)
- [fromJsonString](VendorStreamsServicePaginatedMessagesResponse.md#fromjsonstring)
- [getType](VendorStreamsServicePaginatedMessagesResponse.md#gettype)
- [toBinary](VendorStreamsServicePaginatedMessagesResponse.md#tobinary)
- [toJSON](VendorStreamsServicePaginatedMessagesResponse.md#tojson)
- [toJson](VendorStreamsServicePaginatedMessagesResponse.md#tojson-1)
- [toJsonString](VendorStreamsServicePaginatedMessagesResponse.md#tojsonstring)
- [equals](VendorStreamsServicePaginatedMessagesResponse.md#equals-1)
- [fromBinary](VendorStreamsServicePaginatedMessagesResponse.md#frombinary-1)
- [fromJson](VendorStreamsServicePaginatedMessagesResponse.md#fromjson-1)
- [fromJsonString](VendorStreamsServicePaginatedMessagesResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamsServicePaginatedMessagesResponse**(`data?`): [`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)\> |

#### Returns

[`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)

#### Overrides

Message\&lt;VendorStreamsServicePaginatedMessagesResponse\&gt;.constructor

#### Defined in

src/vendorstreams.scailo_pb.ts:1729

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/vendorstreams.scailo_pb.ts:1706

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/vendorstreams.scailo_pb.ts:1713

___

### payload

• **payload**: [`VendorStreamMessage`](VendorStreamMessage.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.VendorStreamMessage payload = 4;

#### Defined in

src/vendorstreams.scailo_pb.ts:1727

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/vendorstreams.scailo_pb.ts:1720

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendorstreams.scailo_pb.ts:1736

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendorstreams.scailo_pb.ts:1734

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamsServicePaginatedMessagesResponse"``

#### Defined in

src/vendorstreams.scailo_pb.ts:1735

## Methods

### clone

▸ **clone**(): [`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)

Create a deep copy.

#### Returns

[`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md) \| `PlainMessage`\<[`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)\>

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
| `a` | `undefined` \| [`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md) \| `PlainMessage`\<[`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)\> |
| `b` | `undefined` \| [`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md) \| `PlainMessage`\<[`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendorstreams.scailo_pb.ts:1755

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:1743

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:1747

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServicePaginatedMessagesResponse`](VendorStreamsServicePaginatedMessagesResponse.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:1751
