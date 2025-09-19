[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultPermissionAddRequest

# Class: VaultPermissionAddRequest

Describes the parameters required to create a vault permission

**`Generated`**

from message Scailo.VaultPermissionAddRequest

## Hierarchy

- `Message`\<[`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)\>

  ↳ **`VaultPermissionAddRequest`**

## Table of contents

### Constructors

- [constructor](VaultPermissionAddRequest.md#constructor)

### Properties

- [entityUuid](VaultPermissionAddRequest.md#entityuuid)
- [permissionCode](VaultPermissionAddRequest.md#permissioncode)
- [refUuid](VaultPermissionAddRequest.md#refuuid)
- [roleId](VaultPermissionAddRequest.md#roleid)
- [userComment](VaultPermissionAddRequest.md#usercomment)
- [fields](VaultPermissionAddRequest.md#fields)
- [runtime](VaultPermissionAddRequest.md#runtime)
- [typeName](VaultPermissionAddRequest.md#typename)

### Methods

- [clone](VaultPermissionAddRequest.md#clone)
- [equals](VaultPermissionAddRequest.md#equals)
- [fromBinary](VaultPermissionAddRequest.md#frombinary)
- [fromJson](VaultPermissionAddRequest.md#fromjson)
- [fromJsonString](VaultPermissionAddRequest.md#fromjsonstring)
- [getType](VaultPermissionAddRequest.md#gettype)
- [toBinary](VaultPermissionAddRequest.md#tobinary)
- [toJSON](VaultPermissionAddRequest.md#tojson)
- [toJson](VaultPermissionAddRequest.md#tojson-1)
- [toJsonString](VaultPermissionAddRequest.md#tojsonstring)
- [equals](VaultPermissionAddRequest.md#equals-1)
- [fromBinary](VaultPermissionAddRequest.md#frombinary-1)
- [fromJson](VaultPermissionAddRequest.md#fromjson-1)
- [fromJsonString](VaultPermissionAddRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultPermissionAddRequest**(`data?`): [`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)\> |

#### Returns

[`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)

#### Overrides

Message\&lt;VaultPermissionAddRequest\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:378](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L378)

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:348](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L348)

___

### permissionCode

• **permissionCode**: `bigint` = `protoInt64.zero`

Stores the applicable permissions

**`Generated`**

from field: uint64 permission_code = 13;

#### Defined in

[src/vault_commons.scailo_pb.ts:376](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L376)

___

### refUuid

• **refUuid**: `string` = `""`

Stores the UUID of the underlying file or folder that this permission if applicable for

**`Generated`**

from field: string ref_uuid = 11;

#### Defined in

[src/vault_commons.scailo_pb.ts:362](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L362)

___

### roleId

• **roleId**: `bigint` = `protoInt64.zero`

Stores the ID of the role

**`Generated`**

from field: uint64 role_id = 12;

#### Defined in

[src/vault_commons.scailo_pb.ts:369](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L369)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/vault_commons.scailo_pb.ts:355](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L355)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:385](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L385)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:383](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L383)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultPermissionAddRequest"``

#### Defined in

[src/vault_commons.scailo_pb.ts:384](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L384)

## Methods

### clone

▸ **clone**(): [`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)

Create a deep copy.

#### Returns

[`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultPermissionAddRequest`](VaultPermissionAddRequest.md) \| `PlainMessage`\<[`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)\>

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
| `a` | `undefined` \| [`VaultPermissionAddRequest`](VaultPermissionAddRequest.md) \| `PlainMessage`\<[`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)\> |
| `b` | `undefined` \| [`VaultPermissionAddRequest`](VaultPermissionAddRequest.md) \| `PlainMessage`\<[`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:405](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L405)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:393](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L393)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:397](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L397)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultPermissionAddRequest`](VaultPermissionAddRequest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:401](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L401)
