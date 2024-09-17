[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationResponseItemHistoryRequest

# Class: QuotationResponseItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.QuotationResponseItemHistoryRequest

## Hierarchy

- `Message`\<[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)\>

  ↳ **`QuotationResponseItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](QuotationResponseItemHistoryRequest.md#constructor)

### Properties

- [name](QuotationResponseItemHistoryRequest.md#name)
- [quotationResponseId](QuotationResponseItemHistoryRequest.md#quotationresponseid)
- [fields](QuotationResponseItemHistoryRequest.md#fields)
- [runtime](QuotationResponseItemHistoryRequest.md#runtime)
- [typeName](QuotationResponseItemHistoryRequest.md#typename)

### Methods

- [clone](QuotationResponseItemHistoryRequest.md#clone)
- [equals](QuotationResponseItemHistoryRequest.md#equals)
- [fromBinary](QuotationResponseItemHistoryRequest.md#frombinary)
- [fromJson](QuotationResponseItemHistoryRequest.md#fromjson)
- [fromJsonString](QuotationResponseItemHistoryRequest.md#fromjsonstring)
- [getType](QuotationResponseItemHistoryRequest.md#gettype)
- [toBinary](QuotationResponseItemHistoryRequest.md#tobinary)
- [toJSON](QuotationResponseItemHistoryRequest.md#tojson)
- [toJson](QuotationResponseItemHistoryRequest.md#tojson-1)
- [toJsonString](QuotationResponseItemHistoryRequest.md#tojsonstring)
- [equals](QuotationResponseItemHistoryRequest.md#equals-1)
- [fromBinary](QuotationResponseItemHistoryRequest.md#frombinary-1)
- [fromJson](QuotationResponseItemHistoryRequest.md#fromjson-1)
- [fromJsonString](QuotationResponseItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationResponseItemHistoryRequest**(`data?`): [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)\> |

#### Returns

[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Overrides

Message\&lt;QuotationResponseItemHistoryRequest\&gt;.constructor

#### Defined in

src/quotations_responses.scailo_pb.ts:1169

## Properties

### name

• **name**: `string` = `""`

Stores the name of the item

**`Generated`**

from field: string name = 11;

#### Defined in

src/quotations_responses.scailo_pb.ts:1167

___

### quotationResponseId

• **quotationResponseId**: `bigint` = `protoInt64.zero`

Stores the quotation response ID

**`Generated`**

from field: uint64 quotation_response_id = 10;

#### Defined in

src/quotations_responses.scailo_pb.ts:1160

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_responses.scailo_pb.ts:1176

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_responses.scailo_pb.ts:1174

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationResponseItemHistoryRequest"``

#### Defined in

src/quotations_responses.scailo_pb.ts:1175

## Methods

### clone

▸ **clone**(): [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md) \| `PlainMessage`\<[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md) \| `PlainMessage`\<[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md) \| `PlainMessage`\<[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_responses.scailo_pb.ts:1193

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:1181

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:1185

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationResponseItemHistoryRequest`](QuotationResponseItemHistoryRequest.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:1189
