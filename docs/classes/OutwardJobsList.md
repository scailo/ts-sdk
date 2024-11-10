[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsList

# Class: OutwardJobsList

Describes the message consisting of the list of outward jobs

**`Generated`**

from message Scailo.OutwardJobsList

## Hierarchy

- `Message`\<[`OutwardJobsList`](OutwardJobsList.md)\>

  ↳ **`OutwardJobsList`**

## Table of contents

### Constructors

- [constructor](OutwardJobsList.md#constructor)

### Properties

- [list](OutwardJobsList.md#list)
- [fields](OutwardJobsList.md#fields)
- [runtime](OutwardJobsList.md#runtime)
- [typeName](OutwardJobsList.md#typename)

### Methods

- [clone](OutwardJobsList.md#clone)
- [equals](OutwardJobsList.md#equals)
- [fromBinary](OutwardJobsList.md#frombinary)
- [fromJson](OutwardJobsList.md#fromjson)
- [fromJsonString](OutwardJobsList.md#fromjsonstring)
- [getType](OutwardJobsList.md#gettype)
- [toBinary](OutwardJobsList.md#tobinary)
- [toJSON](OutwardJobsList.md#tojson)
- [toJson](OutwardJobsList.md#tojson-1)
- [toJsonString](OutwardJobsList.md#tojsonstring)
- [equals](OutwardJobsList.md#equals-1)
- [fromBinary](OutwardJobsList.md#frombinary-1)
- [fromJson](OutwardJobsList.md#fromjson-1)
- [fromJsonString](OutwardJobsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsList**(`data?`): [`OutwardJobsList`](OutwardJobsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsList`](OutwardJobsList.md)\> |

#### Returns

[`OutwardJobsList`](OutwardJobsList.md)

#### Overrides

Message\&lt;OutwardJobsList\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:1215

## Properties

### list

• **list**: [`OutwardJob`](OutwardJob.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.OutwardJob list = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:1213

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:1222

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:1220

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsList"``

#### Defined in

src/outward_jobs.scailo_pb.ts:1221

## Methods

### clone

▸ **clone**(): [`OutwardJobsList`](OutwardJobsList.md)

Create a deep copy.

#### Returns

[`OutwardJobsList`](OutwardJobsList.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsList`](OutwardJobsList.md) \| `PlainMessage`\<[`OutwardJobsList`](OutwardJobsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsList`](OutwardJobsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsList`](OutwardJobsList.md)\>

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
| `a` | `undefined` \| [`OutwardJobsList`](OutwardJobsList.md) \| `PlainMessage`\<[`OutwardJobsList`](OutwardJobsList.md)\> |
| `b` | `undefined` \| [`OutwardJobsList`](OutwardJobsList.md) \| `PlainMessage`\<[`OutwardJobsList`](OutwardJobsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:1238

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsList`](OutwardJobsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsList`](OutwardJobsList.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1226

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsList`](OutwardJobsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsList`](OutwardJobsList.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1230

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsList`](OutwardJobsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsList`](OutwardJobsList.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1234
