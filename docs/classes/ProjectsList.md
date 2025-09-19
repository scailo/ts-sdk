[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProjectsList

# Class: ProjectsList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.ProjectsList

## Hierarchy

- `Message`\<[`ProjectsList`](ProjectsList.md)\>

  ↳ **`ProjectsList`**

## Table of contents

### Constructors

- [constructor](ProjectsList.md#constructor)

### Properties

- [list](ProjectsList.md#list)
- [fields](ProjectsList.md#fields)
- [runtime](ProjectsList.md#runtime)
- [typeName](ProjectsList.md#typename)

### Methods

- [clone](ProjectsList.md#clone)
- [equals](ProjectsList.md#equals)
- [fromBinary](ProjectsList.md#frombinary)
- [fromJson](ProjectsList.md#fromjson)
- [fromJsonString](ProjectsList.md#fromjsonstring)
- [getType](ProjectsList.md#gettype)
- [toBinary](ProjectsList.md#tobinary)
- [toJSON](ProjectsList.md#tojson)
- [toJson](ProjectsList.md#tojson-1)
- [toJsonString](ProjectsList.md#tojsonstring)
- [equals](ProjectsList.md#equals-1)
- [fromBinary](ProjectsList.md#frombinary-1)
- [fromJson](ProjectsList.md#fromjson-1)
- [fromJsonString](ProjectsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectsList**(`data?`): [`ProjectsList`](ProjectsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProjectsList`](ProjectsList.md)\> |

#### Returns

[`ProjectsList`](ProjectsList.md)

#### Overrides

Message\&lt;ProjectsList\&gt;.constructor

#### Defined in

[src/projects.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L426)

## Properties

### list

• **list**: [`Project`](Project.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.Project list = 1;

#### Defined in

[src/projects.scailo_pb.ts:424](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L424)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects.scailo_pb.ts:433](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L433)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects.scailo_pb.ts:431](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L431)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProjectsList"``

#### Defined in

[src/projects.scailo_pb.ts:432](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L432)

## Methods

### clone

▸ **clone**(): [`ProjectsList`](ProjectsList.md)

Create a deep copy.

#### Returns

[`ProjectsList`](ProjectsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectsList`](ProjectsList.md) \| `PlainMessage`\<[`ProjectsList`](ProjectsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProjectsList`](ProjectsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProjectsList`](ProjectsList.md)\>

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
| `a` | `undefined` \| [`ProjectsList`](ProjectsList.md) \| `PlainMessage`\<[`ProjectsList`](ProjectsList.md)\> |
| `b` | `undefined` \| [`ProjectsList`](ProjectsList.md) \| `PlainMessage`\<[`ProjectsList`](ProjectsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects.scailo_pb.ts:449](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L449)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectsList`](ProjectsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProjectsList`](ProjectsList.md)

#### Defined in

[src/projects.scailo_pb.ts:437](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L437)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectsList`](ProjectsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsList`](ProjectsList.md)

#### Defined in

[src/projects.scailo_pb.ts:441](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L441)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectsList`](ProjectsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsList`](ProjectsList.md)

#### Defined in

[src/projects.scailo_pb.ts:445](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L445)
