[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsFamiliesServiceUpdateRequest

# Class: EquationsFamiliesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.EquationsFamiliesServiceUpdateRequest

## Hierarchy

- `Message`\<[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)\>

  ↳ **`EquationsFamiliesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsFamiliesServiceUpdateRequest.md#constructor)

### Properties

- [description](EquationsFamiliesServiceUpdateRequest.md#description)
- [id](EquationsFamiliesServiceUpdateRequest.md#id)
- [name](EquationsFamiliesServiceUpdateRequest.md#name)
- [notifyUsers](EquationsFamiliesServiceUpdateRequest.md#notifyusers)
- [userComment](EquationsFamiliesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](EquationsFamiliesServiceUpdateRequest.md#vaultfolderid)
- [fields](EquationsFamiliesServiceUpdateRequest.md#fields)
- [runtime](EquationsFamiliesServiceUpdateRequest.md#runtime)
- [typeName](EquationsFamiliesServiceUpdateRequest.md#typename)

### Methods

- [clone](EquationsFamiliesServiceUpdateRequest.md#clone)
- [equals](EquationsFamiliesServiceUpdateRequest.md#equals)
- [fromBinary](EquationsFamiliesServiceUpdateRequest.md#frombinary)
- [fromJson](EquationsFamiliesServiceUpdateRequest.md#fromjson)
- [fromJsonString](EquationsFamiliesServiceUpdateRequest.md#fromjsonstring)
- [getType](EquationsFamiliesServiceUpdateRequest.md#gettype)
- [toBinary](EquationsFamiliesServiceUpdateRequest.md#tobinary)
- [toJSON](EquationsFamiliesServiceUpdateRequest.md#tojson)
- [toJson](EquationsFamiliesServiceUpdateRequest.md#tojson-1)
- [toJsonString](EquationsFamiliesServiceUpdateRequest.md#tojsonstring)
- [equals](EquationsFamiliesServiceUpdateRequest.md#equals-1)
- [fromBinary](EquationsFamiliesServiceUpdateRequest.md#frombinary-1)
- [fromJson](EquationsFamiliesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](EquationsFamiliesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsFamiliesServiceUpdateRequest**(`data?`): [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)\> |

#### Returns

[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Overrides

Message\&lt;EquationsFamiliesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/equations_families.scailo_pb.ts:374](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L374)

## Properties

### description

• **description**: `string` = `""`

The description of the equation family

**`Generated`**

from field: string description = 13;

#### Defined in

[src/equations_families.scailo_pb.ts:372](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L372)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/equations_families.scailo_pb.ts:330](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L330)

___

### name

• **name**: `string` = `""`

The name of the equation family

**`Generated`**

from field: string name = 10;

#### Defined in

[src/equations_families.scailo_pb.ts:365](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L365)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/equations_families.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L342)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/equations_families.scailo_pb.ts:323](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L323)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/equations_families.scailo_pb.ts:358](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L358)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_families.scailo_pb.ts:381](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L381)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_families.scailo_pb.ts:379](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L379)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsFamiliesServiceUpdateRequest"``

#### Defined in

[src/equations_families.scailo_pb.ts:380](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L380)

## Methods

### clone

▸ **clone**(): [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md) \| `PlainMessage`\<[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md) \| `PlainMessage`\<[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md) \| `PlainMessage`\<[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_families.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L402)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Defined in

[src/equations_families.scailo_pb.ts:390](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L390)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Defined in

[src/equations_families.scailo_pb.ts:394](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L394)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsFamiliesServiceUpdateRequest`](EquationsFamiliesServiceUpdateRequest.md)

#### Defined in

[src/equations_families.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/equations_families.scailo_pb.ts#L398)
