[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsList

# Class: QuotationsRequestsList

Describes the message consisting of the list of quotations requests

**`Generated`**

from message Scailo.QuotationsRequestsList

## Hierarchy

- `Message`\<[`QuotationsRequestsList`](QuotationsRequestsList.md)\>

  ↳ **`QuotationsRequestsList`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsList.md#constructor)

### Properties

- [list](QuotationsRequestsList.md#list)
- [fields](QuotationsRequestsList.md#fields)
- [runtime](QuotationsRequestsList.md#runtime)
- [typeName](QuotationsRequestsList.md#typename)

### Methods

- [clone](QuotationsRequestsList.md#clone)
- [equals](QuotationsRequestsList.md#equals)
- [fromBinary](QuotationsRequestsList.md#frombinary)
- [fromJson](QuotationsRequestsList.md#fromjson)
- [fromJsonString](QuotationsRequestsList.md#fromjsonstring)
- [getType](QuotationsRequestsList.md#gettype)
- [toBinary](QuotationsRequestsList.md#tobinary)
- [toJSON](QuotationsRequestsList.md#tojson)
- [toJson](QuotationsRequestsList.md#tojson-1)
- [toJsonString](QuotationsRequestsList.md#tojsonstring)
- [equals](QuotationsRequestsList.md#equals-1)
- [fromBinary](QuotationsRequestsList.md#frombinary-1)
- [fromJson](QuotationsRequestsList.md#fromjson-1)
- [fromJsonString](QuotationsRequestsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsList**(`data?`): [`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsRequestsList`](QuotationsRequestsList.md)\> |

#### Returns

[`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Overrides

Message\&lt;QuotationsRequestsList\&gt;.constructor

#### Defined in

src/quotations_requests.scailo_pb.ts:1138

## Properties

### list

• **list**: [`QuotationRequest`](QuotationRequest.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.QuotationRequest list = 1;

#### Defined in

src/quotations_requests.scailo_pb.ts:1136

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_requests.scailo_pb.ts:1145

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_requests.scailo_pb.ts:1143

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsRequestsList"``

#### Defined in

src/quotations_requests.scailo_pb.ts:1144

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsList`](QuotationsRequestsList.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsList`](QuotationsRequestsList.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsList`](QuotationsRequestsList.md) \| `PlainMessage`\<[`QuotationsRequestsList`](QuotationsRequestsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsRequestsList`](QuotationsRequestsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsRequestsList`](QuotationsRequestsList.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsList`](QuotationsRequestsList.md) \| `PlainMessage`\<[`QuotationsRequestsList`](QuotationsRequestsList.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsList`](QuotationsRequestsList.md) \| `PlainMessage`\<[`QuotationsRequestsList`](QuotationsRequestsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_requests.scailo_pb.ts:1161

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1149

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1153

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsList`](QuotationsRequestsList.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1157
