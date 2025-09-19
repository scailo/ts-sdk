[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DepartmentsServiceCreateRequest

# Class: DepartmentsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.DepartmentsServiceCreateRequest

## Hierarchy

- `Message`\<[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)\>

  ↳ **`DepartmentsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](DepartmentsServiceCreateRequest.md#constructor)

### Properties

- [code](DepartmentsServiceCreateRequest.md#code)
- [description](DepartmentsServiceCreateRequest.md#description)
- [entityUuid](DepartmentsServiceCreateRequest.md#entityuuid)
- [headUserId](DepartmentsServiceCreateRequest.md#headuserid)
- [name](DepartmentsServiceCreateRequest.md#name)
- [userComment](DepartmentsServiceCreateRequest.md#usercomment)
- [vaultFolderId](DepartmentsServiceCreateRequest.md#vaultfolderid)
- [fields](DepartmentsServiceCreateRequest.md#fields)
- [runtime](DepartmentsServiceCreateRequest.md#runtime)
- [typeName](DepartmentsServiceCreateRequest.md#typename)

### Methods

- [clone](DepartmentsServiceCreateRequest.md#clone)
- [equals](DepartmentsServiceCreateRequest.md#equals)
- [fromBinary](DepartmentsServiceCreateRequest.md#frombinary)
- [fromJson](DepartmentsServiceCreateRequest.md#fromjson)
- [fromJsonString](DepartmentsServiceCreateRequest.md#fromjsonstring)
- [getType](DepartmentsServiceCreateRequest.md#gettype)
- [toBinary](DepartmentsServiceCreateRequest.md#tobinary)
- [toJSON](DepartmentsServiceCreateRequest.md#tojson)
- [toJson](DepartmentsServiceCreateRequest.md#tojson-1)
- [toJsonString](DepartmentsServiceCreateRequest.md#tojsonstring)
- [equals](DepartmentsServiceCreateRequest.md#equals-1)
- [fromBinary](DepartmentsServiceCreateRequest.md#frombinary-1)
- [fromJson](DepartmentsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](DepartmentsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new DepartmentsServiceCreateRequest**(`data?`): [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)\> |

#### Returns

[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Overrides

Message\&lt;DepartmentsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/departments.scailo_pb.ts:157](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/departments.scailo_pb.ts#L157)

## Properties

### code

• **code**: `string` = `""`

The code of the department

**`Generated`**

from field: string code = 11;

#### Defined in

[src/departments.scailo_pb.ts:141](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/departments.scailo_pb.ts#L141)

___

### description

• **description**: `string` = `""`

The description of the department

**`Generated`**

from field: string description = 13;

#### Defined in

[src/departments.scailo_pb.ts:155](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/departments.scailo_pb.ts#L155)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/departments.scailo_pb.ts:113](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/departments.scailo_pb.ts#L113)

___

### headUserId

• **headUserId**: `bigint` = `protoInt64.zero`

The ID of the user who is the department head of this department

**`Generated`**

from field: uint64 head_user_id = 12;

#### Defined in

[src/departments.scailo_pb.ts:148](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/departments.scailo_pb.ts#L148)

___

### name

• **name**: `string` = `""`

The name of the department

**`Generated`**

from field: string name = 10;

#### Defined in

[src/departments.scailo_pb.ts:134](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/departments.scailo_pb.ts#L134)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/departments.scailo_pb.ts:120](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/departments.scailo_pb.ts#L120)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/departments.scailo_pb.ts:127](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/departments.scailo_pb.ts#L127)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/departments.scailo_pb.ts:164](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/departments.scailo_pb.ts#L164)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/departments.scailo_pb.ts:162](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/departments.scailo_pb.ts#L162)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DepartmentsServiceCreateRequest"``

#### Defined in

[src/departments.scailo_pb.ts:163](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/departments.scailo_pb.ts#L163)

## Methods

### clone

▸ **clone**(): [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md) \| `PlainMessage`\<[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md) \| `PlainMessage`\<[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md) \| `PlainMessage`\<[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/departments.scailo_pb.ts:186](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/departments.scailo_pb.ts#L186)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Defined in

[src/departments.scailo_pb.ts:174](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/departments.scailo_pb.ts#L174)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Defined in

[src/departments.scailo_pb.ts:178](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/departments.scailo_pb.ts#L178)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServiceCreateRequest`](DepartmentsServiceCreateRequest.md)

#### Defined in

[src/departments.scailo_pb.ts:182](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/departments.scailo_pb.ts#L182)
