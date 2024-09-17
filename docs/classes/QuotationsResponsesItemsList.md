[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesItemsList

# Class: QuotationsResponsesItemsList

Describes the message consisting of the list of quotation response items

**`Generated`**

from message Scailo.QuotationsResponsesItemsList

## Hierarchy

- `Message`\<[`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)\>

  ↳ **`QuotationsResponsesItemsList`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesItemsList.md#constructor)

### Properties

- [list](QuotationsResponsesItemsList.md#list)
- [fields](QuotationsResponsesItemsList.md#fields)
- [runtime](QuotationsResponsesItemsList.md#runtime)
- [typeName](QuotationsResponsesItemsList.md#typename)

### Methods

- [clone](QuotationsResponsesItemsList.md#clone)
- [equals](QuotationsResponsesItemsList.md#equals)
- [fromBinary](QuotationsResponsesItemsList.md#frombinary)
- [fromJson](QuotationsResponsesItemsList.md#fromjson)
- [fromJsonString](QuotationsResponsesItemsList.md#fromjsonstring)
- [getType](QuotationsResponsesItemsList.md#gettype)
- [toBinary](QuotationsResponsesItemsList.md#tobinary)
- [toJSON](QuotationsResponsesItemsList.md#tojson)
- [toJson](QuotationsResponsesItemsList.md#tojson-1)
- [toJsonString](QuotationsResponsesItemsList.md#tojsonstring)
- [equals](QuotationsResponsesItemsList.md#equals-1)
- [fromBinary](QuotationsResponsesItemsList.md#frombinary-1)
- [fromJson](QuotationsResponsesItemsList.md#fromjson-1)
- [fromJsonString](QuotationsResponsesItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesItemsList**(`data?`): [`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)\> |

#### Returns

[`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)

#### Overrides

Message\&lt;QuotationsResponsesItemsList\&gt;.constructor

#### Defined in

src/quotations_responses.scailo_pb.ts:1120

## Properties

### list

• **list**: [`QuotationResponseItem`](QuotationResponseItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.QuotationResponseItem list = 1;

#### Defined in

src/quotations_responses.scailo_pb.ts:1118

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_responses.scailo_pb.ts:1127

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_responses.scailo_pb.ts:1125

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsResponsesItemsList"``

#### Defined in

src/quotations_responses.scailo_pb.ts:1126

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md) \| `PlainMessage`\<[`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md) \| `PlainMessage`\<[`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md) \| `PlainMessage`\<[`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_responses.scailo_pb.ts:1143

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:1131

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:1135

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesItemsList`](QuotationsResponsesItemsList.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:1139
