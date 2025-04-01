[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsServicePaginationResponse

# Class: QuotationsRequestsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.QuotationsRequestsServicePaginationResponse

## Hierarchy

- `Message`\<[`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)\>

  ↳ **`QuotationsRequestsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsServicePaginationResponse.md#constructor)

### Properties

- [count](QuotationsRequestsServicePaginationResponse.md#count)
- [offset](QuotationsRequestsServicePaginationResponse.md#offset)
- [payload](QuotationsRequestsServicePaginationResponse.md#payload)
- [total](QuotationsRequestsServicePaginationResponse.md#total)
- [fields](QuotationsRequestsServicePaginationResponse.md#fields)
- [runtime](QuotationsRequestsServicePaginationResponse.md#runtime)
- [typeName](QuotationsRequestsServicePaginationResponse.md#typename)

### Methods

- [clone](QuotationsRequestsServicePaginationResponse.md#clone)
- [equals](QuotationsRequestsServicePaginationResponse.md#equals)
- [fromBinary](QuotationsRequestsServicePaginationResponse.md#frombinary)
- [fromJson](QuotationsRequestsServicePaginationResponse.md#fromjson)
- [fromJsonString](QuotationsRequestsServicePaginationResponse.md#fromjsonstring)
- [getType](QuotationsRequestsServicePaginationResponse.md#gettype)
- [toBinary](QuotationsRequestsServicePaginationResponse.md#tobinary)
- [toJSON](QuotationsRequestsServicePaginationResponse.md#tojson)
- [toJson](QuotationsRequestsServicePaginationResponse.md#tojson-1)
- [toJsonString](QuotationsRequestsServicePaginationResponse.md#tojsonstring)
- [equals](QuotationsRequestsServicePaginationResponse.md#equals-1)
- [fromBinary](QuotationsRequestsServicePaginationResponse.md#frombinary-1)
- [fromJson](QuotationsRequestsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](QuotationsRequestsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsServicePaginationResponse**(`data?`): [`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)\> |

#### Returns

[`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)

#### Overrides

Message\&lt;QuotationsRequestsServicePaginationResponse\&gt;.constructor

#### Defined in

src/quotations_requests.scailo_pb.ts:1611

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/quotations_requests.scailo_pb.ts:1588

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/quotations_requests.scailo_pb.ts:1595

___

### payload

• **payload**: [`QuotationRequest`](QuotationRequest.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.QuotationRequest payload = 4;

#### Defined in

src/quotations_requests.scailo_pb.ts:1609

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/quotations_requests.scailo_pb.ts:1602

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_requests.scailo_pb.ts:1618

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_requests.scailo_pb.ts:1616

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsRequestsServicePaginationResponse"``

#### Defined in

src/quotations_requests.scailo_pb.ts:1617

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md) \| `PlainMessage`\<[`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md) \| `PlainMessage`\<[`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md) \| `PlainMessage`\<[`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_requests.scailo_pb.ts:1637

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1625

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1629

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsServicePaginationResponse`](QuotationsRequestsServicePaginationResponse.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1633
