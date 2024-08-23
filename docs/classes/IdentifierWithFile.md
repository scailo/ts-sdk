[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / IdentifierWithFile

# Class: IdentifierWithFile

Describes the standard identifier with a file. Useful for uploading CSV files to records identified by the identifier

**`Generated`**

from message Scailo.IdentifierWithFile

## Hierarchy

- `Message`\<[`IdentifierWithFile`](IdentifierWithFile.md)\>

  ↳ **`IdentifierWithFile`**

## Table of contents

### Constructors

- [constructor](IdentifierWithFile.md#constructor)

### Properties

- [fileContent](IdentifierWithFile.md#filecontent)
- [id](IdentifierWithFile.md#id)
- [fields](IdentifierWithFile.md#fields)
- [runtime](IdentifierWithFile.md#runtime)
- [typeName](IdentifierWithFile.md#typename)

### Methods

- [clone](IdentifierWithFile.md#clone)
- [equals](IdentifierWithFile.md#equals)
- [fromBinary](IdentifierWithFile.md#frombinary)
- [fromJson](IdentifierWithFile.md#fromjson)
- [fromJsonString](IdentifierWithFile.md#fromjsonstring)
- [getType](IdentifierWithFile.md#gettype)
- [toBinary](IdentifierWithFile.md#tobinary)
- [toJSON](IdentifierWithFile.md#tojson)
- [toJson](IdentifierWithFile.md#tojson-1)
- [toJsonString](IdentifierWithFile.md#tojsonstring)
- [equals](IdentifierWithFile.md#equals-1)
- [fromBinary](IdentifierWithFile.md#frombinary-1)
- [fromJson](IdentifierWithFile.md#fromjson-1)
- [fromJsonString](IdentifierWithFile.md#fromjsonstring-1)

## Constructors

### constructor

• **new IdentifierWithFile**(`data?`): [`IdentifierWithFile`](IdentifierWithFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`IdentifierWithFile`](IdentifierWithFile.md)\> |

#### Returns

[`IdentifierWithFile`](IdentifierWithFile.md)

#### Overrides

Message\&lt;IdentifierWithFile\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:2557

## Properties

### fileContent

• **fileContent**: `Uint8Array`

The content of the file

**`Generated`**

from field: bytes file_content = 10;

#### Defined in

src/base.scailo_pb.ts:2555

___

### id

• **id**: `bigint` = `protoInt64.zero`

ID of the resource

**`Generated`**

from field: uint64 id = 1;

#### Defined in

src/base.scailo_pb.ts:2548

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:2564

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:2562

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.IdentifierWithFile"``

#### Defined in

src/base.scailo_pb.ts:2563

## Methods

### clone

▸ **clone**(): [`IdentifierWithFile`](IdentifierWithFile.md)

Create a deep copy.

#### Returns

[`IdentifierWithFile`](IdentifierWithFile.md)

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
| `other` | `undefined` \| ``null`` \| [`IdentifierWithFile`](IdentifierWithFile.md) \| `PlainMessage`\<[`IdentifierWithFile`](IdentifierWithFile.md)\> |

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

▸ **getType**(): `MessageType`\<[`IdentifierWithFile`](IdentifierWithFile.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`IdentifierWithFile`](IdentifierWithFile.md)\>

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
| `a` | `undefined` \| [`IdentifierWithFile`](IdentifierWithFile.md) \| `PlainMessage`\<[`IdentifierWithFile`](IdentifierWithFile.md)\> |
| `b` | `undefined` \| [`IdentifierWithFile`](IdentifierWithFile.md) \| `PlainMessage`\<[`IdentifierWithFile`](IdentifierWithFile.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:2581

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`IdentifierWithFile`](IdentifierWithFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`IdentifierWithFile`](IdentifierWithFile.md)

#### Defined in

src/base.scailo_pb.ts:2569

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`IdentifierWithFile`](IdentifierWithFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithFile`](IdentifierWithFile.md)

#### Defined in

src/base.scailo_pb.ts:2573

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`IdentifierWithFile`](IdentifierWithFile.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`IdentifierWithFile`](IdentifierWithFile.md)

#### Defined in

src/base.scailo_pb.ts:2577
