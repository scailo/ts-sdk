[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationRequestItemHistoryRequest

# Class: QuotationRequestItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.QuotationRequestItemHistoryRequest

## Hierarchy

- `Message`\<[`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)\>

  ↳ **`QuotationRequestItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](QuotationRequestItemHistoryRequest.md#constructor)

### Properties

- [name](QuotationRequestItemHistoryRequest.md#name)
- [quotationRequestId](QuotationRequestItemHistoryRequest.md#quotationrequestid)
- [fields](QuotationRequestItemHistoryRequest.md#fields)
- [runtime](QuotationRequestItemHistoryRequest.md#runtime)
- [typeName](QuotationRequestItemHistoryRequest.md#typename)

### Methods

- [clone](QuotationRequestItemHistoryRequest.md#clone)
- [equals](QuotationRequestItemHistoryRequest.md#equals)
- [fromBinary](QuotationRequestItemHistoryRequest.md#frombinary)
- [fromJson](QuotationRequestItemHistoryRequest.md#fromjson)
- [fromJsonString](QuotationRequestItemHistoryRequest.md#fromjsonstring)
- [getType](QuotationRequestItemHistoryRequest.md#gettype)
- [toBinary](QuotationRequestItemHistoryRequest.md#tobinary)
- [toJSON](QuotationRequestItemHistoryRequest.md#tojson)
- [toJson](QuotationRequestItemHistoryRequest.md#tojson-1)
- [toJsonString](QuotationRequestItemHistoryRequest.md#tojsonstring)
- [equals](QuotationRequestItemHistoryRequest.md#equals-1)
- [fromBinary](QuotationRequestItemHistoryRequest.md#frombinary-1)
- [fromJson](QuotationRequestItemHistoryRequest.md#fromjson-1)
- [fromJsonString](QuotationRequestItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationRequestItemHistoryRequest**(`data?`): [`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)\> |

#### Returns

[`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)

#### Overrides

Message\&lt;QuotationRequestItemHistoryRequest\&gt;.constructor

#### Defined in

src/quotations_requests.scailo_pb.ts:1171

## Properties

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

src/quotations_requests.scailo_pb.ts:1169

___

### quotationRequestId

• **quotationRequestId**: `bigint` = `protoInt64.zero`

Stores the quotation request ID

**`Generated`**

from field: uint64 quotation_request_id = 10;

#### Defined in

src/quotations_requests.scailo_pb.ts:1162

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_requests.scailo_pb.ts:1178

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_requests.scailo_pb.ts:1176

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationRequestItemHistoryRequest"``

#### Defined in

src/quotations_requests.scailo_pb.ts:1177

## Methods

### clone

▸ **clone**(): [`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md) \| `PlainMessage`\<[`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md) \| `PlainMessage`\<[`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md) \| `PlainMessage`\<[`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_requests.scailo_pb.ts:1195

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1183

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1187

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationRequestItemHistoryRequest`](QuotationRequestItemHistoryRequest.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1191
