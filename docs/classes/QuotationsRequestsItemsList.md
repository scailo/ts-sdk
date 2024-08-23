[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsRequestsItemsList

# Class: QuotationsRequestsItemsList

Describes the message consisting of the list of quotation request items

**`Generated`**

from message Scailo.QuotationsRequestsItemsList

## Hierarchy

- `Message`\<[`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)\>

  ↳ **`QuotationsRequestsItemsList`**

## Table of contents

### Constructors

- [constructor](QuotationsRequestsItemsList.md#constructor)

### Properties

- [list](QuotationsRequestsItemsList.md#list)
- [fields](QuotationsRequestsItemsList.md#fields)
- [runtime](QuotationsRequestsItemsList.md#runtime)
- [typeName](QuotationsRequestsItemsList.md#typename)

### Methods

- [clone](QuotationsRequestsItemsList.md#clone)
- [equals](QuotationsRequestsItemsList.md#equals)
- [fromBinary](QuotationsRequestsItemsList.md#frombinary)
- [fromJson](QuotationsRequestsItemsList.md#fromjson)
- [fromJsonString](QuotationsRequestsItemsList.md#fromjsonstring)
- [getType](QuotationsRequestsItemsList.md#gettype)
- [toBinary](QuotationsRequestsItemsList.md#tobinary)
- [toJSON](QuotationsRequestsItemsList.md#tojson)
- [toJson](QuotationsRequestsItemsList.md#tojson-1)
- [toJsonString](QuotationsRequestsItemsList.md#tojsonstring)
- [equals](QuotationsRequestsItemsList.md#equals-1)
- [fromBinary](QuotationsRequestsItemsList.md#frombinary-1)
- [fromJson](QuotationsRequestsItemsList.md#fromjson-1)
- [fromJsonString](QuotationsRequestsItemsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsRequestsItemsList**(`data?`): [`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)\> |

#### Returns

[`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)

#### Overrides

Message\&lt;QuotationsRequestsItemsList\&gt;.constructor

#### Defined in

src/quotations_requests.scailo_pb.ts:1122

## Properties

### list

• **list**: [`QuotationRequestItem`](QuotationRequestItem.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.QuotationRequestItem list = 1;

#### Defined in

src/quotations_requests.scailo_pb.ts:1120

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_requests.scailo_pb.ts:1129

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_requests.scailo_pb.ts:1127

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsRequestsItemsList"``

#### Defined in

src/quotations_requests.scailo_pb.ts:1128

## Methods

### clone

▸ **clone**(): [`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)

Create a deep copy.

#### Returns

[`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md) \| `PlainMessage`\<[`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)\>

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
| `a` | `undefined` \| [`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md) \| `PlainMessage`\<[`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)\> |
| `b` | `undefined` \| [`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md) \| `PlainMessage`\<[`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_requests.scailo_pb.ts:1145

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1133

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1137

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsRequestsItemsList`](QuotationsRequestsItemsList.md)

#### Defined in

src/quotations_requests.scailo_pb.ts:1141
