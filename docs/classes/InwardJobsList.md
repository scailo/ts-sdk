[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsList

# Class: InwardJobsList

Describes the message consisting of the list of inward jobs

**`Generated`**

from message Scailo.InwardJobsList

## Hierarchy

- `Message`\<[`InwardJobsList`](InwardJobsList.md)\>

  ↳ **`InwardJobsList`**

## Table of contents

### Constructors

- [constructor](InwardJobsList.md#constructor)

### Properties

- [list](InwardJobsList.md#list)
- [fields](InwardJobsList.md#fields)
- [runtime](InwardJobsList.md#runtime)
- [typeName](InwardJobsList.md#typename)

### Methods

- [clone](InwardJobsList.md#clone)
- [equals](InwardJobsList.md#equals)
- [fromBinary](InwardJobsList.md#frombinary)
- [fromJson](InwardJobsList.md#fromjson)
- [fromJsonString](InwardJobsList.md#fromjsonstring)
- [getType](InwardJobsList.md#gettype)
- [toBinary](InwardJobsList.md#tobinary)
- [toJSON](InwardJobsList.md#tojson)
- [toJson](InwardJobsList.md#tojson-1)
- [toJsonString](InwardJobsList.md#tojsonstring)
- [equals](InwardJobsList.md#equals-1)
- [fromBinary](InwardJobsList.md#frombinary-1)
- [fromJson](InwardJobsList.md#fromjson-1)
- [fromJsonString](InwardJobsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsList**(`data?`): [`InwardJobsList`](InwardJobsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsList`](InwardJobsList.md)\> |

#### Returns

[`InwardJobsList`](InwardJobsList.md)

#### Overrides

Message\&lt;InwardJobsList\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:1298

## Properties

### list

• **list**: [`InwardJob`](InwardJob.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.InwardJob list = 1;

#### Defined in

src/inward_jobs.scailo_pb.ts:1296

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:1305

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:1303

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsList"``

#### Defined in

src/inward_jobs.scailo_pb.ts:1304

## Methods

### clone

▸ **clone**(): [`InwardJobsList`](InwardJobsList.md)

Create a deep copy.

#### Returns

[`InwardJobsList`](InwardJobsList.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsList`](InwardJobsList.md) \| `PlainMessage`\<[`InwardJobsList`](InwardJobsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsList`](InwardJobsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsList`](InwardJobsList.md)\>

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
| `a` | `undefined` \| [`InwardJobsList`](InwardJobsList.md) \| `PlainMessage`\<[`InwardJobsList`](InwardJobsList.md)\> |
| `b` | `undefined` \| [`InwardJobsList`](InwardJobsList.md) \| `PlainMessage`\<[`InwardJobsList`](InwardJobsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:1321

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsList`](InwardJobsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsList`](InwardJobsList.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:1309

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsList`](InwardJobsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsList`](InwardJobsList.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:1313

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsList`](InwardJobsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsList`](InwardJobsList.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:1317
