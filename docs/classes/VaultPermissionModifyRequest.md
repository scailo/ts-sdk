[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultPermissionModifyRequest

# Class: VaultPermissionModifyRequest

Describes the parameters required to modify a vault permission

**`Generated`**

from message Scailo.VaultPermissionModifyRequest

## Hierarchy

- `Message`\<[`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)\>

  ↳ **`VaultPermissionModifyRequest`**

## Table of contents

### Constructors

- [constructor](VaultPermissionModifyRequest.md#constructor)

### Properties

- [permissionCode](VaultPermissionModifyRequest.md#permissioncode)
- [userComment](VaultPermissionModifyRequest.md#usercomment)
- [uuid](VaultPermissionModifyRequest.md#uuid)
- [fields](VaultPermissionModifyRequest.md#fields)
- [runtime](VaultPermissionModifyRequest.md#runtime)
- [typeName](VaultPermissionModifyRequest.md#typename)

### Methods

- [clone](VaultPermissionModifyRequest.md#clone)
- [equals](VaultPermissionModifyRequest.md#equals)
- [fromBinary](VaultPermissionModifyRequest.md#frombinary)
- [fromJson](VaultPermissionModifyRequest.md#fromjson)
- [fromJsonString](VaultPermissionModifyRequest.md#fromjsonstring)
- [getType](VaultPermissionModifyRequest.md#gettype)
- [toBinary](VaultPermissionModifyRequest.md#tobinary)
- [toJSON](VaultPermissionModifyRequest.md#tojson)
- [toJson](VaultPermissionModifyRequest.md#tojson-1)
- [toJsonString](VaultPermissionModifyRequest.md#tojsonstring)
- [equals](VaultPermissionModifyRequest.md#equals-1)
- [fromBinary](VaultPermissionModifyRequest.md#frombinary-1)
- [fromJson](VaultPermissionModifyRequest.md#fromjson-1)
- [fromJsonString](VaultPermissionModifyRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultPermissionModifyRequest**(`data?`): [`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)\> |

#### Returns

[`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)

#### Overrides

Message\&lt;VaultPermissionModifyRequest\&gt;.constructor

#### Defined in

src/vault_commons.scailo_pb.ts:438

## Properties

### permissionCode

• **permissionCode**: `bigint` = `protoInt64.zero`

Stores the applicable permissions

**`Generated`**

from field: uint64 permission_code = 13;

#### Defined in

src/vault_commons.scailo_pb.ts:436

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/vault_commons.scailo_pb.ts:429

___

### uuid

• **uuid**: `string` = `""`

The UUID of the permission

**`Generated`**

from field: string uuid = 1;

#### Defined in

src/vault_commons.scailo_pb.ts:422

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vault_commons.scailo_pb.ts:445

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vault_commons.scailo_pb.ts:443

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultPermissionModifyRequest"``

#### Defined in

src/vault_commons.scailo_pb.ts:444

## Methods

### clone

▸ **clone**(): [`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)

Create a deep copy.

#### Returns

[`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md) \| `PlainMessage`\<[`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)\>

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
| `a` | `undefined` \| [`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md) \| `PlainMessage`\<[`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)\> |
| `b` | `undefined` \| [`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md) \| `PlainMessage`\<[`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vault_commons.scailo_pb.ts:463

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)

#### Defined in

src/vault_commons.scailo_pb.ts:451

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)

#### Defined in

src/vault_commons.scailo_pb.ts:455

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultPermissionModifyRequest`](VaultPermissionModifyRequest.md)

#### Defined in

src/vault_commons.scailo_pb.ts:459
