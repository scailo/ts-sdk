[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GeneralStreamMessagesList

# Class: GeneralStreamMessagesList

Describes the message consisting of the list of general stream messages

**`Generated`**

from message Scailo.GeneralStreamMessagesList

## Hierarchy

- `Message`\<[`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)\>

  ↳ **`GeneralStreamMessagesList`**

## Table of contents

### Constructors

- [constructor](GeneralStreamMessagesList.md#constructor)

### Properties

- [list](GeneralStreamMessagesList.md#list)
- [fields](GeneralStreamMessagesList.md#fields)
- [runtime](GeneralStreamMessagesList.md#runtime)
- [typeName](GeneralStreamMessagesList.md#typename)

### Methods

- [clone](GeneralStreamMessagesList.md#clone)
- [equals](GeneralStreamMessagesList.md#equals)
- [fromBinary](GeneralStreamMessagesList.md#frombinary)
- [fromJson](GeneralStreamMessagesList.md#fromjson)
- [fromJsonString](GeneralStreamMessagesList.md#fromjsonstring)
- [getType](GeneralStreamMessagesList.md#gettype)
- [toBinary](GeneralStreamMessagesList.md#tobinary)
- [toJSON](GeneralStreamMessagesList.md#tojson)
- [toJson](GeneralStreamMessagesList.md#tojson-1)
- [toJsonString](GeneralStreamMessagesList.md#tojsonstring)
- [equals](GeneralStreamMessagesList.md#equals-1)
- [fromBinary](GeneralStreamMessagesList.md#frombinary-1)
- [fromJson](GeneralStreamMessagesList.md#fromjson-1)
- [fromJsonString](GeneralStreamMessagesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new GeneralStreamMessagesList**(`data?`): [`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)\> |

#### Returns

[`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)

#### Overrides

Message\&lt;GeneralStreamMessagesList\&gt;.constructor

#### Defined in

src/generalstreams.scailo_pb.ts:1324

## Properties

### list

• **list**: [`GeneralStreamMessage`](GeneralStreamMessage.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.GeneralStreamMessage list = 1;

#### Defined in

src/generalstreams.scailo_pb.ts:1322

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/generalstreams.scailo_pb.ts:1331

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/generalstreams.scailo_pb.ts:1329

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GeneralStreamMessagesList"``

#### Defined in

src/generalstreams.scailo_pb.ts:1330

## Methods

### clone

▸ **clone**(): [`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)

Create a deep copy.

#### Returns

[`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)

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
| `other` | `undefined` \| ``null`` \| [`GeneralStreamMessagesList`](GeneralStreamMessagesList.md) \| `PlainMessage`\<[`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)\>

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
| `a` | `undefined` \| [`GeneralStreamMessagesList`](GeneralStreamMessagesList.md) \| `PlainMessage`\<[`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)\> |
| `b` | `undefined` \| [`GeneralStreamMessagesList`](GeneralStreamMessagesList.md) \| `PlainMessage`\<[`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/generalstreams.scailo_pb.ts:1347

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1335

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1339

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GeneralStreamMessagesList`](GeneralStreamMessagesList.md)

#### Defined in

src/generalstreams.scailo_pb.ts:1343
