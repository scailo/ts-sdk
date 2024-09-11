[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamMessageReceiptsList

# Class: GeneralStreamMessageReceiptsList

Describes the message consisting of the list of general stream message receipts

**`Generated`**

from message Scailo.GeneralStreamMessageReceiptsList

## Hierarchy

- `Message`\<[`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)\>

  ↳ **`GeneralStreamMessageReceiptsList`**

## Table of contents

### Constructors

- [constructor](GeneralStreamMessageReceiptsList.md#constructor)

### Properties

- [list](GeneralStreamMessageReceiptsList.md#list)
- [fields](GeneralStreamMessageReceiptsList.md#fields)
- [runtime](GeneralStreamMessageReceiptsList.md#runtime)
- [typeName](GeneralStreamMessageReceiptsList.md#typename)

### Methods

- [clone](GeneralStreamMessageReceiptsList.md#clone)
- [equals](GeneralStreamMessageReceiptsList.md#equals)
- [fromBinary](GeneralStreamMessageReceiptsList.md#frombinary)
- [fromJson](GeneralStreamMessageReceiptsList.md#fromjson)
- [fromJsonString](GeneralStreamMessageReceiptsList.md#fromjsonstring)
- [getType](GeneralStreamMessageReceiptsList.md#gettype)
- [toBinary](GeneralStreamMessageReceiptsList.md#tobinary)
- [toJSON](GeneralStreamMessageReceiptsList.md#tojson)
- [toJson](GeneralStreamMessageReceiptsList.md#tojson-1)
- [toJsonString](GeneralStreamMessageReceiptsList.md#tojsonstring)
- [equals](GeneralStreamMessageReceiptsList.md#equals-1)
- [fromBinary](GeneralStreamMessageReceiptsList.md#frombinary-1)
- [fromJson](GeneralStreamMessageReceiptsList.md#fromjson-1)
- [fromJsonString](GeneralStreamMessageReceiptsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamMessageReceiptsList**(`data?`): [`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)\> |

#### Returns

[`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)

#### Overrides

Message\&lt;GeneralStreamMessageReceiptsList\&gt;.constructor

#### Defined in

src/generalstreams.scailo_pb.ts:1612

## Properties

### list

• **list**: [`GeneralStreamMessageReceipt`](GeneralStreamMessageReceipt.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.GeneralStreamMessageReceipt list = 1;

#### Defined in

src/generalstreams.scailo_pb.ts:1610

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/generalstreams.scailo_pb.ts:1619

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/generalstreams.scailo_pb.ts:1617

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamMessageReceiptsList"``

#### Defined in

src/generalstreams.scailo_pb.ts:1618

## Methods

### clone

▸ **clone**(): [`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)

Create a deep copy.

#### Returns

[`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md) \| `PlainMessage`\<[`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)\>

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
| `a` | `undefined` \| [`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md) \| `PlainMessage`\<[`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)\> |
| `b` | `undefined` \| [`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md) \| `PlainMessage`\<[`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/generalstreams.scailo_pb.ts:1635

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1623

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1627

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamMessageReceiptsList`](GeneralStreamMessageReceiptsList.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1631
