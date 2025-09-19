[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProjectContactsList

# Class: ProjectContactsList

Describes the message consisting of the list of project contacts

**`Generated`**

from message Scailo.ProjectContactsList

## Hierarchy

- `Message`\<[`ProjectContactsList`](ProjectContactsList.md)\>

  ↳ **`ProjectContactsList`**

## Table of contents

### Constructors

- [constructor](ProjectContactsList.md#constructor)

### Properties

- [list](ProjectContactsList.md#list)
- [fields](ProjectContactsList.md#fields)
- [runtime](ProjectContactsList.md#runtime)
- [typeName](ProjectContactsList.md#typename)

### Methods

- [clone](ProjectContactsList.md#clone)
- [equals](ProjectContactsList.md#equals)
- [fromBinary](ProjectContactsList.md#frombinary)
- [fromJson](ProjectContactsList.md#fromjson)
- [fromJsonString](ProjectContactsList.md#fromjsonstring)
- [getType](ProjectContactsList.md#gettype)
- [toBinary](ProjectContactsList.md#tobinary)
- [toJSON](ProjectContactsList.md#tojson)
- [toJson](ProjectContactsList.md#tojson-1)
- [toJsonString](ProjectContactsList.md#tojsonstring)
- [equals](ProjectContactsList.md#equals-1)
- [fromBinary](ProjectContactsList.md#frombinary-1)
- [fromJson](ProjectContactsList.md#fromjson-1)
- [fromJsonString](ProjectContactsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectContactsList**(`data?`): [`ProjectContactsList`](ProjectContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProjectContactsList`](ProjectContactsList.md)\> |

#### Returns

[`ProjectContactsList`](ProjectContactsList.md)

#### Overrides

Message\&lt;ProjectContactsList\&gt;.constructor

#### Defined in

[src/projects.scailo_pb.ts:1404](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L1404)

## Properties

### list

• **list**: [`ProjectContact`](ProjectContact.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ProjectContact list = 1;

#### Defined in

[src/projects.scailo_pb.ts:1402](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L1402)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects.scailo_pb.ts:1411](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L1411)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects.scailo_pb.ts:1409](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L1409)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProjectContactsList"``

#### Defined in

[src/projects.scailo_pb.ts:1410](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L1410)

## Methods

### clone

▸ **clone**(): [`ProjectContactsList`](ProjectContactsList.md)

Create a deep copy.

#### Returns

[`ProjectContactsList`](ProjectContactsList.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectContactsList`](ProjectContactsList.md) \| `PlainMessage`\<[`ProjectContactsList`](ProjectContactsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProjectContactsList`](ProjectContactsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProjectContactsList`](ProjectContactsList.md)\>

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
| `a` | `undefined` \| [`ProjectContactsList`](ProjectContactsList.md) \| `PlainMessage`\<[`ProjectContactsList`](ProjectContactsList.md)\> |
| `b` | `undefined` \| [`ProjectContactsList`](ProjectContactsList.md) \| `PlainMessage`\<[`ProjectContactsList`](ProjectContactsList.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects.scailo_pb.ts:1427](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L1427)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectContactsList`](ProjectContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProjectContactsList`](ProjectContactsList.md)

#### Defined in

[src/projects.scailo_pb.ts:1415](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L1415)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectContactsList`](ProjectContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectContactsList`](ProjectContactsList.md)

#### Defined in

[src/projects.scailo_pb.ts:1419](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L1419)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectContactsList`](ProjectContactsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectContactsList`](ProjectContactsList.md)

#### Defined in

[src/projects.scailo_pb.ts:1423](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/projects.scailo_pb.ts#L1423)
